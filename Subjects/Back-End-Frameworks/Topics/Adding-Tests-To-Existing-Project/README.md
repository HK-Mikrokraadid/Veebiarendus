# Kuidas olemasolevale Node Express API-le testid lisada?

> Selle peatüki raames vaatame, kuidas saame luua End-to-End automaattestid olemasolevale Node.js Express API-le.
> Testimiseks kasutame me [Mocha](../mocha/README.md) testiraamistikku ja [Supertest](../supertest/README.md) moodulit. Lisaks kasutame [Chai](../chai/README.md) `assertion`-eid

## Rakenduse struktureerimine

Esimene asi, mida olemasoleva Node.js Express API-ga teha tuleks, selleks, et saaksime API-le lisada automaattestid, on eraldada omavahel Express `app` ja selle käivitamine. See on vajalik seetõttu, et oleks võimalik testimise ajal kasutada `app` muutujat, ilma serverit otseselt käivitamata.

Selleks tõstame olemasolevast `index.ts` failist välja kõik, mis tegeleb `app`-i loomisega ja jätame alles ainult serveri käivitamise. See tähendab, et meie `index.ts` fail peaks välja nägema umbes selline:

```typescript
import app from './app'

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
```

Seejärel loome me uue faili `app.ts`, kuhu tõstame kogu koodi, mis tegeleb `app`-i loomisega. See tähendab, et meie `app.ts` fail peaks välja nägema umbes selline:

```typescript
import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

export default app
```

Sellisel kujul struktureeritud rakenduse puhul on meil võimalik importida rakendus (`app`) testidesse ja kasutada seda ilma serverit käivitamata.

## Testandmete loomine ja testandmebaasi kasutamine

Järgmisena on vaja meil välja mõelda, kuidas ja kust me saame oma rakenduse testimiseks vajalikud andmed, kuna meie praegune eesmärk on testida rakendust sellisel viisil, nagu me seda hiljem pärsielt kasutame, see tähendab, et me soovime testida ka seda, kas meie rakendus suhtleb andmebaasiga õigesti.

Selleks, et me saaksime rakenduse testimiseks vajalikud andmed kätte, on meil mitu võimalust:

- kasutada olemasolevat `live` andmebaasi
- luua uus andmebaas
- kasutada andmebaasi asemel mälu andmebaasi
- kasutada andmebaasi asemel mock andmebaasi
- ...

Olemasoleva `live` andmebaasi kasutamise suur probleem on see, et kuigi seal on meie jaoks vajalikud andmed juba olemas, siis testimise käigus kirjutatavad andmed võivad hakata risustama olemasolevat andmebaasi. Lisaks ei saa me sellisel juhul kindlad olla, kas olemasolevas andmebaasis olevad andmed on ikka sellised, nagu me eeldame.

Selleks, et me saaksime testid kirjutada sellisel viisil, et need ei mõjutaks olemasolevat andmebaasi ja et meil oleks alati kindlus, et andmebaasis on olemas andmed, mida me ootame, on meil vaja luua uus andmebaas.

Uue andmebaasi loomiseks on meil mitu võimalust:

- luua uus andmebaas käsitsi
- luua uus andmebaas automaatselt
- luua uus andmebaas automaatselt ja kustutada see pärast testimist
- ...

Selles peatükis käsitleme me uue andmebaasi loomist automaatselt ja selle kustutamist pärast testimist.

Uue andmebaasi automaatseks loomiseks ja kasutamiseks on meil jälle palju erinevaid võimalusi:

- luua andmebaas testide käivitamise ajal
- luua andmebaas enne testide käivitamist

Selles peatükis käsitleme me andmebaasi loomist enne testide käivitamist.

Selleks, et me saaksime andmebaasi autmoaatselt testimise jaoks andmebaasi luua, kirjutame me eraldi skripti, mis loob andmebaasi ja sisestab sinna vastavad andmed.

```ts
import mysql2 from 'mysql2';
import path from 'path';
import fs from 'fs';
import config from './config';

const dbConfig = config.db.test;

const sqlFilePath = path.join(__dirname, 'init.sql');
const sqlContent = fs.readFileSync(sqlFilePath, 'utf-8').toString();
const db = mysql2.createConnection(dbConfig).promise();

const statements = sqlContent.split(/;\s*$/m);

async function runQuery(sql: string) {
  try {
    await db.query(sql);
  } catch (error) {
    console.log('Error', error);
  }
}

try {
  db.beginTransaction();
  for (const statement of statements) {
    if (statement.trim().length > 0) {
      runQuery(statement);
    }
  }
  db.commit();
} catch (error) {
  console.log(error);
  db.rollback();
} finally {
  db.end();
}
```

Selle skripti eelduseks on, et meil on olemas fail `init.sql`, mis sisaldab andmebaasi loomiseks vajalikke SQL päringuid. Näiteks võib see fail välja näha selline:

```sql
-- Kui andmebaas eksisteerib, siis kustutame selle kõigepealt, et oleks kindel, et meil on puhas andmebaas

DROP DATABASE IF EXISTS `test`;

CREATE DATABASE IF NOT EXISTS `test`;

USE `test`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `users` (`name`, `email`, `password`) VALUES
('John Doe', 'john@doe.ee', 'secret');
```

Nüüd on meil võialik see skript käivitada enne testide käivitamist. Selleks lisame me `package.json` faili uue skripti:

```json
{
  "scripts": {
    "pretest": "ts-node ./scripts/create-test-db.js",
  }
}
```

`pretest` hoolitseb selle eest, et skript käivitatakse enne testide käivitamist.

Järgmisena on meil vaja tagada, et kui me oma rakenduse teste hakkame käivitama, siis valitakse kasutamiseks testandmebaas. Selleks on meil jälle mitu võimalust, kuid üks võimalus on testide käivitamisel anda keskkonnamuutuja abil rakendusele teada, millist andmebaasi kasutada. Selleks tuleb meil enne veel andmebaasi seadistuste fail ümber kirjutada, et vastavalt keskkonnamuutujale valida kasutamiseks õige andmebaas.

Kui kasutame muutujate hoidmiseks faili, siis meie `config.ts` fail võiks välja näha umbes selline:

```ts
const config: IConfig = {
  port: 3000,
  jwtSecret: 'veryStrongSecret',
  jwtExpiresIn: '1h',
  saltRounds: 10,
  db: {
    development: {
      host: 'localhost',
      user: 'root',
      password: 'justStrongSecret',
      database: 'homeworks',
    },
    test: {
      host: 'localhost',
      user: 'root',
      password: 'justStrongSecret',
      database: 'test',
    },
  },
};

export default config;
```

Andmebaasi seadistuste faili tuleb lisada funktsionaalsus, mis loeb keskkonnamuutujat ja tagastab vastavalt sellele kasutamiseks sobivad andmebaasi seadistused. Näiteks võiks see välja näha umbes selline:

```ts
import mysql2 from 'mysql2';
import config from './config';

const dbConfig = config.db[process.env.NODE_ENV || 'development'];

const db = mysql2.createConnection(dbConfig).promise();

export default db;
```

Siinkohal hakkab Typescript tõenäoliselt andma veateadet, mis on seotud `process.env.NODE_ENV` kasutamisega - kuna Typescript ei saa olla kindel, milline väärtus sealt keskkonnamuutuja kaudu tuleb. Selle veateate likvideerimiseks on üks võimalus kirjeldada seadistuse jaoks interface, mis lubab põhimõtteliselt andmebaasi seadistuse `key` nimeks suvalist nimetust, kuid `value` peab olema objekt, mis vastab andmebaasi seadistusele. Näiteks võiks see välja näha umbes selline:

```ts
interface IDatabaseConfig {
  [key: string]: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
}
```

Õigem oleks muidugi teha interface kogu `config.ts` failile ja see võiks välja näha selline:

```ts
interface Config {
  port: number;
  jwtSecret: string;
  jwtExpiresIn: string;
  saltRounds: number;
  db: {
    [key: string]: {
      host: string;
      user: string;
      password: string;
      database: string;
    };
  };
}
```

Nüüd on meil vaja veel tagada, et testid käivitatakse õiges keskkonnas. Selleks on meil taas mitu võimalust, kuid üks võimalus on kasutada `cross-env` moodulit. Selleks tuleb meil installida `cross-env` moodul:

```bash
npm install cross-env
```

Seejärel saame me lisada keskkonnamuutuja `package.json` faili:

```json
{
  "scripts": {
    "pretest": "ts-node ./scripts/create-test-db.js",
    "test": "cross-env NODE_ENV=test mocha -r ts-node/register 'tests/*.test.ts' --exit"
  }
}
```

Nüüd kui kirjutame käsureale `npm test`, siis käivitatakse enne testide käivitamist skript, mis loob testandmebaasi ja sisestab sinna vajalikud andmed. Seejärel käivitatakse testid testandmebaasi kasutades.

## Raamisitike paigaldamine

Järgmisena on meil vaja paigaldada testide kirjutamiseks vajalikud raamistikud ja tüübikirjeldused. Selleks on meil vaja paigaldada [Mocha](../mocha/README.md), [Supertest](../supertest/README.md) ja [Chai](../chai/README.md) moodulid:

```bash
npm install mocha supertest chai
npm install -D @types/mocha @types/supertest @types/chai
```

Lisaks on vaja täiendada `ESLint` seadistusi, et see ei hakkaks meile `Chai` `assertion`-ite kohta hoiatusi andma. Selleks paigaldame kõigepealt järjekordse mooduli:

```bash
npm install eslint-plugin-chai-friendly --save-dev
```

Lisa järgnev rida ESLint-i konfiguratsioonifaili `extends` sektsiooni:

```json
{
  "extends": ["plugin:chai-friendly/recommended"]
}
```

Või kui ESLint-i konfiguratsioon on JavaScripti failis, siis:

```javascript
{
  extends: ['plugin:chai-friendly/recommended'],
};
```

## ESLint-i faili näide

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:chai-friendly/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
```

## Testide kirjutamine

Eelnevast skriptist on näha, et sellise seadistuse puhul oodatakse, et testid oleksid rakenduse juurkaustas kaustas `tests` ja `test.ts` lõpuga failides. Seega loome me kausta `tests` ja sinna omakorda kausta `users.test.ts` faili, kuhu me hakkame kirjutama testid kasutajate testimiseks.

Kõigepealt tuleb importida vastavad testimisega seotud moodulid ja rakendus ise (`app`):

```ts
import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../app';
```

`request` moodul võimaldab meil teha päringuid rakendusele. `expect` moodul võimaldab meil defineerida erinevaid ootuseid, et kontrollida, kas rakendus töötab nii nagu me ootame. `describe` ja `it` moodulid võimaldavad meil testide grupeerimist ja testide kirjeldamist.

Järgmisena saame me juba kirjutada testi, mis kontrollib, kas kasutajate loomine töötab nii nagu me ootame. Selleks loome kõigepealt ühe objekti, mis sisaldab kasutaja loomiseks vajalikud andmed ja saadame selle objekti rakendusele päringu kehaks:

```ts
describe('Users controller', () => {
  describe('POST /users', () => {
    it('responds with user id and statusCode 201 after creating new user', async () => {
      const response = await request(app).post('/users').send(newUser);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(201);
      expect(response.body.success).to.be.true;
      expect(response.body.userId).to.be.a('number');
      expect(response.body.userId).to.equal(3); // Kuna teame, et testandmebaasis on juba kaks kasutajat olemas, siis peaks uue kasutaja id olema 3
    });
  });
});
```

Nagu näitest näha, siis kasutame `describe` ja `it` mooduleid, et grupeerida testid ja kirjeldada testide eesmärki. Seejärel kasutame `request` moodulit, et saata rakendusele päring. Päringu kehaks on meil `newUser` objekt, mis sisaldab kasutaja loomiseks vajalikud andmed. Seejärel kontrollime `expect` ja `Chai` `assertion`-ite abil, kas vastus on selline nagu me ootame.

Kui me nüüd testi käivitame `npm test` käsuga, siis saame sellise vastuse:

```bash
  Users controller
    POST /users
      ✔ responds with user id and statusCode 201 after creating new user (116ms)


  1 passing (137ms)
```

Järgmisena saame kontrollida näiteks, kas kasutaja saab ka sisse logida ja mingeid andmeid pärida. Teame, et selleks on meil vaja saata päring `POST /login` endpointile, kust me saame vastuseks kasutaja `token`-i ja seejärel saata päring `GET /users/:id` endpointile koos `token`-iga. Seega saame kirjutada sellise testi:

```ts
let newUserToken: string; // Muutuja tokeni salvestamiseks, et saaksime seda edaspidi kasutada
describe('POST /login', () => {
  it('responds with token and statusCode 200 for created user login', async () => {
    const response = await request(app).post('/login').send(newUser);
    expect(response.body).to.be.a('object');
    expect(response.statusCode).to.equal(200);
    expect(response.body.success).to.be.true;
    expect(response.body.token).to.be.a('string');
    newUserToken = response.body.token;
  });
});
describe('GET /users/:id', () => {
  it('responds with user object and statusCode 200 for user', async () => {
    const response = await request(app).get('/users/3').set('Authorization', `Bearer ${newUserToken}`);
    expect(response.body).to.deep.equal({
      success: true,
      message: 'User',
      user: {
        id: 3,
        firstName: 'Pille',
        lastName: 'Piilupart',
        email: 'pille@piilupart.ee',
        role: 'User',
      },
    });
  });
});
```

Kogu senine testifail näeks hetkel välja selline:

```ts
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

const newUser = {
  firstName: 'Pille',
  lastName: 'Piilupart',
  email: 'pille@piilupart.ee',
  password: 'pille',
};

let newUserToken: string;

describe('Users controller', () => {
  describe('POST /users', () => {
    it('responds with user id and statusCode 201 after creating new user', async () => {
      const response = await request(app).post('/users').send(newUser);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(201);
      expect(response.body.success).to.be.true;
      expect(response.body.userId).to.be.a('number');
      expect(response.body.userId).to.equal(3);
    });
  });
  describe('POST /login', () => {
    it('responds with token and statusCode 200 for created user login', async () => {
      const response = await request(app).post('/login').send(newUser);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.token).to.be.a('string');
      newUserToken = response.body.token;
    });
  });
  describe('GET /users/:id', () => {
    it('responds with user object and statusCode 200 for user', async () => {
      const response = await request(app).get('/users/3').set('Authorization', `Bearer ${newUserToken}`);
      expect(response.body).to.deep.equal({ // Kuna me teame, millisel kujul peaks vastus olema, siis kasutame deep equal assertionit, näidates testile täpselt ett, millisel kujul vastus olema peaks
        success: true,
        message: 'User',
        user: {
          id: 3,
          firstName: 'Pille',
          lastName: 'Piilupart',
          email: 'pille@piilupart.ee',
          role: 'User',
        },
      });
    });
  });
});
```

Sarnaselt näidetega saame kirjutada testid ka muude kasutusjuhtumite kohta, nagu näiteks:

- Kasutaja loomine ebaõnnestub, kui kasutaja on juba olemas
- Kasutaja loomine ebaõnnestub, kui kasutaja andmed on vigased
- Kasutaja loomine ebaõnnestub, kui kasutaja andmed on puudulikud
- Andmete pärimine ebaõnnestub, kui kasutaja ei ole sisse logitud
- Andmete pärimine ebaõnnestub, kui kasutajat ei ole olemas
- Andmete pärimine ebaõnnestub, kui kasutaja ei ole administraator
- ...

Samuti siis ka testid muudele endpointidele.

## Testidega kaetususe raporti loomine

Kui me oleme kirjutanud testid, siis on hea, kui me saame teada, kui palju meie rakendusest on testidega kaetud. Selleks on meil jällegi mitu võimalust, kuid üks võimalus on kasutada [nyc](https://www.npmjs.com/package/nyc) moodulit.

Selleks paigaldame me `nyc` mooduli:

```bash
npm install nyc
```

Seejärel saame me lisada `package.json` faili uue skripti:

```json
{
  "scripts": {
    "pretest": "ts-node ./scripts/create-test-db.js",
    "test": "cross-env NODE_ENV=test mocha -r ts-node/register 'tests/*.test.ts' --exit",
    "coverage": "nyc npm test"
  }
}
```

Kaetuse raporti nägemiseks saame me käivitada käsu `npm run coverage`. Seejärel näidatakse peale testide käivitamist kaetuse raportit, mis näeb välja midagi sarnast:

```bash
--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------|---------|----------|---------|---------|-------------------
All files                 |    73.6 |    51.78 |   47.27 |   74.71 | 
 src                      |   94.64 |       75 |     100 |   94.64 | 
  app.ts                  |     100 |      100 |     100 |     100 | 
  config.ts               |     100 |      100 |     100 |     100 | 
  createDatabase.ts       |   85.71 |      100 |     100 |   85.71 | 21,34-35
  database.ts             |     100 |       50 |     100 |     100 | 4
  db.ts                   |     100 |      100 |     100 |     100 | 
 src/components/auth      |   88.88 |       75 |     100 |   88.88 | 
  authControllers.ts      |   88.88 |       75 |     100 |   88.88 | 10,27
 src/components/helpers   |   78.57 |        0 |      70 |   78.57 | 
  CustomError.ts          |      25 |      100 |       0 |      25 | 4-6
  errorFactory.ts         |      60 |        0 |       0 |      60 | 5-8
  hashServices.ts         |     100 |      100 |     100 |     100 | 
  jwtServices.ts          |    90.9 |      100 |     100 |    90.9 | 16
 src/components/homeworks |      24 |        0 |       0 |   26.08 | 
  homeworksControllers.ts |   23.07 |        0 |       0 |   23.07 | 6-35
  homeworksServices.ts    |      25 |        0 |       0 |      30 | 6-30
 src/components/logger    |      60 |      100 |       0 |      60 | 
  loggerControllers.ts    |      60 |      100 |       0 |      60 | 6-7
  loggerServices.ts       |      60 |      100 |       0 |      60 | 5-7
 src/components/statuses  |      40 |      100 |       0 |   42.85 | 
  statusesControllers.ts  |    37.5 |      100 |       0 |    37.5 | 6-17
  statusesServices.ts     |   42.85 |      100 |       0 |      50 | 5-8
 src/components/subjects  |   43.33 |        0 |       0 |   44.82 | 
  subjectsControllers.ts  |   23.07 |        0 |       0 |   23.07 | 6-34
  subjectsRoutes.ts       |     100 |      100 |     100 |     100 | 
  subjectsServices.ts     |      30 |      100 |       0 |   33.33 | 5-23
 src/components/users     |   92.85 |    78.57 |     100 |   92.85 | 
  usersControllers.ts     |      88 |    78.57 |     100 |      88 | 11,14,43
  usersRoutes.ts          |     100 |      100 |     100 |     100 | 
  usersServices.ts        |   95.23 |      100 |     100 |   95.23 | 13
 src/middlewares          |   77.41 |    64.28 |      40 |   77.41 | 
  errorMiddleware.ts      |      50 |        0 |       0 |      50 | 5-6
  isAdmin.ts              |     100 |      100 |     100 |     100 | 
  isLoggedInMiddleware.ts |    90.9 |     87.5 |     100 |    90.9 | 14
  loggingMiddleware.ts    |      50 |      100 |       0 |      50 | 5-7
  notFoundMiddleware.ts   |      75 |      100 |       0 |      75 | 5
--------------------------|---------|----------|---------|---------|-------------------
```

Raport annab hea ülevaate sellest, millised failid on testitud ja millises ulatuses. Samuti näitab see, millised read on testitud ja millised mitte.
