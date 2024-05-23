# Docker Desktop: Tutvustus ja kasutamine

## Sissejuhatus

Docker Desktop on tööriist, mis pakub lihtsat ja kasutajasõbralikku viisi Docker-i konteinerite haldamiseks ja arendamiseks Windowsi ja macOS platvormidel. Docker Desktop ühendab endas kõik vajalikud tööriistad, sealhulgas Docker Engine, Docker CLI, Docker Compose ja Kubernetes, et arendajad saaksid kiiresti alustada konteineripõhiste rakenduste loomist ja haldamist.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Installeerima Docker Desktopi oma arvutisse.
- Konfigureerima Docker Desktopi eelistuste ja seadistustega.
- Kasutama Docker Desktopi konteinerite ja tõmmiste haldamiseks.
- Kasutama Docker Compose'i mitme konteineriga rakenduste haldamiseks.

## Docker Desktopi installatsioon ja seadistus

### Installatsioon

#### Windows

- Laadige alla Docker Desktopi installer [Docker-i ametlikult veebisaidilt](https://www.docker.com/products/docker-desktop).
- Käivitage installer ja järgige juhiseid, et installida Docker Desktop.
- Pärast installatsiooni lõpetamist käivitage Docker Desktop ja logige sisse oma Docker Hubi kontoga (valikuline).

#### macOS

- Laadige alla Docker Desktopi DMG-fail [Docker-i ametlikult veebisaidilt](https://www.docker.com/products/docker-desktop).
- Avage DMG-fail ja lohistage Docker Desktopi ikoon rakenduste kausta.
- Käivitage Docker Desktop rakenduste kaustast ja logige sisse oma Docker Hubi kontoga (valikuline).

### Seadistus

Pärast Docker Desktopi esmakordset käivitamist saate konfigureerida eelistusi ja seadistusi, et kohandada Dockerit vastavalt oma vajadustele.

#### Eelistused

1. Avage Docker Desktop ja klõpsake paremas ülanurgas hammasratta ikooni, et avada eelistused.
2. Eelistuste menüüs saate kohandada järgmisi seadeid:
   - **General:** Üldised seaded, nagu automaatne käivitamine, kasutaja liides ja süsteemi integratsioon.
   - **Resources:** CPU, mälu ja ketta ressursside määramine Docker konteineritele.
   - **Docker Engine:** Docker Daemoni seadistused, sealhulgas kohandatud JSON konfiguratsioon.
   - **Kubernetes:** Kubernetes klastrite haldamine ja seadistamine.
   - **Network:** Kohandatud võrguseaded, sealhulgas DNS ja proxy seaded.
   - **Volumes:** Andmemahud ja nende haldamine.

## Docker Desktopi kasutamine

### Konteinerite haldamine

Docker Desktop pakub kasutajasõbralikku liidest konteinerite loomiseks, käivitamiseks ja haldamiseks.

#### Konteinerite loomine ja käivitamine

TODO

### Tõmmiste (*image*) haldamine

Docker Desktop võimaldab hallata tõmmiste loendit, mis on teie süsteemis saadaval.

#### Tõmmiste tõmbamine Docker Hubist





## Allikad

- [Docker Desktop Official Documentation](https://docs.docker.com/desktop/)
- [Docker for Dummies by Earl Waud](https://www.amazon.com/Docker-Dummies-Earl-Waud/dp/1119564687)
- [Docker Hub](https://hub.docker.com/)
- [Learning Docker by Jeeva S. Chelladhurai](https://www.amazon.com/Learning-Docker-Jeeva-Chelladhurai/dp/1783984869)

## Kontrollküsimused või harjutus

- Mis on Docker Desktop ja kuidas see erineb Docker Engine'ist?
- Kuidas installida Docker Desktop Windowsi ja macOS-i süsteemidesse?
- Kirjeldage Docker Desktopi eelistuste menüüs saadaolevaid seadistusi.
- Kirjutage lihtne Dockerfile ja looge sellest tõmmis Docker Desktopi abil.
- Kuidas kasutada Docker Compose'i mitme konteineriga rakenduste käivitamiseks? Looge näidis `docker-compose.yml` fail.

## Harjutus

- Installige Docker Desktop oma arvutisse.
- Looge Dockerfile, mis pakib lihtsa Node.js rakenduse konteinerisse.
- Käivitage konteiner ja veenduge, et rakendus töötab.
- Looge `docker-compose.yml` fail, mis määratleb Node.js rakenduse ja MySQL andmebaasi konteinerid ning käivitage need.
- Kontrollige, et rakendus ja andmebaas töötavad korrektselt ning suhtlevad omavahel.

See peatükk annab ülevaate Docker Desktopi põhikomponentidest ja kasutamisvõimalustest, pakkudes praktilisi näiteid ja harjutusi, mis aitavad õppijal teemat sügavamalt mõista.