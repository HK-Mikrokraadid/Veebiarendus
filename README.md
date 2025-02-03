# Veebiarenduse mikrokraadid

![logo](https://www.tlu.ee/sites/default/files/Haapsalu%20kolled%C5%BE/Logo/HaapsaluK_est.png)

See repositoorium sisaldab järgmiseid Veebiarenduse mikrokraade:

- [Front-End arendus](./FE)
- [Back-End arendus](./BE)

Repositooriumi ülesehitus on järgmine:

- [`Subjects`](./Subjects/) kaust sisaldab kõikide õppeainete õppematerjale
- [`Lessons`](./Lessons/) kaust sisaldab loengute nimekirja, slaide ja viiteid õppematerjalidele
  - [`Common-Lessons`](./Lessons/Common-Lessons/) kaust sisaldab ühiseid loenguid (tarkvaraarendus, programmeerimise alused)
  - [`Front-End`](./Lessons/Front-End/) kaust sisaldab Front-End arenduse loenguid
  - [`Back-End`](./Lessons/Back-End/) kaust sisaldab Back-End arenduse loenguid
- [`Subjects`](./Subjects/) kaustas on iga mikrokraadi õppeained eraldi kaustades õppeainete kaupa
  - Ühised ained
    - [`Software-Development`](./Subjects/Software-Development/) kaust sisaldab tarkvaraarenduse õppeaine materjale
    - [`Programming-Basics`](./Subjects/Programming-Basics/) kaust sisaldab programmeerimise aluste õppeaine materjale
  - Front-End arendus
    - [`Front-End-Technologies`](./Subjects/Front-End-Technologies/) kaust sisaldab Front-End arenduse õppeaine materjale
    - [`Front-End-Frameworks`](./Subjects/Front-End-Frameworks/) kaust sisaldab Front-End raamistike õppeaine materjale
  - Back-End arendus
    - [`Back-End-Technologies`](./Subjects/Back-End-Technologies/) kaust sisaldab Back-End arenduse õppeaine materjale
    - [`Back-End-Frameworks`](./Subjects/Back-End-Frameworks/) kaust sisaldab Back-End raamistike õppeaine materjale
    - [`Databases`](./Subjects/Databases/) kaust sisaldab andmebaaside õppeaine materjale

Mikrokraadid on arendatud välja rahvusvahelise Erasmus projekti `2022-2-EE01-KA220-HED-000100317` raames.

## Õpijuhend

Õppematerjalide läbitöötamine toimub loengute ja iseseisva tööna. Õppematerjalid, slaidid, harjutused ja iseseisvad tööd on saadaval repositooriumis vastavates kaustades.

Õppematerjale tuleks läbida vastavalt loengutele, kus on kirjeldatud teemad, nende järjekord ja viited õppematerjalidele.

Peale loenguid jääb õppijale iseseisev töö, kus tuleb läbi töötada õppematerjalid ja lahendada ülesandeid. Kohtumistel annab õpetaja tagasisidet, vastab küsimustele ja aitab lahendada tekkinud probleeme.

### Dokumentide ja materjalide salvestamine

Õpilased loovad endale [`Github`](Subjects/Software-Development/Topics/Github/README.md)-i konto ja isikliku repositooriumi [`HK-mikrokraadid`](https://github.com/HK-Mikrokraadid) organisatsiooni alla, kuhu salvestavad kõik oma loengutes tehtud tööd, kodused tööd ja muud koolitusega seotud materjalid. Repositooriumid on privaatsed, kuhu pääseb ligi nii õpilane, kui ka õpetaja. Lisaks lisavad õpilased oma repositooriumisse ligipääsu ühele kaasõpilasele, kellega omavahel tehakse koostööd ja antakse tagasisidet.

### Iseseisvad tööd

Enne igat loengut loevad õpilased läbi õppematerjalid vastavalt loengu teemadele. Kes siivib, võib läbi teha ka teemadega seotud harjutused, kuid see pole kohustuslik. Loengus keskendume praktilistele ülesannetele ja küsimustele, mis on seotud õppematerjalidega. Peale iga loengut jääb õpilastele iseseisev töö, kus tuleb lahendada ülesandeid loengu teemadel. Iseseisvad tööd tuleb salvestada õpilase Githubi repositooriumisse vastavalt loengus antud juhistele.

Kodused ülesanded hakkavad tulema iga õpilase repositooriumisse [`Github Issue`](Subjects/Software-Development/Topics/Github-Issue/README.md)-na, kus on täpsemalt kirjeldatud ülesande sisu.

---

## Mikrokraadide Struktuur

```mermaid
flowchart TB
    subgraph BE [Back-End Mikrokraad]
    BEF[Back-End Raamistikud]
    click BEF "https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Back-End-Frameworks/README.md" _blank
    DB[Andmebaasid]
    click DB "https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Databases/README.md" _blank
    end
    subgraph FE [Front-End Mikrokraad]
    FET[Front-End Tehnoloogiad]
    click FET "https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Front-End-Technologies" _blank
    FEF[Front-End Raamistikud]
    click FEF "https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Front-End-Frameworks" _blank
    end
    subgraph CS [Ühised Ained]
    SD[Tarkvaraarendus]
    click SD "https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Software-Development" _blank
    PB[Programmeerimise Alused]
    click PB "https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Programming-Basics" _blank
    end
    CS --> FE
    CS --> BE

```
