# Kolmanda osapoole moodulid

![Kolmandate osapoolte moodulid](Third-Party-Modules.webp)

Pildi allikas: Dall-E by OpenAI

Sellest, mis on moodulid Javascriptis, saad lugeda siit: [Moodulid](../Modules/README.md).

Peale isetehtud ja isseehitatud moodulite, on NodeJS-is võimalik kasutada ka kolmandate osapoolte loodud mooduleid. Need moodulid on loodud teiste arendajate poolt ja on saadaval *[Node Package Manager (NPM)](https://www.npmjs.com/)* registrist.

- [Kolmanda osapoole moodulid](#kolmanda-osapoole-moodulid)
  - [Õpiväljundid](#õpiväljundid)
  - [NPM](#npm)
  - [package.json](#packagejson)
  - [Kolmandate osapoolte moodulite paigaldamine](#kolmandate-osapoolte-moodulite-paigaldamine)
  - [node\_modules kaust](#node_modules-kaust)
  - [node\_modules kausta taastamine](#node_modules-kausta-taastamine)
  - [Kolmandate osapoolte moodulite kasutamine](#kolmandate-osapoolte-moodulite-kasutamine)
  - [Kolmandate osapoolte moodulite eemaldamine](#kolmandate-osapoolte-moodulite-eemaldamine)
  - [Kolmanda osapoole mooduli paigaldamine ja kasutamine](#kolmanda-osapoole-mooduli-paigaldamine-ja-kasutamine)
  - [Nimekiri kasulikest kolmandate osapoolte moodulitest](#nimekiri-kasulikest-kolmandate-osapoolte-moodulitest)
  - [Harjutused](#harjutused)
    - [Harjutus 1](#harjutus-1)
    - [Harjutus 2](#harjutus-2)
    - [Harjutus 3](#harjutus-3)
    - [Harjutus 4](#harjutus-4)

## Õpiväljundid

Peale selle teema läbimist:

- oskad selgitada, mis on kolmandate osapoolte moodulid
- oskad luua `package.json` faili
- oskad paigaldada kolmandate osapoolte mooduleid
- oskad kasutada kolmandate osapoolte mooduleid

## NPM

NPM, ehk Node Package Manager, on NodeJS-i pakihaldussüsteem, mis võimaldab arendajatel alla laadida ja kasutada teiste loodud mooduleid. NPM on NodeJS-i vaikimisi kaasas ja seda saab kasutada käsurealt. Kolmanda osapoole mooduleid talletatakse [NPM](https://www.npmjs.com/) registris, kust on võimalik neid alla laadida. Registrist võib leida tuhandeid mooduleid, mis on loodud erinevate probleemide lahendamiseks, nagu näiteks:

- [Express](https://www.npmjs.com/package/express) - veebirakenduste loomiseks
- [MySQL](https://www.npmjs.com/package/mysql) - MySQL andmebaasiga suhtlemiseks
- [Axios](https://www.npmjs.com/package/axios) - HTTP päringute tegemiseks
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) - kasutajalt sisendi küsimiseks NodeJS keskkonnas.

## package.json

Selleks, et me saaksime kasutada kolmandate osapoolte mooduleid, peame looma projekti juurkausta faili nimega `package.json`. See fail sisaldab projekti konfiguratsiooni ja sõltuvusi. Sõltuvused on moodulid, mida meie projekt kasutab. Näiteks, kui me kasutame projekti sees `Prompts` moodulit, siis peame selle sõltuvuse lisama `package.json` faili. `package.json` faili saab luua käsurealt, kasutades järgmist käsku:

```bash
npm init -y
```

Tüüpiline algne `package.json` fail näeb välja selline:

```json
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Author name",
  "license": "MIT",
}
```

See käsk loob projekti juurkausta faili nimega `package.json` ja täidab selle vaikimisi väärtustega. Kui soovid täpsemalt konfigureerida oma projekti, siis saad käivitada käsu `npm init` ja järgida juhiseid.

## Kolmandate osapoolte moodulite paigaldamine

Kui `package.json` fail on olemas, siis saame kolmandate osapoolte mooduleid paigaldada käsurealt, kasutades järgmist käsku:

```bash
npm install <mooduli-nimi>
```

Näiteks, kui soovid paigaldada `prompt-sync` mooduli, siis saad kasutada järgmist käsku:

```bash
npm install prompt-sync
```

See käsk paigaldab `prompt-sync` mooduli projekti juurkausta ja lisab selle sõltuvuste nimekirja `package.json` failis.

Peale mooduli paigaldamist näeb `package.json` fail välja selline:

```json
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Author name",
  "license": "MIT",
  "dependencies": {
    "prompt-sync": "^4.2.0"
  }
}
```

Siit näeme, et `prompt-sync` moodul on lisatud sõltuvuste (*dependencies*) nimekirja.

## node_modules kaust

Kui moodul on paigaldatud, siis see salvestatakse projekti juurkausta kausta nimega `node_modules`. See kaust sisaldab kõiki projekti sõltuvusi, kaasa arvatud nende sõltuvuste sõltuvused. See kaust on suur ja võib sisaldada tuhandeid faile, seega ei ole soovitatav seda lisada versioonihaldusesse (näiteks Git). Selle asemel, saad lisada `node_modules` kausta `.gitignore` faili, et see ei oleks versioonihalduses.

Vastav `.gitignore` faili sisu võib välja näha selline:

```plaintext
node_modules/
```

See rida ütleb Git-ile, et ta ei peaks jälgima `node_modules` kausta.

## node_modules kausta taastamine

Kui me ei lisa oma projekti sõltuvusi versioonihaldusesse, siis on vajalik, et iga arendaja, kes soovib projekti käivitada, saaks uuesti `node_modules` kausta luu või taastada. Selleks tuleb projekti kaustas, mis sisaldab `package.json` faili, käivitada järgmine käsk:

```bash
npm install
```

See käsk loob või taastab `node_modules` kausta vastavalt `package.json` failis olevatele sõltuvustele.

## Kolmandate osapoolte moodulite kasutamine

Kui moodul on paigaldatud, siis saame seda kasutada oma koodis samamoodi nagu ise loodud ja sisseehitatud mooduleid. Näiteks, kui soovid kasutada `prompt-sync` moodulit, siis saad seda teha järgmiselt:

```javascript
const prompt = require('prompt-sync'); // mooduli importimine

const prompts = prompt(); // mooduli käivitamine ja selle salvestamine muutujasse

const age = prompts('Sisesta oma vanus: '); // kasutaja sisendi küsimine

console.log(age); // kasutaja sisendi kuvamine
```

Selles näites kasutame `prompt-sync` moodulit, et küsida kasutajalt vanust ja kuvada see konsoolis. Selle mooduli abil on meil võimalik programmi kasutajalt sisendit küsida vältimaks käsitsi väärtuste kirjeldamist koodis.

## Kolmandate osapoolte moodulite eemaldamine

Kui sa enam ei vaja paigaldatud moodulit (näiteks selgub, et paigaldatud moodul ei tee päris seda, mida soovisid), siis saad selle eemaldada käsurealt, kasutades järgmist käsku:

```bash
npm uninstall <mooduli-nimi>
```

Näiteks, kui soovid eemaldada `prompt-sync` mooduli, siis saad kasutada järgmist käsku:

```bash
npm uninstall prompt-sync
```

See käsk eemaldab `prompt-sync` mooduli projekti juurkaustast ja eemaldab selle sõltuvuste nimekirjast `package.json` failis.

## Kolmanda osapoole mooduli paigaldamine ja kasutamine

![Kolmanda osapoole mooduli kasutamine](thirdPartyModules.gif)

## Nimekiri kasulikest kolmandate osapoolte moodulitest

Siin on mõned kasulikud kolmandate osapoolte moodulid, mida saad kasutada:

- [Nodemon](https://www.npmjs.com/package/nodemon) - NodeJS rakenduste automaatne taaskäivitamine
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) - kasutajalt sisendi küsimine NodeJS keskkonnas
- [colors](https://www.npmjs.com/package/colors) - Teksti värvimine konsoolis
- [nodemailer](https://www.npmjs.com/package/nodemailer) - E-mailide saatmine NodeJS keskkonnas
- [cron](https://www.npmjs.com/package/cron) - Ajastatud ülesannete käivitamine

## Harjutused

### Harjutus 1

Loo programm, mis küsib kasutajalt nime ja parooli. Kui nimi on `admin` ja parool on `1234`, siis kuvatakse konsoolis sõnum `Tere tulemast!`. Kui nimi või parool on vale, siis kuvatakse konsoolis sõnum `Vale nimi või parool!`.

<details>
<summary>Vihje 1</summary>

Selleks, et saaksid kolmanda osapoole mooduleid kasutada, pead kõigepealt looma projekti juurkausta faili nimega `package.json`. Saad seda teha käsuga `npm init -y`.
</details>

<details>
<summary>Vihje 2</summary>

Kasuta `prompt-sync` moodulit kasutaja sisendi küsimiseks. Saad selle paigaldada käsurealt, kasutades käsku `npm install prompt-sync`.
</details>

<details>
<summary>Lahendus</summary>
  
  ```javascript
const prompts = require('prompt-sync');

const prompt = prompts();

const username = prompt('Palun sisesta oma kasutajanimi: ');
const password = prompt('Palun sisesta oma parool: ');

if (username === 'admin' && password === '1234') {
  console.log('Tere tulemast!');
} else {
  console.log('Vale kasutajanimi või parool!');
}

```

</details>

### Harjutus 2

Lisa eelnevale programmile võimalus, et kui kasutaja sisestab vale nime või parooli, siis antakse talle võimalus sisestada need uuesti.

<details>
<summary>Vihje</summary>

Saad kasutada tsüklit (näiteks `while` tsüklit), et korrata kasutaja sisendi küsimist, kuni ta sisestab õige nime ja parooli.

</details>

### Harjutus 3

Lisa eelnevale programmile funktsionaalsus - kui kasutaja sisestab vale nime või parooli kolm korda järjest, siis programm lõpetab töö ja kuvab konsoolis sõnumi `Liiga palju vale nime või parooli sisendeid!`.

### Harjutus 4

Lisa eelnevalt loodud programmi väljunditele värvid, kasutades `colors` moodulit. Näiteks, kui kasutaja sisestab õige nime ja parooli, siis kuvatakse konsoolis sõnum `Tere tulemast!` rohelisena. Kui kasutaja sisestab vale nime või parooli, siis kuvatakse konsoolis sõnum `Vale nimi või parool!` punasena.

<details>
<summary>Vihje 1</summary>

Väljundi värvimiseks saad kasutada `colors` moodulit. Selleks, et seda kasutada, pead selle esmalt paigaldama käsurealt, kasutades käsku `npm install colors`.

</details>

<details>
<summary>Vihje 2</summary>

Väljundi värvimiseks `colors` mooduliga saad kasutada näiteks järgmiseid meetodeid:

`console.log(colors.green('Tere tulemast!'))` - kuvab teksti rohelisena

`console.log(colors.red('Vale nimi või parool!'))` - kuvab teksti punasena

</details>

Kui Soovid lahendada lisaülesandeid, siis leiad need [siit](Exercises.md)
