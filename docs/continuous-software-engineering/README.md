# Continuous Software Engineering

## Definition

"Continuous Software Engineering" beschreibt eine Möglichkeit der iterativen Softwareentwicklung und fokussiert sich auf den Prozess der Auslieferung an den Benutzer. DAbei wird der agile Softwareentwicklungsprozess unterstützt. Continuous Software Engineering ist interdisziplinär und bezieht im Gegensatz zu reinen agilen Softwareentwicklungsmodellen mehr als die reine Softwareentwicklung mit ein.

## Continuous Integration

"Continuous Integration" beschreibt den automatisierten Prozess, mit dem automatisiert von einer Software ein lauffähiger Build erzeugt werden kann. Einfache Tests, wie beispielsweise Unit-Tests, gehören ebenfalls zur "Continuous Integration".
"Continuous Integration" ist Grundlage und erster Schritt von "Continuous Delivery".

### Was gehört zu einem Build?

Aufgabe von Continuous Integration ist die Automatisierung des Build-Prozesses. Welche Schritte dabei ausgeführt werden, hängt natürlich stark von verwendeter Programmiersprache und angestrebter Zielumgebung ab. Im folgenden wird der Build-Prozess in einige typische Schritte zerlegt.

#### Kompilieren

Beim kompilieren wird der Sourcecode einer Anwendung in ein Format übersetzt, welches effizient vom Computer ausgeführt werden kann. Das Zielformat ist typischerweise nicht "menschenlesbar".

#### Unit-Tests

Zu einem Build gehört auch das Ausführen und Auswerten von Unit-Tests. Unit-Tests testen einzelne in sich geschlossene Einheiten des Software-Systems, beispielsweise einzelne Klassen oder Dateien. Einfache Fehler können somit sehr schnell erkannt werden.

#### Ressourcen

Wenn die Software externe Ressourcen, beispielsweise Dateien, verwendet, müssen diese möglicherweise in ein Format umgewandelt werden, welches der Anwendung ermöglicht, diese Ressourcen effizienter zu verwenden.

#### Artefakte

Am Ende des Build-Prozesses muss die Anwendung in wiederverwendbare Artefakte, beispielsweise executables oder Container, verpackt werden.

### Build-Tools

Viele der Aufgaben in einem Build werdem dem Software-Entwickler von der verwendeten Entwicklungsumgebung abgenommen. Um den Build jedoch von der Entwicklungsumgebung unabhängig zu machen, wird ein Build-Tool verwendet.
In der einfachsten Form ist ein Build-Tool ein einfaches Script, welches die oben genannten zu einem Build gehörigen Aufgaben nacheinander ausführt. Viele Build-Tools nehmen dem Entwickler allerdings einen Großteil der Konfiguration ab.
Viele Build-Tools sind Programmiersprachen-spezifisch. Für Java gibt es unter anderem folgende Build-Tools:

* Ant

Bei Ant muss sich der Entwickler selbst um alle Aspekte des Builds kümmern und beispielsweise Ablageorte für kompilierten Sourcecode selbst festlegen. Dadurch kann Ant aber auch auf fast jede Build-Umgebung angepasst werden.
Ant orientiert sich stark an dem Unix-Build-Tool make.

* Maven

Maven verfolgt einen anderen Ansatz und definiert 'Konventionen' für beispielsweise den Ablageort von Sourcecode und die Phasen eines Builds. Wenn Projekt und Build-Prozess diesen Konventionen folgen, wird der Build-Prozess sehr einfach und erfordert nur sehr wenig Konfiguration durch den Entwickler. Dadurch muss aber im Zweifelsfall sehr viel an der Build-Umgebung an das verwendete Tool angepasst werden.

* Gradle

Gradle versucht, einen Mittelweg zu finden. Ähnlich wie bei Maven wird vieles über Konventionen abgebildet. Weicht das Projekt von den Konventionen ab, müssen die Abweichungen mit einer Gradle-spezifischen Scriptsprache definiert werden.

## Continuous Delivery

"Continuous Delivery" beschreibt ein Vorgehen aus dem Umfeld der agilen Softwareentwicklung, welches es ermöglicht, Software schneller und vor allem zuverlässiger in Produktion zu bringen. Grundlage dafür ist die sogenannte "Continuous Delivery Pipeline", die viele der nötigen Prozesse automatisiert und den Gesamtprozess der Auslieferung somit reproduzierbar macht.

### Lean

Ein Grundgedanke bei Continuous Delivery ist "Lean". Jede Änderung, für die der Kunde nicht zahlt, entspricht verschwendeten Entwicklerressourcen. Eine Änderung, die der Kunde nicht hat, wird vom Kunden nicht bezahlt. Continuous Delivery hilft dabei, Änderungen möglichst schnell an den Kunden auszuliefern.

### Warum?

Dadurch, dass Continuous Delivery vieles automatisiert und reproduzierbar macht, kann jede neue Version der Software daraufhin getestet werden, ob sie problemlos veröffentlicht werden kann. Somit werden Fehler schneller erkannt und können entsprechend behoben werden, bevor sie möglicherweise Monate später bei der Auslieferung der Software an den Kunden zu Problemen und Verzögerungen führen. Zudem kann die Software öfter als "Gesamtes" getestet werden, und durch den hohen Grad an Automatisierung (und die bereits angesprochene Reproduzierbarkeit) ist sichergestellt, dass Fehler in der Testumgebung erkannt werden und nicht zu "false positives" führen.

### Vorteile der Automatisierung

Durch die hohe Automatisierung von Continuous Delivery Prozessen werden die am Release beteiligten Personen entlastet und können sich auf ihre eigentliche Aufgabe konzentrieren, beispielsweise das Beheben von Fehlern. Die mögliche hohe Frequenz an Veröffentlichungen und damit einhergehend die hohe Zahl an getesteten Versionen macht es möglich, problematische Änderungen schnell zu identifizieren.

### Automatisierte Softwaretests

Soweit möglich, werden die bei der Auslieferung nötigen Tests der Software automatisiert. Dadurch können Tests ohne erhöhten Aufwand mehrfach durchgeführt werden. Test können beispielsweise nach jeder Änderung am Quellcode automatisiert ausgeführt werden und somit zeitnah erkannt und behoben werden. Wenn Tests häufiger ausgeführt werden, bekommen Eintwickler/Entwicklerteams zeitnah Feedback zu durchgeführten Änderungen.

### Risikominimierung

Menschen machen Fehler. Und so unwahrscheinlich es auch klingt, auch Software-Entwickler machen Fehler. Repititive Aufgaben können die Wahrscheinlichkeit von Fehlern erhöhen. Deshalb automatisiert Continuous Delivery solche Aufgaben, um die Wahrscheinlichkeit von Fehlern zu minimieren.
Die bei Continuous Delivery angestrebte hohe Frequenz minimiert zudem das Risiko jedes einzelnen Release, da jedes Release weniger potentiell fehleranfällige Änderungen enthält.

### Continuous Delivery Pipeline

![Continuous Delivery Pipeline](./media/cdp.png "Continuous Delivery Pipeline")

Abbildung 1 - Continuous Delivery Pipeline (Quelle: <a>[[WOLF14]](#ref_wolf14)</a>)

Abbildung 1 zeigt die Continuous Delivery Pipeline. Die Phasen werden sequentiell durchlaufen, wenn also beispielsweise die Akzeptanztests fehlschlagen, werden die Kapazitätstest gar nicht erst ausgeführt. Die Pipeline wird abgebrochen, und sobald der Fehler, welcher zum Abbruch geführt hat, behoben wurde, wird die Pipeline vom Anfang erneut durchlaufen.

#### Commit

Diese Phase deckt alles ab, was typischerweise Continuous Integration macht: Build, Unit-Test und statische Analysen.

#### Akzeptanztests

In dieser Phase werden, soweit möglich, automatisiert die Anforderungen des Kunden an die Anwendung getestet. Zusätzlich können die Anforderungen mithilfe automatisierter GUI-Tests getestet werden.

#### Kapazitätstests

Kapazitätstest testen das Verhalten der Anwendung unter erwartbaren Lastbedingungen. Dabei geht es nicht unbedingt um die Leistungsfähigkeit einer Anwendung, sondern um Skalierbarkeit. Dadurch können auch in einer Umgebung, die nicht der Produktionsumgebung entspricht, Rückschlüsse auf das Verhalten der Anwendung geschlossen werden.
Auch nichtfunktionale Anforderungen können von den Kapazitätstests abgedeckt werden.

#### Explorativer Test

Beim explorativen Test wird die Anwendung mit Fokus auf neue Features und unvorhergesehenes Verhalten getestet. Diese Tests müssen nicht automatisiert erfolgen. Dadurch, dass viele der sonstigen Tests aber automatisiert sind, bleibt für diesen Testschritt mehr Zeit.

#### Produktion

Bei der Einführung in die Produktion geht es darum, die Anwendung in einer neuen Umgebung zu installieren. Durch die hohe Zahl an vorher ausgeführten Tests, die teilweise in einer der Produktionsumgebung ähnlichen Umgebung erfolgt sind, ist dieser Schritt häufig recht risikoarm.

## Agile Softwareentwicklung

Agile Softwareentwicklungsprozesse haben zum Ziel, den Prozess der Softwareentwicklung zu beschleunigen und die Zeit bis zum Einsatz beim Benutzer zu verkürzen.

### Frühe Phase mit Scrum

Scrum ist eine agile Softwareentwicklungmethode für kleinere Softwareentwicklungsteams. Scrum beschreibt den Softwareentwicklungsprozess, nicht aber den Prozess der Auslieferung an den Nutzer.

### DevOps

##### Definition

Anders als  z.b. Scrum beschreibt DevOps nicht den Prozess der Softwareentwicklung, sondern den Prozess der Auslieferung an den Nutzer.

##### Entwicklung/IT-Operations

Der Begriff DevOps setzt sich zusammen aus den Begriffen Development (Entwicklung) und Operations. Der Bereich Entwicklung ist für die Softwareentwicklung zuständig, der Bereich Operations für die notwendige IT-Infrastruktur (z.b. Bereitstellung notwendiger Tools). Wenn zusätzlich der Bereich Sicherheit involviert ist, spricht man auch von DevSecOps. Ziel ist es, dass diese Bereiche enger zusammenarbeiten.

##### DevOps als agiler Prozess

##### Automatisierung

Ein Ziel von DevOps ist die größtmögliche Automatisierung des Auslieferungsprozesses durch den Einsatz geeigneter Tools. Einfache, repititive Aufgaben werden automatisiert.

##### Schneller Releases/Deployment Cycle

##### Feedback (Bugtracker)

Um Feedback möglichst schnell zum Entwickler zu bekommen, wird bei DevOps ein Bugtracker verwendet. Der Bugtracker dient dazu, Feedback von Testern zu sammeln, sodass der Entwickler die Möglichkeit hat, zeitnah auf Feedback einzugehen und eventuell gefundene Probleme zu beheben.

##### Microservices

##### Automatisiertes Testen

Soweit möglich, wird bei DevOps automatisiert, bspw. mithilfe von Unit-Tsts, getestet. Jedesmal wenn aus dem Quellccode ein neuer Build erstellt wird, werden automatisierten Tests ausgeführt und deren Ergebnisse an den Entwickler weitergeleitet.


## Workflows

	Continuous Delivery
		Continuous Integration
		schnellerer Release
		Deployment-Pipeline
		jede Version (auch intern) muss lauffähig sein
		automatisierte und manuelle Tests
	Continuous Improvment
		kontinuirliche Verbesserung
		Möglichkeiten zur Verbesserung werden identifiziert und umgesetzt
	Continuous Integration
		Continuous Delivery als Weiterentwicklung

	Definition und Abgrenzung

## Tools

### Docker

#### Definition

Docker ist ein Tool zur Containerisierung von Software. Dabei wird die Software mit allen ihren Abhängigkeiten (z.b. Bibliotheken) in ein Image gepackt. Dieses Image kann dann von einem standardisierten Container ausgeführt werden.

Die Docker-Laufzeitumgebung ist an Linux angelehnt. Es stehen dem Entwickler somit alle die Funktionen von Linux zur Verfügung. Docker selbst ist ebenfalls Linux-Software und damit standardmäßig nur unter Linux lauffähig. Soll Docker unter Windows oder Mac OS ausgeführt werden, muss ein Linux-System in einer virtuellen Maschine genutzt werden. Docker selbst ist keine Virtualisierunganwendung.

#### Begriffe

##### Image

Ein Image ist ein Abbild der Software mit ihren Abhängigkeiten.

##### Layer

Ein Layer ist ein Set von Änderungen innerhalb eines Image. Für jede Änderung wird im Image ein neues Layer angelegt.

##### Container

Ein Container ist die laufende Instanz eines Images. Container bieten eine standardisierte Laufzeitumgebung für Images.

#### Containerisierung vs. Virtualisierung

Ähnlich wie bei der Virtualisierung wird auch bei der Containerisierung eine Gast-Betriebssystem innerhalb des Host-Systems emuliert, Containerisierung hat gegenüber der Virtualisierung aber den Unterschied, dass das Container-System sich Ressourcen mit dem Host-System teilt. Dies soll bei der Virtualisierung vermieden werden.

Im Falle der Containerisierung hat das zum Vorteil, das Ressourcen besser genutzt werden und der "Overhead" einer containerisierten Anwendung sehr viel geringer ist als der einer virtualisierten Anweundung. Dies erlaubt dem Entwickler, problems mehrere containerisierte Anwendungen gleichzeitig laufen zu lassen, was bei der Virtualisierung oft nicht ohne weiteres möglich ist. Docker ist kein System zur Virtualisierung, sondern zur Containerisierung.

#### Tools für Docker

##### Docker-Hub

Docker-Hub ist ein zentrales Repository für vorkonfigurierte Docker-Container.
	
#### Versionsverwaltung

Docker hat eine integrierte Versionsverwaltung. Änderungen an einem Image werden innerhalb des Image in Form von Layern gespeichert. Mithilfe der Layer lässt sich die komplette Versionshistorie eines Image nachvollziehen.	
		
#### Sicherheit

Die Docker-Laufzeitumgebung läuft mit *root*-Rechten, um Zugriff auf sämtliche Betriebssystem-Funktionen zu haben. Die Ressourcen der Anwendung im Container werden allerdings vom Betriebssystem getrennt, und Docker schränkt den Zugriff auf wichtige Systemdateien ein.


### JIRA

### Jenkins

#Quellen

[VERO16]

<a name="ref_wolf14">[WOLF14]</a>

