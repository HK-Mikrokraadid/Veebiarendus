---
marp: true

---
# Veebiarendus

## Back-End arendus

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänased teemad

- Meenutame eelmist loengut
- [Relatsiooniline andmebaas](../../../Subjects/Databases/Topics/Relational-Database/README.md)
- [MySQL](../../../Subjects/Back-End-Frameworks/Topics/MySQL/README.md)
- [MySQL Dockeris](../../../Subjects/Back-End-Frameworks/Topics/Docker-MySQL/README.md)
- Andmebaasi loomine
- Tabelite loomine
- Andmete sisestamine
- Päringute tegemine
- [Andmebaasi ühendamine NodeJS-iga](../../../Subjects/Back-End-Frameworks/Topics/MySQL-NodeJS/README.md)

---

## Relatsiooniline andmebaas

Relatsioonilised andmebaasid on laialdaselt kasutatav andmehaldusvahend, mis võimaldab andmeid salvestada struktureeritud ja korraldatud kujul. Need andmebaasid kasutavad tabelite süsteemi, et andmeid talletada ja hallata, ning tuginevad relatsioonilisele mudelile.

---

## Relatsioonilise andmebaasi põhikomponendid

- Tabelid
- Primaarvõti (Primary Key)
- Võõrvõti (Foreign Key)
- Indeksid
- ...

---

## Tabelid

Tabelid on relatsiooniliste andmebaaside põhielemendid, mis sisaldavad ridu ja veerge. Iga tabel esindab kindlat andmekogumit (nt kliendid, tellimused, tooted).

- **Rida (Row):** Tabeli andmekirje. Iga rida sisaldab andmeid vastavalt tabeli veergudele. Rida võib olla ka nimetatud kui kirje või olem.
- **Veerg (Column):** Tabeli omadus või atribuut, mida nimetatakse ka väljadeks.

Näide tabelist:

| ID  | Nimi     | Vanus |
|-----|----------|-------|
| 1   | Jaan     | 25    |
| 2   | Mari     | 30    |
| 3   | Kalle    | 22    |

---

## Primaarvõti (Primary Key)

Primaarvõti on unikaalne identifikaator, mis eristab iga tabeli rida. Primaarvõti tagab, et iga kirje on unikaalne.

---

## Võõrvõti (Foreign Key)

Võõrvõti on veerg või veergude kombinatsioon, mis loob seose kahe või enama tabeli vahel. Võõrvõti viitab primaarvõtmele teises tabelis.

---

## Indeksid

Indeksid on struktuurid, mis aitavad kiirendada andmete otsimist ja sorteerimist andmebaasis. Indeksid võimaldavad andmebaasisüsteemil kiiresti leida andmeid, mis vastavad konkreetsetele kriteeriumidele.

---

## MySQL

MySQL on avatud lähtekoodiga relatsiooniline andmebaasisüsteem, mis on laialdaselt kasutatav veebirakenduste arendamisel. MySQL kasutab SQL-i (Structured Query Language) andmete haldamiseks ja päringute tegemiseks.

---

## MySQL Dockeris

Docker on populaarne konteinerite virtualiseerimise platvorm, mis võimaldab arendajatel luua, käivitada ja jagada rakendusi konteinerites. MySQL-i saab käivitada Dockeris, et luua ja hallata andmebaase arendus- ja tootmisrakendustes.

---

## SQLTools VS Code lisandmoodul

SQLTools on Visual Studio Code lisandmoodul, mis võimaldab arendajatel ühendada ja hallata SQL-andmebaase otse VS Code keskkonnas. SQLTools toetab mitmeid andmebaasisüsteeme, sealhulgas MySQL, PostgreSQL, SQLite, SQL Server ja paljud teised.
