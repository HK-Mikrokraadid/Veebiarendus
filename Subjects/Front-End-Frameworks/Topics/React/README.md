# React: Ülevaade ja kasutamine

## Sissejuhatus

React on populaarne avatud lähtekoodiga JavaScripti teek, mida kasutatakse kasutajaliideste loomiseks. Selle töötas välja Facebook ja see on muutunud üheks enim kasutatavaks tööriistaks tänu oma komponentidel põhinevale arhitektuurile ja jõudlusele. React keskendub komponentide loomisele, mis võimaldavad arendajatel luua korduvkasutatavaid ja isoleeritud UI tükke.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Selgitama, mis on React ja kuidas see töötab.
- Loome React projekt ja seadistama arenduskeskkonna.
- Loome ja haldama React komponente.
- Kasutama React Hooks-i ja olekuhaldust (*state management*).
- Rakendama põhilisi React-i kontseptsioone ja tehnikaid.

## Reacti põhimõisted

**Komponendid:** Reacti põhielemendid, mis võimaldavad arendajatel jagada kasutajaliidese väikesteks, hallatavateks tükkideks. Komponendid võivad olla funktsionaalsed või klassipõhised.

**Virtuaalne DOM:** React kasutab virtuaalset DOM-i, mis on kergversioon tegelikust DOM-ist. See võimaldab Reactil teha efektiivseid uuendusi ja renderdusi, võrreldes muutusi enne tegeliku DOM-i värskendamist.

**JSX:** JavaScripti laiendus, mis võimaldab HTML-i kirjutamist JavaScripti sees. JSX muudab koodi lugemise ja kirjutamise lihtsamaks.

**Hooks:** Reacti funktsioonid, mis võimaldavad kasutada olekut ja muid Reacti omadusi funktsionaalsetes komponentides. Kõige levinumad Hookid on `useState` ja `useEffect`.

## React projekti loomine ja seadistamine

### Create React App

Create React App on mugav tööriist, mis võimaldab kiiresti seadistada ja käivitada uut React projekti ilma käsitsi konfiguratsioonita.

#### Create React App installimine

1. Veenduge, et teil on paigaldatud Node.js ja npm.
2. Avage terminal ja käivitage järgmine käsk:

```bash
npx create-react-app my-app
```

3. Liikuge oma projekti kausta:

```bash
cd my-app
```

4. Käivitage rakendus:

```bash
npm start
```

See käsk avab teie vaikimisi brauseris uue React rakenduse.

## React komponendid

### Funktsionaalsed komponendid

Funktsionaalsed komponendid on lihtsad JavaScripti funktsioonid, mis võtavad argumentidena propsid ja tagastavad Reacti elemente.

Näide:

```javascript
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

### Klassipõhised komponendid

Klassipõhised komponendid on ES6 klassid, mis laiendavad React.Component klassi ja sisaldavad renderdamismeetodit.

Näide:

```javascript
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

## React Hooks ja olekuhaldus (*state management*)

### useState

`useState` Hook võimaldab funktsionaalsetes komponentides oleku kasutamist.

Näide:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```

### useEffect

`useEffect` Hook võimaldab külgehaakida kõrvalmõjusid funktsionaalsetesse komponentidesse (nt andmete toomine, tellimused).

Näide:

```javascript
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default DataFetcher;
```

## Reacti põhimõtted ja tehnikad

### Ühesuunaline andmevoog

React järgib ühesuunalist andmevoogu, mis tähendab, et andmed liiguvad vanematelt komponentidelt allapoole lastakomponentidele. See tagab koodi lihtsuse ja parema kontrolli oleku üle.

### Kompositsioon vs pärimine

React soosib kompositsiooni pärimise asemel. Kompositsioon võimaldab komponentidel olla korduvkasutatavad ja isoleeritud, pakkudes paindlikkumaid lahendusi komponentide ühendamiseks ja koostamiseks.

## Allikad

- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)
- [JavaScript Front-End Frameworks and Libraries](https://www.javascriptstuff.com/)

## Kontrollküsimused või harjutus

- Mis on React ja kuidas see töötab?
- Selgitage, mis on virtuaalne DOM ja kuidas see erineb tegelikust DOM-ist.
- Kirjutage näide funktsionaalsest ja klassipõhisest komponendist, mis tervitab kasutajat nimega.
- Mis on React Hooks ja kuidas neid kasutatakse? Tooge näiteid `useState` ja `useEffect` kasutamisest.
- Mis on ühesuunaline andmevoog ja miks see on Reactis oluline?

## Harjutus

- Looge uus React projekt, kasutades Create React App tööriista.
- Looge funktsionaalne komponent, mis kuvab kasutaja nime ja võimaldab seda muuta.
- Lisage komponent, mis loeb ja kuvab andmeid välisest API-st, kasutades `useEffect` Hooki.
- Looge rakendus, mis koosneb mitmest komponendist, mis suhtlevad omavahel, kasutades ühesuunalist andmevoogu.
- Kirjutage komponent, mis demonstreerib kompositsiooni, luues korduvkasutatavaid UI komponente.