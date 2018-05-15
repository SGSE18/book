# Functional Reactive Programming

## Functional Programming
In den letzten Jahren ist das Thema funktionales Programmieren immer stärker aufgekommen. Die Ziele,
welche beim funktionalen Programmieren sind dabei die selben wie sich auch beim objektorientierten Programmieren
erreicht werden sollen:

* Wartbarer Code
* Wiederverwertbarer Code
* Verständlicher Code

Auch wenn die Ziel der beiden Ansätze gleich sein, so sind die unterliegenden Paradigmen doch völlig unterschiedliche:
Beim objektorientieren Ansatz wird versucht, die Daten und die damit verbundenen Verhalten miteinander zu vereinen. 
Die daraus resultierende Vereinigung ist die Grundlage des OOP-Ansatzes: Das Objekt. 
In einem Objekt werden über Instanzvariablen Daten gehalten, die den Zustand des Objektes beschreiben. Zusätzlich
enthält das Objekt Verhalten in Form von Methoden, mit deren Hilfe der Zustand des Objektes manipuliert werden kann.

Ein einfach Beispiel ist die Klasse Arbeiter:

```Java
public class Arbeiter{
    private String name;
    private int gehalt;

    public Arbeiter(String _name, int _gehalt){
        this.name = _name;
        this.gehalt = _gehalt;
    }

    public int gehaltsErhoehung(int zuschlag){
        this.gehalt += zuschlag;
        return this.gehalt;
    }

    public String toString(){
        return this.name + " verdient " + this.gehalt;
    }
}
```
Nun könnten die Instanzen dieses Arbeiterobjektes in einer Liste gehalten werden, um sie so beispielsweise zu verwalten.
Ein Anwendungsfall könnte es des weiteren sein, dass alle Arbeiter in dieser Liste eine Gehaltserhöhung bekommen sollen.
Um dies in einer objektorientierten Sprache wie in diesem Falle Java zu realisieren, müsste das zu schreibende Programm
über die Liste der Arbeiter iterieren und für jeden Arbeiter die Methode zur Gehaltserhöhung aufrufen.

```Java
for (angestelltenListe Angestellter: tempAngestellter){
    tempAngestellter.gehaltsErhoehung(200);
}
```

Der selbe Sachverhalt kann natürlich auch mit einem funktionalen Ansatz abgebildet werden:

```Javascript
arbeiter = [
  [ "Alice",  10000.0 ],
  [ "Bob", 12500.0 ]
]
```
Hier wird direkt der erste Unterschied zum objektorientieren Ansatz deutlich: Die Trennung von Daten und Verhalten.
Wo im OOP-Ansatz bei der Erstellung der Daten auch gleichzeitig die Methoden zum manipulieren der Daten mitliefern
werden musste, so bleiben im FP-Ansatz die Daten rein. Hier können die Daten durch dein Einsatz von einfachen Arrays
repräsentiert werden. 

Zur Veränderung der Daten können nun verschiedene Funktionen geschrieben werden. Dabei sollten allerdings verschiedene
Schlüsselkonzepte beachtet werden: 

<center><b>1. Funktionen haben eine einzige Aufgabe</b></center>

Die geschriebenen Funktionen haben genau eine Aufgabe. Dadurch wird erreicht das verschiedene Funktionen 
miteinander kombinierbar werden und so ein komplexeres Programm bilden. Zudem erhöht das Beschränken einer
Funktion auf eine einzige Aufgabe die Testbarkeit des Codes. Für das Arbeiterbeispiel bedeutet dies, dass
es eine Funktion names gehälter_erhöhen() geben wird, welche nur dafür Zuständig ist über die Arbeiter der 
Liste zu iterieren. Diese Funktions erhält zwei Eingabeparameter: Eine Liste mit Arbeiters und der eigentliche 
Gehaltserhöhung. 
Zusätzlich wird es eine Funktion gehalt_erhöhen() implementiert, welche anschließend nur zur Aufgabe hat, das Gehalt eines einzelnen 
Arbeiters zu erhöhen. 

<center><b>2. Daten sind Immutable</b></center>

Durch den Funktionsaufruf von gehalt_erhöhen() wird kein Wert des originalen Arrays verändert. Immutable bedeutet,
dass es keine Funktion geben kann, welche die Daten auf irgendeine weise verändern kann. Im OOP-Ansatz ist es übelich den
Zustand oder "state" eines Objektes beliebig zu verändern. Im FP-Ansatz hingegen werden nur Kopien der veränderten Daten 
erzeugt, mit denen im Verlauf des Programmes weiter gearbeitet wird. Der originale "state" in einem funktionalen Programm
bleibt somit erhalten. 
Dies hat zum Vorteile das einerseits ein Funktionsaufruf auf den selben Daten in jedem Fall den selben Output besitzt,
zum anderen kann der Zustand so, falls gewünscht, über den gesamten Programmablauf verfolgt werden. Auch dieses 
Konzept trägt zur Lesbarkeit und Wartbarkeit des Codes bei.




### Vorteile


### Nachteile


## Benutzung der RxJS Bibliothek


## CycleJS

### Konzept

### Driver und Sinks

### Side effects

### Sample Code


