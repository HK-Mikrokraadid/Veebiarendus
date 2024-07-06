# Redis Cache Express Rakenduses

Redis cache'i lisamine Express rakendusele aitab parandada jõudlust ja vähendada andmebaasi päringute arvu, salvestades sageli kasutatavad andmed mällu. Järgnevalt on toodud samm-sammuline juhend Redis'i kasutamiseks Express rakenduses.

## Paigalda vajalikud paketid

Paigalda Redis ja `redis` pakett Node.js jaoks:

```sh
npm install redis
```

## Loo Redis kliendiühendus

Loo `redisClient.js` fail, mis sisaldab Redis kliendiühenduse loogikat:

```javascript
// redisClient.js
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis client not connected to the server:', err);
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

module.exports = client;
```

## Kasuta Redis cache'i Express rakenduses

Siin on näide, kuidas lisada Redis cache'i Express API-sse. Oletame, et sul on API, mis tagastab kasutajate andmeid.

### `server.js`

```javascript
const express = require('express');
const client = require('./redisClient');
const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware funktsioon cache kontrollimiseks
const cache = (req, res, next) => {
  const { id } = req.params;
  client.get(id, (err, data) => {
    if (err) throw err;
    
    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

// Näidispäring ilma cache-ta
app.get('/users/:id', cache, (req, res) => {
  const { id } = req.params;
  // Näide andmebaasi päringust
  const user = { id: id, name: "John Doe", email: "john@example.com" }; // See peaks tulema andmebaasist

  // Salvestame andmed Redis cache'i
  client.setex(id, 3600, JSON.stringify(user)); // Salvestame 1 tunniks

  res.json(user);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

## Selgitus

1. **Redis Kliendiühendus**: `redisClient.js` failis luuakse ja konfigureeritakse Redis klient.
2. **Cache Middleware**: `cache` middleware funktsioon kontrollib, kas andmed on Redis cache'is. Kui andmed on olemas, saadetakse need kliendile, vastasel juhul kutsutakse `next()`, et jätkata tavalise päringuga.
3. **Andmete Salvestamine Redis Cache'i**: Kui päringu andmed on saadud (näites on see staatiline objekt, kuid reaalses elus oleks see andmebaasi päring), salvestatakse need Redis cache'i funktsiooniga `client.setex`.

## Andmete Aegumise Konfigureerimine

Redis cache'is saab andmete kehtivusaega konfigureerida `client.setex` meetodiga. Selles näites kehtib cache 3600 sekundit (1 tund). Seda väärtust saab muuta vastavalt vajadusele.

## Kokkuvõte

Redis cache'i lisamine Express rakendusele aitab oluliselt parandada rakenduse jõudlust, vähendades andmebaasi päringute arvu ja parandades reageerimiskiirust. Järgides ülaltoodud juhiseid, saab Redis'i hõlpsasti integreerida Express API-ga ja kasutada seda andmete cache'imiseks.
