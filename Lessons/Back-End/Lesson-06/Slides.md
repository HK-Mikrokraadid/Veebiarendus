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

Indeks on andmestruktuur, mis võimaldab kiiremat andmete otsimist ja päringute täitmist tabelis. Indeksid luuakse ühe või mitme veeru põhjal ja need loovad viiteid, mis võimaldavad kiiremini leida konkreetseid ridu tabelist.

---

## MySQL

MySQL on avatud lähtekoodiga relatsiooniline andmebaasisüsteem, mis on laialdaselt kasutatav veebirakenduste arendamisel. MySQL kasutab SQL-i (Structured Query Language) andmete haldamiseks ja päringute tegemiseks.

---

## Docker

Docker on avatud lähtekoodiga konteinerite virtualiseerimise platvorm, mis võimaldab arendajatel luua, käivitada ja jagada rakendusi konteinerites. Docker kasutab Linuxi konteinerite tehnoloogiat, et pakendada rakenduse kood, sõltuvused ja konfiguratsioon ühtsesse konteinerisse.

---

## Docker konteinerid

Docker konteinerid on isoleeritud ja kergkaalulised virtuaalmasinad, mis käivitatakse Dockeri platvormil. Iga konteiner sisaldab rakenduse koodi, sõltuvusi ja konfiguratsiooni, mis on pakendatud konteineri imageks.

---

## MySQL Dockeris

Kursuse käigus kasutame MySQL-i Dockeris, et luua ja hallata andmebaase arenduskeskkonnas, kuna see on kiire ja lihtne viis MySQL-i käivitamiseks ja kasutamiseks. Lisaks ei pea me otseselt paigaldama MySQL-i oma arvutisse.

---

## SQLTools VS Code lisandmoodul

SQLTools on Visual Studio Code lisandmoodul, mis võimaldab arendajatel ühendada ja hallata SQL-andmebaase otse VS Code keskkonnas. SQLTools toetab mitmeid andmebaasisüsteeme, sealhulgas MySQL, PostgreSQL, SQLite, SQL Server ja paljud teised.

---

## Andmebaasi loomine

Andmebaasi loomiseks kasutame SQL-i käsku `CREATE DATABASE`, millele järgneb andmebaasi nimi.

```sql
CREATE DATABASE mydatabase;
```

> Kui kasutame MySQL-i Dockeris, siis loome andmebaasi juba Dockeri konteineri käivitamisel kasutades keskkonnamuutujat `MYSQL_DATABASE`.

---

## Tabelite loomine

Tabeli loomiseks kasutame SQL-i käsku `CREATE TABLE`, millele järgneb tabeli nimi ja veergude määratlused.

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);
```

---

## Andmetüübid

MySQL toetab mitmeid andmetüüpe, mis määravad veergude väärtuste tüübi ja piirangud. Mõned levinumad andmetüübid on:

- `INT`: Täisarvuline väärtus.
- `VARCHAR(n)`: Muutuvpikkusega tähemärkide ahel.
- `TEXT`: Pikad tekstilised andmed.
- `DATE`: Kuupäev.
- `DATETIME`: Kuupäev ja kellaaeg.
- `TIMESTAMP`: Kuupäev ja kellaaeg, mida uuendatakse automaatselt.
- `BOOLEAN`: Tõeväärtus (TRUE või FALSE).
- ...

> `BOOLEAN` andmetüübi tegelikult MySQL-is ei eksisteeri ja selle kasutamisel luuakse tegelikult `TINYINT(1)` veerg.

---

## Tabelite muutmine

Tabelite muutmiseks kasutame SQL-i käsku `ALTER TABLE`, millele järgneb tabeli nimi ja muudatused.

```sql
ALTER TABLE users ADD COLUMN password VARCHAR(255);
```

Välja kustutamiseks kasutame `DROP COLUMN` käsku.

```sql
ALTER TABLE users DROP COLUMN password;
```

---

## Tabeli kustutamine

Tabeli kustutamiseks kasutame SQL-i käsku `DROP TABLE`, millele järgneb tabeli nimi.

```sql
DROP TABLE users;
```

> Olge ettevaatlik, kui kasutate `DROP` käsku, kuna see kustutab andmed ja struktuuri pöördumatult.

---

## Andmete sisestamine

Andmete sisestamiseks kasutame SQL-i käsku `INSERT INTO`, millele järgneb tabeli nimi ja veergude väärtused.

```sql
INSERT INTO users (username, email) VALUES ('alice', 'alice@alice.ee');
```

---

## Päringute tegemine

Andmete lugemiseks ja pärimiseks tabelitest kasutame SQL-i käsku `SELECT`, millele järgneb veergude nimed või `*` märge kõigi veergude valimiseks.

```sql
SELECT * FROM users;
```

---

