# Express rakenduse logimine

API kasutuse logimine on oluline, et saada ülevaade, kuidas ja millal kasutajad teie API-t kasutavad. Logimine aitab tuvastada mustreid, jälgida jõudlust ja diagnoosida probleeme. Expressis saate logimise rakendada mitmel viisil, kasutades kas sisseehitatud võimalusi või kolmandate osapoolte teeke. Üks populaarsemaid ja võimsamaid logimisteeke on `winston`. Lisaks saab kasutada ka `morgan` teeki, mis on lihtne HTTP päringute logija.

- [Express rakenduse logimine](#express-rakenduse-logimine)
  - [Õpiväljundid](#õpiväljundid)
  - [Paigaldamine](#paigaldamine)
  - [1. Morgan: HTTP Päringute Logimine](#1-morgan-http-päringute-logimine)
    - [Morgan Kasutamine](#morgan-kasutamine)
    - [Morgan Logimisformaadid](#morgan-logimisformaadid)
    - [Logide Salvestamine Faili](#logide-salvestamine-faili)
  - [2. Winston: Täiustatud Logimine](#2-winston-täiustatud-logimine)
    - [Winston Seadistamine](#winston-seadistamine)
    - [Winston Integreerimine Expressi](#winston-integreerimine-expressi)
    - [Selgitus](#selgitus)
  - [Logitasemed](#logitasemed)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- selgitama, miks on API kasutuse logimine oluline;
- paigaldama ja seadistama `morgan` ja `winston` logimisteeke;
- rakendama API kasutuse logimist Expressis, kasutades `morgan` ja `winston` teeke;
- logima päringute detaile ja vigasid hilisema analüüsi jaoks.

## Paigaldamine

Esmalt paigaldame vajalikud teegid:

```bash
npm install morgan winston
```

## 1. Morgan: HTTP Päringute Logimine

`morgan` on HTTP päringute logimise teek, mida saab hõlpsasti integreerida Expressi rakendusse.

### Morgan Kasutamine

Lisame `morgan` oma Expressi rakendusse, et logida kõik sissetulevad HTTP päringud.

```javascript
// app.js
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

const app = express();

// Morgan logib kõik päringud
app.use(morgan('combined')); // Võite valida erinevaid logimise formaate (dev, combined, tiny jne)

app.use(bodyParser.json());
app.use('/users', usersRouter);

// Kui ükski teekond ei vasta
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found',
  });
});

// Keskne veakäsitleja
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
```

### Morgan Logimisformaadid

`morgan` pakub mitmeid erinevaid logimisformaate:

- **combined**: Detalliseeritud logid, mis sisaldavad palju informatsiooni (hea tootmiskeskkonnas).
- **common**: Üldine logi formaat.
- **dev**: Lühike ja värviline logi formaat (hea arendamiseks).
- **short**: Lühike logi formaat.
- **tiny**: Väga lühike logi formaat.

### Logide Salvestamine Faili

Kui soovite logisid salvestada faili hilisemaks analüüsiks, saate selleks kasutada `morgan` ja `fs` moodulit.

```javascript
const fs = require('fs');
const path = require('path');

// Logifaili voog
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Kasutame 'combined' formaati ja salvestame logid faili
app.use(morgan('combined', { stream: accessLogStream }));
```

## 2. Winston: Täiustatud Logimine

`winston` on paindlik ja võimas logimisteek, mida saab kasutada erinevate logitasemete ja -vormingute jaoks.

### Winston Seadistamine

Loome `winston` loggeri ja integreerime selle Expressi rakendusse.

```javascript
// logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, errors } = format;

// Kohandatud logi formaat
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    errors({ stack: true }), // Logi veateated koos stack trace'iga
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
    new transports.File({ filename: 'errors.log', level: 'error' }),
  ],
});

module.exports = logger;
```

### Winston Integreerimine Expressi

Kasutame `winston` loggerit Expressi rakenduses nii, et logime HTTP päringuid ja vigu.

```javascript
// app.js
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const logger = require('./logger');

const app = express();

// Morgan logib kõik päringud, kasutades winstonit
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) }}));

app.use(bodyParser.json());
app.use('/users', usersRouter);

// Kui ükski teekond ei vasta
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found',
  });
});

// Keskne veakäsitleja
app.use((err, req, res, next) => {
  logger.error(err.message, { stack: err.stack });
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
```

### Selgitus

- **Morgan ja Winston Koos**: Kasutame `morgan` logimisteeki koos `winston`-iga, et logida HTTP päringud detailsemalt ja salvestada need faili.
- **Kohandatud Logi Formaat**: `winston` võimaldab määratleda kohandatud logi formaadi, mis sisaldab timestampi ja veateateid koos stack trace'iga.
- **Keskne Veakäsitleja**: Logime vead, kasutades `winston` loggerit, mis aitab hiljem vigade analüüsimisel.

## Logitasemed

`winston`-il on erinevad logitasemed, mis aitavad sorteerida ja filtreerida logisid:

- **error**: Veateated.
- **warn**: Hoiatused.
- **info**: Informatiivsed teated.
- **http**: HTTP päringute logimine.
- **verbose**: Üksikasjalikumad teated.
- **debug**: Silumisteated.
- **silly**: Väga üksikasjalikud teated.
