---
marp: true

---
# Veebiarendus

## Back-End arendus

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänased teemad

- [Node API automaattestimine](../../../Subjects/Back-End-Frameworks/Topics/Testing/README.md)

---

## Express API automaattestimine

---

## Testimine

Testimine on protsess, mille käigus hinnatakse tarkvara kvaliteeti, kontrollides selle funktsionaalsust, jõudlust ja turvalisust. Testimise eesmärk on leida vead ja puudused ning kinnitada, et tarkvara töötab ootuspäraselt ja vastab määratletud nõuetele.

---

## Testimise liigid

- Ühiktestimine (Unit Testing)
- Integratsioonitestimine (Integration Testing)
- Süsteemitestimine (System Testing)
- Vastuvõtutestimine (Acceptance Testing)
- jne

---

## Testimise meetodid

- Käsitsi testimine
- Automaatne testimine

---

## Node.js testiraamistikud

- Mocha
- Jest
- SuperTest
- jne

---

## Mocha

Mocha on paindlik ja lihtne testiraamistik Node.js jaoks, mis võimaldab teste kirjutada ja käivitada.

---

## Mocha paigaldamine ja kasutamine

```bash
npm install mocha
```

Loo projekti juurkausta kataloog nimega `test` ja selle sisse testifail, näiteks `test.js`.

---

## Mocha testide struktuur

Mocha kasutab BDD stiilis testide kirjutamiseks funktsioone `describe`, `it` ja `before`, `after`, `beforeEach`, `afterEach`.

`describe` funktsioon võimaldab teste grupeerida ja kirjeldada.

`it` funktsioon kirjeldab üksikuid teste.

---

## Mocha testide struktuuri näide

```javascript
describe('Testi grupi nimetus', function() {
  it('Testi kirjeldus', function() {
    // Testi kood
  });
  it('Testi kirjeldus', function() {
    // Testi kood
  });
});

```

---

## Mocha testide näide

```javascript
const assert = require('assert');
const sum = require('./sum');

describe('sum', () => {
  it('should return 3 when the input is 1 and 2', () => {
    assert.strictEqual(sum(1, 2), 3);
  });

  it('should return 5 when the input is 2 and 3', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  it('should return 0 when the input is 0 and 0', () => {
    assert.strictEqual(sum(0, 0), 0);
  });
});
```

> `assert` on Node.js standardne moodul, mis võimaldab teha 'väiteid'.

---

## Chai

Chai on populaarne asertsiooniraamatukogu JavaScripti jaoks, mida kasutatakse koos testimisraamistikega nagu Mocha ja Jest.

---

## Chai paigaldamine

```bash
npm install chai
```

---

## Chai kasutamine

```javascript
it('should return 3 when the input is 1 and 2', () => {
  expect(sum(1, 2)).to.equal(3);
});
```

---

## Chai asertsioonistiilid

- `expect`
- `should`
- `assert`

Chai cheatsheet: <https://devhints.io/chai>

---

## Expect asertsioonistiil

```javascript
expect(object)
  .to.equal(expected)
  .to.deep.equal(expected)
  .to.be.a('string')
  .to.include(val)
  .be.ok(val)
  .be.true
  .be.false
  .to.exist
  .to.be.null
  .to.be.undefined
  .to.be.empty
  .to.be.arguments
  .to.be.function
  .to.be.instanceOf
  .to.have.property
```

---

## Supertest

SuperTest on Node.js raamistik, mis võimaldab testida HTTP päringuid ja vastuseid.

---

## Supertest'i eelised võrreldes teiste raamistikega

- Lihtne integreerida
- Ei vaja serveri käivitamist
- Rikkalikud päringu võimalused
- Kergesti loetavad `assertionid`
- Toetab asünkroonseid teste

---

## Supertest paigaldamine

```bash
npm install supertest
```

---

## Supertest kasutamine

```javascript
const chai = require('chai');
const request = require('supertest');
const app = require('../app');
const { expect } = chai;

describe('GET /ping', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
```

---

## Eeltöö

Enne, kui saame hakata oma rakendusele test kirjutama, peame oma rakendust veel natukene struktureerima. Nimelt tuleb selleks, et me saaksime API-t automaatselt testida, eraldada API loomise kood ja API käivitamise kood, kuna testimine eeldab, et API on eraldi moodulina kasutatav.

---

## Struktureerimine

Loome oma projekti juurkausta eraldi faili `server.js`, kuhu tõstame `app.js` failist selle osa, mis käivitab serveri.

```javascript
const app = require('./app');

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

See tähendab, et `app.js` failis on ainult API loomise kood ja see tuleb sealt ka eraldi eksportida.

---

## Supertesti testide kirjutamine

```javascript
const request = require('supertest');
const { expect } = require('chai');
const { describe, it } = require('mocha');

const app = require('../app');

const okResponse = {
  success: true,
  message: 'pong',
};

describe('GET /ping', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/ping');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(okResponse);
  });
});
```

---

## Kodune töö

- Lisa oma API-le automaattestid nii palju kui võimalik
