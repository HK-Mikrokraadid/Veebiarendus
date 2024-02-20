# Semikoolonid JavaScriptis

![Semicolons](Semicolons.webp)

Pildi allikas: Dall-E by OpenAI

- [Semikoolonid JavaScriptis](#semikoolonid-javascriptis)
  - [Õpiväljundid](#õpiväljundid)
  - [Semikoolonite kasutamine JavaScriptis](#semikoolonite-kasutamine-javascriptis)
  - [Erijuhud, mis nõuavad semikoolonit](#erijuhud-mis-nõuavad-semikoolonit)
  - [Kus ei kasutata semikoolonit?](#kus-ei-kasutata-semikoolonit)

## Õpiväljundid

Pärast selle teema läbimist suudate:

- Selgitada, kuidas kasutada semikoolonit JavaScriptis;
- Selgitada, millal ei ole vaja semikoolonit kasutada;
- Selgitada, millal on vaja semikoolonit kasutada.

## Semikoolonite kasutamine JavaScriptis

JavaScriptis (sh Node.js) kasutatakse semikoolonit lausete eraldamiseks ja koodirea lõpetamiseks. Tegelikult on paljudes JavaScripti programmides semikoolonid sageli välja jäetud, kuid JavaScript lisab semikoolonid automaatselt kuhu vaja.

Siin on näide koodiplokist ilma semikoolonita:

```javascript
let x = 5
let y = 10
let z = x + y
console.log(z)
```

Selline kood on JavaScriptis täiesti lubatud ja töötab täpselt samamoodi, nagu semikoolonitega kood. Samas peetakse heaks tavaks lisada koodi alati semikoolonid, et muuta see loetavamaks ja hooldatavamaks. See aitab vältida ka teatud vigu, mis võivad ilmneda siis, kui JavaScripti lisab  semikoolonid automaatselt.

```javascript
let x = 5;
let y = 10;
let z = x + y;
console.log(z);
```

## Erijuhud, mis nõuavad semikoolonit

Nagu öeldud, siis JavaScriptis ei ole semikoolonid tingimata vajalikud, kuid neid peetakse heaks tavaks. Siiski on teatud olukordi, kus semikoolonid on vajalikud.

Üks selline olukord on siis, kui soovite ühel real deklareerida kahte erinevat muutujat:

```javascript
let x = 5; const y = 10;
```

Sellisel juhul on kahe deklaratsiooni vahele vaja semikooloneid.

Üks näide, kus JavaScripti automaatne semikoolonite lisamine ([ASI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)) võib tekitada ootamatu olukorra on järgmine näide:

```javascript
function getCheese() {
  return 
  { 
      cheeseType: "Gouda"
  } 
}
```

Selles näites eeldaks, et funktsioon tagastab objekti, mille sees on kirjeldatud juustu tüüp. Kuid JavasCript tõlgendab seda funktsiooni järgmiselt:

```javascript
function getCheese() {
  return; 
  { 
      cheeseType: "Gouda"
  } 
}
```

Ja funktsioon tagastab objekti asemel hoopis `undefined`.

Sellise olukorra vältimiseks tuleb funktsioon kirjutada sellisel viisil:

```javascript
function getCheese() {
  return { 
      cheeseType: "Gouda"
  } 
}
```

## Kus ei kasutata semikoolonit?

Semikoolonit ei panda järgmiste lausete lõppu:

- `if (...) {...} else {...}`
- `for (...) {...}`
- `while (...) {...}`

> Note: Siiski kasutatakse: `do{...};` `while (...);` järel

[Allikas1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)

[Allikas2](https://dev.to/adriennemiller/semicolons-in-javascript-to-use-or-not-to-use-2nli)