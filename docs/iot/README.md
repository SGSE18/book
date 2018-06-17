Author: Lukas S.
# Internet of Things (IOT)
---
## Einleitung
- Begriffserklärung
- kurz: Beweggründe IoT
- kurz: IoT in der Gesellschaft (Digitalisierung)
- ~

## IoT-Security
- BSI IT-Grundschutz zu IoT
- IoT security patterns
- Protokolle: Open Trust Protocol (OTrP), X.509 (pki)

## Architektur
- ~ event driven architecture + ( Client-Server,Peer-to-Peer, Pipes-and-Filters,
Publish-Subscribe, Service-Oriented, REST, Layered and Microkernel )

## Protokolle
- ~ Infrastructure (ex: 6LowPAN, IPv4/IPv6, RPL)
Identification (ex: EPC, uCode, IPv6, URIs)
Comms / Transport (ex: Wifi, Bluetooth, LPWAN)
Discovery (ex: Physical Web, mDNS, DNS-SD)
Data Protocols (ex: MQTT, CoAP, AMQP, Websocket, Node)
Device Management (ex: TR-069, OMA-DM)
Semantic (ex: JSON-LD, Web Thing Model)
Multi-layer Frameworks (ex: Alljoyn, IoTivity, Weave, Homekit)

## Schnittstelle zu Cloud-Computing
- (abhängig von Softwaredemo)

## Kabellose Sensornetzwerke
- ~ Stand der Technik

## (Softwaredemo)
- wireless sensor network
- 2+ sensor nodes reading sensor data (Raspberry Pi's)
- sensor nodes communicating through iot-protocolls
- event driven architecture
- cloud computing based backend
    - stores sensor data
    - analyzes data
    - reacts to events, propagates events

## Literaturverzeichnis
- ~
---
#### Quellen
- Security
	- BSI IT-Grundschutz zu IOT
	- https://www.bsi.bund.de/DE/Themen/ITGrundschutz/ITGrundschutzKompendium/umsetzungshinweise/SYS/Umsetzungshinweise_zum_Baustein_SYS_4_4_Allgemeines_IoT-Ger%C3%A4t.html
- Architektur
	- Event driven architecture
	- (2006) Event-Driven Architecture. In: Enterprise Service Oriented Architectures. Springer, Dordrecht
	- https://link.springer.com/chapter/10.1007%2F1-4020-3705-8_8
	- https://github.com/mspnp/architecture-center/blob/master/docs/guide/architecture-styles/event-driven.md
	- Masterarbeit Software architecture in iot
	- http://www.ru.nl/publish/pages/769526/z_evertson_croes_master_thesis_s4241754.pdf
- Protokolle
	- Global Communications Conference (GLOBECOM), 2016 IEEE
	- Which IoT Protocol? Comparing Standardized Approaches over a Common M2M Application
	- http://eprints.bournemouth.ac.uk/24345/1/2016_globecom.pdf
	- https://www.postscapes.com/internet-of-things-protocols/
- Schnittstelle Cloud-Computing
	- Principles for Engineering IoT Cloud Systems 
	- Hong-Linh Truong and Schahram Dustdar, Vienna University of Technology, 2015
	- https://pdfs.semanticscholar.org/02ce/5c709f11e005e12c6fab7bbace6fb13dc9e1.pdf
- Kabellose Sensornetzwerke (WSN)
	- Wireless sensor networks
	- IF Akyildiz, MC Vuran - 2010
	- https://books.google.de/books?hl=en&lr=&id=7YBHYJsSmS8C&oi=fnd&pg=PR7&dq=wireless+sensor+networks&ots=QO3Shn2jqh&sig=9CpOVWisYE91itB6jimuTaDcKGs
