(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{64:function(e,r,t){e.exports=t.p+"assets/img/peers.diagram.6.546b49d6.png"},65:function(e,r,t){e.exports=t.p+"assets/img/peers.diagram.9.b514cad8.png"},66:function(e,r,t){e.exports=t.p+"assets/img/fabric_arch.08fe07ce.png"},84:function(e,r,t){"use strict";t.r(r);var n=[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"populare-blockchain-plattformen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#populare-blockchain-plattformen","aria-hidden":"true"}},[e._v("#")]),e._v(" Populäre Blockchain Plattformen")]),n("h2",{attrs:{id:"bitcoin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin","aria-hidden":"true"}},[e._v("#")]),e._v(" Bitcoin")]),n("p",[e._v("Autor: Nils Dralle")]),n("p",[e._v("Bitcoin ist eine sogenannte Kryptowährung, die ohne eine zentrale Kontrollinstanz (wie z.b. eine Bank) auskommt. Stattdessen bilden alle, die am Zahlungsverkehr mit Bitcoin teilnehmen wollen, ein Netzwerk von Knoten, eine sogenannte Blockchain. Die Bitcoin-Blockchain fungiert als Kontrollinstanz. In ihr werden alle Transaktionen mit Bitcoins vermerkt, und alle Teilnehmer des Netzwerks sind gemeinsam dafür verantwortlich, dass die zugrunde liegende Blockchain aktuell und konsistent ist. Um eine Überweisung mit Bitcoins vornehmen zu können, müssen Sender und Empfänger eine aktuelle Kopie der Blockchain haben. Jede Transaktion im Bitcoin-Netzwerk wird kryptografisch abgesichert.")]),n("h3",{attrs:{id:"geschichte"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#geschichte","aria-hidden":"true"}},[e._v("#")]),e._v(" Geschichte")]),n("p",[e._v("Das Bitcoin-Netzwerk wurde im Jahr 2008 erstmals theoretisch beschrieben und 2009 praktisch umgesetzt. Das Konzept kryptografischer Währungen wurde bereits 1998 veröffentlicht.")]),n("h3",{attrs:{id:"bootstrapping"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bootstrapping","aria-hidden":"true"}},[e._v("#")]),e._v(" Bootstrapping")]),n("p",[e._v('Um sich initial mit anderen Knoten zu verbinden, nutzt der Bitcoin einen sogenannten "Bootstrapping"-Prozess. Mehrere Knoten des Netzwerks fungieren als Startknoten, die die Addressen weiterer Knoten an neue Knoten verteilen. Die Addressen der Startknoten sind im Domain-Name-System eingetragen, welches der Bitcoin-Client nutzt, um die Addressen der Startknoten zu erhalten. Nachdem die initiale Verbindung erfolgt ist und die Addressen weiterer Knoten von den startknoten weitergegeben wurden, kommmt das Bitcoin-Netzwerk auch ohne die Startknoten aus.')]),n("h3",{attrs:{id:"transaktionen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaktionen","aria-hidden":"true"}},[e._v("#")]),e._v(" Transaktionen")]),n("p",[e._v("Jede Transaktion im Bitcoin-Netzwerk besteht aus der kryptografischen Signatur des Senders und dem mit dem Public-Key des Empfängers signierten Hash der vorherigen Transaktion. Auf diese Weise kann der Empfänger die Transaktion verifizieren. Transaktionen werden an alle Knoten im Netzwerk verteilt. [NAKA08] Jede Transaktion hat beim Bitcoin mehrere In- und Outputs, um die Transaktion in mehrere Teilbeträge zerlegen zu können.")]),n("h3",{attrs:{id:"zeitstempel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zeitstempel","aria-hidden":"true"}},[e._v("#")]),e._v(" Zeitstempel")]),n("p",[e._v("Damit jeder Knoten die Transaktionen zeitlich einordnen kann, implementiert Bitcoin einen verteilten Zeitstempel-Server. [NAKA08] Der Zeitstempel besteht aus dem Hashwert der Daten, die einen Zeitstempel erhalten sollen, sowie dem Hashwert des vorherigen Zeitstempels.")]),n("h3",{attrs:{id:"proof-of-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-work","aria-hidden":"true"}},[e._v("#")]),e._v(" Proof-of-Work")]),n("p",[e._v("Der Bitcoin nutzt einen Proof-of-Work Algorithmus zu Entscheidungsfindung über neue Blöcke. Dabei wird innerhalb des neuen Blocks ein spezieller Wert, eine sogennante "),n("em",[e._v("Nonce")]),e._v(", angelegt. Dieser Wert wird solange erhöht, bis ein Hash für den Block gefunden wird, der mit einer bestimmten Anzahl Nullen beginnt. Über die benötigte Anzahl Nullen kann die Schwierigkeit des Proof-of-Work angepasst werden. Beim Bitcoin wird die Schwierigkeit automatisch so angepasst, dass ein neuer Block etwa alle 10 Minuten gefunden wird.")]),n("h3",{attrs:{id:"protokoll"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#protokoll","aria-hidden":"true"}},[e._v("#")]),e._v(" Protokoll")]),n("p",[e._v("Mining, UTXO etc.")]),n("h2",{attrs:{id:"hyperledger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hyperledger","aria-hidden":"true"}},[e._v("#")]),e._v(" Hyperledger")]),n("p",[e._v("Autor: Cem Basoglu")]),n("p",[e._v("Das in 2016 gegründete Hyperledger Projekt fasst mehrere Frameworks und Tools\nzusammen, die den Einsatz von Distributed Ledger Technologien in Business\nApplikationen ermöglichen sollen "),n("a",[n("a",{attrs:{href:"#ref_cach16"}},[e._v("[CHAC16]")])]),e._v(".\nNeben den von IBM und Intel initial beigesteuerten Distributed Ledger Codebasen\nFabric und Sawtooth, gehören mittlerweile drei weitere Frameworks und eine Vielzahl\nvon Tools zum Hyperledger Projekt.")]),n("p",[e._v("Im Gegensatz zu anderen populären Blockchain Plattformen, bei dem eine\nKryptowährung im Vordergrund steht, setzen die Frameworks in Hyperledger auf\neinen möglichst modularen Distributed Ledger und überlassen die Implementierung\neiner Währung und Zahlungsabwicklung, der auf dem Framework aufbauend\nApplikation "),n("a",[n("a",{attrs:{href:"#ref_owen17"}},[e._v("[OWEN17]")])]),e._v(".")]),n("h3",{attrs:{id:"frameworks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frameworks","aria-hidden":"true"}},[e._v("#")]),e._v(" Frameworks")]),n("p",[e._v("Jedes Framework im Hyperledger Projekt stellt eine eigene Blockchain Plattform\ndar, die sich sowohl konzeptionell als auch von der Codebasis unterscheiden.\nBevor die einzelnen Frameworks in den folgenden Abschnitten im Detail beschrieben\nwerden, bietet nachstehende Übersicht einen Vergleich der jeweiligen Distributed\nLedger Technologien.")]),n("table",[n("thead",[n("tr",[n("th",[e._v("Merkmal")]),n("th",[e._v("Fabric")]),n("th",[e._v("Sawtooth")]),n("th",[e._v("Iroha")]),n("th",[e._v("Indy")]),n("th",[e._v("Burrow")])])]),n("tbody",[n("tr",[n("td",[e._v("Projekt Status")]),n("td",[e._v("Aktiv")]),n("td",[e._v("Aktiv")]),n("td",[e._v("Aktiv")]),n("td",[e._v("Inkubation")]),n("td",[e._v("Inkubation")])]),n("tr",[n("td",[e._v("Berechtigung")]),n("td",[e._v("permissioned")]),n("td",[e._v("permissioned / permissionless")]),n("td",[e._v("permissioned")]),n("td",[e._v("permissioned")]),n("td",[e._v("permissioned")])]),n("tr",[n("td",[e._v("Konsensus")]),n("td",[e._v("SOLO, Kafka, SBFT*")]),n("td",[e._v("PoET, RAFT")]),n("td",[e._v("YAC (BFT)")]),n("td",[e._v("RBFT "),n("a",[n("a",{attrs:{href:"#ref_aubl13"}},[e._v("[AUBL13]")])])]),n("td",[e._v("Tendermint")])]),n("tr",[n("td",[e._v("Smart Contract / Business Model")]),n("td",[e._v("ja")]),n("td",[e._v("ja*")]),n("td",[e._v("nein")]),n("td",[e._v("nein")]),n("td",[e._v("ja")])]),n("tr",[n("td",[e._v("SDK")]),n("td",[e._v("Go, Node.JS, Java")]),n("td",[e._v("Python, Go, Javascript")]),n("td",[e._v("gRPC API")]),n("td",[e._v("-")]),n("td",[e._v("Solidity")])])])]),n("p",[e._v("*siehe entsprechenden Abschnitt")]),n("h4",{attrs:{id:"fabric"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fabric","aria-hidden":"true"}},[e._v("#")]),e._v(" Fabric")]),n("p",[e._v("Hyperledger Fabrik ist ein Distributed Ledger Framework für "),n("em",[e._v("permissioned")]),e._v("\nBlockchains, zum Ausführen von verteilten Applikationen unter der Verwendung\nvon Standard Sprachen wie Go, Java oder Javascript "),n("a",[n("a",{attrs:{href:"#ref_andr18"}},[e._v("[ANDR18]")])]),e._v(".")]),n("p",[e._v("Wie in Abbildung 8.4.2.1 dargestellt, wird das Framework in die Komponenten\nMembership Service Provider, Peer, Ordering Service und Chaincode unterteilt,\nwobei durch den modularen Aufbau die Komponenten beliebig ausgetauscht oder\ndurch eigene Implementierung ersetzt werden können. Die Kommunikation zwischen\nden Komponenten erfolgt mittels gRPC.")]),n("p",[n("img",{attrs:{src:t(66),alt:"Fabric Architektur",title:"Fabric Architektur"}})]),n("p",[e._v("Abbildung 8.4.2.1 - Fabric Architektur (Quelle: "),n("a",[n("a",{attrs:{href:"#ref_andr18"}},[e._v("[ANDR18]")])]),e._v(")")]),n("h5",{attrs:{id:"membership-service-provider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#membership-service-provider","aria-hidden":"true"}},[e._v("#")]),e._v(" Membership Service Provider")]),n("p",[e._v("Damit eine Entität, wie z.b. ein Peer oder Client, mit dem Distributed Ledger\ninteragieren kann, muss dieser im System bekannt sein. Dazu wird jeder Entität\nein Zertifikat nach dem X.509 Standard ausgestellt und der "),n("em",[e._v("Public Key")]),e._v(" beim\nMembership Service Provider registriert. Die Zertifikate dienen als Identität\nund werden sowohl für die Signierung von Transaktionen, als auch für die TLS\ngesicherte Kommunikation zwischen der Peers verwendet.")]),n("p",[e._v("Der MSP kann zentral oder, wenn es das Geschäftsmodell voraussetzt, durch\nmehrere Teilnehmer der Blockchain in einem Verbund betrieben werden. Ebenfalls\nlassen sich ein oder mehrere Organisationen und die dazugehörigen Root- bzw.\nIntermediate-Zertifkate beim MSP registrieren. Mittels der organisatorischen\nEinheiten können komplexere Anwendungsfälle konstruiert werden, bei dem z.B.\nmehrere Unternehmen miteinander agieren können, Transaktionen jedoch nur von\nden Unternehmen gelesen werden können, die von der Transaktion tangiert werden.")]),n("p",[n("img",{attrs:{src:t(65),alt:"Organisationen und Channels",title:"Organisationen und Channels"}})]),n("p",[e._v("Abbildung 8.4.2.2 - Organisationen und Channels (Quelle: "),n("a",[n("a",{attrs:{href:"#ref_fabr18"}},[e._v("[FABR18]")])]),e._v(")")]),n("p",[e._v("Darüber hinaus können sogenannte Channels verwendet werden, um das\nBlockhain-Netzwerke noch weiter zu unterteilen. Jedes dieser Sub-Netzwerke\nbesitzt sowohl einen eigenen Kommunikationskanal, als auch einen eigenen\nDistribted Ledger. Wie in Abbildung 8.4.2.2 dargestellt, können somit mehrere\nprivate Netzwerke zwischen den Teilnehmern betrieben werden.")]),n("h5",{attrs:{id:"peer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peer","aria-hidden":"true"}},[e._v("#")]),e._v(" Peer")]),n("h5",{attrs:{id:"ordering-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ordering-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Ordering Service")]),n("h5",{attrs:{id:"chaincode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chaincode","aria-hidden":"true"}},[e._v("#")]),e._v(" Chaincode")]),n("p",[e._v("Ein zentrales Element im Fabric Framework bildet der Smart Contract, der auch\nChaincode genannt wird. Über diesen werden sämtliche Funktionalitäten der\nBlockchain abgebildet. Somit existieren nur zwei Arten von Transaktionen - das\nDeployen eines Smart Contracts und das Aufrufen einer Funktion im Smart Contract.")]),n("p",[n("img",{attrs:{src:t(64),alt:"Chaincode Aufruf",title:"Chaincode Aufruf"}})]),n("p",[e._v("Abbildung 8.4.2.3 - Chaincode Aufruf (Quelle: "),n("a",[n("a",{attrs:{href:"#ref_fabr18"}},[e._v("[FABR18]")])]),e._v(")")]),n("h5",{attrs:{id:"client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client","aria-hidden":"true"}},[e._v("#")]),e._v(" Client")]),n("h4",{attrs:{id:"sawtooth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sawtooth","aria-hidden":"true"}},[e._v("#")]),e._v(" Sawtooth")]),n("h5",{attrs:{id:"transaction-family"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction-family","aria-hidden":"true"}},[e._v("#")]),e._v(" Transaction Family")]),n("h4",{attrs:{id:"iroha"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iroha","aria-hidden":"true"}},[e._v("#")]),e._v(" Iroha")]),n("p",[e._v("https://github.com/hyperledger/iroha/issues/249")]),n("h4",{attrs:{id:"indy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#indy","aria-hidden":"true"}},[e._v("#")]),e._v(" Indy")]),n("h4",{attrs:{id:"burrow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#burrow","aria-hidden":"true"}},[e._v("#")]),e._v(" Burrow")]),n("h3",{attrs:{id:"tools"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tools","aria-hidden":"true"}},[e._v("#")]),e._v(" Tools")]),n("h4",{attrs:{id:"composer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#composer","aria-hidden":"true"}},[e._v("#")]),e._v(" Composer")]),n("h4",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[e._v("#")]),e._v(" ...")]),n("p",[e._v("weitere relevante Tools")]),n("h2",{attrs:{id:"ethereum"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ethereum","aria-hidden":"true"}},[e._v("#")]),e._v(" Ethereum")]),n("p",[e._v("Autor: Philipp Möller")]),n("p",[e._v("Testing, Verifikation, etc.")]),n("p",[e._v("Tools (Truffle, etc.)")]),n("h2",{attrs:{id:"literaturverzeichnis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#literaturverzeichnis","aria-hidden":"true"}},[e._v("#")]),e._v(" Literaturverzeichnis")]),n("p",[n("a",{attrs:{name:"ref_example04"}},[e._v("[EXAMPLE04]")]),e._v(": John, Doe: Dummy Titel. Main-Verlag, 2004, ISBN: XXXXX")]),n("p",[n("a",{attrs:{name:"ref_andr18"}},[e._v("[ANDR18]")]),e._v(": Androulaki, Elli, et al. Hyperledger fabric: a distributed operating system for permissioned blockchains. arXiv preprint arXiv:1801.10228, 2018")]),n("p",[n("a",{attrs:{name:"ref_aubl13"}},[e._v("[AUBL13]")]),e._v(": P. L. Aublin, et al.: RBFT: Redundant Byzantine Fault Tolerance. 2013 IEEE 33rd International Conference on Distributed Computing Systems, Philadelphia, 2013, URL: "),n("a",[n("a",{attrs:{href:"http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6681599&isnumber=6681559",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6681599&isnumber=6681559")])])]),n("p",[n("a",{attrs:{name:"ref_cach16"}},[e._v("[CHAC16]")]),e._v(": Cachin, Christian: Architecture of the Hyperledger Blockchain Fabric. Workshop on Distributed Cryptocurrencies and Consensus Ledgers, 2016")]),n("p",[n("a",{attrs:{name:"ref_fabr18"}},[e._v("[FABR18]")]),e._v(": Fabric Documentation. URL: "),n("a",[n("a",{attrs:{href:"http://hyperledger-fabric.readthedocs.io/en/release-1.1/peers/peers.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://hyperledger-fabric.readthedocs.io/en/release-1.1/peers/peers.html")])])]),n("p",[e._v("[NAKA08] Nakamoto, S., Bitcoin: A peer-to-peer electronic cash system., 2008")]),n("p",[n("a",{attrs:{name:"ref_owen17"}},[e._v("[OWEN17]")]),e._v(": Owens, Luke: Cryptoasset Framework on Intel's Hyperledger Sawtooth. URL: "),n("a",[n("a",{attrs:{href:"https://fullmetalhealth.com/cryptoasset-framework-intels-hyperledger-sawtooth-part-one/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://fullmetalhealth.com/cryptoasset-framework-intels-hyperledger-sawtooth-part-one/")])])])])}],i=t(0),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.default=a.exports}}]);