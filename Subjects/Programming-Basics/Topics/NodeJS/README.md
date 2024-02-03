# Node JS

Selles peatükis räägime Node JS-ist, mis on selle eelised ja miinused ning kuidas käivitada Node JS-i.

- [Node JS](#node-js)
  - [Õpitulemused](#õpitulemused)
  - [Mis on NodeJS?](#mis-on-nodejs)
  - [Miks kasutada Node JS-i?](#miks-kasutada-node-js-i)
  - [Kuidas paigaldada Node JS-i?](#kuidas-paigaldada-node-js-i)
  - [Kuidas käivitada Node JS-i?](#kuidas-käivitada-node-js-i)

## Õpitulemused

Pärast selle teema läbimist suudad:
- selgitada, mis on Node JS;
- selgitada, miks Node JS on populaarne;
- paigaldada Node JS oma arvutisse;
- käivitada Node JS programme.

## Mis on NodeJS?

**NodeJS** on Javascripti käituskeskeskkond, mis võimaldab meil käivitada Javascripti koodi väljaspool veebilehitsejat. NodeJS on serveripoolne keel, mis tähendab, et see töötab serveris ja vastupidiselt veebilehitsejas töötavale Javascriptile, on NodeJS-il ligipääs arvuti failisüsteemile. Failisüsteemile ligipääs võimaldab NodeJS-i abil näiteks lugeda, luua ja muuta arvuti andmekandjatelt faile, mida ei saa teha veebilehitsejas töötava Javascriptiga.

## Miks kasutada Node JS-i?

NodeJS on populaarne valik veebirakenduste ehitamiseks, kuna see on kiire, skaleeritav ja lihtne õppida ning seda kasutades on võimalik kasutada sama keelt (Javascripti) nii kliendi- kui ka serveri poolel. NodeJS on populaarne ka seetõttu, et sellel on suur arendajate kogukond ja suur hulk avatud lähtekoodiga teeke, mida saab kasutada veebirakenduste ehitamiseks.

Node JS-i kasutusala ei piirdu ainult veebirakendustega. Seda saab kasutada ka **lauaarvutirakenduste**, **mobiilirakenduste** ja isegi **IoT** rakenduste ehitamiseks.

## Kuidas paigaldada Node JS-i?

Node JS-i paigaldamiseks tuleb alla laadida NodeJS-i installeerija [ametlikult Node JS-i veebilehelt](https://nodejs.org/en/download). Installeerija paigaldab meie arvutisse NodeJS-i ja **NPM**-i (*Node Package Manager*). **NPM** on tööriist, mida kasutatakse NodeJS pakettide paigaldamiseks ja haldamiseks.

## Kuidas käivitada Node JS-i?

Node JS-i käivitamiseks peame avama terminali ja tippima `node`, millele järgneb faili nimi, mida soovime käivitada. Näiteks, kui meil on fail nimega `index.js`, saame selle käivitada tippides terminalis `node index.js`.

> Seejuures tuleb tähele panna, et sellisel kujul saame käivitada ainult faile, mis asuvad meie terminalis avatud kausta sees. Kui me soovime käivitada faile, mis asuvad mujal, peame terminalis liikuma vastavasse kausta.

![Running Node](RunningNode.gif)
