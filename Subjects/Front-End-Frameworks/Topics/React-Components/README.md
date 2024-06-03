# Reacti Komponendid

## Sissejuhatus

React on populaarne JavaScripti teek, mida kasutatakse kasutajaliideste loomiseks. Reacti põhiline mõiste ja ehitusplokk on komponent. Komponendid võimaldavad arendajatel jaotada kasutajaliidese väikesteks, taaskasutatavateks tükkideks, mis muudab arendamise ja hooldamise lihtsamaks.

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- Selgitama, mis on Reacti komponent ja miks see on oluline.
- Loome ja kasutama erinevat tüüpi komponente (funktsionaalsed ja klassipõhised).
- Kasutama props-e ja olekut komponentide vahelise suhtluse ja dünaamilise andmete haldamiseks.

## Mis on Reacti Komponent?

Komponent on iseseisev ja taaskasutatav kooditükk, mis defineerib osa kasutajaliidesest. Iga komponent võib sisaldada nii HTML-i, JavaScripti kui ka CSS-i. Reactis on kahte tüüpi komponente: funktsionaalsed ja klassipõhised komponendid.

### Funktsionaalsed Komponendid

Funktsionaalsed komponendid on JavaScripti funktsioonid, mis võtavad sisendiks props-e ja tagastavad Reacti elemente.

#### Näide: Funktsionaalne Komponent

```javascript
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;
```

### Klassipõhised Komponendid

Klassipõhised komponendid on JavaScripti klassid, mis laiendavad `React.Component` klassi. Need komponendid võivad omada oma olekut ja elutsükli meetodeid.

#### Näide: Klassipõhine Komponent

```javascript
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
```

## Props

Props (lühend sõnast "properties") on andmed, mida edastatakse komponentidele. Props-id võimaldavad komponentidel saada andmeid oma vanemkomponentidelt ja kuvada neid.

### Näide: Props-ide Kasutamine

```javascript
import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;
```

Selles näites saab `Welcome` komponent `name` props-i, mida kasutatakse tervitussõnumi kuvamiseks.

## Olek (State)

Olek (state) on komponentide sisemine andmemudel, mis võib muutuda aja jooksul. Oleku muutmine kutsub esile komponendi uuesti renderdamise, et kajastada muutusi kasutajaliideses.

### Näide: Oleku Kasutamine Klassipõhises Komponendis

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

### Näide: Oleku Kasutamine Funktsionaalses Komponendis (Hooks)

Reacti Hookid (`useState`, `useEffect` jne) võimaldavad funktsionaalsetel komponentidel kasutada olekut ja muid Reacti funktsioone.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

## Komponentide Komponeerimine

Komponentide komponering tähendab väiksemate komponentide kombineerimist suuremateks, keerukamateks komponentideks. See lähenemine võimaldab taaskasutatavust ja lihtsustab koodi hooldamist.

### Näide: Komponentide Komponeerimine

```javascript
import React from 'react';

function Header() {
  return <header><h1>My App</h1></header>;
}

function Footer() {
  return <footer><p>© 2024 My App</p></footer>;
}

function Main() {
  return <main><p>Welcome to my app!</p></main>;
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
```

## Elutsükli Meetodid

Elutsükli meetodid on spetsiaalsed meetodid, mis võimaldavad komponentidel käituda erinevates etappides nende eluea jooksul. Neid kasutatakse peamiselt klassipõhistes komponentides.

### Peamised Elutsükli Meetodid

1. **componentDidMount**: Kutsutakse pärast komponendi esmakordset renderdamist.
2. **componentDidUpdate**: Kutsutakse pärast seda, kui komponendi olek või props-id on muutunud.
3. **componentWillUnmount**: Kutsutakse vahetult enne komponendi eemaldamist DOM-ist.

#### Näide: Elutsükli Meetodite Kasutamine

```javascript
import React, { Component } from 'react';

class LifecycleDemo extends Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Lifecycle Demo</div>;
  }
}

export default LifecycleDemo;
```
