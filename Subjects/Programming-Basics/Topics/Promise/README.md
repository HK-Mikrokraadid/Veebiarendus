# Promise

![Promise](Promise.webp)

Pildi allikas: Dall-E by OpenAI

- [Promise](#promise)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on _Promise_?](#mis-on-promise)
  - [Miks _Promise_-t kasutatakse?](#miks-promise-t-kasutatakse)
  - [Näide](#näide)

## Õpiväljundid

Pärast selle teema läbimist suudate:

- Määratleda, mis on _Promise_;
- Selgitada, miks _Promise_-t kasutatakse;
- Kasutada _Promise_-t asünkroonsete toimingute käsitlemiseks.

## Mis on _Promise_?

_Promise_ on objekt, mis tähistab asünkroonse toimingu lõppu või ebaõnnestumist. Põhimõtteliselt on _Promise_ tagastatud objekt, millele saab külge lisada [_Callback_](../callback/README.md) funktsioone, selle asemel, et neid funktsiooni argumendina edastada.

## Miks _Promise_-t kasutatakse?

_Promise_ on viis, kuidas käsitleda asünkroonseid toiminguid, nagu andmete toomine API-st, failide lugemine või mõni muu pikaajaline toiming ilma põhilõimi blokeerimata.

_Promise_ objektil on kolm olekut:

1. Ootel (_Pending_): _promise_ esialgne olek. See tähendab, et _promise_-t ei ole täidetud ega tagasi lükatud.

2. Täidetud (_Fullfilled_): _promise_ olek, kui asünkroonne toiming on edukalt lõpule viidud. See tähendab, et lubatud väärtus on saadaval.

3. Tagasilükatud (_Rejected_): _promise_ olek, kui asünkroonne toiming ebaõnnestub. See tähendab, et lubatud väärtus pole saadaval.

_Promise_-d luuakse _promise_ konstruktori abil. Konstruktor võtab funktsiooni, mis sisaldab asünkroonset koodi (näiteks API päring) ja tagastab _promise_ objekti. Nimetatud funktsioon eeldab argumentidena omakorda kahte funktsiooni: `resolve` ja `reject`. `resolve` funktsioon käivitatakse juhul, kui asünkroonse operatsiooni täitmine õnnestub ja `reject` funktsioon käivitatakse juhul, kui see ei õnnestu.

_Promise_ loomine näeb välja selliselt:

```javascript
const promise = new Promise((resolve, reject) => {
  // Asünkroonne operatsioon
  const result = callToExternalAPI();

  if (result) {
    // Funktsiooni täitmine õnnestus
    resolve(result);
  } else {
    // Funktsiooni täitmine ei õnnestunud
    reject("Error occurred");
  }
});
```

Kui _Promise_ on loodud, siis saab selle täidetud oleku käsitlemiseks kasutada `.then()` meetodit ja tagasilükatud oleku käsitlemiseks `.catch()` meetodit. `.then()` meetod võtab argumendina funktsiooni, mis käivitatakse koos eduka operatsiooni poolt tagastatud argumendiga. `.catch` meetod võtab omakorda argumendiks funktsiooni koos ebaõnnestunud operatsiooni poolt tagastatud veateatega.

Näiteks:

```javascript
promise
  .then((result) => {
    console.log(result); // Käsitleb täidetud olekut
  })
  .catch((error) => {
    console.error(error); // Käsitleb tagasilükatud olekut
  });
```

## Näide

Kui meil on näiteks rakendus, mis loeb andmeid API-st, siis saame kasutada _Promise_-t, et käsitleda andmete toomist API-st. Järgnevalt on näide, kuidas seda teha:

```javascript
const axios = require("axios"); // Axios on HTTP klient, millega saame teha API päringuid

const url = "https://jsonplaceholder.typicode.com/posts/1"; // API URL

const promise = new Promise((resolve, reject) => {
  // Loome uue Promise objekti
  const result = axios.get(url); // Teeme API päringu
  if (result) {
    // Kui päring õnnestus
    resolve(result); // Käivitame resolve funktsiooni
  } else {
    reject("Error"); // Käivitame reject funktsiooni
  }
});

promise // Käsitleme Promise objekti
  .then((response) => {
    // Kui Promise on täidetud
    console.log(response.data); // Kuvame API vastuse
  })
  .catch((error) => {
    // Kui Promise on tagasilükatud
    console.log(error); // Kuvame veateate
  });

console.log("Lõpp");
```

Kui see kood käivitada, siis konsoolis kuvatakse järgmine tulemus:

```bash
Lõpp
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}
```

_Promise_ objektid on oluline osa sellest, kuidas käsitletakse Javascriptis asünkroonseid operatsioone, kuid nende toimimise põhimõttest on alguses veidi keeruline aru saada. Nüüdseks on tehtud nende kasutamine ja loetavus pisut lihtsamaks [`async/await`](../Async-Await/README.md) märksõnade abil.

Allikad:

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises>
