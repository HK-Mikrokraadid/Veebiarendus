# Javascript-i parimad praktikad

![alt text](Javascript-Best-Practices.webp)

- [Javascript-i parimad praktikad](#javascript-i-parimad-praktikad)
  - [Õpiväljundid](#õpiväljundid)
  - [Sissejuhatus](#sissejuhatus)
  - [Javascript-i koodi stiil](#javascript-i-koodi-stiil)
    - [Kasuta koodi kirjutamisel koodianalüsaatorit](#kasuta-koodi-kirjutamisel-koodianalüsaatorit)
    - [Alusta loogelise suluga koodiblokiga samal real](#alusta-loogelise-suluga-koodiblokiga-samal-real)
    - [Kasuta muutujate ja funktsioonide nimedes camelCase stiili](#kasuta-muutujate-ja-funktsioonide-nimedes-camelcase-stiili)
    - [Eelistatavalt kasuta const-i muutujate jaoks](#eelistatavalt-kasuta-const-i-muutujate-jaoks)
    - [Moodulite importimine](#moodulite-importimine)
    - [Kasuta `===` ja `!==` operaatoreid](#kasuta--ja--operaatoreid)
    - [Kasuta malliliteraale (*template literal*) stringide koostamisel](#kasuta-malliliteraale-template-literal-stringide-koostamisel)
  - [Kasutatud allikad](#kasutatud-allikad)


## Õpiväljundid

Pärast selle teema läbimist suudad:

- Kirjeldada Javascript-i parimate praktikate tähtsust
- Kirjeldada Javascript-i koodi stiili põhimõtteid
- Kirjeldada Javascript-i koodi stiili parimaid praktikaid

## Sissejuhatus

Igal programmeerimiskeelel on omad parimad praktikad, mida järgides saame kirjutada paremat ja efektiivsemat koodi. Lisaks eelnevale on parimate praktikate järgimine oluline ka koodi loetavuse ja hooldatavuse seisukohast. Javascript ei ole selle koha pealt erand. Parimaid praktikaid saab jagada erinevatesse kategooriatesse, nagu:

- projekti arhitektuur;
- vigade käsitlemisega seonduv;
- koodi stiil;
- testimine;
- turvalisusega seonduv;
- jne.

Selles materjalis keskendume Javascript-i parimatele praktikatele, mis on seotud koodi stiiliga.

## Javascript-i koodi stiil

### Kasuta koodi kirjutamisel koodianalüsaatorit

Koodianalüsaatorid nagu [ESLint](https://eslint.org/) aitavad kirjutada koodi, mis järgib Javascript-i parimaid praktikaid. Koodianalüsaatorid aitavad tuvastada erinevaid koodiga seotud probleemi ja soovitavad, kuidas neid parandada. ESLint-i saab konfigureerida vastavalt oma vajadustele, et see vastaks projekti nõuetele. Lisaks saab ESLint-i seadistada kasutama erinevaid stiilijuhendeid, nagu [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) või [StandardJS](https://standardjs.com/).

Kui ESLint-i kasutamine tundub liiga keeruline, siis võib kasutada ka [Prettier](https://prettier.io/). Prettier on tööriist, mis aitab koodi automaatselt vormindada vastavalt eelnevalt määratud reeglitele. Prettier ei ole nii paindlik kui ESLint, kuid see on lihtne kasutada ja töötab enamiku Javascript-i redaktoritega.

### Alusta loogelise suluga koodiblokiga samal real

```javascript
// Tee nii
function someFunction() {
  // koodiblokk
}

// Väldi
function someFunction()
{
  // koodiblokk
}
```

### Kasuta muutujate ja funktsioonide nimedes camelCase stiili

Javascript-i koodi kirjutamisel kasuta muutujate ja funktsioonide nimedes [camelCase](https://en.wikipedia.org/wiki/Camel_case) stiili. CamelCase stiilis muutujate ja funktsioonide nimed koosnevad mitmest sõnast, kus iga sõna algab suure algustähega, välja arvatud esimene sõna.

```javascript
// Tee nii
let myVariable = 10;
function myFunction() {
  // koodiblokk
}

// Väldi
let my_variable = 10;
function my_function() {
  // koodiblokk
}
```

### Eelistatavalt kasuta const-i muutujate jaoks

Kui muutuja väärtus ei muutu, siis kasuta selle defineerimisel `const` märksõna. `const` muutujale ei saa hiljem uut väärtust omistada ja see aitab vältida muutujate tahtmatut muutmist. Kui muutuja väärtus peab muutuma, siis kasuta `let`-i. `var`-i kasutamine on soovitatavalt vältida.

### Moodulite importimine

Kui projekt sisaldab mooduleid, siis impordi neid alati koodi alguses, mitte näiteks funktsiooni sees.

Kui moodulid on imporditud koodi alguses, siis on koodi lihtsam lugeda ja mõista ja koodi vaadates saame kohe aru, millised on vaadeldava faili sõltuvused.

Lisaks on moodulite importimine koodi alguses oluline ka sellepärast, et Javascript laadib moodulid sünkroonselt. Kui moodulid on imporditud koodi alguses, siis laetakse need enne kui koodi täitmine jätkub. Kui moodulid on imporditud funktsiooni sees, siis laetakse need alles siis, kui funktsioon käivitatakse ja see võib põhjustada ootamatut programmi peatumist.

### Kasuta `===` ja `!==` operaatoreid

Kirjuta oma kood selliselt, et puuduks vajadus kasutada vähemrangeid võrdlusoperaatoreid nagu `==` ja `!=`. `===` ja `!==` on rangemad võrdlusoperaatorid, mis kontrollivad ka väärtuste tüüpe. Näiteks `1 === '1'` tagastab `false`, kuna need kaks väärtust on erinevat tüüpi. See aitab vältida ootamatuid vigu koodis.

### Kasuta malliliteraale (*template literal*) stringide koostamisel

Malliliteraalidid on Javascript-i stringi literaalid, mis võimaldavad stringi sees kasutada muutujaid ja avaldisi. Malliliteraalid on märgitud tagurpidi ülakoma (*backtick*) (\`) sümbolitega. Sellise stringi sees saab kasutada `${}` sümbolitega muutujaid ja avaldisi. Neid peaks eelistama tavalistele stringi konkateneerimise meetoditele, kuna need muudavad koodi loetavamaks ja vähendavad vigade tekkimise tõenäosust.

```javascript
// Tee nii
const name = 'John';
const greeting = `Hello, ${name}!`;

// Väldi
const name = 'John';
const greeting = 'Hello, ' + name + '!';
```

## Kasutatud allikad

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
