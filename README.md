# Veebiarenduse mikrokraadid

See repositoorium sisaldab järgmiseid Veebiarenduse mikrokraade:

- [Front-End arendus](./FE/README.md)
- [Back-End arendus](./BE/README.md)

Mikrokraadid on arendatud välja rahvusvahelise Erasmus projekti raames.

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
