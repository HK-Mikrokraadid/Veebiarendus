![logo](https://www.tlu.ee/sites/default/files/Haapsalu%20kolled%C5%BE/Logo/HaapsaluK_est.png)

# Veebiarenduse mikrokraadid

See repositoorium sisaldab järgmiseid Veebiarenduse mikrokraade:

- [Front-End arendus](./FE)
- [Back-End arendus](./BE)

Mikrokraadid on arendatud välja rahvusvahelise Erasmus projekti raames.

## 2024. aasta pilootprogrammi kuupäevad

### Ühised ained

- [1. kohtumine](./Lessons/Common-Lessons/Lesson-01/README.md) (Haapsalus): 12.02.2024 kell 10:00 - 17:30
- [2. kohtumine](./Lessons/Common-Lessons/Lesson-02/README.md) ([Zoom](https://zoom.us/j/94501316239?pwd=MUE3VGpMcVZOTmU3ZHRQRkFsUFYwQT09)): 19.02.2024 kell 10 - 13:15
- [3. kohtumine](./Lessons/Common-Lessons/Lesson-03/README.md) (Haapsalus): 26.02.2024 kell 10:00 - 17:30
- [4. kohtumine](./Lessons/Common-Lessons/Lesson-04/README.md)  ([Zoom](https://zoom.us/j/94501316239?pwd=MUE3VGpMcVZOTmU3ZHRQRkFsUFYwQT09)): 04.03.2024 kell 10 - 13:15
- [5. kohtumine](./Lessons/Common-Lessons/Lesson-05/README.md) (Haapsalus): 11.03.2024 kell 10:00 - 17:30
- [6. kohtumine](./Lessons/Common-Lessons/Lesson-06/README.md) ([Zoom](https://zoom.us/j/94501316239?pwd=MUE3VGpMcVZOTmU3ZHRQRkFsUFYwQT09)): 18.03.2024 kell 10 - 13:15
- [7. kohtumine](./Lessons/Common-Lessons/Lesson-07/README.md) (Haapsalus): 25.03.2024 kell 10:00 - 17:30
- [8. kohtumine](./Lessons/Common-Lessons/Lesson-08/README.md) ([Zoom](https://zoom.us/j/94501316239?pwd=MUE3VGpMcVZOTmU3ZHRQRkFsUFYwQT09)): 01.04.2024 kell 10 - 13:15
- [9. kohtumine](./Lessons/Common-Lessons/Lesson-09/README.md) (Haapsalus): 08.04.2024 kell 10:00 - 17:30
- [10. kohtumine](./Lessons/Common-Lessons/Lesson-10/README.md) ([Zoom](https://zoom.us/j/94501316239?pwd=MUE3VGpMcVZOTmU3ZHRQRkFsUFYwQT09)): 15.04.2024 kell 10 - 13:15

### Front-End arenduse kohtumised

- 30.04.2024 kell 10:00 - 17:30
- 07.05.2024 kell 10:00 - 13:15
- 14.05.2024 kell 10:00 - 17:30
- 21.05.2024 kell 10:00 - 13:15
- 28.05.2024 kell 10:00 - 17:30
- 04.06.2024 kell 10:00 - 13:15
- 11.06.2024 kell 10:00 - 17:30
- 18.06.2024 kell 10:00 - 13:15
- 02.07.2024 kell 10:00 - 17:30
- 09.07.2024 kell 10:00 - 13:15

### Back-End arenduse kohtumised

- 29.04.2024 kell 10:00 - 17:30
- 06.05.2024 kell 10:00 - 13:15
- 13.05.2024 kell 10:00 - 17:30
- 20.05.2024 kell 10:00 - 13:15
- 27.05.2024 kell 10:00 - 17:30
- 03.06.2024 kell 10:00 - 13:15
- 10.06.2024 kell 10:00 - 17:30
- 17.06.2024 kell 10:00 - 13:15
- 01.07.2024 kell 10:00 - 17:30
- 08.07.2024 kell 10:00 - 13:15

## Discordi serveri kutse

Discordi server on mõeldud otsesuhtluseks õpetajate ja õpilaste vahel. Samuti saab seal omavahel suhelda, küsida abi ja jagada oma kogemusi.

- [Kutse link](https://discord.gg/7N5CcVhUv3)

## Zoomi link online kohtumiste jaoks

- [Zoomi link](https://zoom.us/j/94501316239?pwd=MUE3VGpMcVZOTmU3ZHRQRkFsUFYwQT09)

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

[](./Subjects/Back-End-Frameworks/README.md)

## Õpijuhend

Õppematerjalide läbitöötamine toimub loengute ja iseseisva tööna. Õppematerjalid, slaidid jms on saadaval repositooriumis vastavates kaustades.

Õppematerjale tuleks läbida vastavalt loengutele, kus on kirjeldatud teemad, nende järjekord ja viited õppematerjalidele.

Peale loenguid jääb õppijale iseseisev töö, kus tuleb läbi töötada õppematerjalid ja lahendada ülesandeid. Kohtumistel annab õpetaja tagasisidet, vastab küsimustele ja aitab lahendada tekkinud probleeme.
