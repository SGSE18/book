# Continuous Software Engineering

## Definition

"Continuous Software Engineering" beschreibt eine Möglichkeit der iterativen Softwareentwicklung und fokussiert sich auf den Prozess der Auslieferung an den Benutzer. DAbei wird der agile Softwareentwicklungsprozess unterstützt. Continuous Software Engineering ist interdisziplinär und bezieht im Gegensatz zu reinen agilen Softwareentwicklungsmodellen mehr als die reine Softwareentwicklung mit ein.

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

