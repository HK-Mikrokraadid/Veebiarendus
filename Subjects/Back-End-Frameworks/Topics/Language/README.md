# Keele valik Express API-s

Express API-s keelevaliku rakendamiseks võid kasutada rahvusvahelistamise (i18n) raamistikke nagu `i18next`, `i18next-express-middleware` ja `i18next-http-backend`. Need tööriistad võimaldavad hallata mitmekeelseid tõlkeid ja määrata keele vastavalt kliendi valikule.

## Paigalda vajalikud paketid

Paigalda `i18next`, `i18next-express-middleware` ja `i18next-http-backend`:

```sh
npm install i18next i18next-express-middleware i18next-http-backend
```

## Konfigureeri i18next

Loo `i18next.js` fail, mis sisaldab i18next konfiguratsiooni:

```javascript
// i18next.js
const i18n = require('i18next');
const Backend = require('i18next-http-backend');
const middleware = require('i18next-express-middleware');

i18n
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'en', // vaikekeel
    preload: ['en', 'et'], // eellaaditud keeled
    backend: {
      loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json'
    }
  });

module.exports = i18n;
```

## Loo tõlke failid

Loo kaust `locales` ja selle sees kaustad iga keele jaoks, näiteks `en` ja `et`. Loo nendes kaustades tõlkefailid, näiteks `translation.json`:

### `locales/en/translation.json`

```json
{
  "welcome": "Welcome",
  "message": "This is an internationalized message."
}
```

### `locales/et/translation.json`

```json
{
  "welcome": "Tere tulemast",
  "message": "See on rahvusvaheline sõnum."
}
```

## Lisa i18next middleware Express API-sse

Konfigureeri Express API kasutama i18next-i:

```javascript
// server.js
const express = require('express');
const i18next = require('./i18next');
const middleware = require('i18next-express-middleware');

const app = express();

app.use(middleware.handle(i18next));

// Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tõlgitud vastuse näide
app.get('/api', (req, res) => {
  const welcomeMessage = req.t('welcome');
  const message = req.t('message');
  res.json({ welcomeMessage, message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

## Kasuta keelevalikut kliendipoolselt

Kliendipoolselt saab keele määrata HTTP päise `Accept-Language` abil või URL-i parameetri abil.

### Näide HTTP päise kasutamisest

Kui teed päringu API-le, lisa päis `Accept-Language`:

```sh
curl -H "Accept-Language: et" http://localhost:5000/api
```

See peaks tagastama eestikeelse vastuse:

```json
{
  "welcomeMessage": "Tere tulemast",
  "message": "See on rahvusvaheline sõnum."
}
```

### Näide URL-i parameetri kasutamisest

Kui soovid kasutada URL-i parameetrit keele määramiseks, saad seda konfigureerida i18next middleware abil.

```javascript
// i18next.js (lisame lookupQuery)
i18n
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    preload: ['en', 'et'],
    backend: {
      loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json'
    },
    detection: {
      order: ['querystring', 'cookie', 'header'],
      caches: ['cookie'],
      lookupQuerystring: 'lng'
    }
  });

module.exports = i18n;
```

Nüüd saad määrata keele URL-i parameetri abil:

```sh
curl http://localhost:5000/api?lng=et
```

See peaks samuti tagastama eestikeelse vastuse.

## Kokkuvõte

Selles näites kasutasime `i18next`-i ja `i18next-express-middleware`-i, et lisada rahvusvahelistamise tugi Express API-sse. Kasutasime `Accept-Language` päist ja URL-i parameetrit keele valikuks. See võimaldab pakkuda mitmekeelseid vastuseid vastavalt kasutaja eelistustele.
