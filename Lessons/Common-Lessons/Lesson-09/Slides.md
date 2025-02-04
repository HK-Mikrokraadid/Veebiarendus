---
marp: true
theme: default
backgroundImage: url('../../Logo/HaapsaluK_est.png')
backgroundPosition: 20px calc(100% - 20px)
backgroundSize: 200px
---

# Tarkvaraarendus ja programmeerimine

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänane loeng

- Kommentaarid koduste tööde kohta
- Copilot-i poolne `Code Review`
- Sünkroonne ja asünkroonne kood
- [Try/Catch](../../../Subjects/Programming-Basics/Topics/Try-Catch-Finally/README.md)
- [Failide salvestamine ja lugemine (`fs` moodul)](../../../Subjects/Programming-Basics/Topics/Modules-Built-In/README.md#fs-moodul)
- [JSON.stingify()](../../../Subjects/Programming-Basics/Topics/JSON/README.md#jsonstringify)

---

## Sünkroonne vs Asünkroonne

Mida tähendab asünkroonsus Javascriptis?

---

## Asünkroonne kood

Asünkroonne kood on kood, mis ei blokeeri põhilõime. Asünkroonne kood võimaldab teha mitut asünkroonset toimingut korraga, ilma et peaks ootama, kuni üks toiming on lõpule viidud, enne kui teine toiming algab.

---

## Sünkroonne kood

Sünkroonne kood on kood, mis blokeerib põhilõime. Sünkroonne kood täidetakse järjestikku, üks rida korraga. Kui üks rida on täidetud, siis järgmine rida täidetakse.

---

## Asünkroonsus - Kuidas sellega toime tulla?

- Callback
- Async/Await

---

## Callback - Mis?

Callback on funktsioon, mis antakse teisele funktsioonile argumendina ja see käivitatakse, kui esimene funktsioon on lõpetanud oma töö.

---

## Callback - Näide

```js
function callbackExample() {
  console.log("Callback function has been called!");
}

function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

greet("John", callbackExample);
```

---

## Async/Await - Mis?

`async/await` on moodsa Javascripti võimalus kirjutada asünkroonset koodi viisil, mis näeb välja ja käitub nagu sünkroonne kood.

`async` ja `await` muudavad asünkroonse koodi lugemise ja kirjutamise lihtsamaks.

---

## Aync/Await - Olekud

`async` võtmesõna kasutatakse asünkroonse funktsiooni defineerimiseks. Sellisel viisil defineeritud funktsioon tagastab alati _promise_, millel võib olla kolm olekut:

1. Ootel
2. Täidetud
3. Tagasilükatud

---

## Async/Await - Näide

```js
const url = "https://jsonplaceholder.typicode.com/posts/1"; // API URL

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

---

## Async/Await - Mis juhtub, kui midagi läheb valesti?

---

## Try/Catch - Mis?

`try...catch` lause on Javascripti konstruktsioon, mida kasutatakse vigade haldamiseks. See võimaldab meil proovida (try) täita koodi, mis võib tekitada vea, ja kui viga tekib, siis püüda (catch) see kinni ja teha midagi selle käsitlemiseks.

`try...catch` lause on kasulik, kuna see aitab vältida programmi kokkujooksmist vigade tõttu. See võimaldab käsitleda programmi täitmisel tekkivaid vigu ja jätkata programmi hoolimata olukorrast, kus tekib viga, mida NodeJS muidu ei suudaks ilma tööd lõpetamata käsitleda.

---

## Try/Catch - Näide

```js
async function main() {
  try {
    const data = await fetchData(); // Ootab fetchData funktsiooni täitmist
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

## `fs` moodul

`fs` moodul on NodeJS-i sisseehitatud moodul, mis võimaldab lugeda ja kirjutada faile. Selle mooduli abil saad põhimõtteliselt teha kõike, mis on seotud failidega - lugeda, kirjutada, muuta, kustutada jne.

---

## Faili lugemine

```js
const fs = require("fs");

fs.readFile("file.txt", "utf8", (error, data) => {
  if (error) console.log("Tekkis viga");
  console.log(data);
});

console.log("Reading file...");
```

---

## Faili kirjutamine

```js
const fs = require("fs");

fs.writeFile("file.txt", "Hello, World!", (error) => {
  if (error) console.log("Tekkis viga");
  console.log("File has been written!");
});
```

---

## Faili lõppu lisamine

```js
const fs = require("fs");

fs.appendFile("file.txt", "Hello, World!", (error) => {
  if (error) console.log("Tekkis viga");
  console.log("Data has been appended to file!");
});
```

---

## `fs` moodul sünkroonselt

---

## Sünkroonne faili lugemine

```js
const fs = require("fs");

const data = fs.readFileSync("file.txt", "utf8");

console.log(data);
```

---

## Mis juhtub, kui faili ei leita?

---

## Faili lugemisel tekkinud vea käsitlemine

```js
const fs = require("fs");

try {
  const data = fs.readFileSync("file.txt", "utf8");
  console.log(data);
} catch (error) {
  console.error(error);
}
```

---

## Sünkroonne faili kirjutamine

```js
const fs = require("fs");

fs.writeFileSync("file.txt", "Hello, World!");

console.log("File has been written!");
```

---

## Sünkroonne faili lõppu lisamine

```js
const fs = require("fs");

fs.appendFileSync("file.txt", "Hello, World!");

console.log("Data has been appended to file!");
```

---

## Objektide ja massiivide salvestamine failidesse

Kui me tahame lugeda ja kirjutada failidesse objekte ja massiive, siis tuleb kasutada `JSON.stringify()` ja `JSON.parse()` meetodeid, sest muidu loetakse ja kirjutatakse need failidesse stringidena.

---

## JSON - Mis?

JSON on lühend *JavaScript Object Notation*ist ja see on lihtne ja loetav andmevahetusvorming, mida kasutatakse sageli andmete vahetamiseks kliendi ja serveri rakenduste vahel - näiteks veebirakenduse *Front-endi*i ja API vahel.

---

## JSON - Näide

```json
{
  "name": "John",
  "age": 30,
  "isStudent": true,
  "favoriteFoods": ["pizza", "sushi", "ice cream"]
}
```

---

## JSON - Erinevus Javascripti objektist

JSON objekt näeb väga sarnane välja Javascripti objektiga, kuid JSON-i puhul tuleb tähele panna, et JSON on andmevahetusvorming, mitte JavaScripti objekt ise. Kõige suurem erinevus on selles, et JSON-i atribuudid (võtmed) on alati ümbritsetud jutumärkidega, samas kui JavaScripti objektides võtmeid jutumärkidega tavaliselt ei kasutata.

---

## JSON vs JavaScripti objekt - Näide

```json
{
  "name": "John",
  "age": 30,
  "isStudent": true,
  "favoriteFoods": ["pizza", "sushi", "ice cream"]
}
```

```js
const person = {
  name: "John",
  age: 30,
  isStudent: true,
  favoriteFoods: ["pizza", "sushi", "ice cream"],
};
```

---

## `JSON.stringify()`

`JSON.stringify()` on JavaScripti funktsioon, mis teisendab JavaScripti objekti JSON-stringiks. See funktsioon võtab objekti sisendiks ja tagastab selle JSON-stringina.

---

## `JSON.stringify()` - Näide

```js
const person = {
  name: "John",
  age: 30,
  isStudent: true,
  favoriteFoods: ["pizza", "sushi", "ice cream"],
};

const jsonPerson = JSON.stringify(person);

console.log(jsonPerson);
```

Väljund:

```json
{
  "name": "John",
  "age": 30,
  "isStudent": true,
  "favoriteFoods": ["pizza", "sushi", "ice cream"]
}
```

---

## `JSON.parse()`

`JSON.parse()` on JavaScripti funktsioon, mis teisendab JSON-stringi JavaScripti objektiks. See funktsioon võtab JSON-stringi sisendiks ja tagastab selle JavaScripti objektina.

---

## `JSON.parse()` - Näide

```js
const jsonPerson =
  '{"name":"John","age":30,"isStudent":true,"favoriteFoods":["pizza","sushi","ice cream"]}';
const person = JSON.parse(jsonPerson);

console.log(person);
```

Väljund:

```js
{
  name: 'John',
  age: 30,
  isStudent: true,
  favoriteFoods: [ 'pizza', 'sushi', 'ice cream' ]
}
```

---

## Harjutused

Võtame õpilaste rakenduse ja proovime selle teha selliseks, et see salvestaks õpilaste andmed faili ja loeks need sealt välja.
