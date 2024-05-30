# MySQL andmebaasi ühendamine Node.js-i ja Expressiga, kasutades mysql2 moodulit

MySQL andmebaasi ühendamine Node.js ja Express raamistikuga võimaldab luua dünaamilisi ja andmepõhiseid veebirakendusi. `mysql2` on kiire ja kaasaegne MySQL klient Node.js jaoks, mis toetab kõiki MySQL funktsioone. Selles õppematerjalis käsitleme, kuidas paigaldada ja seadistada `mysql2` moodulit, luua ühendus MySQL andmebaasiga ning teha päringuid andmebaasi, struktureerides rakenduse teenusteks ja kontrolleriteks. Samuti käsitleme SQL-injectionite vältimist parameetriliste päringute abil.

![MySQL-NodeJS](MySQL-Node.webp)

Pildi allikas: Dall-E by OpenAI

- [MySQL andmebaasi ühendamine Node.js-i ja Expressiga, kasutades mysql2 moodulit](#mysql-andmebaasi-ühendamine-nodejs-i-ja-expressiga-kasutades-mysql2-moodulit)
  - [Õpiväljundid](#õpiväljundid)
  - [Eeldused](#eeldused)
  - [Samm 1: Projekti seadistamine](#samm-1-projekti-seadistamine)
    - [1.1. Node.js projekti loomine](#11-nodejs-projekti-loomine)
    - [1.2. Vajalike sõltuvuste paigaldamine](#12-vajalike-sõltuvuste-paigaldamine)
  - [Samm 2: Projekti Struktureerimine](#samm-2-projekti-struktureerimine)
    - [2.1. Ühenduse Konfigureerimine](#21-ühenduse-konfigureerimine)
    - [2.2. Teenuste loomine](#22-teenuste-loomine)
    - [2.3. Kontrollerite loomine](#23-kontrollerite-loomine)
    - [2.4. Express Serveri Loomine](#24-express-serveri-loomine)
  - [SQL-injection ja Parameetrilised Päringud](#sql-injection-ja-parameetrilised-päringud)
    - [Mis on SQL-injection?](#mis-on-sql-injection)
    - [Parameetrilised Päringud](#parameetrilised-päringud)
      - [Näide: Parameetriliste Päringute Kasutamine](#näide-parameetriliste-päringute-kasutamine)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- paigaldama ja seadistama `mysql2` moodulit Node.js projektis;
- looma ühenduse MySQL andmebaasiga;
- tegema põhilisi CRUD (Create, Read, Update, Delete) päringuid andmebaasi;
- struktureerima rakendust teenusteks ja kontrolleriteks;
- kasutama parameetrilisi päringuid SQL-injectionite vältimiseks.

## Eeldused

- Node.js ja npm on arvutisse paigaldatud.
- MySQL server on käivitatud ja andmebaas on loodud.

## Samm 1: Projekti seadistamine

Loome uue Node.js projekti ja paigaldame vajalikud sõltuvused.

### 1.1. Node.js projekti loomine

```bash
mkdir myapp
cd myapp
npm init -y
```

### 1.2. Vajalike sõltuvuste paigaldamine

Paigaldame `express` ja `mysql2` moodulid.

```bash
npm install express mysql2
```

## Samm 2: Projekti Struktureerimine

Loome järgmise kataloogistruktuuri:

```text
myapp/
├── controllers/
│   └── userController.js
├── services/
│   └── userService.js
├── db.js
├── index.js
└── package.json
```

### 2.1. Ühenduse Konfigureerimine

Loome `db.js` faili, kus konfigureerime ja loome MySQL andmebaasi ühenduse.

```javascript
// db.js
const mysql = require('mysql2');

// Loo ühenduse konfiguratsioon
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'blog'
});

// Lubame ühenduste basseini kasutada promise'sid
const promisePool = pool.promise();

module.exports = promisePool;
```

### 2.2. Teenuste loomine

Loome `userService.js` faili, kus käsitleme andmebaasiga suhtlemist.

```javascript
// services/userService.js
const db = require('../db');

const getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

const createUser = async (username, email, password) => {
  const [result] = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
  return result.insertId;
};

const updateUser = async (id, username, email, password) => {
  const [result] = await db.query('UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, password, id]);
  return result.affectedRows;
};

const deleteUser = async (id) => {
  const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
  return result.affectedRows;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
```

### 2.3. Kontrollerite loomine

Loome `userController.js` faili, kus käsitleme API lõpp-punkte.

```javascript
// controllers/userController.js
const userService = require('../services/userService');

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const id = await userService.createUser(username, email, password);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const affectedRows = await userService.updateUser(id, username, email, password);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await userService.deleteUser(id);
    if (affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
```

### 2.4. Express Serveri Loomine

Loome `index.js` faili, kus konfigureerime Express serveri ja ühendame kontrollerid.

```javascript
// index.js
const express = require('express');
const app = express();
const userController = require('./controllers/userController');

// Middleware JSON päringute käsitlemiseks
app.use(express.json());

// Põhike
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API lõpp-punktid
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUser);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

// Serveri käivitamine
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## SQL-injection ja Parameetrilised Päringud

### Mis on SQL-injection?

SQL-injection on rünnak, kus pahatahtlik kasutaja saab sisestada SQL koodi, mis võib muuta päringute loogikat ja andmebaasi struktuuri, varastada andmeid või kahjustada süsteemi. See on üks levinumaid turvariske veebirakendustes.

### Parameetrilised Päringud

Parameetrilised päringud võimaldavad eraldada SQL koodi ja kasutaja sisendi, muutes SQL-injection rünnakute tegemise keerulisemaks.

#### Näide: Parameetriliste Päringute Kasutamine

Kõik teenuste päringud on juba eelnevalt parameetrilised. Kasutame `?` sümbolit koos argumentide loendiga, et turvaliselt sisestada kasutaja andmed päringusse.

```javascript
const createUser = async (username, email, password) => {
  const [result] = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
  return result.insertId;
};
```

Parameetriliste päringute kasutamine tagab, et kasutaja sisend käsitletakse turvaliselt ja vältimaks SQL-injection rünnakuid.
