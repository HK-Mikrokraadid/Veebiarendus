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
- Andmebaas
- [Relatsiooniline andmebaas](../../../Subjects/Databases/Topics/Relational-Database/README.md)
- [MySQL](../../../Subjects/Back-End-Frameworks/Topics/MySQL/README.md)
- [MySQL Dockeris](../../../Subjects/Back-End-Frameworks/Topics/Docker-MySQL/README.md)
- Andmebaasi loomine
- Tabelite loomine
- Andmete sisestamine
- Päringute tegemine
- Kodune töö

---

## Millest rääkisime eelmine kord?

---

## Mis on andmebaas?

---

## Andmebaas

Organiseeritud kogum andmetest, mis on struktureeritud nii, et neid oleks lihtne hallata, uuendada ja otsida. Andmebaasid võimaldavad tõhusat andmete hoiustamist ja neile juurdepääsu.

---

## Andmebaasisüsteem

Tarkvara, mis võimaldab luua, hallata ja kasutada andmebaase. Seda nimetatakse andmebaaside haldussüsteemiks (**DBMS** - *Database Management System*).

---

## Relatsiooniline andmebaas

---

## Relatsiooniline andmebaas - 1

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

MySQL on avatud lähtekoodiga relatsiooniline andmebaasihaldussüsteem (**RDBMS** - *Relational Database Management System*), mis on laialdaselt kasutatav veebirakenduste arendamisel. MySQL kasutab SQL-i (Structured Query Language) andmete haldamiseks ja päringute tegemiseks.

---

## Docker

Docker on avatud lähtekoodiga konteinerite virtualiseerimise platvorm, mis võimaldab arendajatel luua, käivitada ja jagada rakendusi konteinerites. Docker kasutab Linuxi konteinerite tehnoloogiat, et pakendada rakenduse kood, sõltuvused ja konfiguratsioon ühtsesse konteinerisse.

---

## Docker konteinerid

Docker konteinerid on isoleeritud ja kergkaalulised *virtuaalmasinad*, mis käivitatakse Dockeri platvormil. Iga konteiner sisaldab rakenduse koodi, sõltuvusi ja konfiguratsiooni, mis on pakendatud konteineri imageks.

---

## Docker Hub

Docker Hub on Dockeri ametlik registriplatvorm, mis võimaldab arendajatel leida, jagada ja käivitada Dockeri konteinereid. Docker Hub sisaldab tuhandeid avalikke konteinereid, mida saab kasutada erinevate rakenduste ja teenuste käivitamiseks.

---

## MySQL Dockeris

Kursuse käigus kasutame MySQL-i konteinerit Dockeris, et luua ja hallata andmebaase arenduskeskkonnas, kuna see on kiire ja lihtne viis MySQL-i käivitamiseks ja kasutamiseks. Lisaks ei pea me otseselt paigaldama MySQL-i oma arvutisse.

---

## MySQL Dockeri käivitamine

MySQL-i keskkonnamuutujad:

- `MYSQL_ROOT_PASSWORD`: MySQL-i juurkasutaja parool.
- `MYSQL_DATABASE`: Andmebaasi nimi, mida soovite luua.
- `MYSQL_USER`: Andmebaasi kasutajanimi.
- `MYSQL_PASSWORD`: Andmebaasi kasutaja parool.

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
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

## Väljade lisaomadused

Väljadele saab lisada erinevaid omadusi, mis määravad veergude piirangud ja käitumise. Mõned levinumad väljade lisaomadused on:

- `NOT NULL`: Väärtus ei saa olla NULL.
- `UNIQUE`: Väärtus peab olema unikaalne.
- `DEFAULT value`: Vaikeväärtus, mis määratakse, kui väärtust ei ole määratud.
- `AUTO_INCREMENT`: Veeru väärtus suureneb automaatselt iga uue rea lisamisel.
- `PRIMARY KEY`: Unikaalne identifikaator, mis eristab iga kirjet.
- `FOREIGN KEY`: Võõrvõti, mis loob seose kahe või enama tabeli vahel.
- ...

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

## Seosed (Relationships)

Andmebaasides kasutatakse seoseid, et luua seosed kahe või enama tabeli vahel. Seosed võimaldavad andmeid tõhusalt pärida ja hallata, luues seoseid võõrvõtmete abil.

---

## Võõrvõtme lisamine

Võõrvõtme lisamiseks kasutame SQL-i käsku `FOREIGN KEY`, millele järgneb veeru nimi ja viide teise tabeli primaarvõtmele.

```sql
CREATE TABLE posts (
    id INT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## Seoste tüübid

- **Üks-ühele (One-to-One):** Iga kirje esimeses tabelis vastab täpselt ühele kirjele teises tabelis.
- **Üks-paljudele (One-to-Many):** Iga kirje esimeses tabelis vastab mitmele kirjele teises tabelis.
- **Palju-paljudele (Many-to-Many):** Mitu kirjet esimeses tabelis vastab mitmele kirjele teises tabelis ja vastupidi.

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

## Täpsustatud päringud

Päringute täpsustamiseks kasutame `WHERE` tingimust, mis piirab päringu tulemusi vastavalt määratud tingimustele.

```sql
SELECT * FROM users WHERE username = 'alice';
```

```sql
SELECT * FROM users WHERE id = 1;
```

```sql
SELECT * FROM users WHERE age > 18;
```

---

## Määrame, mis andmeid soovime kuvada

```sql
SELECT username, email FROM users;
```

```sql
SELECT username, email FROM users WHERE age > 18;
```

---

## Kodutöö

- Loo MySQL andmebaas ja tabelid, mis sisaldavad kasutajaid, postitusi ja kommentaare.
- Lisa tabelitesse andmeid, et oleks võimalik oma API-s neid kasutada.
- Tee päringuid, mis tagastavad kasutajate, postituste ja kommentaaride andmeid.
