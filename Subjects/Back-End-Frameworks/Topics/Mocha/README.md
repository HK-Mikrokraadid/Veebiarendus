# Mocha Testimisraamistik

Mocha on populaarne JavaScripti testimisraamistik, mis võimaldab kirjutada ja käivitada teste nii serveripoolses (Node.js) kui ka kliendipoolses (brauseris) keskkonnas. Mocha on paindlik ja laiendatav, pakkudes tuge mitmesugustele testimisstiilidele, sealhulgas BDD (Behavior-Driven Development) ja TDD (Test-Driven Development).

![Mocha](Mocha.webp)

Pildi allikas: Dall-E by OpenAI

- [Mocha Testimisraamistik](#mocha-testimisraamistik)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Mocha?](#mis-on-mocha)
  - [Mocha Eelised](#mocha-eelised)
  - [Mocha Paigaldamine ja Seadistamine](#mocha-paigaldamine-ja-seadistamine)
    - [1. Mocha Paigaldamine](#1-mocha-paigaldamine)
      - [Globaalne paigaldus](#globaalne-paigaldus)
      - [Projekti tasemel paigaldus](#projekti-tasemel-paigaldus)
    - [2. Testi Faili Loomine](#2-testi-faili-loomine)
  - [Testide Kirjutamine Mocha abil](#testide-kirjutamine-mocha-abil)
    - [Näide: Lihtne Test](#näide-lihtne-test)
      - [`sum.js` - Funktsioon, mida testime](#sumjs---funktsioon-mida-testime)
      - [`test/test.js` - Mocha test](#testtestjs---mocha-test)
    - [Testide Käivitamine](#testide-käivitamine)
  - [Asünkroonsed Testid](#asünkroonsed-testid)
    - [Näide: Asünkroonne Test Callbacks](#näide-asünkroonne-test-callbacks)
      - [`asyncFunction.js` - Asünkroonne funktsioon](#asyncfunctionjs---asünkroonne-funktsioon)
      - [`test/asyncTest.js` - Mocha test](#testasynctestjs---mocha-test)
    - [Näide: Asünkroonne Test Promises](#näide-asünkroonne-test-promises)
      - [`asyncPromise.js` - Asünkroonne funktsioon](#asyncpromisejs---asünkroonne-funktsioon)
      - [`test/asyncPromiseTest.js` - Mocha test](#testasyncpromisetestjs---mocha-test)
  - [Chai Asertsiooniraamatukogu Kasutamine](#chai-asertsiooniraamatukogu-kasutamine)
    - [Chai Paigaldamine](#chai-paigaldamine)
    - [Näide: Chai Kasutamine](#näide-chai-kasutamine)
      - [`test/chaiTest.js` - Mocha test Chai-ga](#testchaitestjs---mocha-test-chai-ga)
  - [Täiendavad Mocha Funktsioonid](#täiendavad-mocha-funktsioonid)
    - [Hooks](#hooks)
      - [Näide: Hookide Kasutamine](#näide-hookide-kasutamine)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on Mocha ja miks seda kasutatakse;
- paigaldama ja seadistama Mocha testimisraamistiku;
- kirjutama ja käivitama põhitaseme teste Mocha abil;
- kasutama assertsiooniraamatukogusid, nagu Chai, koos Mochaga.

## Mis on Mocha?

Mocha on JavaScripti testimisraamistik, mis on mõeldud asünkroonsete testide kirjutamiseks ja käivitamiseks. See pakub lihtsat ja paindlikku viisi testide korraldamiseks ja haldamiseks ning on hästi integreeritav teiste tööriistade ja raamistikega.

## Mocha Eelised

- **Paindlikkus:** Toetab erinevaid testimisstiile ja -meetodeid.
- **Asünkroonsus:** Lihtne asünkroonsete testide kirjutamine ja käivitamine.
- **Laiendatavus:** Integreerub hästi teiste tööriistade ja raamistikega, nagu Chai ja Sinon.
- **Hea dokumentatsioon ja kogukond:** Lai kasutajabaas ja rohkelt ressursse.

## Mocha Paigaldamine ja Seadistamine

### 1. Mocha Paigaldamine

Paigaldage Mocha globaalselt või projekti tasemel, kasutades npm-i.

#### Globaalne paigaldus

```bash
npm install --global mocha
```

#### Projekti tasemel paigaldus

```bash
npm install --save-dev mocha
```

### 2. Testi Faili Loomine

Looge projekti juurkausta kataloog nimega `test` ja selle sisse testifail, näiteks `test.js`.

```bash
mkdir test
cd test
touch test.js
```

## Testide Kirjutamine Mocha abil

Mocha kasutab BDD stiilis testide kirjutamiseks funktsioone `describe`, `it` ja `before`, `after`, `beforeEach`, `afterEach`.

### Näide: Lihtne Test

#### `sum.js` - Funktsioon, mida testime

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

#### `test/test.js` - Mocha test

```javascript
const assert = require('assert');
const sum = require('../sum');

describe('Sum Function', function() {
  it('should return 3 when the inputs are 1 and 2', function() {
    assert.strictEqual(sum(1, 2), 3);
  });

  it('should return -1 when the inputs are -2 and 1', function() {
    assert.strictEqual(sum(-2, 1), -1);
  });
});
```

### Testide Käivitamine

Käivitage testid, kasutades Mocha käsurealt.

```bash
npx mocha
```

## Asünkroonsed Testid

Mocha toetab asünkroonsete testide kirjutamist, kasutades callback-e või lubadusi (promises).

### Näide: Asünkroonne Test Callbacks

#### `asyncFunction.js` - Asünkroonne funktsioon

```javascript
function asyncFunction(callback) {
  setTimeout(() => {
    callback(null, 'Hello World');
  }, 1000);
}

module.exports = asyncFunction;
```

#### `test/asyncTest.js` - Mocha test

```javascript
const assert = require('assert');
const asyncFunction = require('../asyncFunction');

describe('AsyncFunction', function() {
  it('should return "Hello World" after 1 second', function(done) {
    asyncFunction(function(err, result) {
      assert.strictEqual(result, 'Hello World');
      done();
    });
  });
});
```

### Näide: Asünkroonne Test Promises

#### `asyncPromise.js` - Asünkroonne funktsioon

```javascript
function asyncPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World');
    }, 1000);
  });
}

module.exports = asyncPromise;
```

#### `test/asyncPromiseTest.js` - Mocha test

```javascript
const assert = require('assert');
const asyncPromise = require('../asyncPromise');

describe('AsyncPromise', function() {
  it('should return "Hello World" after 1 second', function() {
    return asyncPromise().then(result => {
      assert.strictEqual(result, 'Hello World');
    });
  });
});
```

## Chai Asertsiooniraamatukogu Kasutamine

Chai on populaarne assertsiooniraamatukogu, mida saab kasutada koos Mochaga. Chai toetab erinevaid assertsioonistiile, sealhulgas TDD ja BDD.

### Chai Paigaldamine

Paigaldage Chai projekti tasemel.

```bash
npm install --save-dev chai
```

### Näide: Chai Kasutamine

#### `test/chaiTest.js` - Mocha test Chai-ga

```javascript
const chai = require('chai');
const expect = chai.expect;
const sum = require('../sum');

describe('Sum Function', function() {
  it('should return 3 when the inputs are 1 and 2', function() {
    expect(sum(1, 2)).to.equal(3);
  });

  it('should return -1 when the inputs are -2 and 1', function() {
    expect(sum(-2, 1)).to.equal(-1);
  });
});
```

## Täiendavad Mocha Funktsioonid

### Hooks

Mocha pakub hook-e (`before`, `after`, `beforeEach`, `afterEach`), mis võimaldavad sooritada koodi enne ja pärast testide käivitamist.

#### Näide: Hookide Kasutamine

```javascript
describe('Hooks Example', function() {
  before(function() {
    // Sooritatakse enne kõiki teste
  });

  after(function() {
    // Sooritatakse pärast kõiki teste
  });

  beforeEach(function() {
    // Sooritatakse enne iga testi
  });

  afterEach(function() {
    // Sooritatakse pärast iga testi
  });

  it('test case 1', function() {
    // Testi kood
  });

  it('test case 2', function() {
    // Testi kood
  });
});
```
