# Andmete saatmine Express rakendusele

Selles peatükis uurime, kuidas saata andmeid Express rakendusele.

![Andmete saatmine Express rakendusele](Sending-Data-To_express.webp)

Pildi allikas: Dall-E by OpenAI

- [Andmete saatmine Express rakendusele](#andmete-saatmine-express-rakendusele)
  - [Õpiväljundid](#õpiväljundid)
  - [Päringu parameetrid (*req.query*)](#päringu-parameetrid-reqquery)
  - [Päringu keha (*req.body*)](#päringu-keha-reqbody)
  - [URL-i parameetrid (*req.params*)](#url-i-parameetrid-reqparams)
  - [Päised](#päised)
  - [Kokkuvõte](#kokkuvõte)

## Õpiväljundid

Peale selle peatüki läbimist oskad:

- Kirjeldada erinevaid viise, kuidas saata andmeid Express rakendusele;
- Selgitada, kuidas saata päringu parameetreid, päringu keha, URL-i parameetreid ja päiseid Express rakendusele.

Kui me soovime luua Express raamistiku abil näiteks dünaamilist veebilehte või API-t, siis on vaja meil mingil viisil ka saata erinevaid andmeid Express rakendusele.

Expressi rakendusse andmete saatmiseks on mitu võimalust.

## Päringu parameetrid (*req.query*)

Päringuparameetrite abil saate andmeid saata URL-i kaudu. Näiteks kui soovite saata otsingupäringu, võite kasutada järgmist URL-i: `/search?q=example`. Rakenduses Express pääsete päringu parameetrile juurde, kasutades `req.query` objekti.

```javascript
...
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});
...
```

Selles näites seadistame Expressi rakenduse, mis kuulab GET-päringuid marsruudil `/search`. Kui sellele marsruudile tehakse GET-päring, pääseme päringu parameetrile `q`, kasutades `req.query` objekti ja vastuseks saadame kliendile tagasi sellesama otsingupäringu.

## Päringu keha (*req.body*)

Päringu kehas olevaid andmeid saate saata selliste meetoditega nagu POST, PUT ja DELETE. Rakenduses Express pääsete päringu sisule juurde vahevara abil.

Vaikimisi puudub Expressi *req* objektist omadus `body`, mille sisse salvestatakse tavaliselt päringuga saadetud nn keha (*body*) sisu. Selleks, et see keha sinna tekiks, tuleb kasutada sellist asja, nagu Expressi vahevara (*middleware*). Siinkohal hetkel pikemalt vahevarast, kui sellisest, ei räägi, kuid järgnevalt on näide, mis tuleb lisada Express rakenduse algusesse (peale importe ja `app` objekti loomist):

```javascript
const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

Need `app.use` read registreerivad vastavad vahevarad, mis tekitavad Express `req` objekti sisse `body` omaduse, mis sisaldab kliendi poolt saadetud `request` päringu keha.

Järgnevas näites saadetakse kliendi poolt `POST` päringuga `/students/add` URI-le järgmine objekt:

```javascript
{
  firstName: 'Angus',
  lastName: 'Ingram',
  curriculum: 'RIF22',
}
```

Mida loetakse järgmiselt:

```javascript
...
app.post('/students/add', (req, res) => {
  const student = req.body;
  console.log(student);
});
...
```

Tulemus:

```bash
{
  firstName: 'Angus',
  lastName: 'Ingram',
  curriculum: 'RIF22',
}
```

## URL-i parameetrid (*req.params*)

URL-i kaudu saab andmeid saata URL-i parameetrite abil. Näiteks kui soovite saata toote ID, võite kasutada järgmist URL-i: `/tooted/:id`. Rakenduses Express pääsete URL-i parameetrile juurde, kasutades `req.params` objekti.

```javascript
...
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
...
```

Selles näites seadistame Expressi rakenduse, mis kuulab GET-päringuid marsruudil `/users/:id`. Kui sellele marsruudile tehakse GET-päring, pääseme URL-i parameetri ID-le ligi, kasutades `req.params` objekti. Kliendile saadame vastuseks tagasi tema poolt saadetud ID.

> Pane tähele, et `:id` marsruudil on tegeliku kasutaja ID jaoks mõeldud muutuja `id`, millele pääseb juurde kasutades `req.params.id`-d `id` peale koolonit muutub sama nimega omaduseks (muutujaks) `req.params` objektis.

## Päised

Päringu päistes saate andmeid saata. Näiteks saate päringu kohta saata autentimismärke või metaandmeid. Rakenduses Express pääsete päistele juurde `req.headers` abil.

Express rakenduste puhul kasutatakse päiseid näiteks autentimiseks, turvalisuse tagamiseks, keele määramiseks, sisu tüübi määramiseks jne. Meie arendatavate API-de puhul kasutame päiseid selleks, et saata kliendi poolt API-sse pöördumisel kaasa JWT tokeni, mille abil saab API tuvastada kasutaja staatust (sisselogitud või mitte) ja tema õiguseid.

```javascript
...
app.get('/headers', (req, res) => {
  const { headers } = req;
  res.send(headers);
});
...
```

Selles näites seadistame Expressi rakenduse, mis kuulab GET-päringuid marsruudil `/headers`. Kui sellele marsruudile tehakse GET-päring, pääseme päistele ligi, kasutades `req.headers` objekti. Kliendile saadame vastuseks tagasi kõik päised, mis ta meile saatis.

Kui nüüd rääkida konkreetselt autentimisest/autoriseerimisest ja nende poolt kasutatavast JWT tokenist, siis see saadetakse tavaliselt päises `Authorization` ja selle väärtus on kujul `Bearer <token>`. Kasutades Thunder Clienti näeb see välja järgmiselt:

![Send JWT](image.png)

Vastus sellele päringule näeb välja selline:

```json
{
  "content-length": "57",
  "accept-encoding": "gzip, deflate, br",
  "accept": "*/*",
  "user-agent": "Thunder Client (https://www.thunderclient.com)",
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzA0Mjk2NjczLCJleHAiOjE3MDQzMDAyNzN9.fuJW0xbU-EtfpfuJatn2eqkCg7m1QKXth98eg7znJP4",
  "content-type": "application/json",
  "host": "localhost:3000",
  "connection": "close"
}
```

Nüüd jääb üle ainult päisest vastavad andmed välja lugeda ja neid kasutada.

## Kokkuvõte

Nagu näha, siis on mitmeid viise, kuidas saata andmeid Express rakendusele. Kõik need meetodid on kasulikud ja neid kasutatakse vastavalt vajadusele. Neid viise, kuidas andmeid API-le saata, saab ka kombineerida, et saada soovitud tulemus.
