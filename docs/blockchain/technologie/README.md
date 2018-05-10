# Blockchain Technologie


## Architektur und Funktionsweise
Autor: Sebastian Janzen

Was ist eine Blockchain?  
Es gibt mehrere Definitionen, da die Entwicklung der Blockchain noch recht jung ist. Eine Definition besagt, dass es ein elektronischer Register für Datensätze, Ereignisse oder Transaktionen ist, wo die Teilnehmer eines Netzwerkes diesen verwalten. Hier wird zwischen der Blockchain als Datenstruktur und dem zugehörigen Verwaltungssystem unterschieden.  
Eine andere Definition ist, dass die Blockchain eine Datenbank ist in welcher Einträge chronologisch in Blöcken gruppiert und miteinander kryptografisch verknüpft werden. Wobei hier Blockchains von Distributed Ledgers abgegrenzt werden.  
Die Blockchain-Verwaltungssysteme werden als verteilte Konsensussysteme bezeichnet, welche auf Kryptografie und P2P-Prinzipien aufbauen. So erreichen sie eine Verifikation des Systemsstatus im ganzen Netzwerk. Aus diesen Definitionen geht hervor, dass Blockchain-Systeme den verteilten Systemen angehören. <a>[[SCHL16]](#ref_Schl16)</a>

In anderen Worten: Ein Blockchain-System ist eine sequenzielle Datenbank mit konstanten Datensätzen, welche in einem P2P-Netzwerk mithilfe von Crypto-Economics und Konsensusalgorithmen validiert und gespeichert werden.

Der Aufbau einer Blockchain ist eine Blocksequenz in denen die komplette Transaktionshistorie festgehalten wird, wie zum Beispiel einem öffentlichen Konto. Jeder Block zeigt auf den Vorgänger die ganze Blockkette entlang bis auf den ersten Block einer Blockchain, den sogenannten "Genesisblock". <a>[[ZHENG17]](#ref_Zheng17)</a>

Die Abbildung "Blockchain Architektur" zeigt, dass eine zufällige Zeichenkette (Nonce) solange iteriert wird, bis ihr Hashwert den Zielvorgaben des Netzwerkes entspricht. Ist dies der Fall, kommt der Block in die Blockchain. <a>[[ANDE16]](#ref_Ande16)</a>

![blockchain_architecture](./images/blockchain_architecture.png "Blockchain Architektur")

_Blockchain Architektur_ Abbildung angepasst aus <a>[[ANDE16]](#ref_Ande16)</a>

### Block

![blockchain_block](./images/blockchain_block.png "Blockchain block")

_Blockchain Block_, Abbildung angepasst aus <a>[[ZHENG17]](#ref_Zheng17)</a>

Der Block besteht aus einem Blockheader und Blockbody.
In den Blockheader gehören: <a>[[ZHENG17]](#ref_Zheng17)</a>
- __Block version:__			Beinhaltet die Regeln für die Validierung eines Blocks
- __Merkle tree root hash:__	Ist der Hashwert aller Transaktionen im Block
- __Timestamp:__				Aktueller Zeitwert in Sekunden seit 01.01.1970
- __nBits:__ 					Schwellwert eines Hashes ab dem ein Block als valide gilt
- __Nonce:__					Ist ein 4-Byte Feld, welches üblicherweise mit Null anfängt und pro Hash-Kalkulation inkrementiert
- __Parent block hash:__		Ist ein 256-Bit Hashwert das auf den Vorgänger zeigt

Der Body besteht aus dem Transaktionszähler und den Transaktionen selbst. Je nach Block- und Transaktionsgröße variiert die Anzahl der Transaktionen im Block. Zur Verifizierung von Transaktionen dient asymmetrische Kryptografie. <a>[[ZHENG17]](#ref_Zheng17)</a>

### Digitale Signatur

Jeder Benutzer besitzt ein Schlüsselpaar aus einem öffentlichen Schlüssel und einem privaten Schlüssel. Damit kann eine digitale Signatur generiert werden. Eine Nachricht oder Transaktion wird mit dem privaten Schlüssel signiert und an den Empfänger gesendet, der die Echtheit der Nachricht mit dem öffentlichen Schlüssel anhand der Signatur überprüfen kann. <a>[[ZHENG17]](#ref_Zheng17)</a>

Aufgrund dessen, dass nur der Absender den privaten Schlüssel kennt, kann so die Authentizität der Nachricht und des Absenders sichergestellt werden. Des Weiteren kann die Nachricht nicht durch asymmetrische Verschlüsselung unbemerkt verändert werden. <a>[[SCHL16]](#ref_Schl16)</a>

In diesem Unterkapitel wird die digitale Signatur nur am Rande erwähnt. Für mehr Informationen siehe Unterkapitel "Digitale Signaturen" in Kryptografie, Grundlagen.

### Konzept einer Blockchain

__Dezentralisierung__

In zentralisierten Transaktionssystemen spielt eine Vertrauensperson, z. B. eine Zentralbank, die Rolle des Validierungsknoten, was häufig zu Engpässen in der Leistung führt. Für die Blockchain werden Konsensusalgorithmen verwendet, was den Einsatz von Dritten überflüssig macht und zu einer besseren Performance führt. <a>[[ZHENG17]](#ref_Zheng17)</a>

__Beständigkeit__

Transaktionen sind schnell validierbar und invalide Transaktionen werden gar nicht erst akzeptiert. Die Struktur der Blockchain macht eine Änderung an den gespeicherten Transaktionen kaum möglich. <a>[[ZHENG17]](#ref_Zheng17)</a>

__Anonymität__

Die Identität eines Benutzers ist geschützt, denn für die Interaktion mit der Blockchain wird eine generierte Adresse verwendet, aus der nicht ohne weiteres möglich ist auf einen Benutzer zurückzuführen. Dennoch gibt es keine hundertprozentige Garantie, dass ein Benutzers absolut anonym ist. <a>[[ZHENG17]](#ref_Zheng17)</a>

### Arten einer Blockchain 

Es gibt drei Arten von Blockchain: öffentliche, private und diejenigen welche einem Konsortium angehören.

__Öffentlich__

Die ursprüngliche Art einer Blockchain (siehe Bitcoin-Blockchain). Alle Einträge sind öffentlich sichtbar. Jeder kann im Netzwerk eine Transaktion tätigen und solange diese valide ist, wird sie auch einer Blockchain hinzugefügt. Es ist allen freigestellt am Konsensus teilzunehmen und sogar die Netzwerke zu verwalten. Im Gegenzug gibt es niemanden der das Alleinrecht im Netzwerk hat - alle Teilnehmer sind gleich. Aus diesem Grund wird ein öffentliches Blockchain auch _permissionless blockchain_ genannt.
Der Einfluss ist proportional der Ressourcen eines Teilnehmers. Öffentliche Blockchains nutzen Crypto-Economics, eine Kombination aus Konsensalgorithmen und wirtschaftlichen Anreizen, als Ersatz für eine zentralen Entität der vertraut wird.  Die üblichen Konsensusalgorithmen sind Proof of Work und Proof of Stake (Bitcoin, Ethereum). Die Vorteile von öffentlichen Blockchains sind Transparenz und Anonymität, wobei die Skalierbarkeit und Effizienz eher zweitrangig sind. Diese Art der Blockchain wird als völlig dezentral bezeichnet. <a>[[DEMUSH]](#ref_Demush)</a>, <a>[[BUTE15]](#ref_Bute15)</a>

Im öffentlichen Blockchain-Netzwerk kann jeder Knoten am Konsensus teilnehmen, um den nächsten Block zu validieren. Ist die Validierung abgeschlossen, wird der Block der Blockchain hinzugefügt, siehe nächste Abbildung.

![blockchain_public](./images/blockchain_public.png "Public Blockchain")

_Öffentliches Blockchain-Netzwerk_, eigene Abbildung

__Privat und Konsortium__

Wie der Name schon andeutet, sind private Blockchains nicht für jeden sichtbar und zugänglich. Sie werden aufgrund einer überschaulichen Anzahl von Knoten viel effektiver verwaltet. Die Schreibrechte an der Blockchain gehören üblicherweise einer einzigen Organisation, die Leserechte können zum Teil oder ganz öffentlich sein. Diese Art von Blockchain heißt _permissioned blockchain_. Die üblichen Verwendungszwecke sind Datenhaltung und Wirtschaftsprüfung im Rahmen einer einzigen Firma.  
Konsortium-Blockchains unterscheiden sich insofern von privaten, dass nur vorausgewählte Knoten am Konsensus teilnehmen können. Diese Knoten können einer Gruppe von Banken gehören, wo jede Bank einen Knoten steuert. Wie im Falle der privaten Blockchain, kann das Leserecht teilweise oder ganz öffentlich sein, was dazu führt, dass Teilnehmern außerhalb des Konsortiums eine eingeschränkte Möglichkeit haben über eine API die Block Hashes zu überprüfen. Banken und Unternehmen bekommen damit eine Möglichkeit direkt ihre Vermögenswerte untereinander in Sekunden zu übertragen und die private P2P-Netzwerke zu überwachen. Diese Blockchains werden als teilweise dezentralisiert bezeichnet.
<a>[[DEMUSH]](#ref_Demush)</a>, <a>[[BUTE15]](#ref_Bute15)</a>

Private bzw. Konsortium Blockchain-Netzwerke bestehen aus einer zugelassenen Anzahl von Knoten, was den Konsensusprozess erheblich beschleunigt. Zur Validierung eines Blocks sind öffentliche Knoten nicht zugelassen, siehe nächste Abbildung.

![blockchain_private](./images/blockchain_private.png "Private und Konsortium Blockchain")

_Privates und Konsortium Blockchain-Netzwerk_, eigene Abbildung

### Unterschiede zwischen permissionless und permissioned

In dieser Tabelle sind die wichtigsten Unterschiede nochmals zusammengefasst.

|                                                       | __Permissioned Blockchain__     | __Permissionless Blockchain__ |
|-------------------------------------------------------|---------------------------------|-------------------------------|
|_Instandhaltung:_                                      | Kleine Gruppe von Entitäten     | Jeder der will                |
|_Schutz vor Unaufrichtigkeit:_                         | Reputationsschaden              | Crypto-Economics              |
|_Transaktionsrechte:_                                  | Zugelassene Gruppe von Menschen | Jeder der will                |
|_Zugang:_                                              | Kleine Gruppe von Entitäten     | Jeder der will                |
|_Speicherort:_                                         | Zentraler Server                | Verteilt                      |
|_Vertrauen in eine zentrale Entität zur Sicherheit:_   | Ja                              | Nein                          |
|_Transaktionskosten:_                                  | Klein                           | Hoch                          |
|_Geschwindigkeit:_                                     | Schnell                         | Langsam                       |
|_Schutz vor Zensur:_                                   | Nein                            | Ja                            |
|_Token:_                                               | Nein                            | Ja                            |

_Blockchain Unterschiede_, Tabelle angepasst aus <a>[[GHAL15]](#ref_Ghal15)</a>

In einer begrenzten Umgebung, bezogen auf die Knoten, spielt permissioned Blockchain ihre Stärken aus - hohe Geschwindigkeit und niedrige Transaktionskosten. Aufgrund ihres Grundprinzips sind Zensurresistenz, Offenheit und dezentrales Vertrauen hierfür unnötig, während sie für eine permissionless Blockchain unabdingbar sind. Ein Radar-Diagramm in der nächsten Abbildung macht nochmal die Unterschiede deutlich. 

![blockchain_permissioned_vs_permissionless](./images/blockchain_permissioned_vs_permissionless.png "Permissioned vs Permissionless")

_Permissioned vs Permissionless_, Abbildung aus <a>[[GHAL15]](#ref_Ghal15)</a>

Während oben die Merkmale der öffentlichen und privaten Blockchain aufgezählt worden sind, gibt es außerdem die allgemeinen Eigenschaften einer Blockchain.

## Eigenschaften einer Blockchain 

Autor: Björn Enders-Müller

### Immutability

Der Begriff der „immutability“ bedeutet übersetzt Unveränderlichkeit und ist eine zentrale Eigenschaft einer Blockchain. Dieser Abschnitt soll dazu dienen die Unveränderlichkeit einer Blockchain zu erklären und verdeutlichen.

In der Literatur wird eine Blockchain häufig wie folgt definiert. Eine Blockchain ist eine so gut wie unveränderbare verteilte Datenbank die durch die Verwendung von einem Peer-to-Peer Netzwerk, Konsensmechanismen, Kryptografie und Rückwärtsreferenzierung auf vorherige Blöcke die Validität und Reihenfolge von Transaktionen sicherstellt.

Systeme, die auf Blockchain Technologie basieren, wie z.B. Bitcoin, werden immer wieder damit beworben, dass kein Vertrauen zu anderen Anwendern oder einer dritten Partei, wie einer Bank, nötig sei. Diese Aussage entspricht auf Grund der Unveränderlichkeit der Blockchain sogar weitestgehend der Wahrheit.

Trotz der grundlegenden Eigenschaften und Mechanismen der Blockchain ist es theoretisch möglich die Unveränderlichkeit der Blockchain zu verletzen. Dazu können schon simple Softwarefehler in der Anwendersoftware führen. So viel nochmal zum nicht benötigten Vertrauen. Wer nicht in der Lage ist seine eigene Anwendung zu programmieren muss zumindest dem Softwareentwickler vertrauen. Selbst mit der Annahme, dass die Implementierung der Software fehlerfrei ist gibt es noch Möglichkeiten die Unveränderlichkeit zu verletzen. In der Regel werden diese Szenarien jedoch als unwahrscheinlich oder extrem schwer betrachtet. 

Eine theoretisch möglicher aber unwahrscheinlicher Angriff auf die Unveränderlichkeit einer Blockchain basiert dabei auf der Datenstruktur selbst. Es wird versucht die Hash-Werte der Blöcke zu manipulieren. Solang die verwendete Hash-Funktion nicht Kollisionsresistenz ist sind solche Angriffe theoretisch möglich. Für die Hash-Funktion müsste also garantiert werden, dass es so gut wie unmöglich ist, zwei unterschiedliche Blöcke zu finden, die einen identischen Hashwert produzieren. Selbst in Systemen, in denen ein einzelner Benutzer oder eine Gruppe über einen überproportionalen Anteil an Rechenleistung verfügen, könnten die Hash-Werte der Blöcke dann mit kollisionsresistenten Hash-Funktion abgesichert werden. Leider wurde bisher für viele der weitverbreiteten Hash-Funktionen genau diese Kollisionsresistenz noch nicht bewiesen. 

Die Unveränderlichkeit der Blockchain kann auch durch ihre Konsensmechanismen angegriffen werden. Dies ist jedoch in der Regel schwer oder kostspielig. Bei der Bitcoin Blockchain könnte dies mit einem sogenannten „51% attack“ versucht werden. Dies bedeutet, dass ein Einzelner oder eine Gruppe mehr als 50% der Rechenleistung im Peer-to-Peer Netzwerk kontrolliert. Dies könnte dafür genutzt werden um das gesamte Netzwerk dahingeht zu lenken, dass eine manipulierte Blockchain akzeptiert wird und Transaktionen verfälscht werden. Im Bitcoin System wäre dieser Angriff sehr kostspielig. Die Hash-Power des gesamten Netzwerkes betrug im Oktober 2017 ca. 10.000.000 TH/s (1 TH/s eine Billionen/Tera Berechnungen pro Sekunde). Spezialisierte Hash-Hardware wie der Antminer S9 liefern 13,5 TH/s also spiegeln 740.741 dieser Gräte die gesamte Hash-Power des Systems wieder. Jedes dieser Geräte kostete am vierten Oktober letzten Jahres 1265 US-Dollar. Um also auf 51% Rechenleistung zu kommen wäre ca. 460 Millionen US-Dollar alleine an Hardware nötig.

Anscheint wurden bisher die Unveränderlichkeit der Blockchain nur indirekt verletzt. Dies passiert, wenn ein sogenannter Blockchain „fork“ entsteht. Dies bedeutet so viel, dass sich die Blockchain nach einem bestimmten Block aufgabelt bzw. aufspaltet. Dies ist in der folgenden Abbildung nochmal verdeutlicht. Die Pfeile stellen die Hash-Werte, die jeweils auf den vorherigen Block zeigen dar. 

<img src="./images/blockchain_simple_fork.png" >

Beispiel für einen Blockchain Fork.
Abbildung selbst erstellt

Nach dem Block 3 folgen zwei unterschiedliche Block 4 Blöcke und auf diese jeweils ein Block 5. Solche Ereignisse können z.B. auftreten, wenn Änderungen an der Anwendersoftware durchgeführt werden oder diese durch ein andere ersetzt wird. Anwendersoftware für Blockchain Systeme sind häufig Open-Source und so für jeden frei zugänglich. So könnte z.B. jeder der in der dazu fähig ist die aktuelle Bitcoin Blockchain forken und seinen eigenen „Coin“ weiterführen. 

So etwas Ähnliches ist bei der DAO passiert. Die DAO des Ethereum Netzwerk ist eine sogenannten „Decentralized Autonomous Organization“ und ist in dem entsprechenden Abschnitt genauer erläutert. Kurz beschrieben ist die DAO im Grunde ein „Unternehmen“, das durch kaufbare Stimmrechte (Tokens) gesteuert wurde. Die DAO arbeitet dabei stark mit Smart Contracts welche ebenfalls in ihrem eigenen Abschnitt beschrieben sind. Die Funktionsweise dieses Unternehmens und die damit verbundene Ethereum Blockchain wurde als unveränderlich angesehen. Ein Problem ist dann Anfang 2016 aufgetreten. Durch einen Softwarefehler in der DAO war es Angreifern gelungen Stimmrechte im Wert von 50 Millionen USD zu entwenden.

Dieser Betrug trat eine ausschweifende Diskussion über die Unveränderlichkeit der Ethereum Blockchain los. Viele wünschten sich natürlich, dass dieser Betrug ausgeglichen wird und sprachen sich daher auch für eine Veränderung des Ethereum Protokolls aus. Eine weitere stark vertretene Meinung war die, dass der Quelltext als einzige Quelle von „Wahrheit“ niemals nachträglichen verändert werden darf, weil genau durch solche Eingriffe das sogenannte „immutability principle“ verletzt wird. Schlussendlich wurde die Diskussion gar nicht aufgelöst, sondern es wurde ein Fork der ursprünglichen Ethereum Blockchain erzeugt. Die Mehrheit der Anwender hat am Ende dafür gesorgt, dass die Blockchain angepasst wurde. Jedoch wird die alte Blockchain von einem Teil der Benutzer die alte Blockchain als Ethereum Classic weitergeführt. Wenn die DAO ein herkömmliches Unternehmen wäre hätte man diesen Betrug einfach zurückbuchen können, jedoch ist dies ein einer Blockchain durch die Konsensmechanismen nicht ohne weiteres möglich. Solche Probleme und der Umgang mit diesen erschüttern das Vertrauen der Benutzer und schädigen den Ruf von Blockchain Systemen. Die DAO zeigt schön auf wie die Unveränderlichkeit der Blockchain nur gegeben ist, wenn alle Benutzer im System damit einverstanden sind. 

<a>[[HOFM17]](#ref_HOFM17)</a>

In dem Fall der DAO spricht man davon, dass es sich um einen sogenannten „hard fork“ handelt. Von einem Hard-Fork wird gesprochen, wenn eine radikale Änderung am System vorgenommen wird. Das kann dazu führen das Blöcke und Transaktionen, die vor dem Fork invalide ware valide werden.  Anders herum könnte es auch gehen indem valide Blöcke invalide werden wie bei der DAO. Damit so etwas möglich ist müssen alle Knoten des Systems sich darüber einig sein was geändert werden soll und diese Änderung dann an ihrer Anwendersoftware durchführen. Dadurch entsteht dann der eigentlich Fork, weil die Blöcke des alten Systems im neuen abgelehnt werden und Blöcke des neuen Systems im alten System abgelehnt werden. Knoten die nicht die neuste Version verwenden können nicht mehr am System teilnehmen und updaten in der Regel daraufhin ihre Software. Beide Systeme unabhängig voneinander und folgen unterschiedlichen Regeln. In der folgenden Abbildung ist ein Hard-Fork einer Blockchain visualisiert.

<img src="./images/blockchain_hard_fork.png" >

Veraltete Knoten nehmen die neuen Blöcke nicht an und spalten die Blockchain.
Abbildung entnommen aus
<a>[[INVE18]](#ref_INVE18)</a>

Von einem „soft fork“ wiederum wird gesprochen, wenn nach einem Fork nur eine der beiden neuen Blockchains weitergeführt wird und diese mit dem Teil vor dem Fork kompatible ist. Anders als beim Hard-Fork brauchen nur die Mehrheit ihre Anwendersoftware updaten. Ein Vorteil eines Soft-Fork ist, dass z.B. neue Arten von Transaktionen und Regeln zur deren Validierung in das System eingeführt werden können. Diese Erweiterungen müss lediglich den Sendern und Empfängern solcher Transaktionen bekannt sein. Für alle veralteten Knoten wird eine solche Transaktion als eine „pay-to-anybody“ Transaktion markiert.

Ein Soft-Fork kann auch einfach dadurch entstehen, dass einige Miner ihre Software noch nicht aktualisiert haben und somit gegen eventuell neu hinzugefügte Konsensmechanismen verstoßen. Solche Forks sind nur temporär und die neu erzeugten aber veralteten Blöcke der nicht aktuellen Knoten werden dann von der Mehrheit der aktuellen Knoten abgestoßen. In der folgenden Abbildung ist dieser Prozess noch einmal verdeutlicht. Der grau gekennzeichnete Block wird nicht in die Blockchain eingefügt, weil er gegen die neuen Regeln verstößt.

<img src="./images/blockchain_soft_fork.png" >

Blöcke die von veralteten Knoten erzeugt wurden werden von der Mehrheit abgestoßen.
Abbildung entnommen aus
<a>[[INVE18]](#ref_INVE18)</a>

Es müssen also nicht immer alle Knoten aktuell gehalten werden, weil die neuen Blöcke schlussendlich abwärtskompatible sind. Wenn, aus welchen Gründen auch immer, ein Soft-Fork rückgängig gemacht werden soll, so ist dies nur durch einen Hard-Fork möglich.

<a>[[INVE18]](#ref_INVE18)</a>

### Transaktion



### Blöcke

Der Begriff Blockchain setzt sich aus den englischen Wörten „block“ und „chain“ zusammen. Dies übersetzt bedeutet so viel wie Blockkette, Kette aus Blöcken oder verkettete Blöcke. Dieser Abschnitt behandelt den Aufbau eines einzelnen Blockes der Blockchain.

In jeder Blockchain gibt es einen besonderen Block. Den sogenannten „genesis block“ oder auch Ursprungsblock. Er ist der erste und älteste Block der Blockchain. Als Ursprungsblock kann nur er alleine keinen sogenannten „parent block“, frei übersetzt Elternblock, haben. Jeder andere Block der Blockchain verweist jeweils auf den vorherigen Block. Die Blockchain ähnelt somit der Datenstruktur einer einfach verketteten Liste.

Die Aufgabe von Blöcken ist es Transaktionen innerhalb der Blockchain zu bündeln. Diese Blöcke werden dann mit unterschiedlichsten Verfahren auf alle Netzwerkknoten verteilt. Ein Block lässt sich in einen „block header“ und den „block body“ unterteilen. Der Block header enthält Metainformationen über den Block selbst, Elternblock und die Transaktionen. 

<img src="./images/blockchain_example_blocks.png" width="700">

Beispielhafter Aufbau von drei Blöcken.
Abbildung entnommen aus
<a>[[ZHEN17]](#ref_ZHEN17)</a>

<img src="./images/blockchain_header_body.png" width="400">

Aufbau eines einzelnen Blocks.
Abbildung entnommen aus
<a>[[ZHEN17]](#ref_ZHEN17)</a>

Wie in der Abbildung zu sehen ist besteht der Block aus unterschiedlichen Elementen. Der Header unterteilt sich in die folgenden sechs Teile:

* Block Version: Mit der Block version wird beschrieben mit welchen Regeln der Block validiert werden muss.
* Merkle Tree Root Hash: Enthält die Wurzel des „Merkel Tree“ oder auch sogenannten Hash-Baum. Der Baum enthält Hash-Werte zu jeder Transaktion des Blockes. Was genau eine Transaktion und ein Merkel Tree ist wird in anderen Abschnitten genauer erläutert. 
* Timestamp: Ein Timestamp ist ein Integer-Wert der jeder Sekunde seit dem 1. Januar 1970 UTC inkrementiert wird. 
* nBits: Der sogenannte nBits Wert ist ein Schwellwert um die Validität des Blocks zu überprüfen. Wenn der Hash-Wert des Blockes selbst größer ist als der nBits Wert ist der Block nicht zulässig. 
* Nonce: Die Nonce ist 4-Byte großes Datenfeld, welches in der Regel bei 0 startet und bei jedem Hash-Versuch inkrementiert wird. Miner verändern den Wert der Nonce und Hashen den Block danach erneut um zu überprüfen ob er in einem bestimmten Wertebereich liegt. Wenn dies nicht der Fall ist wird die Nonce erneut verändert und der Wertebereich wird erneut geprüft. Falls der Wert passt kann der Block verteilt werden und von anderen Netzwerkknoten überprüft werden und an die Blockchain gehängt werden.
* Parent Block Hash: Speichert den Hash-Wert des Elternblockes um eine einfach verkettete Liste von Blöcken zu erzeugen. Diese Mechanik sorgt für die Sicherheit vor Manipulation der älteren Blöcke.

Im body des Blocks befindet sich ein Zähler für die Anzahl der Transaktionen des Blockes. Zusätzlich lassen sich die Transaktionen selbst dort finden. Der genaue Aufbau einer Transaktion wird in anderen Abschnitten erläutert.

<a>[[ZHEN17]](#ref_ZHEN17)</a>

### Merkle Tree

Ein Merkle tree ist eine Datenstruktur die auf einem Binär-Baum basiert. Bei einem Merkle tree wird jedoch in jeder Ebene eine One-Way-Hash-Funktion verwendet um den Baum und die Blätter vor Manipulation oder Fehlern zu schützen. Häufig wird daher der Merkle tree auch Hash-Baum genannt. Die Funktionsweise innerhalb einer Blockchain ist wie folgt. Jeder Block der Blockchain hält einen Hash-Baum oder zumindest die Wurzel des Baums, dazu im Folgenden mehr. Für eine Blockchain werden als Blätter die abzusichernden Transaktionen verwendet. Die Knoten direkt über den Transaktionen werden mit der Hash-Funktion erzeugt. In der darüberliegenden Ebene werden jeweils zwei Knoten zusammengeführt in dem für die Hash-Werte der beiden Knoten erneut ein dritter Hash-Wert erzeugt wird. Dieser Prozess wird fortgesetzt bis in der höchsten Ebene nur noch ein Knoten befindet. Die sogenannte Wurzel bzw. Root-Hash des Hash-Baums. In der folgenden Abbildung ist der Vorgang nochmal verdeutlicht.  

<img src="./images/merkle_tree.png" width="400">

Aufbau eines einzelnen Blocks.
Abbildung entnommen und angepasst aus
<a>[[VUJI18]](#ref_VUJI18)</a>

Zuerst wird für jede Transaktion (TX0 bis TX3) ein Hash-Wert (Hash0 bis Hash3) generiert. Anschließend wird für jeweils zwei benachbarte Hash-Werte (z.B. Hash0 und Hash1) noch ein dritter Hash-Wert (Hash01) gebildet. In der Abbildung wird so aus Hash0 und Hash1 der darüberliegende Knoten Hash01. Wenn der Block mehr als vier Transaktionen halten würde hätte der Hash-Baum mehr Ebenen als in der Abbildung. Im Block header wird die Wurzel des Baums gespeichert. In vielen Blockchain Systemen werden nach der Verifizierung des Blocks alle Knoten des Hash-Baums gelöscht um Speicherplatz einzusparen. Nur die Wurzel und die Transaktionen bleiben erhalten, da die Wurzel zum überprüfen ausreicht. Falls nachträglich jemand versucht z.B. die Transaktion TX0 zu manipulieren so würde dies bei einer Verifizierung auffallen, da sich der Hash-Wert der Transaktion verändert und somit auch der von dem Knoten Hash01. So propergiert der Fehler sich bis zur Wurzel und somit kann eine Manipulation erkannt werden. Theoretisch würde es reichen für alle Transaktionen nur einen Hash-Wert abzuspeichern, jedoch kann dann nicht nachvollzogen werden welche der Transaktionen manipuliert wurde. 

<a>[[VUJI18]](#ref_VUJI18)</a>

## Crypto-Economics

Autor: Kevin Schima

### Abgrenzung: Token / Coins

... ...

### Arten von Token
  
<img src="./images/token-typologie.png" width="700" style="margin-top:50px">

Abbildung entnommen aus <a>[[HAHN18]](#ref_hahn18)</a>

Bisweilen ist die Einordnung eines Tokens schwierig, es können durchaus mehrere Typen zutreffen. Thomas Euler <a>[[EULE18]](#ref_eule18)</a> hat dazu eines der ersten Klassifizierungssysteme vorgestellt.

#### Utility Token

Die häufigste Tokenform, der Utility Token, stellt bei Startups, die diesen Token anbieten, ein Coupon für die zukünftige Verwendung des Services / Produktes dar, der Token ist damit zentraler Plattformbestandteil. Ein Beispiel für diese Token Art ist "BAT (basic attention token)" welcher das Geschäft rund um Onlinewerbung reformieren soll. Ziel ist es, Nutzer für das Ansehen von Werbung mit BAT Token zu bezahlen, die wiederum ausgegeben werden können um z.B. werbefreie Formate zu finanzieren.

#### Equity Token (Securities)

Equity Token stellen eine wertpapierähnliche Unternehmensbeteiligung dar. Ein Beispiel ist der ERC20 Token PAY der Firma TenX. TenX stellt Kreditkarten aus die es erlauben Zahlungen mit Kryptowährungen zu tätigen. Um Kapital für die Umsetzung der Geschäftsidee einzusammeln hat die Firma den PAY Token ausgegeben. In unbestimmter Zukunft sollen 0,5% des Umsatzes den die TenX Kreditkarten jährlich generieren anteilig an alle PAY Token Besitzer ausgeschüttet werden. Zuletzt wurde diese wertpapierähnliche Eigenschaft, wegen der daraus resultierenden Regulierungsanforderungen, nicht mehr öffentlich kommuniziert.

#### Digitale Währungen

Coins wie Bitcoin, Ethereum und ähnliche, sind zunächst spekulative Wertaufbewahrungsmittel, ihr Wert wird nicht durch eine gesetzliche Stelle festgelegt, sondern durch die Marktteilnehmer selber und ist meist hoch volatil also starken Schwankungen ausgesetzt. Aufgrund einer meist algorithmisch festgelegten Maximalgeldmenge findet z.B. beim ursprünglichen Bitcoin keine Inflation mehr statt, wenn in Zukunft alle 21 Mio. Einheiten erzeugt wurden. (Mining) 

#### Asset-backed Token

Unter Asset-based Token werden mit Assets, also mit Anlagegütern, gestützte Token verstanden. Beispiele dafür ist die mit Rohöl gedeckte, von der brasilianischen Regierung lancierte, aber umstrittene Kryptowährung "Petrol" oder der mit Gold gedeckte, noch nicht öffentliche gehandelte "Digix Gold Token (DGX)". Anteile an weiteren bespielhaften Anlagegütern sind möglich z.B. Windkraftanlagen, Immobilien, deren Finanzierung eventuell dadurch erst möglich ist. 

### Tokenization

### Initial Coin Offering (ICO)

Ein Initial Coin Offering ist eine, bis dato, weitgehend unregulierte Methode der Kapitalaufnahme bei der im Gegensatz zum klassischen Initial Public Offering (IPO) (deutsch: Börsengang), die Kapitalaufnahme in Form von Kryptowährungen erfolgt. Vergleichbar mit dem Börsenhandel bei dem mit Echtgeldwährungen (FIAT Währungen) Anteile an einem Unternehmen in Form von Aktien erworben werden können, werden bei einem ICO üblicherweise Token ausgegeben die mittels Kryptowährungen gekauft werden. Die Mindestinvestition ist, ähnlich wie bei Crowdfunding Finanzierungsmodellen, so niedrig, dass auch private Kleininvestoren partizipieren können. <a>[[HAHN18]](#ref_hahn18)</a>

Im Jahr 2017 haben laut [ICODATA.IO](https://www.icodata.io/stats/2017) 871 ICOs insgesamt 6 Mrd. Dollar Kapital eingesammelt, wobei dieser Betrag je nach aktuellem Wechselkurs der Kryptowährungen schwanken kann.

Während der traditionelle Finanzmarkt durch nationale und internationale Finanzaufsichten rechtlich stark reguliert ist, ist dies bei den neuartigen ICOs durch die rasante technische Entwicklung und unterstützt durch die anonymen bzw. pseudonymen Transaktionen von Kryptowährungen bisher kaum der Fall.


#### Typischer Ablauf eines ICOs basierend auf Ethereum (ERC20) Token

* Ein Unternehmen bzw. loses Entwicklerkollektiv veröffentlich ein Whitepaper in dem eine Geschäftsidee / Anwendungsbereich für den Token und eventuell zukünftige Entwicklungsziele formuliert sind

* Ein Smart Contract auf ERC20 Basis wird für den ICO erstellt, um Investoren Anteile an dem Projekt zur Verfügung zu stellen, in diesem Smart Contract wird unteranderem Bezeichnung und Maximalmenge an Token definiert

* Optionale nicht-öffentliche Pre-Sale bzw. Pre-ICO Phase für Großinvestoren, die individuelle Konditionen beinhaltet
 
* Der öffentliche Token Verkauf (Sale) beginnt, der ICO Ersteller legt einen initialen Verkaufspreis fest, bespielsweise 1000 Token / 1 Ether.

* Der Token Sale endet erfolgreich wenn mindestens das Soft-Cap (Mindestausgabemenge) innerhalb einer zeitlichen Deadline erreicht ist bzw. spätestens wenn das Hard-Cap erreicht ist (Maximalausgabemenge)

* Der Token wird an speziellen Kryptowährungs / Token Börsen gelistet, und kann öffentlich gehandelt werden, der Wert der Token wird durch die Marktmechanismen Angebot/Nachfrage bestimmt

Für die Investoren des ICOs hat sich der Wert der Token im Idealfall durch mediale Aufmerksamkeit, Entwicklungsfortschritt und Kooperationen mit anderen Unternehmen gegenüber des intialen Sales bzw. Pre-Sales vervielfacht. 

#### Vorteile

* Durch geringem organisatorischen Aufwand und Online-Marketing können Projekte schnell und weltweit eine große potentielle Investorenschaft ansprechen

#### Nachteile

* Vorallem bei Aufkommen der ersten ICOs wurden, nur durch die Veröffentlichung eines Whitepapers, sehr hohe Kapitalmengen eingenommen, ohne das eine Verwirklichung garantiert ist, die Investition in ICOs ist somit hoch spekulativ

* Aufgrund der anonymen Struktur von ICOs und der bisher kaum erfolgenden rechtlichen Regulierung kam es in der Vergangenheit wiederholt zu sogenannten exit-scams, dabei sind die Projektinitiatoren mit sämtlichen Investments untergetaucht



## Herausforderungen und Risiken

### Technische Herausforderungen
Autor: Fynn Klöpper

Angriffsszenarios (Sybil attack, 51%-Attack)
Skalierung (-sprobleme)



#### Angriffsszenarien

##### Sybil Attacke
Quellen:
https://www.freehaven.net/anonbib/cache/sybil.pdf
https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/deliver/index/docId/10314/file/tbhpi113.pdf
###### Definition
Eine Sybil-Attacke beschreibt eine Art des Angriffs auf eine Blockchain, bei der eine schadhafte Entität mehrere Identitäten vorgibt, um einen substantiellen Teil des Systems zu kontrollieren und so die Sicherheit der Redundanz zu komprimieren.

Für Peer-to-Peer-Systeme ist es essentiell, dass Daten redundant gespeichert werden. Durch die Redundanz der Speicherung derselben Daten auf verschiedenen Entitäten kann so die Integrität der Daten sichergestellt werden. Weiterhin setzen viele P2P-Systeme auf die Fragmentierung der Daten, um sich gegen Datenlecks abzusichern.
   
Falls das System scheitert Identitäten zu Entitäten zu mappen, kann nun eine Entität mehrere Identitäten vortäuschen und von dem System mehrmals Daten oder zusammenhängende Daten zugewiesen bekommen. Hierdurch wäre die Redundanz, als auch die Fragmentierung der Daten komprimiert. 
###### Lösungsansätze

Mit Identifizierungs-Authorität:
- VeriSign
- CFS
- SFS
- EMBASSY
- ICANN / Wave Systems


Ohne Identifzierungs-Authorität:

Ein Schutz ohne dedizierte Identifizierungs-Authorität stellt sich als äußerst schwierig heraus.
Oftmals fällt der erste Gedanke auf ein System, bei dem ältere, etablierte Identitäten neue Identitäten kollektiv verifizieren. Dieser Lösungsansatz geht allerdings davon aus, dass die erste Generation von Identitäten vertrauenswürdig ist, welche bereits durch eine Sybil-Attacke komprimiert sein könnte und somit den weiteren Verlauf der Kette unsicher macht.  

##### 51%-Attack
Quellen:
http://fmt.cs.utwente.nl/files/sprojects/268.pdf

###### Definition
Eine 51%-Attacke beschreibt eine Attacke auf eine Blockchain, meist die Bitcoin-Blockchain, bei der ein Miningpool, der mehr als 50% der Hashrate des gesamten Netzwerks ausmacht, die Kontrolle über den weiteren Verlauf der Blockchain übernimmt.
Der Angreifer ist daraufhin in der Lage Coins "doppelt" auszugeben, also einen Händler zu bezahlen und danach die Transaktion wieder rückgängig zu machen oder auch Transaktionen die Bestätigung zu verwehren und somit den Handel zwischen einigen oder auch allen Benutzern zu unterbrechen.    

Auch wenn der Name der Attacke suggeriert, dass 51% der Rechenleistung des Netzwerks benötigt werden, um die Attacke durchzuführen, ist dies nicht notwendig.
Bereits mit einer kleineren Anzahl an relativer Rechenleistung ist es möglich einen Angriff durchzuführen. In diesem Fall beträgt die Erfolgschance allerdings nicht 100%, sondern ist abhängig davon, wie viel relative Rechenleistung zur Verfügung steht und wie viele Blöcke zur Bestätigung ein Händler erwartet.
Bild: https://www.btc-echo.de/tutorial/bitcoin-51-attacke/

Falls der Angreifer über 51% relativer Rechenleistung verfügt und somit schneller Blöcke generieren kann als der Rest des Netzwerkes, kann er beliebig lange an seinem privaten Fork weiter Blöcke anhängen bis er länger als der öffentliche und vertrauenswürdige Branch ist. 
Da immer der längere Branch vom System als der "richtige" Branch angenommen wird, kann somit der Angreifer bestimmen, welche Transaktionen mit in den Branch aufgenommen und welche Blöcke ungültig gemacht werden sollen. 
###### Lösungsansätze
- Bisher ein rein theoretischer Angriff in Anbetracht von Bitcoin
- Bereits bestehende, gelockte Blöcke, können trotzdem nur sehr schwer verändert werden
- Erhöhte Anzahl von Bestätigungen kann eine tatsächliche 51%-Attacke zwar nicht verhindern, allerdings eine Attacke eines Angreifers mit unter 51% unwahrscheinlicher machen, sowie die Angriffsdauer verlängern, was die Attacke unprofitabel machen kann.

##### Cryptographie-Angriffe

###### Definition

###### Lösungsansätze

#### Skalierung (-sprobleme)
Quellen:
https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/deliver/index/docId/10314/file/tbhpi113.pdf

##### Neue Nutzer
##### Größeres Transaktionsaufkommen


### Ökonomische und gesellschaftliche Herausforderungen

Autoren: Mario Cichonczyk und Martin Teuber

Konsequenzen
Sozial-wissenschaftlich
betriebswirtschaftlich

=======
#### Ökonomische Implikationen
Autor: Mario Cichonczyk

Dass Blockchaintechnologien ein disruptives Potential aufweisen, scheint eine ihrer am häufigsten betonten Eigenschaften zu sein. Wie sie in konkreten Anwendungsfällen Veränderungen anstoßen können ist vielfach diskutiert. Ziel dieses Kapitels ist es, ein Verständnis zu entwickeln, warum die Blockchain einen für Marktprozesse relevanten Progressionsträger darstellen kann. Dabei wird explizit versucht das Eingehen auf einzelne Applikationen zu vermeiden und stattdessen ökonomische Zusammenhänge hervorzuheben, die nach Abstraktion den meisten wichtigen Wirtschaftsprozessen zugrunde liegen. Diese Herangehensweise soll es dem Leser ermöglichen, neue Anwendungsszenarien zu spezifizieren und einen Blick in die langfristige Zukunft des cyber-physischen Wirtschaftssystems zu wagen.

Beim Verschaffen eines Überblicks über die am stärksten betonten, ökonomischen Verwendungsbeispiele der Blockchain, scheinen sich drei kategorische Leitmotive hervorzuheben: Intermediation, Wirtschaftstransparenz und Wirtschaftsautomation.

##### Intermediation
Im Intermediationskonzept agieren nach <a>[[WALTE07]](#ref_walter07)</a> unabhängige, gewinnmaximierende ökonomische Agenten basierend auf den Bedürfnissen der Vermittlung von Angebot und Nachfrage. Die Aufhebung von Marktintransparenzen unter Erhebung einer Vermittlungsgebühr bildet dabei den Ertragsüberschuss im Cashflow des Intermediärs. Das Ziel ist also je nach Anwendungsfall die Allokation von Angebot->Nachfrage oder Nachfrage->Angebot.

Wenn ein Marktteilnehmer dem Markt beitritt, ist er mit der unbestimmt zeitverzögerten Suche nach seinem Vertragspartner konfrontiert. Das Resultat sind Suchkosten, die sich vorab nur schwierig beziffern lassen. Ein Zwischenhändler bietet die Fixierung von Kosten und/oder Zeit, die zwischen Anbahnung und Vertragsschluss aufgewendet werden müssen. Intermediäre haben demnach eine ständige Präsenz am Markt, da sie im Vergleich zu ihren Vertragspartnern den Handel nach Vertragsschluss nicht verlassen. Wenn ein Asset in ihren Besitz übergeht, leiten sie es an Käufer weiter, welche das Asset höherwertig beziffern. Vergleichbar versuchen diese das Asset aus Quellen zu beschaffen, die es geringwertiger einstufen <a>[[SHEN16]](#ref_shen16)</a>. Intermediäre schöpfen also Wert, wenn ein Assetflow mit Unkenntnis über den Gesamtmarkt verknüpft ist. Dieses Nichtwissen ist das Resultat der imperfekten Natur realer Märkte, in denen die vollständige Information über alle Produzenten und Konsumenten nicht vorliegt <a>[[BUDI18]](#ref_budic18)</a>. 

Offensichtlich kann sich auf diese Weise eine komplexe Kette von Handelsstufen zwischen Produkterschaffung und Endverbraucher bilden<a>[[SCHM99]](#ref_schmidt99)</a>. Das Hinzukommen von Handelsstufen scheint im Zeitalter des eCommerce aber einem gegenläufigen Trend zu unterliegen<a>[[ETLA16]](#ref_etla16)</a>. Internetunternehmen wie Amazon konsolidieren komplexe Handelsketten in einfach nutzbaren Plattformen. Das Geschäftsmodell der Realweltvermittlung von Kontakten ist in diesem schnelllebigen Kontext nicht mehr nachhaltig. Wichtig ist es hier zu beachten, dass das Intermediationsprinzip dennoch weiter existiert. Der heterogene Assetflow zentralisiert sich lediglich in einem monopolistisch geprägten Intermediär. Diese Entwicklung lässt sich teilbegründen mit einer inhärenten Eigenschaft des Internets als verteiltes System: Misstrauen<a>[[ETLA16]](#ref_etla16)</a>. Produzenten und Konsumenten gravitieren zu dem Vermittler, welcher das größte Vertrauen im suspekten Austauschmedium repräsentiert. Diese Beobachtung stellt die Basis des disruptiven Disintermediationspotentials der Blockchain dar. 

Disintermediation als Prinzip der Eliminierung von Kettengliedern in Transmissionsmechanismen ist allerdings kein durch die Blockchain verursachtes Gedankenkonstrukt. <a>[[GELL96]](#ref_gell96)</a> beobachtete die ersten entsprechenden Phänomene  bereits in den 1970ern. Provoziert durch regulatorische Veränderungen im Investmentbankensystem entstand eine signifikante Differenz zwischen Zinszahlungen von Großbanken und anderen Formen der direkteren Kapitalanlage. Konsumenten wanderten aus diesem Grund verstärkt von etablierten Investmentbanken ab und brachten ihre Assets autark mit geringeren Transaktionskosten und größeren Erträgen gewinnbringend in einem selbstgesteuerten Portfolio unter. Banken wurden nicht länger als monopolistische Intermediäre wahrgenommen. Fortan festigte sich die Apperzeption von Disintermediationseinflüssen, sodass diese in der ökonomischen Literatur aufgenommen und reflektiert wurden. Besondere Aufmerksamkeit erhielt dabei die zunehmende Geltungskraft des Internets vor der Jahrtausendwende. Diese Phase ist aus heutiger Sicht aufgrund ihrer Korrelation zur Etablierung der Blockchain erneut bedeutsam. Realweltintermediäre sahen sich der denkbaren Disintermediation durch eCommerce ausgesetzt. Die Unternehmen, die damals als digitale Vorreiter erfolgreich in das Internetzeitalter übergingen, stehen nun vor dem gleichen Paradigmenwechsel wie jene Unternehmen, die sie einst verdrängten. Was das Internet für Realweltintermediäre in den 1990ern bedeutete, repräsentiert die Blockchain für Handelsprofiteure, die mit der Dotcom-Blase und dessen Nachwirkungen in die Moderne eingezogen sind.

Um eine hypothetische Prognose über die Zukunft von Assetflows unter angenommener Konstituierung der Blockchain abgeben zu können, lohnt es sich die ökonomische Aufarbeitung des Jahrtausendwechsels als Schlüsselindikator heranzuziehen. So fasst <a>[[GIAG99]](#ref_giag99)</a> zusammen, dass der Markt grundsätzlich dazu tendiert, Intermediäre zu verdrängen. Ihre Margen führen zu einer direkten Erhöhung des Preises für den Verbraucher. Zusätzlich können Produzenten den vollen Marktwert ihrer Produkte nicht ausschöpfen. Das Aufkommen einer Technologie, die Produzent und Konsument näher zusammenbringt, wird - begründet durch die Majorität und Entbehrung dieser Interessensgruppe - positiv in das Wirtschaftssystem aufgenommen. Dieser Effekt initiiert für nun in Zwangslage geratene Intermediäre drei mögliche Szenarien: Disintermediation, Reintermediation oder Cybermediation <a>[[GIAG99]](#ref_giag99)</a>. Das offensichtliche, erste Szenario, ist der mit sinkenden Transaktionskosten verbundene Druck auf Vermittler, die an ihrer traditionellen Rolle festhalten und langfristig aus dem Markt geschwemmt werden. Wenn von "Disruption" gesprochen wird, scheint die Assoziation mit dem vollständigen Verschwinden von Handelsstufen vorherrschend. Durch das Konzept der Reintermediation präsentiert sich aber eine aus Sicht der Marktmanier natürlichere Option. In diesem Fall bewegen sich Intermediäre in Nischen, in denen sie weiterhin kommerzielle Transaktionen vermitteln können oder durch Produktaugmentierung einen Mehrwert generieren. Ihre angepasste Rolle erlaubt ihnen dann das Fortbestehen parallel zum transformierten Wirtschaftskreis. 
Sind Vermittler aus dem Markt ausgeschieden oder haben sich in Nischen gerettet, existieren noch jene, die erst durch das neue Medium ihre Daseinsberechtigung erhalten und ihm vollends innewohnen. Diese Kategorie umfasst alle Aktuere, die mit ihren Geschäftsmodellen die Renditen der digitalen Wende einfahren. Und genau diese *Cybermediäre* scheinen nun durch die Blockchain mit der gleichen Wahl eines Zukunftsszenarios gegenübergestellt, wie ehemals ihre Vorgänger am Ende des letzten Jahrhunderts.

Unterschiedliche Marktfunktionen sind verschieden stark durch derartige Transformationsprozesse bedroht und äußern so auch differenzierte Effekte <a>[[GIAG99]](#ref_giag99)</a>. Die nachstehende Tabelle gibt einen Überblick über betroffene Anwendungsbereiche und deren beobachtete Reaktion.

<img src="./images/threats_to_intermediaries.png" width=“300”>

Abbildung entnommen aus <a>[[GIAG99]](#ref_giag99)</a>

<a>[[GIAG99]](#ref_giag99)</a> leitet aus der Tabelle eine Liste von Hypothesen ab, die als direkte Prognosereferenz dienlich sein können:
* In einem monopolistisch oder oligopolistisch geprägten Anbietermarkt ist Disintermediation wahrscheinlich.
* Bei Notwendigkeit von Marktkenntnis, detailliertem Produktwissen oder Produktaugmentierung ist Reintermediation wahrscheinlich.
* Wenn Intermediäre ihre traditionellen Dienste über das transformierende Medium mit fairer, realwertiger Preisbildung kombinieren, haben sie eine gute Chance ihre Position zu halten.
* Wenn Intermediäre in der Vergangenheit keiner direkten Konkurrenz ausgesetzt waren und sich somit nicht zwingend weiterentwickeln mussten, sind sie durch innovative Dienstleistungen von Cybermediären besonders gefährdet.
* Wenn komplexe Kaufentscheidungen auf einen fragmentierten Markt treffen, können Cybermediäre einen Mehrwert durch vereinfachte Informationsbeschaffung generieren.

Auffallend ist, dass Disintermediation - entgegen des Blockchainanspruchs - das am wenigsten wahrscheinliche Resultat repräsentiert. Intermediäre haben als gewinnmaximierende Agenten den Stimulus, auch im Rahmen von Paradigmenwechseln zu persistieren. Diese These soll die zentrale Erkenntnis dieses Abschnitts darstellen.

Zweifelsohne repräsentiert die Blockchain eine Technologie, die Märkte revolutionieren kann und alle Akteure an allen Handelsstufen vor die Wahl stellt, sich an eines der drei geschilderten Szenarien zu binden. Disintermediation ist dabei natürlich keine bewusst wahrgenommene Entscheidung, sondern das Ergebnis des Unvermögens des Intermediärs sich gemessen an seinem Marktpotential neu zu positionieren. Sei dies in einer Nische oder im neuen Medium. Dass unsere Märkte kapitalistisch geprägt sind, sollte ein klares Indiz dafür sein, dass alle derzeit am Markt teilnehmenden Akteure versuchen werden ihren Fortbestand zu sichern. Der größten Bedrohung sind dabei zentralisierte, monopolistische Unternehmungen ausgesetzt. Inhärent sind diese aber auch gleichzeitig die bedeutsamsten Teilnehmer des aktuellen Systems und haben folglich sowohl die größte Marktmacht, als auch den größten Incentive zum weiteren Bestehen. 
Die Beobachtungen, die der Digitalisierung der Wirtschaft zur Jahrtausendwende zugrunde liegen, geben den Eindruck, dass der dezentrale, transparente Markt zwar sicherlich erneut intermediärsfeindlich wirkt, deren Existenzwille aber primär zu veränderten und/oder neuartigen Vermittlungsdiensten führt. Disintermediation scheint nicht das zwingend folgende Ergebnis der Konstituierung der Blockchain zu sein. Vielmehr haben wir mit einer Landschaft hochspezialisierter, neuartiger  Dienstleistungen zu rechnen.

##### Wertschöpfungstransparenz
...
##### Wirtschaftsautomation - M2M Transaktionen

...

## Literaturverzeichnis
<a name="ref_Ande16">[ANDE16]</a>: Andersen, Nicolai: Vorstellung der
Blockchain-Technologie
„Hallo, Welt!”, Deloitte, 03.2016, URL: https://www2.deloitte.com/content/dam/Deloitte/de/Documents/Innovation/Vorstellung%20der%20Blockchain-Technologie.pdf (letzter Zugriff: 03.05.2018)

<a name="ref_budic18">[BUDI18]</a>: BusinessDictionary.com : What is intermediation? definition and meaning ; URL: http://www.businessdictionary.com/definition/intermediation.html ; Date Accessed: April 29, 2018

<a name="ref_Bute15">[BUTE15]</a>: Buterin, Vitalik: On Public and Private Blockchains, 07.08.2015, URL: https://blog.ethereum.org/2015/08/07/on-public-and-private-blockchains/ (letzter Zugriff: 03.05.2018)

<a name="ref_Demush">[DEMUSH]</a>: Demush, Rostyslav: How Companies Can Leverage Private Blockchains to Improve Efficiency and Streamline Business Processes, URL: https://perfectial.com/blog/leveraging-private-blockchains-improve-efficiency-streamline-business-processes/ (letzter Zugriff: 03.05.2018)

<a name="ref_etla16">[ETLA16]</a>: ETLA; Mattila, Juri: The Blockchain Phenomenon – The Disruptive Potential of Distributed Consensus Architectures. ETLA Working Papers, 2016 ; ISSN: 2323-2420

<a name="ref_eule18">[EULE18]</a>: Euler, T. : The Token Classification Framework: A multi-dimensional tool for under-standing the classifying crypto tokens. Web-Quelle, 2018,
http://www.untitled-inc.com/the-token-classification-framework-a-multi-dimensional-tool-for-understanding-and-classifying-crypto-tokens/](http://www.untitled-inc.com/the-token-classification-framework-a-multi-dimensional-tool-for-understanding-and-classifying-crypto-tokens)

<a name="ref_gell96">[GELL96]</a>:Gellman, Robert: Disintermediation and the internet, Government Information Quarterly, Volume 13, Issue 1, 1996, Pages 1-8, ISSN: 0740-624X

<a name="ref_Ghal15">[GHAL15]</a>: Ghalsim, Yacine: Why we should drop the whole “Bitcoin vs blockchain” discussion, 07.10.2015, URL: https://medium.com/@YacineGhalim/why-we-should-drop-the-whole-bitcoin-vs-blockchain-discussion-e3e38e9a5104 (letzter Zugriff: 04.05.2018)

<a name="ref_giag99">[GIAG99]</a>: Giaglis, George M. ; Klein, Stefan ; O'Keefe, Robert M.: Disintermediation, Reintermediation, or Cybermediation? The Future of Intermediaries in Electronic Marketplaces, Global Networked Organizations, Proceedings 12 th Electronic Commerce Conference, Moderna organizacija, 1999, Pages 7-9

<a name="ref_hahn18">[HAHN18]</a>: Hahn, Christopher ; Wons, Adrian: Initial Coin Offering (ICO) - Unternehmensfinanzierung auf Basis der Blockchain-Technologie. Gabler Verlag, 2018, ISBN: 978-3-658-21786-0

<a name="ref_HOFM17">[HOFM17]</a>: Hofmann, Frank ; Wurster, Simone ; Eyal, Ron ; Böhmecke-Schwafert, Moritz : The immutability concept of blockchains and benefits of early standardization. Nanjing, China : ITU Kaleidoscope: Challenges for a Data-Driven Society (ITU K), 2017, ISBN: 978-9-2612-4281-7 

<a name="ref_INVE18">[INVE18]</a>: Investopedia.com : Hard Fork & Soft Fork ; URL: https://www.investopedia.com/terms/h/hard-fork.asp & https://www.investopedia.com/terms/h/hard-fork.asp ; Date Accessed: Mai 09, 2018

<a name="ref_Schl16">[SCHL16]</a>: Schlatt, Vincent; Schweizer, André; Urbach, Nils; Fridgen, Gilbert: Blockchain: Grundlagen, Anwendungen und Potenziale, S. 8-12, Fraunhofer FIT, 12.2016, URL: https://www.fim-rc.de/Paperbibliothek/Veroeffentlicht/642/wi-642.pdf (letzter Zugriff: 04.05.2018)

<a name="ref_schmidt99">[SCHM99]</a>: Schmidt, Reinhard ; Hackethal, Andreas ; Tyrell, Marcel: Disintermediation and the Role of Banks in Europe: An International Comparison, Journal of Financial Intermediation, Volume 8, Issues 1–2, 1999, Pages 36-67, ISSN: 1042-9573

<a name="ref_shen16">[SHEN16]</a>: Shen, Ji ; Wei, Bin ; Yan, Hongjun: Financial Intermediation Chains in an OTC Market. 2016, SSRN: https://ssrn.com/abstract=2577497

<a name="ref_VUJI18">[VUJI18]</a>: Vujičić, Dejan ; Jagodić, Dijana ; Ranđić, Siniša : Blockchain Technology, Bitcoin, and Ethereum: A Brief Overview. East Sarajevo, Bosnia and Herzegovina : IEEE INFOTEH-JAHORINA (INFOTEH), 17th International Symposium, 2018, ISBN: 978-1-5386-4907-7 

<a name="ref_walter07">[WALTE07]</a>: Walter, Benedikt: Intermediation und Digitalisierung. Springer-Verlag, 2007, ISBN: 3835096303 

<a name="ref_ZHEN17">[ZHEN17]</a>: Zheng, Zibin ; Xie, Shaoan ; Dai, Hongning ; Chen, Xiangping ; Wang, Huaimin : An Overview of Blockchain Technology: Architecture, Consensus, and Future Trends. Honolulu, HI, USA : IEEE International Congress on Big Data, 2017, ISBN: 978-1-5386-1996-4