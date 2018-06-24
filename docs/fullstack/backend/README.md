# Backend
## Node.js

## Kommunikation

### gRPC

#### Allgemein
gRPC ist ein von Google entwickeltes modernes, performantes Open Source RPC Framework, welches innerhalb vieler verschiedener Umgebungen laufen kann.
Mithilfe von gRPC kann eine Client-Anwendung direkt Methoden einer Server-Anwendung aufrufen, als wäre es ein lokales Objekt. Besonders hervorstechende Merkmale von gRPC sind die Nutzung von HTTP/2 und Protocol Buffers.

Quellen:
https://grpc.io/about/
https://grpc.io/docs/guides/
https://jaxenter.de/grpc-mobile-http-2-google-framework-65937

##### HTTP/2
HTTP/2 ist der Nachfolger von HTTP/1.1 und wurde 2015 veröffentlicht.
Durch das neue Protokoll wird die Latenz bei der Kommunikation zwischen Browser und Webserver verringert, welches zu einem schnelleren Aufbau von Webseiten führt.
Die größten Veränderungen gegenüber des Vorgängers können in vier Punkte aufgeteilt werden:
- Kommunikation auf einem Kanal
- Stream Dependency
- Kompression der Kopfzeilen
- Server Push

Quellen:
https://ieeexplore.ieee.org/document/8264830/
https://www.cyon.ch/support/a/was-ist-http-2

##### Protocol Buffers

Quellen:
https://developers.google.com/protocol-buffers/
https://grpc.io/docs/guides/

#### Vorteile

##### Performance

##### Geringe Datengröße

#### Nachteile

##### Fehlender Leitfaden

#### Anwendungsbeispiel

### REST

#### Allgemein

#### Vorteile

##### Leitfaden

#### Nachteile

##### Keine Schemadaten

#### Anwendungsbeispiel

Quellen:
https://www.uni-oldenburg.de/fileadmin/user_upload/informatik/ag/svs/download/reader/reader-seminar-ws2016.pdf#page=28

### GraphQL

#### Allgemein
GraphQL ist eine von Facebook entwickelte Query-Sprache und Runtime, die 2015 veröffentlicht wurde. Mithilfe von GraphQL können Clients präzise definieren welche Daten sie von der API anfordern. Durch diese Methode lässt sich die Anzahl der Abfragen einschränken und gleichzeitig der Daten-Overhead minimieren, da der Client immer nur genau die Daten erhält, die angefordert wurden. https://graphql.org/  

Um GraphQL einzusetzen, wird ein Client, sowie ein Backend benötigt, welche beide mit der Query-Sprache umgehen können. Implementierungen der Technologie stehen auf beiden Seiten in vielen verschiedenen Programmier- und Skriptsprachen zur Verfügung:
| __Clientseitig__                | __Serverseitig__                     |
|---------------------------------|--------------------------------------|
|<ul><li>C# / .NET</li><li>Go</li><li>Java / Android</li><li>JavaScript</li><li>Swift / Objective-C iOS</li><li>Python</li></ul>|<ul><li>C# / .NET</li><li>Clojure</li><li>Elixir</li><li>Erlang</li><li>Erlang</li><li>Go</li><li>Groovy</li><li>Java</li><li>JavaScript</li><li>PHP</li><li>Python</li><li>Scala</li><li>Ruby</li></ul>|

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
      "image": "picture2.jpg",
      ...
    }
}
```
Ein Client, der anhand des Datensatzes eine Benutzersuche implementieren möchte, möchte allerdings nur das Profilbild, den Namen, sowie den Wohnort verwenden, also sieht seine Anfrage und das entsprechende Ergebnis wie folgt aus:

__Query:__
```json
{
  user{
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
    "user": {
      "name": "John Doe",
      "location": "Minden",
      "image": "picture2.jpg"
    }
  }
}
```

Dem Client ist es somit freigestellt selber festzulegen, welche Daten er benötigt. Bei einer Live-Benutzersuche, die performant bleiben muss, ist es hilfreich nur mit kleinen Objekten arbeiten zu müssen, während eine erweiterte Benutzersuche mit weiteren Filtermöglichkeiten Zugriff auf zusätzliche Eigenschaften benötigt. Beide Anwendungsfälle können mit GraphQL mit derselben Schnittstelle abgedeckt werden, ohne dass ein Mehraufwand für das Backend entsteht.  

Auch die Anzahl der Anfragen kann mit GraphQL klein gehalten werden, indem der Client mehrere Anfragen kombinieren kann und somit effektiv nur eine Anfrage über das Netzwerk an den Server senden muss.

//TODO Kombination mehrere Anfragen

##### Viele verschiedene unterstützte Plattformen

##### Schnelle Erweiterung

#### Nachteile
##### Technische Einschränkungen
- Keine Limit / Ab / Sort - Query-Optionen
#### Anwendungsbeispiele

Quellen:
https://www.theseus.fi/bitstream/handle/10024/141989/GraphQL-%20The%20API%20Design%20Revolution.pdf?sequence=1&isAllowed=y

### Vergleich der Technologien
