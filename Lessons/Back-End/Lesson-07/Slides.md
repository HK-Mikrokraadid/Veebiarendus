---
marp: true

---
# Veebiarendus

## Back-End arendus

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänased teemad

- Eelmise loengu meenutamine
- [Andmebaasi ühendamine NodeJS-iga](../../../Subjects/Databases/Topics/MySQL-NodeJS/README.md)
- Andmebaasi päringud Node API-s

---

## Millest rääkisime eelmisel korral?

---

## Andmebaasi ühendamine NodeJS-iga

---

## MySQL NodeJS-iga

Selleks, et NodeJS saaks MySQL andmebaasiga suhelda, kasutame `mysql2` moodulit, mis võimaldab luua ühenduse MySQL andmebaasiga, saata päringuid ja saada vastuseid.

```bash
npm install mysql2
```

---

## Andmebaasi ühendamine

Andmebaasi ühendamine NodeJS-iga toimub MySQL mooduli abil, mis võimaldab luua ühenduse MySQL andmebaasiga, saata päringuid ja saada vastuseid.

```javascript
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'mysql-user',
  password: 'mysql-password',
  database: 'mydatabase'
});

const promisePool = pool.promise();

module.exports = promisePool;
```

`Pool` on MySQL ühenduste haldur, mis võimaldab luua mitu ühendust ja kasutada neid.

---

## Andmebaasi päringud teenustes

Andmebaasi päringute tegemiseks loome teenused, mis kasutavad andmebaasi ühendust ja saadavad päringuid.

```javascript
const db = require('../db');

const getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};
```

---

## SQL-injection

SQL-injection on turvarünnak, mis võimaldab ründajal süstida pahatahtlikku SQL-koodi veebirakendusse, et manipuleerida andmebaasi päringuid ja saada juurdepääs konfidentsiaalsetele andmetele.

---

## Parameetrilised päringud

Parameetrilised päringud võimaldavad kasutada muutujaid ja väärtusi päringutes, mis muudavad päringud dünaamiliseks ja turvalisemaks. ,

Parameetrilised päringud aitavad vältida SQL-injection rünnakuid.

```javascript
const getUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

const createUser = async (username, email) => {
  const [result] = await db.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
  return result.insertId;
};
```

> Pane tähele, et päringu muutuja asendatakse küsimärgiga `?` ja väärtused antakse massiivina.

---

## Ressursside uuendamine ja kustutamine

Andmebaasi päringud võimaldavad ressursse uuendada ja kustutada.

```javascript
const updateUser = async (id, username, email) => {
  const [result] = await db.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id]);
  return result.affectedRows;
};
```

Saab ka nii:

```javascript
const updatedUser = async (id, user) => {
  const [result] = await db.query('UPDATE users SET ? WHERE id = ?', [user, id]);
  return result.affectedRows;
};
```

Viimase näite puhul peab `user` olema objekt, kus võtmed vastavad andmebaasi väljadele.

---

## Kodutöö

- Andmebaasi kasutamine oma API-s
- 