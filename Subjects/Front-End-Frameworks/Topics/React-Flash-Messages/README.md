# Reacti Flash-sõnumid

Flash-sõnumid on olulised kasutajale kiire ja ajutise tagasiside andmiseks, näiteks pärast edukat sisselogimist, andmete salvestamist või veateate kuvamist. Reactis on mitmeid viise, kuidas flash-sõnumeid rakendada, alates lihtsast seisundihaldusest (`useState` ja `useEffect`) kuni kolmandate osapoolte teekide kasutamiseni, nagu `react-toastify`. Selles õppematerjalis vaatleme, kuidas implementeerida flash-sõnumeid mõlemal viisil.

- [Reacti Flash-sõnumid](#reacti-flash-sõnumid)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Flash-sõnumid?](#mis-on-flash-sõnumid)
  - [1. Flash-sõnumid, kasutades `useState` ja `useEffect`](#1-flash-sõnumid-kasutades-usestate-ja-useeffect)
    - [Flash-sõnumi Komponendi Loomine](#flash-sõnumi-komponendi-loomine)
    - [Flash-sõnumi Stiilid](#flash-sõnumi-stiilid)
    - [Flash-sõnumite Kasutamine Rakenduses](#flash-sõnumite-kasutamine-rakenduses)
    - [Selgitus](#selgitus)
  - [2. Flash-sõnumid, kasutades `react-toastify`](#2-flash-sõnumid-kasutades-react-toastify)
    - [Paigaldamine](#paigaldamine)
    - [`react-toastify` Kasutamine Rakenduses](#react-toastify-kasutamine-rakenduses)
    - [Selgitus](#selgitus-1)
    - [`react-toastify` kohandamine](#react-toastify-kohandamine)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on flash-sõnumid ja miks neid kasutatakse;
- looma lihtsa flash-sõnumi komponendi, kasutades `useState` ja `useEffect`;
- kasutama `react-toastify` teeki, et lisada rakendusse täiustatud flash-sõnumid;
- integreerima flash-sõnumid Reacti rakendusse ja kuvama neid teatud tegevuste põhjal.

## Mis on Flash-sõnumid?

Flash-sõnumid on ajutised teated, mida kuvatakse kasutajale lühikese aja jooksul, et anda tagasisidet toimingute kohta. Need võivad olla näiteks:

- Edukalt sooritatud toimingu teated (nt "Sisselogimine õnnestus").
- Vead või hoiatused (nt "Sisselogimine ebaõnnestus").
- Informatiivsed sõnumid (nt "Teie andmed on salvestatud").

## 1. Flash-sõnumid, kasutades `useState` ja `useEffect`

### Flash-sõnumi Komponendi Loomine

Loome lihtsa `FlashMessage` komponendi, mis kuvab sõnumi ja kaob automaatselt pärast määratud aega.

```javascript
// FlashMessage.js
import React, { useState, useEffect } from 'react';
import './FlashMessage.css'; // Stiilid flash-sõnumite jaoks

const FlashMessage = ({ message, type, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // Puhastame ajastaja, kui komponent eemaldatakse
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className={`flash-message ${type}`}>
      {message}
    </div>
  );
};

export default FlashMessage;
```

### Flash-sõnumi Stiilid

Loome lihtsad stiilid, et eristada flash-sõnumite tüüpe (nt edu, tõrge, info).

```css
/* FlashMessage.css */
.flash-message {
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  opacity: 0.9;
}

.flash-message.success {
  background-color: #4CAF50; /* Roheline */
}

.flash-message.error {
  background-color: #F44336; /* Punane */
}

.flash-message.info {
  background-color: #2196F3; /* Sinine */
}
```

### Flash-sõnumite Kasutamine Rakenduses

Kasutame `FlashMessage` komponenti rakenduse mõnes tegevuses, näiteks pärast sisselogimist.

```javascript
// LoginPage.js
import React, { useState } from 'react';
import FlashMessage from './FlashMessage';
import './FlashMessage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [flashMessage, setFlashMessage] = useState(null);

  const handleLogin = () => {
    // Näidis autentimise loogika
    if (username === 'user' && password === 'password') {
      // Näita edu sõnumit
      setFlashMessage({ message: 'Login successful!', type: 'success' });
    } else {
      // Näita tõrkesõnumit
      setFlashMessage({ message: 'Login failed. Please try again.', type: 'error' });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button onClick={handleLogin}>Login</button>

      {flashMessage && (
        <FlashMessage
          message={flashMessage.message}
          type={flashMessage.type}
          duration={3000} // Sõnum kaob 3 sekundi pärast
        />
      )}
    </div>
  );
}

export default LoginPage;
```

### Selgitus

- **FlashMessage komponent**: See komponent võtab vastu `message`, `type` ja `duration` propsid. Kui `duration` on möödas, peidab komponent end automaatselt.
- **`useEffect` koos `setTimeout`-iga**: Me kasutame `setTimeout`, et peita sõnumi pärast määratud aega (`duration`).
- **Stiilid**: Lisame stiilid, et sõnumid oleksid visuaalselt eristatavad ja paigutatud fikseeritud asukohale ekraanil.

## 2. Flash-sõnumid, kasutades `react-toastify`

`react-toastify` on populaarne teek, mis pakub lihtsat ja paindlikku viisi flash-sõnumite ehk "toast"-ide kuvamiseks. See võimaldab kuvada teateid mitmel viisil ja pakub suurepärast kasutuskogemust.

### Paigaldamine

Paigaldage `react-toastify` npm-i abil:

```bash
npm install react-toastify
```

### `react-toastify` Kasutamine Rakenduses

```javascript
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer /> {/* Lisame ToastContaineri, et saaks kuvada teateid */}
    </Router>
  );
}

export default App;
```

```javascript
// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Näidis autentimise loogika
    if (username === 'user' && password === 'password') {
      // Näita edu sõnumit
      toast.success('Login successful!');
      // Suuna kasutaja teisele lehele
      navigate('/dashboard');
    } else {
      // Näita tõrkesõnumit
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
```

### Selgitus

- **`ToastContainer` komponent**: See komponent on vajalik `react-toastify` jaoks, et see saaks flash-sõnumeid ehk "toaste" kuvada. See peaks olema lisatud rakenduse juurkomponenti (näiteks `App.js`).
- **`toast` funktsioonid**: Kasutame `toast.success` ja `toast.error` meetodeid, et kuvada edu ja tõrke sõnumeid vastavalt vajadusele.

### `react-toastify` kohandamine

Teeki `react-toastify` saab hõlpsasti kohandada ja konfigureerida erinevateks vajadusteks, näiteks:

```javascript
// Erinevad kohandamisvõimalused
toast.success('Success Message', {
  position:

 toast.POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
```
