# Testimine Tarkvaraarenduses

Testimine on oluline osa tarkvaraarendusprotsessist, mille eesmärk on tagada, et tarkvara töötab ootuspäraselt ja vastab kõigile nõuetele ja kvaliteedistandarditele. Testimise abil tuvastatakse vead, vead ja puudujäägid enne tarkvara väljalaset, mis aitab vältida tõrkeid tootmises ja parandada kasutajakogemust.

![Testimine](testing.png)

[Pildi allikas](https://twitter.com/brenankeller/status/1068615953989087232)

- [Testimine Tarkvaraarenduses](#testimine-tarkvaraarenduses)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Testimine?](#mis-on-testimine)
  - [Testimise Olulisus](#testimise-olulisus)
  - [Testimise Liigid](#testimise-liigid)
    - [1. Ühiktestimine (Unit Testing)](#1-ühiktestimine-unit-testing)
    - [2. Integratsioonitestimine (Integration Testing)](#2-integratsioonitestimine-integration-testing)
    - [3. Süsteemitestimine (System Testing)](#3-süsteemitestimine-system-testing)
    - [4. Vastuvõtutestimine (Acceptance Testing)](#4-vastuvõtutestimine-acceptance-testing)
    - [5. Funktsionaalne testimine (Functional Testing)](#5-funktsionaalne-testimine-functional-testing)
    - [6. Mittefunktsionaalne testimine (Non-Functional Testing)](#6-mittefunktsionaalne-testimine-non-functional-testing)
    - [7. Regressioonitestimine (Regression Testing)](#7-regressioonitestimine-regression-testing)
    - [8. Suitsutestimine (Smoke Testing)](#8-suitsutestimine-smoke-testing)
    - [9. UAT (User Acceptance Testing)](#9-uat-user-acceptance-testing)
  - [Testimise Meetodid](#testimise-meetodid)
    - [1. Käsitsi Testimine](#1-käsitsi-testimine)
    - [2. Automaatne Testimine](#2-automaatne-testimine)
  - [Testimise Protsess](#testimise-protsess)
  - [Node.js testiraamistikud](#nodejs-testiraamistikud)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on testimine ja miks see on oluline;
- loetlema erinevaid testimise liike tarkvaraarenduses;
- mõistma erinevate testimismeetodite ja -tüüpide eesmärke ja rakendusvaldkondi.

## Mis on Testimine?

Testimine on protsess, mille käigus hinnatakse tarkvara kvaliteeti, kontrollides selle funktsionaalsust, jõudlust ja turvalisust. Testimise eesmärk on leida vead ja puudused ning kinnitada, et tarkvara töötab ootuspäraselt ja vastab määratletud nõuetele.

## Testimise Olulisus

- **Kvaliteedi tagamine:** Testimine aitab tagada, et tarkvara vastab kvaliteedistandarditele ja kliendi ootustele.
- **Vigade tuvastamine:** Testimine aitab avastada ja parandada vead varajases arendusfaasis, vähendades paranduskulusid ja -aega.
- **Kasutajakogemuse parandamine:** Hea testimine tagab sujuva ja tõrgeteta kasutajakogemuse.
- **Tarkvara usaldusväärsuse tagamine:** Testimine aitab vältida tarkvara kokkujooksmisi ja muid tõrkeid tootmiskeskkonnas.

## Testimise Liigid

Tarkvaraarenduses on mitmesuguseid testimise liike, mida saab liigitada erinevate kriteeriumide alusel. Allpool on loetelu peamistest testimise liikidest.

### 1. Ühiktestimine (Unit Testing)

Ühiktestimine keskendub väikseimate tarkvara komponentide, nagu funktsioonide või klasside, testimisele eraldi. Ühiktestimine aitab tagada, et iga üksik komponent töötab ootuspäraselt.

- **Näide:** Testida funktsiooni, mis arvutab kahe arvu summa.

### 2. Integratsioonitestimine (Integration Testing)

Integratsioonitestimine keskendub erinevate tarkvara komponentide või moodulite koostöö testimisele. Selle eesmärk on tagada, et integreeritud komponendid töötavad koos ootuspäraselt.

- **Näide:** Testida, kas andmebaasi päring töötab koos API-ga.

### 3. Süsteemitestimine (System Testing)

Süsteemitestimine keskendub kogu tarkvarasüsteemi testimisele tervikuna. See hõlmab kõigi süsteemi komponentide ja funktsioonide testimist, et tagada tarkvara vastavus määratletud nõuetele.

- **Näide:** Testida, kas veebirakenduse kõik funktsioonid töötavad koos.

### 4. Vastuvõtutestimine (Acceptance Testing)

Vastuvõtutestimine keskendub tarkvara valideerimisele lõppkasutaja või kliendi poolt. Selle eesmärk on tagada, et tarkvara vastab kliendi ootustele ja nõuetele.

- **Näide:** Testida, kas e-poe süsteem vastab kliendi määratud nõuetele ja äriprotsessidele.

### 5. Funktsionaalne testimine (Functional Testing)

Funktsionaalne testimine keskendub tarkvara funktsionaalsuse testimisele määratletud nõuete alusel. See hõlmab tarkvara funktsioonide ja käitumise testimist.

- **Näide:** Testida, kas kasutaja saab edukalt sisse logida ja tooteid lisada ostukorvi.

### 6. Mittefunktsionaalne testimine (Non-Functional Testing)

Mittefunktsionaalne testimine keskendub tarkvara kvaliteediatribuutide testimisele, nagu jõudlus, turvalisus, kasutatavus ja töökindlus.

- **Näide:** Testida, kui palju kasutajaid veebisait suudab korraga teenindada (jõudlustestimine).

### 7. Regressioonitestimine (Regression Testing)

Regressioonitestimine keskendub tarkvara uuenduste ja muudatuste järel võimalike vigade tuvastamisele. Selle eesmärk on tagada, et uued muudatused ei rikuks olemasolevat funktsionaalsust.

- **Näide:** Testida, kas pärast uue funktsiooni lisamist toimivad kõik olemasolevad funktsioonid endiselt ootuspäraselt.

### 8. Suitsutestimine (Smoke Testing)

Suitsutestimine on kiire test, mis keskendub tarkvara põhifunktsioonide kontrollimisele. Selle eesmärk on tagada, et tarkvara põhiline funktsionaalsus töötab enne põhjalikumat testimist.

- **Näide:** Testida, kas rakendus käivitub ja põhifunktsioonid töötavad pärast uue versiooni paigaldamist.

### 9. UAT (User Acceptance Testing)

Kasutaja aktsepteerimise testimine on lõplik test, mida tehakse lõppkasutaja poolt, et kinnitada, et tarkvara vastab nende nõuetele ja on kasutusvalmis.

- **Näide:** Kliendi poolt läbiviidud testimine, et kinnitada uue süsteemi vastavus nende vajadustele enne süsteemi lõplikku vastuvõtmist.

## Testimise Meetodid

### 1. Käsitsi Testimine

Käsitsi testimine on protsess, kus testija sooritab testjuhtumid käsitsi ilma automatiseerimiseta. Käsitsi testimine on kasulik keerukate ja dünaamiliste kasutajaliideste testimiseks, kuid see võib olla aeganõudev ja vigadele vastuvõtlik.

### 2. Automaatne Testimine

Automaatne testimine hõlmab testide automatiseerimist, kasutades spetsiaalseid tööriistu ja skripte. Automaatne testimine on efektiivne korduvate ja mahukate testide jaoks ning aitab vähendada testimise aega ja vigu.

- **Näited tööriistadest:** Selenium, JUnit, TestNG, Cypress, Jest.

## Testimise Protsess

Testimise protsess sisaldab mitmeid etappe, mis tagavad süstemaatilise ja põhjaliku testimise.

1. **Testi planeerimine:** Määratletakse testimise eesmärgid, ulatus ja strateegia.
2. **Testi disain:** Luuakse testjuhtumid ja -stsenaariumid, mis katavad kõik määratletud nõuded.
3. **Testi teostamine:** Teostatakse testid ja registreeritakse tulemused.
4. **Vigade aruandlus:** Tehakse kindlaks ja dokumenteeritakse vead ja puudujäägid.
5. **Vigade parandus ja uuesti testimine:** Parandatakse vead ja teostatakse uuesti testimine, et kinnitada paranduste efektiivsust.
6. **Testimise lõpetamine:** Analüüsitakse testitulemusi ja koostakse lõpparuanded.

Selle kursuse raames räägime põhiliselt enpointide testimisest, mis sisaldab suures plaanis kahte erinevat testimise tüüpi:

- Turvalisuse testimist - kas kasutaja saab/ei saa ligi mingitele endpointidele, millele on tal luba/ei ole ligipääsuks
- Funktsionaalsuse testimist - kas endpoindid töötavad nii, nagu me eeldame (tagastavad andmeid kujul, mida ootame, tagastavad HTTP vastuskoodid kujul mida ootame, veateated jne.)

## Node.js testiraamistikud

Node.js keskkonnas on mitmeid erinevaid testiraamistikke. Kõige levinumad on:

- [Mocha](../mocha/README.md)
- [Jest](https://jestjs.io/)
- [Supertest](../supertest/README.md)
- [Chai](../chai/README.md)
