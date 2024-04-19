# Supertest

[`Supertest`](https://www.npmjs.com/package/supertest) on Node.js raamistik, mida kasutatakse HTTP-põhiste rakenduste, nagu Express.js API-de, testimiseks. See on ehitatud [`superagent`](https://github.com/ladjs/superagent) HTTP-kliendi peale ja pakub lihtsat ja paindlikku API-de HTTP-päringute tegemiseks ja vastuste kontrollimiseks testide raames.

## Supertest'i eelised võrreldes teiste raamistikega

- **Lihtne integreerida:** Supertest integreerub hästi olemasolevate Node.js testimisraamistikega nagu [`Mocha`](../mocha/README.md), `Jest` või `Jasmine`, võimaldades testida HTTP-päringuid ilma keerulise seadistuseta.
- **Ei vaja serveri käivitamist:** Supertest võimaldab testida Express.js rakendusi ilma et peaks serveri eraldi käivitama. See lihtsustab testide seadistamist ja vähendab testide jooksutamise aega.
- **Rikkalikud päringu võimalused:** Võimaldab teha erinevaid HTTP-päringuid (GET, POST, PUT, DELETE jne), lisada päised, kehad ja päringu parameetrid, mis on vajalikud realistlike stsenaariumide testimiseks.
- **Kergesti loetavad `assertionid`:** Supertest'i kasutamine koos `assertion`-i teekidega nagu [`Chai`](../chai/README.md) võimaldab kirjutada kergesti loetavaid ja arusaadavaid teste.
- **Toetab asünkroonseid teste:** Võimaldab kirjutada asünkroonseid teste, mis on vajalikud kaasaegsetes Node.js rakendustes. Näiteks on võimalik sellisel viisil testida API-sid, mis kasutavad andmebaasi.

## Kuidas Supertest'i Kasutada

Supertest'i kasutamine koos TypeScriptiga Express.js API testimisel on sarnane selle kasutamisega JavaScriptis, kuid tuleb arvestada mõningate TypeScripti spetsiifikatega. Eeldan, et sul on juba paigaldatud TypeScript, Mocha, Chai ja Supertest. Kui ei, siis saad need paigaldada järgnevalt:

```bash
npm install typescript mocha chai supertest @types/mocha @types/chai @types/supertest --save-dev
```

Lisaks peab sul olema TypeScripti konfiguratsioonifail `tsconfig.json` projektis olemas.

### TypeScripti Näide Supertestiga

**app.ts** (sinu Express.js rakendus)

```typescript
import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([{ name: 'John Doe' }, { name: 'Jane Doe' }]);
});

export default app;
```

**test/users.test.ts** (testifail)

```typescript
import { expect } from 'chai';
import request from 'supertest';
import app from '../app';

describe('GET /users', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
```

### Testide Käivitamine TypeScriptiga

Testide käivitamiseks võid kasutada `ts-node`, mis võimaldab otse TypeScripti faile käivitada, või kompileerida TypeScripti kood JavaScriptiks ja seejärel käivitada tulemuse. Kui kasutad `ts-node`, siis võid lisada järgmise skripti oma `package.json` faili:

```json
"scripts": {
  "test": "mocha -r ts-node/register 'test/**/*.ts'"
}
```

Vahel võib juhtuda, et testid jäävad mingil põhjusel `rippuma`, siis võid lisada `test` skripti lõppu `--exit` parameetri, mis sunnib Mocha protsessi peatuma:

```json
"scripts": {
  "test": "mocha -r ts-node/register 'test/**/*.ts' --exit"
}
```

Seejärel saad testid käivitada käsuga:

```bash
npm test
```

See käsk käivitab Mocha, registreerib `ts-node` käivitaja ja käivitab kõik `.ts` laiendiga testifailid kaustas `test`.

### Märkused

- Veendu, et su TypeScripti konfiguratsioon on õigesti seadistatud ja sobib sinu projektiga.
- Kui kasutad muid lintimis- või vormindamisvahendeid nagu ESLint või Prettier, veendu, et need on samuti TypeScriptiga ühilduvad.