---
marp: true

---
# Veebiarendus

## Back-End arendus

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänased teemad

- Meenutame eelmist loengut
- [Andmebaasi ühendamine NodeJS-iga](../../../Subjects/Back-End-Frameworks/Topics/MySQL-NodeJS/README.md)
- JOIN päringud

---

---

## Andmebaasi ühendamine NodeJS-iga

---

## MySQL NodeJS-iga

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

---

## Andmebaasi päringud teenustes

Andmebaasi päringute tegemiseks loome teenused, mis kasutavad andmebaasi ühendust ja saadavad päringuid.

```javascript
const db = require('../db');

const getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

const createUser = async (username, email) => {
  const [result] = await db.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
  return result.insertId;
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
```

> Pane tähele, et päringu muutuja asendatakse küsimärgiga `?` ja väärtused antakse massiivina.

---

## Kodutöö
