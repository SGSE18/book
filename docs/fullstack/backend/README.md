# Backend
## Node.js

## Kommunikation

### gRPC

#### Allgemein
gRPC ist ein von Google entwickeltes modernes, performantes Open Source RPC (Remote Procedure Call) Framework, welches innerhalb vieler verschiedener Umgebungen laufen kann. https://grpc.io/about/
Mithilfe von gRPC kann eine Client-Anwendung direkt Methoden einer Server-Anwendung aufrufen, als wäre es ein lokales Objekt. Besonders hervorstechende Merkmale von gRPC sind die Nutzung von HTTP/2 und Protocol Buffers.


https://grpc.io/docs/guides/
https://jaxenter.de/grpc-mobile-http-2-google-framework-65937

#### HTTP/2
HTTP/2 ist der Nachfolger von HTTP/1.1 und wurde 2015 veröffentlicht.
Durch das neue Protokoll wird die Latenz bei der Kommunikation zwischen Browser und Webserver verringert, welches zu einem schnelleren Aufbau von Webseiten führt.
Die größten Veränderungen gegenüber des Vorgängers können in die folgenden vier Punkte aufgeteilt werden.

##### Server Push
"Server Push" ermöglicht dem Server von sich aus Daten an den Client zu senden. Dies steht gegenüber dem Prinzip von HTTP/1, bei dem die Kommunikation "Pull only" ablief und die Kommunikation nur vom Client gestartet werden konnte. Mithilfe dieser Funktionalität wird die Web-Kommunikation beschleunigt, indem unnötige Client-Anfragen und somit Paketumlaufzeit (Round Trip Time) eingespart werden kann. Sinnvoll ist dies vorallem, damit der Server bei dem initialen Seitenaufruf Dateien an den Browser mitsenden kann, die er sowieso zur Anzeige der Seite benötigt (siehe folgende Abbildung).  
https://ieeexplore.ieee.org/document/8264830/

Ein Nachteil kann durch den Server Push auftreten, wenn die Funktionalität falsch eingesetzt wird. Dies kann vorkommen, wenn ein Server Push vor dem Seitenrendering genutzt wird, was die Aufbauzeit der Seite verlangsamt, oder wenn ein Server Push Daten absendet, die der Client bereits gecachet hatte. Damit es nicht zu solchen Problemen kommt, ist es notwendig, dass der Entwickler sich an sinnvolle Strategien für einen Server-Push hält.
https://ieeexplore.ieee.org/document/8264830/

##### Kommunikation auf einem Kanal
Die Kommunikation zwischen Browser und Server wird mit HTTP/2 über nur einen einzigen Kanal abgewickelt. In der Vorgängerversion wurden mehrere Verbindungen gleichzeitig aufgebaut, was zu einem Overhead und somit Performanceeinbußen führt.
https://www.cyon.ch/support/a/was-ist-http-2

##### Stream Dependency
Aufgrund der Reduzierung auf nur einen einzigen Kanal, ist es nun wichtiger in welcher Reihenfolge die Daten geladen werden. Mit HTTP/2 ist der Browser in der Lage dem Server mitzuteilen, welche der Dateien für ihn die höchste Priorität haben, damit er diese zuerst vom Server gesendet bekommt.
https://www.cyon.ch/support/a/was-ist-http-2

##### Kompression des Headers
Weiterhin ermöglicht HTTP/2 die Kompression des Headers. Der HTTP-Header muss bei jeder Anfrage mitgesendet werden und durch die Kompression kann so auf Dauer eine Menge an Daten eingespart werden.
https://www.cyon.ch/support/a/was-ist-http-2


#### Protocol Buffers
Protocol Buffers sind von Google entworfene sprachunabhängige, plattform-neutrale, erweiterbare Mechanismen, um strukturierte Daten zu serialisieren. Es ähnelt somit XML, ist jedoch kleiner, schneller und einfacher.
https://developers.google.com/protocol-buffers/

Zu Beginn wird hierzu eine Struktur in einer _.proto_-Datei angelegt, die beispielsweise wie folgt aussehen könnte:

```
message Person {
  string name = 1;
  int32 id = 2;
  bool is_admin = 3;
}
```

Nachdem die Struktur angelegt wurde, kann der Protocol-Buffer-Compiler _protoc_ genutzt werden, um eine Klasse für die gewünschte Programmiersprache zu generieren. Mithilfe der generierten Klasse kann auf die Daten mit Setter- und Getter-Methoden zugegriffen und das Objekt anschließend serialisiert und geparst werden. https://grpc.io/docs/guides/


#### Designprinzipien
Zum Verständnis des Frameworks, definiert Google eine Reihe an Prinzipien und Anforderungen, die während der Entwicklung eine Rolle spielten und mit gRPC umgesetzt wurden.
https://grpc.io/blog/principles

__Services statt Objekten, Messages statt Referenzen__-
Es sollte die Mikroservice-Philosophie und das Nutzen der Proto-Buffer-Messages beworben werden, damit kein falsches Verständnis von Objekten und den Netzwerkeinschränkungen aufkommt. Auch wenn gRPC eine performante Kommunikation bietet, sollte an die Tücken einer Netzwerkanwendung gedacht  und nicht so gearbeitet werden, als wären alle Objekte lokal verfügbar.

__Abdeckung und Simplizität__-
Das Framework sollte auf jeder beliebten Entwicklungsplattform verfügbar und leicht zu benutzen sein. Außerdem sollte das System auf performancelimitierten Geräten laufen können.

__Kostenlos und offen__-



##### Interoperabel und Reichweite

##### Genereller Zweck und Performance

##### Layered

##### Payload Agnostik

##### Streaming

##### Blocken und Nicht-Blocken

##### Abbruch und Timeout

##### Lameducking

##### Fluß-Kontrolle

##### Pluggable

##### Erweiterung als APIs

##### Metadaten-Austausch

##### Standardisierte Status Codes

#### Vorteile

##### Performance und geringe Datengröße
Der Schwerpunkt von gRPC liegt darauf eine performante Netzwerk-Kommunikation zu ermöglichen. HTTP/2 und Proto Buffer sorgen dafür, dass die Anzahl der Anfragen und die zu übermittelnden Daten in der Größe reduziert und gleichzeitig die Geschwindigkeit erhöht werden kann. Diese Eigenschaften prägen gRPC somit als ein Kommunikations-Protokoll, welches besonders geeignet für Anwendungen ist, die den Hauptfokus auf eine effiziente Performance legen.

#### Nachteile

##### Browser-Support

### REST

#### Allgemein
Representational State Transfer (REST) ist das am meist verbreiteste und genutzte Mittel, um Netzwerk-APIs zu realisieren. Vorgestellt wurde die Technologie im Jahr 2000 von Roy Thomas Fielding im Rahmen seiner Dissertation und hat sich seitdem durchgesetzt.  https://www.theseus.fi/bitstream/handle/10024/141989/GraphQL-%20The%20API%20Design%20Revolution.pdf?sequence=1&isAllowed=y
Bei REST handelt es sich um einen Architektur-Style, welches einen Leitfaden bilden soll, der vorgibt wie eine zustandslose Kommunikation zwischen Client und Server ablaufen sollte.

##### Nutzung
Die Kommunikation zwischen Server und Client geschieht in dem Fall von REST mithilfe von Daten, die, wie der Name andeutet, einen Zustand wiederspiegeln.
Um eine bestimmte Ressource anzufragen oder abzusenden sendet der Client eine HTTP-Anfrage an eine bereitgestellte URL. Die Art der HTTP-Anfrage hängt davon ab was für eine Art von Operation auf dem Server ausgeführt werden soll.

| __Anfrage-Art__                | __Aktion__                     |
|---------------------------------|--------------------------------------|
|GET|Zugriff auf eine Ressource im Lesemodus|
|POST|Senden einer neuen Ressource zum Server|
|PUT|Aktualisieren einer vorhandenen Ressource|
|DELETE|Löschen einer vorhandenen Ressource|
|HEAD|Dient der Anfrage, ob eine Ressource existiert|
|OPTIONS|Gibt eine Liste von möglichen Operationen auf einer Ressource zurück|
https://books.google.de/books?hl=de&lr=&id=kjUwCgAAQBAJ&oi=fnd&pg=PR7&dq=5.+Pro+REST+API+Development+with+Node.js&ots=f149Pu5Rua&sig=5C39PrLsUvNHatLVGiogA8Shtvk#v=onepage&q=5.%20Pro%20REST%20API%20Development%20with%20Node.js&f=true

Der Client sendet hierbei Zustandsrepräsentationen über Dateiformate wie JSON oder XML oder über URL-Parameter an den Server und der Server antwortet dementsprechend wieder mit einer Zustandsrepräsentation seinerseits.

TODO?Ausführlicher?


##### Prinzipien
Um eine effiziente Architektur zu erreichen, definiert REST die folgenden sechs Grundprinzipien, die F. Doglio in [] beschreibt. https://books.google.de/books?hl=de&lr=&id=kjUwCgAAQBAJ&oi=fnd&pg=PR7&dq=5.+Pro+REST+API+Development+with+Node.js&ots=f149Pu5Rua&sig=5C39PrLsUvNHatLVGiogA8Shtvk#v=onepage&q=5.%20Pro%20REST%20API%20Development%20with%20Node.js&f=true

###### Client-Server
Das erste Grundprinzip behandelt die Netzwerk-Architektur Client-Server und damit auch die Seperierung der Zuständigkeiten. Der Server stellt ein bestimmtes Set von Services bzw. Funktionalitäten zur Verfügung, welche vom Client aufgerufen werden können. Der Server stellt Daten bereit, sowie speichert diese, und der Client kann die abgerufenen Daten darstellen und aufbereiten. Mithilfe dieser Aufteilung können Client und Server unabhängig voneinander entwickelt werden und ermöglicht dadurch gleichzeitig, dass verschiedene Client-Applikationen für dieselben Server-Services genutzt werden können.

###### Stateless
Stateless bezeichnet die Eigenschaft dass der Server keinen Status der Clients hält, sondern dass der Client bei jeder Anfrage alle zur Verständnis benötigten Daten an den Server senden muss.

Durch diese Eigenschaft verbessern sich einige Punkte an der Architektur:
- Die __Überwachung__ des Systems fällt leichter, wenn alle benötigten Informationen in der jeweiligen Anfrage enthalten sind.
- Das System __skaliert__ besser, da Ressourcen nach jeder Anfrage direkt wieder freigegeben werden.
- Das System ist __verlässlichler__, da bei einem Systemabsturz keine Zustände wiederhergestellt werden müssen, sondern nur das System selbst.
- Das System ist __leichter zu implementieren__, da keine Sessions extra gemanaged werden müssen.

###### Cache
Eine REST-API sollte die Möglichkeit von Cacheing bieten und Services dementsprechend markieren. Indem Antworten auf Anfragen gecachet werden, kann sich sowohl der Server einige Rechenoperationen sparen, als auch der Client die Daten schneller bereitstellen. Der Cache kann gleichzeitig Client- und Serverseitig genutzt werden, oder auch nur auf einer Seite des Systems. Ein Nachteil durch Cacheing kann auftreten, wenn die Cacheing-Regeln nicht optimal gesetzt sind, was zur Verarbeitung von veralteten Daten führen kann.

###### Uniform-Interface
Die API sollte so gestaltet sein, dass es einen eindeutigen Identifier für die Services in Form einer URI, wie beispielsweise einer URL, gibt. Der Zugriff auf die Services geschieht durch die HTTP-Anfragemethoden (GET, POST, PUT, DELETE, etc.) und liefert repräsentative Daten mit standardisierten Content-Typen, wie beispielsweise XML, JSON oder HTML, zurück.
Um durch die verschiedenen Services "navigiert" zu werden, stellt der Server dem Client nach Aufrufen eines Services Hyperlinks zu ähnlichen vorhandenen Services zur Verfügung. Diese Navigationshilfe nennt sich "Hypermedia As The Engine Of Application State (HATEOAS)".

Das so geschaffene Interface kann universell von verschiedenen Geräten genutzt werden.
Dies hat zwar den Vorteil, dass man nur eine Schnittstelle pflegen muss, doch kann man als Nachteil anmerken, dass es teilweise performanter sein kann maßgeschneiderte Lösungen für die einzelnen Arten von Endgeräten zu haben.  

###### Layered System
Eine typische REST-API nutzt mehrere System-Layer, um die Logik verschiedener Bausteine voneinander zu entkoppeln. So besteht eine API meist aus einer "Business Logic Layer", einer "Session Information Layer" und einer "Storage Layer". Die Layers nutzen nur die jeweils untere Layer und kommunizieren die Ausgabe an die obere Layer. Hierdurch kann das Gesamtsystem simplifiziert werden und eine Weiterentwicklung vereinfachen.  

Der größte Nachteil an einem solchen System ist, dass es für kleine Systeme eventuell unnötige Komplexität hinzufügt und die Performance mindert.

###### Code-On-Demand
Code-On-Demand ist das einzige optionale Prinzip von REST. Hierbei geht es um das Prinzip, dass der Server Code bereitstellt, den der Client herunterladen und lokal ausführen kann. Hierbei handelt es sich meist um Java Applets oder JavaScript.

#### Vorteile

##### Bewährte Lösung
Durch seine große Popularität und mittlerweile jahrelange Nutzung ist REST eine bewährte Lösung für die Netzwork-Kommunikation. Es lassen sich leicht Frameworks und Tools finden, die die Implementierung einer REST-API so simpel wie möglich gestalten und frei von Anfangsschwierigkeiten sind, wie sie viele neuere Technologien noch haben.

##### Methoden-Leitfaden
Durch HATEOAS bietet REST einen leicht zu folgenden Leitfaden für Clients an. Eine ausgereifte Umsetzung ermöglicht eine sich selbst dokumentierende API, bei der der Client auf keine externe Hilfe angewiesen ist.

#### Nachteile

##### Fehlerhafte REST-Implementierungen
Viele Leute haben ein falsches Verständnis davon was REST bedeutet und kennen die Kernprinzipien nicht. Aufgrunddessen geben viele Entwickler ihren APIs den Namen "REST-API", obwohl sie nicht den Prinzipien von REST folgen. So werden beispielsweise oft Cookies benutzt, um States zu halten, was gegen das "Stateless"-Prinzip verstößt. Fielding selbst äußerte sich einige Jahre nach seiner Dissertation dazu, dass er von dem Trend API's RESTful zu nennen, obwohl sie lediglich normale RPC API's sind, frustiert sei. http://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven

##### Overhead durch die Prinzipien
Die Stateless-Eigenschaft einer REST-API sorgt dafür, dass alle benötigten Daten mit jedem Aufruf neu mitgesendet werden müssen. Aufgrund der fehlenden States ist es nicht möglich auf sessionübergreifende Daten zurückzugreifen, was zu einem Overhead bei den Netzwerk-Aufrufen führt, der mit States eingespart werden könnte.

Zusätzlich sorgt die "Layered System"-Eigenschaft dazu, dass System teilweise komplexer werden, als sie müssten. Dies führt zu einem Performance- und Speicher-Overhead für kleinere Systeme.

### GraphQL

#### Allgemein
GraphQL ist eine von Facebook entwickelte Query-Sprache und Runtime, die 2015 veröffentlicht wurde. Mithilfe von GraphQL können Clients präzise definieren welche Daten sie von der API anfordern. Durch diese Methode lässt sich die Anzahl der Abfragen einschränken und gleichzeitig der Daten-Overhead minimieren, da der Client immer nur genau die Daten erhält, die angefordert wurden. https://graphql.org/  

Um GraphQL einzusetzen, wird ein Client, sowie ein Backend benötigt, welche beide mit der Query-Sprache umgehen können. Implementierungen der Technologie stehen auf beiden Seiten in vielen verschiedenen Programmier- und Skriptsprachen zur Verfügung.

GraphQL stellt zwischen Client und Server eine zusätzliche Schicht dar, welche die Aufgabe der Kommunikation übernimmt. Es geschieht schnell, dass man die Technologie mit einer Datenbank-Technologie verwechselt. Tatsächlich handelt es sich aber um eine Query-Sprache für APIs, nicht für Datenbanken. https://www.theseus.fi/bitstream/handle/10024/141989/GraphQL-%20The%20API%20Design%20Revolution.pdf?sequence=1&isAllowed=y
GraphQL kann hierbei auf Backend-Logik aufgesetzt werden und so Query-Operationen auf den vom Backend gelieferten Daten, bereitstellen.  

#### Vorteile

##### Effiziente Datenabfrage
Der Grund, warum Facebook GraphQL entwickelt hat, war dass durch die große und stark steigende Nutzeranzahl der Datenverkehr über das Netzwerk immer größer wurde und aktuelle Lösungen die Anfragen nur ineffizient abarbeiten konnte.
https://www.howtographql.com/basics/0-introduction/

Somit wurde eine Technologie entwickelt, die die zu übermittelnden Daten auf ein Minimum beschränkt und gleichzeitig die Anzahl der Anfragen so klein wie möglich hält.

Die zu übermittelnde Datenmenge kann von GraphQL optimiert werden, indem sogenanntes "Over-Fetching" und "Under-Fetching" verhindert wird. "Over-Fetching" bezeichnet das Abrufen von zu viel Informationen, während "Under-Fetching" das Abrufen von zu wenig Informationen beschreibt, was in den meisten Fällen zu einer zusätzlichen Netzwerk-Anfrage führt. Beide Praktiken sorgen für eine stärkere Netzwerk-Auslastung und führen somit zu Performanceproblemen.

Um diese Probleme zu verhindern, erlaubt es GraphQL dem Client seine benötigten Daten selbst zu definieren.

Wenn man diese Möglichkeit auf einen Use-Case für Facebook anwenden möchte, bietet sich als Beispiel eine Benutzersuche an. Ein normales Benutzerprofil umfasst viele verschiedene Daten. Ein Datensatzausschnitt hieraus könnte wie folgt aussehen:
```json
{
    {
      "name": "John Doe",
      "location": "Minden",
      "birthday": "24.02.1997",
      "image": "picture.jpg",
      ...
    }
}
```
Ein Client, der anhand des Datensatzes eine Benutzersuche implementieren möchte, möchte allerdings nur das Profilbild, den Namen, sowie den Wohnort verwenden, um Vorschläge in der Auto-Vervollständigung anzuzeigen, also sieht seine Anfrage und das entsprechende Ergebnis wie folgt aus:

__Query:__
```json
{
  users{
    name
    location
    image
  }
}
```
__Ergebnis:__
```json
{
  "data":{
    "users": [{
      "name": "John Doe",
      "location": "Minden",
      "image": "picture.jpg"
    }
    ...]
  }
}
```

Dem Client ist es somit freigestellt selber festzulegen, welche Daten er benötigt. Bei einer Live-Benutzersuche, die performant bleiben muss, ist es hilfreich nur mit kleinen Objekten arbeiten zu müssen, während eine erweiterte Benutzersuche mit weiteren Filtermöglichkeiten Zugriff auf zusätzliche Eigenschaften benötigt. Beide Anwendungsfälle können mit GraphQL mit derselben Schnittstelle abgedeckt werden, ohne dass ein Mehraufwand für das Backend entsteht.  

Auch die Anzahl der Anfragen kann mit GraphQL klein gehalten werden, indem der Client die Möglichkeit hat mehrere Anfragen zu kombinieren und somit effektiv nur eine Anfrage über das Netzwerk an den Server senden muss.

Als Beispiels-Anwendungsfall kann hier das Vergleichen zweier Profile gesehen werden. Um das Profil eines bestimmten Benutzers zu suchen, wird als Parameter der Name mitgegeben. Damit dieselbe Query zweimal genutzt werden kann, muss vor dem Methodennamen noch ein Alias geschrieben werden, damit die zwei Resultate voneinander zu unterscheiden sind.

__Query:__
```json
{
  firstUser: user(name: "John Doe"){
    name
    location
    birthday
    image
    ...
  }
  secondUser: user(name: "Jane Doe"){
    name
    location
    birthday
    image
    ...
  }
}
```

Diese zusammengefasste Query kann innerhalb einer einzigen Netzwerk-Anfrage von der API abgehandelt werden, ohne dass die API eine entsprechende Funktion explizit bereitstellen muss. Mithilfe dieser Funktionalität kann GraphQL den Traffic zum API-Server gering halten.

##### Viele unterstützte Plattformen
Wie bereits zu Beginn des Kapitels erwähnt, wird GraphQL in vielen verschiedenen Programmiersprachen durch entsprechende Bibliotheken unterstützt.
:
| __Clientseitig__                | __Serverseitig__                     |
|---------------------------------|--------------------------------------|
|<ul><li>C# / .NET</li><li>Go</li><li>Java / Android</li><li>JavaScript</li><li>Swift / Objective-C iOS</li><li>Python</li></ul>|<ul><li>C# / .NET</li><li>Clojure</li><li>Elixir</li><li>Erlang</li><li>Erlang</li><li>Go</li><li>Groovy</li><li>Java</li><li>JavaScript</li><li>PHP</li><li>Python</li><li>Scala</li><li>Ruby</li></ul>|
[Quelle]

Durch die Kompatibilität der GraphQL-Schnittstellen ist es irrelevant welche Sprache für Server oder Client ausgewählt wurde. Unabhängig von der Wahl können Client und Server ohne zusätzliche Konfigurationen miteinander kommunizieren.
Die Auswahl der Technologie liegt dementsprechend ganz bei dem Entwickler des Clients beziehungsweise des Servers.  

Zur Einarbeitung in GraphQL auf Basis einer bestimmten Technologie stellt die Webseite https://howtographql.com einen guten Einstiegspunkt dar.

Eine simple Implementierung zur serverseitigen Umsetzung von GraphQL mit NodeJS stellt GraphQL-Express zur Verfügung.

...
Eine beliebte clientseitige Umsetzung von GraphQL besteht aus einer Kombination von Apollo und React.  
...

##### Schnelle Funktionalitäts-Erweiterung
Die so durch GraphQL geschaffene Schnittstelle ist dementsprechend leicht anzupassen. Der Server kann an der Schnittstelle zusätzliche Informationen bereitstellen, ohne dass der Client dazu gezwungen ist seine Anfrage an die zusätzlichen Informationen anzupassen, da er sie einfach ignorieren kann. Ebenso kann der Client sich dazu entscheiden zuvor ungenutzte Daten mit abzurufen und somit neue Funktionalitäten implementieren ohne eine Schnittstellen-Änderung am Server anzufordern. Die Entwicklung von Client und Server ist somit voneinander entkoppelt, was für eine individuellere und schnellere Entwicklung sorgt, die durch kleine Anpassungen in den Queries geregelt werden kann.  

##### Datenbank-Agnostik
GraphQL setzt, wie standardmäßig auch eine REST-API, nicht direkt an der Datenbank an. Daher ist es für die GraphQL-Technologie nicht relevant von welcher Quelle der bereitgestellte Datensatz entstammt.

Durch diese Vorgehensweise ist dem Entwickler die Freiheit gegeben zu wählen, welche Art der Datenspeicherung er nutzen möchte. Dies können relationalle Datenbanken, als auch NoSQL-Datenbanken sein.

Da die Syntax und Herangehensweise von GraphQL jedoch sehr nah an der von gängigen SQL-Datenbanken liegt, existieren auch zahlreiche Bibliotheken, die die Verbindung zwischen der Datenbank und GraphQL erleichtern, wie beispielsweise GraphQL-Sequelize oder PostGraphile.
https://github.com/mickhansen/graphql-sequelize
https://github.com/graphile/postgraphile

#### Nachteile
##### Caching
Da GraphQL an einem einzigen POST-Endpunkt arbeitet, ist es schwer Netzwerk-Caching zu betreiben. Caching kann in diesem Fall clientseitig von Bibliotheken wie Apollo oder Relay bereitgestellt werden. Die Problematik hierbei ist jedoch, dass der Client nicht immer wissen kann, wann die Daten aktualisiert wurden und arbeitet somit eventuell mit veralteten Daten. https://www.theseus.fi/bitstream/handle/10024/141989/GraphQL-%20The%20API%20Design%20Revolution.pdf?sequence=1&isAllowed=y

##### Datei-Upload
Die GraphQL-Spezifikation beinhaltet aktuell standardmäßig leider keine Möglichkeit um Dateien hochzuladen, da nur mit serialisierbaren Daten gearbeitet werden kann. Als Lösung können Dateien Base64-Decodiert und als String übermittelt werden, was allerdings mehr Speicher und Rechenleistung benötigt oder es muss auf eine Erweiterung in Form einer zusätzlichen REST-API oder GraphQL-Bibliothek, wie beispielsweise https://github.com/jaydenseric/graphql-multipart-request-spec, gesetzt werden.  

#### Weitere Codebeispiele
Queries
Mutationen
Fragmente

Quellen:
https://www.theseus.fi/bitstream/handle/10024/141989/GraphQL-%20The%20API%20Design%20Revolution.pdf?sequence=1&isAllowed=y

### Vergleich der Technologien
