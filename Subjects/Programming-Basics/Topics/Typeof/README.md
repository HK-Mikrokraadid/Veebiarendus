# Typeof operaator

![Typeof](typeof.webp)

Pildi allikas: Dall-E by OpenAI

- [Typeof operaator](#typeof-operaator)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on `typeof` operaator?](#mis-on-typeof-operaator)
  - [`typeof` operaatori kasutamine](#typeof-operaatori-kasutamine)
  - [Kus ja millal kasutada `typeof` operaatorit?](#kus-ja-millal-kasutada-typeof-operaatorit)

## Õpiväljundid

Selle teema läbinud õpilane:

- Kirjeldab `typeof` operaatori kasutamist JavaScriptis;
- Selgitab, millal ja kus kasutada `typeof` operaatorit;
- Kasutab `typeof` operaatorit muutujate ja väärtuste tüübi väljaselgitamiseks.

## Mis on `typeof` operaator?

`typeof` on JavaScripti operaator, mis tagastab etteantud muutuja tüübi sõnena (string). `typeof` operaatorit saab kasutada nii muutujate kui ka väärtuste tüübi väljaselgitamiseks.

## `typeof` operaatori kasutamine

`typeof` operaatorit saab kasutada järgmiselt:

```javascript
const number = 123;
console.log(`${number} tüüp on ${typeof number}`);
let age;
console.log(`Väärtustamata muutuja tüüp on ${typeof age}`);
const person = {
  firstName: 'John',
  lastName: 'Doe'
};
console.log(typeof person);
```

Väljund:

```bash
$ node app.js 
123 tüüp on number
Väärtustamata muutuja tüüp on undefined
object
```

## Kus ja millal kasutada `typeof` operaatorit?

Kuna Javascript on dünaamiliselt tüübitud keel, siis võib juhtuda, et muutuja tüüp ei ole teada või see ei pruugi olla see, mida ootate. `typeof` operaatorit saab kasutada, et kontrollida muutuja tüüpi ja teha otsuseid vastavalt sellele.

Näiteks, kui meie rakendus küsib kasutajalt tema vanust, siis metavaliselt eeldame, et ta sisestab numbri. Kuid kasutaja võib sisestada ka teksti. Siis võib juhtuda, et kui me tahame teha vanusega mingeid aritmeetilisi tehteid, võime saada vastusena ootamatuid tulemusi.

Selleks, et kontrollida, kas sisestatud väärtus on oodatud tüüpi, saame kasutada `typeof` operaatorit.

```javascript
const userInput = 25;

if (typeof userInput === 'number') {
  console.log('Sisestatud väärtus on number');
  // Teeme arvutusi vanusega siin
} else {
  console.log('Sisestatud väärtus ei ole number');
  // Siin on võimalus käsitleda olukorda, kui kasutaja sisestas midagi muud
}
```

[Allikas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
