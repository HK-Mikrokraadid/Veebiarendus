# Skoop (_scope_)

Skoop on praegune täitmise kontekst, milles väärtused ja avaldised on "nähtavad" või neile saab viidata. Kui muutuja või avaldis ei ole skoobis, pole see kasutamiseks saadaval. Skoope saab kihistada ka hierarhias, nii et alamskoobil on juurdepääs ülemskoobile, kuid mitte vastupidi.

JavaScriptil on järgmist tüüpi skoobid:

- Globaalne skoop: kogu skriptirežiimis töötava koodi vaikeskoop.
- Mooduli skoop: moodulirežiimis töötava koodi skoop.
- Funktsiooni skoop: funktsiooniga loodud skoop.

Lisaks võivad muutujad, mis on deklareeritud parameetritega let või const, kuuluda täiendavasse skoopi:

- Ploki skoop: skoop, mis on loodud paari loogeliste sulgudega (plokk).

Funktsioon loob skoobi, nii et (näiteks) ainult funktsiooni sees määratletud muutujale ei pääse juurde väljastpoolt funktsiooni ega muude funktsioonide seest. Näiteks järgmine on kehtetu:

```javascript
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
```

Kuid järgmine kood kehtib, kuna muutuja on deklareeritud väljaspool funktsiooni, muutes selle globaalseks:

```javascript
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

Ploki skoop töötab ainult `let` ja `const` deklaratsioonide korral, mitte `var` puhul:

```javascript
{
  var x = 1;
}
console.log(x); // 1
```

```javascript
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined
```
