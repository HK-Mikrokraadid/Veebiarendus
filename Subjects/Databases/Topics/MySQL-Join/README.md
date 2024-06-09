# MySQL JOIN-id

MySQL JOIN-id on vahend, mis võimaldab andmeid erinevatest tabelitest pärida ja ühendada. JOIN-id võimaldavad kombineerida ridu kahest või enamast tabelist, mis on omavahel seotud primaar- ja võõrvõtmete kaudu. Selles õppematerjalis käsitleme erinevaid JOIN-i tüüpe, nende kasutamist ja näiteid praktiliste päringute tegemiseks.

![SQL JOIN](SQL-JOIN.webp)

Pildi allikas: [Dall-E by OpenAI](https://openai.com/)

- [MySQL JOIN-id](#mysql-join-id)
  - [Õpiväljundid](#õpiväljundid)
  - [JOIN-ide Põhitõed](#join-ide-põhitõed)
    - [JOIN-ide Tüübid](#join-ide-tüübid)
  - [INNER JOIN](#inner-join)
    - [Näide: INNER JOIN kasutamine](#näide-inner-join-kasutamine)
      - [Kasutajad ja Postitused](#kasutajad-ja-postitused)
    - [Praktiline Näide: Kasutajad ja Kommentaarid](#praktiline-näide-kasutajad-ja-kommentaarid)
  - [LEFT JOIN](#left-join)
    - [Näide: LEFT JOIN kasutamine](#näide-left-join-kasutamine)
      - [Kõik Kasutajad ja Nende Postitused](#kõik-kasutajad-ja-nende-postitused)
    - [Praktiline Näide: Kõik Kasutajad ja Nende Kommentaarid](#praktiline-näide-kõik-kasutajad-ja-nende-kommentaarid)
  - [RIGHT JOIN](#right-join)
    - [Näide: RIGHT JOIN kasutamine](#näide-right-join-kasutamine)
      - [Kõik Postitused ja Nende Autorid](#kõik-postitused-ja-nende-autorid)
    - [Praktiline Näide: Kõik Kommentaarid ja Nende Autorid](#praktiline-näide-kõik-kommentaarid-ja-nende-autorid)
  - [FULL JOIN](#full-join)
    - [Näide: FULL JOIN kasutamine](#näide-full-join-kasutamine)
      - [Kõik Kasutajad ja Postitused](#kõik-kasutajad-ja-postitused)
    - [Praktiline Näide: Kõik Kasutajad ja Kommentaarid](#praktiline-näide-kõik-kasutajad-ja-kommentaarid)
  - [Täielik Näide: JOIN-id Blogi Andmebaasis](#täielik-näide-join-id-blogi-andmebaasis)
    - [Andmebaasi ja Tabelite Loomine](#andmebaasi-ja-tabelite-loomine)
    - [Andmete Lisamine](#andmete-lisamine)
    - [JOIN-ide Kasutamine](#join-ide-kasutamine)
      - [INNER JOIN: Kasutajad ja Postitused](#inner-join-kasutajad-ja-postitused)
      - [LEFT JOIN: Kõik Kasutajad ja Nende Postitused](#left-join-kõik-kasutajad-ja-nende-postitused)
      - [RIGHT JOIN: Kõik Postitused ja Nende Autorid](#right-join-kõik-postitused-ja-nende-autorid)
      - [FULL JOIN: Kõik Kasutajad ja Postitused](#full-join-kõik-kasutajad-ja-postitused)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- selgitama JOIN-ide põhimõtteid ja kasutamist MySQL-is;
- kasutama erinevaid JOIN-i tüüpe (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN);
- looma keerulisi päringuid, mis ühendavad andmeid mitmest tabelist;
- kasutama JOIN-e praktilistes näidetes blogi andmebaasiga.

## JOIN-ide Põhitõed

### JOIN-ide Tüübid

1. **INNER JOIN**: Tagastab ainult need read, millel on mõlemas tabelis vastavus.
2. **LEFT JOIN**: Tagastab kõik read vasakust tabelist ja vastavad read paremast tabelist. Kui vastavust pole, siis täidetakse parema tabeli väljad NULL-idega.
3. **RIGHT JOIN**: Tagastab kõik read paremast tabelist ja vastavad read vasakust tabelist. Kui vastavust pole, siis täidetakse vasaku tabeli väljad NULL-idega.
4. **FULL JOIN**: Tagastab kõik read, kui on vastavus vasakus või paremas tabelis. MySQL-is ei ole otsest `FULL JOIN` toetust, kuid seda saab saavutada `UNION` abil.

> Vasak ja parem tabel on suhtelised mõisted, mis viitavad tabelite järjekorrale päringus. Vasak tabel on esimene tabel ja parem tabel on teine tabel.

## INNER JOIN

INNER JOIN tagastab ainult need read, millel on mõlemas tabelis vastavus.

### Näide: INNER JOIN kasutamine

#### Kasutajad ja Postitused

```sql
SELECT users.username, posts.title FROM users
  INNER JOIN posts ON users.id = posts.user_id;
```

See päring tagastab kõigi kasutajate kasutajanimed ja nende postituste pealkirjad, millel on kasutaja ja postituse vahel vastavus.

### Praktiline Näide: Kasutajad ja Kommentaarid

```sql
SELECT users.username, comments.content
  FROM users
  INNER JOIN comments ON users.id = comments.user_id;
```

See päring tagastab kõigi kasutajate kasutajanimed ja nende kommentaaride sisu.

## LEFT JOIN

LEFT JOIN tagastab kõik read vasakust tabelist ja vastavad read paremast tabelist. Kui vastavust pole, siis täidetakse parema tabeli väljad NULL-idega.

### Näide: LEFT JOIN kasutamine

#### Kõik Kasutajad ja Nende Postitused

```sql
SELECT users.username, posts.title
  FROM users
  LEFT JOIN posts ON users.id = posts.user_id;
```

See päring tagastab kõigi kasutajate kasutajanimed ja nende postituste pealkirjad. Kui kasutajal pole postitusi, tagastatakse postituste pealkiri NULL-ina.

### Praktiline Näide: Kõik Kasutajad ja Nende Kommentaarid

```sql
SELECT users.username, comments.content
  FROM users
  LEFT JOIN comments ON users.id = comments.user_id;
```

See päring tagastab kõigi kasutajate kasutajanimed ja nende kommentaaride sisu. Kui kasutajal pole kommentaare, tagastatakse kommentaaride sisu NULL-ina.

## RIGHT JOIN

RIGHT JOIN tagastab kõik read paremast tabelist ja vastavad read vasakust tabelist. Kui vastavust pole, siis täidetakse vasaku tabeli väljad NULL-idega.

### Näide: RIGHT JOIN kasutamine

#### Kõik Postitused ja Nende Autorid

```sql
SELECT users.username, posts.title
  FROM users
  RIGHT JOIN posts ON users.id = posts.user_id;
```

See päring tagastab kõigi postituste pealkirjad ja nende autorite kasutajanimed. Kui postitusel pole autorit (mis on haruldane ja ebatavaline olukord), tagastatakse autori kasutajanimi NULL-ina.

### Praktiline Näide: Kõik Kommentaarid ja Nende Autorid

```sql
SELECT users.username, comments.content
FROM users
RIGHT JOIN comments ON users.id = comments.user_id;
```

See päring tagastab kõigi kommentaaride sisu ja nende autorite kasutajanimed. Kui kommentaaril pole autorit, tagastatakse autori kasutajanimi NULL-ina.

## FULL JOIN

FULL JOIN tagastab kõik read, kui on vastavus vasakus või paremas tabelis. MySQL-is ei ole otsest `FULL JOIN` toetust, kuid seda saab saavutada `UNION` abil.

### Näide: FULL JOIN kasutamine

#### Kõik Kasutajad ja Postitused

```sql
SELECT users.username, posts.title
FROM users
LEFT JOIN posts ON users.id = posts.user_id
UNION
SELECT users.username, posts.title
FROM posts
LEFT JOIN users ON posts.user_id = users.id;
```

See päring tagastab kõigi kasutajate kasutajanimed ja nende postituste pealkirjad, samuti postitused, millel pole vastavaid kasutajaid.

### Praktiline Näide: Kõik Kasutajad ja Kommentaarid

```sql
SELECT users.username, comments.content
FROM users
LEFT JOIN comments ON users.id = comments.user_id
UNION
SELECT users.username, comments.content
FROM comments
LEFT JOIN users ON comments.user_id = users.id;
```

See päring tagastab kõigi kasutajate kasutajanimed ja nende kommentaaride sisu, samuti kommentaarid, millel pole vastavaid kasutajaid.

## Täielik Näide: JOIN-id Blogi Andmebaasis

### Andmebaasi ja Tabelite Loomine

```sql
CREATE DATABASE blog;
USE blog;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Andmete Lisamine

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

### JOIN-ide Kasutamine

#### INNER JOIN: Kasutajad ja Postitused

```sql
SELECT users.username, posts.title
FROM users
INNER JOIN posts ON users.id = posts.user_id;
```

#### LEFT JOIN: Kõik Kasutajad ja Nende Postitused

```sql
SELECT users.username, posts.title
FROM users
LEFT JOIN posts ON users.id = posts.user_id;
```

#### RIGHT JOIN: Kõik Postitused ja Nende Autorid

```sql
SELECT users.username, posts.title
FROM users
RIGHT JOIN posts ON users.id = posts.user_id;
```

#### FULL JOIN: Kõik Kasutajad ja Postitused

```sql
SELECT users.username, posts.title
FROM users
LEFT JOIN posts ON users.id = posts.user_id
UNION
SELECT users.username, posts.title
FROM posts
LEFT JOIN users ON posts.user_id = users.id;
```
