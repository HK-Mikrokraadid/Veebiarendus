# MySQL Päringute Tegemine (CRUD)

CRUD (Create, Read, Update, Delete) operatsioonid on põhilised andmebaasi toimingud, mida kasutatakse andmete haldamiseks. Selles õppematerjalis käsitleme, kuidas teha CRUD operatsioone MySQL-is, kasutades eelnevalt loodud blogi andmebaasi, mis sisaldab kasutajate, postituste ja kommentaaride tabeleid.

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- Loome uusi kirjeid (Create) andmebaasi tabelitesse.
- Lugema ja pärima andmeid (Read) tabelitest.
- Uuendama olemasolevaid kirjeid (Update) tabelites.
- Kustutama kirjeid (Delete) tabelitest.

## Andmebaasi ja tabelite loomine

Alustame andmebaasi loomisest, mis sisaldab kolme tabelit: `users`, `posts` ja `comments`.

Kõigepealt loome andmebaasi, kasutades järgmist SQL käsku:

```sql
CREATE DATABASE blog;
```

Seejärel loome tabelid, kasutades järgmisi SQL käske:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  post_id INT,
  user_id INT,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

Need SQL käsud loovad kolm tabelit: `users`, `posts` ja `comments`. Iga tabel sisaldab erinevaid veerge, mis määratlevad andmete struktuuri ja suhteid teiste tabelitega.

## CRUD Operatsioonid

### 1. Andmete Lisamine (Create)

Andmete lisamiseks tabelisse kasutatakse `INSERT INTO` käsku.

#### Kasutajate lisamine

```sql
INSERT INTO users (username, email, password) VALUES ('alice', 'alice@example.com', 'securepassword');
INSERT INTO users (username, email, password) VALUES ('bob', 'bob@example.com', 'securepassword');
```

#### Postituste lisamine

```sql
INSERT INTO posts (user_id, title, content) VALUES (1, 'Alice First Post', 'This is the content of Alice\'s first post.');
INSERT INTO posts (user_id, title, content) VALUES (2, 'Bob First Post', 'This is the content of Bob\'s first post.');
```

#### Kommentaaride lisamine

```sql
INSERT INTO comments (post_id, user_id, content) VALUES (1, 2, 'This is Bob\'s comment on Alice\'s first post.');
INSERT INTO comments (post_id, user_id, content) VALUES (2, 1, 'This is Alice\'s comment on Bob\'s first post.');
```

### 2. Andmete Lugemine (Read)

Andmete lugemiseks ja pärimiseks tabelitest kasutatakse `SELECT` käsku.

#### Kõigi kasutajate lugemine

```sql
SELECT * FROM users;
```

#### Spetsiifilise kasutaja andmete lugemine

```sql
SELECT * FROM users WHERE username = 'alice';
```

> `WHERE` tingimus piirab päringu tulemusi vastavalt määratud tingimustele.

#### Postituste ja nende autorite lugemine

```sql
SELECT posts.title, posts.content, users.username
FROM posts
JOIN users ON posts.user_id = users.id;
```

> `JOIN` klausel ühendab kaks tabelit vastavalt määratud tingimustele. Selle tagajärjel saame kombineerida andmeid mitmest tabelist ühe päringu abil.

#### Kommentaaride lugemine koos postituste ja autorite andmetega

```sql
SELECT comments.content AS comment, posts.title AS post_title, users.username AS author
FROM comments
JOIN posts ON comments.post_id = posts.id
JOIN users ON comments.user_id = users.id;
```

### 3. Andmete Uuendamine (Update)

Olemasolevate kirjete uuendamiseks tabelites kasutatakse `UPDATE` käsku.

#### Kasutaja andmete uuendamine

```sql
UPDATE users
SET email = 'newalice@example.com'
WHERE username = 'alice';
```

#### Postituse sisu uuendamine

```sql
UPDATE posts
SET content = 'This is the updated content of Alice\'s first post.'
WHERE id = 1;
```

### 4. Andmete Kustutamine (Delete)

Kirjete kustutamiseks tabelitest kasutatakse `DELETE` käsku.

#### Kasutaja kustutamine

```sql
DELETE FROM users
WHERE username = 'bob';
```

> Kindalasti veenduge, et kustutate õige kirje, kasutades `WHERE` tingimust.

#### Postituse kustutamine

```sql
DELETE FROM posts
WHERE id = 2;
```

#### Kommentaari kustutamine

```sql
DELETE FROM comments
WHERE id = 1;
```

## Täielik Näide

### Lisamine (Create)

```sql
-- Kasutajate lisamine
INSERT INTO users (username, email, password) VALUES ('alice', 'alice@example.com', 'securepassword');
INSERT INTO users (username, email, password) VALUES ('bob', 'bob@example.com', 'securepassword');

-- Postituste lisamine
INSERT INTO posts (user_id, title, content) VALUES (1, 'Alice First Post', 'This is the content of Alice\'s first post.');
INSERT INTO posts (user_id, title, content) VALUES (2, 'Bob First Post', 'This is the content of Bob\'s first post.');

-- Kommentaaride lisamine
INSERT INTO comments (post_id, user_id, content) VALUES (1, 2, 'This is Bob\'s comment on Alice\'s first post.');
INSERT INTO comments (post_id, user_id, content) VALUES (2, 1, 'This is Alice\'s comment on Bob\'s first post.');
```

### Lugemine (Read)

```sql
-- Kõigi kasutajate lugemine
SELECT * FROM users;

-- Spetsiifilise kasutaja andmete lugemine
SELECT * FROM users WHERE username = 'alice';

-- Postituste ja nende autorite lugemine
SELECT posts.title, posts.content, users.username
FROM posts
JOIN users ON posts.user_id = users.id;

-- Kommentaaride lugemine koos postituste ja autorite andmetega
SELECT comments.content AS comment, posts.title AS post_title, users.username AS author
FROM comments
JOIN posts ON comments.post_id = posts.id
JOIN users ON comments.user_id = users.id;
```

### Uuendamine (Update)

```sql
-- Kasutaja andmete uuendamine
UPDATE users
SET email = 'newalice@example.com'
WHERE username = 'alice';

-- Postituse sisu uuendamine
UPDATE posts
SET content = 'This is the updated content of Alice\'s first post.'
WHERE id = 1;
```

### Kustutamine (Delete)

```sql
-- Kasutaja kustutamine
DELETE FROM users
WHERE username = 'bob';

-- Postituse kustutamine
DELETE FROM posts
WHERE id = 2;

-- Kommentaari kustutamine
DELETE FROM comments
WHERE id = 1;
```

## Täpsustavate Parameetrite Kasutamine MySQL Päringutes

MySQL pakub mitmeid võimsaid SQL käske ja klausleid, mis aitavad andmeid täpselt ja tõhusalt pärida. Selles peatükis käsitleme mitmeid kasulikke SQL käske ja klausleid, sealhulgas LIMIT, ORDER BY, GROUP BY, SORT, AND, OR, DISTINCT ja muud.

## LIMIT

LIMIT klauslit kasutatakse päringu tulemuste arvu piiramiseks. See on kasulik suurte andmekogumite haldamiseks, eriti kui töötate koos leheküljelise kuvamisega.

### Näide: Esimese 10 rea toomine kasutajate tabelist

```sql
SELECT * FROM users LIMIT 10;
```

## ORDER BY

ORDER BY klauslit kasutatakse päringu tulemuste sortimiseks kindla veeru järgi. Saate tulemusi sortida kas tõusvas (ASC) või laskuvas (DESC) järjekorras.

### Näide: Kasutajate sortimine kasutajanime järgi tõusvas järjekorras

```sql
SELECT * FROM users ORDER BY username ASC;
```

### Näide: Kasutajate sortimine loomiskuupäeva järgi laskuvas järjekorras

```sql
SELECT * FROM users ORDER BY created_at DESC;
```

## GROUP BY

GROUP BY klauslit kasutatakse ridade grupeerimiseks, mis jagavad teatud omadusi, ja tavaliselt kasutatakse seda koos agregaafunktsioonidega nagu COUNT, SUM, AVG, MAX ja MIN.

### Näide: Postituste arvu loendamine kasutajate kaupa

```sql
SELECT user_id, COUNT(*) AS post_count
FROM posts
GROUP BY user_id;
```

## SORT

SORT on süntaktiline varieerumine ORDER BY klauslist. SQL standard ei sisalda SORT klauslit, kuid mõnikord viidatakse sellele ekslikult ORDER BY klausli asemel. Seega ORDER BY on õige viis tulemuste sortimiseks.

## AND, OR

AND ja OR operaatorid võimaldavad määrata mitu tingimust WHERE klausel. AND operaator tagastab read, mis vastavad kõigile tingimustele, samas kui OR operaator tagastab read, mis vastavad vähemalt ühele tingimusele.

### Näide: Kasutajad, kellel on teatud e-posti domeen ja kes on registreeritud pärast teatud kuupäeva

```sql
SELECT * FROM users
WHERE email LIKE '%@example.com' AND created_at > '2021-01-01';
```

### Näide: Kasutajad, kellel on teatud e-posti domeen või kes on registreeritud pärast teatud kuupäeva

```sql
SELECT * FROM users
WHERE email LIKE '%@example.com' OR created_at > '2021-01-01';
```

## DISTINCT

DISTINCT klauslit kasutatakse duplikaatväärtuste eemaldamiseks päringu tulemustes. See tagastab ainult unikaalsed read.

### Näide: Kõigi unikaalsete e-posti domeenide toomine kasutajate tabelist

```sql
SELECT DISTINCT SUBSTRING_INDEX(email, '@', -1) AS domain
FROM users;
```

## Näited Täiendavate Parameetrite Koos Kasutamisest

### Näide: Kasutajate loetelu toomine koos piirangute ja sortimisega

```sql
SELECT * FROM users
WHERE email LIKE '%@example.com' AND created_at > '2021-01-01'
ORDER BY created_at DESC
LIMIT 5;
```

### Näide: Kasutajate arvu loendamine domeeni kaupa ja tulemuste sortimine

```sql
SELECT SUBSTRING_INDEX(email, '@', -1) AS domain, COUNT(*) AS user_count
FROM users
GROUP BY domain
ORDER BY user_count DESC;
```

### Täielik Näide: Täpsustavate Parameetrite Kasutamine Blogi Andmebaasis

#### Postituste loendamine ja sortimine kasutajate kaupa

```sql
SELECT users.username, COUNT(posts.id) AS post_count
FROM users
LEFT JOIN posts ON users.id = posts.user_id
GROUP BY users.username
ORDER BY post_count DESC
LIMIT 10;
```

See päring liitub kasutajate ja postituste tabelitega, loendab iga kasutaja postituste arvu, grupeerib tulemused kasutajanime järgi ja sorteerib need postituste arvu järgi kahanevas järjekorras, piirdudes esimesel 10 tulemusega.
