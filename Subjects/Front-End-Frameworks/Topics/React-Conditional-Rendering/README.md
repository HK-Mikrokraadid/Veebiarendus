# Tingimuslik Renderdamine Reactis

Tingimuslik renderdamine on tehnika, mida kasutatakse komponentide või nende osade kuvamiseks või peitmiseks vastavalt teatud tingimustele. See võimaldab dünaamiliselt muuta kasutajaliidese välimust ja käitumist, lähtudes olekust või propsidest. Selles õppematerjalis käsitleme erinevaid viise, kuidas tingimuslikku renderdamist Reactis kasutada, kasutades ainult funktsionaalseid komponente.

![React Conditional Rendering](React-Conditional.webp)

Pildi allikas: Dall-E by OpenAI

- [Tingimuslik Renderdamine Reactis](#tingimuslik-renderdamine-reactis)
  - [Õpiväljundid](#õpiväljundid)
  - [Tingimusliku Renderdamise Tehnikad](#tingimusliku-renderdamise-tehnikad)
    - [1. `if`-lausung](#1-if-lausung)
      - [Näide: `if`-lausung](#näide-if-lausung)
    - [2. Loogiline `&&`-operaator](#2-loogiline--operaator)
      - [Näide: Loogiline `&&`-operaator](#näide-loogiline--operaator)
    - [3. Ternaaroperaator](#3-ternaaroperaator)
      - [Näide: Ternaaroperaator](#näide-ternaaroperaator)
    - [4. Kohene tagastamine koos tingimusega](#4-kohene-tagastamine-koos-tingimusega)
      - [Näide: Tingimuslik tagastamine](#näide-tingimuslik-tagastamine)
  - [Täiendavad Näited](#täiendavad-näited)
    - [Näide: Tingimuslik Renderdamine Olekuga](#näide-tingimuslik-renderdamine-olekuga)
      - [Näide: `LoginControl.js`](#näide-logincontroljs)
    - [Näide: Mitme Tingimuse Kontrollimine](#näide-mitme-tingimuse-kontrollimine)
      - [Näide: Mitme tingimuse kontrollimine](#näide-mitme-tingimuse-kontrollimine-1)
    - [Näide: Elementide Peitmine](#näide-elementide-peitmine)
      - [Näide: Elementide peitmine](#näide-elementide-peitmine-1)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on tingimuslik renderdamine ja miks seda kasutatakse;
- kasutama erinevaid tingimusliku renderdamise tehnikaid, nagu `if`-lausungid, loogilised `&&`-operaatorid ja ternaaroperaatorid;
- rakendama tingimuslikku renderdamist praktilistes näidetes, kasutades funktsionaalseid komponente.

## Tingimusliku Renderdamise Tehnikad

### 1. `if`-lausung

Klassikaline viis tingimusliku renderdamise saavutamiseks on kasutada `if`-lausungit. Seda tehnikat kasutatakse tavaliselt renderdamisfunktsiooni sees.

#### Näide: `if`-lausung

```javascript
import React from 'react';

function UserGreeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

export default UserGreeting;
```

### 2. Loogiline `&&`-operaator

Loogilist `&&`-operaatorit saab kasutada, kui soovite renderdada komponenti ainult siis, kui tingimus on tõene. Kui tingimus on väär, ei renderdata midagi.

#### Näide: Loogiline `&&`-operaator

```javascript
import React from 'react';

function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2>
      }
    </div>
  );
}

export default Mailbox;
```

### 3. Ternaaroperaator

Ternaaroperaator (`? :`) on kompaktne viis tingimusliku renderdamise saavutamiseks, mis võimaldab renderdada üht või teist komponenti sõltuvalt tingimusest.

#### Näide: Ternaaroperaator

```javascript
import React from 'react';

function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign up.</h1>
      )}
    </div>
  );
}

export default Greeting;
```

### 4. Kohene tagastamine koos tingimusega

Kui soovite renderdamist otse funktsioonis teha, võite kasutada tingimuslikku lauset komponentide otse tagastamiseks.

#### Näide: Tingimuslik tagastamine

```javascript
import React from 'react';

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

export default Greeting;
```

## Täiendavad Näited

### Näide: Tingimuslik Renderdamine Olekuga

Kasutame Reacti olekut, et hallata, kas kasutaja on sisse logitud või mitte, ja kuvada vastavalt tervitussõnumit.

#### Näide: `LoginControl.js`

```javascript
import React, { useState } from 'react';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
    </div>
  );
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

export default LoginControl;
```

### Näide: Mitme Tingimuse Kontrollimine

Kui teil on vaja kontrollida mitut tingimust, saate kombineerida erinevaid tingimusliku renderdamise tehnikaid.

#### Näide: Mitme tingimuse kontrollimine

```javascript
import React from 'react';

function StatusMessage({ isOnline, hasMessages }) {
  if (!isOnline) {
    return <p>User is offline.</p>;
  }

  return (
    <div>
      <p>User is online.</p>
      {hasMessages ? (
        <p>You have new messages.</p>
      ) : (
        <p>No new messages.</p>
      )}
    </div>
  );
}

export default StatusMessage;
```

### Näide: Elementide Peitmine

Tingimuslik renderdamine võimaldab ka elemente peita, jättes need DOM-ist välja.

#### Näide: Elementide peitmine

```javascript
import React, { useState } from 'react';

function WarningBanner({ warn }) {
  if (!warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

function Page() {
  const [showWarning, setShowWarning] = useState(true);

  const handleToggleClick = () => {
    setShowWarning(prevShowWarning => !prevShowWarning);
  };

  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? 'Hide' : 'Show'} Warning
      </button>
    </div>
  );
}

export default Page;
```
