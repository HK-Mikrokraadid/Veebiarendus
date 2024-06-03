# MySQL: Väljade tüüpide ülevaade

MySQL-is on andmete salvestamiseks saadaval erinevad andmetüübid, mida kasutatakse vastavalt konkreetsete andmete olemusele ja nõuetele. Õige andmetüübi valimine on oluline, et tagada andmebaasi efektiivsus, jõudlus ja andmete terviklikkus. Selles peatükis antakse ülevaade MySQL-i väljade tüüpidest ja nende kasutamisest.

- [MySQL: Väljade tüüpide ülevaade](#mysql-väljade-tüüpide-ülevaade)
  - [Õpiväljundid](#õpiväljundid)
  - [MySQL-i andmetüübid](#mysql-i-andmetüübid)
    - [Numbrilised andmetüübid](#numbrilised-andmetüübid)
      - [Täisarvud](#täisarvud)
      - [Ujukoma arvud](#ujukoma-arvud)
    - [Kuupäeva ja kellaaja andmetüübid](#kuupäeva-ja-kellaaja-andmetüübid)
    - [Teksti andmetüübid](#teksti-andmetüübid)
    - [Binaarsed andmetüübid](#binaarsed-andmetüübid)
    - [Muud andmetüübid](#muud-andmetüübid)
  - [Väljade lisaomadused](#väljade-lisaomadused)
  - [Allikad](#allikad)
  - [Kontrollküsimused või harjutus](#kontrollküsimused-või-harjutus)
  - [Harjutus](#harjutus)

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- selgitama erinevaid MySQL-i andmetüüpe ja nende omadusi;
- valima sobiva andmetüübi vastavalt andmete olemusele;
- kasutama erinevaid andmetüüpe MySQL-i tabelite loomisel ja muutmisel.

## MySQL-i andmetüübid

MySQL-is saab väljade tüübid jagada järgmistesse kategooriatesse:

- Numbrilised andmetüübid
- Kuupäeva ja kellaaja andmetüübid
- Teksti andmetüübid
- Binaarsed andmetüübid
- Muud andmetüübid

### Numbrilised andmetüübid

Numbrilisi andmetüüpe kasutatakse arvandmete salvestamiseks. Need jagunevad täisarvudeks ja ujukoma arvudeks.

#### Täisarvud

- **TINYINT:** Väga väike täisarv (vahemikus -128 kuni 127).
- **SMALLINT:** Väike täisarv (vahemikus -32,768 kuni 32,767).
- **MEDIUMINT:** Keskmise suurusega täisarv (vahemikus -8,388,608 kuni 8,388,607).
- **INT või INTEGER:** Tavaline täisarv (vahemikus -2,147,483,648 kuni 2,147,483,647).
- **BIGINT:** Suur täisarv (vahemikus -9,223,372,036,854,775,808 kuni 9,223,372,036,854,775,807).

Näide:

```sql
CREATE TABLE Numbers (
    small_num SMALLINT,
    medium_num MEDIUMINT,
    large_num BIGINT
);
```

#### Ujukoma arvud

- **FLOAT:** Väiksema täpsusega ujukoma arv.
- **DOUBLE:** Suurema täpsusega ujukoma arv.
- **DECIMAL või NUMERIC:** Täpselt määratletud ujukoma arv (määratud täpsuse ja skaalaga).

Näide:

```sql
CREATE TABLE Prices (
    price_float FLOAT,
    price_double DOUBLE,
    price_decimal DECIMAL(10, 2)
);
```

### Kuupäeva ja kellaaja andmetüübid

Kuupäeva ja kellaaja andmetüüpe kasutatakse ajaga seotud andmete salvestamiseks.

- **DATE:** Kuupäev (formaadis YYYY-MM-DD).
- **TIME:** Kellaaeg (formaadis HH:MI:SS).
- **DATETIME:** Kuupäev ja kellaaeg (kombineerituna formaadis YYYY-MM-DD HH:MI:SS).
- **TIMESTAMP:** Ajatempel (määrab aja hetke, salvestatakse UTC-s).
- **YEAR:** Aasta (formaadis YYYY).

Näide:

```sql
CREATE TABLE Events (
    event_date DATE,
    event_time TIME,
    event_timestamp TIMESTAMP
);
```

### Teksti andmetüübid

Teksti andmetüüpe kasutatakse tähtede ja numbrite stringide salvestamiseks.

- **CHAR:** Fikseeritud pikkusega string (kuni 255 tähemärki).
- **VARCHAR:** Muutuv pikkusega string (kuni 65,535 tähemärki).
- **TINYTEXT:** Väga väike tekst (kuni 255 tähemärki).
- **TEXT:** Väike tekst (kuni 65,535 tähemärki).
- **MEDIUMTEXT:** Keskmise suurusega tekst (kuni 16,777,215 tähemärki).
- **LONGTEXT:** Suur tekst (kuni 4,294,967,295 tähemärki).

Näide:

```sql
CREATE TABLE Messages (
    message_short CHAR(50),
    message_long TEXT
);
```

### Binaarsed andmetüübid

Binaarseid andmetüüpe kasutatakse binaarsete andmete salvestamiseks, nagu pildid või failid.

- **BINARY:** Fikseeritud pikkusega binaarne string.
- **VARBINARY:** Muutuv pikkusega binaarne string.
- **TINYBLOB:** Väike binaarne objekt (kuni 255 baiti).
- **BLOB:** Binaarne objekt (kuni 65,535 baiti).
- **MEDIUMBLOB:** Keskmise suurusega binaarne objekt (kuni 16,777,215 baiti).
- **LONGBLOB:** Suur binaarne objekt (kuni 4,294,967,295 baiti).

Näide:

```sql
CREATE TABLE Files (
    file_name VARCHAR(255),
    file_data BLOB
);
```

### Muud andmetüübid

- **ENUM:** Enumereeritud tüüp, mis võimaldab salvestada ühe kindla väärtuse määratud loendist.
- **SET:** Hulgatüüp, mis võimaldab salvestada null või rohkem väärtusi määratud loendist.

Näide:

```sql
CREATE TABLE Products (
    product_name VARCHAR(100),
    product_status ENUM('available', 'out_of_stock', 'discontinued')
);
```

## Väljade lisaomadused

Väljadele saab lisada erinevaid omadusi, mis määravad veergude piirangud ja käitumise. Mõned levinumad väljade lisaomadused on:

- `NOT NULL`: Väärtus ei saa olla NULL.
- `UNIQUE`: Väärtus peab olema unikaalne.
- `DEFAULT value`: Vaikeväärtus, mis määratakse, kui väärtust ei ole määratud.
- `AUTO_INCREMENT`: Veeru väärtus suureneb automaatselt iga uue rea lisamisel.
- `PRIMARY KEY`: Unikaalne identifikaator, mis eristab iga kirjet.
- `FOREIGN KEY`: Võõrvõti, mis loob seose kahe või enama tabeli vahel.
- ...

## Allikad

- [MySQL Official Documentation](https://dev.mysql.com/doc/)
- [W3Schools MySQL Data Types](https://www.w3schools.com/sql/sql_datatypes.asp)
- [MySQL Performance Blog](https://www.percona.com/blog/)

## Kontrollküsimused või harjutus

- Mis on MySQL-i andmetüübid ja miks need on olulised?
- Kirjutage SQL käsk, mis loob tabeli nimega "Employees" järgmiste veergudega: ID (primary key, integer), Name (variable character string, max 100 characters), Position (fixed character string, 50 characters), Salary (decimal number with 10 digits and 2 decimal places).
- Milline MySQL-i andmetüüp sobib kõige paremini suurte tekstidokumentide salvestamiseks? Kirjutage näide.
- Kirjutage SQL käsk, mis loob tabeli "Orders" järgmiste veergudega: OrderID (primary key, integer), OrderDate (date), TotalAmount (decimal number with 10 digits and 2 decimal places).

## Harjutus

- Looge uus andmebaas nimega "Library".
- Looge tabel nimega "Books" järgmiste veergudega: ID (primary key, integer), Title (variable character string, max 255 characters), Author (variable character string, max 100 characters), PublishedYear (year), Genre (enum with values 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'), CoverImage (blob).
- Lisage tabelisse "Books" kolm näidisrekordit.
- Kirjutage SQL päring, mis valib kõik raamatud, mis on avaldatud pärast 2000. aastat.
- Looge SQL päring, mis uuendab raamatu žanri, mille pealkiri on "1984", uueks väärtuseks "Sci-Fi".
- Kirjutage SQL päring, mis kustutab tabelist "Books" kirje, kus autori nimi on "George Orwell".
