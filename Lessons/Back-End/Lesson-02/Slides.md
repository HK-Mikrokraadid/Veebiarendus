---
marp: true

---
# Veebiarendus

## Back-End arendus

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänased teemad

- Meenutame eelmist loengut
- [Struktureerimine - kontrollerid](../../../Subjects/Back-End-Frameworks/Topics/Structuring/README.md#kontrollerid)
- Thunder Client
- [Andmete saatmine API-sse](../../../Subjects/Back-End-Frameworks/Topics/Sending-Data-To-Express/README.md)
  - URL-i parameetrid
  - Body
  - Query string

---

## Millest rääkisime eelmises loengus?

---

## Struktureerimine - kontrollerid

Kontrollerid toimivad vahendajatena HTTP päringute ja vastuste ning rakendusloogika vahel.

Tavaliselt vastutavad kontrollerid järgmiste ülesannete eest

- Päringu andmete valideerimine
- Päringu suunamine
- Vastuse genereerimine
- Vea käsitsemine
- Turvalisus

---

## Kontrollerite näide

---

## Thunder Client

Osasid API päringuid (näiteks `GET`) saame teha ja neid on mugav teha otse brauserist. Kuid brauserist tehtud päringud on piiratud ja kõike päringuid ka ei saa teha.

Thunder Client on Visual Studio Code laiendus, mis võimaldab teha HTTP päringuid otse VS Code keskkonnast.

---

## Andmete saatmine API-sse

Me oleme saatnud päringuid API-sse ja kasutanud oma 'soovide' edastamiseks URL-i parameetreid. Kuid lisaks sellele on ka teisi viise, kuidas andmeid saata.

- päringu keha (*req.body*)
- päringu parameetrid (*req.query*)
- päised (räägime tulevikus)

---

## Päringu keha (*req.body*)

Päringu kehas olevaid andmeid saate saata selliste meetoditega nagu POST, PUT ja DELETE. Päringu kehas saame saata andmeid, mida ei ole mõistlik saata URL-i parameetritena, nagu näiteks suured tekstid, failid, tundlikud andmed jne.

Tavaliselt saadame päringu kehas andmeid JSON formaadis.

---

## Päringu keha (*req.body*) - vahevara registreerimine

Vaikimisi puudub Expressi *req* objektist omadus `body`, mille sisse salvestatakse tavaliselt päringuga saadetud nn keha (*body*) sisu. Selleks, et see keha sinna tekiks, tuleb kasutada sellist asja, nagu Expressi vahevara (*middleware*).

```javascript
const express = require('express');
const app = express();

const port = 3000;

app.use(express.json()); // JSON formaadis andmete lugemine
app.use(express.urlencoded({ extended: true })); // URL encoded formaadis andmete lugemine
```

---

## Päringu parameetrid (*req.query*)

Päringuparameetrite abil saate andmeid saata URL-i kaudu. Näiteks kui soovite saata otsingupäringu, võite kasutada järgmist URL-i: `/search?q=example`. Rakenduses Express pääsete päringu parameetrile juurde, kasutades `req.query` objekti. Päringu parameetrid on URL-i osa, mis algab küsimärgiga ja on kujul `nimi=väärtus`. Nende abil saab näiteks saata andmeid, mis on seotud päringu eesmärgiga, nagu otsingupäringu sõna, filtri parameetrid jne.

---

## Päringu parametrid (*req.query*) - näide

```javascript
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});
```

---

## Kodune töö

- Lahuta oma API projektis kontrollerid ja teenused eraldi failidesse
- Lisa oma API-le võimalus tekitada uusi andmeid läbi POST päringu (kõikidele ressurssidele)
- Paigalda oma arvutisse `Docker Desktop` rakendus

---
