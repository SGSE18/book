# Blockchain Technologie


## Architektur und Funktionsweise
Autor: Sebastian Janzen

Der Aufbau einer Blockchain ist eine Blocksequenz in denen die komplette Transaktionshistorie festgehalten wird, wie zum Beispiel einem öffentlichen Konto. Jeder Block zeigt auf den Vorgänger bis auf den ersten Block einer Blockchain, den sogenannten "Genesisblock". <a>[[ZHENG17]](#ref_Zheng17)</a>

![blockchain_architecture](./images/blockchain_architecture.png "Blockchain Architektur")
Abbildung angepasst aus <a>[[ANDE16]](#ref_Ande16)</a>

>___!!!Das nächste Unterkapitel "Block" überschneidet sich mit dem Unterkapitel "Blöcke" von Björn. Bleibt erstmal so stehen, wir entscheiden später wie wir vorgehen!!!___ 

### Block

### Digitale Signatur

### Hauptmerkmale einer Blockchain

__Dezentralisierung__

__Beständigkeit__

__Anonymität__

__Nachvollziehbarkeit__

### Arten einer Blockchain 

Es gibt drei Arten von Blockchain: öffentliche, private und diejenigen welche einem Konsortium angehören.

__Öffentlich__

![blockchain_public](./images/blockchain_public.jpg "Public Blockchain")

_Öffentliche Blockchain_, Abbildung angepasst aus <a>[[DEMUSH]](#ref_Demush)</a>

Die ursprüngliche Art einer Blockchain (siehe Bitcoin-Blockchain). Alle Einträge sind öffentlich sichtbar. Jeder kann im Netzwerk eine Transaktion tätigen und solange diese valide ist, wird sie auch einer Blockchain hinzugefügt. Es ist allen freigestellt am Konsensus teilzunehmen und sogar die Netzwerke zu verwalten. Im Gegenzug gibt es niemanden der das Alleinrecht im Netzwerk hat - alle Teilnehmer sind gleich. Aus diesem Grund wird ein öffentliches Blockchain auch _permissionless blockchain_ genannt.
Der Einfluss ist proportional der Ressourcen eines Teilnehmers. Öffentliche Blockchains nutzen Crypto-Economics, eine Kombination aus Konsensalgorithmen und wirtschaftlichen Anreizen, als Ersatz für einen zentralen Trust.  Die üblichen Konsensusalgorithmen sind Proof of Work und Proof of Stake (Bitcoin, Ethereum). Die Vorteile von öffentlichen Blockchains sind Transparenz und Anonymität, wobei die Skalierbarkeit und Effizienz eher zweitrangig sind. Diese Art der Blockchain wird als völlig dezentral bezeichnet. <a>[[DEMUSH]](#ref_Demush)</a>, <a>[[BUTE15]](#ref_Bute15)</a>

__Privat und Konsortium__

![blockchain_private](./images/blockchain_private.jpg "Private und Konsortium Blockchain")

_Private und Konsortium Blockchains_, Abbildung angepasst aus <a>[[DEMUSH]](#ref_Demush)</a>

Wie der Name schon andeutet, sind private Blockchains nicht für jeden sichtbar und zugänglich. Sie werden aufgrund von überschaulichen Anzahl von Knoten viel effektiver verwaltet. Die Schreibrechte an der Blockchain gehören üblicherweise einer einzigen Organisation, die Leserechte können zum Teil oder ganz öffentlich sein. Diese Art von Blockchain heißt _permissioned blockchain_. Die üblichen Verwendungszwecke sind Datenhaltung und Wirtschaftsprüfung im Rahmen einer einzigen Firma. Konsortium-Blockchains unterscheiden sich insofern von privaten, dass nur vorausgewählte Knoten am Konsensus teilnehmen können. Diese Knoten können einer Gruppe von Banken gehören, wo jede Bank einen Knoten steuert. Wie im Falle der privaten Blockchain, kann das Leserecht teilweise oder ganz öffentlich sein, was dazu führt, dass Teilnehmern außerhalb des Konsortiums eine eingeschränkte Möglichkeit haben über eine API die Block Hashes zu überprüfen. Banken und Unternehmen bekommen damit eine Möglichkeit direkt ihre Vermögenswerte untereinander in Sekunden zu übertragen und die private P2P-Netzwerke zu überwachen. Diese Blockchains werden als teilweise dezentralisiert bezeichnet.
<a>[[DEMUSH]](#ref_Demush)</a>, <a>[[BUTE15]](#ref_Bute15)</a>

### Unterschiede zwischen permissionless und permissioned

In dieser Tabelle sind die wichtigsten Unterschiede nochmals zusammengefasst.

![blockchain_private_vs_public](./images/blockchain_private_vs_public.png "Blockchain Unterschiede")

_Blockchain Unterschiede_, Abbildung angepasst aus <a>[[GHAL15]](#ref_Ghal15)</a>

Der größte Vorteil der permissioned Blockchain ist die Geschwindigkeit, während permissionless Blockchain in anderen Bereichen auftrumpft. Ein Radar-Diagramm im nächsten Bild macht nochmal die Unterschiede deutlich. 

![blockchain_permissioned_vs_permissionless](./images/blockchain_permissioned_vs_permissionless.png "Permissioned vs Permissionless")

_Permissioned vs Permissionless_, Abbildung aus <a>[[GHAL15]](#ref_Ghal15)</a>

## Eigenschaften einer Blockchain 

Autor: Björn Enders-Müller

### Immutable



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

### Arten von Token

#### Utility Token

Die häufigste Tokenform, der Utility Token, stellt bei Startups, die diesen Token anbieten, ein Coupon für die zukünftige Verwendung des Services / Produktes dar, der Token ist damit zentraler Plattformbestandteil. Ein Beispiel für diese Token Art ist "BAT (basic attention token)" welcher das Geschäft rund um Onlinewerbung reformieren soll. Ziel ist es, Nutzer für das Ansehen von Werbung mit BAT Token zu bezahlen, die wiederum ausgegeben werden können um z.B. werbefreie Formate zu finanzieren.

#### Equity Token

Equity Token stellen eine wertpapierähnliche Unternehmensbeteiligung dar. Ein Beispiel ist der ERC20 Token PAY der Firma TenX. TenX stellt Kreditkarten aus die es erlauben Zahlungen mit Kryptowährungen zu tätigen. Um Kapital für die Umsetzung der Geschäftsidee einzusammeln hat die Firma den PAY Token ausgegeben. In unbestimmter Zukunft sollen 0,5% des Umsatzes den die TenX Kreditkarten jährlich generieren anteilig an alle PAY Token Besitzer ausgeschüttet werden. Zuletzt wurde diese wertpapierähnliche Eigenschaft, wegen der daraus resultierenden Regulierungsanforderungen, nicht mehr öffentlich kommuniziert.

#### Asset-backed Token

Unter Asset-based Token werden mit Assets, also mit Anlagegütern, gestützte Token verstanden. Beispiele dafür ist die mit Rohöl gedeckte, von der brasilianischen Regierung lancierte, aber umstrittene Kryptowährung "Petrol" oder der mit Gold gedeckte, noch nicht öffentliche gehandelte "Digix Gold Token (DGX)". Anteile an weiteren bespielhaften Anlagegütern sind möglich z.B. Windkraftanlagen, Immobilien, deren Finanzierung eventuell dadurch erst möglich ist. 

### Tokenization

### Initial Coin Offering (ICO)

Ein Initial Coin Offering ist eine, bis dato, weitgehend unregulierte Methode der Kapitalaufnahme bei der im Gegensatz zum klassischen Initial Public Offering (IPO) (deutsch: Börsengang), die Kapitalaufnahme in Form von Kryptowährungen erfolgt. Vergleichbar mit dem Börsenhandel bei dem mit Echtgeldwährungen (FIAT Währungen) Anteile an einem Unternehmen in Form von Aktien erworben werden können, werden bei einem ICO üblicherweise Token ausgegeben die mittels Kryptowährungen gekauft werden. Die Mindestinvestition ist, ähnlich wie bei Crowdfunding Finanzierungsmodellen, so niedrig, dass auch private Kleininvestoren partizipieren können. <a>[[HAHN18]](#ref_hahn18)</a>

Während der traditionelle Finanzmarkt durch nationale und internationale Finanzaufsichten rechtlich stark reguliert ist, ist dies bei den neuartigen ICOs durch die rasante technische Entwicklung und unterstützt durch die anonymen bzw. pseudonymen Transaktionen von Kryptowährungen bisher kaum der Fall.


#### Typischer Ablauf eines ICOs basierend auf Ethereum (ERC20) Token

* Ein Unternehmen bzw. loses Entwicklerkollektiv veröffentlich ein Whitepaper in dem eine Geschäftsidee / Anwendungsbereich für den Token und eventuell zukünftige Entwicklungsziele formuliert sind

* Ein Smart Contract auf ERC20 Basis wird für den ICO erstellt in dem unteranderem Bezeichnung und Maximalmenge an Token definiert wird

* Optionale nicht-öffentliche Pre-Sale bzw. Pre-ICO Phase für Großinvestoren, die individuelle Konditionen beinhaltet
 
* Der öffentliche Token Verkauf (Sale) beginnt, der ICO Ersteller legt einen initialen Verkaufspreis fest, bespielsweise 1000 Token / 1 Ether.

* Der Token Sale endet erfolgreich wenn mindestens das Soft-Cap (Mindestausgabemenge) innerhalb einer zeitlichen Deadline erreicht ist bzw. spätestens wenn das Hard-Cap erreicht ist (Maximalausgabemenge)

* Der Token wird an speziellen Kryptowährungs / Token Börsen gelistet, und kann öffentlich gehandelt werden, der Wert der Token wird durch die Marktmechanismen Angebot/Nachfrage bestimmt

Für die Investoren des ICOs hat sich der Wert der Token im Idealfall durch mediale Aufmerksamkeit, Entwicklungsfortschritt und Kooperationen mit anderen Unternehmen gegenüber des intialen Sales bzw. Pre-Sales vervielfacht. 

#### Risiken




## Herausforderungen und Risiken

### Technische Herausforderungen
Autor: Fynn Klöpper

Angriffsszenarios (Sybil attack, 51%-Attack)
Skalierung (-sprobleme)

Quellen:
https://www.freehaven.net/anonbib/cache/sybil.pdf

#### Angriffsszenarien

##### Sybil Attacke

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

###### Definition

###### Lösungsansätze

#### Skalierung (-sprobleme)


### Ökonomische und gesellschaftliche Herausforderungen

Autoren: Mario Cichonczyk und Martin Teuber

Konsequenzen
Sozial-wissenschaftlich
betriebswirtschaftlich

=======
#### Ökonomische Implikationen
Autor: Mario Cichonczyk
##### Intermediation
Im Intermediationskonzept agieren nach <a>[[WALTER07]](#ref_walter07)</a> unabhängige, gewinnmaximierende ökonomische Agenten basierend auf den Bedürfnissen der Vermittlung von Angebot und Nachfrage. Die Aufhebung von Marktintransparenzen unter Erhebung einer Vermittlungsgebühr bildet dabei den Ertragsüberschuss im Cashflow des Intermediärs. Das Ziel ist also je nach Anwendungsfall die Allokation von Angebot->Nachfrage oder Nachfrage->Angebot.

Wenn ein Marktteilnehmer dem Markt beitritt ist er mit der unbestimmt zeitverzögerten Suche nach seinem Vertragspartner konfrontiert. Das Resultat sind Suchkosten, die sich vorab nur schwierig beziffern lassen. Ein Zwischenhändler bietet die Fixierung von Kosten und/oder Zeit, die zwischen Anbahnung und Vertragsschluss aufgewendet werden müssen. Intermediäre haben demnach eine ständige Präsenz am Markt, da sie im Vergleich zu ihren Vertragspartnern den Handel nach Vertragsschluss nicht verlassen. Wenn ein Asset in ihren Besitz übergeht, leiten sie es an Käufer weiter, welche das Asset höherwertig beziffern. Vergleichbar versuchen diese das Asset aus Quellen zu beschaffen, die es geringwertiger einstufen. <a>[[SHEN16]](#ref_shen16)</a>. Intermediäre schöpfen also Wert, wenn ein Assetflow mit Unkenntnis über den Gesamtmarkt verknüpft ist. Dieses Nichtwissen ist das Resultat der imperfekten Natur realer Märkte, in denen die vollständige Information über alle Produzenten und Konsumenten nicht vorliegt <a>[[BUDIC18]](#ref_budic18)</a>. 

Offensichtlich kann sich auf diese Weise eine komplexe Kette von Handelsstufen zwischen Produkterschaffung und Endverbraucher bilden. Das Hinzukommen von Handelsstufen scheint im Zeitalter des eCommerce aber einem gegenläufigen Trend zu unterliegen<a>[[ETLA16]](#ref_etla16)</a>. Internetunternehmen wie Amazon konsolidieren komplexe Handelsketten in einfach nutzbaren Plattformen. Das Geschäftsmodell der Realweltvermittlung von Kontakten ist in diesem schnelllebigen Kontext nicht mehr nachaltig. Wichtig ist es hier zu beachten, dass das Intermediationsprinzip dennoch weiter existiert. Der heterogene Assetflow zentralisiert sich lediglich in einem monopolistisch geprägten Intermediär. Diese Entwicklung lässt sich teilbegründen mit einer inhärenten Eigenschaft des Internets als verteiltes System: Misstrauen<a>[[ETLA16]](#ref_etla16)</a>. Produzenten und Konsumenten gravitieren zu dem Vermittler, welcher das größte Vertrauen im suspekten Austauschmedium repräsentiert. Diese Beobachtung stellt die Basis des disruptiven Disintermediationspotentials der Blockchain dar. 

TODO: Risiken,  Bedeutung

##### Wertschöpfungstransparenz
...
##### Wirtschaftsautomation - M2M Transaktionen

...

## Literaturverzeichnis
<a name="ref_walter07">[WALTER07]</a>: Walter, Benedikt: Intermediation und Digitalisierung. Springer-Verlag, 2007, ISBN: 3835096303 
<a name="ref_shen16">[SHEN16]</a>: Shen, Ji ; Wei, Bin ; Yan, Hongjun: Financial Intermediation Chains in an OTC Market. 2016, SSRN: https://ssrn.com/abstract=2577497
<a name="ref_budic18">[BUDIC18]</a>: BusinessDictionary.com : What is intermediation? definition and meaning ; URL: http://www.businessdictionary.com/definition/intermediation.html ; Date Accessed: April 29, 2018
<a name="ref_etla16">[ETLA16]</a>: ETLA; Mattila, Juri: The Blockchain Phenomenon – The Disruptive Potential of Distributed Consensus Architectures. ETLA Working Papers, 2016 ; ISSN: 2323-2420

<a name="ref_ZHEN17">[ZHEN17]</a>: Zheng, Zibin ; Xie, Shaoan ; Dai, Hongning ; Chen, Xiangping ; Wang, Huaimin : An Overview of Blockchain Technology: Architecture, Consensus, and Future Trends. Honolulu, HI, USA : IEEE International Congress on Big Data, 2017, ISBN: 978-1-5386-1996-4

<a name="ref_hahn18">[HAHN18]</a>: Hahn, Christopher ; Wons, Adrian: Initial Coin Offering (ICO) - Unternehmensfinanzierung auf Basis der Blockchain-Technologie. Gabler Verlag, 2018, ISBN: 978-3-658-21786-0

<a name="ref_VUJI18">[VUJI18]</a>: Vujičić, Dejan ; Jagodić, Dijana ; Ranđić, Siniša : Blockchain Technology, Bitcoin, and Ethereum: A Brief Overview. East Sarajevo, Bosnia and Herzegovina : IEEE INFOTEH-JAHORINA (INFOTEH), 17th International Symposium, 2018, ISBN: 978-1-5386-4907-7 

<a name="ref_HOFM17">[HOFM17]</a>: Hofmann, Frank ; Wurster, Simone ; Eyal, Ron ; Böhmecke-Schwafert, Moritz : The immutability concept of blockchains and benefits of early standardization. Nanjing, China : ITU Kaleidoscope: Challenges for a Data-Driven Society (ITU K), 2017, ISBN: 978-9-2612-4281-7 

<a name="ref_Demush">[DEMUSH]</a>: Demush, Rostyslav: How Companies Can Leverage Private Blockchains to Improve Efficiency and Streamline Business Processes, URL: https://perfectial.com/blog/leveraging-private-blockchains-improve-efficiency-streamline-business-processes/ (letzter Zugang: 03.05.2018)

<a name="ref_Ande16">[ANDE16]</a>: Andersen, Nicolai: Vorstellung der
Blockchain-Technologie
„Hallo, Welt!”, 03.2016, URL: https://www2.deloitte.com/content/dam/Deloitte/de/Documents/Innovation/Vorstellung%20der%20Blockchain-Technologie.pdf (letzter Zugang: 03.05.2018)

<a name="ref_Bute15">[BUTE15]</a>: Buterin, Vitalik: On Public and Private Blockchains, 07.08.2015, URL: https://blog.ethereum.org/2015/08/07/on-public-and-private-blockchains/ (letzter Zugang: 03.05.2018)

<a name="ref_Ghal15">[GHAL15]</a>: Ghalsim, Yacine: Why we should drop the whole “Bitcoin vs blockchain” discussion, 07.10.2015, URL: https://medium.com/@YacineGhalim/why-we-should-drop-the-whole-bitcoin-vs-blockchain-discussion-e3e38e9a5104