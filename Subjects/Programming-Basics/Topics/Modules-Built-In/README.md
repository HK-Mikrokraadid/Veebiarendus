# Sisseehitatud moodulid

![Built In Modules](Built-In-Modules.webp)

Pildi allikas: Dall-E by OpenAI

- [Sisseehitatud moodulid](#sisseehitatud-moodulid)
  - [Õpiväljundid](#õpiväljundid)
  - [Sisseehitatud moodulid - importimine](#sisseehitatud-moodulid---importimine)
  - [Sisseehitatud moodulid - kasutamine](#sisseehitatud-moodulid---kasutamine)
  - [Sisseehitatud moodulid - nimekiri](#sisseehitatud-moodulid---nimekiri)
  - [`fs` moodul](#fs-moodul)
    - [Faili lugemine](#faili-lugemine)
    - [Faili kirjutamine](#faili-kirjutamine)
    - [Faili kustutamine](#faili-kustutamine)
  - [`path` moodul](#path-moodul)
    - [Tee loomine](#tee-loomine)
  - [`os` moodul](#os-moodul)
    - [Operatsioonisüsteemi teave](#operatsioonisüsteemi-teave)
  - [Harjutused](#harjutused)
    - [Harjutus 1](#harjutus-1)
    - [Harjutus 2](#harjutus-2)
    - [Harjutus 3](#harjutus-3)

Sellest, mis on moodulid Javascriptis, saad lugeda siit: [Moodulid](../Modules/README.md).

Lisaks ise loodud moodulitele, on Javascriptis ka sisseehitatud moodulid. Need on moodulid, mis on NodeJS-is kohe olemas ja mida saab kasutada ilma, et peaksid need eraldi alla laadima.

## Õpiväljundid

Peale selle teema läbimist:

- oskad selgitada, mis on sisseehitatud moodulid NodeJS-is
- oskad importida NodeJS sisseehitatud mooduleid
- oskad kasutada NodeJS sisseehitatud mooduleid

## Sisseehitatud moodulid - importimine

Selleks, et kasutada sisseehtitatud mooduleid, tuleb need kõigepealt importida.
Näiteks:

```javascript
const fs = require('fs');
```

Nagu näha, siis saab sisseehitatud mooduleid importida samamoodi nagu ise loodud mooduleid, kuid erinevus on selles, et sisseehitatud moodulid ei vaja täpset asukohta, vaid piisab ainult mooduli nimest.

## Sisseehitatud moodulid - kasutamine

Sisseehitatud mooduleid kasutatakse samamoodi nagu ise loodud mooduleid.

Näiteks, kui soovid lugeda faili sisu, siis saad kasutada `fs` moodulit:

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

Selles näites loetakse faili `file.txt` sisu ja kuvatakse see konsoolis.

## Sisseehitatud moodulid - nimekiri

Siin on mõned sisseehitatud moodulid, mida saab kasutada:

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

Kui soovid näha täielikku nimekirja sisseehitatud moodulitest, siis saad selle leida [NodeJS ametlikust dokumentatsioonist](https://nodejs.org/dist/latest-v19.x/docs/api/).

## `fs` moodul

`fs` moodul on NodeJS-i sisseehitatud moodul, mis võimaldab lugeda ja kirjutada faile. Selle mooduli abil saad põhimõtteliselt teha kõike, mis on seotud failidega - lugeda, kirjutada, muuta, kustutada jne.

### Faili lugemine

Selleks, et lugeda faili, saad kasutada `fs.readFile` meetodit. Näiteks:

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

Lisaks on olemas ka `fs.readFileSync` meetod, mis teeb sama asja, kuid sünkroonselt. See tähendab, et kood peatub, kuni fail on loetud. Näiteks:

```javascript
const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
```

> NB! Sünkroonsete meetodite kasutamine on soovitatav ainult siis, kui oled kindel, et see ei mõjuta teisi protsesse, kuna sünkroonsed meetodid võivad põhjustada rakenduse aeglustumist.

### Faili kirjutamine

Selleks, et kirjutada faili, saad kasutada `fs.writeFile` meetodit. Näiteks:

```javascript
const fs = require('fs');

fs.writeFile('file.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File has been written!');
});
```

Lisaks on olemas ka `fs.writeFileSync` meetod, mis teeb sama asja, kuid sünkroonselt. Näiteks:

```javascript
const fs = require('fs');

fs.writeFileSync('file.txt', 'Hello, World!');
console.log('File has been written!');
```

### Faili kustutamine

Selleks, et kustutada faili, saad kasutada `fs.unlink` meetodit. Näiteks:

```javascript
const fs = require('fs');

fs.unlink('file.txt', (err) => {
  if (err) throw err;
  console.log('File has been deleted!');
});
```

Lisaks on olemas ka `fs.unlinkSync` meetod, mis teeb sama asja, kuid sünkroonselt. Näiteks:

```javascript
const fs = require('fs');

fs.unlinkSync('file.txt');
console.log('File has been deleted!');
```

## `path` moodul

`path` moodul on NodeJS-i sisseehitatud moodul, mis võimaldab töötada failiteede ja failinimedega. Selle mooduli abil saad luua, muuta ja analüüsida teid failide ja kaustade asukohtadeni ning tegeleda failinimedega.

### Tee loomine

Selleks, et luua tee failile või kaustale, saad kasutada `path.join` meetodit. Näiteks:

```javascript
const path = require('path');

const filePath = path.join(__dirname, 'file.txt');
console.log(filePath);
```

Selles näites luuakse teekond failile `file.txt` kasutades `__dirname` muutujat, mis näitab praegust kausta. See meetod on kasulik näiteks sellisel juhul, kui rakendus peab lugema mõnda faili, mis asub samas kaustas, kus on ka rakenduse kood. Faili lugemiseks peab rakendus teadma täpset teed failile failisüsteemis ja kuna rakenduse kausta asukoht erinevates arvutites võib olla erinev, siis on soovitatav kasutada `__dirname` muutujat, et saaksime teada faili asukoha sõltumata sellest, kus rakendus asub.

## `os` moodul

`os` moodul on NodeJS-i sisseehitatud moodul, mis võimaldab saada teavet operatsioonisüsteemi kohta. Selle mooduli abil saad saada teavet operatsioonisüsteemi versiooni, arhitektuuri, protsessori, kasutajanime, kodukausta jne kohta.

### Operatsioonisüsteemi teave

Selleks, et saada teavet operatsioonisüsteemi kohta, saad kasutada `os` mooduli meetodeid. Näiteks:

```javascript
const os = require('os');

console.log(os.platform()); // 'win32'
console.log(os.arch()); // 'x64'
console.log(os.cpus()); // [{ model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz', speed: 2808, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } }]

// ...
```

## Harjutused

### Harjutus 1

Võta siia lisatud failist [Tõde ja Õigus katkend](text.txt) tekst ja kopeeri see oma NodeJS rakenduse faili. Loo rakendus, mis küsib kasutajalt sõna ja väljastab konsooli, mitu korda see sõna tekstis esineb.

> Tekst on alla laetud <http://et.wikisource.org> veebilehelt.
>
> Tekstist on välja jäetud kõik kirjavahemärgid, et seda oleks lihtsam töödelda.
>
> Vihje: kasuta `split` ja `filter` meetodeid, et teha sõnade massiiv ja leida sõna esinemiste arv.
>
> Vihje: realõpu märk on `\n`.

### Harjutus 2

Kirjuta rakendus, mis väljastab konsooli:

- tekstis olevate sõnade arvu
- tekstis olevate tähtede arvu
- tesktis olevate unikaalsete sõnade arvu
- kõige sagedamini esinevad 10 sõna

> Kasuta eelmises harjutuses kasutatud teksti.
>
> Võid kasutada objekti või massiivi, et hoida sõnade ja nende esinemiste arvu.

### Harjutus 3

Kirjuta rakendus, mis loeb tekstifaili [text.txt](text.txt), sorteerib sõnad tähestikulises järjekorras ja kirjutab need uude faili [sorted.txt](sorted.txt).

> Kasuta esimeses harjutuses kasutatud teksti.
>
> Vihje: kasuta `sort` meetodit, et sorteerida sõnu tähestikulises järjekorras.
