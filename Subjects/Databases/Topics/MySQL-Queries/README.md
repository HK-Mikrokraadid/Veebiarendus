# MySQL Päringute Tegemine (CRUD)

## Sissejuhatus

CRUD (Create, Read, Update, Delete) operatsioonid on põhilised andmebaasi toimingud, mida kasutatakse andmete haldamiseks. Selles õppematerjalis käsitleme, kuidas teha CRUD operatsioone MySQL-is, kasutades eelnevalt loodud blogi andmebaasi, mis sisaldab kasutajate, postituste ja kommentaaride tabeleid.

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- Loome uusi kirjeid (Create) andmebaasi tabelitesse.
- Lugema ja pärima andmeid (Read) tabelitest.
- Uuendama olemasolevaid kirjeid (Update) tabelites.
- Kustutama kirjeid (Delete) tabelitest.

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

#### Postituste ja nende autorite lugemine

```sql
SELECT posts.title, posts.content, users.username
FROM posts
JOIN users ON posts.user_id = users.id;
```

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
