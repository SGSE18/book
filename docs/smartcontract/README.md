# Smart Contracts
Autor: Cem Basoglu

Mit der Erweiterung der Blockchain und Distributed Ledger Technologien um [Smart
Contracts](/blockchain/usecases/#smart-contracts), ergeben sich vielseitige
Möglichkeiten für neue und bestehende Anwendungsbereiche
[[REYN18](#ref_reyn18), [KIM18](#ref_kim18), [STRU18](#ref_stru18)]. Wie mit
jeder neuen Technologie, aus denen sich neue Möglichkeiten ergeben, gehen diese
auch bei Smart Contracts mit neuen Risiken einher. Neben rechtlicher und
finanzieller Risiken, nehmen Fehler im Design bzw. der Implementierung von
Smart Contracts, einen weitaus größeren Stellenwert ein. Im Gegensatz zu
klassischen Applikationen, lassen sich einmal veröffentlichte Smart Contracts
nicht mehr updaten und auch durch die Fehler verursachten Änderungen am
Distributed Ledger nicht mehr rückgängig machen. In diesem Zusammenhang wirkt
die positive [Eigenschaft](/blockchain/technologie/#eigenschaften-einer-blockchain)
von Distributed Leders, der Unveränderlichkeit von Transaktionsblöcken,
kontraproduktiv auf die Entwicklung von Smart Contracts.

## Vulnerabilities
Da Smart Contracts in der Regel ebenfalls Vermögenswerte verwalten, ist es
essenziell, mögliche Schwachstellen bereits im voraus zu erkennen. Dabei liegen
die meisten Schwachstellen nicht direkt in dem implementierten Codeblock,
sondern ergeben sich erst durch die unberücksichtigte Wechselwirkung, mit der
zugrunde liegenden Smart Contract Plattform.

Wie fatal die Folgen dieser Schwachstellen sind, zeigen die jüngsten Ereignisse.
So konnten Angreifer, Ethereum Tokens im Wert von rund 60 Millionen Dollar,
durch die Ausnutzung einer Schwachstelle im DAO (Dezentrale Autonome
Organisation) Smart Contract, entwenden [[CAST16](ref_cast16)]. In einem
anderen Fall sorgte eine Schwachstelle im Smart Contract dafür, dass Tokens im
Wert von rund einer halben Millionen Dollar nicht mehr ausgezahlt werden
konnten [[GOVE16](ref_gove16)].

<!--
https://vessenes.com/more-ethereum-attacks-race-to-empty-is-the-real-deal/s
-->

Da Smart Contracts erst in den vergangen Jahren an Bedeutung gewonnen haben,
entstehen derartige Schwachstellen, durch den Mangel an Erfahrungen um diese
zu erkennen und zu vermeiden. In diesem Abschnitt werden daher zunächst die
häufigsten Fallstricke betrachtet und anschließend mögliche Vorgehensweisen
präsentiert.

### Call-Stack Tiefe
Die Ethereum Virtual Machine (EVM) begrenzt die Call-Stack Tiefe einer
Transaktion auf 1024 Aufrufe. Somit kann ein Angreifer die Call.Stack Tiefe
einer Transaktion, mittels rekrusiven Aufrufen, künstlich vor die Limitierung
positionieren, um anschliessend Fehler in der darauf folgenden zu Verarbeitung
der Transaktion zu provozieren.

```javascript
contract auction {
  mapping(address => uint) refunds;
  // [...]
  function withdrawRefund(address recipient) {
    uint refund = refunds[recipient];
    refunds[recipient] = 0;
    recipient.send(refund);
  }
}
```

Obwohl die Funktion in sich keine Fehler aufweist und auch dem Empfänger
vertraut werden kann, schlägt der Aufruf `recipient.send(refund)` fehl,
da `send(...)` ebenfalls die Call Stack Tiefe erhöht. Da jedoch alle zuvor
ausgeführten Änderungen erfolgreich waren, wird das Konto des Empfängers auf 0
gesetzt ohne den Betrag tatsächlich transferiert zu haben.

Um eine derartige Schwachstelle zu vermeiden, ist Empfehlenswert den
Rückgabewert der `send(...)`-Funktion auszuwerten und die Ausführung wie folgt
mit `throw` zu terminieren.

```javascript
if (!recipient.send(refund)) { throw; }
```

Durch die Terminierung mit `throw`, werden durch die Transaktion, keine State-
Änderungen in den Distributed Ledger übernommen. Damit bleibt das Guthaben
des Empfängers auch dann erhalten, wenn der darauf folgende Transfer
fehlschlägt. Durch diesen Angriff kann sich der Angreifer zwar keinen
finanziellen Vorteil verschaffen, aber einen Schaden bei den Guthabenbesitzern
verursachen.

### Re-Entrency und Cross-function Race Conditions
Auf den ersten Blick erfüllen beiden Funktionen im folgenden Smart Contract die
an die jeweilige Funktion gestellten Anforderungen. Der Benutzer darf mit der
Funktion `transfer(...)` einen Betrag, der sein eigenes Guthaben nicht
übersteigt, einer beliebige anderen Adresse zuordnen und mit der Funktion
`withdrawBalance()` das gesamte eigene Guthaben, an die hinterlegte Adresse
überweisen.

```javascript
contract auction {
  mapping (address => uint) private userBalances;
  function transfer(address to, uint amount) {
      if (userBalances[msg.sender] >= amount) {
         userBalances[to] += amount;
         userBalances[msg.sender] -= amount;
      }
  }
  function withdrawBalance() public {
      uint amountToWithdraw = userBalances[msg.sender];
      msg.sender.send(amountToWithdraw);
      userBalances[msg.sender] = 0;
  }
}
```

Mit der sogenannten Re-Entrency Attacke, kann sich ein Angreifer das gesamte
Guthaben in dem Smart Contract (Guthaben aller Benutzer) auszahlen lassen,
in dem er einen eigenen Smart Contract mit der Default-Funktion implementiert.
Die Default-Funktion in einem Smart Contract wird aufgerufen, sobald eine
Transaktion an die Smart Contract Adresse eingeht. Die Default-Funktion ruft
wiederum erneut die `withdrawBalance()`-Funktion auf. Da in der
`withdrawBalance()`-Funktion das Guthaben des Angreifers an die böswillige
Smart Contract Adresse überwiesen wird, ergibt sich somit eine rekursive
Schleife zwischen den beiden Smart Contracts. Damit wird die Zeile
`userBalances[msg.sender] = 0` erst erreicht, wenn das gesamte Guthaben im
Smart Contract aufgebraucht ist, wodurch die `send(...)`-Funktion fehlschlägt.

Statt dem erneuten Aufruf der `withdrawBalance()`-Funktion, kann der Angreifer
auch eine Cross-function Race Condition provozieren. Dazu wird erneut ein
böswilliger Smart Contract implementiert und stattdessen diesmal die
`transfer(...)`-Funktion in der Default-Funktion aufgerufen. Somit wird das
Guthaben einer anderen Adresse zugeordnet, bevor das seiner Adresse zugeordnete
Guthaben auf 0 gesetzt wird.

Beide Schwachstellen lassen sich beheben, in dem das Guthaben der aufrufenden
Adresse vor der Ausführung der Überweisung auf 0 gesetzt wird. Um im Fehlerfall
das Guthaben wiederherzustellen, empfiehlt es sich zusätzlich den Rückgabewert
der `send()`-Funktion zu prüfen, die Ausführung mit `throw` zu terminieren und
damit alle durch die Transaktion entstanden Änderungen am State, rückgängig zu
machen.

### Denial of Service
Im folgenden Smart Contract sollen die Teilnehmer einer Auktion, mit dem Aufruf
der `bid()`-Funktion an der Auktion teilnehmen können. Dazu muss der Teilnehmer
einen Betrag größer als das aktuelle Höchstgebot überweisen. Wird das aktuelle
Höchstgebot überboten, erhält der alte Höchstbietende seinen zuvor überwiesenen
Betrag zurück. Bei der Implementierung werden alle zuvor genannten
Vorgehensweisen, wie die Prüfung des Rückgabewerts der `send(...)`-Funktion
und die Terminierung mit `throw` im Fehlerfall, entsprechend in der
`bid()`-Funktion implementiert.

```javascript
contract auction {
  address currentLeader;
  uint highestBid;

  function bid() {
      if (msg.value <= highestBid) { throw; }
      if (!currentLeader.send(highestBid)) { throw; }

      currentLeader = msg.sender;
      highestBid = msg.value;
  }
}
```

In diesem Fall kann ein Angreifer jedoch die Abgabe weitere Gebote blockieren,
in dem er einen Smart Contract mit einer Default-Funktion implementiert, die
immer zu einem Fehler, z.B durch die Überschreitung der Call Stack Tiefe, führt.
Wird nun ein neues Höchstgebot abgegeben, erhält der aktuelle Höchstbieter
(Angreifer) sein Gebot wieder, wodurch die Default-Funktion im Smart Contract
des Angreifers aufgerufen wird. Da diese jedoch fehlschlägt, liefert `send(...)`
einen Fehler zurück wodurch die Ausführung terminiert und alle Änderungen
rückgängig gemacht werden. Somit ist der Angreifer weiterhin der Höchstbietende
und neue Höchstgebote schlagen immer fehl.

Eine mögliche Lösung besteht darin, in diesem Fall keine Terminierung durch den
`throw` im Fehlerfall vorzunehmen. Alternativ kann aber auch eine Liste der
alten Höchstbietenden und deren Gebote geführt und ganz auf die automatische
Auszahlung verzichtet werden. Über eine zusätzliche Funktion können sich
anschließend die in dieser Liste geführten Höchstbieter ihr Gebot erstatten
lassen.

## Sicherheitsmaßnahmen
Aus den bisherigen Erfahrungen mit Smart Contracts, im speziellen mit der
Ethereum Virtual Machine, haben sich bestimme Vorgehensweisen und -muster
ergeben. Einige wurden bereits in dem vorangegangen Abschnitten vorgestellt und
sollen in diesem Abschnitt weiter generalisiert werden.

### Checks-Effects-Interactions-Pattern
Smart Contracts können direkt oder indirekt mit anderen Smart Contracts im
Distributed Ledger interagieren. Unabhängig davon, ob diese Interaktion
beabsichtigt ist oder durch die Default-Funktion eines Zahlungsempfänger
herbei geführt wird, sollte in jedem Fall bedacht werden dass durch den Aufruf
einer externen Funktion, auch der Kontrollfluss an diese übergeben wird. Um die
Risiken die damit einhergehen zu minimieren, kann das
Checks-Effects-Interactions-Muster angewandt werden [[VOLL18](#ref_voll18)].

Diese ähneln den Coding Standards der *klassischen* Softwareentwicklung
[[SEAC18](#ref_seac18)] mit der Ausnahme, dass die Änderungen am State schon
vorgenommen werden, bevor die damit verbundene Aktion erfolgreich durchgeführt
wurde. Das Muster wird in folgende Teilschritte unterteilt.

1. **Eingabe Parameter und State prüfen**

   Alle Eingabe Parameter der Funktion werden zunächst validiert und ggf. mit
   dem State abgeglichen. Dazu zählt die Prüfung ob der Aufrufer überhaupt
   diese Funktion aufrufen darf oder z.B. über genug Guthaben verfügt die er in
   den Eingabe Parametern anfordert.
2. **State Änderungen vornehmen**

   Nach erfolgreicher Validierung der Parameter, werden anschließend die
   Änderungen am State vorgenommen, wie z.B. die
3. **Smart Contract Interaktionen durchführen**

   Erst zum Schluss werden alle Aktionen durchgeführt, die zu einer direkten
   oder indirekten Interaktion mit anderen Smart Contracts führen können. Im
   Fehlerfall wird die Ausführung mit einem `throw` beendet, sodass Änderungen
   am State aus Schritt 2 rückgängig gemacht werden.
   Wie in Beispiel [DoS](#denial-of-service) demonstriert, hängt die
   Terminierung mit `throw` jedoch stark vom Anwendungsfall ab.

### Update- und andere Schutzmechanismen
Um auf neu entdeckte Sicherheitsrisiken reagieren zu können, bieten sich diverse
Maßnahmen an. Zum einen lassen sich Schutzmechanismen implementieren, die im
Ernstfall die Ausführung bestimmter Funktionen im Smart Contracts pausieren und
zum anderen können z.B. Auszahlungen in der Höhe oder Häufigkeit gedrosselt
werden, um im Ernstfall genug Zeit für Reaktionen zu haben. Zusätzlich kann ein
externer Dienst ausserhalb des Distributed Ledgers implementiert werden, der in
regelmäßigen Abständen die State-Integrität des Smart Contracts prüft und bei
unschlüßigen Zuständen die Verantwortlichen benachrichtigt.

Zwar helfen diese Mechanismen dabei verdächtige Aktivität im Smart Contract zu
erkennen, um die Sicherheitslücke jedoch zu schliessen ist es notwendig den
Smart Contract updaten zu können. Da dies, wie einleitend erwähnt, nicht von der
Ethereum Plattform vorgesehen ist, muss entsprechende Funktionalität im Smart
Contract implementiert werden. Hierzu kann eine Funktion implementiert werden,
die nur von bestimmten Personen (z.B. dem Besitzer) aufgerufen werden darf und
das aktuelle Guthaben und den State des Smart Contracts, an einen neuen Smart
Contract transferiert.

### Formale Verifikationen

[[NIKO18](#ref_niko18)]

https://media.consensys.net/how-formal-verification-can-ensure-flawless-smart-contracts-cbda8ad99bd1

http://antoine.delignat-lavaud.fr/doc/plas16.pdf

https://github.com/pirapira/ethereum-formal-verification-overview

## Referenzen

<a name="ref_cast16">[CAST16]</a>: Michael del Castillo: The DAO Attacked: Code Issue Leads to $60 Million Ether Theft

<a name="ref_gove16">[GOVE16]</a>: Governmental’s 1100eth jackpot payout is stuck because it uses too much gas. [Online](https://www.reddit.com/r/ethereum/comments/4ghzhv/)

<a name="ref_kim18">[KIM18]</a>: Henry M., Kim Marek Laskowski: Toward an ontology‐driven blockchain design for supply‐chain provenance.

<a name="ref_niko18">[NIKO18]</a>: Ivica Nikolic, Aashish Kolluri, Ilya Sergey: Finding The Greedy, Prodigal, and Suicidal Contracts at Scale

<a name="ref_reyn18">[REYN18]</a>: Ana Reyna, Cristian Martín, Jaime Chen, Enrique Soler, Manuel Díaz: On blockchain and its integration with IoT. Challenges and opportunities.

<a name="ref_seac18">[SEAC18]</a>: Robert Seacord: Top 10 Secure Coding Practices. [Onlne](https://wiki.sei.cmu.edu/confluence/display/seccode/Top+10+Secure+Coding+Practices)

<a name="ref_stru18">[STRU18]</a>: Strugar,  D., Hussain, R., Mazzara, M., Rivera, V.: M2M billing for electric autonomous vehicles.

<a name="ref_voll18">[VOLL18]</a>: Franz Volland: Checks Effects Interactions. [Online](https://fravoll.github.io/solidity-patterns/checks_effects_interactions.html)
