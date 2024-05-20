# Vahevara ehk Middleware

Selles peatükis räägime Express.js keskkonnas kasutatavast vahevarast ehk `middleware`'st.

![Middleware](Middleware.webp)

Pildi allikas: Dall-E by OpenAI

- [Vahevara ehk Middleware](#vahevara-ehk-middleware)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Middleware funktsioonid?](#mis-on-middleware-funktsioonid)
  - [Next funktsioon](#next-funktsioon)
  - [Middleware kasutamine](#middleware-kasutamine)
  - [Päringu/vastuse tsükkel koos `middleware`'iga](#päringuvastuse-tsükkel-koos-middlewareiga)
  - [Not Found `middleware`](#not-found-middleware)

## Õpiväljundid

Peale selle peatüki läbimist oskab õpilane:

- selgitada, mis on `middleware` ja kuidas seda kasutatakse;
- kirjutada `middleware` funktsioone;
- rakendada `middleware`'i Express.js rakenduses.

## Mis on Middleware funktsioonid?

`Middleware` funktsioonid on funktsioonid, millel on juurdepääs päringuobjektile (`req`), vastuseobjektile (`res`) ja järgmisele funktsioonile rakenduse päringu-vastuse tsüklis. Põhimõtteliselt võime `middleware`'i mõelda kui filtrist, mis töötleb päringuid enne, kui need jõuavad päringu-vastuse tsükli järgmisse etappi. Näiteks võib `middleware` olla logimine, autentimine, päringuandmete analüüs või mõni muu funktsioon, mis on rakenduse jaoks oluline.

## Next funktsioon

`Next` funktsioon on Express-ruuteri funktsioon, mis käivitamisel käivitab `middleware` praeguse `middleware`’i järel.

## Middleware kasutamine

`Middleware` saab:

- Käivitada koodi
- Teha muudatusi request ja response objektides
- Lõpetada request-response tsüklit
- Kutsuda välja järjekorrast järgmine middleware

Meeles peab pidama, et kui `middleware` ei lõpeta päringu-vastuse tsüklit (näiteks `return res.status(200).json…`), siis peab middleware kutsuma välja `next()` funktsiooni, muidu jääb rakendus 'rippuma'.

Logimise `middleware` näide:

```javascript
// Http päringute konsooli logimise middleware

const logger = (req, res, next) => {
  // Väljastatakse päringu sihtaadress, meetod ja aeg
  console.log(req.url, req.method, new Date().toISOString());
  // Next funktsiooni käivitamine annab järjekorra üle järgmisele middleware'le
  return next();
}
```

`Middleware`-t saab rakendada erinevalt.

Üks variantidest on registreerida `middleware` kõikidele päringutele:

```javascript
...
// Middleware importimine (teekond sõltub faili asukohast)
const logger = require('./middlewares/logger');

...

// Middleware registreerimine
app.use(logger);

...
```

Teine variant on registreerida `middleware` ainult teatud marsuutidele:

```javascript
...
// Middleware importimine
const logger = require('./middlewares/logger');

...

// Middleware registreerimine
app.get('/api', logger, (req, res) => {
  res.send('Hello World!');
});
...
```

## Päringu/vastuse tsükkel koos `middleware`'iga

![Middelware](./middleware.png)

## Not Found `middleware`

Üks variant, kus `middleware` on kasulik, on 404 lehekülje kuvamine, kui päringu sihtressurssi ei leita. Näide:

```javascript
// 404 lehekülje kuvamine, kui päringu sihtressurssi ei leita

const notFound = (req, res, next) => {
  res.status(404).send({
    success: false,
    message: 'Route not found',
  });
}

module.exports = notFound;
```

`Middleware` registreerimine:

```javascript
...
// Middleware importimine
const notFound = require('./middlewares/notFound');

...

// Middleware registreerimine

app.use('*', notFoundMiddleware);

...
```

Siinkohal tuleb meeles pidada, et see `middleware` funktsioon tuleb registreerida peale kõiki marsuute ja marsuudi teekonnaks tuleb panna `*`. See tähendab, et kui kasutaja pöördub mõne marsuudi poole, mida API-s ei eksisteeri, siis ta suunatakse sellele `middleware` funktsioonile.

Nüüd, kui kasutaja pöördub mõne marsuudi poole, mida API-s ei eksisteeri, siis ta saab vastuseks järgmise:

```json
{
  "success": false,
  "message": "Route not found"
}
```
