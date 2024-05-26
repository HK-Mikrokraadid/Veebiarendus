# Relatsioonilised andmebaasid

Relatsioonilised andmebaasid on laialdaselt kasutatav andmehaldusvahend, mis võimaldab andmeid salvestada struktureeritud ja korraldatud kujul. Need andmebaasid kasutavad tabelite süsteemi, et andmeid talletada ja hallata, ning tuginevad relatsioonilisele mudelile, mida kirjeldas Edgar F. Codd juba 1970. aastal. Selles peatükis tutvustatakse relatsiooniliste andmebaaside põhikontseptsioone, struktuuri, eeliseid ja kasutusjuhtumeid.

![Relational Databases](Relational-Database.webp)

Pildi allikas: [Dall-E by OpenAI](https://openai.com/)

- [Relatsioonilised andmebaasid](#relatsioonilised-andmebaasid)
  - [Õpiväljundid](#õpiväljundid)
  - [Relatsiooniliste andmebaaside põhimõisted](#relatsiooniliste-andmebaaside-põhimõisted)
    - [Tabelid](#tabelid)
    - [Primaarvõti (Primary Key)](#primaarvõti-primary-key)
    - [Võõrvõti (Foreign Key)](#võõrvõti-foreign-key)
    - [Indeksid](#indeksid)
  - [Relatsiooniliste andmebaaside terminoloogia](#relatsiooniliste-andmebaaside-terminoloogia)
  - [SQL ja relatsioonilised andmebaasid](#sql-ja-relatsioonilised-andmebaasid)
    - [Andmebaasi ja tabelite loomine](#andmebaasi-ja-tabelite-loomine)
    - [Andmete lisamine](#andmete-lisamine)
    - [Andmete lugemine](#andmete-lugemine)
    - [Andmete uuendamine](#andmete-uuendamine)
    - [Andmete kustutamine](#andmete-kustutamine)
    - [Seoste loomine tabelite vahel](#seoste-loomine-tabelite-vahel)
  - [Relatsiooniliste andmebaaside eelised ja piirangud](#relatsiooniliste-andmebaaside-eelised-ja-piirangud)
    - [Eelised](#eelised)
    - [Piirangud](#piirangud)
  - [Allikad](#allikad)
  - [Kontrollküsimused või harjutus](#kontrollküsimused-või-harjutus)
  - [Harjutus](#harjutus)

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on relatsiooniline andmebaas ja kuidas see toimib;
- kirjeldama relatsiooniliste andmebaaside põhikomponente ja terminoloogiat;
- looma ja haldama andmeid relatsioonilises andmebaasis, kasutades SQL-i;
- mõistma relatsiooniliste andmebaaside eeliseid ja piiranguid.

## Relatsiooniliste andmebaaside põhimõisted

### Tabelid

Tabelid on relatsiooniliste andmebaaside põhielemendid, mis sisaldavad ridu ja veerge. Iga tabel esindab kindlat andmekogumit (nt kliendid, tellimused, tooted).

- **Rida (Row):** Tabeli andmekirje. Iga rida sisaldab andmeid vastavalt tabeli veergudele. Rida võib olla ka nimetatud kui kirje või olem.
- **Veerg (Column):** Tabeli omadus või atribuut, mida nimetatakse ka väljadeks.

Näide tabelist:

| ID  | Nimi     | Vanus |
|-----|----------|-------|
| 1   | Jaan     | 25    |
| 2   | Mari     | 30    |
| 3   | Kalle    | 22    |

### Primaarvõti (Primary Key)

Primaarvõti on unikaalne identifikaator, mis eristab iga tabeli rida. Primaarvõti tagab, et iga kirje on unikaalne.

### Võõrvõti (Foreign Key)

Võõrvõti on viide teise tabeli primaarvõtmele. See võimaldab luua seoseid tabelite vahel.

### Indeksid

Indeksid kiirendavad andmete otsingut ja päringute täitmist, pakkudes viiteid tabeli ridadele.

## Relatsiooniliste andmebaaside terminoloogia

- **Relatsioon (Relation):** Tabel, mis sisaldab seotud andmeid.
- **Atribuut (Attribute):** Tabeli veerg, mis määratleb andmetüübi.
- **Olem (Tuple):** Tabeli rida, mis sisaldab andmeüksust.
- **Domeen (Domain):** Kõigi võimalikku väärtuste hulk, mida atribuut võib omada.
- **Referentsiaalne terviklus (Referential Integrity):** Veendub, et kõik võõrvõtmed viitavad olemasolevatele kirjetetele seotud tabelis.

## SQL ja relatsioonilised andmebaasid

**SQL (Structured Query Language)** on standardkeel, mida kasutatakse relatsiooniliste andmebaasidega suhtlemiseks ja nende haldamiseks. SQL võimaldab andmete loomist, lugemist, uuendamist ja kustutamist (*CRUD* - *Create, Read, Update, Delete*).

### Andmebaasi ja tabelite loomine

```sql
CREATE DATABASE my_database;

USE my_database;

CREATE TABLE Users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT
);
```

Tabeleid luues määratakse iga veeru andmetüüp ja piirangud (nt primaarvõti, võõrvõti). Toodud näites on `ID` primaarvõti, mis suureneb automaatselt, `Name` on tekstiväli, mille maksimaalne pikkus on 100 tähemärki ja `Age` on täisarv.

### Andmete lisamine

```sql
INSERT INTO Users (Name, Age) VALUES ('Jaan', 25);
INSERT INTO Users (Name, Age) VALUES ('Mari', 30);
INSERT INTO Users (Name, Age) VALUES ('Kalle', 22);
```

### Andmete lugemine

```sql
SELECT * FROM Users;

SELECT Name, Age FROM Users WHERE Age > 25;
```

Vastus:

| Name | Age |
|------|-----|
| Mari | 30  |

Nagu eelnevast näitest näha, saab SQL-i abil valida konkreetseid veerge ja filtreerida tulemusi vastavalt tingimustele.

### Andmete uuendamine

```sql
UPDATE Users SET Age = 26 WHERE Name = 'Jaan';
```

### Andmete kustutamine

```sql
DELETE FROM Users WHERE Name = 'Kalle';
```

> **Märkus:** Enne andmete kustutamist veenduge, et olete kindel, et soovite andmeid kustutada, kuna kustutatud andmeid ei saa taastada. Kasutage `WHERE` klauslit, et määrata, millised andmed kustutada.

### Seoste loomine tabelite vahel

```sql
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Product VARCHAR(100),
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);
```

Selles näites on loodud tabel `Orders`, mis sisaldab välja `UserID`, mis on võõrvõti tabelist `Users`. See seos võimaldab luua seoseid kahe tabeli vahel, ehk `Orders` tabeli iga tellimus on seotud konkreetse kasutajaga `Users` tabelis.

## Relatsiooniliste andmebaaside eelised ja piirangud

### Eelised

- **Struktureeritud andmed:** Tabelid ja seosed tagavad andmete struktureeritud ja loogilise paigutuse.
- **Andmete terviklus:** Primaar- ja võõrvõtmed ning referentsiaalne terviklikkus tagavad andmete õigsuse ja konsistentsuse.
- **SQL-i võimsus:** SQL pakub tugevaid ja paindlikke tööriistu andmete haldamiseks ja päringute tegemiseks.

### Piirangud

- **Horisontaalne skaleerimine:** Relatsiooniliste andmebaaside horisontaalne skaleerimine (andmebaasi jagamine mitmeks serveriks) võib olla keeruline.
- **Kompleksne andmemudel:** Väga komplekssed ja dünaamilised andmemudelid võivad vajada keerukat skeemi kujundamist ja hooldust.
- **Jõudlus:** Suurte andmekogumite korral võib jõudlus langeda, eriti keerukate päringute puhul.

## Allikad

- [MySQL Documentation](https://dev.mysql.com/doc/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)

## Kontrollküsimused või harjutus

- Mis on relatsiooniline andmebaas ja kuidas see erineb teistest andmebaasitüüpidest?
- Kirjeldage, mis on primaarvõti ja võõrvõti, ning tooge näide.
- Kuidas luua andmebaas ja tabelid, kasutades SQL-i?
- Kirjutage SQL päring, mis valib kõik kasutajad, kelle vanus on väiksem kui 25.
- Kuidas luua seos kahe tabeli vahel, kasutades võõrvõtit?

## Harjutus

- Looge relatsiooniline andmebaas nimega "Library".
- Looge tabel "Books" veergudega: `ID` (primaarvõti), `Title`, `Author`, `PublishedYear`.
- Looge tabel "Borrowers" veergudega: `ID` (primaarvõti), `Name`, `MembershipDate`.
- Looge tabel "Loans" veergudega: `LoanID` (primaarvõti), `BookID` (võõrvõti viitab "Books" tabelile), `BorrowerID` (võõrvõti viitab "Borrowers" tabelile), `LoanDate`, `ReturnDate`.
- Lisage näidisandmed igasse tabelisse.
- Kirjutage SQL päring, mis kuvab kõik laenatud raamatud koos laenajate nimedega ja laenamise kuupäevadega.
