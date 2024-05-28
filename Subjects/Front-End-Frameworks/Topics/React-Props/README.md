# Propsid Reactis

## Sissejuhatus

Propsid (lühend sõnast "properties") on Reacti oluline kontseptsioon, mis võimaldab komponentide vahel andmeid edastada. Propsid võimaldavad komponentidel olla dünaamilised ja korduvkasutatavad, andes neile võimaluse saada ja kasutada väliseid väärtusi. Selles peatükis käsitleme propside põhialuseid, nende kasutamist ja parimaid praktikaid.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Selgitama, mis on propsid ja kuidas neid kasutatakse Reactis.
- Loome komponente, mis saavad ja kasutavad propsid.
- Edastama andmeid vanemkomponendist lapsekomponentidele propside abil.
- Kasutama `PropTypes`-i komponentide propside valideerimiseks.

## Mis on propsid?

Propsid on andmed, mis edastatakse vanemkomponendist lapsekomponenti. Need on ainult loetavad ja ei saa olla seesama komponentide poolt muudetavad. Propsid võimaldavad komponentidel olla dünaamilised ja korduvkasutatavad, sest need saavad oma väärtused väljastpoolt.

### Propside kasutamine

Propsid edastatakse komponentidele sarnaselt HTML atribuutidega. Allpool on näide, kuidas kasutada propsid funktsionaalses komponendis.

#### Näide: Funktsionaalne komponent, mis kasutab propsid

```javascript
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

Vanemkomponent võib edastada `name` propsi lapsekomponendile `Greeting` järgmiselt:

```javascript
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;
```

### Propside kasutamine klassipõhises komponendis

Propsid on ligipääsetavad ka klassipõhistes komponentides `this.props` abil.

#### Näide: Klassipõhine komponent, mis kasutab propsid

```javascript
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h

### Propside kasutamine klassipõhises komponendis (jätk)

Propsid on ligipääsetavad ka klassipõhistes komponentides `this.props` abil.

#### Näide: Klassipõhine komponent, mis kasutab propsid

```javascript
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

Vanemkomponent võib edastada `name` propsi lapsekomponendile `Greeting` järgmiselt:

```javascript
import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting name="John" />
        <Greeting name="Jane" />
      </div>
    );
  }
}

export default App;
```

### Propside edasiandmine

Propsid võimaldavad andmete edasiandmist komponentide vahel, võimaldades hierarhilist struktuuri andmevoos. Sageli edastatakse propsid mitme taseme kaudu, mida nimetatakse propside edasiandmiseks (*prop drilling*).

#### Näide: Propside edasiandmine

```javascript
import React from 'react';

function Grandchild(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Child(props) {
  return <Grandchild name={props.name} />;
}

function Parent() {
  return <Child name="John" />;
}

export default Parent;
```

### Propside vaikeväärtused

Komponentidele saab määrata propside vaikeväärtused, kui propsid ei ole määratud.

#### Näide: Propside vaikeväärtused

```javascript
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Greeting.defaultProps = {
  name: 'Stranger'
};

export default Greeting;
```

### Propside tüübi valideerimine PropTypes abil

React pakub `PropTypes` teeki, mis võimaldab propside tüüpide valideerimist. See aitab tagada, et komponendid saavad õiget tüüpi propsid ja aidata leida vigu arendamise ajal.

#### Näide: PropTypes kasutamine

```javascript
import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;
```

#### Näide: Kohustuslikud propsid

```javascript
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};
```

### Propside parimad praktikad

- **Kasutage selgeid ja kirjeldavaid nimesid:** Andke propsidele nimed, mis peegeldavad nende sisu ja eesmärki.
- **Määrake vaikeväärtused:** Kasutage `defaultProps`, et määrata propsidele vaikeväärtused, kui need ei ole määratud.
- **Valideerige propsid:** Kasutage `PropTypes`, et tagada propside õigsus ja aidata leida vigu arendamise ajal.
- **Propside edasiandmine:** Vältige propside tarbetut edasiandmist liiga paljude tasemete kaudu. Kasutage konteksti või olekuhaldusraamistikke, kui andmeid tuleb edastada paljude komponentide kaudu.

## Allikad

- [React Official Documentation - Components and Props](https://reactjs.org/docs/components-and-props.html)
- [React Official Documentation - Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [JavaScript Front-End Frameworks and Libraries](https://www.javascriptstuff.com/)

## Kontrollküsimused või harjutus

- Mis on propsid ja kuidas need erinevad olekust (*state*)?
- Kuidas kasutada propsid funktsionaalsetes komponentides?
- Kuidas kasutada propsid klassipõhistes komponentides?
- Kuidas määrata propsidele vaikeväärtused?
- Kuidas kasutada `PropTypes`, et valideerida propside tüüpe?

## Harjutus

- Looge uus React projekt, kasutades Create React App tööriista.
- Looge funktsionaalne komponent, mis võtab vastu propsi ja kuvab selle.
- Looge klassipõhine komponent, mis võtab vastu propsi ja kuvab selle.
- Määrake propsidele vaikeväärtused ja näidake, kuidas neid kasutatakse.
- Kasutage `PropTypes`, et valideerida propside tüüpe ja tagada, et komponent saab õige tüübi propsid.
- Rakendage propside edasiandmine mitme komponendi kaudu ja demonstreerige, kuidas andmeid saab edastada hierarhiliselt.
