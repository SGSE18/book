# Hyperledger
Autor: Cem Basoglu

*"Hyperledger ist eine bereichsübergreifende Open-Source-Initiative zur Förderung
branchenübergreifender Blockchain-Technologien. An diesem weltweiten
Kooperationsprojekt, das von The Linux Foundation gehostet wird, nehmen führende
Unternehmen aus Branchen wie Banken und Finanzen, Internet of Things,
Supply-Chain, Fertigung und IT teil"* [[HYPE18](#ref_hype18)].

Zu den von der Hyperledger Initiative geförderten Projekten gehört unter anderem
auch das von IBM initiierte Fabric Framework. Das Fabric Framework besteht aus
einer Distributed Ledger Plattform und diversen Client Bibliotheken zum Zugriff
auf den Ledger. Weitere Informationen zum Fabric Framework sind im Kapitel
[Populäre Blockchain Plattformen](/blockchain/plattformen/#hyperledger)
verfügbar.


## Fabric Extension
Um aus einer Webapplikation heraus mit dem Distributed Ledger zu kommunizieren,
erfordert das derzeitige [Fabric SDK](https://fabric-sdk-node.github.io/)
zwangsläufig eine serverseitige Schnittstelle zwischen Hyperledger Fabric und
der Webapplikation. Diese Restriktion ist darin begründet, dass aus einer
clientseitigen Webapplikation, zum einen keine nativen TCP-Verbindungen zu den
[Peers](/blockchain/plattformen/#peer) und [Ordering Service](/blockchain/plattformen/#ordering-service)
möglich sind und zum anderen eine sichere Verwahrung der Zertifikate nicht
sichergestellt werden kann.

Moderne Browser wie Chrome, Firefox, Opera oder auch Microsoft Edge, erlauben es
Entwicklern eigene Erweiterungen zu implementieren. Durch die Implementierung
einer Erweiterung, kann die oben genannte Restriktion umgangen werden, indem
die Erweiterung, die Kommunikation und die Verwahrung der Zertifikate übernimmt.
Diese Erweiterung kann anschließend aus der clientseitigen Webapplikation
genutzt werden, um mit dem Distributed Ledger zu interagieren.

### Anforderungen
Die sichere Verwahrung der Zertifikate gehört mit zu den wichtigsten
Anforderungen an die Fabric Extension. Dazu müssen die Zertifikate vor
einem unberechtigten Zugriff, sowohl ausserhalb des Browser als auch aus einer
Webapplikation heraus, geschützt werden.

Der Benutzer muss die Möglichkeit haben neue Zertifikate zu hinterlegen und
bestehende Zertifikate zu verwalten. Dies soll direkt über die Erweiterung im
Browser möglich sein und muss mit einem Passwort gesichert werden.

Für die Interaktion mit der Erweiterung, muss es eine API bereitgestellt werden
die in die clientseitige Webapplikation eingebunden werden kann. Diese soll
berechtigten Webapplikation die Möglichkeit geben, zu prüfen ob ein Zertifikat
für die aktuelle Webapplikation vorhanden ist. Zusätzlich müssen allgemeine
Informationen über das Zertifikat abgerufen werden können. Für die Interaktion
mit dem Distributed Ledger müssen beliebige Chaincode Funktionen aufgerufen
werden können.

### Analyse

#### Fabric Client



#### Chrome Extension

### Entwurf
Für die sichere Persistierung der Zertifikate werden diese verschlüsselt im
Browser Storage abgelegt. Der Schlüssel für den Zugriff auf die Zertifikate ist
vom Benutzer einzugeben und dient gleichzeitig als Passwort für die Fabric
Extension. Für den Zugriff aus einer berechtigten Webapplikation muss die Fabric
Extension einmalig entsperrt werden. Anschliessend kann aus der Webapplikation,
mittels einer Javascript Bibliothek, auf die Zertifikate zugegriffen werden.
In den Attributen der Zertifikate ist eine URL in Form eines regulären Ausdrucks
hinterlegt, der die Webapplikation autorisiert auf das Zertifikat zuzugreifen.

Da die Verwendung der Fabric SDK für Node.JS Applikationen ausgelegt ist, muss
direkt mit den Peers und dem Ordering Service kommuniziert werden. Dazu werden
die gRPC-Schnittstellen direkt angesprochen und die Transaktionen in der Fabric
Extension signiert.

#### Architektur

![Fabric Extension Architektur](./architecture.png)

Abbildung 2.2.1.2 - Fabric Extension Architektur

##### Background Javascript

##### Content Script

##### Popup / Certificate Service

##### Fabric Extension Client

#### Sequenzdiagramme

### Evaluation
Zur Evaluation der Fabric Extension wird eine Webapplikation implementiert,
die Information aus der digitalen Patientenakte vom [Health Ledger Projekt](https://github.com/SGSE18/health-ledger/)
anzeigt. Dabei steht jedoch die Demonstration der Funktionalität, wie die
Authentifizierung der Webapplikation gegenüber der Erweiterung, im Vordergrund.

## Referenzen

<a href="ref_hype18">[HYPE18]</a> IBM Blockchain auf Basis von Hyperledger Fabric der Linux Foundation [Online](https://www.ibm.com/blockchain/de-de/hyperledger.html)
