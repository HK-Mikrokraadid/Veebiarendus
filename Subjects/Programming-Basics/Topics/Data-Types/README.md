# Andmetüübid

Selles teemas õpime Javascripti andmetüüpide kohta.

- [Andmetüübid](#andmetüübid)
  - [Õpitulemused](#õpitulemused)
  - [Mis on andmetüüp?](#mis-on-andmetüüp)
  - [Primitiivsed andmetüübid](#primitiivsed-andmetüübid)
  - [Objekt andmetüübid](#objekt-andmetüübid)
  - [Tüübiteisendus](#tüübiteisendus)
  - [Tüübisunnitus](#tüübisunnitus)
  - [Harjutused](#harjutused)
  - [Harjutus 1](#harjutus-1)
  - [Harjutus 2](#harjutus-2)

## Õpitulemused

Pärast selle teema läbimist suudad:
- Määratleda, mis on andmetüüp
- Loetleda Javascripti primitiivsed andmetüüpe
- Loetleda Javascripti objekt andmetüüpe
- Teisendada väärtusi ühest andmetüübist teise
- Selgitada erinevust tüübiteisenduse ja tüübisunnituse vahel

## Mis on andmetüüp?

Nagu me juba teame, on muutuja `nimetatud piirkond arvuti mälus`, mida saab kasutada andmete salvestamiseks. Muutujas salvestatavatel andmetel on *tüüp*. **Tüüp** määrab, milliseid toiminguid saab andmetega teha. Näiteks saame liita kaks **numbrit**, kuid me ei saa liita **numbrit** ja **stringi** (*sõnet*).

Javascript on dünaamiliselt tüübitud keel, mis tähendab, et muutuja **tüüpi** saab programmi täitmise ajal muuta. Näiteks võime muutujale omistada **numbri** ja hiljem programmis omistada samale muutujale **stringi**. See erineb staatiliselt tüübitud keeltest nagu **Java**, kus muutuja tüüp on deklareerimisel fikseeritud.

Javascriptis saame andmetüüpe jagada kahte kategooriasse: 
- **primitiivsed andmetüübid**;
- **objekt andmetüübid**.

## Primitiivsed andmetüübid

Primitiivsed andmetüübid on Javascriptis kõige põhilisemad andmetüübid. Javascriptis on 7 primitiivset andmetüüpi:

- **String**: *tähemärkide* jada, mis on ümbritsetud ühekordsete või kahekordsete jutumärkidega
- **Number**: *numbriline* väärtus
- **Boolean**: väärtus, mis on kas *true* (tõene) või *false* (väär)
- **Undefined**: väärtus, mis tähistab *väärtuse puudumist* (näiteks, kui muutuja on deklareeritud, kuid sellele ei ole väärtust omistatud)
- **Null**: väärtus, mis tähistab *mitte midagi* (erinevus *undefined* väärtusest on tavaliselt see, et *null* on teadlikult määratud väärtus)
- **Symbol**: *unikaaalne* väärtus, mida kasutatakse objekti omaduste identifitseerimiseks (selle kursuse raames me seda tüüpi ei kasuta)
- **BigInt**: numbriline väärtus, mis on *suurem kui Number.MAX_SAFE_INTEGER* väärtus (selle kursuse raames me seda tüüpi ei kasuta)

```javascript
let firstName = 'John'; // string
let age = 25; // number
let isMarried = false; // boolean
let x; // undefined
let car = null; // null
let symbol = Symbol('sümbol'); // sümbol
let bigInt = 1234567890123456789012345678901234567890n; // bigint
```

## Objekt andmetüübid

Objekt andmetüübid on keerukamad andmetüübid, mida saab kasutada andmekogumite salvestamiseks. Javascriptis on 3 objekti andmetüüpi:

- **Objekt (*Object*)**: võti: väärtus paaride kogum, millega saab kirjeldada keerulisema struktuuriga andmeid. Seejuures võib väärtus olla primitiivne andmetüüp, massiiv või isegi teine objekt. Võti on `string`, mis kirjeldab objekti omadust ja sellele järgneb peale koolonit omaduse väärtus.
- **Massiiv (*Array*)**: väärtuste kogum. Massiiv on objekt, mis võimaldab salvestada mitut väärtust ühte muutujasse. Massiivis saab olla erinevaid andmetüüpe, sealhulgas primitiivseid andmetüüpe, massiive ja objekte.
- **Funktsioon (*Function*)**: käivitatav koodiplokk.

```js
let person = { // objekt
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  isMarried: false
};

let fruits = ['õun', 'banaan', 'apelsin']; // massiiv

function sayHello() { // funktsioon
  console.log('Hello!');
}
```

## Tüübiteisendus

Tüübiteisendus on protsess, mille käigus teisendatakse väärtus ühest andmetüübist teise. Javascriptis saame väärtusi ühest andmetüübist teise teisendada kasutades järgmisi meetodeid:

- **String()**: teisendab väärtuse stringiks (sõneks)
- **Number()**: teisendab väärtuse numbriks
- **Boolean()**: teisendab väärtuse tõeväärtuseks

```js
let x = 5; // number
let y = String(x); // string - y väärtus on '5'
let z = Boolean(x); // boolean - z väärtus on true
```

## Tüübisunnitus

Tüübisunnitus on protsess, mille käigus teisendatakse väärtus ühest andmetüübist teise implitsiitselt. See tähenda, et tüübisunnitus toimub automaatselt ilma, et peaksime seda ise tegema. Javascriptis toimub tüübisunnitus, kui operaatorit kasutatakse erineva andmetüübiga operandidega. Näiteks + operaatorit saab kasutada kahe numbri liitmiseks, kuid seda saab kasutada ka kahe stringi ühendamiseks.

```js
let x = 5; // number
let y = '5'; // string
let z = x + y; // string - z väärtus on '55'
```

## Harjutused

## Harjutus 1

Mis on järgmiste muutujate andmetüüp?

```js
let firstName = 'John';
let age = 25;
let isMarried = false;
let x;
let car = null;
```
<details>
<summary>Lahendus</summary>

- `firstName` on string (sõne)
- `age` on number
- `isMarried` on boolean
- `x` on undefined
- `car` on null

</details>

## Harjutus 2

Mis on järgmiste muutujate andmetüüp?

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  isMarried: false
};

let fruits = ['õun', 'banaan', 'apelsin'];

function sayHello() {
  console.log('Hello!');
}
```

<details>
<summary>Lahendus</summary>

- `person` on objekt
- `firstName`, `lastName`, `age` ja `isMarried` on `person` objekti omadused
  - `firstName` ja `lastName` on stringid
  - `age` on number
  - `isMarried` on boolean
- `fruits` on massiiv
- `õun`, `banaan` ja `apelsin` on `fruits` massiivi elemendid
  - `õun`, `banaan` ja `apelsin` on stringid
- `sayHelle` on funktsioon

</details>
