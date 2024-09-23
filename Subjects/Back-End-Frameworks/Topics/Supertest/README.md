# Supertest: Testimine HTTP Päringutega

## Sissejuhatus

Supertest on JavaScripti teek, mida kasutatakse HTTP päringute testimiseks Node.js keskkonnas. See on eriti kasulik, kui testite oma API-de lõpp-punkte, kuna see võimaldab lihtsalt saata HTTP päringuid ja kontrollida vastuseid. Supertesti saab kasutada koos populaarsete testimisraamistikega nagu Mocha ja Jest.

- [Supertest: Testimine HTTP Päringutega](#supertest-testimine-http-päringutega)
  - [Sissejuhatus](#sissejuhatus)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Supertest?](#mis-on-supertest)
  - [Supertesti Paigaldamine ja Seadistamine](#supertesti-paigaldamine-ja-seadistamine)
    - [1. Supertesti Paigaldamine](#1-supertesti-paigaldamine)
    - [2. Testimisraamistiku Paigaldamine](#2-testimisraamistiku-paigaldamine)
    - [3. Lihtsa Expressi Rakenduse Loomine](#3-lihtsa-expressi-rakenduse-loomine)
      - [`app.js` - Expressi rakendus](#appjs---expressi-rakendus)
      - [`server.js` - Serveri käivitamine](#serverjs---serveri-käivitamine)
  - [Testide Kirjutamine Supertestiga](#testide-kirjutamine-supertestiga)
    - [Näide: Lihtne Test](#näide-lihtne-test)
      - [`__tests__/app.test.js`](#__tests__apptestjs)
    - [Näide: POST Päringu Testimine](#näide-post-päringu-testimine)
      - [`__tests__/app.test.js`](#__tests__apptestjs-1)
    - [Testide Käivitamine](#testide-käivitamine)
  - [Täiendavad Näited ja Parimad Praktikad](#täiendavad-näited-ja-parimad-praktikad)
    - [1. Parameetrite Kontrollimine](#1-parameetrite-kontrollimine)
      - [`app.js` - Uuendatud](#appjs---uuendatud)
      - [`__tests__/app.test.js`](#__tests__apptestjs-2)
    - [2. Päiste Kontrollimine](#2-päiste-kontrollimine)
      - [`app.js` - Uuendatud](#appjs---uuendatud-1)
      - [`__tests__/app.test.js`](#__tests__apptestjs-3)
    - [3. Veakäsitlus](#3-veakäsitlus)
      - [`app.js` - Uuendatud](#appjs---uuendatud-2)
      - [`__tests__/app.test.js`](#__tests__apptestjs-4)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- Selgitama, mis on Supertest ja miks seda kasutatakse.
- Paigaldama ja seadistama Supertesti testide kirjutamiseks.
- Kirjutama ja käivitama HTTP päringutega seotud teste, kasutades Supertesti.
- Kasutama Supertesti koos testimisraamistikega nagu Jest.

## Mis on Supertest?

Supertest on teek, mis võimaldab teha HTTP päringuid Node.js serveritele ja kontrollida vastuseid. See on loodud lihtsaks ja intuitiivseks, pakkudes mitmeid funktsioone, mis teevad API testimise lihtsaks ja tõhusaks.

## Supertesti Paigaldamine ja Seadistamine

### 1. Supertesti Paigaldamine

Paigaldage Supertest projekti tasemel, kasutades npm-i või yarn-i.

```bash
npm install --save-dev supertest
```

Või, kui kasutate yarn-i:

```bash
yarn add --dev supertest
```

### 2. Testimisraamistiku Paigaldamine

Selles näites kasutame Mocha-t, kuid võite kasutada ka mõnda muud testimisraamistikku.

```bash
npm install --save-dev mocha
```

Lisage `package.json` faili skript, et käivitada teste Mocha-ga.

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

### 3. Lihtsa Expressi Rakenduse Loomine

Loome lihtsa Expressi rakenduse, mida testime Supertesti abil.

#### `app.js` - Expressi rakendus

```javascript
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.post("/data", (req, res) => {
  res.status(201).send({ message: "Data received" });
});

module.exports = app;
```

#### `server.js` - Serveri käivitamine

```javascript
const app = require("./app");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## Testide Kirjutamine Supertestiga

### Näide: Lihtne Test

Loome testi, et kontrollida GET päringu vastust `/hello` lõpp-punktis.

#### `__tests__/app.test.js`

```javascript
const request = require("supertest");
const app = require("../app");

describe("GET /hello", () => {
  it('should return "Hello, World!"', async () => {
    const response = await request(app).get("/hello");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});
```

### Näide: POST Päringu Testimine

Lisame testi, et kontrollida POST päringu vastust `/data` lõpp-punktis.

#### `__tests__/app.test.js`

```javascript
const request = require("supertest");
const app = require("../app");

describe("GET /hello", () => {
  it('should return "Hello, World!"', async () => {
    const response = await request(app).get("/hello");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});

describe("POST /data", () => {
  it('should return "Data received"', async () => {
    const response = await request(app).post("/data").send({ name: "John" });
    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Data received");
  });
});
```

### Testide Käivitamine

Käivitage testid, kasutades Jest käsurealt.

```bash
npm test
```

## Täiendavad Näited ja Parimad Praktikad

### 1. Parameetrite Kontrollimine

Testige, kuidas API käsitleb URL parameetreid ja päringupäringuid.

#### `app.js` - Uuendatud

```javascript
app.get("/user/:id", (req, res) => {
  res.status(200).send({ id: req.params.id });
});
```

#### `__tests__/app.test.js`

```javascript
describe("GET /user/:id", () => {
  it("should return the user id", async () => {
    const userId = "12345";
    const response = await request(app).get(`/user/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(userId);
  });
});
```

### 2. Päiste Kontrollimine

Testige, kuidas API käsitleb HTTP päiseid.

#### `app.js` - Uuendatud

```javascript
app.get("/headers", (req, res) => {
  res.status(200).set("X-Custom-Header", "value").send("Headers");
});
```

#### `__tests__/app.test.js`

```javascript
describe("GET /headers", () => {
  it("should return custom header", async () => {
    const response = await request(app).get("/headers");
    expect(response.status).toBe(200);
    expect(response.headers["x-custom-header"]).toBe("value");
  });
});
```

### 3. Veakäsitlus

Testige, kuidas API käsitleb vigu ja vigaseid päringuid.

#### `app.js` - Uuendatud

```javascript
app.get("/error", (req, res) => {
  res.status(500).send({ error: "Something went wrong" });
});
```

#### `__tests__/app.test.js`

```javascript
describe("GET /error", () => {
  it("should return an error", async () => {
    const response = await request(app).get("/error");
    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Something went wrong");
  });
});
```
