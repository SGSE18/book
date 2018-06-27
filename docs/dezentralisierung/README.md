# Dezentrale Anwendungen

<!-- load css for math symbols -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

*Autor: Patrick Lukas Starzynski*

## Allgemeines

### Das Internet
Das heutige Internet ging aus dem Computer-Netzwerk ARPANET hervor,
welches ursprünglich im Auftrag der US-Luftwaffe entwickelt wurde.
Zur Realisierung wurde eine teilvermaschte Netztopologie gewählt,
wie in der folgenden Abbildung zu sehen:

<img src="./images/mesh_network.svg" title="Vermaschtes Netzwerk" height="200"/>

Abbildung entnommen aus [[WIKI18]](#ref_WIKI18)

Das dezentrale Netzwerk wurde geschaffen, um Institutionen,
 die im Auftrag des US-Verteidigungsministerium forschten, zu vernetzen. 
Das Ziel des Netzwerkes war es die Kommunikationskanäle im Falle 
eines Atomkriegs, für einen Vergeltungsschlag, aufrechterhalten zu können [[WHEE11]](#ref_WHEE11).

Diese grundsätzliche Idee der Dezentralisierung wurde vom heutigen Internet übernommen. 

So ist jedes Gerät, mit Zugang zum Internet, mit jedem anderen, dem Internet angeschlossenem, Gerät verbunden.
Exemplarisch gesprochen: Um vom Computer A zu C zu gelangen, gehe zunächst zu Computer B.
Wenn dieser nicht verfügbar ist, existiert ein Pfad von A nach D nach C.

### Zentralisierung des Internets

In der heutigen Zeit ist das Internet omnipräsent. Das IT-Beratungs- und Marktforschungsunternehmen Gartner Inc. hat im Februar 2017 einen Anstieg der 
sich Online befindlichen Geräte auf rund 8,4 Mrd. im Jahr 2017 prognostiziert [[GART17]](#ref_GART17). Somit befinden sich aller Voraussicht nach mehr Geräte im Internet als es Menschen auf der Erde gibt.

Jedoch ist in Frage zu stellen, ob die heutige Struktur des Internets tatsächlich ein dezentrales Netzwerk widerspiegelt. Welche Auswirkungen wären zu erwarten, wenn Unternehmen wie 
Alphabet Inc., Facebook oder Amazon.com ihre angebotenen Dienstleistungen einstellen würde? Oder wenn Internetangebote wie Wikipedia weltweit teilweise oder vollständig zensiert werden würden? 
Letzteres ist zumindest für viele der Internetnutzer tatsächlich Realität [[WIKI18f]](#ref_WIKI18f).

Um die Problematik dieser Fragestellung zu betrachten, ist ins Gedächtnis zu rufen, dass die konzeptionelle Idee eine Dezentralisierung der Kommunikation im Katastrophenfall war. 
Dennoch bedarf die Abschaltung und Kontrolle diverser Angebot des Internets keine Katastrophe, sondern ist kontrollierbar.
Ebenso werden Webhostingangebote oder Cloudlösungen häufig von den großen Internetdienstleistern angeboten, somit konzentriert sich der Datenverkehr an diversen zentralen Knotenpunkten. 
So hat beispielsweise das soziale Netzwerk Facebook im ersten Quartal 2018 monatlich rund 2,2 Mrd. aktive Nutzer zu verzeichnen [[STAT18a]](#ref_STAT18a).
Zusätzlich ist zu beobachten, dass  (u.a.) die genannten Unternehmen sich längst über ihre ursprüngliche Kernkompetenz hinaus entwickelt haben.
An dieser Stelle ist die Expansionsstrategie der Unternehmen Microsoft, Apple, Facebook, Alphabet und Amazon hervorzuheben. In den folgenden Abbildungen sind die Fusionen und Akquisitionen pro Jahr,
sowie die kumulierten Übernahmen dargestellt:

![ref_mergers_and_acquisitions_per_year](./images/mergers_and_acquisitions_per_year.png "Fusionen und Akquisitionen pro Jahr")

Eigene Grafik - Daten entnommen von [[WIKI18a]](#ref_WIKI18a) [[WIKI18b]](#ref_WIKI18b) [[WIKI18c]](#ref_WIKI18c) [[WIKI18d]](#ref_WIKI18d) [[WIKI18e]](#ref_WIKI18e) 

![ref_mergers_and_acquisitions_sum](./images/mergers_and_acquisitions_sum.png "Fusionen und Akquisitionen kumuliert")

Eigene Grafik - Daten entnommen von [[WIKI18a]](#ref_WIKI18a) [[WIKI18b]](#ref_WIKI18b) [[WIKI18c]](#ref_WIKI18c) [[WIKI18d]](#ref_WIKI18d) [[WIKI18e]](#ref_WIKI18e)

Bedingt durch die Unternehmsgröße, dem Markteinfluss und der Expansionsstrategie ist eine Zentralisierung innerhalb des dezentralisierten Netzes festzustellen.
Dabei wird die Zensur durch Regierungen sogar noch ignoriert.

Dennoch ist hervorzuheben, dass die Angebote nicht per se negativ zu beurteilen sind,
 schließlich sind viele Angebote industriell als auch privat von wesentlicher Bedeutung. Dennoch hat sich mit dem Aufkommen des Bitcoins und anderer Kryptowährungen ein Bedürfnis 
 nach dezentralisierten Ansätzen entwickelt. Dabei steht oft die Kontrolle persönlicher Daten und Informationen im Vordergrund, sowie die Angst vor Zensurmechanismen oder dem Misstrauen gegenüber
 Institutionen wie Finanzdienstleister oder Regierung.
 
Auf Basis von Peer-to-Peer-Konzepten hat sich die Vision tatsächlicher Dezentralisierung entwickelt. Beflügelt durch die Kryptowährungen haben sich unter anderem die Protokolle IPFS und DAT entwickelt, welche in den folgenden Kapiteln erläutert werden.

![ref_state_internet](./images/state_internet.png "Zustand des Internets")

Abbildung entnommen aus [[SHEA2017]](#ref_SHEA17)


## IPFS

Das interplanetare Fileystem, kurz IPFS, ist ein verteiltes Dateisystem. 
Konzeptionell ist es vergleichbar mit dem Peer-to-Peer-Protokoll BitTorrent.
Der wesentliche Unterschied zu klassischen Peer-to-Peer-Applikationen ist,
 dass IPFS für den Aufbau einer Netzinfrastruktur konzipiert wurde. 
 Dabei wurden die folgenden Herausforderungen,
 mit denen der aktuelle de facto Standard HTTP konfrontiert ist, identifiziert:
 <ol type="a">
  <li>Das Hosten und Verteilen von Datenmengen im Petabytebereich</li>
  <li>Die Verarbeitung von großen Datenmengen innerhalb einer Organisation</li>
  <li>On-Demand und/oder Echtzeitstreams</li>
  <li>Versionierung und Verlinkung von großen Datenmengen</li>
  <li>Dem versehentlichen Löschen von wichtigen Dokumenten</li>
</ol>

IPFS kombiniert Eigenschaften bekannter Systeme, wie z.B. DHTs, BitTorrent, Git und SFS [[BENE14]](#ref_BENE14).

#### Distributed Hash Tables

Verteilte Hashtabellen sind Datenstrukturen, die in Peer-to-Peer-Systemen genutzt werden, um die Speicherorte von Dateien abzubilden. 
So spiegelt jeder Speicherknoten einen Eintrag in der Hashtabelle wider. Diese vereinfachte Darstellung, dient als Vorlage für verschiedene Implementierungen und kann durch die generalisierte Schnittstelle
*publish(key, content)* und *lookup(key)* angeboten werden. Im IPFS-Kontext werden die Implementierungen Coral DSHT, Kademlia DHT bzw. S/Kademlia DHT genutzt [[BENE14]](#ref_BENE14).
##### Kademlia DHT

Einem Knoten wird ein 160-Bit Key zugeordnet, partizipierende Computer erhalten ebenso eine 160-Bit Knoten-ID, letztere ist einmalig und vergleichbar mit einer UUID. 
So werden Key-Value-Paare einer "nahen" ID zugeordnet. Zum Lokalisieren eines nahen Knotens wird ein Routingalgorithmus vom Start zum Ziel genutzt.
Kademlia betrachtet dabei Knoten als Blätter eines binären Baums, die Position eines Knoten wird anhand des kürzesten, einmaligen Prefix bspw. 0011 bestimmt.
Der genutzte Prefix wird durch eine XOR-Verknüpfung von zwei Knoten-IDs generiert [[MAYM02]](#ref_MAYM02).

Für IPFS hevorzuhebende Eigenschaften sind [[BENE14]](#ref_BENE14):

1. Lookupfunktion in großen Netzwerken in $\mathcal{O}(\log_2 n)$

2. Geringer Overhead, optimierte Nachrichten zur Kontrolle im Netzwerk

3. Resistenz durch Präferierung von langlebigen Knoten

4. Häufige Nutzung in bekannten P2P-Applikationen, wie z.B. in Gnutella oder BitTorrent,
 die ein Netzwerk von 20 Millionen Knoten bilden.

##### Coral DSHT

Coral ist eine Erweiterung des Kademlia Algorithmus, die die XOR-Verknüpfung zur Distanzermittlung verändert.
Resultierend werden Adressen der Peers, die Datenblöcke zur Verfügung stellen gespeichert. 
Außerdem wird die Funktion *get_value(key)* in *get_any_values(key)* geändert, um das Bilden von Hot-Spots zu minimieren.
Letztendlich werden in Abhängigkeit von Größe und Region, hierarchische Hashtabellen gebildet [[BENE14]](#ref_BENE14).

##### S/Kademlia DHT
Ist ebenfalls eine Erweiterung vom Kademlia Algorithmus, diese kennzeichnet sich zusätzliche Schutzmechanismen bzgl. Sybil-Attacken,
Knoten generieren PKI (Public-Key-Infrastruktur) Schlüsselpaare mit denen Nachrichten, die durch das Netzwerk propagiert werden zu signieren.
Der Lookupprozess wird über disjunkte Pfade durchgeführt, um gute Knoten mit einander zu verbinden [[BENE14]](#ref_BENE14).

#### BitTorrent

Ebenso wird IPFS durch drei Schlüsselfeatures des Filesharing Systems BitTorrent geprägt [[BENE14]](#ref_BENE14):

1. BitTorrent belohnt Knoten, die aktiv am Netzwerk teilnehmen und bestraft so genannte Leecher, die lediglich das Netzwerk belasten.
Als belastend zu verstehen sind Nutzer(-gruppen), die Dateien vom Netzwerk herunterladen und es vermeiden Dateien im Netzwerk zu verbreiten.

2. BitTorrent verwaltet seltene Datenchunks und versucht diese priorisiert zu verteilen.

3. Die Belohnungs -und Bestrafungsstrategie ist anfällig gegenüber einem Exploit, in dem Angreifer ihre Bandbreite auf weitere Peers aufteilen [[ADAM15]](#ref_ADAM15).

#### Git

Das Versionsverwaltungssystem Git, dass häufig mit der Website github.com assoziiert wird, bietet ebenso wichtige Funktionalitäten für das IPFS-Protokoll.
Als Randnotiz sei an dieser Stelle zu erwähnen, dass GitHub seit dem 04.06.2018 ebenfalls ein Bestandteil der Liste der Fusionen und Akquisitionen der Firma Microsoft geworden ist [[WIKI18c]](#ref_WIKI18c).
Für IPFS hervorzuheben sind die folgenden Funktionalitäten [[BENE14]](#ref_BENE14):

1. Unveränderbare Objekte die durch Dateien (blobs), Verzeichnisse (tree) und Veränderungen (commits) repräsentiert werden.

2. An den Inhalt gebundene Adressierung durch kryptografischen Hash der Inhalte.

3. Links zu Objekten bilden einen azyklischen gerichteten Graphen, bzw. Merkle DAG (siehe Buchkapitel Blockchain Technologien<a href="../blockchain/technologie/#merkle-tree"> Merkle Tree) </a>

4. Metadaten, die z.B. Branches, Tags etc. darstellen sind durch Zeigerreferenzen realisierbar, wodurch diese leicht zu erstellen und modifizieren sind.

5. Versionsänderungen modifizieren nur Referenzen oder fügen Objekte hinzu.

6. Verteilen von Versionsänderungen werden durch einen Objekttransfer und durch Modifizierung der Remotereferenz realisiert.

#### SFS

Zuletzt wird das Konzept von Self-Certified Filesystems genutzt, dass das Schema
<br/> **/sfs/`<Location>`:`<HostId>`** nutzt.
Die Location wird durch die Servernetzwerkadresse generiert während die **HostID = hash(public_key || Location)** definiert ist [[BENE14]](#ref_BENE14).

#### Design

IPFS ist ein P2P-System, ohne privilegierte Knoten. Jeder Knoten speichert Dateien speichert Objekte in seinem lokalen Dateisystem.
Außerdem ist ein Knoten mit weiteren Knoten verbunden, mit denen Objekte ausgetauscht werden. 
Das Protokoll selbst ist in entsprechende Teilprotokolle, die jedoch nicht unabhängig voneinander sind, gegliedert [[BENE14]](#ref_BENE14):

1.
2.
3.
4.
5.
6.
7.

## DAT

### Beakerbrowser

## DAT vs. IPFS vs. HTTP

## Literaturverzeichnis
<a name="ref_ADAM15">[ADAM15]</a>:
Adamsky, Florian et al., P2P File-Sharing in Hell: Exploiting BitTorrent Vulnerabilities to Launch
Distributed Reflective DoS Attacks, 2015

<a name="ref_BENE14">[BENE14]</a>:
Benet, Juan: IPFS - Content Addressed, Versioned, P2P File System, 2014

<a name="ref_GART17">[GART17]</a>:
Gartner, Inc., Gartner Says 8.4 Billion Connected "Things" Will Be in Use in 2017, Up 31 Percent From 2016, URL: https://www.gartner.com/newsroom/id/3598917 (abgerufen am 26.06.2018)

<a name="ref_MAYM02">[MAYM02]</a>:
Maymounkov, Petar und Mazières, David, Kademlia: A Peer-to-peer information system based on the XOR Metric, 2002

<a name="ref_PROT18">[PROT18]</a>:
Protocol Labs, URL: https://ipfs.io/ (abgerufen am 26.06.2018)

<a name="ref_OGDE18">[OGDE18]</a>:
Ogden et al., Dat - Distributed Dataset Synchronization And Versioning, 2018

<a name="ref_SHEA17">[SHEA17]</a>: 
Shea, Ryan: Centralized vs Decentralized - The Internet of the Past, Present and Future, URL: https://medium.com/@ryanshea/the-internet-of-the-past-present-and-future-51b10c765d8d (abgerufen am 20.06.2018)

<a name="ref_STAT18">[STAT18]</a>:
Statista, Market capitalization of the largest internet companies worldwide as of May 2018 (in billion U.S. dollars), URL: https://www.statista.com/statistics/277483/market-value-of-the-largest-internet-companies-worldwide/ (abgerufen am 26.06.2018)

<a name="ref_STAT18a">[STAT18a]</a>:
Statista, Number of monthly active Facebook users worldwide as of 1st quarter 2018 (in millions), URL: https://www.statista.com/statistics/264810/number-of-monthly-active-facebook-users-worldwide/ (abgerufen am 26.06.2018)

<a name="ref_WHEE11">[WHEE11]</a>:
Wheen, Andrew: The birth of the Internet, Springer New York, 2011

<a name="ref_WIKI18">[WIKI18]</a>:
Wikipedia, Vermaschtes Netz. URL: https://de.wikipedia.org/wiki/Vermaschtes_Netz (abgerufen am 20.06.2018)

<a name="ref_WIKI18a">[WIKI18a]</a>:
Wikipedia, List of mergers and acquisitions by Facebook, URL: https://en.wikipedia.org/wiki/List_of_mergers_and_acquisitions_by_Facebook  (abgerufen am 26.06.2018)

<a name="ref_WIKI18b">[WIKI18b]</a>:
Wikipedia, List of mergers and acquisitions by Alphabet, URL: https://en.wikipedia.org/wiki/List_of_mergers_and_acquisitions_by_Alphabet (abgerufen am 26.06.2018)

<a name="ref_WIKI18c">[WIKI18c]</a>:
Wikipedia, List of mergers and acquisitions by Microsoft, URL: https://en.wikipedia.org/wiki/List_of_mergers_and_acquisitions_by_Microsoft (abgerufen am 26.06.2018)

<a name="ref_WIKI18d">[WIKI18d]</a>:
Wikipedia, List of mergers and acquisitions by Apple, URL: https://en.wikipedia.org/wiki/List_of_mergers_and_acquisitions_by_Apple (abgerufen am 26.06.2018)

<a name="ref_WIKI18e">[WIKI18e]</a>:
Wikipedia, List of mergers and acquisitions by Amazon, URL: https://en.wikipedia.org/wiki/List_of_mergers_and_acquisitions_by_Amazon (abgerufen am 26.06.2018)

<a name="ref_WIKI18f">[WIKI18f]</a>:
Wikipedia, Zensur von Wikipedia, URL: https://de.wikipedia.org/wiki/Zensur_von_Wikipedia (abgerufen am 26.06.2018)

