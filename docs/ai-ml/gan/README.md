# Generative Adversarial Nets (GAN)
Die von Ian Goodfellow et al. 2014 vorgestellten Generative Adversarial Nets <a>[[GOOD14]](#ref_good14)</a> stellen eine neuere Entwicklung im Bereich _deep learning_ dar.

Sie bestehen aus zwei getrennten neuralen Netzwerken: einem generativem und einem diskriminativem Netzwerk. 

In einem beliebten Beispiel würde ein _discriminator_ Netzwerk versuchen echte Werke eines Kunstmalers, von Fälschungen zu unterscheiden. Das _generator_ Netzwerk, dass die Eingabedaten für den _discriminator_ liefert, würde wiederum versuchen immer bessere Fälschungen zu erzeugen. Aus dem Zusammenspiel der beiden Netzwerke, lernt das _discriminator_ Netzwerk immer besser zwischen Echtheit und Fälschung zu unterscheiden, während das _generator_ Netzwerk immer bessere Fälschungen konstruiert.

Anwendung findet dieser Ansatz vorallem wenn nicht genügend Trainingsdaten vorhanden sind bzw. sich durch eine Vervielfachung bedeutend stabilere Modelle trainieren lassen.  Der Erfolg von _Deep Learning_ beruht auf einer enorm großen Anzahl an Daten um generalisieren zu können. Ein generatives Netz kann aus einem bestehenden Trainingsdatensatz eine vielfache Anzahl an neuen Daten erzeugen. (_augmentation_)



# Quellen:

<a name="ref_good14">[GOOD14]</a>: Goodfellow, I., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., & Bengio, Y. (2014). Generative adversarial nets. URL: http://papers.nips.cc/paper/5423-generative-adversarial-nets.pdf

<a name="ref_LEDI17">[LEDI17]</a>: Ledig, C., Theis, L., Huszár, F., Caballero, J., Cunningham, A., Acosta, A., ... & Shi, W. (2017). Photo-realistic single image super-resolution using a generative adversarial network. arXiv preprint. URL: http://openaccess.thecvf.com/content_cvpr_2017/papers/Ledig_Photo-Realistic_Single_Image_CVPR_2017_paper.pdf



