# SQL: Päringukeele põhialused

## Sissejuhatus

SQL (*Structured Query Language*) on standardne päringukeele, mida kasutatakse andmebaaside haldamiseks ja neile päringute tegemiseks. SQL võimaldab kasutajatel andmebaasis andmeid luua, lugeda, uuendada ja kustutada. Selles peatükis käsitletakse SQL-i põhialuseid ja põhikäsklusi.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Kirjutama lihtsaid SQL päringuid andmete valimiseks, sisestamiseks, uuendamiseks ja kustutamiseks.
- Kasutama põhilisi SQL klausleid ja funktsioone.
- Selgitama, kuidas SQL-i abil andmebaasistruktuuri määratleda ja hallata.
- Rakendama SQL-i päringuid reaalsetes andmebaasistsenaariumides.

## SQL põhilised käsud

### SELECT

SELECT käsku kasutatakse andmebaasist andmete valimiseks. Tulemus on andmekogum, mida nimetatakse tulemuste kogumiks.

```sql
SELECT column1, column2, ...
FROM table_name;
```

Näide:

```sql
SELECT Name, Age
FROM Students;
```

### WHERE

WHERE klausel filtreerib kirjed, määrates tingimused, mida kirjed peavad vastama.

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

Näide:

```sql
SELECT Name, Age
FROM Students
WHERE Age > 18;
```

### INSERT INTO

INSERT INTO käsku kasutatakse uute ridade lisamiseks tabelisse.

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

Näide:

```sql
INSERT INTO Students (Name, Age, Email)
VALUES ('Mary', 22, 'mary@example.com');
```

### UPDATE

UPDATE käsku kasutatakse olemasolevate kirjete uuendamiseks tabelis.

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

Näide:

```sql
UPDATE Students
SET Email = 'marynew@example.com'
WHERE Name = 'Mary';
```

### DELETE

DELETE käsku kasutatakse kirjete kustutamiseks tabelist.

```sql
DELETE FROM table_name
WHERE condition;
```

Näide:

```sql
DELETE FROM Students
WHERE Age < 18;
```

### AND, OR ja NOT

Need operaatorid kombineerivad mitmeid tingimusi SQL-i WHERE klauslis.

- **AND**: Kõik tingimused peavad olema tõesed.
- **OR**: Vähemalt üks tingimus peab olema tõene.
- **NOT**: Tingimus peab olema väär.

Näide AND ja OR kasutamisest:

```sql
SELECT Name, Age
FROM Students
WHERE Age > 18 AND City = 'Tallinn';
```

Näide NOT kasutamisest:

```sql
SELECT Name, Age
FROM Students
WHERE NOT Age = 18;
```

## Allikad

- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)
- [SQL for Dummies by Allen G. Taylor](https://www.amazon.com/SQL-Dummies-Computer-Tech/dp/1119527074)
- [Official SQL Documentation by Oracle](https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/index.html)
- [PostgreSQL Official Documentation](https://www.postgresql.org/docs/)
- [MySQL Official Documentation](https://dev.mysql.com/doc/)

## Kontrollküsimused või harjutus

- Kirjutage SQL päring, mis valib kõik õpilased, kelle nimi algab tähega 'J'.
- Looge SQL päring, mis sisestab uue õpilase nimega 'Kati', vanusega 20 ja emailiga 'kati@example.com'.
- Kirjutage SQL päring, mis uuendab õpilase vanust, kelle nimi on 'Mati', uueks vanuseks 25.
- Looge SQL päring, mis kustutab kõik kirjed tabelist "Students", kus vanus on väiksem kui 15.

## Harjutus

- Looge tabel nimega "Employees" järgmiste veergudega: ID (primary key), Name (text), Position (text), Salary (number). Sisestage tabelisse kolm näidisrekordit.
- Kirjutage SQL päring, mis valib kõik töötajad, kelle palk on suurem kui 2000.
- Looge SQL päring, mis uuendab töötaja positsiooni, kelle ID on 1, uueks positsiooniks 'Manager'.
- Kirjutage SQL päring, mis kustutab tabelist "Employees" kirje, kus positsioon on 'Intern'.

See peatükk annab põhjaliku ülevaate SQL-i põhilistest käskudest ja nende kasutamisest, pakkudes praktilisi näiteid ja harjutusi, mis aitavad õppijal teemat sügavamalt mõista.