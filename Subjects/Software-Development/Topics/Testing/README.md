# Testimine tarkvaraarenduses

- [Testimine tarkvaraarenduses](#testimine-tarkvaraarenduses)
  - [Õpitulemused:](#õpitulemused)
  - [Testimise tähtsus:](#testimise-tähtsus)
  - [Testimise tüübid:](#testimise-tüübid)
  - [Testimise lähenemised:](#testimise-lähenemised)
  - [Testimise meetodid:](#testimise-meetodid)
  - [Tarkvaraarenduse elutsükkel (SDLC) ja testimine:](#tarkvaraarenduse-elutsükkel-sdlc-ja-testimine)
  - [Populaarsed testimise tööriistad:](#populaarsed-testimise-tööriistad)
  - [Harjutused ja ülesanded](#harjutused-ja-ülesanded)

## Õpitulemused:

Pärast selle teema läbimist suudate:

- mõista testimise tähtsust tarkvaraarenduses;
- tuvastada erinevaid testimise tüüpe;
- kirjeldada erinevaid testimise lähenemisi ja meetodeid;
- rakendada testimise põhimõtteid tarkvaraarenduses.

Tarkvaraarenduses viitab testimine protsessile, kus programm või rakendus käivitatakse eesmärgiga leida tarkvaravead. See tagab, et tarkvaratoode vastab määratud nõuetele ja pakub lõppkasutajale kvaliteetset toodet.

## Testimise tähtsus:

- **Kvaliteedi tagamine:** Tagab, et toode vastab soovitud kvaliteedistandarditele ja on vigadest vaba.
- **Kuluefektiivsus:** Probleemide varajane tuvastamine ja parandamine arendustsükli varases etapis võib pikemas perspektiivis säästa raha.
- **Turvalisus:** Aitab tuvastada tarkvara haavatavusi ja nõrkusi.
- **Kasutajate rahulolu:** Tagab, et toode vastab kasutaja nõuetele ja seda saab tõhusalt kasutada.
- **Usaldusväärsus ja sooritusvõime:** Tagab, et tarkvara toimib koormuse all optimaalselt ja on erinevates tingimustes usaldusväärne.

## Testimise tüübid:

- **Üksustestimine:** Tarkvara üksikute üksuste või komponentide testimine.

- **Integratsioonitestimine:** Testitakse integreeritud üksuste vahelisi interaktsioone, et toota väljundeid.

- **Funktsionaalne testimine:** Tarkvara testitakse, et tagada see käitub vastavalt määratud nõuetele.

- **Süsteemitestimine:** Tarkvara testitakse kui tervikut, et tagada selle toimimine ettenähtud viisil.

- **Lõpp-lõpu testimine:** Testitakse rakenduse voogu, et tagada kasutaja sisendi ja väljundi sujuv töö.

- **Regressioonitestimine:** Tagatakse, et uued koodimuudatused ei ole negatiivselt mõjutanud olemasolevaid funktsioone.

- **Aktsepteerimistestimine:** Tagatakse, et tarkvara vastab aktsepteerimiskriteeriumidele enne kliendile tarnimist.

- **Sooritusvõime testimine:** Hinnatakse tarkvara sooritusvõimet, kiirust ja reageerimisaega. Alamliigid hõlmavad koormustestimist, stressitestimist ja mahutestimist.

- **Kasutatavuse testimine:** Hinnatakse tarkvara lõppkasutaja vaatepunktist, et tagada selle kasutajasõbralikkus.

- **Turvalisuse testimine:** Tuuakse välja haavatav

used, ohud ja riskid tarkvararakenduses.

- **Ühilduvuse testimine:** Tagatakse, et tarkvara on ühilduv erinevate seadmete, brauserite ja operatsioonisüsteemidega.

- **Uurimuslik testimine:** Struktureerimata lähenemine, kus testijad aktiivselt uurivad rakendust, et leida defekte.

## Testimise lähenemised:

- **Käsitsi testimine:** Testijad täidavad testijuhtumeid käsitsi ilma tööriistade abita. See on käsitöö ja testija peab olema tähelepanelik vaatleja.

- **Automaattestimine:** Testijuhtumeid täidetakse tööriistade, skriptide ja tarkvara abil. See lähenemine on kasulik regressioonitestimisel, koormustestimisel ja korduvatel ülesannetel.

## Testimise meetodid:

- **Valgekasti testimine (või Läbipaistva kasti testimine):** Testimine põhineb tarkvara sisemisel koodil, kujundusel ja struktuuril. See nõuab koodi tundmist.

- **Mustakasti testimine:** Testimine põhineb tarkvara nõuetel ja funktsionaalsusel, ilma sisemise tööpõhimõtte teadmata.

- **Hallikasti testimine:** Valge- ja mustakasti testimise kombinatsioon.

## Tarkvaraarenduse elutsükkel (SDLC) ja testimine:

- **Vesiputou mudel:** Testimine algab alles pärast arenduse lõpetamist.

- **Agile mudel:** Testimine toimub arendusega paralleelselt ja on iteratiivne.

- **V-mudel (Validatsioon ja Verifikatsioon):** Arendus ja testimine toimuvad paralleelselt, iga arendusetapi jaoks on vastav testimisetapp.

## Populaarsed testimise tööriistad:

- **JUnit:** Laialdaselt kasutatav testimise tööriist Java jaoks.

- **Selenium:** Võimas tööriist veebibrauseri juhtimiseks programmide kaudu.

- **QTP (Quick Test Professional):** Automaatne funktsionaalne testimise tööriist.

- **LoadRunner:** Sooritusvõime testimise tööriist.

- **TestNG:** JUnitist inspireeritud ja loodud testimise konfiguratsiooniks ja paralleelseks täitmiseks.

- **NUnit:** .NET keelte üksustestimise raamistik.

Kokkuvõttes on testimine tarkvaraarenduse lahutamatu osa, mis tagab tugeva, kvaliteetse toote tarnimise. See tuvastab ja parandab vead, haavatavused ja puudused varases staadiumis, tagades, et tarkvara vastab kasutaja ootustele ja tööstusstandarditele. Nõuetekohane testimine toob kaasa usaldusväärse tarkvara, minimeerib riske ja suurendab kasutajate rahulolu.

## Harjutused ja ülesanded