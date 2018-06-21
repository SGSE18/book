# Cloud computing

## Einleitung

- Struktur des Kapitels erläutern

### Definition

Für den Begriff "Cloud Computing" gibt es keine Definition, die sich zu diesem Zeitpunkt allgemeingültig durchsetzen konnte, jedoch ähneln sich die meisten häufig in den Kernpunkten. Die Definition der US-amerikanischen Standardisierungsstelle NIST (National Institute of Standards and Technology) wird in vielen Publikationen und Vorträgen verwendet und lautet:

*"Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction."* [[NIST11]](#ref_nist11)

Neben dem Kernpunkt aller Definitionen, dass Rechnerressourcen über ein Netzwerk bereitgestellt und genutzt werden können, stellt das NIST mit dieser Definition eine schnelle und einfache Verwendung in den Fokus. Das Bundesamt für Sicherheit in der Informationstechnik (BSI) geht noch einen Schritt weiter und sagt, dass Angebote und Nutzung der Cloud Dienstleistungen ausschließlich über definierte technische Schnittstellen und Protokolle abläuft. Die direkte Interaktion mit den Anbietern ist nicht vorgesehen. [[BSI18]](#ref_bsi18)

### Geschichtliches

Die Bedeutung von "Cloud Computing" wie sie heute existiert und was damit verbunden wird, hat sich seit der ersten Verwendung nicht viel verändert. Die Compaq, Weltmarktführer für PC-Systeme der 1990er, verwendete den Begriff 1996 in einem internen Dokument. Schon davor wurde der Begriff "Cloud" und die dazugehörige Abbildung verwendet, um unter anderem das Internet, Telekommunikation und verteilte Anwendungen darzustellen. [[REGA11]](#ref_rega18)

Populär wurde der Begriff "Cloud Computing", als Amazon 2006 ihre Elastic Compute Cloud (EC2) auf den Markt brachte. In den anschließenden Jahren brachten auch Unternehmen wie Google, Microsoft, IBM und auch Oracle vergleichbare Produkte auf den Markt, um den neu erzeugten Bedarf nach externer und mietbarer Rechenleistung zu bedienen. Das erste open-source Projekt, welches das Erstellen von privaten und hybrid Clouds ermöglichte, war das OpenNebula Projekt der NASA und wurde 2008 veröffentlicht. [[FOOT17]](#ref_foot17) [[IBMJ]](#ref_ibmj09)


## ?? Architektur / Konzept


### Charakteristika

NIST Charakteristika:

- __On-demand self-service__: Ein Nutzer kann ohne menschliche Interaktion (also eigenständig) die zugänglichen Ressourcen, wie Serverinstanzen und Speicher, verwalten.
- __Broad network access__: Die angebotenen Funktionen sind über das Netzwerk und mittels standardisierter Mechanismen zu erreichen und darauf ausgerichtet Client-Plattformen wie Smartphones, Tablets oder Laptops zu unterstützen.
- __Resource pooling__: Die Ressourcen des Anbieters sind darauf ausgelegt von mehreren Kunden parallel genutzt zu werden. Dies wird erreicht, indem sowohl die physischen als auch die virtuellen Ressourcen einem Kunden automatisiert zugewiesen und entzogen werden.
- __Rapid elasticity__: Funktionen können elastisch bereitgestellt und freigegeben werden, um eine Skalierung zu ermöglichen, die sich (manchmal auch automatisiert) den Umständen entsprechenden anpasst. Dem Nutzer erscheinen die Ressourcen häufig als unbegrenzt und können dadurch zu beliebigen Zeitpunkten in beliebigen Mengen angefordert werden.
- __Measured service__: Die Nutzung von Cloud Systemen wird automatisiert überwacht, um beispielsweise den genutzten Speicher, die genutzte Bandbreite oder die Anzahl der aktiven Benutzer zu messen. Diese können sowohl von Seiten des Nutzers, als auch vom Anbieter aus transparent überwacht, kontrolliert und bekanntgegeben werden.

[[NIST11]](#ref_nist11)

- https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf

Weitere Charakteristika:

- https://en.wikipedia.org/wiki/Cloud_computing

- https://www.bsi.bund.de/DE/Themen/DigitaleGesellschaft/CloudComputing/Grundlagen/Grundlagen_node.html


### Service Modelle

Auf Basis von Cloud Computing Technologien sind in den vergangenen Jahren eine Vielzahl verschiedener Projekte und Produkte entstanden, die vor allem darauf abzielen dem Nutzer Funktionalitäten flexibel und skalierbar zur Verfügung zu stellen. Da Nutzer in der Regel keine Funktionalitäten wirklich kaufen, sondern eher mieten, wird in diesem Zusammenhang von "Services" gesprochen. In diesem Zusammenhang ist auch die Begrifflichkeit "as a Service" entstanden, mit denen Cloud Computing Produkte häufig betitelt werden.

Das folgende Bild zeigt den Zusammenhang der drei verbreitetsten Service Modelle _"Infrastructure as a Service" (IaaS)_, _"Plattform as a Service" (PaaS)_ und _"Software as a Service" (SaaS)_ in Form eines Mengendiagramms. In den nächsten Abschnitten sollen diese drei Modelle und weitere vorgestellt und deren Anwendungsfälle betrachtet werden.

<span style="display:block;text-align:center"/>![alt text](./images/Iaas_Paas_Saas.jpg "IaaS vs PaaS vs SaaS")
<span style="display:block;text-align:center"/>Quelle: [[GASS16]](#ref_gass16)

#### Infrastructure as a Service (IaaS)

Mit IaaS wird das Bereitstellen von IT-Infrastrukturen mittels high-level APIs beschrieben, welche Details und Funktionen auf eine höhere Abstraktionsebene anheben, um deren Benutzung zu vereinfachen. Typische Infrastrukturen, die als Service bereitgestellt werden sind Rechenleistung und Speicherplatz.

Über sogenannte "Hypervisor" oder "Virtual Machine Monitor" (VMM) werden auf einem Computer eine oder mehrere virtuelle Maschinen (VMs) gestartet und verwaltet. Der Computer, auf dem die VMs laufen wird "Host" genannt, während die laufenden VMs als "Guest" bezeichnet werden. Anzumerken ist, dass das Betriebssystem des Host-Systems nicht einschränkt, welche Betriebssysteme auf den VMs genutzt werden können. Im Bereich von Cloud Computing werden Orchestrierungs Technologien genutzt, um unter anderem die Entscheidung auf welchem Host eine VM laufen soll und auch das Verknüpfen von neuen VMs und freiem Speicher zu automatisieren. Dadurch wird ermöglicht, dass eine Vielzahl von Nutzer neue VMs eigenständig aufsetzen und nutzen können, ohne dass Interaktionen mit einem Dritten notwendig sind. In der Regel stellen Anbieter von IaaS ein Webportal zur Verfügung, über das neue Maschinen mit ein paar Klicks erzeugt werden können und dabei sowohl das Betriebssystem als auch die Rechen- und Speicherleistung festgelegt werden. [[SHAW17]](#ref_shaw17) [[ROUS17]](#ref_rous17)


#### Platform as a Service (PaaS)

#### Software as a Service (SaaS)

#### Function as a Service (FaaS)

#### Everything as a Service (XaaS)


### ?? Cloud-Formen

#### Public

#### Private

### Community

#### Hybrid


### Vergleich zu anderen Modellen

### Edge Computing

Mit dem Begriff "Edge Computing" wird der Ansatz beschrieben, mit dem die Intelligenz eines Netzwerkes zur Datenquelle verschoben wird. Gemeint ist, dass Rechenleistung und Speicher an die "Edge", also die Kante, eines Netzwerkes gebracht werden, um vor Ort die dort entstehenden Daten zu verarbeiten. Der Wandel, der durch Edge Computing vollzogen wird, ist in mehreren Bereichen sehr vielversprechend und bringt einige Vorteile mit sich.

Zum einen senkt es die Latenz, die eine Anwendung oder ein Gerät für eine Entscheidungsfindung oder ein Ergebnis braucht. Eine Anfrage quer über den Globus zu schicken, wo eventuell weitere Anfragen entstehen, ehe eine Antwort zurück kommt, dauert deutlich länger als auf alle benötigten Mittel vor Ort zugreifen zu können. Laut Matthew Lynley von "techcrunch.com" [[LYNL18]](#ref_lynl18) entwickelt Amazon möglicherweise Chips für Amazon Echo, um genau diesem Latenz-Problem entgegen zu wirken. Diese Chips sollen die Informationen und Anfragen, die in die Cloud geschickt werden müssen, senken, um so die Antwortzeit drastisch zu reduzieren.

Zum anderen bietet Edge Computing die Möglichkeit über ein richtiges Management die Sicherheit beispielsweise von Nutzern und deren Geräten zu steigern. Spätestens nach der Distributed Denial of Service (DDOS) Attacke auf die Dyn im Oktober 2016 [[STAT16]](#ref_stat16) ist die Sicherheit von Edge Geräten, wie sie häufig für Internet of Things (IoT) Netzwerke benutzt werden, ein großes Thema. Damals konnte ein riesiges Botnetz, das zum Großteil aus IoT-Geräten bestand, die Verwendung des Internets dramatisch stören. Die Mirai Malware übernahm die Kontrolle von Geräten, die statische Nutzernamen und Passwörter besaßen oder diese den Werkseinstellungen entsprachen und nutzte die so gesammelte Rechenleistung für eine DDOS Attacke gegen den DNS-Betreiber der USA.

Ebenso wie Werkseinstellungen von Nutzernamen und Passwörter, bringen auch veraltete Betriebssysteme und Software Sicherheitsrisiken mit sich. Laufende IoT-Geräte werden nur selten mit aktuellen Updates ausgestattet und beinhalten wenige Sicherheitsmechanismen. Statt händisch einzelne Geräte zu updaten sollte stattdessen ein zentrales Management diese Aufgabe übernehmen und für mehr Sicherheit am Netzwerkrand sorgen. Genauso wie Webbrowser meist verdeckt Updates erhalten oder Smartphone-Besitzer auf neue Versionen hingewiesen werden, sollte es auch bei anderen Edge-Geräten der Fall sein.

Neben den Sicherheitsaspekten kann Edge Computing auch dabei helfen ein weiteres Problem zu lösen, das durch IoT entstanden ist. Die enorme Menge an Daten, die durch IoT-Geräte anfallen und versendet werden sollen, bringen die Bandbreite eines Netzwerks an ihre Grenzen. Statt alle Daten zur Verarbeitung und Speicherung in die Cloud zu senden, können intelligente Edge Geräte dabei helfen die Daten zu filtern und nur bedeutsame Informationen über die Leitung zu senden. Zur Filterung sollen vor allem künstliche Intelligenzen (KIs) auf die Endgeräte gelangen.

Getrieben wird der Wandel zum Edge Computing vor allem in der Industrie. Mit der Einführung von Industrial Internet of Things (IIoT) generieren, versenden und analysieren Unternehmen ihre Prozesse und senken so beispielsweise ihre unerwarteten Ausfallzeiten. Obwohl bei der riesigen Datenmenge die starke Rechenleistung und große Speicherkapazitäten der Cloud eine sehr zentrale Rolle spielen, so bietet Edge Computing weitere Möglichkeiten die Performanz des IIoT weiter zu verbessern. Möglich ist dies vor allem durch die niedrigen Preise von Geräten und Sensoren zur Herstellung von Edge Geräten, die darüber hinaus immer weniger Platz benötigen. Ebenso dient die steigende Anzahl an Anwendungsgebieten von IIoT und die modernen Technologien für maschinelles Lernen und Analysen als treibende Kraft für den Einsatz von Edge Computing in der Industrie.

Die Zentralisierung, auf der Cloud Computing aufbaut, wird durch Edge Computing etwas aufgelockert. Das heißt nicht, dass erstes überflüssig wird, sondern vielmehr, dass Aufgaben an den Rand des Netzwerkes abgeben werden. Je nach Anwendungszenario ist diese Verschiebung stärken oder schwächer ausgeprägt. In Extremfällen kann Edge Computing auch vollständig ohne die Anwendung von Cloud Computing stattfinden.

[[GEDI18]](#ref_gedi18) [[MILL18]](#ref_mill18) [[FELD17]](#ref_feld17)

- Technologien, die Edge Computing ermöglichen
    - DigSig für Identifizierung und Signierung von Daten https://en.wikipedia.org/wiki/ISO/IEC_20248
    - Edge Entitäten evtl. liste/beschreiben https://www.networkworld.com/article/3224893/internet-of-things/what-is-edge-computing-and-how-it-s-changing-the-network.html
- Edge Computing eher von Telekomunikations Anbieter


### Fog Computing

Genau wie beim Edge Computing, wird auch beim Fog Computing Rechenleistung, Speicher und allgemein die digitale Intelligenz zurück zum Rand des Netzwerkes verschoben. Dies soll ebenfalls für geringere Latenzen, eine höhere Sicherheit und geringere Auslastung der Bandbreite sorgen.

Der Begriff "Fog Computing" wurde 2013 erstmals von Cisco bei einer Pu­b­li­zie­rung verwendet und wird bis heute auch weitestgehend von Cisco geprägt. Am 19. November 2015 wurde das "OpenFog Consortium" gegründet, in welchem Unternehmen wie Cisco Systems, ARM Holdings, Dell, Intel, Microsoft und die Princeton University zusammen arbeiten, um Fog Computing zu verbreiten und zu standardisieren. Die bisherige Arbeit brachte die sogenannte "OpenFog Reference Architecture" hervor, welche die acht Säulen einer OpenFog Architektur detailliert betrachtet [[OPEN17]](#ref_open17): 

- Sicherheit
- Skalierbarkeit
- Offenheit
- Selbstständigkeit
- Programmierbarkeit
- RAS (Zuverlässigkeit, Erreichbarkeit und Wartbarkeit)
- Agilität
- Hierarchie

Die Unterschiede zu Cloud und Edge Computing sind die Nähe zum Endverbraucher, die dichte geografische Verteilung und die mobile Einsatzmöglichkeit. Das standardmäßige Prinzip von Cloud Computing wird dahingehend verändert, dass durch sogenannte Fog-Nodes mehrere Endgeräte verknüpft werden und die Fog-Nodes die Kommunikation zur Cloud übernehmen, statt die Endgeräte direkt. Durch die erhöhte Leistung sind die Fog-Nodes in der Lage Aufgaben der Cloud (z.B. Filterung von gesammelten Daten) zu übernehmen und darüberhinaus auch als eine Art von "vorgelagerter Cloud" betrachtet werden kann.

Im Vergleich zu Edge Computing, wo die Endgeräte (z.B. IoT-Dinge) eine stärkere Rechenleistung, Speicherkapazität und Intelligenz erhalten, bleiben die Endgeräte im Fog-Computing meist "leistungsschwach". Stattdessen sind Gateways oder Fog-Nodes mit starker Leistung ausgestattet, um die bereits genannten Vorteile auszuspielen.

- http://info.opto22.com/fog-vs-edge-computing
- Besteht aus einem "control plane" und einem "data plane" https://en.wikipedia.org/wiki/Fog_computing
- https://web.archive.org/web/20140922061044/http://www.cisco.com/web/about/ac50/ac207/crc_new/university/RFP/rfp13078.html
- https://www.openfogconsortium.org/wp-content/uploads/OpenFog_Reference_Architecture_2_09_17-FINAL.pdf


### Sicherheitsaspekte

- Provider Zugriff
- Datenschutzrechtlich in DE

### Nachteile & Begrenzungen

- Geringere Individualisierungsmöglichkeiten


## Amazon Web Service (AWS)

- Static file deployment
- Container deployment
- Eventverarbeitung
- Generelle Erläuterung und kleinere Anleitungen
- AWS API gateway (Skalierbare APIs) ?

### Einführung & Grundlagen

### Elastic Compute Cloud (EC2)

### Simple Storage Service (S3)

### AWS Lambda


## Cloud Design Pattern

- Siehe Microsoft PDF

### Event Sourcing

### ...


## Zusammenfassung

### ?? Aktuelle Trends

- Hier evtl. Ausblicke auf derzeitige Trends der verbreitesten Cloud Anbieter
- https://www.golem.de/news/hpe-greenlake-hybrid-cloud-software-automatisiert-die-ressourcen-in-der-cloud-1806-135051.html

## Literaturverzeichnis

<a name="ref_bsi18">[BSI18]</a>: Bundesamt für Sicherheit in der Informationstechnik (BSI) ; Cloud Computing Grundlagen ; URL: <a>https://www.bsi.bund.de/DE/Themen/DigitaleGesellschaft/CloudComputing/Grundlagen/Grundlagen_node.html</a> (abgerufen am 03.05.2018)

<a name="ref_feld17">[FELD17]</a>: Felde, Christian ; Blog of Christian Felde, 20.12.2017 ; On edge architecture ; URL: <a>https://blog.cfelde.com/2017/12/on-edge-architecture/</a> (abgerufen am 27.05.2018)

<a name="ref_foot17">[FOOT17]</a>: Foote, Keith D. ; Dataversity, 22.06.2017: A Brief History of Cloud Computing ; URL: <a>http://www.dataversity.net/brief-history-cloud-computing/</a> (abgerufen am 27.05.2018)

<a name="ref_gass16">[GASS16]</a>: Gassner, Heinz ; Smart Industry Forum, 02.12.2016: What Do We Actually Mean By: IaaS, PaaS, SaaS? ; URL: <a>https://smartindustryforum.org/what-do-we-actually-mean-by-iaas-paas-saas/</a> (abgerufen am 21.06.2018)

<a name="ref_gedi18">[GEDI18]</a>: GE Digital ; What is Edge Computing? ; URL: <a>https://www.ge.com/digital/blog/what-edge-computing#edge-computing-vs-cloud-computing-3</a> (abgerufen am 27.05.2018)

<a name="ref_ibmj09">[IBMJ09]</a>: IBM Journal of Research and Development, 07.2009: The Reservoir model and architecture for open federated cloud computing ; URL: <a>https://ieeexplore.ieee.org/document/5429058/</a> (abgerufen am 19.06.2018)

<a name="ref_lynl18">[LYNL18]</a>: Lynley, Matthew ; techcruch.com: Amazon my be developing AI chips for Alexa ; URL: <a>https://techcrunch.com/2018/02/12/amazon-may-be-developing-ai-chips-for-alexa/</a> (abgerufen am 27.05.2018)

<a name="ref_mill18">[MILL18]</a>: Miller, Paul ; The Verge, 07.05.2018: What is edge computing? ; URL: <a>https://www.theverge.com/circuitbreaker/2018/5/7/17327584/edge-computing-cloud-google-microsoft-apple-amazon</a> (abgerufen am 27.05.2018)

<a name="ref_nist11">[NIST11]</a>: National Institute of Standards and Technology (NIST) - The NIST Definition of Cloud Computing 2011 ; URL: <a>https://csrc.nist.gov/publications/detail/sp/800-145/final</a> (abgerufen am 03.05.2018)

<a name="ref_open17">[OPEN17]</a>: OpenFog, 09.02.2017: OpenFog Reference Architecture for Fog Computing ; URL: <a>https://www.openfogconsortium.org/wp-content/uploads/OpenFog_Reference_Architecture_2_09_17-FINAL.pdf</a> (abgerufen am 10.06.2018)

<a name="ref_rega11">[REGA11]</a>: Regalado, Antonio ; MIT Technology Review, 31.10.2011: Who Coined 'Cloud Computing'? ; URL: <a>https://www.technologyreview.com/s/425970/who-coined-cloud-computing/</a> (abgerufen am 27.05.2018)

<a name="ref_rous17">[ROUS17]</a>: Rouse, Margaret ; TechTarget, 09.2017: Infrastructure as a Service (IaaS) ; URL: <a>https://searchcloudcomputing.techtarget.com/definition/Infrastructure-as-a-Service-IaaS</a> (abgerufen am 21.06.2018)

<a name="ref_shaw17">[SHAW17]</a>: Shaw, Keith ; NetworkWorld, 19.12.2017: What is a hypervisor? ; URL: <a>https://www.networkworld.com/article/3243262/virtualization/what-is-a-hypervisor.html</a> (abgerufen am 21.06.2018)

<a name="ref_stat16">[STAT16]</a>: Statt, Nick ; The Verge: How an army of vulnerable gadgets took down the web today ; URL: <a>https://www.theverge.com/2016/10/21/13362354/dyn-dns-ddos-attack-cause-outage-status-explained</a> (abgerufen am 27.05.2018)