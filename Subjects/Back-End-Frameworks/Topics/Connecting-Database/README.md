# API ühendamine andmebaasiga

> Selle aine raames kasutame [MySQL](https://www.mysql.com/) andmebaasi.

Selleks, et saaksime oma API ühendada andmebaasiga, on meil vaja teha järgmised sammud:

- luua andmebaas
- lisada andmebaasi tabelid ja lisada sinna algandmed
- paigaldada vajalikud paketid, mis võimaldavad Node.js-il MySQL-iga suhelda
- luua ühendus andmebaasiga
- kirjutada SQL päringud, mis võimaldavad meil andmebaasiga suhelda

## Andmebaasi loomine

Loengus tehtava API andmebaasi loomise ja algsete andmete sisestamiseks on olemas SQL skriptid:

- [Andmebaasi loomine](../../code/neljasLoeng/sql/init.sql)
- [Algandmed](../../code/neljasLoeng/sql/seed.sql)

Skriptid võib käivitada näiteks kasutades MySQL Workbenchi või lihtsalt MySQL konsoolis käsureale kopeerides.

## Pakettide paigaldamine

Selleks, et Node.js saaks MySQL-iga suhelda, on vaja paigaldada [MySQL2 pakett](https://www.npmjs.com/package/mysql2):

```bash
npm install mysql2
```

> MySQL2 põhjalikum dokumentatsioon on leitav [siit](https://github.com/sidorares/node-mysql2)

## Ühenduse loomine andmebaasiga

Andmebaasiga ühenduse loomiseks teeme kõigepealt eraldi faili (näiteks `database.ts`), kuhu impordime `MySQL2` paketi ja loome ühenduse andmebaasiga:

```javascript
const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'my-secret-pw',
  database: 'homeworks',
};

const db = mysql.createConnection(dbConfig).promise();

module.exports = db;
```

> `dbConfig` objektis on vaja muuta `user`, `password` ja `database` väärtused vastavalt oma andmebaasi seadetele.

Loomulikult oleks kena seadistused viia eraldi faili, kuid selleks, et koodi lihtsamalt mõista, jätame selle hetkel nii.

Nüüd on meil võimalik andmebaasiühendus oma API teenustesse importida ja kasutama hakata.

## SQL päringud

Teenustes saab hakata nüüd päringuid tegema nii:

```typescript
const db = require('./database');

const usersService = {
  getAllUsers: async () => {
    try {
      const [users] = await db.query('SELECT id, firstName, lastName, email, dateCreated, role FROM users WHERE dateDeleted IS NULL');
      return users;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
```

> NB! SQL-päringute käivitamisel peab meeles pidama seda, et kui päringud sisaldavad kasutaja poolt saadetud infot (näiteks e-mail, parool, ükskõik mida klient API-sse saadab), siis annab see võimaluse kasutada SQL injection rünnakut. (Selle kohta saab lugeda näiteks PortSwigger'i artiklist [siit](https://portswigger.net/web-security/sql-injection)).
> SQL injectioni vältimiseks tuleb kasutada parameetrilisi päringuid, kus kasutaja poolt saadetud muutujaid ei kirjutata otse päringusse sisse.

### Parameetrilised päringud

```js
// Selle asemel, et kirjutada kasutaja poolt saadetud infot otse päringusse kujul:
const [user] = await db.query('SELECT * FROM users WHERE email = email AND dateDeleted IS NULL;');

// Tuleks seda teha sellisel kujul:
const [user] = await db.query('SELECT * FROM users WHERE email = ? AND dateDeleted IS NULL', [email]);

// Kui muutujaid on rohkem siis tuleb ikkagi muutujate asemele päringusse kirjutada ? ja pärast [] sisse lihtsalt muutujad komadega eraldatult
const [result] = await db.query(`INSERT INTO users SET firstName = ?, lastName = ?, email = ?, password = ?`, [user.firstName, user.lastName, user.email, user.password]);
```
