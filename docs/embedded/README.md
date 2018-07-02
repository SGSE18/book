# Softwareentwicklung in der Automobilindustrie
Moderne Autos haben sich innerhalb von 120 Jahren von rein mechanischen Systemen hin zu hochkomplexen elektro-mechanischen Systemen entwickelt, die nun auf Software angewiesen sind um wie beabsichtigt zu funktionieren. Der Einsatz von Elektronik begann dabei noch recht bescheiden mit einem durch ein elektronisches Steuergerät gezündeten Verbrennungsmotor in den 1970er Jahren. Seitdem ist die Anzahl der elektronischen Systeme jedoch kontinuierlich gewachsen, so dass man heute mehr als 150 Steuergeräte (ECUs) im Auto vorfindet [STA17].
Die Benutzung von Software im Auto hat dabei viele Möglichkeiten geschaffen. So hat die Anzahl der Sicherheitssysteme und deren Wirksamkeit deutlich zugenommen. Auch die Leistung und Effizienz von Autos wurde deutlich erhöht. Außerdem verfügen Autos heute über aufregende Infotainment-Systeme, welche Internet, Kommunikation, Navigation und Unterhaltung ermöglichen. Diese Innovationen werden auch vom Kunden eingefordert. Beispielsweise ist der Autohersteller Tesla dafür bekannt, die Funktionalität seiner Fahrzeuge über Software-Updates auch nach Auslieferung noch zu erweitern, was bei den Kunden auf positive Resonanz stößt.
In Automobilen kommen heute moderne Embedded- sowie Cloud-Technologien, verteilte Systeme, Echtzeitsysteme, Sicherheitssysteme zum Einsatz. Aus der Nutzung so vieler verschiedener Technologien ergibt sich eine sehr schnell wachsende Komplexität.
Diese hoch komplexen Software-Systeme erfordern daher mehr Sorgfalt bei Design, Implementierung Verifikation und Validierung. Aus diesem Grund haben sich in der Automobilindustrie spezifische Prozesse und Normen etabliert, über welche in diesem Kapitel ein grober Überblick gegeben wird.
## Aktuelle Trends in der Softwareentwicklung
In mehreren Studien zur Erforschung der Trends in der Software-Entwicklung in der Automobilindustrie [PBKS07], [BWKC16], [LKM13] ließen sich die folgenden Trends beobachten:
Heterogenität – Die Funktionen, welche durch Software in modernen Autos ermöglicht werden, unterscheiden sich signifikant und müssen daher verschiedenen Domänen zugeordnet werden wie z. B. sicherheitskritisch oder Infotainment. Daraus ergibt sich, dass sich der gesamte Softwareentwicklungsprozess je nach Domäne unterscheiden muss.
Verteilung der Arbeit – Die Entwicklung der Software-Systeme wird in der Regel aufgeteilt, so dass Teile des Softwareentwicklungsprozesses oder Komponenten zwischen den Automobil-Herstellern und Zulieferern aufgeteilt werden. Das erfordert auch, dass alle Beteiligten die geforderten Normen und Prozesse einhalten und adäquat miteinander kommunizieren können.
Verteilung der Software – Im Auto gibt es eine Vielzahl von ECUs welche alle ihre eigene Software haben und gegebenenfalls untereinander kommunizieren müssen, um ihre Funktion erfüllen zu können. Das erhöht weiter die Komplexität und stellt erhöhte Anforderungen an die Koordination der Softwareentwicklung.
Varianten und Konfigurationen – Autos sind vom Kunden nach seinen Wünschen Konfigurierbar. Das erfordert, dass Systemkomponenten durch welche mit anderer Funktionalität ersetzt oder ganz weggelassen werden können, ohne dass dies Auswirkungen auf die Funktionstüchtigkeit des Gesamtsystems haben darf. Auch die unterschiedlichen Regularien der einzelnen Länder müssen erfüllbar sein, ohne noch einmal Änderungen an der Software vornehmen zu müssen.
Kostenmodelle nach Stückkosten – Der Automarkt ist sehr kompetitiv, so dass zwar die Entwicklungskosten zwar hoch sein dürfen, jedoch die Kosten pro Einheit möglichst gering sein müssen. Dementsprechend ist dies ein Optimierungsziel für Hard- und Software gleichermaßen.
Konnektivität und Kooperation – Durch das Vorhandensein einer Internetverbindung in modernen Autos ist es technisch möglich, dass Autos untereinander kommunizieren. Dies soll als zusätzliche Datenquelle zu den Sensorinformationen des eigenen Fahrzeugs z. B. vor gefährlichen Verkehrssituationen wie Staus oder Unfällen warnen.
Autonome Funktionen – Die Fähigkeit des Fahrzeugs selbstständig zu bremsen oder komplett zu fahren beschleunigt noch einmal ganz erheblich die Zunahme der Komplexität der Software in der Fahrzeugentwicklung. Diese Funktionen werden jedoch als das „nächste große Ding“ in der Automobilindustrie angesehen. Die Anforderungen an Verifikation und Validierung steigen dementsprechend auch in der jüngsten Zeit sehr stark an.
## Anforderungs-Management
Während sich die Entwicklung von Software in der Automobilbranche auch heute noch weitestgehend am klassischen V-Modell orientiert, so gilt es jedoch zu beachten, dass die Implementierung in vielen Fällen jedoch an Zulieferer ausgegliedert wird. Auch bereits bei den Anforderungen gibt es in der Branche Ergänzungen zur klassischen Anforderungsanalyse. So sind die Sicherheitsanforderungen der Norm ISO 26262 (Road Vehicles – Functional Safety) [ISO11] einzuhalten welche Methoden und Prozesse zur Spezifikation, dem Design, der Verifikation und der Validierung beschreibt.

 
Abbildung X: V-Model für den Software Entwicklungsprozess in der Automobil-Industrie [ISO11]
Bei der Notation der Anforderungen greift man auf drei Techniken zurück. Zum einen werden textuelle Anforderungen und Use Cases (UML) erstellt, wie sie auch bei der klassischen Softwareentwicklung üblich sind. Darüber hinaus werden jedoch auch noch modelbasierte Anforderungen erfasst. Hierfür benutzt man üblicherweise die Software Simulink. Diese ermöglicht es gegenüber klassischer Software-Modellierungs-Tools physikalische Zusammenhänge als Modell zu erfassen und in bei den Anforderungen zu berücksichtigen. Auf die Verwendung von Simulink gehe ich später noch einmal ein.
 
Abbildung X: Ein Simulink Beispiel welches die Anforderungen an ein ABS-System beschreibt [DEM]
Des Weiteren werden die Anforderungen in der Automobil-Branche vom Fahrzeughersteller (Original Equipment Manufacturer, OEM) auch noch einmal nach Granularität unterschiedlich erfasst vgl. [STA17]. Dabei geht man vom Fahrzeug-Level bis hinunter zum Komponenten-Level. Diese Unterscheidung überschneidet sich mit der Art des Erfassens der Anforderungen. So werden die Anforderungen auf dem Fahrzeug-Level eher textuell erfasst, während man bei feinerer Granularität zu Verhaltensbeschreibungen in Form von Simulink-Modellen übergeht. Diese Anforderungen dienen dann auch zur Kommunikation mit den Zulieferern genutzt. Diese Unterscheidet man je nachdem wie groß die zu erbringende Dienstleistung ist und wie eng der Zulieferer mit dem OEM zusammenarbeitet in die Gruppen Tier 1, Tier 2 und Tier 3. Dabei sind Tier-1-Zulieferer diejenigen, die direkt mit dem OEM zusammenarbeiten und in der Regel zusammenhängende Komponenten wie z. B. die Komponenten einer Klimaautomatik und deren Steuerung liefern. Tier-2-Zulieferer hingegen arbeiten nicht direkt mit dem OEM zusammen, sondern haben den Tier-1-Zulieferer als Ansprechpartner. Dieser lässt sich vom Tier-2-Zulieferer einen Teil seiner Komponente z. B. den Klimakompressor zuliefern. Dementsprechend muss jedoch der Tier-1-Zulieferer dazu in der Lage sein den relevanten Teil der vom OEM erstellten Anforderungen an den Tier-2-Zulieferer weiterkommunizieren zu können. Beim Tier-3-Zulieferer verhält es sich zum Tier-2-Zulieferer analog wie beim Tier-2-Zulieferer zum Tier-1-Zulieferer. Je höher die Zahl desto spezifischer und feingranularer ist demnach die Aufgabe.
All diese Anforderungen müssen in irgendeiner Form zugänglich sein was in der Regel durch Tools unterstützt wird. Während früher reine Anforderungs-Tools wie Doors zum Einsatz kamen geht der Trend hin zu einer Design- und Konstruktions-Datenbank, in der sowohl Anforderungen, Konstruktionen, Software und Tests zusammenkommen und untereinander in Beziehung stehen.
## Tests in der Automobilindustrie
Während Unit Tests aus der klassischen Softwareentwicklung bekannt sind und sich auch im Automobilbereich nicht grundlegend unterscheiden möchte ich auf die weiteren Tests des V-Modells noch ein wenig ausführlicher eingehen.
### Komponenten-Tests
Komponenten-Tests welche auch Integrations-Tests genannt werden, sollen das Verhalten einer zusammenhängenden Komponente genauer untersuchen. Das wird bei Komponenten-Tests die Komponente so eingebunden, dass ihre Umgebung simuliert wird und man in einer GUI Elemente zur Verfügung hat, die Elementen des späteren Fahrzeugs entsprechen. In der Automobil-Branche werden bei dieser Art Test die Umgebung in der Regel mit Modellen (Model-In-the-Loop testing, MIL) oder Hardware Simulatoren (Hardware-In-the-Loop testing, HIL) durchgeführt. Für HIL Tests kommt dabei Spezialhardware zum Einsatz die dafür konzipiert wurde das Fahrzeugverhalten möglichst originalgetreu simulieren zu können. Mit diesen Testverfahren lassen sich jedoch nicht funktionale Eigenschaften nur sehr schwer testen. Für diese bräuchte man besonders detaillierte Modelle, dessen Erstellung im Allgemeinen zu kostenintensiv ist.
### System Tests
Die Nächste Stufe im V-Modell bilden die System-Tests. Bei diesen Tests wird das gesamte System zusammengesetzt und als Ganzes getestet. Dabei werden folgende Aspekte getestet:
- Funktionalität – Besitzt das System die spezifizierte Funktionalität?
- Interoperabilität – Arbeitet das System korrekt mit den zur Zusammenarbeit spezifizierten anderen Systemen zusammen?
- Leistung – Werden die für das System spezifizierten Zeit und Kapazitätslimits eingehalten?
- Skalierbarkeit – Sind die Busse beim Zusammenspiel aller Komponenten überlastet?
- Belastung – Arbeitet das System korrekt unter hoher Belastung?
- Zuverlässigkeit – Arbeitet das System dauerhaft korrekt?
- Regulationskonformität – Werden die gesetzlichen und regulatorischen Anforderungen eingehalten?
System-Tests sind üblicherweise die frühesten Tests, die das Prüfen dieser Aspekte erlauben. Bei diesen Tests gefundene Fehler sind jedoch bereits teuer in der Beseitigung, da meistens direkt mehrere Komponenten von dem Fehler betroffen sind. Für diese Tests werden oft so genannte „box cars“, ein Aufbau der gesamten elektrischen Komponenten auf einem Tisch ohne das Fahrgestell, verwendet.
### Funktionale Tests
Bei den funktionalen Tests arbeite man in der Regel mit voll funktionstüchtigen Prototypen. Dabei konzentriert man sich darauf, anhand der Use-Cases abzuprüfen, ob das System so arbeitet, wie es vorgesehen wurde. Da der Interne Aufbau des Systems hierbei nur eine untergeordnete Rolle spielt spricht man auch von „Black-Box Tests“. Funktionale Tests werden in der Regel manuell durchgeführt und können dabei sehr aufwendig sein. Wenn man zum Beispiel einen Crash-Test durchführt, muss man mit aufwendigen Anlagen dafür sorgen, dass alle physikalischen Gegebenheiten den Spezifikationen entsprechen und der Test geht zudem mit einer Beeinflussung des Systems einher, die weitere Tests unmöglich macht. Außerdem ist es bei Auftreten eines Fehlers oft sehr schwer die genaue Ursache für diesen zu ermitteln, da viele Faktoren ursächlich sein können.
## AUTOSAR
AUTOSAR (AUTomotive Open System ARchitecture) [AUT17] ist die Referenzarchitektur bzw. -methode für die Entwicklung von Software-Systemen in der Automobilindustrie. Es bietet eine Sprache (Metamodell), Architektur-Module sowie die Funktionalität der Middleware Schicht (auch Basic Software)
 
Abbildung X: AUTOSAR Software Architektur Schichten [AUT17]
### Übersicht über den AUTOSAR Standard
Die Architektur von automobilen Software-Systemen kann aus verschiedenen Perspektiven betrachtet werden. Ich werde hier auf Logische und die physikalische Perspektive kurz eingehen.
 
Abbildung X: AUTOSAR Entwicklungsprozess [AUT17]
In der logischen Architektur von automobilen Software-Systemen wird die Funktionalität auf der obersten Ebene beschrieben, wie z. B. das automatisierte Überholen, wenn die linke Spur auf der Autobahn frei ist und das vorrausfahrende Auto langsamer ist. An der Realisierung einer solchen Funktion sind in der Regel eine ganze Reihe von logischen Software-Komponenten beteiligt wie z. B. der Lidar-Sensor, welcher das langsame Fahrzeug detektiert und der automatischen Lenkung und bei der automatischen Lenkung den Überholvorgang anfordert. Diese verteilten Komponenten werden für die Funktion in der Architektur zu einer logischen Einheit zusammengefasst.
 
Abbildung X: Beispiel eines vom OEM ausgeführten logischen System-Designs [STA17]
Die physikalische Architektur eines automobilen Software-Systems ist heute hingegen in der Regel über mehr als 100 ECUs verteilt. Diese ECUs kommunizieren über verschiedene Bussysteme miteinander und sind dafür verantwortlich, wie in der logischen Architektur beschrieben, eine oder mehrere Funktionalitäten auf oberster Ebene auszuführen.
 
Abbildung X: Beispiel eines vom OEM durchgeführten physischen COM-Designs. [STA17]
Darüber hinaus hat jedoch auch noch jede ECU seine eigene physikalische Architektur bestehend aus Anwendungssoftware, Middleware und Hardware. Der Entwurf der logischen und physikalischen Architektur erfolgt dabei nach dem MDA (Model-Driven Architecture) Ansatz. Im Fall der Automobil-Branche sind die OEMs im Allgemeinen dafür zuständig die logische 
und physikalische Architektur zu entwerfen während das Design der physikalischen Architektur der ECUs den Zulieferern vorbehalten ist. Um diesen verteilten Architektur-Entwurf erfolgreich effizienter praktizieren zu können wurde 2003 der AUTOSAR Standard eingeführt 
. Heute hat der Standard mehr als 150 Partner weltweit und ist dementsprechend der Haupt-Standard in der Automobilindustrie.
AUTOSAR hat dabei 4 Hauptziele: 
1. Standardisierung der Referenz-ECU Architektur und ihrer Ebenen, was die Wiederverwendbarkeit bei verschiedenen Fahrzeugen deutlich erhöht.
2. Standardisierung der Entwicklungs-Methoden, was die Zusammenarbeit des OEM und der Zulieferer auf allen Ebenen ermöglicht.
3. Standardisierung der Sprache (Meta-Modell) des Architekturmodells des Systems/der ECUs. Dies ermöglicht den Austausch von Architekturen zwischen verschiedenen Modellierungs-Tools.
4. Standardisierung der ECU Middleware (Basic Software) Architektur und Funktionalität, was es Entwicklern erlaubt sich auf die Funktionalität auf höheren Ebenen zu konzentrieren.

 
Abbildung X: Beispiel eines vom Tier 1 Zulieferer durchgeführten Basic Software Designs [STA17]
### AUTOSAR Meta-Model
Um den Austausch von Modellen zwischen OEMs und Zulieferern zu standardisieren wurde in AUTOSAR ein Meta-Model definiert, welches eine Sprache für die Modelle spezifiziert. Bei den AUTOSAR Modellen handelt es sich um Instanzen des Meta-Models, welche deren abstrakte Syntax in der UML Sprache spezifiziert. Diese Modelle sind wiederum in XML serialisiert. Sie haben die Dateiendung ARXML, was für AUTOSAR XML steht. Die AUTOSAR Meta-Modell Umgebung hat eine Hierarchie mit 5 Stufen:
1. ARM4: MOF 2.0, z. B. die Meta Object Facility Klasse
2. ARM3: UML und AUTOSAR UML Profil, z. B. die UML Klasse
3. ARM2: Meta-Model, z. B. die Software-Komponente
4. ARM1: Modelle, z. B. das Anti-Blockier-System
5. ARM0: Objects, z. B. das Anti-Blockier-System im Speicher der ECU

### Adaptives AUTOSAR
Seit 2017 gibt es als Erweiterung von AUTOSAR die AUTOSAR Adaptive Platform. Waren bisher die Steuergeräte statisch in das Gesamtsystem eingebunden, so dass sie nicht zur Laufzeit verändert werden konnten, so kann man nun mit adaptivem AUTOSAR die Einbindung der Steuergeräte dynamisch verändern. Die Plattform soll AUTOSAR zukunftssicher machen und bietet folgende Möglichkeiten:
- Agile Methoden der Softwareentwicklung basierend auf dynamischen Software-Updates
- Schnelles Hinzufügen neuer Anwendungssoftware-Komponenten. Dies ermöglicht kurze Innovationszyklen
- Abgesicherte serviceorientierte Kommunikation. Dies ermöglicht dynamische Updates
- Kabellose Updates der Anwendungssoftware
- Unterstützung von Konfigurationsänderungen zur Laufzeit
- Kommunikation zwischen ECUs via Ethernet mit hoher Bandbreite
- Netzwerk Switch. Ermöglicht intelligenten Datenaustausch zwischen verschiedenen Ethernet Bussen.
- Mikroprozessoren mit externem Speicher
- Multi-Kern-Prozessoren, Hardware Beschleunigung und Parallele Datenverarbeitung
- Abwärtskompatibilität. Klassische AUTOSAR ECUs lassen sich in das System integrieren.
- Einschränkung des Zugriffs. Separation von Programmen via Sandboxing möglich.
## Modellbasierte Softwareentwicklung mit Simulink
Die Modelle, die bei der Entwicklung von Software in der Automobilbranche in der Regel zum Einsatz kommt, sollen das Verhalten eines Autos nachbilden können und orientiert sich daher eher an Methoden der Physik bzw. Mathematik. Bei dieser Art des Designs muss jedoch der Designer die physikalischen Zusammenhänge verstehen und nachbilden können. Das Modell wird dann mit Hilfe mathematischer Formeln als Datenfluss-Modell erstellt. Um beispielsweise ein Anti-Blockier-System zu beschreiben muss der Designer die physikalischen Zusammenhänge wie Schlupf, Drehzahl und Geschwindigkeit als Funktion über die Zeit modellieren. Wenn die mathematischen Zusammenhänge ausgearbeitet wurden, werden diese als Simulink Blöcke, Transitionen und Funktionen nachgebildet. Dabei konzentrieren sich die Designer auf den Datenfluss und Rückkopplungsschleifen. Auch hat der Designer die Möglichkeit eigene Simulink-Blöcke mit Code zu schreiben um Simulink um nicht vorhandene Funktionalitäten zu erweitern. Wenn das Modell fertiggestellt wurde, wird mit diesem C oder C++ Code erzeugt.
 
Abbildung X: Bericht für die Code Generierung [DEM]
## Softwarequalität in der Automobilindustrie
Für die Sicherstellung von Qualität bei Software-Systemen in der Automobil-Branche gibt es verschiedene Standards. Die größte Relevanz hat dabei die ISO Norm 25000. Diese Standards teilen Software-Qualität drei verschiedene Bereiche auf:
1. Externe Software-Qualität – Beurteilt die Software-Qualität anhand der Anforderungen
2. Interne Software-Qualität – Beurteilt die Softwarequalität anhand ihrer Implementierung
3. Qualität während der Benutzung – Beurteilt die Qualität einer Software aus der Sicht des Benutzers
### Sicherheitskritische eingebettete Systeme
Für das Design sicherheitskritischer eingebetteter Systeme gibt es verschiedene Strategien. So hat die Luft- und Raumfahrtindustrie bereits in den 70er Jahren zu diesem Zweck die strukturierte Programmiersprache Ada mit statischer Typbildung entwickelt. Die Telekommunikationsbranche auf der anderen Seite hat mit funktionalen Programmiersprachen wie Beispielsweise Erlang gearbeitet um dies zu erreichen. In der Automobilbranche ist es hingegen üblichen generierten C/C++ Code einzusetzen. C/C++ hat dabei den Vorteil, dass es eine der bekanntesten Programmiersprachen ist und einen guten Compiler-Support hat. Gerade die in der Branche üblichen Betriebssysteme wie VxWorks oder QNX basieren auf Unix, so dass Programme einfach zwischen ihnen portiert werden können. Diese Betriebssysteme sind einfach aufgebaut und haben leistungsstarke Scheduler.
Da es sich bei Software-Systemen in Autos um verteilte Systeme handelt ist insbesondere darauf zu achten, das die Kommunikation zwischen den einzelnen ECUs bei sicherheitskritischen Subsystemen funktioniert.
### Statische Code-Analyse
Ein Standard-Mittel zur Sicherstellung einer guten Software-Qualität stellt dabei die statische Code-Analyse dar. Dabei wird der Source-Code eines Software-Systems gegen ein Regelwerk geprüft, welches nach bekannten Fallstricken in Programmen und die das Nichteinhalten von „Good Practice“-Richtlinien des Software-Designs. Besonders hervorzuheben ist hier das MISRA (Motor Industry Software Reliability Association) Regelwerk für C/C++ welche den Standard in der Automobil-Branche darstellen. Zusätzlich zu MISRA werden häufig noch weitere Sachverhalte überprüft, wie z. B.:
- Überläufe während Berechnungen
- Unsichere Typ-Casts
- Benutzung von Pointer-Operationen, die zu unerwarteten Speicherzugriffen führen
- Verletzung der Sicherheitsrichtlinien
- Gleichzeitiger Zugriff auf Daten
- Die Benutzung einer anderen als der Vorgegebenen IDE
Da die statische Code-Analyse das Programm nicht ausführen muss, können Programme jederzeit geprüft werden, selbst wenn sie sich gerade nicht kompilieren lassen. Daraus ergibt sich jedoch auch sofort, dass sich mit statischer Codeanalyse keine Fehler finden lassen, welche erst zur Laufzeit erkennbar sind. Dementsprechend kann statische Codeanalyse nur als zusätzliches Mittel zur Verbesserung von Software-Qualität genutzt werden. Die dynamische Codeanalyse, also dass Testen des Systems im Betrieb mit Testfällen gegen ein zu erwartendes Ergebnis, bleibt auch weiterhin unverzichtbar.
### Formale Methoden
Unter formalen Methoden versteht man Techniken der Spezifikation, der Entwicklung und der Verifikation, mit denen man beweisen kann, dass eine Software exakt so arbeitet wie sie spezifiziert wurde. Dabei bedient man sich unter anderem der Typentheorie, mathematischer Logik oder symbolic execution. In der Automobilbranche werden formale Methoden für die Verifikation von ASIL D (Automotive Safety Integrity Level D) Komponenten eingesetzt. Dabei handelt es sich um die Komponenten, die in der Iso Norm 26262 [ISO11] mit der höchsten Gefahr bezüglich Verletzungen der Insassen eingestuft werden. 
Dabei ist jedoch zu beachten, dass die formale Verifikation ein ganzheitlicher Prozess ist. Beweisen, dass ein Programm genau das macht was es soll, gehört zu den härtesten Problemen der Informatik und ist daher nur für „einfache Programme“ überhaupt möglich. Daraus ergibt sich sofort, dass die beabsichtigte Verifikation bereits beim Design und der Implantierung der Software beachtet werden, damit anschließend ein Programm vorliegt, welches überhaupt verifizierbar ist. Des Weiteren ist es ein iterativer Prozess, bei dem ein nicht verifizierbares Programm dazu führt, das man wieder Design und Implementierung optimiert. Die formale Verifikation ist das wirksamste Mittel zur Sicherstellung von Software-Qualität. Es kann jedoch aufgrund des extrem hohen Aufwands nur bei hoch sicherheitskritischer Software überhaupt zum Einsatz kommen.
## Literaturverzeichnis
AUT177. AUTOSAR, www.autosar.org. Automotive Open System Architecture – Classic Platform, v4.3.1, 2017.
AUT18. AUTOSAR, www.autosar.org. Automotive Open System Architecture – Adaptive Platform, v18-03, 2018.
BWKC16. Robert Bertini, Haizhong Wang, Tony Knudson, and Kevin Carstens. Preparing a roadmap for connected vehicle/cooperative systems deployment scenarios: Case study of the state of oregon, usa. Transportation Research Procedia, 15:447–458, 2016.
Dem. Simulink Demo. Modeling an anti-lock braking system.
ISO11 ISO. 26262–road vehicles-functional safety. International Standard ISO, 26262, 2011. ISO16. ISO/IEC. ISO/IEC 25000 - Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE). Technical report, 2016.
LKM13. Jerome M Lutin, Alain L Kornhauser, and Eva Lerner-Lam MASCE. The revolutionary development of self-driving vehicles and implications for the transportation engineering profession. Institute of Transportation Engineers. ITE Journal, 83(7):28, 2013.
MIS08. Motor Industry Software Reliability Association et al. MISRA-C: 2004: guidelines for the use of the C language in critical systems. MIRA, 2008.
PBKS07. Alexander Pretschner, Manfred Broy, Ingolf H Kruger, and Thomas Stauner. Software engineering for automotive systems: A roadmap. In 2007 Future of Software Engineering, pages 55–71. IEEE Computer Society, 2007.
STA17.  Staron, Miroslaw. Automotive Software Architectures, Springer, 2017.
