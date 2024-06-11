# Reacti `useEffect` Hook

Reacti `useEffect` hook võimaldab teil teostada kõrvalmõjusid (side effects) funktsionaalsetes komponentides. Seda kasutatakse laialdaselt asünkroonsete toimingute, nagu andmete pärimine, DOM-i uuendamine ja ajastatud tegevuste jaoks. `useEffect` hook on üks olulisemaid hooke Reactis, sest see aitab hallata komponentide elutsükli sündmusi.

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on `useEffect` hook ja miks seda kasutatakse;
- kasutama `useEffect` hooki erinevate kõrvalmõjude haldamiseks;
- mõistma, kuidas kasutada `useEffect` hooki sõltuvuste massiivi (dependency array) abil;
- selgitama, kuidas ja millal kasutada `useEffect` cleanup funktsiooni.

## `useEffect` Hooki Ülevaade

`useEffect` hook täidab kõrvalmõjusid funktsionaalsetes komponentides. Need kõrvalmõjud võivad olla näiteks:

- andmete pärimine API-st;
- kohalike salvestatud andmete lugemine või kirjutamine;
- event listener-ite lisamine ja eemaldamine;
- ajastatud tegevuste, nagu ajastajad või intervallid, haldamine;

`useEffect` hook töötab komponentide elutsükli faasides:

- **Määramine**: Kui komponent on renderdatud ja `useEffect` hook on täidetud.
- **Uuendamine**: Kui komponendi olek või rekvisiidid muutuvad ja komponent renderdatakse uuesti.
- **Eemaldamine**: Kui komponent eemaldatakse DOM-st.

### `useEffect` Hooki Süntees

```javascript
useEffect(() => {
  // Tegevus, mis viiakse läbi, kui komponent renderdatakse
  return () => {
    // Cleanup tegevus, mis viiakse läbi, kui komponent eemaldatakse või enne järgmist tegevust
  };
}, [/* Sõltuvuste massiiv */]);
```

- **Tegevus**: Funktsioon, mis täidetakse pärast komponendi renderdamist.
- **Cleanup**: Valikuline funktsioon, mis täidetakse enne komponenti eemaldamist või enne järgmist tegevust.
- **Sõltuvuste massiiv**: Massiiv väärtustest, mille muutumise korral tegevus täidetakse uuesti.

## Näited `useEffect` Hooki Kasutamiseks

### 1. Lihtne Kasutusjuht: Andmete Pärimine API-st

Üks levinumaid `useEffect` hooki kasutusjuhtumeid on andmete pärimine välisest API-st, kui komponent esmakordselt renderdatakse.

```javascript
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Andmete pärimine API-st
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Tühja sõltuvuste massiivi tõttu käivitatakse see ainult üks kord, pärast esimest renderdamist

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

### 2. Sõltuvuste Massiiv: Uuendamine Spetsiifiliste Muutuste Põhjal

`useEffect` hooki saab konfigureerida täitma tegevusi ainult siis, kui teatud väärtused muutuvad, kasutades sõltuvuste massiivi.

```javascript
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('React Counter');

  // See efekt käivitub iga kord, kui 'count' muutub
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Sõltub ainult 'count' väärtusest

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Current Count: {count}</p>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Change title"
      />
    </div>
  );
};

export default Counter;
```

### 3. Cleanup Funktsioon: Resursside Vabastamine

Kui komponent lisab näiteks `event listener`-i või ajastaja, peaks see ka need eemaldama, kui komponent eemaldatakse või kui efekt täidetakse uuesti. Cleanup funktsioonis saab puhastada kõik, mis ei ole enam vajalik.

```javascript
import React, { useState, useEffect } from 'react';

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Lisame event listener-i
    window.addEventListener('resize', handleResize);

    // Cleanup: eemaldame event listener-i
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Tühja sõltuvuste massiiviga, mis tähendab, et see efekt käivitatakse ainult üks kord

  return (
    <div>
      <h2>Window Width: {width}px</h2>
    </div>
  );
};

export default WindowWidth;
```

### 4. Ajastatud Toimingud

`useEffect` hooki saab kasutada ka ajastatud toimingute jaoks, nagu intervallid.

```javascript
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup: puhastame intervalli
    return () => clearInterval(interval);
  }, []); // Käivitatakse ainult üks kord

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
};

export default Timer;
```

## `useEffect` Hooki Olulised Põhimõtted

- **Sõltuvuste Massiiv**: Kontrollib, millal efekt käivitatakse. Kui see jäetakse tühjaks, käivitatakse efekt ainult üks kord, pärast esimest renderdamist. Kui see on määratud väärtustega, käivitatakse efekt iga kord, kui mõni nendest väärtustest muutub.
- **Cleanup Funktsioon**: Kasutatakse ressursside vabastamiseks või puhastamiseks, nagu event listener-ite või ajastajate eemaldamine. See funktsioon täidetakse enne järgmist efekti käivitamist või kui komponent eemaldatakse.
- **Ajastamine**: `useEffect` täidetakse pärast komponenti renderdamist. Kui soovite käivitada koodi vahetult enne renderdamist, kasutage `useLayoutEffect` hooki.
