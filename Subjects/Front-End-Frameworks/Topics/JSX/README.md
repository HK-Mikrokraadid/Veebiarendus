# JSX: Ülevaade ja kasutamine Reactis

JSX (JavaScript XML) on süntaksilaiendus JavaScriptile, mis võimaldab HTML-i sarnase süntaksi kasutamist Reacti komponentides. JSX muudab koodi kirjutamise ja lugemise lihtsamaks, pakkudes selget ja intuitiivset viisi Reacti elementide ja komponentide loomiseks. Selles peatükis tutvustatakse JSX-i põhialuseid, selle kasutamise eeliseid ja praktilisi näiteid.

![JSX](JSX.webp)

Pildi allikas: Dall-E by OpenAI

- [JSX: Ülevaade ja kasutamine Reactis](#jsx-ülevaade-ja-kasutamine-reactis)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on JSX?](#mis-on-jsx)
    - [JSX-i eelised](#jsx-i-eelised)
  - [JSX-i kasutamine](#jsx-i-kasutamine)
    - [Elementide loomine](#elementide-loomine)
    - [JSX HTML-i ja JavaScripti erinevused](#jsx-html-i-ja-javascripti-erinevused)
    - [JSX-i tingimuslik renderdamine](#jsx-i-tingimuslik-renderdamine)
    - [JSX-i loendite renderdamine](#jsx-i-loendite-renderdamine)
    - [JSX-i stiilide lisamine](#jsx-i-stiilide-lisamine)
    - [JSX-i sündmuste käsitlemine](#jsx-i-sündmuste-käsitlemine)
  - [Praktiline näide: Täielik JSX kasutamine](#praktiline-näide-täielik-jsx-kasutamine)
    - [Rakenduse ülesseadmine](#rakenduse-ülesseadmine)
  - [Allikad](#allikad)
  - [Kontrollküsimused või harjutus](#kontrollküsimused-või-harjutus)
  - [Harjutus](#harjutus)

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on JSX ja miks seda kasutatakse;
- kirjutama ja kasutama JSX-i Reacti komponentides;
- selgitama erinevusi HTML-i ja JSX-i vahel;
- looma ja manipuleerima JSX elemente dünaamiliselt.

## Mis on JSX?

JSX on süntaksilaiendus, mis võimaldab kirjutada HTML-i sarnast koodi JavaScripti sees. JSX-i kasutatakse Reactis komponentide ja elementide loomiseks. Kuigi see näeb välja nagu HTML, on see tegelikult JavaScripti koodi abstraktsioon, mis kompileeritakse tavaliseks JavaScriptiks.

### JSX-i eelised

- **Loetavus:** JSX muudab koodi lugemise ja kirjutamise lihtsamaks, kuna HTML ja JavaScript on tihedalt seotud.
- **Deklareerimine:** JSX võimaldab deklareerida UI struktuuri viisil, mis on selge ja intuitiivne.
- **Interaktiivsus:** JSX võimaldab hõlpsasti lisada dünaamilisi omadusi ja andmeid Reacti komponentidesse.

## JSX-i kasutamine

### Elementide loomine

JSX-is saab elemente luua, kasutades HTML-i sarnast süntaksit. Allpool on näide, kuidas luua lihtne JSX element.

```javascript
const element = <h1>Hello, world!</h1>;
```

See koodirida loob Reacti elemendi, mis renderdab HTML-i `<h1>` elemendi, mille sisu on "Hello, world!".

### JSX HTML-i ja JavaScripti erinevused

Kuigi JSX sarnaneb HTML-iga, on sellel mõned erinevused:

- **Atribuudid:** Mõned HTML atribuudid on ümber nimetatud JSX-is. Näiteks `class` muutub `className`-ks ja `for` muutub `htmlFor`-iks.

```javascript
const element = <div className="container">Content</div>;
```

- **JavaScripti väljendid:** JSX-is saab kasutada JavaScripti väljendeid, ümbritsedes need looksulgudesse `{}`.

```javascript
const name = 'John';
const element = <h1>Hello, {name}!</h1>;
```

- **Elementide pesastamine:** JSX-is saab elemente pesastada, nagu tavaliseski HTML-is.

```javascript
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </div>
);
```

### JSX-i tingimuslik renderdamine

JSX võimaldab kasutada tingimuslikku renderdamist, et kuvada elemente vastavalt teatud tingimustele.

```javascript
const isLoggedIn = true;

const element = (
  <div>
    {isLoggedIn ? (
      <h1>Welcome back!</h1>
    ) : (
      <h1>Please sign in.</h1>
    )}
  </div>
);
```

### JSX-i loendite renderdamine

JSX-is saab kasutada JavaScripti massiive ja meetodit `map` elementide loendite renderdamiseks.

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);

const element = (
  <ul>
    {listItems}
  </ul>
);
```

### JSX-i stiilide lisamine

JSX-is saab elementidele otse stiile lisada, kasutades stiili atribuudina JavaScripti objekti.

```javascript
const element = (
  <h1 style={{ color: 'blue', backgroundColor: 'lightgray' }}>
    Styled Text
  </h1>
);
```

### JSX-i sündmuste käsitlemine

JSX-is saab sündmuste käsitlejaid määrata otse elementidele, kasutades CamelCase sündmuse nimesid.

```javascript
function handleClick() {
  alert('Button clicked!');
}

const element = <button onClick={handleClick}>Click me</button>;
```

## Praktiline näide: Täielik JSX kasutamine

### Rakenduse ülesseadmine

1. **Projekti loomine:** Looge uus React projekt, kasutades Create React App tööriista.

```bash
npx create-react-app jsx-example
cd jsx-example
npm start
```

2. **Komponendi loomine ja JSX-i kasutamine:** Redigeerige `src/App.js` faili.

```javascript
import React from 'react';

function App() {
  const name = 'John Doe';
  const isLoggedIn = true;
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );

  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {name}!</h1>
        {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please sign in.</h2>}
        <ul>
          {listItems}
        </ul>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
```

## Allikad

- [React Official Documentation - JSX](https://reactjs.org/docs/introducing-jsx.html)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript XML (JSX) - Wikipedia](https://en.wikipedia.org/wiki/JSX_(JavaScript))

## Kontrollküsimused või harjutus

- Mis on JSX ja miks seda kasutatakse Reactis?
- Kirjeldage erinevusi HTML-i ja JSX-i vahel.
- Kuidas kasutada JavaScripti väljendeid JSX-is?
- Kirjutage näide JSX-i tingimuslikust renderdamisest.
- Kuidas lisada JSX-is elementidele stiile ja sündmuste käsitlejaid?

## Harjutus

- Looge uus React projekt, kasutades Create React App tööriista.
- Looge komponent, mis kuvab tervituse sõnumi, kasutades JSX-i.
- Lisage tingimuslik renderdamine, et kuvada erinevaid sõnumeid sõltuvalt kasutaja olekust (nt sisselogitud või mitte).
- Looge JSX-i loend, mis renderdab dünaamiliselt massiivist elemente.
- Lisage sündmuste käsitleja, mis käivitab funktsiooni, kui kasutaja klõpsab nupule.
