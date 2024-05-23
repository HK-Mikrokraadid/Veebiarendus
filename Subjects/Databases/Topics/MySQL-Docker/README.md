# MySQL ja Docker: Andmebaasi haldamine konteinerite abil

## Sissejuhatus

Docker on konteinerite haldamise platvorm, mis võimaldab arendajatel luua, testida ja juurutada rakendusi isoleeritud keskkondades. Docker muudab MySQL-i andmebaaside seadistamise ja haldamise lihtsaks ja tõhusaks, pakkudes konteineripõhist lahendust. Selles peatükis käsitletakse, kuidas kasutada MySQL-i Dockeriga.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Selgitama Docker-i põhikontseptsioone ja eeliseid.
- Installeerima Docker-i oma arvutisse.
- Looma ja haldama MySQL-i konteinerit Docker-is.
- Teostama põhilisi andmebaasi operatsioone MySQL-i konteineris.

## Docker-i põhikontseptsioonid

- **Konteiner:** Isolatsioonikiht, mis võimaldab rakenduste ja nende sõltuvuste pakendamist ja käitamist ühes üksuses.
- **Pilt (Image):** Lugemiseks mõeldud mall, millest luuakse konteiner. Pilt sisaldab kõiki vajalikke faile ja sõltuvusi rakenduse käitamiseks.
- **Dockerfile:** Skript, mis sisaldab juhiseid Docker-i pildi loomiseks.
- **Docker Hub:** Pilvepõhine pildiregister, kust saab tõmmata valmis pilte või laadida üles oma pilte.

## Docker-i installatsioon

Docker-i installatsioon sõltub operatsioonisüsteemist. Allpool on toodud installatsioonijuhised Windowsile, macOS-ile ja Linuxile.

- **Windows ja macOS:** Laadige alla ja installige Docker Desktop [Docker-i ametlikult veebisaidilt](https://www.docker.com/products/docker-desktop).
- **Linux:** Installige Docker, järgides oma distributsiooni juhiseid, näiteks kasutades apt-get või yum.

Näide Linuxi jaoks:

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## MySQL konteineri loomine Docker-is

### MySQL konteineri tõmbamine ja käivitamine

MySQL-i konteineri loomiseks ja käivitamiseks kasutage Docker-i käsurea tööriistu.

```bash
docker pull mysql:latest
```

Käivitage MySQL konteiner:

```bash
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest
```

- `--name mysql-container`: Määrab konteinerile nime.
- `-e MYSQL_ROOT_PASSWORD=my-secret-pw`: Määrab root kasutaja parooli.
- `-d`: Käivitab konteineri taustal.

### MySQL konteineri konfigureerimine

Kui konteiner on käivitatud, saate sellega ühenduse luua ja konfigureerida MySQL-i.

Looge ühendus MySQL konteineriga:

```bash
docker exec -it mysql-container mysql -u root -p
```

Kui ühendus on loodud, sisestage parool ja te saate alustada MySQL-i käsuridade kasutamist.

### Andmete püsivus

Andmete püsivuse tagamiseks kasutatakse Docker-i andmesidemeid. Sidumine võimaldab andmeid salvestada väljaspool konteinerit, et need ei kaoks konteineri eemaldamisel.

Käivitage MySQL konteiner koos andmesidemega:

```bash
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=my-secret-pw -v /my/local/data:/var/lib/mysql -d mysql:latest
```

- `-v /my/local/data:/var/lib/mysql`: Seob kohalikus failisüsteemis oleva kausta (`/my/local/data`) konteineris oleva andmete kaustaga (`/var/lib/mysql`).

## Andmebaasi operatsioonid MySQL konteineris

### Uue andmebaasi loomine

```sql
CREATE DATABASE my_database;
```

### Tabelite loomine

```sql
CREATE TABLE Employees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Position VARCHAR(100),
    Salary DECIMAL(10, 2)
);
```

### Andmete lisamine

```sql
INSERT INTO Employees (Name, Position, Salary)
VALUES ('John Doe', 'Developer', 3000.00);
```

### Andmete valimine

```sql
SELECT * FROM Employees;
```

### Andmete uuendamine

```sql
UPDATE Employees
SET Salary = 3500.00
WHERE Name = 'John Doe';
```

### Andmete kustutamine

```sql
DELETE FROM Employees
WHERE Name = 'John Doe';
```

## Allikad

- [Docker Official Documentation](https://docs.docker.com/)
- [MySQL Docker Documentation](https://hub.docker.com/_/mysql)
- [Learning Docker by Jeeva S. Chelladhurai](https://www.amazon.com/Learning-Docker-Jeeva-Chelladhurai/dp/1783984869)
- [Docker for Developers by Richard Bullington-McGuire](https://www.amazon.com/Docker-Developers-Richard-Bullington-McGuire/dp/1789617384)
- [MySQL Official Documentation](https://dev.mysql.com/doc/)

## Kontrollküsimused või harjutus

- Mis on Docker konteiner ja kuidas see erineb Docker pildist?
- Kirjutage käsk Docker-i MySQL konteineri loomiseks, määrates root kasutaja parooliks "password123".
- Kuidas tagada andmete püsivus MySQL konteineris? Selgitage ja andke näide.
- Kirjutage SQL käsk, mis loob tabeli "Products" järgmiste veergudega: ID (primary key), Name (text), Price (decimal), Quantity (integer).

## Harjutus

- Looge MySQL konteiner nimega "school-mysql" ja määrake root kasutaja parooliks "schoolpass".
- Looge ühendus "school-mysql" konteineriga ja looge andmebaas nimega "School".
- Looge andmebaasis "School" tabel nimega "Teachers" järgmiste veergudega: ID (primary key), FirstName (text), LastName (text), Subject (text).
- Lisage tabelisse "Teachers" kolm näidisrekordit.
- Kirjutage SQL päring, mis valib kõik õpetajad, kes õpetavad matemaatikat.
- Kirjutage SQL käsk, mis uuendab õpetaja "FirstName" väärtuseks "Jane", kelle "LastName" on "Doe".
- Kirjutage SQL päring, mis kustutab tabelist "Teachers" kirje, kus õpetaja õpetab inglise keelt.

See peatükk annab ülevaate, kuidas kasutada MySQL-i Docker-iga, pakkudes praktilisi näiteid ja harjutusi, mis aitavad õppijal teemat sügavamalt mõista.
