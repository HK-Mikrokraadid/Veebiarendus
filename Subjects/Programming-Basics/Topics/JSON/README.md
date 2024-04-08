# JSON (JavaScript Object Notation)

![JSON](JSON.webp)

Pildi allikas: [Dall-E by OpenAI](https://openai.com/)

- [JSON (JavaScript Object Notation)](#json-javascript-object-notation)
  - [Mis on JSON?](#mis-on-json)
  - [JSON-i kasutamine](#json-i-kasutamine)
  - [JSON.stringify()](#jsonstringify)
  - [JSON.parse()](#jsonparse)

## Mis on JSON?

JSON on lühend *JavaScript Object Notation*ist ja see on lihtne ja loetav andmevahetusvorming, mida kasutatakse sageli andmete vahetamiseks kliendi ja serveri rakenduste vahel - näiteks veebirakenduse *Front-endi*i ja API vahel.

JSON-andmed on esitatud võtme-väärtuste paaride kogumina, kus iga võti on string ja iga väärtus võib olla string, arv, tõeväärtus, massiiv või muu objekt. JSON-i on inimestel lihtne lugeda ja kirjutada ning arvutitel on seda lihtne kasutada ja genereerida. JSON objekt näeb väga sarnane välja Javascripti objektiga, kuid JSON-i puhul tuleb tähele panna, et JSON on andmevahetusvorming, mitte JavaScripti objekt ise. Kõige suurem erinevus on selles, et JSON-i atribuudid (võtmed) on alati ümbritsetud jutumärkidega, samas kui JavaScripti objektides võtmeid jutumärkidega tavaliselt ei kasutata.

Siin on näide lihtsast JSON-objektist:

```json
{
  "name": "John",
  "age": 30,
  "isStudent": true,
  "favoriteFoods": ["pizza", "sushi", "ice cream"]
}
```

Eelnevas näites on objektil neli atribuuti: `name`, `age`, `isStudent` ja `favoriteFoods`. `name` ja `isStudent` atribuudid on stringid, vanuse atribuut on arv ja atribuut `favoriteFoods` on stringide massiiv.

## JSON-i kasutamine

JSON-i kasutatakse sageli veebirakendustes andmete edastamiseks kliendi ja serveri vahel, näiteks AJAX-i (Asynchronous JavaScript and XML) päringute tegemisel või veebi API-ga andmete vahetamisel. Paljudel programmeerimiskeeltel, sealhulgas NodeJS, on sisseehitatud tugi JSON-andmete lugemiseks ja genereerimiseks, mistõttu on JSONi kasutamine veebiarenduses populaarne valik.

JSON on:

- Lihtne ja loetav andmevahetusformaat
- JSON objekt on ümbritsetud loogeliste sulgudega - {"description" : "Ei tahtnud teha"}
- JSON objekt koosneb key-value (võti-väärtus) paaridest, mis on eraldatud kooloniga - { "key": "value" }
- Võtmeks saab olla string ja väärtuseks string, arv, objekt, massiiv, tõeväärtus või null
- Key-value paarid on omavahel eraldatud komaga - {"id": "1", "description", "Ei tahtnud teha"}

## JSON.stringify()

`JSON.stringify()` on JavaScripti funktsioon, mis teisendab JavaScripti objekti JSON-stringiks. See funktsioon võtab objekti sisendiks ja tagastab selle JSON-stringina.

Siin on näide `JSON.stringify()` kasutamisest:

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: true,
  favoriteFoods: ["pizza", "sushi", "ice cream"]
};

const jsonPerson = JSON.stringify(person);

console.log(jsonPerson);
```

Väljund:

```json
{"name":"John","age":30,"isStudent":true,"favoriteFoods":["pizza","sushi","ice cream"]}
```

Eelnevas näites teisendatakse objekt `person` JSON-stringiks, kasutades `JSON.stringify()` funktsiooni. JSON-string salvestatakse muutujasse `jsonPerson` ja seejärel väljastatakse konsooli.

`JSON.stringify()` funktsioon võimaldab teisendada JavaScripti objekte JSON-stringideks, mis on kasulik andmete edastamisel ja salvestamisel.

## JSON.parse()

`JSON.parse()` on JavaScripti funktsioon, mis teisendab JSON-stringi JavaScripti objektiks. See funktsioon võtab JSON-stringi sisendiks ja tagastab selle JavaScripti objektina.

Siin on näide `JSON.parse()` kasutamisest:

```javascript
const jsonPerson = '{"name":"John","age":30,"isStudent":true,"favoriteFoods":["pizza","sushi","ice cream"]}';
const person = JSON.parse(jsonPerson);

console.log(person);
```

Väljund:

```javascript
{
  name: 'John',
  age: 30,
  isStudent: true,
  favoriteFoods: [ 'pizza', 'sushi', 'ice cream' ]
}
```

Eelnevas näites teisendatakse JSON-string `jsonPerson` JavaScripti objektiks, kasutades `JSON.parse()` funktsiooni. JavaScripti objekt salvestatakse muutujasse `person` ja seejärel väljastatakse konsooli. `JSON.parse()` funktsioon võimaldab teisendada JSON-stringe JavaScripti objektideks, mis on kasulik andmete vastuvõtmisel ja töötlemisel, muu hulgas ka failidest lugemisel.

Allikad:

- <https://www.json.org/json-en.html>
- <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON>
- <https://google.github.io/styleguide/jsoncstyleguide.xml>
