# Smart Contracts
Autor: Cem Basoglu

Mit der Erweiterung der Blockchain und Distributed Ledger Technologien um [Smart
Contracts](/blockchain/usecases/#smart-contracts), ergeben sich vielseitige
Möglichkeiten für neue und bestehende Anwendungsbereiche
[[REYN18](#ref_reyn18), [KIM18](#ref_kim18), [STRU18](#ref_stru18)]. Wie mit
jeder neuen Technologie, aus denen sich neue Möglichkeiten ergeben, gehen diese
auch bei Smart Contracts mit neuen Risiken einher. Neben rechtlicher und
finanzieller Risiken, nehmen Fehler im Design bzw. der Implementierung von
Smart Contracts einen weitaus größeren Stellenwert ein. Im Gegensatz zu
klassischen Applikationen, lassen sich einmal veröffentlichte Smart Contracts
nicht mehr updaten und auch durch die Fehler verursachte Änderungen am
Distributed Ledger nicht mehr rückgängig machen. In diesem Zusammenhang wirkt
die positive [Eigenschaft](blockchain/technologie/#eigenschaften-einer-blockchain)
von Distributed Leders, der Unveränderlichkeit von Transaktionsblöcken,
kontraproduktiv auf die Entwicklung von Smart Contracts.

## Vulnerabilities
Da Smart Contracts in der Regel ebenfalls Vermögenswerte verwalten, ist es
essenziell mögliche Schwachstellen bereits im voraus zu erkennen. Dabei liegen
die meisten Schwachstellen nicht direkt in dem implementierten Codeblock,
sondern ergeben sich erst durch die unberücksichtigte Wechselwirkung mit der
zugrunde liegenden Smart Contract Plattform.

### Typische Schwachstellen
Da Smart Contracts erst in den vergangen Jahren an Bedeutung gewonnen haben,
entstehen derartige Schwachstellen durch den Mangel an Erfahrungen um diese
zu erkennen und zu vermeiden. In diesem Abschnitt werden daher zunächst die
häufigsten Fallstricke betrachtet.

#### Call Depth Attack
Die Ethereum Virtual Machine (EVM) begrenzt die Call Stack Tiefe einer
Transaktion auf 1024 Aufrufe. Somit kann ein Angreifer die Transaktion mit 1023
rekursiven Aufrufen zunächst an die Grenze der Limitierung bringen, um
schliesslich die folgende anfällige Funktion aufzurufen.

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

Durch die Terminierung mit `throw`, werden keine State Änderungen durch die
Transaktion in den Distributed Ledger übernommen. Damit bleibt das Guthaben
des Empfängers erhalten, wenn der darauf folgende Transfer fehlschlägt. Durch
diesen Angriff kann der Angreifer sich zwar keinen finanziellen Vorteil
verschaffen, aber einen Schaden bei den Guthabenbesitzern verursachen.

#### Re-Entrency und Cross-function Race Conditions
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
in dem er einen eigenen Smart Contract mit der Default-Funktion implementiert,
in der wiederum erneut die `withdrawBalance()`-Funktion aufgerufen wird. Die
Default-Funktion in einem Smart Contract wird aufgerufen, sobald eine
Transaktion auf der Smart Contract Adresse eingeht. Da in der
`withdrawBalance()`-Funktion das Guthaben des Angreifers an die böswillige Smart
Contract Adresse überwiesen wird, ergibt sich somit eine rekursive Schleife
zwischen den beiden Smart Contracts und die Zeile `userBalances[msg.sender] = 0`
wird erst erreicht, wenn das gesamte Guthaben im Smart Contract aufgebraucht
ist.

Statt dem erneuten Aufruf der `withdrawBalance()`-Funktion, kann der Angreifer
auch eine Cross-function Race Condition erzeugen. Dazu wird erneut ein
böswilliger Smart Contract implementiert und diesmal die
`transfer(...)`-Funktion in der Default-Funktion aufgerufen. Somit wird das
Guthaben einer anderen Adresse zugeordnet, bevor das seiner Adresse zugeordnete
Guthaben auf 0 gesetzt wird.

Beide Schwachstellen lassen sich beheben, in dem das Guthaben der aufrufenden
Adresse vor der Ausführung der Überweisung auf 0 gesetzt wird. Um im Fehlerfall
das Guthaben wiederherzustellen, empfiehlt es sich zusätzlich den Rückgabewert
der `send()`-Funktion zu prüfen, die Ausführung mit `throw` zu terminieren und
damit alle durch die Transaktion entstanden Änderungen am State rückgängig zu
machen.

#### DoS with unexpected throws
Im folgenden Smart Contract sollen die Teilnehmer mit der `bid()`-Funktion
an einer Auktion teilnehmen können. Dazu muss der Teilnehmer einen Betrag
größer als das aktuelle Höchstgebot überweisen. Wird ein Höchstgebot überboten
erhält der alte Höchstbietende seinen zuvor überwiesenen Betrag zurück.
Bei der Implementierung werden alle alle zuvor genannten Vorgehensweisen, wie
die Prüfung des Rückgabewerts der `send(...)`-Funktion und die Terminierung mit
`throw` im Fehlerfall, berücksichtigt.

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


### Honey Pots

#### MultiplicatorX3
https://etherscan.io/address/0x5aa88d2901c68fda244f1d0584400368d2c8e739#code

```javascript
pragma solidity ^0.4.18;

contract MultiplicatorX3
{
    address public Owner = msg.sender;

    function() public payable{}

    function withdraw() payable public {
        require(msg.sender == Owner);
        Owner.transfer(this.balance);
    }
    function Command(address adr,bytes data) payable public {
        require(msg.sender == Owner);
        adr.call.value(msg.value)(data);
    }
    function multiplicate(address adr) public payable {
        if(msg.value >= this.balance)
            adr.transfer(this.balance + msg.value);
    }
}
```

#### TransferLog
https://etherscan.io/address/0xb5e1b1ee15c6fa0e48fce100125569d430f1bd12#code

```javascript
pragma solidity ^0.4.19;
contract Private_Bank {
    mapping (address => uint) public balances;
    uint public MinDeposit = 1 ether;
    Log TransferLog;

    function Private_Bank(address _log) {
        TransferLog = Log(_log);
    }
    function Deposit() public payable {
        if(msg.value > MinDeposit) {
            balances[msg.sender]+=msg.value;
            TransferLog.AddMessage(msg.sender,msg.value,"Deposit");
        }
    }
    function CashOut(uint _am) public payable {
        if(_am<=balances[msg.sender]) {    
            if(msg.sender.call.value(_am)()) {
                balances[msg.sender]-=_am;
                TransferLog.AddMessage(msg.sender,_am,"CashOut");
            }
        }
    }
    function() public payable{}    

}
contract Log {
    struct Message {
        address Sender;
        string  Data;
        uint Val;
        uint  Time;
    }
    Message[] public History;
    Message LastMsg;
    function AddMessage(address _adr,uint _val,string _data) public {
        LastMsg.Sender = _adr;
        LastMsg.Time = now;
        LastMsg.Val = _val;
        LastMsg.Data = _data;
        History.push(LastMsg);
    }
}
```

### Empfehlungen

#### Checks-Effects-Interactions Pattern

#### Formal verification methods

https://arxiv.org/pdf/1802.06038.pdf

https://media.consensys.net/how-formal-verification-can-ensure-flawless-smart-contracts-cbda8ad99bd1

http://antoine.delignat-lavaud.fr/doc/plas16.pdf

https://github.com/pirapira/ethereum-formal-verification-overview


## Oracle Data Service Marketplace
einleiten mit grundlegendem zu oracles und das ziel des marketplaces

### Existierende Lösungen

#### Oraclize

#### Chainlink

### Vorgeschlagene Lösung

#### Anforderungen

#### Architektur

#### Oracle Definition Language (ODL)

## Referenzen

<a name="ref_kim18">[KIM18]</a>: Henry M., Kim Marek Laskowski: Toward an ontology‐driven blockchain design for supply‐chain provenance.

<a name="ref_reyn18">[REYN18]</a>: Ana Reyna, Cristian Martín, Jaime Chen, Enrique Soler, Manuel Díaz: On blockchain and its integration with IoT. Challenges and opportunities.

<a name="ref_stru18">[STRU18]</a>: Strugar,  D., Hussain, R., Mazzara, M., Rivera, V.: M2M billing for electric autonomous vehicles.
