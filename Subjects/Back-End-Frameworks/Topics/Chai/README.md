# Chai Asertsiooniraamatukogu

## Sissejuhatus

Chai on populaarne asertsiooniraamatukogu JavaScripti jaoks, mida kasutatakse koos testimisraamistikega nagu Mocha ja Jest. Chai pakub mitmesuguseid asertsioonistiile, sealhulgas TDD (Test-Driven Development) ja BDD (Behavior-Driven Development) stiile, mis teevad testide kirjutamise lihtsaks ja loetavaks.

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- Selgitama, mis on Chai ja miks seda kasutatakse.
- Paigaldama ja seadistama Chai asertsiooniraamatukogu.
- Kasutama erinevaid Chai asertsioone TDD ja BDD stiilis testide kirjutamiseks.
- Laiendama Chai funktsionaalsust pistikprogrammide abil.

## Mis on Chai?

Chai on asertsiooniraamatukogu, mis pakub mitmesuguseid meetodeid, et kontrollida testide tulemusi. See töötab hästi koos Mocha ja teiste JavaScripti testimisraamistikega, pakkudes paindlikke ja loetavaid asertsioone.

### Chai Eelised

- **Paindlikkus:** Toetab mitmesuguseid asertsioonistiile.
- **Loetavus:** Asertsioonid on loetavad ja intuitiivsed.
- **Laiendatavus:** Saab laiendada pistikprogrammide abil.

## Chai Paigaldamine ja Seadistamine

### 1. Chai Paigaldamine

Paigaldage Chai projekti tasemel, kasutades npm-i või yarn-i.

```bash
npm install --save-dev chai
```

Või, kui kasutate yarn-i:

```bash
yarn add --dev chai
```

### 2. Testimisraamistiku Paigaldamine

Selles näites kasutame Mocha, kuid võite kasutada ka Jest või mõnda muud testimisraamistikku.

```bash
npm install --save-dev mocha
```

Lisage `package.json` faili skript, et käivitada teste Mochaga.

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

### 3. Testi Faili Loomine

Looge projekti juurkausta kataloog nimega `test` ja selle sisse testifail, näiteks `sum.test.js`.

```bash
mkdir test
cd test
touch sum.test.js
```

## Testide Kirjutamine Chai abil

### Näide: Lihtne Test TDD Stiilis

#### `sum.js` - Funktsioon, mida testime

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

#### `test/sum.test.js` - Mocha test Chai-ga

```javascript
const chai = require('chai');
const assert = chai.assert;
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

### Näide: Lihtne Test BDD Stiilis

#### `test/sum.test.js` - Mocha test Chai-ga

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

### Testide Käivitamine

Käivitage testid, kasutades Mocha käsurealt.

```bash
npm test
```

## Chai Asertsioonistiilid

Chai toetab kolme erinevat asertsioonistiili: Assert, Expect ja Should.

### 1. Assert Stiil

```javascript
const chai = require('chai');
const assert = chai.assert;

assert.strictEqual(sum(1, 2), 3, 'sum of 1 and 2 should be 3');
```

### 2. Expect Stiil

```javascript
const chai = require('chai');
const expect = chai.expect;

expect(sum(1, 2)).to.equal(3, 'sum of 1 and 2 should be 3');
```

### 3. Should Stiil

```javascript
const chai = require('chai');
chai.should();

sum(1, 2).should.equal(3, 'sum of 1 and 2 should be 3');
```

## Chai Laiendamine

Chai saab laiendada pistikprogrammide abil, et lisada täiendavat funktsionaalsust.

### Näide: Chai-as-Promised

Chai-as-Promised on pistikprogramm, mis võimaldab testida lubadusi (promises).

#### Paigaldamine

```bash
npm install --save-dev chai-as-promised
```

#### Kasutamine

```javascript
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 1000);
  });
}

describe('Async Function', function() {
  it('should return "Hello, World!" after 1 second', function() {
    return expect(asyncFunction()).to.eventually.equal('Hello, World!');
  });
});
```

## Täiendavad Näited ja Parimad Praktikad

### Objekti Ekvivalentsuse Kontrollimine

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

expect(obj1).to.deep.equal(obj2);
```

### Vea Käivitamise Kontrollimine

```javascript
function badFunction() {
  throw new Error('Something went wrong');
}

expect(badFunction).to.throw('Something went wrong');
```

### Asünkroonsete Funktsioonide Testimine

```javascript
function asyncFunction(callback) {
  setTimeout(() => {
    callback(null, 'Hello, World!');
  }, 1000);
}

describe('Async Function', function() {
  it('should return "Hello, World!" after 1 second', function(done) {
    asyncFunction(function(err, result) {
      expect(result).to.equal('Hello, World!');
      done();
    });
  });
});
```
