# Keskkonnamuutujad, ehk Environmental Variables

- [Keskkonnamuutujad, ehk Environmental Variables](#keskkonnamuutujad-ehk-environmental-variables)
  - [Õpiväljundid](#õpiväljundid)
  - [Keskkonnamuutujate kasutamine Node.js-is](#keskkonnamuutujate-kasutamine-nodejs-is)

## Õpiväljundid

Peale selle peatüki läbimist:

- oskad seadistada keskkonnamuutujaid Node.js-is
- oskad kasutada keskkonnamuutujaid Node.js-is

Keskkonnamuutujad on muutujad, mis on saadaval kõigile protsessidele, mis töötavad arvutis. Keskkonnamuutujad on tavaliselt kasutatavad, et määrata ära, kus asuvad programmid, mida kasutatakse käsurealt. Näiteks, kui kirjutada käsureale `python`, siis otsitakse ülesse `node` fail, mis on määratud keskkonnamuutujas `PATH`. Kui `PATH` keskkonnamuutuja ei ole määratud, siis ei leita `node` faili ja käsureal kuvatakse veateade.

Node.js-is saab keskkonnamuutujaid kasutada näiteks selleks, et määrata ära erinevad seadistused ja parameetrid, mis on rakenduse jaoks vajalikud. Näiteks, kui meil on rakendus, mis kasutab andmebaasi, siis me saame määrata andmebaasi parameetrid keskkonnamuutujatesse ja kasutada neid rakenduses. See on kasulik, kui meil on mitu erinevat keskkonda, kus rakendus töötab. Näiteks, kui meil on arenduskeskkond, kus me arendame rakendust ja tootmiskeskkond, kus rakendus töötab. Kui me kasutame keskkonnamuutujaid, siis me saame määrata erinevad andmebaasi parameetrid erinevates keskkondades ja me ei pea muutma rakenduse koodi, et muuta andmebaasi parameetreid.

Oluline on meeles pidada, et kui me kasutame keskkonnamuutujate hoidmiseks faili (mis on tavaliselt `.env` fail), siis me ei tohi seda faili lisada versioonihaldusesse. Kui me lisame faili versioonihaldusesse, siis meie keskkonnamuutujad on avalikud ja kõik saavad neid näha. See tähendab, et kõik saavad ligi meie andmebaasile, meie paroolidele, meie API võtmetele jne. Selleks, et seda vältida, tuleb `.env` fail lisada `.gitignore` faili.

## Keskkonnamuutujate kasutamine Node.js-is

Keskkonnamuutujaid saab kasutada Node.js-is kasutada mitmel viisil. Üks variant on salvestada muutujad eraldi faili ja kasutada neid rakenduses. Näiteks, kui meil on `.env` fail, mis sisaldab järgmist:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=secret
```

Siis selleks, et neid muutujaid kasutada, peame me esmalt installima `dotenv` mooduli:

```bash
npm install dotenv
```

Seejärel saame me kasutada `dotenv` moodulit, et laadida `.env` faili muutujad keskkonda:

```javascript
require("dotenv").config();
```

Või TypeScripti puhul:

```typescript
import dotenv from "dotenv";
dotenv.config();
```

Seejärel saame me kasutada muutujaid rakenduses:

```javascript
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
```

Teine variant on kasutada keskkonnamuutujaid otse käsurealt. Näiteks, kui meil on vaja rakendusele edastada näiteks pordi number, millel rakendus töötab, siis me saame seda teha järgmiselt:

```bash
PORT=3000 node index.js
```

Seejärel saame me kasutada muutujaid rakenduses:

```javascript
const port = process.env.PORT;
```

Sellisel moel saame me näiteks öelda rakendusele, kas ta töötab arenduskeskkonnas või tootmiskeskkonnas või testikeskkonnas:

```bash
NODE_ENV=development node index.js
```

```bash
NODE_ENV=production node index.js
```

```bash
NODE_ENV=test node index.js
```

Näiteks, kui me tahame oma rakendusele lisada automaattestid ja me tahame, et rakendus kasutaks testandmebaasi, siis me saame seda teha järgmiselt:

```bash
NODE_ENV=test node index.js
```

```javascript
const env = process.env.NODE_ENV;
const db = env === "test" ? "testdb" : "db";
```

Kui soovime lisada keskkonnamuutuja `package.json` faili, siis kõige mugavam on seda teha, kasutades `cross-env` moodulit:

```bash
npm install cross-env
```

Seejärel saame me lisada keskkonnamuutuja `package.json` faili:

```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=production node index.js"
  }
}
```

`cross-env` moodulit on vaja selleks, et keskkonnamuutujad töötaksid sarnaselt erinevates operatsioonisüsteemides. Näiteks, kui me kasutame Windowsi, siis me ei saa kasutada `NODE_ENV=production node index.js` käsku, sest Windowsis on käskude eraldajaks `&` ja mitte `&&`. `cross-env` moodul muudab selle käsu töötavaks ka Windowsis.
