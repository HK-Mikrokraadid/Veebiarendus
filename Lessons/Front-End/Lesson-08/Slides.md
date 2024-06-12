---
marp: true

---
# Veebiarendus

## Front-End arendus

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänased teemad

- Meenutame eelmist loengut
- [React ja Axios](../../../Subjects/Front-End-Frameworks/Topics/React-Axios/README.md)
- [useEffect hook](../../../Subjects/Front-End-Frameworks/Topics/React-UseEffect/README.md)
- [Dünaamilised marsruudid](../../../Subjects/Front-End-Frameworks/Topics/React-Routing/README.md#dünaamilised-marsruudid)
- [Tingimuslaused](../../../Subjects/Front-End-Frameworks/Topics/React-Conditional-Rendering/README.md)
- [Flash messages](../../../Subjects/Front-End-Frameworks/Topics/React-Flash-Messages/README.md)

---

## Millest rääkisime eelmisel korral?

---

## React ja Axios

Oleme juba varem kasutanud Axios-i, et teha päringuid serverisse. Axios on lihtne ja paindlik HTTP klient, mis töötab nii brauseris kui ka Node.js-is. Nüüd, kui me oskame luua Reacti rakendust erinevate lehekülgedega ja oskame kasutajalt ka andmeid küsida, siis saame minna oma rakenduse integreerimisega API-ga, kuhu saame sisse logida, kust saame andmeid pärida jms.

---

## Axios-e paigaldamine

Kõigepealt peame Axios-i oma projektile paigaldame. Selleks kasutame npm-i:

```bash
npm install axios
```

---

## Axios-e kasutamine

Axiose kasutamiseks tuleb see vastavasse komponendi sisse importida. Näiteks:

```javascript
import axios from 'axios';
```

Seejärel saame hakata juba päringuid tegema. Näiteks:

```javascript
const response = await axios.post('https://blog.hk.tlu.ee/login', {
  email: 'user@user.ee',
  password: 'password'
  });
```

---

