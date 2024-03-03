# Dokumentatsioon tarkvaraarenduses

Selles teemas õpime tarkvaraarenduse dokumentatsiooni tähtsuse, erinevate dokumentatsiooni tüüpide ning dokumentatsiooni koostamiseks kasutatavate tööriistade kohta.

![Dokumentatsioon](Documentation.webp)

Pildi allikas: Dall-E by OpenAI

- [Dokumentatsioon tarkvaraarenduses](#dokumentatsioon-tarkvaraarenduses)
  - [Õpiväljundid](#õpiväljundid)
  - [Dokumentatsiooni tähtsus](#dokumentatsiooni-tähtsus)
  - [Dokumentatsiooni tüübid](#dokumentatsiooni-tüübid)
  - [Dokumentatsiooni koostamise tööriistad](#dokumentatsiooni-koostamise-tööriistad)
  - [Tarkvaraarenduse dokumentatsiooni loomine](#tarkvaraarenduse-dokumentatsiooni-loomine)
  - [Harjutused](#harjutused)

Tarkvaraarenduses viitab dokumentatsioon kirjalikele materjalidele, mis kirjeldavad tarkvaralahenduse funktsioone, arhitektuuri, disaini või kasutamist. See hõlmab kõiki andmeid, mida on vaja tarkvara mõistmiseks, sellega suhtlemiseks ja selle hooldamiseks.

## Õpiväljundid

Pärast selle teema läbimist oskate:

- mõista dokumentatsiooni tähtsust tarkvaraarenduses;
- tuvastada erinevaid dokumentatsiooni tüüpe;
- kirjeldada erinevaid dokumentatsiooni koostamiseks kasutatavaid tööriistu;
- koostada dokumentatsiooni tarkvaraprojektile.

## Dokumentatsiooni tähtsus

- **Teadmiste säilitamine:** Tagab, et tarkvara kohta käivad teadmised ei kao, eriti kui meeskonnaliikmed vahetuvad või kui möödub oluline aeg.
- **Kasutusmugavus:** Nõuetekohane dokumentatsioon, eriti kasutusjuhendid või API viited, aitavad kasutajatel ja arendajatel tarkvara tõhusalt mõista ja kasutada.
- **Järjepidevus:** Pakub järjepidevat juhendit, millele arendajad saavad viidata, tagades järjepidevad arendustavad ja arusaamise.
- **Probleemide diagnoosimine:** Kui tekivad probleemid, võib hästi hooldatud dokumentatsioon kiirendada tõrkeotsingu protsessi.
- **Tööle võtmine:** Uued meeskonnaliikmed saavad tarkvara arhitektuuri, koodibaasi ja funktsionaalsuse kiiremini mõista hea dokumentatsiooni abil.
- **Regulatiivne vastavus:** Teatud sektorites, nagu finants- või tervishoid, on nõuetekohane dokumentatsioon kohustuslik, et tagada seaduste ja määrustega vastavus.

## Dokumentatsiooni tüübid

- **Nõuete dokumentatsioon:** Määratleb, mida tarkvara peaks tegema. See võib sisaldada kasutajalugusid, kasutusjuhte või formaalsemat nõuete loetelu.
- **Tehniline dokumentatsioon:** On mõeldud arendajatele ja sisaldab koodikommentaare, API dokumentatsiooni ja arhitektuurikavandeid.
- **Kasutusjuhend:** On suunatud lõppkasutajatele ja juhendab neid tarkvara funktsioonide ja võimalustega. Näiteks kasutusjuhendid, abi juhendid ja KKK-d (Korduma Kippuvad Küsimused).
- **Arhitektuuri- ja disainidokumentatsioon:** Annab tarkvarast kõrgetasemelise vaate, selle komponentidest ja nende vastastikusest mõjust.
- **Testimisdokumentatsioon:** Sisaldab testiplaane, testijuhtumeid ja muid dokumente, mis käivad testimise kohta.
- **Hooldus- ja abijuhendid:** Aitavad diagnoosida, tõrkeotsingut teha ja lahendada probleeme.
- **Protsessi dokumentatsioon:** Täpsustab arenduse käigus järgitavaid protsesse ja standardeid.
- **Toote dokumentatsioon:** Spetsifikatsioonid, tingimused ja muud tarkvaratoote üksikasjad.
- **Rakendusliidese (API - Application Programming Interface) dokumentatsioon:** Juhised selle kohta, kuidas API-t tõhusalt kasutada ja integreerida.

## Dokumentatsiooni koostamise tööriistad

- **Wiki tööriistad:** Platvormid nagu **Confluence** või **MediaWiki** on tavaliselt kasutusel meeskonnatöö ja dokumentatsiooni jaoks.
- **API dokumentatsiooni tööriistad:** Tööriistad nagu **Swagger** (RESTful API-de jaoks), **Doxygen** ja **JSDoc** võivad genereerida dokumentatsiooni automaatselt, lähtudes koodikommentaaridest.
- **Koodikommentaarid:** Programmeerimiskeelte sisseehitatud dokumentatsioonitööriistad, näiteks **JavaDoc** Java jaoks või **PyDoc** Pythoni jaoks.
- **Dokumentatsiooni generaatorid:** Näiteks **Sphinx** (sageli kasutusel Pythoni projektides), **MkDocs** ja **Read the Docs**.
- **Versioonikontrolli platvormid:** Platvormid nagu **GitHub** või **GitLab** pakuvad sageli funktsioone dokumentatsiooni loomiseks ja majutamiseks.
- **Diagrammitööriistad:** **Lucidchart**, **Draw.io** ja **Microsoft Visio** voolujooniste, ER diagrammide ja muude visuaalsete esituste loomiseks.
- **Tehnilise kirjutamise platvormid:** Tööriistad nagu **MadCap Flare** või **Adobe FrameMaker** on kohandatud tehnilise dokumentatsiooni jaoks.
- **Märkmete tegemise rakendused:** **Notion**, **OneNote** ja **Evernote** võib kasutada kerge dokumentatsiooni ja märkmete tegemiseks.

## Tarkvaraarenduse dokumentatsiooni loomine

Tarkvaraarenduse dokumentatsiooni koostamine võib olla üsna keeruline protsess, kuna olenevalt projekti vajadustest võib olla vaja koostada palju erinevat tüüpi dokumentatsiooni. Siin on aga mõned üldised sammud, mida saab tõhusa tarkvaraarenduse dokumentatsiooni loomiseks järgida:

- **Tehke kindlaks dokumentatsiooni eesmärk ja ulatus.** Enne dokumentatsiooni loomise alustamist on oluline kindlaks teha, millist tüüpi dokumentatsiooni on vaja, kes on sihtrühm ja millised on dokumentatsiooni eesmärgid.
- **Dokumentatsiooni kavandamine:** see samm hõlmab dokumentatsiooni struktuuri, vormingu ja sisu määratlemist. Peaksite kaaluma dokumentatsiooni (nt tekst, diagrammid või videod) parimat vormingut ja otsustama, milline sisu tuleb kaasata.
- **Kirjutage dokumentatsioon:** kui planeerimine on lõpetatud, võite alustada dokumentatsiooni kirjutamist. Kasutage selget ja ülevaatlikku keelt ning veenduge, et dokumentatsioon oleks kergesti loetav ja arusaadav. Peaksite lisama ka kõik asjakohased diagrammid, pildid ja viited, mis aitavad sisu selgitada.
- **Dokumentatsiooni testimine ja ülevaatamine:** oluline on dokumentatsiooni testida, et olla kindel, et see on täpne ja hõlpsasti jälgitav. See võib hõlmata seda, et teised arendajad, sidusrühmad või lõppkasutajad vaatavad tagasiside andmiseks dokumentatsiooni üle.
- **Dokumentatsiooni värskendamine ja hooldamine:** Tarkvaraarendus on pidev protsess, mistõttu on oluline dokumentatsiooni projekti edenedes uuendada ja säilitada. See võib hõlmata uue teabe lisamist, olemasoleva teabe värskendamist ja aegunud teabe eemaldamist.

Mõned näpunäited tõhusa tarkvaraarenduse dokumentatsiooni koostamiseks on järgmised:

- Kasutage kogu dokumentatsioonis ühtset vormingut ja stiili
- Keeruliste mõistete selgitamiseks kasutage diagramme ja pilte
- Hoidke dokumentatsioon ajakohasena
- Kasutage selget ja kokkuvõtlikku keelt
- Kaaluge sihtrühma vajadusi ja vaatenurki

Üldiselt nõuab tõhusa tarkvaraarenduse dokumentatsiooni loomine hoolikat planeerimist, kirjutamist, testimist ja hooldust. Järgides neid samme ja parimaid tavasid, saate luua dokumentatsiooni, mis aitab tagada teie tarkvaraprojekti edu.

Kokkuvõttes on dokumentatsioon tarkvaraarenduse oluline aspekt, mis tagab selguse, järjepidevuse ja sujuva toimimise tarkvara elutsükli erinevatel etappidel. Nõuetekohane dokumentatsioon vähendab uute meeskonnaliikmete õpikõverat, aitab tõrkeotsingul ja parandab üldist tarkvara kvaliteeti ning kasutajakogemust.

## Harjutused

Mõelge selle tunni materjali peale ja vastake järgmistele küsimustele:

- Millist dokumentatsiooni olete varem kasutanud. Mis see oli? Kuidas see teid aitas?
- Kui tihti loete dokumentatsiooni? Mis on kõige tavalisemad põhjused, miks te dokumentatsiooni loete?
- Mida te arvate - kui oluline on dokumentatsioon tarkvaraarenduses? Miks?
- Kui Su repositooriumis veel ei ole, siis loo selle juurkausta `README.md` fail, mis sisaldab:
  - Lühikest kirjeldust selle kohta, mis repositooriumiga on tegemist
  - Viiteid koduste ülesannete lahenduste juurde
