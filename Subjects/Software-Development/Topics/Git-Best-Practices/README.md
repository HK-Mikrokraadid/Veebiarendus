# Git ja Github parimad praktikad

Selles teemas õpime tundma parimaid praktikaid Git'i ja GitHub'i kasutamiseks. Uurime Git'i ja GitHub'i parimaid praktikaid ning õpime, kuidas neid tarkvaraarendusprojektis rakendada.

- [Git ja Github parimad praktikad](#git-ja-github-parimad-praktikad)
  - [Õpitulemused](#õpitulemused)
  - [Git'i parimad praktikad:](#giti-parimad-praktikad)
  - [GitHub'i parimad praktikad:](#githubi-parimad-praktikad)
  - [Harjutused](#harjutused)

## Õpitulemused

Pärast selle teema läbimist suudate:

- kirjeldada parimaid praktikaid Git'i ja GitHub'i kasutamiseks;
- rakendada Git'i ja GitHub'i parimaid praktikaid tarkvaraarendusprojektis.

*Git'i* ja *GitHub'i* tõhus kasutamine hõlmab enamat kui ainult käskude ja tööriistade tundmist. Parimate praktikate järgimine tagab, et arendusprotsess on sujuv, projekti ajalugu jääb puhtaks ja meeskonnaliikmete koostöö on tõhus.

Siin on ülevaade parimatest praktikatest nii Git'i kui ka GitHub'i jaoks:

## Git'i parimad praktikad:

1. **Pühenda tihti, tõuka harvem:** 
   - Tee sagedasi, väiksemaid pühendusi, mis hõlmavad ühte loogilist muudatust (nt vea parandamine või funktsiooni lisamine). See muudab ajaloo mõistmise ja probleemide isoleerimise lihtsamaks.
2. **Kirjuta tähendusrikkaid pühendumissõnumeid:** 
   - Alusta lühikese, kirjeldava pealkirjaga. Kui on vaja rohkem detaile, esita põhjalik kirjeldus pärast tühja rida.
3. **Kasuta harusid:**
   - Ära kunagi tööta otse `main` või `master` harul. Kasuta iga uue funktsiooni või veaparanduse jaoks funktsiooniharud.
   - Kustuta harusid pärast nende ühendamist, et hoida hoidla puhas.
4. **Väldi avaldatud ajaloo muutmist:** 
   - Kui pühendused on jagatud harule tõugatud, väldi ajalugu ümberkirjutavate käskude kasutamist (nt `rebase` või `force push`), välja arvatud juhul, kui oled täiesti kindel, mida teed.
5. **Sünkroniseeri regulaarselt:** 
   - Tõmba sageli peahoidlast, et integreerida muudatused ja lahendada konfliktid varakult.
6. **Lahenda konfliktid viivitamatult:** 
   - Käsitle ja lahenda ühendamiskonfliktid kohe, kui need tekivad.
7. **Kasuta `.gitignore`:**
   - Lisa failid, mida ei peaks hoidlas olema (nt ehitusartefaktid, vahemälu, logifailid), `.gitignore` faili.
8. **Varunda:**
   - Kuigi Git on versioonikontrollisüsteem, on hea praktika omada hoidla varukoopiaid, eriti kui majutad seda kohapeal.

## GitHub'i parimad praktikad:

1. **Kasuta kirjeldavaid hoidla nimesid:** 
   - Nimed peaksid andma vihje projekti eesmärgi või sisu kohta.
2. **Lisa `README.md`:**
   - Alati lisa oma hoidlatesse `README.md` fail. See peaks selgitama projekti, kuidas seda seadistada,

 selle sõltuvusi, kuidas kaasa aidata ja muud asjakohast teavet.
3. **Kasuta probleemide ja pull requestide malle:**
   - Mallid juhendavad kaastöötajaid esitama vajaliku teabe, kui luuakse probleeme või PR-e.
4. **Kaitse oma peaharu:** 
   - Kasuta haru kaitse reegleid, et tagada, et `main` või `master` harule ei saaks otseselt tõugata, ja nõua enne ühendamist pull requestide ülevaatamist.
5. **Kasuta silte ja verstaposte:** 
   - Korralda probleemid ja PR-id siltidega (nt `bug`, `enhancement`). Kasuta verstaposte, et grupeerida probleemid ja PR-id funktsiooni, versiooni või ajaraami järgi.
6. **Koodi ülevaatused:**
   - Alati vaadake läbi pull requestid enne ühendamist. See tagab koodi kvaliteedi, järjepidevuse ja et mitu silmapaari on muudatusi kontrollinud.
7. **Kaasa kogukonnaga:**
   - Vasta probleemidele ja PR-idele õigeaegselt. Tänage ja julgustage kaastöötajaid, isegi kui nende panust ei võeta vastu.
8. **Kasuta GitHub Actions:**
   - Automaatige testimise, ehitamise ja juurutamise protsessid GitHub Actionsiga.
9. **Hoidke isikuandmed väljas:**
   - Ärge kunagi salvestage tundlikku teavet nagu paroolid, API võtmed või saladused oma hoidlatesse. Kasutage GitHubi saladuste funktsiooni või välistele tööriistadele nagu keskkonnamuutujad selleks otstarbeks.
10. **Vaadake regulaarselt üle load ja juurdepääs:** 
   - Veenduge, et ainult vajalikel kaastöötajatel oleks juurdepääs teie hoidlale, ja vaadake regulaarselt läbi ning kohandage lubasid.

Nende parimate praktikate järgimine tagab, et teie Git'i ja GitHub'i kasutamine on tõhus, teie projekti ajalugu jääb mõttekaks ja korraldatuks ning koostöö on sujuv ja produktiivne.

## Harjutused

Selleks, et praktiseerida selles teemas õpitut, tehke järgmist:

- Looge kursuse Githubi organisatsioonis uus hoidla.
- Nimetage hoidla oma `Eesnimi-Perekonnanimi` järgi.
- Lisage hoidlasse `README.md` fail.
- Lisage `README.md` faili mõningane kirjeldus enda kohta.
- Looge haru nimega `feature-gitignore`.
- Lisage hoidlasse `.gitignore` fail järgmise sisuga:

```
# Node
node_modules/
```
- Pühendage ja tõugake oma muudatused `feature-gitignore` harusse.
- Looge pull request, et ühendada `feature-gitignore` haru `main` harusse.
- Määrake oma juhendaja pull requesti ülevaatajaks.
- Ühendage pull request pärast juhendaja heakskiitu.