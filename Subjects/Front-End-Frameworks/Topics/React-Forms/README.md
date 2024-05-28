# Reacti Vormid ja Kasutaja Sisend

Vormid on oluline osa veebirakendustest, kuna need võimaldavad kasutajatel sisestada ja esitada andmeid. Reactis on vormide ja kasutaja sisendi haldamine veidi erinev traditsioonilisest DOM-i käsitsemisest, pakkudes rohkem kontrolli ja lihtsamat sünkroniseerimist komponentide olekuga. Selles peatükis käsitleme, kuidas luua ja hallata vorme Reactis, kuidas töötada kontrollitud ja kontrollimata komponentidega ning kuidas valida parimaid praktikaid kasutaja sisendi käsitlemiseks.

![React Forms](React-Forms.webp)

Pildi allikas: Dall-E by OpenAI

- [Reacti Vormid ja Kasutaja Sisend](#reacti-vormid-ja-kasutaja-sisend)
  - [Õpiväljundid](#õpiväljundid)
  - [Kontrollitud ja Kontrollimata Komponendid](#kontrollitud-ja-kontrollimata-komponendid)
    - [Kontrollitud komponendid](#kontrollitud-komponendid)
      - [Näide: Kontrollitud komponent](#näide-kontrollitud-komponent)
    - [Kontrollimata komponendid](#kontrollimata-komponendid)
      - [Näide: Kontrollimata komponent](#näide-kontrollimata-komponent)
  - [Vormide Halduse Põhialused](#vormide-halduse-põhialused)
    - [Sündmuste käsitlemine](#sündmuste-käsitlemine)
      - [Näide: Vormide sündmuste käsitlemine](#näide-vormide-sündmuste-käsitlemine)
    - [Mitme sisendiga vormid](#mitme-sisendiga-vormid)
      - [Näide: Mitme sisendiga vorm](#näide-mitme-sisendiga-vorm)
    - [Vormide valideerimine](#vormide-valideerimine)
      - [Näide: Kliendipoolne valideerimine](#näide-kliendipoolne-valideerimine)
  - [Parimad Praktikad Vormide Halduseks](#parimad-praktikad-vormide-halduseks)
  - [Praktiline Näide: Täielik Vorm](#praktiline-näide-täielik-vorm)
    - [Kontrollitud Vorm koos Valideerimisega](#kontrollitud-vorm-koos-valideerimisega)
  - [Allikad](#allikad)
  - [Kontrollküsimused või harjutus](#kontrollküsimused-või-harjutus)
  - [Harjutus](#harjutus)

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- looma ja haldama vorme Reactis;
- kasutama kontrollitud ja kontrollimata komponente kasutaja sisendi haldamiseks;
- rakendama sündmuste käsitlejaid vormide ja sisendite haldamiseks;
- kasutama parimaid praktikaid kasutaja sisendi käsitlemiseks Reactis.

## Kontrollitud ja Kontrollimata Komponendid

### Kontrollitud komponendid

Kontrollitud komponentides juhib komponentide olek vormielementide väärtusi. Kõik andmed sisendites on salvestatud komponendi olekus ja värskendatud sündmuste käsitlejate kaudu.

#### Näide: Kontrollitud komponent

```javascript
import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```

### Kontrollimata komponendid

Kontrollimata komponentides juhitakse vormielemente otse DOM-i kaudu, kasutades ref-e, et pääseda väärtustele.

#### Näide: Kontrollimata komponent

```javascript
import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameInput = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted name: ${nameInput.current.value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameInput} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

## Vormide Halduse Põhialused

### Sündmuste käsitlemine

Sündmuste käsitlemine on oluline vormide haldamise osa Reactis. Seda tehakse tavaliselt vormi esitamisel (`onSubmit`) ja sisendite muutmisel (`onChange`).

#### Näide: Vormide sündmuste käsitlemine

```javascript
import React, { useState } from 'react';

function FormHandling() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormHandling;
```

### Mitme sisendiga vormid

Mitme sisendiga vormide puhul saab kasutada ühte sündmuste käsitlejat ja salvestada sisendid olekus objektina.

#### Näide: Mitme sisendiga vorm

```javascript
import React, { useState } from 'react';

function MultiInputForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiInputForm;
```

### Vormide valideerimine

Vormide valideerimine on oluline kasutaja sisendi kontrollimiseks enne vormi esitamist. Valideerimist saab teha nii kliendipoolt (brauseris) kui ka serveripoolt.

#### Näide: Kliendipoolne valideerimine

```javascript
import React, { useState } from 'react';

function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function validate() {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(`Email: ${email}, Password: ${password}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
        {errors.email && <p>{errors.email}</p>}
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
        {errors.password && <p>{errors.password}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidatedForm;
```

## Parimad Praktikad Vormide Halduseks

- **Kasutage kontrollitud komponente:** Kontrollitud komponendid pakuvad rohkem kontrolli vormi oleku üle ja lihtsustavad valideerimist.
- **Kasutage ref-e kontrollimata komponentide jaoks:** Ref-e saab kasutada, kui otsest juurdepääsu DOM-elementidele on vaja.
- **Rakendage sündmuste käsitlejad:** Kasutage sündmuste käsitlejaid vormi sisendi muutuste ja vormi esitamise haldamiseks.
- **Valideerige kasutaja sisend:** Kontrollige kasutaja sisendit enne vormi esitamist, et vältida vigade või puuduliku sisendi salvestamist.

## Praktiline Näide: Täielik Vorm

### Kontrollitud Vorm koos Valideerimisega

```javascript
import React, { useState } from 'react';

function CompleteForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validate() {
    const errors = {};
    if (!formData.username) {
      errors.username = 'Username is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  }

  function handleSubmit(event) {
    event.prevent

Default();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CompleteForm;
```

## Allikad

- [React Official Documentation - Forms](https://reactjs.org/docs/forms.html)
- [JavaScript Front-End Frameworks and Libraries](https://www.javascriptstuff.com/)
- [MDN Web Docs - Form Data Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

## Kontrollküsimused või harjutus

- Mis on kontrollitud ja kontrollimata komponendid ning kuidas need erinevad?
- Kuidas rakendada sündmuste käsitlejaid vormide ja sisendite haldamiseks?
- Kuidas hallata mitme sisendiga vormi Reactis?
- Kuidas rakendada kliendipoolset valideerimist vormide jaoks?
- Millised on parimad praktikad vormide haldamiseks Reactis?

## Harjutus

- Looge uus React projekt, kasutades Create React App tööriista.
- Looge kontrollitud komponent, mis sisaldab vormi sisendit ja käsitleb vormi esitamist.
- Rakendage kontrollimata komponent, mis kasutab ref-e vormi sisendi haldamiseks.
- Looge mitme sisendiga vorm ja hallake selle olekut objektina.
- Lisage kliendipoolne valideerimine, et kontrollida vormi sisendeid enne esitamist.
