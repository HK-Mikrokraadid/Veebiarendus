# Chai

Chai on `assertion`-teek JavaScripti jaoks, mida kasutatakse koos testiraamistikega nagu `Mocha`, `Jasmine` või `Jest`, et kirjutada testide jaoks `assertion`-eid. See pakub mitmeid stiile (nt. `expect`, `should`, `assert`), mis võimaldavad testides kontrollida, kas teatud tingimused on täidetud.

## Chai eelised

1. **Erinevad asserdioonistiilid:** Chai pakub `expect`, `should` ja `assert` stiile, mis võimaldavad valida endale sobiva ja intuitiivse asserdioonistiili.

2. **Kasutajasõbralik:** Chai `assertion`-id on loetavad ja kirjutatud inimkeelsele sarnaselt, mis muudab testid arusaadavaks.

3. **Paindlikkus:** Chai on laiendatav, võimaldades lisada uusi funktsioone ja pistikprogramme.

4. **Ühilduvus:** Ühildub paljude populaarsete testiraamistike ja vahenditega.

### Chai kasutamine TypeScriptiga

Kõigepealt veendu, et sul on Chai ja TypeScript paigaldatud. Kui ei, siis saad need paigaldada järgnevalt:

```bash
npm install chai @types/chai --save-dev
```

**Näide: Testi Kirjutamine Chai ja TypeScriptiga**

Eeldades, et sul on olemas testitav funktsioon, näiteks:

**app.ts**

```typescript
export const isEven = (num: number): boolean => {
  return num % 2 === 0;
};
```

**test/app.test.ts**

```typescript
import { expect } from 'chai';
import { isEven } from '../app';

describe('isEven Function', () => {
  it('should return true for even numbers', () => {
    expect(isEven(4)).to.be.true;
    expect(isEven(5)).to.be.false;
  });
});
```

Siin kasutatakse `expect` stiili `assertion` Chai teegist, mis võimaldab kirjutada `assertion`-eid, mis on loetavad ja lihtsalt mõistetavad.

**Testide Käivitamine**

Kui kasutad Mocha koos Chai'ga, lisage järgmine skript oma `package.json` faili:

```json
"scripts": {
  "test": "mocha -r ts-node/register 'test/**/*.ts'"
}
```

Käivita testid käsuga:

```bash
npm test
```

See seadistus võimaldab sul käivitada TypeScriptis kirjutatud teste, kasutades Mocha testiraamistikku ja Chai `assertion`-i teeki.

## Chai cheat sheet

- <https://devhints.io/chai>

## Chai ja ESLint

Kui kasutad ESLinti, siis võid saada järgmise veateate:

```bash
'expect' is not defined
```

Selle veateate likvideerimiseks on üks võimalus teha järgmised tegevused:

Paigalda pistikprogramm `eslint-plugin-chai-friendly`:

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
