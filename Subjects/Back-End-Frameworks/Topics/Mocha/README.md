# Mocha

Mocha on paindlik ja populaarne JavaScripti testiraamistik, mida kasutatakse peamiselt Node.js keskkonnas, aga ka brauseripõhistes projektides. Mocha võimaldab kirjutada asünkroonseid teste lihtsalt ja loetavalt, toetades erinevaid `assert`-teeke, nagu `Chai`, `Sinon`, ja `Jest`.

## Mocha eelised

1. **Paindlikkus ja konfigureeritavus:** Mocha on väga konfigureeritav, võimaldades valida erinevaid väljundformaatide (reporters), testimiskeskkondi ja asünkroonse testimise viise.

2. **Rikkalik ökosüsteem:** Tänu laiale kasutajaskonnale on Mocha'l palju pistikprogramme, laiendusi ja integreeritud tööriistu.

3. **Asünkroonne tugi:** Mocha toetab asünkroonset testimist, mis on oluline Node.js keskkonnas.

4. **Lihtne ja loetav sündmuste käsitlemine:** Mocha kasutab kirjeldavaid `describe` ja `it` blokke, muutes testid loetavaks ja lihtsalt mõistetavaks.

### Näide: TypeScriptiga mocha kasutamine

Eeldan, et sul on juba paigaldatud TypeScript, Mocha ja Chai. Kui ei, siis saad need paigaldada järgnevalt:

```bash
npm install typescript mocha chai @types/mocha @types/chai --save-dev
```

**1. Testitava funktsiooni loogika (Näide: app.ts)**

```typescript
export const add = (a: number, b: number): number => {
  return a + b;
};
```

**2. Testi fail (Näide: test/app.test.ts)**

```typescript
import { expect } from 'chai';
import { add } from '../app';

describe('Add Function', () => {
  it('should add two numbers', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
});
```

**3. Mocha ja TypeScripti konfiguratsioon (tsconfig.json)**
Veendu, et su `tsconfig.json` fail sisaldab järgmist:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./build",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*", "test/**/*"]
}
```

**4. Testide käivitamise skript (package.json)**
Lisa oma `package.json` faili järgmine skript:

```json
"scripts": {
  "test": "mocha -r ts-node/register 'test/**/*.ts'"
}
```

**5. Testide käivitamine**
Käivita testid käsuga:

```bash
npm test
```

See käsk kasutab `ts-node` registreerijat, et käivitada TypeScripti testifailid otse ilma neid eelnevalt kompileerimata.

Tulemus peaks olema järgmine:

```bash
> mocha-ts-example@1.0.0 test /Users/username/mocha-ts-example
> mocha -r ts-node/register 'test/**/*.ts'
  Add Function
    ✓ should add two numbers
  1 passing (8ms)
```

## Mocha hooks

Mocha pakub mitmeid `hook`-e, mis võimaldavad testide käivitamise tsüklit kontrollida. Mocha `hook`-id on `before`, `beforeEach`, `after` ja `afterEach`. `before` ja `after` `hook`-id käivitatakse enne ja pärast testide käivitamist, vastavalt. `beforeEach` ja `afterEach` `hook`-id käivitatakse enne ja pärast iga testi käivitamist, vastavalt.

Näiteks võimaldavad `hook`-id luua andmebaasi kirjed või kustutada hiljem andmebaasist testide poolt tekitatud andmed jne.

```javascript
import {
  describe, before, after, beforeEach, afterEach,
} from 'mocha';


describe('hooks', () => {
  before(() => {
    // käivitatakse ühe korra enne esimest testi selles blokis
  });

  after(() => {
    // käivitatakse ühe korra pärast viimast testi selles blokis
  });

  beforeEach(() => {
    // käivitatakse enne igat testi selles blokis
  });

  afterEach(() => {
    // käivitatakse peale igat testi selles blokis
  });

  // testid
});
```