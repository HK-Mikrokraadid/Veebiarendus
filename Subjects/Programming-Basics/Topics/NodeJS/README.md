# NodeJS

Selles peatükis räägime NodeJS-ist, mis on selle eelised ja miinused ning kuidas käivitada NodeJS-i.

![NodeJS](NodeJS.webp)

Pildi allikas: Dall-E by OpenAI

- [NodeJS](#nodejs)
  - [Õpitulemused](#õpitulemused)
  - [Mis on NodeJS?](#mis-on-nodejs)
  - [Miks kasutada NodeJS-i?](#miks-kasutada-nodejs-i)
  - [Kuidas paigaldada NodeJS-i?](#kuidas-paigaldada-nodejs-i)
  - [Kuidas käivitada NodeJS-i?](#kuidas-käivitada-nodejs-i)

## Õpitulemused

Pärast selle teema läbimist suudad:
- selgitada, mis on NodeJS;
- selgitada, miks NodeJS on populaarne;
- paigaldada NodeJS oma arvutisse;
- käivitada NodeJS programme.

## Mis on NodeJS?

**NodeJS** on Javascripti käituskeskeskkond, mis võimaldab meil käivitada Javascripti koodi väljaspool veebilehitsejat. NodeJS on serveripoolne keel, mis tähendab, et see töötab serveris ja vastupidiselt veebilehitsejas töötavale Javascriptile, on NodeJS-il ligipääs arvuti failisüsteemile. Failisüsteemile ligipääs võimaldab NodeJS-i abil näiteks lugeda, luua ja muuta arvuti andmekandjatelt faile, mida ei saa teha veebilehitsejas töötava Javascriptiga.

## Miks kasutada NodeJS-i?

NodeJS on populaarne valik veebirakenduste ehitamiseks, kuna see on kiire, skaleeritav ja lihtne õppida ning seda kasutades on võimalik kasutada sama keelt (Javascripti) nii kliendi- kui ka serveri poolel. NodeJS on populaarne ka seetõttu, et sellel on suur arendajate kogukond ja suur hulk avatud lähtekoodiga teeke, mida saab kasutada veebirakenduste ehitamiseks.

NodeJS-i kasutusala ei piirdu ainult veebirakendustega. Seda saab kasutada ka **lauaarvutirakenduste**, **mobiilirakenduste** ja isegi **IoT** rakenduste ehitamiseks.

## Kuidas paigaldada NodeJS-i?

NodeJS-i paigaldamiseks tuleb alla laadida NodeJS-i installeerija [ametlikult NodeJS-i veebilehelt](https://nodejs.org/en/download). Installeerija paigaldab meie arvutisse NodeJS-i ja **NPM**-i (*Node Package Manager*). **NPM** on tööriist, mida kasutatakse NodeJS pakettide paigaldamiseks ja haldamiseks.

## Kuidas käivitada NodeJS-i?

NodeJS-i käivitamiseks peame avama terminali ja tippima `node`, millele järgneb faili nimi, mida soovime käivitada. Näiteks, kui meil on fail nimega `index.js`, saame selle käivitada tippides terminalis `node index.js`.

> Seejuures tuleb tähele panna, et sellisel kujul saame käivitada ainult faile, mis asuvad meie terminalis avatud kausta sees. Kui me soovime käivitada faile, mis asuvad mujal, peame terminalis liikuma vastavasse kausta.

![Running Node](RunningNode.gif)
