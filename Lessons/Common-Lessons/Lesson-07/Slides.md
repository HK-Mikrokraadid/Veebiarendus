---
marp: true
---

# Tarkvaraarendus ja programmeerimine

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tarkvaraarendus

- VS Code laiendused ja nipid
- Käsurea kasutamine (_terminal_)

---

## VS Code klahvikombinatsioonid - Otsing

- `Ctrl (Cmd) + P` - Avab kiire otsingu, kus saad otsida faile projekti kaustast
- `Ctrl (Cmd) + F` - Avab otsingu praeguses failis
- `Ctrl (Cmd) + Shift + F` - Avab globaalse otsingu kogu projekti kaustast
- `Ctrl (Cmd) + H` - Avab asendamise praeguses failis
- `Ctrl (Cmd) + Shift + H` - Avab globaalse asendamise kogu projekti kaustast

---

## VS Code klahvikombinatsioonid - Kommentaarid

- `Alt + Shift + A` - Valitud ridade 'välja' ja 'sisse' kommenteerimine

---

## VS Code klahvikombinatsioonid - Kopeerimine/Lõikamine/Kustutamine/Valimine

- `Alt (Option) + Shift + Nool üles` - Valitud ridade ülespoole kopeerimine
- `Alt (Option) + Shift + Nool alla` - Valitud ridade allapoole kopeerimine
- `Ctrl (Cmd) + C` - Kopeerib valitud rea (ka siis, kui rida pole valitud)
- `Ctrl (Cmd) + X` - Lõikab valitud rea (ka siis, kui rida pole valitud)
- `Ctrl (Cmd) + Shift + K` - Kustutab valitud rea, kus kursor asub (ei lähe lõikelauale)
- `Ctrl (Cmd) + Shift + L` - Valib kõik esinemised, kus kursor asub
- `Ctrl (Cmd) + D` - Valib järgmise esinemise, kus kursor asub

---

## VS Code klahvikombinatsioonid - Muud

- `Ctrl (Cmd) + Shift + E` - Avab küljepaneeli, kus saad näha kõiki projekti faile ja kaustu
- `Ctrl (Cmd) + Shift + X` - Avab küljepaneeli, kus saad näha kõiki laiendusi
- `Ctrl (Cmd) + Shift + P` - Avab käsurea, kus saad otsida kõiki VS Code'i funktsioone (_Command Palette_)
- `Ctrl (Cmd) + Alt (Option) + Nool üles/Nool alla` - Mitu kursorit üles/alla
- `Ctrl (Cmd) + Alt (Option) + Nool üles/Nool alla` - Mitu kursorit üles/alla

---

## VS Code laiendused

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - Markdowni lihtsamaks redigeerimiseks ja eelvaateks
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Koodi automaatseks vormindamiseks
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Git ajaloo graafiline kuvamine
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Kommentaaride värvimine vastavalt nende tüübile
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Arendusserveri käivitamine ja veebilehtede automaatne värskendamine
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) - Reaalajas koostöö teiste arendajatega
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Koodis olevate vigade ja hoiatuste esiletõstmine

---

## Code Snippets

Laiendusena või isetehtud:

`File -> Preferences -> Configure User Snippets`

---

## Code Snippets - Isetehtud

```json
"Print to console": {
    "prefix": "cl",
    "body": [
        "console.log('$1');",
        "$2"
    ],
    "description": "Log output to console"
},
```

---

## Code Snippets - Laiendused

JavaScript (ES6) code snippets

---

## Käsurea kasutamine

---

## Käsurea kasutamine - Windows

- `cd kaustanimi` - Liigub ühest kaustast teise;
- `cd ..` - Liigub ühe kausta võrra ülespoole;
- `dir` - Näitab kausta sisu;
- `mkdir kaustanimi` - Loob uue kausta;
- `del` - Kustutab faili;
- `echo` - Kirjutab teksti konsooli;
- `type failinimi` - Näitab faili sisu;
- `cls` - Puhastab konsooli;
- `exit` - Sulgeb konsooli;

---

## Käsurea kasutamine - MacOS/Linux

- `ls` - Näitab kausta sisu;
- `cd kaustanimi` - Liigub ühest kaustast teise;
- `cd ..` - Liigub ühe kausta võrra ülespoole;
- `mkdir kaustanimi` - Loob uue kausta;
- `rm failinimi` - Kustutab faili;
- `mv failinimi uusfailinimi` - Muudab faili nime;
- `mv failinimi kaustanimi` - Liigutab faili teise kausta;
- `cp failinimi kaustanimi` - Kopeerib faili teise kausta;
- `cat failinimi` - Näitab faili sisu;
- `touch failinimi` - Loob uue faili;
- `clear` - Puhastab konsooli;
- `exit` - Sulgeb konsooli;

---

## Git-i käsud

- `git clone` - Kloonib _remote_ serverist projekti enda arvutisse
- `git add .` - Lisab kõik muudatused _staging_ alasse
- `git commit -m "Muudatuste kirjeldus"` - Salvestab muudatused _commit_ ajalukku
- `git push` - Saadab muudatused _remote_ serverisse
- `git pull` - Tõmbab muudatused _remote_ serverist
- `git status` - Näitab muudatuste olekut
- `git log` - Näitab _commit_ ajalugu
- `git branch` - Näitab olemasolevaid _branch_`e
- `git checkout -b uusBranch` - Loob uue _branch_`i ja liigub sinna
- `git merge teineBranch` - Liidab praeguse _branch_`i teise *branch*`iga

---

## Programmeerimine

---

## Moodulid

---

## Moodulid - Mis?

Moodul on Javascripti fail, mis sisaldab koodi, mida saab taaskasutada teistes Javascripti failides.

Mooduleid kasutatakse koodi organiseerimiseks loogilistesse üksustesse, mida saab taaskasutada programmi teistes osades.

Moodulid võivad sisaldada funktsioone, objekte, klasside, muutujaid ja muid Javascripti koodi osi.

---

## Moodulid - Tüübid

- Iseenda kirjutatud moodulid
- Sisseehitatud moodulid
- Kolmanda osapoole moodulid

---

## Iseenda kirjutatud moodulid

Nagu ka nimetus ütleb, on need moodulid, mille oleme ise kirjutanud näiteks koodi struktureerimiseks ja taaskasutamiseks.

Selleks, et kasutada iseenda kirjutatud mooduleid, tuleb need kõigepealt eksportida ja seejärel vastavasse faili importida.

---

## Iseenda kirjutatud moodulid - Eksportimine

```javascript
const myModule = {
  myFunction() {
    // funktsiooni sisu
  },
};

module.exports = myModule;
```

---

## Iseenda kirjutatud moodulid - importimine

```javascript
const myModule = require("./moduleFileName");
```

---

## Iseenda kirjutatud moodulid - kasutamine

```javascript
const myModule = require("./moduleFileName");

myModule.myFunction();
```

---

## Sisseehitatud moodulid

Sisseehitatud moodulid on Javascripti enda poolt pakutavad moodulid, mida saab kasutada ilma neid eraldi installimata.

---

## Sisseehitatud moodulid - nimekiri

- `fs` - failisüsteemi moodul
- `path` - tee moodul
- `os` - operatsioonisüsteemi moodul
- `util` - utiliidi moodul
- `events` - sündmuste moodul
- `http` - HTTP moodul
- `crypto` - krüptograafia moodul
- `zlib` - zlib moodul
- `stream` - voogude moodul
- ...

---

## Sisseehitatud moodulid - importimine

```javascript
const fs = require("fs");
```

---

## Sisseehitatud moodulid - kasutamine

```javascript
const fs = require("fs");

const file = fs.readFileSync("file.txt", "utf8");
```

---

## Kolmanda osapoole moodulid

Kolmanda osapoole moodulid on moodulid, mida on kirjutanud keegi teine ja mida saab kasutada oma projektis.

---

## NPM - Node Package Manager

- Node moodulite register
- <https://www.npmjs.com/>

---

## Kolmanda osapoole moodulid - `package.json` fail

`package.json` fail on fail, kus on kirjas kõik projektiga seotud info, sh projektis kasutatavad kolmanda osapoole moodulid ehk sõltuvused (_dependencies_).

---

## Kolmanda osapoole moodulid - `package.json` faili loomine

```bash
npm init -y
```

---

## Kolmanda osapoole moodulid - installimine

```bash
npm install mooduliNimi
```

Näiteks:

```bash
npm install prompt-sync
```

---

## Kolmanda osapoole moodulid - kasutamine

```javascript
const prompts = require("prompt-sync");

const prompt = prompts();

const nimi = prompt("Sisesta oma nimi: ");

console.log(`Tere, ${nimi}!`);
```

---

## `node_modules` kaust

Kõik kolmanda osapoole moodulid paigutatakse `node_modules` kausta.

---

## `.gitignore` fail

`node_modules` kaust tuleks lisada `.gitignore` faili, et seda ei lisataks _remote_ serverisse.

---

## `.gitignore` faili loomine

```bash
node_modules/
```

---

## Sõltuvuste taaspaigaldamine

Kui kopeerid oma projekti teise arvutisse, tuleb kõik sõltuvused taaspaigaldada.

```bash
npm install
```

---
