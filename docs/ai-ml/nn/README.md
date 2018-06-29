# Neural networks
Neuronale Netze (neural networks) sind in der Informatik, Netzwerke aus künstlichen Neuronen. Sie sind als Nachbildung der Neuronenstruktur von menschlichen Gehirnen entwickelt worden.

Grundbaustein aller neuronalen Netzwerke ist das Perzeptron.

## Perzeptron
In seiner einfachsten Ausführung ist ein Perzeptron vergleichbar mit einem Logikschalter. Es kann boolesche Werte (1 - wahr, 0 - falsch) als Eingabe aufnehmen und gibt selbst wieder einen booleschen Wert als Ergebnis aus. In der Grafik kann das Perzeptron die logische Und-Verknüpfung zweier Werte ausführen. X und Y sind jeweils Eingaben, das Perzeptron gibt als Ausgabe entweder 1 aus, wenn beide Eingaben 1 sind, andernfalls 0.
<img src="./images/perceptron.png" width="300" style="margin:20px">

Genauer betrachtet, verfügt ein Perzeptron über Eingabegewichtungen (w), eine Eingabe Funktion (input function), sowie eine Aktivierungsfunktion g() (activation function).
Die Eingabegewichtungen sorgen dafür, dass die einzelnen Eingabewerte unterschiedlich stark in die Ausgabe einfließen können. Dazu wird über die Eingabefunktion eine Summe über alle Eingabewerte mit ihren jeweiligen Gewichtungsfaktoren (w) gebildet. Der errechnete Wert wird der Aktivierungsfunktion übergeben, die beeinflusst, ob das Perzeptron eine Aktivierung weiterleitet.


<img src="./images/perceptron2.png" width="500" style="margin:20px">
Quelle: <a>[[RUSS16]](#ref_russ16)</a>

Die Ausgabe der _input function_ an die _activation function_ lässt sich folgendermaßen berechnen:

<img src="./images/perceptron-form.png" width="500" style="margin:20px">

Wie in der Formel ersichtlich, erfolgt eine Weiterleitung von 1 an die _activation function_ wenn die Summe über die Produkte, zwischen Eingabevektorwert mit dem jeweiligen Gewicht (w), größer bzw. gleich dem Bias Gewicht (w 0,i) ist, andernfalls wird 0 weitergegeben.

## Aktivierungsfunktionen
Zuletzt entscheidet die Aktivierungsfunktion über eine Aktivierung des Perzeptrons. Verschiedene Altivierungsfunktionen eignen sich für unterschiedliche Problemstellungen. In der Grafik ist auf der linken Seite ist die Sprungfunktion und auf der rechten Seite die sigmoide Funktion zu sehen. Die Sprungfunktion leitet eine Aktivierung des Perzeptrons ein sobald die Ausgabe der _input function_ größer 0 ist. Eine sigmoide Funktion würde in einem anderem Beispiel feinere Abstufungen erlauben, wenn die Ausgabe einer _input function_ nicht nur 0 oder 1 annehmen können und wird in neueren neuronalen Netzen überwiegend verwendet. 

<img src="./images/activation-functions.png" width="400" style="margin:20px">

## Limitierung
Ein einzelnes Perzeptron ist fähig die logischen Funktionen AND, OR und NOT abzubilden. Minsky und Papert wiesen 1969 nach, dass die XOR Funktion nicht abgebildet werden kann. Auch kann es nur linear separable Problemstellungen lösen, für komplexere Klassifizierungen ist ein mehrlagiges Perzeptron nötig, dieses kann erstmals als neuronales Netz bezeichnet werden.

<img src="./images/separable.png" width="400" style="margin:20px">

## Mehrlagiges Perzeptron

<img src="./images/multi-perceptron.png" width="400" style="margin:20px">

Mit mehrlagigen Perzeptren sind komplexere Funktionen berechenbar, in oben stehendem Beispiel die logische XOR Funktion welche mit einem 2-lagigem Perzeptron berechnet werden kann. Es kann hierbei auch von _feed-forward neural network_ gesprochen werden, _feed-forward_ deshalb, weil Aktivierungen nur Richtung Ausgabe weitergereicht werden und diese keine Veränderungen in vorherigen Schichten (_layer_) des neuronalen Netzes bewirken. Bei neuralen Netzwerken, die mehr als eine verdeckte Schicht (_hidden layer_) zwischen Eingabe- und Ausgabe-Neuron besitzen, wird die Bezeichnung _deep neural network_ bzw. _deep feed-forward network_ verwendet.
<img src="./images/perc-ff-dff.png" width="600" style="margin:10px">
Quelle: Fjodor van Veen, Asimov Institute 


## Literaturverzeichnis

<a name="ref_russ16">[RUSS16]</a>:Russell, Stuart J., and Peter Norvig. Artificial intelligence: a modern approach. Malaysia; Pearson Education Limited,, 2016.