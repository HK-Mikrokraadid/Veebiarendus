# Docker: Mis see on ja milleks seda kasutatakse

## Sissejuhatus

Docker on avatud lähtekoodiga platvorm, mis võimaldab arendajatel ja IT-spetsialistidel luua, juurutada ja hallata rakendusi konteinerites. Konteinerid võimaldavad rakenduste ja nende sõltuvuste isoleeritud keskkonnas käitamist, mis tagab ühtlase ja ennustatava käitumise kõikides etappides, alates arendusest kuni tootmiseni.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Selgitama, mis on Docker ja kuidas see töötab.
- Kirjeldama konteinerite ja virtuaalmasinate erinevusi.
- Aru saama Docker-i põhikomponentidest ja nende funktsioonidest.
- Mõistma Docker-i kasutusjuhtumeid ja eeliseid.

## Docker-i põhimõisted

**Docker:** Docker on platvorm, mis kasutab konteineriseerimistehnoloogiat, et pakkida rakendused ja nende sõltuvused ühte isoleeritud üksusesse, mida nimetatakse konteineriks.

**Konteiner:** Konteiner on kerge, isoleeritud keskkond, mis sisaldab kõiki vajalikke faile ja sõltuvusi rakenduse käivitamiseks. Konteinerid jagavad sama operatsioonisüsteemi kerneli, mis muudab need tõhusamaks kui virtuaalmasinad.

**Docker Image:** Docker Image on immutatud fail, mis sisaldab kõiki rakenduse käivitamiseks vajalikke komponente, sealhulgas koodi, raamistikke, sõltuvusi ja süsteemi tööriistu. Pildid on read-only ja neid kasutatakse konteinerite loomiseks.

**Docker Container:** Docker Container on pildist loodud eksemplar, mis käitab rakendust isoleeritud keskkonnas. Konteinerid on kerged ja käivituvad kiiresti.

**Dockerfile:** Dockerfile on tekstifail, mis sisaldab juhiseid Docker Image loomiseks. See määratleb, millised komponendid ja sammud on vajalikud pildi loomiseks.

**Docker Hub:** Docker Hub on pilvepõhine pildiregister, kus kasutajad saavad jagada, tõmmata ja üles laadida Docker Image-e.

## Docker-i tööpõhimõte

Docker kasutab konteinerite tehnoloogiat, mis võimaldab rakenduste ja nende sõltuvuste pakkimist, arendamist ja käitamist isoleeritud keskkonnas. Konteinerid töötavad otseselt host-operatsioonisüsteemi peal, jagades sama kerneli, mis muudab need kergemaks ja tõhusamaks kui traditsioonilised virtuaalmasinad.

### Konteinerid vs virtuaalmasinad

Konteinerid ja virtuaalmasinad (VM-id) on mõlemad isoleeritud keskkonnad, kuid nende tööpõhimõtted ja kasutusjuhud erinevad.

- **Konteinerid:**
  - Jagavad host-operatsioonisüsteemi kerneli.
  - On kergemad ja käivituvad kiiremini.
  - Pakuvad paremat jõudlust ja efektiivsust.
  - Sobivad hästi mikroteenuste arhitektuuride ja pilvepõhiste rakenduste jaoks.

- **Virtuaalmasinad:**
  - Käitavad täisväärtuslikku operatsioonisüsteemi koos oma kerneliga.
  - On raskemad ja käivituvad aeglasemalt.
  - Pakuvad täielikku isolatsiooni ja turvalisust.
  - Sobivad hästi mitmesuguste operatsioonisüsteemide käitamiseks samal riistvaral.

## Docker-i põhikomponendid

### Docker Engine

Docker Engine on Docker-i peamine komponent, mis vastutab konteinerite loomise ja käitamise eest. See koosneb kolmest osast:

- **Server (Docker Daemon):** Teenus, mis haldab konteinerite elutsüklit.
- **REST API:** Liides, mis võimaldab suhtlust Docker Daemoniga.
- **CLI (Command Line Interface):** Käsurea tööriist, mis võimaldab kasutajatel suhelda Dockeriga.

### Docker Image

Docker Image on rakenduse ja selle sõltuvuste immutable mall, mida kasutatakse konteinerite loomiseks. Pildid ehitatakse Dockerfile abil.

Näide Dockerfile-st:

```Dockerfile
# Alustatakse baas-pildiga
FROM node:14

# Määratakse töökaust konteineris
WORKDIR /app

# Kopeeritakse package.json ja package-lock.json
COPY package*.json ./

# Installitakse sõltuvused
RUN npm install

# Kopeeritakse ülejäänud rakenduse kood
COPY . .

# Määratakse käivituskäsk
CMD ["node", "app.js"]
```

### Docker Container

Docker Container on jooksva rakenduse eksemplar, mis on loodud Docker Image-ist. Konteinerid on kerged, isoleeritud ja neid saab hõlpsasti käivitada, peatada ja eemaldada.

Näide konteineri loomisest ja käivitamisest:

```bash
docker build -t my-node-app .
docker run -d -p 3000:3000 my-node-app
```

### Docker Compose

Docker Compose on tööriist, mis võimaldab määratleda ja hallata mitme konteineriga rakendusi. See kasutab YAML konfiguratsioonifaili `docker-compose.yml`, et määratleda teenused, võrgud ja mahud.

Näide `docker-compose.yml` failist:

```yaml
version: '3'
services:
  web:
    image: my-node-app
    ports:
      - "3000:3000"
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
```

## Docker-i kasutusjuhud ja eelised

### Kasutusjuhud

- **Mikroteenuste arhitektuur:** Docker võimaldab mikroteenuste isoleeritud ja sõltumatut juurutamist.
- **Pilvepõhised rakendused:** Konteinerid võimaldavad skaleeritavust ja paindlikkust pilvepõhiste rakenduste jaoks.
- **Arendus ja testimine:** Docker võimaldab ühtlast arendus- ja testimiskeskkonda, mis vähendab vigu ja kiirendab arendustsüklit.
- **Pärandsüsteemide moderniseerimine:** Docker aitab pärandsüsteeme konteineriseerida ja viia need kaasaegsematele platvormidele.

### Eelised

- **Kergemad ja kiiremad kui virtuaalmasinad.**
- **Lihtne paigaldamine ja haldamine.**
- **Skaleeritavus ja portatiivsus.**
- **Ühtlane käitumine erinevates keskkondades.**
- **Tugev ökosüsteem ja lai kogukond.**

## Allikad

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker for Dummies by Earl Waud](https://www.amazon.com/Docker-Dummies-Earl-Waud/dp/1119564687)
- [Docker Hub](https://hub.docker.com/)
- [Learning Docker by Jeeva S. Chelladhurai](https://www.amazon.com/Learning-Docker-Jeeva-Chelladhurai/dp/1783984869)
- [Docker for Developers by Richard Bullington-McGuire](https://www.amazon.com/Docker-Developers-Richard-Bullington-McGuire/dp/1789617384)

## Kontrollküsimused või harjutus

- Mis on Docker ja kuidas see erineb virtuaalmasinatest?
- Selgitage Docker Image ja Docker Container vahelist erinevust.
- Kirjutage lihtne Dockerfile, mis loob Node.js rakenduse pildi.
- Mis on Docker Compose ja kuidas see aitab mitme konteineriga rakendusi hallata?

## Harjutus

- Laadige alla ja installige Docker oma arvutisse.
- Looge Dockerfile, mis pakib lihtsa Node.js rakenduse konteinerisse.
- Käivitage konteiner ja veenduge, et rakendus töötab.
- Looge `docker-compose.yml` fail, mis määratleb Node.js rakenduse ja MySQL andmebaasi konteinerid ning käivitage need.
