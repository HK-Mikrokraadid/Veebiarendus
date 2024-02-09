# Tarkvara ja tarkvaraarendus

Selles teemas uurime tarkvara ja tarkvaraarenduse kontseptsioone.

![Tarkvaraarendus](Software-Development.webp)

Pildi allikas: Dall-E by OpenAI

- [Tarkvara ja tarkvaraarendus](#tarkvara-ja-tarkvaraarendus)
  - [Õpiväljundid](#õpitulemused)
  - [Mis on tarkvara?](#mis-on-tarkvara)
  - [Avaliku lähtekoodiga tarkvara vs suletud lähtekoodiga tarkvara](#avaliku-lähtekoodiga-tarkvara-vs-suletud-lähtekoodiga-tarkvara)
  - [Kust tuleb tarkvara?](#kust-tuleb-tarkvara)
  - [Mis on tarkvaraarendus?](#mis-on-tarkvaraarendus)
  - [Harjutused](#harjutused)

## Õpiväljundid

Selle teema lõpuks peaksid oskama:
- määratleda, mis on tarkvara;
- kirjeldada erinevaid tarkvara tüüpe;
- selgitada erinevust avaliku lähtekoodiga ja suletud lähtekoodiga tarkvara vahel;
- selgitada tarkvaraarenduse olemust.

## Mis on tarkvara?

Tarkvara on juhiste või programmide kogum, mis on loodud arvutisüsteemis konkreetsete ülesannete või funktsioonide täitmiseks. See on programmide, andmete ja juhiste kogum, mis ütleb arvutile, mida ja kuidas teha. See võib olla programm, rakendus või süsteem. Tarkvara muudab arvutid tavainimesele kasutatavaks ja ilma tarkvarata ei saaks arvutid teha midagi kasulikku.

Tarkvara saab klassifitseerida kahte põhikategooriasse:

- **Süsteemitarkvara:** Süsteemitarkvara on tarkvara, mis juhib ja haldab arvutisüsteemi riistvarakomponente. See hõlmab operatsioonisüsteeme, seadmedraivereid, utiliite ja muid tööriistu, mis aitavad hallata arvutisüsteemi. Süsteemitarkvara on arvuti nõuetekohaseks toimimiseks hädavajalik. Süsteemitarkvara näited on:

- **Windows**
- **macOS**
- **Linux**
- **Android**
- **iOS**.

- **Rakendustarkvara:** Rakendustarkvara on tarkvara, mis täidab konkreetset ülesannet või ülesannete kogumit. See hõlmab programme nagu tekstitöötlusprogrammid, tabelarvutusprogrammid, veebilehitsejad, mängud jne. Rakendustarkvara on see, millele enamik inimesi mõtleb, kui nad mõtlevad tarkvarale. Rakendustarkvara näited on:
- **Microsoft Word**
- **Google Chrome**
- **Adobe Photoshop**
- **Minecraft**.

Samuti võib rakendustarkvaraks lugeda erinevad veebirakendused, mobiilirakendused ja muud spetsiifilised tarkvaralahendused, mis on loodud konkreetsete ülesannete täitmiseks.

## Avaliku lähtekoodiga tarkvara vs suletud lähtekoodiga tarkvara

Tarkvara saab samuti klassifitseerida avaliku lähtekoodiga või suletud lähtekoodiga tarkvaraks. Avaliku lähtekoodiga tarkvara on tarkvara, mis on vabalt kättesaadav ning mida võib (üldjuhul) muuta ja levitada igaüks. Suletud lähtekoodiga on tarkvara, mis kuulub ettevõttele või isikule ja mida ei saa ilma loata kasutada, muuta ega levitada.

Avaliku lähtekoodiga tarkvara näited on **Linux**, **Firefox** ja **WordPress**. Suletud lähtekoodiga näited on **Microsoft Windows**, **Adobe Photoshop** ja **Apple iOS**.

|                         | Avaliku lähtekoodiga tarkvara                                   | Suletud lähtekoodiga (Omandvara) |
|-------------------------|----------------------------------------------------------------|----------------|
| Kättesaadavus           | Kõigile kättesaadav, selle lähtekood on vabalt vaadatav, muudetav ja levitatav | Kättesaadav ainult neile, kes on ostnud litsentsi või kellel on omanikult luba seda kasutada |
| Litsentsimine           | Tavaliselt litsentseeritud avaliku lähtekoodiga litsentside alusel, mis lubavad kõigil tarkvara kasutada, muuta ja levitada, kui nad järgivad litsentsi tingimusi | Tavaliselt litsentseeritud omandilitsentside alusel, mis piiravad tarkvara kasutamist, muutmist ja levitamist |
| Arendus                 | Sageli arendatud koostöös, kaasates arendajate kogukondi | Tavaliselt arendatud ühe ettevõtte või arendajate rühma poolt |
| Maksumus                | Sageli tasuta saadaval, kuigi mõned ettevõtted/arendajad võivad küsida tasu toe või lisateenuste eest | Tavaliselt nõutakse litsentsitasu või ostuhinda |
| Tugi                    | Sageli toetub arendajate kogukonnale, kuigi mõned ettevõtted/arendajad võivad pakkuda ka tasulist toe teenust | Tavaliselt pakutakse tasuta või tasu eest otse tarkvara omaniku poolt |
| Kohandamine             | Avaliku lähtekoodiga tarkvara pakub suuremat paindlikkust kohandamisel, kuna kasutajad saavad lähtekoodi oma vajadustele vastavalt muuta | Omandvara võib pakkuda piiratud kohandamisvõimalusi |

Kokkuvõttes on nii avaliku lähtekoodiga kui ka omandvaral oma eelised ja puudused. Avaliku lähtekoodiga tarkvara on sageli tasuta ja pakub suuremat kohandamisvõimalust, kuid see ei pruugi olla nii usaldusväärne või turvaline kui omandvara. Suletud lähtekoodiga on sageli usaldusväärsem ja turvalisem, kuid see ei pruugi olla nii paindlik või kohandatav kui avaliku lähtekoodiga tarkvara.

## Kust tuleb tarkvara?

Tarkvara loovad tarkvaraarendajad. Tarkvaraarendajad on inimesed, kes kirjutavad koodi tarkvara loomiseks. Neid tuntakse ka kui programmeerijaid või kodeerijaid. Tarkvaraarendajad kasutavad koodi kirjutamiseks programmeerimiskeeli. Programmeerimiskeeled on formaalsed keeled, mida saab tõlkida masinkoodiks (st binaarkoodiks) ja mida arvuti saab täita.

Olemas on palju erinevaid programmeerimiskeeli ja igaühel on oma tugevused ja nõrkused. Mõnda neist peetakse teistest lihtsamaks õppida, samas kui mõned on võimsamad ja paindlikumad. Mõned populaarsemad programmeerimiskeeled on:

- **JavaScript**
- **Python**
- **C#**
- **Java**
- **C**
- **C++**
- jne

On oluline märkida, et programmeerimiskeele valik ei ole alati isikliku eelistuse küsimus. Mõned programmeerimiskeeled sobivad teatud ülesannete jaoks paremini kui teised. Näiteks **JavaScript** on populaarne programmeerimiskeel veebiarenduseks, samas kui **Python** on populaarne programmeerimiskeel andmeteaduse ja masinõppe jaoks. See võib sõltuda ka riistvara tüübist (üldotstarbeline laua- või sülearvuti, spetsiifiline server, mängukonsol, mikrokontroller vms) või operatsioonisüsteemist, millel tarkvara töötab.

## Mis on tarkvaraarendus?

Kõigepealt on oluline ära märkida, et tarkvaraarendus ei võrdu programmeerimine. Kuigi tarkvaraarendus hõlmab koodi kirjutamist, on see palju enamat kui lihtsalt koodi kirjutamine.

Tarkvaraarendus on tarkvara loomise protsess. See hõlmab:

- kasutajavajaduste analüüsimist;
- tarkvaralahenduste kavandamist;
- koodi kirjutamist;
- tarkvara testimist;
- tarkvara juurutamist
- jne
  
Tarkvaraarendus on keeruline protsess, mis nõuab palju planeerimist ja koordineerimist. See toimub tavaliselt tarkvaraarendajate meeskonna poolt, kus igal liikmel on oma roll.

> Selles aines keskendume tarkvaraarenduse põhitõdedele, sealhulgas tarkvaraarenduse elutsüklile, nõuete kogumisele ja analüüsile.

## Harjutused

- Arutelu tarkvara ja tarkvaraarenduse üle.
- Kirjelda oma sõnadega, mis on tarkvara.
- Kirjelda oma sõnadega, mis on tarkvaraarendus.
- Arutelu avaliku lähtekoodiga ja omandvara üle.
