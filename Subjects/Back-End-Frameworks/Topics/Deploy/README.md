# Express API Toodangukeskkonda Ülespanek: Õppematerjal

API toodangukeskkonda ülespanek on keeruline protsess, mis nõuab hoolikat kavandamist ja parimate tavade järgimist. Expressi API tootmiskeskkonda viimiseks on vaja kaaluda mitmeid tegureid, sealhulgas serveri valik, rakenduse seadistamine, turvalisus, koormuse tasakaalustamine ja monitooring. Selles õppematerjalis juhendame teid samm-sammult, kuidas panna Express API üles tootmiskeskkonda, kasutades Node.js-i ja populaarseid tööriistu.

- [Express API Toodangukeskkonda Ülespanek: Õppematerjal](#express-api-toodangukeskkonda-ülespanek-õppematerjal)
  - [Õpiväljundid](#õpiväljundid)
  - [1. Serveri Valik ja Seadistamine](#1-serveri-valik-ja-seadistamine)
    - [Populaarsed Serverivalikud](#populaarsed-serverivalikud)
    - [Näide: VPS-i Seadistamine](#näide-vps-i-seadistamine)
  - [2. Rakenduse Konfigureerimine Tootmiskeskkonna Jaoks](#2-rakenduse-konfigureerimine-tootmiskeskkonna-jaoks)
    - [Keskkonnamuutujate Kasutamine](#keskkonnamuutujate-kasutamine)
    - [Tootmiskeskkonna Optimeerimine](#tootmiskeskkonna-optimeerimine)
  - [3. Koormuse Tasakaalustamine ja Klastrid](#3-koormuse-tasakaalustamine-ja-klastrid)
    - [Koormuse Tasakaalustamine](#koormuse-tasakaalustamine)
    - [Klastrite Kasutamine](#klastrite-kasutamine)
  - [4. Monitooring ja Logimine](#4-monitooring-ja-logimine)
    - [Rakenduse Monitooring](#rakenduse-monitooring)
    - [Logimine](#logimine)
  - [5. Turvalisus](#5-turvalisus)
    - [SSL Sertifikaadid](#ssl-sertifikaadid)
    - [Turvalisuse Tavad](#turvalisuse-tavad)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- valima sobiva serveri ja seadistama Expressi API tootmiskeskkonda;
- konfigureerima rakendust tootmiskeskkonna jaoks;
- kasutama parimaid tavasid turvalisuse tagamiseks ja jõudluse optimeerimiseks;
- seadistama koormuse tasakaalustamist ja rakenduse monitooringut.

## 1. Serveri Valik ja Seadistamine

Esimene samm on valida sobiv server, kus teie Express API töötab. Siin on mõned populaarsed võimalused:

### Populaarsed Serverivalikud

1. **Virtual Private Server (VPS)**:
   - Teenusepakkujad nagu DigitalOcean, Linode, ja Amazon Lightsail pakuvad VPS-e, kus saate täielikult hallata serveri seadistusi ja ressursse.

2. **Platform-as-a-Service (PaaS)**:
   - Teenused nagu Heroku, Vercel, ja AWS Elastic Beanstalk pakuvad lihtsustatud lähenemist, kus nad haldavad serverit ja infrastruktuuri teie eest.

3. **Container Orchestration**:
   - Docker ja Kubernetes on suurepärased valikud, kui soovite oma rakenduse konteinerites käivitada ja hallata mitut teenust.

### Näide: VPS-i Seadistamine

Kasutame näitena DigitalOcean VPS-i (Droplet) seadistamist. Eeldame, et olete juba loonud Dropleti ja installinud sellele Node.js-i ja NPM-i.

1. **SSH Ühendus Serverisse**

   Ühenduge oma serveriga SSH kaudu:

   ```bash
   ssh root@your_server_ip
   ```

2. **Node.js-i ja NPM-i Installimine**

   Veenduge, et Node.js ja NPM on installitud. Kui ei, saate need paigaldada järgides [NodeSource'i juhendeid](https://github.com/nodesource/distributions).

   ```bash
   curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Git-i Paigaldamine**

   Paigaldage Git, et kloonida oma rakendus:

   ```bash
   sudo apt-get install git
   ```

4. **Rakenduse Kloonimine**

   Klooni oma rakendus GitHubist või mõnest muust Git hoidlast:

   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
   ```

5. **Sõltuvuste Installimine**

   Installige kõik vajalikud sõltuvused:

   ```bash
   npm install
   ```

6. **Rakenduse Käivitamine PM2-ega**

   Paigaldage ja kasutage PM2, mis on tootmistasemel protsesside haldur, et hoida oma rakendust töös ja taaskäivitada see pärast krahhe:

   ```bash
   sudo npm install -g pm2
   pm2 start app.js --name "my-express-app"
   pm2 save
   pm2 startup
   ```

   See tagab, et teie rakendus käivitatakse automaatselt serveri taaskäivitamisel.

## 2. Rakenduse Konfigureerimine Tootmiskeskkonna Jaoks

### Keskkonnamuutujate Kasutamine

Rakenduse konfigureerimiseks tootmiskeskkonnas kasutage keskkonnamuutujaid. Seadistage oma rakenduses `dotenv` fail või kasutage keskkonna muutujate haldussüsteemi.

```bash
npm install dotenv
```

Looge `.env` fail ja lisage oma konfidentsiaalsed andmed:

```plaintext
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

Kasutage keskkonnamuutujaid oma rakenduses:

```javascript
require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

### Tootmiskeskkonna Optimeerimine

- **Mälu ja Ressursside Kasutamine**:
  - Kasutage tööriistu nagu `node --max-old-space-size=1024 app.js`, et hallata Node.js-i mälu kasutamist.

- **CORS-i Seadistamine**:
  - Kasutage `cors` paketti, et hallata rakenduse ristdomeenipäringuid.

```javascript
const cors = require('cors');
app.use(cors());
```

- **Turvalisus**:
  - Kasutage `helmet` paketti, et lisada HTTP päiseid, mis suurendavad turvalisust.

```bash
npm install helmet
```

```javascript
const helmet = require('helmet');
app.use(helmet());
```

- **Staatiste Failide Optimeerimine**:
  - Kasutage `express.static`-it ja seadistage `Cache-Control` päised staatiliste failide jaoks.

```javascript
app.use(express.static('public', {
  maxAge: '1d',
}));
```

## 3. Koormuse Tasakaalustamine ja Klastrid

### Koormuse Tasakaalustamine

Kui teie rakendus kasvab, peate võib-olla koormust tasakaalustama mitme serveri vahel. Siin on mõned populaarsed tööriistad:

- **NGINX**: Populaarne veebiserver ja koormuse tasakaalustaja.

  Looge NGINX-i konfiguratsioonifail, et suunata päringud mitmele Node.js serverile:

  ```nginx
  upstream myapp {
      server 127.0.0.1:3000;
      server 127.0.0.1:3001;
  }

  server {
      listen 80;

      location / {
          proxy_pass http://myapp;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
      }
  }
  ```

- **AWS ELB (Elastic Load Balancer)**: AWS-i teenus, mis tasakaalustab koormust mitme serveri vahel.

### Klastrite Kasutamine

Node.js toetab klastrite kasutamist, et rakendust mitme tuuma peal käitada, suurendades seeläbi jõudlust.

```javascript
const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  // Loome worker-id
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Asendame surnud worker-i uuega
  });
} else {
  // Worker-id käivitavad Expressi rakenduse
  const app = require('./app');
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Worker ${process.pid} is running on port ${port}`);
  });
}
```

## 4. Monitooring ja Logimine

### Rakenduse Monitooring

Rakenduse monitooring aitab jälgida jõudlust ja tervist. Siin on mõned tööriistad:

- **PM2 Monitooring**: PM2 pakub sisseehitatud monitooringu tööriistu, mis võimaldavad jälgida rakenduse olekut ja jõudlust.

```bash
pm2 monit
```

- **New Relic või Datadog**: Kolmandate osapoolte monitooringu tööriistad, mis pakuvad sügavaid analüüse ja hoiatuste süsteeme.

### Logimine

Logimine on kriitiline, et jälgida rakenduse tegevust ja vigu. Võite kasutada tööriistu nagu `winston` ja `morgan`, nagu eelnevalt mainitud, et logida päringuid ja vigu.

## 5. Turvalisus

### SSL Sertifikaadid

Kasutage SSL-sertifikaate, et krüptida liiklus teie serveri ja klientide vahel. NGINX-i seadistuses saate lisada SSL-toetuse järgmiselt:

```nginx
server {
    listen 443 ssl;
    server_name yourdomain.com;

    ssl_certificate /etc/ssl/certs/your_cert.crt;
    ssl_certificate_key /etc/ssl/private/your_key.key;

    location / {
        proxy_pass http://myapp;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$host$request_uri;
}
```

### Turvalisuse Tavad

- **Kasutage keskkonnamuutujaid**: Ärge hoidke tundlikke andmeid koodis.
- **Kaitske API võtmeid ja mandaate**: Kasutage seifitud kohti (vaults) või keskkonnamuutujaid.
- **Piirake päringute arvu (rate limiting)**: Kaitske oma API-t ülekoormuse eest.

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutit
  max: 100, // Maksimaalselt 100 päringut akna jooksul
});

app.use(limiter);
```
