# Reacti Sündmuste Haldus (Event Handling)

## Sissejuhatus

Sündmuste haldamine on Reacti rakenduste oluline osa, mis võimaldab reageerida kasutaja sisenditele ja interaktsioonidele, näiteks klikkidele, sisestustele ja hiireliigutustele. Reactis on sündmuste haldamine sarnane DOM-i sündmuste haldamisele, kuid sisaldab mõningaid erinevusi ja optimeerimisi, et parandada koodi loetavust ja hooldatavust. Selles peatükis käsitleme Reacti sündmuste haldamise põhitõdesid, sündmuste tüüpe ja parimaid praktikaid.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Selgitama, kuidas sündmuste haldamine töötab Reactis.
- Rakendama sündmuste käsitlejaid funktsionaalsetes ja klassipõhistes komponentides.
- Kasutama sündmuste käsitlejaid erinevate sündmuste jaoks (nt klikk, muutmine, submit).
- Rakendama sündmuste haldamise parimaid praktikaid Reactis.

## Sündmuste haldamine Reactis

### Mis on sündmuste haldamine?

Sündmuste haldamine hõlmab funktsioonide määramist, mis käivituvad kasutaja tegevuste põhjal, näiteks klikkide, klahvivajutuste või vormi esitamise korral. Reactis on sündmuste haldamine sarnane JavaScripti DOM sündmuste haldamisega, kuid sisaldab mõningaid erinevusi.

### Sündmuste haldamise põhialused

- **Sündmuste nimed:** Reacti sündmuste nimed kasutavad CamelCase süntaksit (nt `onClick`, `onChange`).
- **Sündmuste käsitlejad:** Sündmuste käsitlejad on funktsioonid, mis määratakse sündmuse atribuudina (nt `{this.handleClick}`).
- **Sünteetilised sündmused:** React kasutab sünteetilisi sündmusi, mis on ühtsed sündmuse objektid erinevates brauserites, et tagada paremat ühilduvust.

### Näide: Sündmuste haldamine funktsionaalsetes komponentides

#### Klikisündmuse käsitlemine

```javascript
import React from 'react';

function App() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
```

### Näide: Sündmuste haldamine klassipõhistes komponentides

#### Klikisündmuse käsitlemine

```javascript
import React, { Component } from 'react';

class App extends Component {
  handleClick() {
    alert('Button clicked!');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;
```

### Sündmuste haldamine ja this kontekst

Klassipõhistes komponentides tuleb tihti siduda sündmuste käsitlejad komponendi kontekstiga, kasutades `bind` meetodit või noolfunktsioone.

#### Sidumine konstruktoris

```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Button clicked!');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
```

#### Noolfunktsioonide kasutamine

```javascript
class App extends Component {
  handleClick = () => {
    alert('Button clicked!');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
```

### Sündmuste tüübid Reactis

#### Klikisündmused

```javascript
function App() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleClick}>Click me</button>
  );
}
```

#### Muutmissündmused

```javascript
function App() {
  function handleChange(event) {
    console.log('Input value:', event.target.value);
  }

  return (
    <input type="text" onChange={handleChange} />
  );
}
```

#### Vormide esitamine

```javascript
function App() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Sünteetilised sündmused

React kasutab sünteetilisi sündmusi, mis on ühtsed sündmuse objektid erinevates brauserites, tagades parema ühilduvuse ja järjepidevuse.

```javascript
function App() {
  function handleEvent(event) {
    console.log(event.type); // Näiteks "click"
  }

  return (
    <button onClick={handleEvent}>Click me</button>
  );
}
```

### Sündmuste haldamise parimad praktikad

- **Kasutage noolfunktsioone või bind:** Siduge sündmuste käsitlejad komponendi kontekstiga, kasutades noolfunktsioone või `bind` meetodit.
- **Vältige inline sündmuste käsitlejaid:** Inline sündmuste käsitlejad võivad põhjustada tarbetuid renderdamisi ja jõudlusprobleeme.
- **Halda sündmusi sünteetiliselt:** Kasutage Reacti sünteetilisi sündmusi, et tagada ühilduvus ja järjepidevus erinevates brauserites.
- **Debounce ja throttle:** Kasutage debounce või throttle tehnikaid, et piirata sündmuste käsitlejate kutsumist intensiivsete sündmuste korral (nt sisestamise või kerimise sündmused).

## Praktiline näide: Kompleksne sündmuste haldamine

### Olekuhaldus ja sündmuste käsitlemine

```javascript
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedName(name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <h1>Hello, {submittedName}!</h1>}
    </div>
  );
}

export default App;
```

## Allikad

- [React Official Documentation - Handling Events](https://reactjs.org/docs/handling-events.html)
- [JavaScript Front-End Frameworks and Libraries](https://www.javascriptstuff.com/)
- [MDN Web Docs - Event Handling](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)

## Kontrollküsimused või harjutus

- Mis on sündmuste haldamine ja miks see on oluline Reactis?
- Kuidas siduda sündmuste käsitlejad klassipõhistes komponentides?
- Kirjeldage, kuidas kasutada noolfunktsioone sündmuste käsitlejate määramiseks.
- Millised on erinevad sündmuste tüübid Reactis ja kuidas neid käsitleda?
- Mis on sünteetilised sündmused ja miks neid kasutatakse Reactis?

## Harjutus

- Looge uus React projekt, kasutades Create React App tööriista.
- Looge komponent, mis sisaldab nuppu ja kuvab teate, kui nuppu klõpsatakse.
- Lisage tekstisisestusväli ja kuvage kasutaja sisestatud väärtus reaalajas, kasutades sündmuste haldamist.
- Rakendage vormi esitamise sündmuse käsitlemine, et kuvada vormi sisendite väärtused pärast vormi esitamist.
- Katsetage erinevate sündmuste tüüpidega (nt klikk, muutmine, submit) ja rakendage sündmuste käsitlemise parimaid praktikaid.
