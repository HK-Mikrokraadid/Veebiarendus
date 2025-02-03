# Callback funktsioon

![Callback funktsioon](Callback.webp)

Pildi allikas: Dall-E by OpenAI

- [Callback funktsioon](#callback-funktsioon)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on _Callback_ funktsioon?](#mis-on-callback-funktsioon)
  - [Milleni _Callback_ funktsioone kasutatakse NodeJS-is?](#milleni-callback-funktsioone-kasutatakse-nodejs-is)

## Õpiväljundid

Peale selle teema läbimist:

- oskad selgitada, mis on _Callback_ funktsioon
- oskad selgitada, milleks kasutatakse _Callback_ funktsioone NodeJS-is
- oskad kasutada _Callback_ funktsioone NodeJS-is

## Mis on _Callback_ funktsioon?

_Callback_ funktsioon on funktsioon, mis edastatakse argumendina teisele funktsioonile, mis seejärel käivitatakse välise funktsiooni sees mingi toimingu lõpuleviimiseks.

## Milleni _Callback_ funktsioone kasutatakse NodeJS-is?

_Callback_ funktsiooni kasutatakse NodeJS asünkroonse iseloomu tõttu. Näiteks kui lugeda arvuti kõvakettalt faili, mis võtab aega ja muu programmi täitmine läheb edasi, siis tänu _Callback_ funktsioonide kasutamisele on võimalik käivitada mingi tegevus peale faili lugemise lõpetamist. Enamus NodeJS mooduleid on kirjutatud viisil, mis võimaldab _Callback_ funktsioonide kasutamist.

Näiteks kui lugeda faili `input.txt` kõvakettalt järgmisel viisil (sünkroonne):

`input.txt`:

```bash
Hello world!

```

```javascript
const fs = require("fs");
const data = fs.readFileSync("input.txt", { encoding: "utf8" });

console.log(data); // Kuvatakse faili sisu
console.log("Program Ended");
```

Siis blokeeritakse programmi täitmine, kuni fail loetud saab (mida me tegelikult ei soovi) ja konsooli kuvatakse järgmiselt:

```bash
Hello world!
Program Ended
```

> `input.txt` ja `{ encoding: 'utf8' }` on argumendid funktsioonile `readFileSync`, millest esimene näitab loetava faili nime ja teine kirjeldab faili sisu kodeeringut.

Samas, kui me loeme faili järgmiselt:

```javascript
const fs = require("fs");

// Siin on lisaks eelnevatele argumentidele lisandunud kolmas - anonüümne funktsioon
fs.readFile("input.txt", { encoding: "utf8" }, function (err, data) {
  if (err) return console.error(err);
  return console.log(data.toString());
});

console.log("Program Ended");
```

Siis täidetakse programmi faili lugemise ajal edasi ja kui fail loetud saab, siis täidetakse _Callback_ funktsioon, mis on argumendina faili lugemise funktsioonile antud.

Konsooli kuvatakse järgmine teade:

```bash
Program Ended
Hello world!
```

Eelpool toodud näite võib selguse huvides ka järgmiselt ümber kirjutada:

```javascript
const fs = require("fs");

function callback(err, data) {
  if (err) return console.error(err);
  return console.log(data);
}

// Sellisel kujul argumendina lisatud funktsiooni nimele ei lisata sulgusid
fs.readFile("input.txt", { encoding: "utf8" }, callback);

console.log("Program Ended");
```

> Pane tähele, et toodud näidetes on esimesel juhul kasutatud funktsiooni `readFileSync`, mis on sünkroonne ja teistel puhkudel asünkroonset funktsiooni `readFile`

Allikad:

- <https://developer.mozilla.org/en-US/docs/Glossary/Callback_function>
- <https://www.geeksforgeeks.org/node-js-callback-concept/>
