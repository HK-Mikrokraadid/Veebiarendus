# Jest Testimisraamistik

## Sissejuhatus

Jest on populaarne ja võimas testimisraamistik, mida kasutatakse peamiselt JavaScripti ja Reacti projektide testimiseks. Sellel on rikkalik funktsionaalsus, mis võimaldab kirjutada ja käivitada üksuse, integreerimise ja otsast-otsani (end-to-end) teste. Jest on loodud lihtsaks ja hõlpsasti kasutatavaks ning pakub sisseehitatud tugi erinevatele funktsioonidele, nagu mokeerimine ja ajutine keskkond.

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- Selgitama, mis on Jest ja miks seda kasutatakse.
- Paigaldama ja seadistama Jesti testimisraamistiku.
- Kirjutama ja käivitama põhitaseme teste Jesti abil.
- Kasutama Jesti sisseehitatud funktsioone, nagu mokeerimine ja ajutine keskkond.

## Mis on Jest?

Jest on JavaScripti testimisraamistik, mis on loodud lihtsaks ja hõlpsasti kasutatavaks. See on välja töötatud Facebooki poolt ja sobib suurepäraselt Reacti rakenduste testimiseks, kuigi seda saab kasutada ka muude JavaScripti projektide testimiseks. Jest pakub rikkalikku funktsionaalsust, sealhulgas mokeerimist, ajutisi keskkondi ja laiendatavust.

## Jest Eelised

- **Kõik-ühes lahendus:** Jest sisaldab kõike, mida vajate testimiseks, ilma lisatööriistu installimata.
- **Lihtne seadistamine:** Jest on lihtne seadistada ja kasutusele võtta.
- **Kiirus:** Jest suudab käivitada teste paralleelselt, mis muudab testimise kiireks ja tõhusaks.
- **Sisseehitatud mokeerimine:** Jest pakub sisseehitatud tugi mokeerimiseks, mis muudab keerukate testide kirjutamise lihtsamaks.

## Jest Paigaldamine ja Seadistamine

### 1. Jest Paigaldamine

Paigaldage Jest projekti tasemel, kasutades npm-i või yarn-i.

```bash
npm install --save-dev jest
```

Või, kui kasutate yarn-i:

```bash
yarn add --dev jest
```

### 2. Skripti Lisamine

Lisage `package.json` faili skript, et käivitada teste Jestiga.

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### 3. Testi Faili Loomine

Looge projekti juurkausta kataloog nimega `__tests__` ja selle sisse testifail, näiteks `sum.test.js`.

```bash
mkdir __tests__
cd __tests__
touch sum.test.js
```

## Testide Kirjutamine Jesti abil

### Näide: Lihtne Test

#### `sum.js` - Funktsioon, mida testime

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

#### `__tests__/sum.test.js` - Jest test

```javascript
const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -2 + 1 to equal -1', () => {
  expect(sum(-2, 1)).toBe(-1);
});
```

### Testide Käivitamine

Käivitage testid, kasutades Jest käsurealt.

```bash
npm test
```

## Asünkroonsed Testid

Jest toetab asünkroonsete testide kirjutamist, kasutades callback-e, lubadusi (promises) või `async`/`await` süntaksit.

### Näide: Asünkroonne Test Promises

#### `asyncFunction.js` - Asünkroonne funktsioon

```javascript
function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World');
    }, 1000);
  });
}

module.exports = asyncFunction;
```

#### `__tests__/asyncFunction.test.js` - Jest test

```javascript
const asyncFunction = require('../asyncFunction');

test('async function returns "Hello World" after 1 second', () => {
  return asyncFunction().then(data => {
    expect(data).toBe('Hello World');
  });
});
```

### Näide: Asünkroonne Test `async`/`await`

#### `__tests__/asyncFunctionAsync.test.js` - Jest test

```javascript
const asyncFunction = require('../asyncFunction');

test('async function returns "Hello World" after 1 second', async () => {
  const data = await asyncFunction();
  expect(data).toBe('Hello World');
});
```

## Mokeerimine Jesti abil

Jest pakub sisseehitatud tugi mokeerimiseks, mis võimaldab mokeerida mooduleid ja funktsioone, et testida koodi isoleeritult.

### Näide: Funktsiooni Mokeerimine

#### `fetchData.js` - Funktsioon, mida testime

```javascript
const axios = require('axios');

async function fetchData() {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
}

module.exports = fetchData;
```

#### `__tests__/fetchData.test.js` - Jest test mokeerimisega

```javascript
const fetchData = require('../fetchData');
const axios = require('axios');

jest.mock('axios');

test('fetches data from API', async () => {
  const data = { name: 'John Doe' };
  axios.get.mockResolvedValue({ data });

  const result = await fetchData();
  expect(result).toEqual(data);
});
```

## Ajutine Keskkond Jesti abil

Jest pakub hook-e (`beforeEach`, `afterEach`, `beforeAll`, `afterAll`), mis võimaldavad sooritada koodi enne ja pärast testide käivitamist.

### Näide: Hookide Kasutamine

```javascript
let data;

beforeAll(() => {
  data = { name: 'John Doe' };
});

afterAll(() => {
  data = null;
});

test('data name is John Doe', () => {
  expect(data.name).toBe('John Doe');
});
```
