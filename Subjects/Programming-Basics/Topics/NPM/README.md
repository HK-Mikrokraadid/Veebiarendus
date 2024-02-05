# Node Package Manager (*NPM*)

Selles teemas räägime Node Package Managerist (NPM).

- [Node Package Manager (*NPM*)](#node-package-manager-npm)
  - [Õpitulemused](#õpitulemused)
  - [Mis on NPM?](#mis-on-npm)
  - [Kuidas paigaldada NPM-i ennast?](#kuidas-paigaldada-npm-i-ennast)
  - [Kuidas kasutada NPM-i?](#kuidas-kasutada-npm-i)
  - [Kuidas luua package.json faili?](#kuidas-luua-packagejson-faili)
  - [Kuidas paigaldada pakette?](#kuidas-paigaldada-pakette)
  - [Kuidas eemaldada pakette?](#kuidas-eemaldada-pakette)
  - [Kuidas uuendada pakette?](#kuidas-uuendada-pakette)
  - [Kuidas kasutada pakette?](#kuidas-kasutada-pakette)
  - [Näide NPM-i kasutamisest `ansi-colors` paketi paigaldamiseks ja kasutamiseks koodis](#näide-npm-i-kasutamisest-ansi-colors-paketi-paigaldamiseks-ja-kasutamiseks-koodis)
    - [Käsud ja kood, mida näites kasutati](#käsud-ja-kood-mida-näites-kasutati)
    - [package.json faili loomine](#packagejson-faili-loomine)

## Õpitulemused

Pärast selle teema läbimist oskad:

- Määratleda, mis on NPM
- Paigaldada NPM oma arvutisse
- Kasutada NPM-i pakettide paigaldamiseks, eemaldamiseks ja uuendamiseks
- Kasutada pakette oma koodis
- Luua `package.json` faili
- Selgitada, mis on `node_modules` kaust
- Selgitada, mis on NPM register

## Mis on NPM?

NPM on tööriist NodeJS pakettide paigaldamiseks ja haldamiseks. See on käsurea tööriist, mis on paigaldatud koos Node JS-iga. Seda kasutatakse pakettide paigaldamiseks [NPM registrist](https://www.npmjs.com/) ja arvutis kohapeal paigaldatud pakettide haldamiseks.

Pakett on failide kogum, mida kasutatakse kindla ülesande täitmiseks. Näiteks on pakette, mida kasutatakse veebirakenduste loomiseks, pakette, mille abil on võimalik anmebaasiühendusi luua, pakette, mida kasutatakse testide kirjutamiseks jne. Paketid on kättesaadavad NPM registrist ja neid saab paigaldada kasutades NPM-i

[NPM register](https://www.npmjs.com/) on Node JS pakettide avalik hoidla. See sisaldab tuhandeid pakette, mida saab paigaldada kasutades NPM-i.

## Kuidas paigaldada NPM-i ennast?

NPM paigaldatakse koos NodeJS-iga. NPM-i paigaldamiseks peame alla laadima NodeJS paigaldaja [Node JS ametlikult veebilehelt](https://nodejs.org/en/download). Paigaldaja paigaldab meie arvutisse nii NodeJS-i, kui ka NPM-i. Ehk siis, kui NodeJS on juba varem paigaldatud, on ka NPM juba paigaldatud.

## Kuidas kasutada NPM-i?

NPM-i kasutamiseks peame avama terminali ja tippima `npm` järgneva käsu, mida soovime käivitada. Näiteks, kui soovime paigaldada paketi, saame terminalis tippida `npm install packageName`, kus `packageName` on paigaldatava paketi nimi.

## Kuidas luua package.json faili?

`package.json` on fail, mis sisaldab teavet Node JS projekti kohta. See sisaldab teavet nagu projekti nimi, projekti versioon, projekti autor, projekti sõltuvused (projekti jaoks vajalikud paketid) jne. NPM kasutab seda faili kohapeal paigaldatud pakettide paigaldamiseks ja haldamiseks.

`package.json` faili loomiseks peame avama terminali ja tippima terminalis `npm init`. See `loob package.json` faili kausta, millest eelnev käsk käivitati. Samuti saame kasutada `npm init -y` vaikimisi väärtustega `package.json` faili loomiseks.

## Kuidas paigaldada pakette?

Paketi paigaldamiseks peame avama terminali ja tippima terminalis `npm install packageName`, kus `packageName` on paigaldatava paketi nimi. See paigaldab paketi `node_modules` kausta praeguses kaustas ja lisab selle `package.json` faili `dependencies` sektsiooni.

## Kuidas eemaldada pakette?

Paketi eemaldamiseks peame avama terminali ja tippima terminalis `npm uninstall packageName`, kus `packageName` on eemaldatava paketi nimi. See eemaldab paketi `node_modules` kaustast praeguses kaustas ja eemaldab selle `package.json` faili `dependencies` sektsioonist.

## Kuidas uuendada pakette?

Paketi uuendamiseks peame avama terminali ja tippima terminalis `npm update packageName`, kus `packageName` on uuendatava paketi nimi. See uuendab paketti `node_modules` kaustas ja uuendab seda `package.json` faili `dependencies` sektsioonis.

## Kuidas kasutada pakette?

Paketi kasutamiseks peame selle oma koodis importima kasutades `require()` funktsiooni. Näiteks, kui soovime kasutada paketti `packageName`, saame selle importida järgmise koodiga:

```javascript
const packageName = require('packageName');
```

## Näide NPM-i kasutamisest `ansi-colors` paketi paigaldamiseks ja kasutamiseks koodis

[`ansi-colors`](https://www.npmjs.com/package/ansi-colors) pakett on pakett, mida kasutatakse terminalis teksti värvimiseks.

Järgmises näites loome uue faili nimega `index.js`, loome `package.json` faili käsu `npm init -y` abil, paigaldame `ansi-colors` paketi käsu `npm install ansi-colors` abil ja kasutame `ansi-colors` paketti oma koodis.

![NPM-i kasutamine](UsingNPM.gif)

### Käsud ja kood, mida näites kasutati

```bash
npm init -y
npm install ansi-colors
```

```javascript
const colors = require('ansi-colors');

console.log(colors.red('Tere maailm!'));
console.log(colors.yellow('Tere maailm!'));
console.log(colors.green('Tere maailm!'));
```

```bash
node index.js
```

### package.json faili loomine

```json
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ansi-colors": "^4.1.3"
  }
}
```