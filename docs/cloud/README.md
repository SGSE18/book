# Cloud computing

## Einleitung

- Struktur des Kapitels erläutern

### Definition

Für den Begriff "Cloud Computing" gibt es keine Definition, die sich zu diesem Zeitpunkt allgemeingültig durchsetzen konnte, jedoch ähneln sich die meisten häufig in den Kernpunkten. Die Definition der US-amerikanischen Standardisierungsstelle NIST (National Institute of Standards and Technology) wird in vielen Publikationen und Vorträgen verwendet und lautet:

*"Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction."* [[NIST11]](#ref_nist11)

Neben dem Kernpunkt aller Definitionen, dass Rechnerressourcen über ein Netzwerk bereitgestellt und genutzt werden können, stellt das NIST mit dieser Definition eine schnelle und einfache Verwendung in den Fokus. Das Bundesamt für Sicherheit in der Informationstechnik (BSI) geht noch einen Schritt weiter und sagt, dass Angebote und Nutzung der Cloud Dienstleistungen ausschließlich über definierte technische Schnittstellen und Protokolle abläuft. Die direkte Interaktion mit den Anbietern ist nicht vorgesehen. [[BSI18]](#ref_bsi18)

### Geschichtliches

Die Bedeutung von "Cloud Computing" wie sie heute existiert und was damit verbunden wird, hat sich seit der ersten Verwendung nicht viel verändert. Die Compaq, Weltmarktführer für PC-Systeme der 1990er, verwendete den Begriff 1996 in einem internen Dokument. Schon davor wurde der Begriff "Cloud" und die dazugehörige Abbildung verwendet, um unter anderem das Internet, Telekommunikation und verteilte Anwendungen darzustellen. [[REGA11]](#ref_rega18)

Populär wurde der Begriff "Cloud Computing", als Amazon 2006 ihre Elastic Compute Cloud (EC2) auf den Markt brachte. In den anschließenden Jahren brachten auch Unternehmen wie Google, Microsoft, IBM und auch Oracle vergleichbare Produkte auf den Markt, um den neu erzeugten Bedarf nach externer und mietbarer Rechenleistung zu bedienen. [[FOOT17]](#ref_foot17)


## ?? Architektur


### Charakteristika

NIST Charakteristika:

- https://www.bsi.bund.de/DE/Themen/DigitaleGesellschaft/CloudComputing/Grundlagen/Grundlagen_node.html


### Everything as a Service (XaaS)

#### Infrastructure as a Service (IaaS)

#### Platform as a Service (PaaS)

#### Software as a Service (SaaS)

#### Function as a Service (FaaS)


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

### Fog Computing

- https://en.wikipedia.org/wiki/Fog_computing
- http://info.opto22.com/fog-vs-edge-computing

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


## Literaturverzeichnis

<a name="ref_bsi18">[BSI18]</a>: Bundesamt für Sicherheit in der Informationstechnik (BSI) ; Cloud Computing Grundlagen ; URL: <a>https://www.bsi.bund.de/DE/Themen/DigitaleGesellschaft/CloudComputing/Grundlagen/Grundlagen_node.html</a> (abgerufen am 03.05.2018)

<a name="ref_feld17">[FELD17]</a>: Felde, Christian ; Blog of Christian Felde, 20.12.2017 ; On edge architecture ; URL: <a>https://blog.cfelde.com/2017/12/on-edge-architecture/</a> (abgerufen am 27.05.2018)

<a name="ref_foot17">[FOOT17]</a>: Foote, Keith D. ; Dataversity, 22.06.2017: A Brief History of Cloud Computing ; URL: <a>http://www.dataversity.net/brief-history-cloud-computing/</a> (abgerufen am 27.05.2018)

<a name="ref_gedi18">[GEDI18]</a>: GE Digital ; What is Edge Computing? ; URL: <a>https://www.ge.com/digital/blog/what-edge-computing#edge-computing-vs-cloud-computing-3</a> (abgerufen am 27.05.2018)

<a name="ref_lynl18">[LYNL18]</a>: Lynley, Matthew ; techcruch.com: Amazon my be developing AI chips for Alexa ; URL: <a>https://techcrunch.com/2018/02/12/amazon-may-be-developing-ai-chips-for-alexa/</a> (abgerufen am 27.05.2018)

<a name="ref_mill18">[MILL18]</a>: Miller, Paul ; The Verge, 07.05.2018: What is edge computing? ; URL: <a>https://www.theverge.com/circuitbreaker/2018/5/7/17327584/edge-computing-cloud-google-microsoft-apple-amazon</a> (abgerufen am 27.05.2018)

<a name="ref_nist11">[NIST11]</a>: National Institute of Standards and Technology (NIST) - The NIST Definition of Cloud Computing 2011 ; URL: <a>https://csrc.nist.gov/publications/detail/sp/800-145/final</a> (abgerufen am 03.05.2018)

<a name="ref_rega11">[REGA11]</a>: Regalado, Antonio ; MIT Technology Review, 31.10.2011: Who Coined 'Cloud Computing'? ; URL: <a>https://www.technologyreview.com/s/425970/who-coined-cloud-computing/</a> (abgerufen am 27.05.2018)

<a name="ref_stat16">[STAT16]</a>: Statt, Nick ; The Verge: How an army of vulnerable gadgets took down the web today ; URL: <a>https://www.theverge.com/2016/10/21/13362354/dyn-dns-ddos-attack-cause-outage-status-explained</a> (abgerufen am 27.05.2018)