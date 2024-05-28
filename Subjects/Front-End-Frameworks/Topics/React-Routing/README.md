# Reacti Marsruutimine (Routing)

Marsruutimine on veebirakenduste oluline osa, mis võimaldab erinevate vaadete ja komponentide vahel navigeerimist. Reactis kasutatakse tavaliselt `react-router-dom` teeki, et hallata marsruute ja luua sujuv kasutajakogemus. Selles peatükis käsitleme Reacti marsruutimise põhitõdesid, sealhulgas marsruutide määratlemist, linkide loomist, dünaamilisi marsruute ja 404 lehtede haldamist.

![React-Router](React-Router.webp)

Pildi allikas: Dall-E by OpenAI

- [Reacti Marsruutimine (Routing)](#reacti-marsruutimine-routing)
  - [Õpiväljundid](#õpiväljundid)
  - [Marsruutimine Reactis](#marsruutimine-reactis)
    - [Mis on marsruutimine?](#mis-on-marsruutimine)
    - [`react-router-dom` paigaldamine](#react-router-dom-paigaldamine)
    - [Põhikomponendid](#põhikomponendid)
  - [Marsruutide Määratlemine](#marsruutide-määratlemine)
    - [Näide: Lihtne marsruutimine](#näide-lihtne-marsruutimine)
      - [App.js](#appjs)
      - [Home.js](#homejs)
      - [About.js](#aboutjs)
    - [Linkide loomine](#linkide-loomine)
      - [Näide: Linkide kasutamine](#näide-linkide-kasutamine)
  - [Dünaamilised Marsruudid](#dünaamilised-marsruudid)
    - [Näide: Dünaamiline marsruut](#näide-dünaamiline-marsruut)
      - [User.js](#userjs)
      - [App.js](#appjs-1)
    - [404 Lehtede Halduse](#404-lehtede-halduse)
      - [Näide: 404 lehe haldamine](#näide-404-lehe-haldamine)
      - [NotFound.js](#notfoundjs)
      - [App.js](#appjs-2)
  - [Marsruutimise Parimad Praktikad](#marsruutimise-parimad-praktikad)
  - [Praktiline Näide: Täielik Marsruutimine](#praktiline-näide-täielik-marsruutimine)
    - [App.js](#appjs-3)
    - [Navigation.js](#navigationjs)
    - [Home.js](#homejs-1)
    - [About.js](#aboutjs-1)
    - [User.js](#userjs-1)
    - [NotFound.js](#notfoundjs-1)
  - [Allikad](#allikad)
  - [Kontrollküsimused või harjutus](#kontrollküsimused-või-harjutus)
  - [Harjutus](#harjutus)

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on marsruutimine ja miks seda kasutatakse Reactis;
- paigaldama ja seadistama `react-router-dom` teeki;
- looma ja haldama marsruute Reacti rakendustes;
- kasutama linke ja navigeerimist komponentide vahel liikumiseks;
- looma dünaamilisi marsruute ja haldama 404 lehti.

## Marsruutimine Reactis

### Mis on marsruutimine?

Marsruutimine võimaldab veebirakendustel pakkuda erinevaid vaateid või lehti, mis vastavad kasutaja poolt sisestatud URL-ile. Marsruutimine võimaldab navigeerida lehtede vahel ilma kogu lehte uuesti laadimata, pakkudes seega sujuvamat ja paremat kasutajakogemust.

### `react-router-dom` paigaldamine

Marsruutimise haldamiseks Reactis kasutatakse tavaliselt `react-router-dom` teeki. Selle paigaldamiseks kasutage järgmisi käske:

```bash
npm install react-router-dom
```

### Põhikomponendid

- **BrowserRouter:** Peamine konteiner, mis haldab URL-ide ajalugu ja pakub konteksti marsruutide jaoks.
- **Routes:** Mahutav komponent, mis sisaldab erinevaid marsruute.
- **Route:** Marsruudi määratlemiseks ja vastava komponendi renderdamiseks kasutatav komponent.
- **Link:** Kasutatakse, et luua linke, mis võimaldavad navigeerimist ilma lehte uuesti laadimata.

## Marsruutide Määratlemine

### Näide: Lihtne marsruutimine

#### App.js

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

#### Home.js

```javascript
import React from 'react';

function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
```

#### About.js

```javascript
import React from 'react';

function About() {
  return <h1>About Page</h1>;
}

export default About;
```

### Linkide loomine

Linkide loomine võimaldab kasutajatel navigeerida lehtede vahel ilma kogu lehte uuesti laadimata.

#### Näide: Linkide kasutamine

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
```

Lisage `Navigation` komponent `App` komponendi sisse, et kuvada lingid kõigil lehtedel:

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## Dünaamilised Marsruudid

Dünaamilised marsruudid võimaldavad kuvada erinevaid komponente sõltuvalt URL-i parameetritest. Näiteks saab dünaamilisi marsruute kasutada kasutaja profiilide kuvamiseks, kus iga profiil vastab unikaalsele ID-le.

### Näide: Dünaamiline marsruut

#### User.js

```javascript
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return <h1>User ID: {userId}</h1>;
}

export default User;
```

#### App.js

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 404 Lehtede Halduse

404 lehtede haldamine võimaldab kuvada sõbraliku veateate, kui kasutaja proovib navigeerida mitteolemasolevale lehele.

#### Näide: 404 lehe haldamine

#### NotFound.js

```javascript
import React from 'react';

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default NotFound;
```

#### App.js

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
import NotFound from './NotFound';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## Marsruutimise Parimad Praktikad

- **Selged ja kirjeldavad URL-id:** Kasutage selgeid ja kirjeldavaid URL-e, mis peegeldavad lehe sisu.
- **Navigeerimise komponendid:** Kasutage navigeerimise komponente (nt `Link`), et võimaldada sujuvat navigeerimist.
- **404 lehtede haldamine:** Lisage rakendusele 404 leht, et käsitleda mitteolemasolevaid lehti.
- **Dünaamilised marsruudid:** Kasutage dünaamilisi marsruute, et kuvada erinevaid komponente sõltuvalt URL-i parameetritest.

## Praktiline Näide: Täielik Marsruutimine

### App.js

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
import NotFound from './NotFound';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Navigation.js

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
```

### Home.js

```javascript
import React from 'react';

function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
```

### About.js

```javascript
import React from 'react';

function About() {
  return <h1>About Page</h1>;
}

export default About;
```

### User.js

```javascript
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userId } = useParams();
  return <h1>User ID: {userId}</h1>;
}

export default User;
```

### NotFound.js

```javascript
import React from 'react';

function NotFound() {
  return <h1>404 - Page Not Found

</h1>;
}

export default NotFound;
```

## Allikad

- [React Router Documentation](https://reactrouter.com/)
- [React Official Documentation - Main Concepts](https://reactjs.org/docs/getting-started.html)
- [JavaScript Front-End Frameworks and Libraries](https://www.javascriptstuff.com/)

## Kontrollküsimused või harjutus

- Mis on marsruutimine ja miks see on oluline Reactis?
- Kuidas paigaldada ja seadistada `react-router-dom` teeki?
- Kuidas luua lihtsaid ja dünaamilisi marsruute Reactis?
- Kuidas kasutada `Link` komponenti navigeerimise loomiseks?
- Kuidas hallata 404 lehti Reacti rakenduses?

## Harjutus

- Looge uus React projekt, kasutades Create React App tööriista.
- Paigaldage `react-router-dom` teek.
- Looge mitme lehega rakendus, mis sisaldab Home, About ja Contact lehti, kasutades marsruutimist.
- Lisage navigeerimise komponendid, et võimaldada lehtede vahel liikumist.
- Looge dünaamiline marsruut kasutaja profiili kuvamiseks, kus iga profiil vastab unikaalsele ID-le.
- Lisage 404 leht, et käsitleda mitteolemasolevaid lehti.
