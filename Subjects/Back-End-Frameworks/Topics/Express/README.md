# Express

Selles õppematerjalis käsitleme Expressi, mis on populaarne veebirakenduste raamistik Node.js-i jaoks. Õpime, kuidas paigaldada Express, kasutada selle meetodeid ja kuidas töötada päringu ja vastuse objektidega Expressis.

![Express](Express.webp)

Pildi allikas: Dall-E by OpenAI

- [Express](#express)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Express?](#mis-on-express)
  - [Expressi paigaldamine](#expressi-paigaldamine)
  - [Express app-i meetodid](#express-app-i-meetodid)
  - [Request ja Response Expressis](#request-ja-response-expressis)

## Õpiväljundid

Peale selle õppematerjali läbimist oskad:

- Selgitada, mis on Express ja miks seda kasutatakse;
- paigaldada Express Node.js projekti;
- luua lihtne Expressi rakendus ja käivitada see.

## Mis on Express?

Express on Node.js-i populaarne veebirakenduste raamistik, mis on loodud skaleeritavate ja paindlike veebirakenduste loomiseks. See pakub hulga funktsioone veebirakenduste loomiseks, nagu marsruutimine, vahevara ning HTTP-päringute ja vastuste tugi.

Express lihtsustab veebirakenduste loomise protsessi, pakkudes kerget, kuid võimsat raamistikku, mis võimaldab arendajatel keskenduda rakenduse põhifunktsioonide loomisele. See sisaldab lihtsat API-t, mis võimaldab arendajatel hõlpsasti luua HTTP-marsruute, määratleda päringute käsitlemiseks vahevara funktsioone ning töötada mitmesuguste mallimootorite ja muude tööriistadega.

## Expressi paigaldamine

Expressi paigaldamiseks Node.js projekti tuleb järgida järgmiseid samme.

1. Looge oma projekti jaoks uus kataloog ja navigeerige terminalis sellesse kataloogi.
2. Initsialiseerige uus Node.js projekt, kasutades käsku `npm init`. See loob faili `package.json`, mis jälgib teie projekti sõltuvusi.
3. Installige Express, kasutades käsku `npm install express`. See laadib alla ja installib Expressi uusima versiooni ja selle sõltuvused.

Siin on näide Expressi installimisest käsurea abil:

```bash
mkdir myapp
cd myapp
npm init
npm install express
```

Pärast Expressi installimist saate luua uue faili nimega näiteks `app.js` ja alustada oma rakenduse koostamist Expressi raamistiku abil. Rakenduses Expressi kasutamiseks peate seda oma failis `app.js` importima, näiteks järgmiselt:

```javascript
const express = require('express');
const app = express();
```

Lihtsaim Express rakenduse näide:

```javascript
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  return res.send('Hello!');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
```

## Express app-i meetodid

Saranaselt [HTTP päringumeetoditele](../httpMeetodid/README.md) pakub Express laia valikut meetodeid, mida saab kasutada veebirakenduste loomiseks ja kliendilt päringute vastuvõtmiseks. Siin on mõned Expressi rakenduses kõige levinumad meetodid.

- **GET:** (`app.get()`) seda meetodit kasutatakse andmete toomiseks serverist. Seda kasutatakse konkreetse ressursi, näiteks veebilehe, pildi või video taotlemiseks.

- **POST:** (`app.post()`) seda meetodit kasutatakse andmete saatmiseks serverisse. Seda kasutatakse tavaliselt vormide esitamiseks või andmete saatmiseks serverisse töötlemiseks.

- **PUT:** (`app.put()`) seda meetodit kasutatakse serveris olemasolevate andmete värskendamiseks. Seda kasutatakse tavaliselt konkreetse ressursi (nt kasutajaprofiili või tooteteabe) värskendamiseks.

- **DELETE:** (`app.delete()`) seda meetodit kasutatakse andmete kustutamiseks serverist. Seda kasutatakse tavaliselt konkreetse ressursi, näiteks kasutajakonto või toote eemaldamiseks.

- **USE:** (`app.use()`) seda meetodit kasutatakse vahevara funktsioonide määratlemiseks, mis käivitatakse iga päringu jaoks, mis vastab konkreetsele marsruudile.

- **SET:** (`app.set()`) seda meetodit kasutatakse rakendusetaseme muutujate (nt pordi numbri või vaatemootori) määramiseks.

Need on vaid mõned paljudest Expressi pakutavatest meetoditest. Iga meetodit saab kasutada marsruutide loomiseks, mis käsitlevad teatud tüüpi HTTP-päringuid, võimaldades arendajatel luua võimsaid ja paindlikke veebirakendusi.

## Request ja Response Expressis

Nagu ka HTTP protokollis on olemas [päringu ja vastuse objektid](../reqres/README.md), on ka expressis võimalused päringut ja vastust vastu võtta/saata ja neid töödelda.

Päringu saamisel loob express päringust oma versiooni, millel on väga palju erinevaid omadusi, muuhulgas:

- **params:** (req.params) see atribuut on objekt, mis sisaldab atribuute, mis on vastendatud nimega marsruudi "parameetrid". Näiteks kui teil on marsruut `/kasutajad/:id`, siis sisaldab params objekti atribuut `id` väärtust `:id`.

- **query:** (req.query) see atribuut on objekt, mis sisaldab marsruudi iga päringustringi parameetri atribuuti. Näiteks kui URL on `/users?sort=desc`, siis päringuobjekt sisaldab `{ sort: 'desc' }`.

- **body:** (req.body) see atribuut on parsitud päringu keha sisaldav objekt, kui päringu meetod on `POST`, `PUT` või `PATCH` ja sisutüübi päis on `application/x-www-form-urlencoded` või `application/json`.

- **headers:** (req.headers) see atribuut on objekt, mis sisaldab kliendi saadetud päiseid.

- **meetod:** (req.method) see atribuut on string, mis sisaldab HTTP-päringu meetodit (nt `GET`, `POST`, `PUT`, `DELETE` jne).

- **url:** (req.url) see atribuut on string, mis sisaldab päringu URL-i.

- **küpsised:** (req.cookies) see atribuut on objekt, mis sisaldab kliendi saadetud küpsiseid.

- **ip:** (req.ip) see atribuut on string, mis sisaldab kliendi IP-aadressi.

- **protokoll:** (req.protocol) see atribuut on string, mis sisaldab päringu kasutatavat protokolli (http või https).

Üldiselt pakub Expressi päringuobjekt arendajatele palju teavet kliendi päringu kohta, võimaldades neil luua võimsaid ja paindlikke veebirakendusi.

Vastuse saatmiseks on expressil hulk funktsioone, millest enamlevinumad on järgmised:

- **send:** (res.send()) seda meetodit kasutatakse stringi, puhvri või JSON-vastuse saatmiseks kliendile tagasi. See määrab automaatselt päise `Content-Type` andmetüübi alusel.

- **json:** (res.json()) seda meetodit kasutatakse JSON-vastuse saatmiseks kliendile tagasi. See määrab `Content-Type` päise `application/json`iks.

- **redirect:** (res.redirect()) seda meetodit kasutatakse kliendi ümbersuunamiseks teisele URL-ile. See seab asukoha päise määratud URL-ile ja saadab vaikimisi `302` olekukoodi.

- **render:** (res.render()) seda meetodit kasutatakse vaatemalli renderdamiseks ja HTML-i vastuse kliendile tagasi saatmiseks. See võtab argumentidena malli nime ja andmeobjekti.

- **status:** (res.status()) seda meetodit kasutatakse vastuse HTTP vastuskoodi määramiseks. Seda saab kasutada mis tahes kehtiva HTTP vastuskoodi määramiseks.

- **sendFile:** (res.sendFile()) seda meetodit kasutatakse vastusena faili saatmiseks. See võtab argumendina failitee ja määrab automaatselt faililaiendi põhjal sisutüübi päise.

Need on vaid mõned paljudest Expressi pakutavatest reageerimismeetoditest. Iga meetodit saab kasutada erinevat tüüpi vastuse kliendile tagasi saatmiseks.

Allikad:

- <https://expressjs.com/>
- <https://expressjs.com/en/4x/api.html#app.METHOD>
- <https://expressjs.com/en/api.html#req>
- <https://expressjs.com/en/api.html#res>
