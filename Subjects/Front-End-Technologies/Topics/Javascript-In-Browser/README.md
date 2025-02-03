# Javascript veebilehitsejas

Selles teemas õpime, kuidas kasutada Javascripti veebilehitsejas ja kuidas lisada Javascripti HTML failidesse.

![Javascript](JavaScript.webp)

Pildi allikas: Dall-E by OpenAI

- [Javascript veebilehitsejas](#javascript-veebilehitsejas)
  - [Õpiväljundid](#õpiväljundid)
  - [Erinevus Node.js ja veebilehitseja Javascripti vahel](#erinevus-nodejs-ja-veebilehitseja-javascripti-vahel)
  - [Javascripti lisamine HTML-i](#javascripti-lisamine-html-i)
    - [Kasutades `<script>` sildi](#kasutades-script-sildi)
    - [Kasutades `src` atribuuti](#kasutades-src-atribuuti)
  - [Sisend ja väljund veebilehitseja Javascriptis](#sisend-ja-väljund-veebilehitseja-javascriptis)
    - [`prompt()` funktsioon](#prompt-funktsioon)
    - [`alert()` funktsioon](#alert-funktsioon)
  - [Harjutused](#harjutused)
    - [Harjutus 1: Lihtne kasutaja tervitus](#harjutus-1-lihtne-kasutaja-tervitus)
    - [Harjutus 2: Lihtne matemaatika viktoriin](#harjutus-2-lihtne-matemaatika-viktoriin)
    - [Harjutus 3: Vanusekategooria kontrollija](#harjutus-3-vanusekategooria-kontrollija)

## Õpiväljundid

Selle teema lõpus suudate:

- Kirjeldada erinevust Node.js ja veebilehitseja Javascripti vahel.
- Lisada Javascripti HTML-i.
- Koguda kasutaja sisendit ja kuvada väljundit veebilehitseja Javascriptis.
- Kasutada `prompt()` ja `alert()` funktsioone.

## Erinevus Node.js ja veebilehitseja Javascripti vahel

Peamine erinevus on see, et Node.js on Javascripti töötluskeskkond, samas kui veebilehitseja Javascript on Javascripti mootor. Javascripti mootor on programm, mis täidab Javascripti koodi. Javascripti töötluskeskkond on programm, mis täidab Javascripti koodi ja pakub täiendavaid funktsioone, nagu ligipääs failisüsteemile, võrgule jne.

Näiteks ei saa veebilehitseja Javascript juurde pääseda failisüsteemile, kuid Node.js saab. Veebilehitseja Javascript saab ligi DOM-ile, kuid Node.js ei saa.

Node.js-is ja veebilehitseja Javascriptis on erinevad globaalsed objektid. Näiteks on `window` ja `document` objektid saadaval veebilehitseja Javascriptis, kuid mitte Node.js-is. `process` objekt on saadaval Node.js-is, kuid mitte veebilehitseja Javascriptis.

- `window` objekt on globaalne objekt veebilehitseja Javascriptis. See esindab veebilehitseja akent. Sellel on omadused ja meetodid, mis võimaldavad pääseda veebilehitseja aknasse ja selle sisu.
- `document` objekt on globaalne objekt veebilehitseja Javascriptis. See esindab DOM-i. Sellel on omadused ja meetodid, mis võimaldavad pääseda DOM-i ja selle sisu juurde.
- `process` objekt on globaalne objekt Node.js-is. Sellel on omadused ja meetodid, mis võimaldavad pääseda Node.js protsessile ja selle sisule.

Javascripti süntaks on mõlemas keskkonnas sama.

## Javascripti lisamine HTML-i

Veebilehitsejad saavad täita Javascripti koodi, mis on lisatud HTML failidesse. On kaks viisi, kuidas Javascripti kood HTML failidesse lisada:

- kasutades `<script>` sildi;
- kasutades `src` atribuuti.

### Kasutades `<script>` sildi

Javascripti kood saab HTML failidesse lisada, kasutades `<script>` sildi. `<script>` sildi saab paigutada HTML faili `<head>` või `<body>` sektsiooni. `<head>` sektsioonis olev Javascripti kood täidetakse enne, kui HTML fail laetakse. `<body>` sektsioonis olev Javascripti kood täidetakse pärast HTML faili laadimist.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script>
      console.log("Hello, world!");
    </script>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

> Märkus: veebilehitseja Javascriptis näeme `console.log()` väljundi veebilehitseja konsoolis. Konsooli avamiseks vajutage `F12` või `Ctrl+Shift+I` Chrome'is, Firefoxis või Edges.

### Kasutades `src` atribuuti

Javascripti kood saab lisada välistest Javascripti failidest, kasutades `src` atribuuti. `src` atribuuti saab kasutada koos `<script>` sildiga. Javascripti kood, mis on lisatud `src` atribuudi kaudu, täidetakse pärast HTML faili laadimist.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

## Sisend ja väljund veebilehitseja Javascriptis

Veebilehitseja Javascriptis on mitmeid viise, kuidas koguda kasutaja sisendit ja kuvada väljundit. Peamine suhtlus kasutajaga toimub DOM-i kaudu. DOM-i abil saame lugeda ja muuta HTML elementide sisu, nagu erinevad sisendi elemendid, lõigud, pealkirjad jne. Kuid esimesteks sammudeks saame kasutada `prompt()` ja `alert()` funktsioone.

### `prompt()` funktsioon

`prompt()` funktsioon kuvab dialoogiboksi, mis küsib kasutajalt sisendit. See võtab ühe argumendi, milleks on tekst, mida kuvatakse dialoogiboksis. Funktsioon tagastab teksti, mille kasutaja sisestas dialoogiboksi.

```js
let name = prompt("Enter your name:");
console.log("Hello, " + name + "!");
```

### `alert()` funktsioon

`alert()` funktsioon kuvab dialoogiboksi, mis näitab kasutajale sõnumit. See võtab ühe argumendi, milleks on tekst, mida kuvatakse dialoogiboksis.

```js
alert("Hello, world!");
```

Tavaliselt ei kasuta me `prompt()` ja `alert()` funktsioone veebilehitseja Javascriptis, vaid kasutame DOM-i. Kuid need on kasulikud esimesteks sammudeks.

## Harjutused

Kirjuta Javascripti kood eraldi faili ja lisa see HTML faili kasutades `src` atribuuti.

Püüa harjutusi lahendada ilma lahendust vaatamata. Kui jääd hätta, saad vaadata lahendust.

Testi alati oma koodi, et näha, kas see töötab nagu oodatud.

### Harjutus 1: Lihtne kasutaja tervitus

**Eesmärk**: Küsi kasutaja nime ja tervita teda personaalsete sõnumitega.

**Kirjeldus**: Kirjuta Javascripti skript, mis kasutab `prompt` funktsiooni, et küsida kasutaja nime. Seejärel kasuta `alert` funktsiooni tervitussõnumi kuvamiseks, mis sisaldab kasutaja nime.

**Oodatav tulemus**: Veebilehitseja kuvab esmalt prompti kasutaja nime küsimiseks ja seejärel kuvab alertiga tervitussõnumi, kasutades sisestatud nime.

<details>

<summary>Lahendus</summary>
`app.js`:

```js
// Kasutaja nime küsimine ja selle salvestamine muutujasse
const userName = prompt("What is Your name?");

// Tervitussõnumi kuvamine
alert(`Hello, ${userName}!`);
```

`index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Greeting page</title>
    <script src="app.js"></script>
  </head>
  <body>
    <h1>This is greeting page</h1>
  </body>
</html>
```

![Prompt ja Alert](PromptAndAlert.gif)

</details>

### Harjutus 2: Lihtne matemaatika viktoriin

**Eesmärk**: Küsi kasutajalt lihtne matemaatika küsimus ja anna tagasisidet vastuse põhjal.

**Kirjeldus**: Kasuta `prompt` funktsiooni, et küsida kasutajalt lihtsat matemaatika küsimust (nt "Mis on 2 + 3?"). Kontrolli, kas vastus on õige. Kasuta `alert` funktsiooni, et anda neile sobivat tagasisidet. Kui vastus on õige, näita õnnitlevat sõnumit; kui vale, näita õiget vastust.

**Oodatav tulemus**: Kasutaja küsitakse matemaatika küsimust ja seejärel saab ta tagasisidet oma vastuse põhjal.

<details>
<summary>Lahendus</summary>

`app.js`:

```js
// Lihtne matemaatika küsimus
const userAnswer = prompt("What is 2 + 3?");

// Vastuse kontrollimine ja tagasiside andmine
if (parseInt(userAnswer) === 5) {
  alert("Correct! Well done.");
} else {
  alert("Incorrect. The correct answer is 5.");
}
```

> Märkus: `parseInt()` funktsioon muudab stringi täisarvuks. Näiteks `parseInt('5')` tagastab `5`. Kasutame `parseInt()` funktsiooni, kuna `prompt()` funktsioon tagastab alati stringi.

`index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Math Quiz</title>
    <script src="app.js"></script>
  </head>
  <body>
    <h1>This is math quiz</h1>
  </body>
</html>
```

</details>

### Harjutus 3: Vanusekategooria kontrollija

**Eesmärk**: Määrata kasutaja vanusekategooria vastavalt tema sisestatud vanusele.

**Kirjeldus**: Kasuta `prompt` funktsiooni, et küsida kasutaja vanust. Olenevalt sisestatud vanusest, kasuta `alert` funktsiooni, et informeerida neid nende vanusekategooriast (nt laps, teismeline, täiskasvanu).

**Oodatav tulemus**: Kasutaja küsitakse tema vanust ja saab alerti, mis näitab tema vanusekategooriat.
