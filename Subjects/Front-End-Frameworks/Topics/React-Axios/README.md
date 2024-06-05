# React ja Axios: Andmete Pärimine ja Kuvamine

React on populaarne JavaScripti teek kasutajaliideste loomiseks, samas kui Axios on lubadustepõhine HTTP klient, mida kasutatakse andmete pärimiseks ja saatmiseks. Koos kasutatuna võimaldavad need tööriistad luua dünaamilisi ja andmepõhiseid veebirakendusi. Selles õppematerjalis käsitleme, kuidas paigaldada ja seadistada Axios React projektis, kuidas pärida andmeid välisest API-st ja kuidas saadud andmeid kuvada.

![React ja Axios](React-Axios.webp)

Pildi allikas: Dall-E by OpenAI

- [React ja Axios: Andmete Pärimine ja Kuvamine](#react-ja-axios-andmete-pärimine-ja-kuvamine)
  - [Õpiväljundid](#õpiväljundid)
  - [Eeldused](#eeldused)
  - [Samm 1: Projekti Seadistamine](#samm-1-projekti-seadistamine)
    - [1.1. React projekti loomine](#11-react-projekti-loomine)
    - [1.2. Axios mooduli paigaldamine](#12-axios-mooduli-paigaldamine)
  - [Samm 2: Andmete Pärimine Axios-e Abil](#samm-2-andmete-pärimine-axios-e-abil)
    - [2.1. Komponendi Loomine](#21-komponendi-loomine)
      - [Näide: `UserList.js`](#näide-userlistjs)
    - [Selgitus](#selgitus)
    - [2.2. Komponendi Lisamine Rakendusse](#22-komponendi-lisamine-rakendusse)
      - [Näide: `App.js`](#näide-appjs)
  - [Samm 3: Vigade Käsitlemine ja Parimad Praktikad](#samm-3-vigade-käsitlemine-ja-parimad-praktikad)
    - [3.1. Vigade Käsitlemine](#31-vigade-käsitlemine)
    - [3.2. Andmete Laadimise Olek](#32-andmete-laadimise-olek)
    - [3.3. Parimad Praktikad](#33-parimad-praktikad)
  - [Täiendav Näide: Parameetriline Päring](#täiendav-näide-parameetriline-päring)
    - [4.1. Komponendi Loomine](#41-komponendi-loomine)
      - [Näide: `UserDetail.js`](#näide-userdetailjs)
    - [4.2. Komponendi Kasutamine](#42-komponendi-kasutamine)
      - [Näide: `App.js`](#näide-appjs-1)
      - [Näide: `UserList.js` (muudetud)](#näide-userlistjs-muudetud)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- paigaldama ja seadistama Axios moodulit React projektis;
- pärima andmeid välisest API-st, kasutades Axiose moodulit;
- kuvama saadud andmeid React komponentides;
- käsitlema võimalikke vigu andmete pärimisel ja kuvamisel.

## Eeldused

- Node.js ja npm on arvutisse paigaldatud.
- Põhilised teadmised Reacti komponentidest ja oleku haldamisest.

## Samm 1: Projekti Seadistamine

### 1.1. React projekti loomine

Kui teil ei ole veel React projekti, looge uus projekt, kasutades Create React App tööriista.

```bash
npx create-react-app myapp
cd myapp
```

### 1.2. Axios mooduli paigaldamine

Paigaldame Axios mooduli.

```bash
npm install axios
```

## Samm 2: Andmete Pärimine Axios-e Abil

### 2.1. Komponendi Loomine

Loome uue komponendi, kus pärime andmeid ja kuvame neid.

#### Näide: `UserList.js`

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

### Selgitus

- **useState**: Kasutame olekut, et hallata kasutajate andmeid, laadimise olekut ja vigu.
- **useEffect**: Pärime andmeid API-st komponendi laadimisel.
- **axios.get**: Pärime andmeid välisest API-st (antud juhul `https://jsonplaceholder.typicode.com/users`).
- **setUsers**: Värskendame kasutajate olekut saadud andmetega.
- **setLoading**: Värskendame laadimise olekut.
- **setError**: Värskendame vea olekut, kui päring ebaõnnestub.

### 2.2. Komponendi Lisamine Rakendusse

Muudame `App.js` faili, et kuvada `UserList` komponent.

#### Näide: `App.js`

```javascript
import React from 'react';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <UserList />
    </div>
  );
}

export default App;
```

## Samm 3: Vigade Käsitlemine ja Parimad Praktikad

### 3.1. Vigade Käsitlemine

Koodis on juba näidatud, kuidas käsitleda vigu andmete pärimisel. Kui päring ebaõnnestub, värskendame vea olekut ja kuvame vea teate.

```javascript
if (error) {
  return <p>Error: {error.message}</p>;
}
```

### 3.2. Andmete Laadimise Olek

On oluline käsitleda ka laadimise olekut, et kasutaja teaks, kui andmed on veel laadimisel.

```javascript
if (loading) {
  return <p>Loading...</p>;
}
```

### 3.3. Parimad Praktikad

- **Kasuta `useEffect` Hooki**: Andmete pärimine tuleks teostada `useEffect` hooki abil, et päring tehtaks komponendi laadimisel.
- **Error Boundaries**: Kasuta veakäsitluse komponente (`Error Boundaries`), et püüda vigu komponentides.
- **Abstraktsioon**: Abstraheeri API päringud eraldi failidesse või teenustesse, et hoida kood puhtana ja taaskasutatav.

## Täiendav Näide: Parameetriline Päring

Lisame veel ühe näite, kus pärime andmeid parameetriga.

### 4.1. Komponendi Loomine

Loome komponendi, kus pärime andmeid konkreetse kasutaja kohta.

#### Näide: `UserDetail.js`

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetail({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserDetail;
```

### 4.2. Komponendi Kasutamine

Muudame `App.js` faili, et kuvada `UserDetail` komponent.

#### Näide: `App.js`

```javascript
import React, { useState } from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <div className="App">
      <UserList onSelectUser={setSelectedUserId} />
      {selectedUserId && <UserDetail userId={selectedUserId} />}
    </div>
  );
}

export default App;
```

#### Näide: `UserList.js` (muudetud)

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList({ onSelectUser }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onSelectUser(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```
