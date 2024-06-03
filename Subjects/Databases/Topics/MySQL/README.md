# MySQL põhitõed

MySQL on üks populaarsemaid avatud lähtekoodiga relatsioonilise andmebaasi haldussüsteeme (RDBMS). Seda kasutatakse laialdaselt veebirakendustes ja erinevates tööstusharudes tänu oma jõudlusele, töökindlusele ja kasutuslihtsusele. Selles peatükis antakse ülevaade MySQL-i põhikomponentidest ja selle kasutamise alustamisest.

![MySQL](MySQL.webp)

- [MySQL põhitõed](#mysql-põhitõed)
  - [Õpiväljundid](#õpiväljundid)
  - [MySQL ja SQL tutvustus](#mysql-ja-sql-tutvustus)
  - [MySQL installatsioon ja seadistus](#mysql-installatsioon-ja-seadistus)
    - [MySQL Serveri installatsioon](#mysql-serveri-installatsioon)
    - [MySQL Workbench](#mysql-workbench)
  - [Andmebaasi ja tabelite loomine](#andmebaasi-ja-tabelite-loomine)
    - [Uue andmebaasi loomine](#uue-andmebaasi-loomine)
    - [Tabelite loomine](#tabelite-loomine)
  - [Andmete manipuleerimine](#andmete-manipuleerimine)
    - [Andmete lisamine](#andmete-lisamine)
    - [Andmete valimine](#andmete-valimine)
    - [Andmete uuendamine](#andmete-uuendamine)
    - [Andmete kustutamine](#andmete-kustutamine)
  - [Andmebaasi haldus](#andmebaasi-haldus)
    - [Indeksite loomine](#indeksite-loomine)
    - [Vaadete loomine](#vaadete-loomine)
  - [Andmete varundamine ja taastamine](#andmete-varundamine-ja-taastamine)
    - [Andmete varundamine](#andmete-varundamine)
    - [Andmete taastamine](#andmete-taastamine)
  - [Allikad](#allikad)
  - [Kontrollküsimused või harjutus](#kontrollküsimused-või-harjutus)
  - [Harjutus](#harjutus)

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on MySQL ja kuidas see erineb teistest andmebaasisüsteemidest;
- installima ja seadistama MySQL serveri;
- Kasutama MySQL Workbenchi andmebaaside ja tabelite haldamiseks.
- Looma ja haldama andmebaase ja tabeleid MySQL-is.
- Teostama põhilisi andmebaasi operatsioone MySQL-is.

## MySQL ja SQL tutvustus

**MySQL:** MySQL on avatud lähtekoodiga relatsiooniline andmebaasihaldussüsteem (**RDBMS** - *Relational Database Management System*)
, mida kasutatakse laialdaselt veebirakenduste ja ettevõtete andmehalduse jaoks. See põhineb SQL (Structured Query Language) keelel.

**SQL (Structured Query Language):** SQL on standardne päringukeel, mida kasutatakse relatsiooniliste andmebaaside haldamiseks ja andmete manipuleerimiseks. SQL-i abil saab luua, muuta, kustutada ja pärida andmeid tabelitest.

## MySQL installatsioon ja seadistus

### MySQL Serveri installatsioon

MySQL Serveri installatsioon sõltub operatsioonisüsteemist. Allpool on toodud installatsioonijuhised Windowsile, macOS-ile ja Linuxile.

- **Windows:** MySQL Installer for Windows-i kasutamine.
- **macOS:** MySQL DMG Installer-i kasutamine.
- **Linux:** MySQL-i installimine apt-get või yum abil.

Näide Windowsi jaoks:

1. Laadige alla MySQL Installer [MySQL-i ametlikult veebisaidilt](https://dev.mysql.com/downloads/installer/).
2. Käivitage installer ja valige MySQL Server ja MySQL Workbench installatsiooniks.
3. Järgige ekraanil kuvatavaid juhiseid serveri seadistamiseks ja installatsiooni lõpuleviimiseks.

### MySQL Workbench

MySQL Workbench on võimas tööriist MySQL andmebaaside haldamiseks ja arendamiseks. See pakub graafilist liidest SQL päringute kirjutamiseks, andmebaaside kujundamiseks ja haldamiseks.

- **Laadige alla ja installige MySQL Workbench** [MySQL-i ametlikult veebisaidilt](https://dev.mysql.com/downloads/workbench/).
- **Käivitage MySQL Workbench** ja looge uus ühendus MySQL serveriga, kasutades serveri seadistamisel määratud sisselogimisandmeid.

## Andmebaasi ja tabelite loomine

### Uue andmebaasi loomine

Andmebaasi loomiseks MySQL-is kasutatakse SQL käsku `CREATE DATABASE`.

```sql
CREATE DATABASE my_database;
```

See käsk loob uue andmebaasi nimega `my_database`.

### Tabelite loomine

Tabeli loomiseks MySQL-is kasutatakse SQL käsku `CREATE TABLE`.

```sql
CREATE TABLE Employees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Position VARCHAR(100),
    Salary DECIMAL(10, 2)
);
```

See käsk loob tabeli nimega `Employees` kolme veeruga: `ID`, `Name`, `Position` ja `Salary`. Veerg `ID` on automaatselt suurenev ja esmane võti.

## Andmete manipuleerimine

### Andmete lisamine

Andmete lisamiseks tabelisse kasutatakse SQL käsku `INSERT INTO`.

```sql
INSERT INTO Employees (Name, Position, Salary)
VALUES ('John Doe', 'Developer', 3000.00);
```

See käsk lisab tabelisse `Employees` uue kirje nimega `John Doe`, kelle positsioon on `Developer` ja palk `3000.00`.

### Andmete valimine

Andmete valimiseks tabelist kasutatakse SQL käsku `SELECT`.

```sql
SELECT * FROM Employees;
```

See käsk valib kõik read tabelist `Employees`.

Andmete filtreerimiseks kasutatakse `WHERE` klauslit.

```sql
SELECT Name, Position
FROM Employees
WHERE Salary > 2500;
```

See käsk valib töötajate nimed ja positsioonid, kelle palk on suurem kui `2500`.

### Andmete uuendamine

Andmete uuendamiseks tabelis kasutatakse SQL käsku `UPDATE`.

```sql
UPDATE Employees
SET Salary = 3500.00
WHERE Name = 'John Doe';
```

See käsk uuendab töötaja `John Doe` palga väärtuseks `3500.00`.

### Andmete kustutamine

Andmete kustutamiseks tabelist kasutatakse SQL käsku `DELETE`.

```sql
DELETE FROM Employees
WHERE Name = 'John Doe';
```

See käsk kustutab tabelist `Employees` kirje, kus töötaja nimi on `John Doe`.

## Andmebaasi haldus

### Indeksite loomine

Indeksid kiirendavad andmete otsimist tabelites. Indeksi loomiseks kasutatakse SQL käsku `CREATE INDEX`.

```sql
CREATE INDEX idx_position
ON Employees (Position);
```

See käsk loob indeksi nimega `idx_position` veerul `Position` tabelis `Employees`.

### Vaadete loomine

Vaade on salvestatud päring, mida saab kasutada tabeli andmete vaatamiseks. Vaate loomiseks kasutatakse SQL käsku `CREATE VIEW`.

```sql
CREATE VIEW DeveloperSalaries AS
SELECT Name, Salary
FROM Employees
WHERE Position = 'Developer';
```

See käsk loob vaate nimega `DeveloperSalaries`, mis sisaldab arendajate nimesid ja palku.

## Andmete varundamine ja taastamine

### Andmete varundamine

MySQL andmebaasi varundamiseks kasutatakse `mysqldump` tööriista.

```bash
mysqldump -u root -p my_database > my_database_backup.sql
```

See käsk varundab andmebaasi `my_database` faili `my_database_backup.sql`.

### Andmete taastamine

Varundatud andmebaasi taastamiseks kasutatakse `mysql` tööriista.

```bash
mysql -u root -p my_database < my_database_backup.sql
```

See käsk taastab andmebaasi `my_database` failist `my_database_backup.sql`.

## Allikad

- [MySQL Official Documentation](https://dev.mysql.com/doc/)
- [SQL for Dummies by Allen G. Taylor](https://www.amazon.com/SQL-Dummies-Computer-Tech/dp/1119527074)
- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)
- [MySQL Performance Blog](https://www.percona.com/blog/)

## Kontrollküsimused või harjutus

- Mis on MySQL ja kuidas see erineb teistest andmebaasisüsteemidest?
- Kirjutage SQL käsk, mis loob uue andmebaasi nimega "Company".
- Looge tabel nimega "Departments" järgmiste veergudega: ID (primary key), DepartmentName (text), Location (text).
- Kirjutage SQL päring, mis lisab tabelisse "Departments" uue kirje: IT osakond, asukohaga Tallinn.
- Kirjutage SQL käsk, mis uuendab osakonna nime, mille ID on 1, uueks nimeks "Human Resources".
- Looge SQL päring, mis kustutab tabelist "Departments" kirje, mille osakonna nimi on "IT".

## Harjutus

- Looge uus andmebaas nimega "School".
- Looge tabel nimega "Students" järgmiste veergudega: ID (primary key), FirstName (text), LastName (text), Age (number), Email (text).
- Sisestage tabelisse "Students" kolm näidisrekordit.
- Kirjutage SQL päring, mis valib kõik õpilased, kelle vanus on suurem kui 18.
- Looge SQL päring, mis uuendab õpilase emaili, kelle ID on 2.
- Kirjutage SQL päring, mis kustutab tabelist "Students" kirje, kus õpilase vanus on väiksem kui 16.
