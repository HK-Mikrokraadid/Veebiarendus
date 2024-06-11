# Vigade Haldus (Error Handling) Express API-s

Vigade haldus on kriitiline komponent igas API-s. Õige veahaldus aitab mitte ainult parandada kasutajakogemust, vaid ka hoida rakendust turvalisena ja hooldatavana. Express pakub paindlikke meetodeid vigade haldamiseks, mis võimaldavad teil elegantset ja tõhusat vigade käsitlemist oma API-s rakendada.

- [Vigade Haldus (Error Handling) Express API-s](#vigade-haldus-error-handling-express-api-s)
  - [Õpiväljundid](#õpiväljundid)
  - [Miks on Veahaldus Oluline?](#miks-on-veahaldus-oluline)
  - [Veahaldus Expressis](#veahaldus-expressis)
    - [Kohandatud Veakäsitlejad Lõpp-punktides](#kohandatud-veakäsitlejad-lõpp-punktides)
    - [Keskne Veakäsitleja Vahevara](#keskne-veakäsitleja-vahevara)
    - [Selgitus](#selgitus)
    - [Asünkroonsete Vigade Käsitlemine](#asünkroonsete-vigade-käsitlemine)
    - [Selgitus](#selgitus-1)
  - [Täiendavad Meetodid Vigade Käsitlemiseks](#täiendavad-meetodid-vigade-käsitlemiseks)
    - [Vigade Logimine](#vigade-logimine)
    - [Valesti Tehtud Päringute Käsitlemine](#valesti-tehtud-päringute-käsitlemine)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- selgitama, miks on veahaldus Expressis oluline.
- rakendama kohandatud veakäsitlejaid Expressi API-s;
- kasutama vahevara (middleware) vigade haldamiseks;
- kasutama keskse veakäsitleja kasutamist kogu rakenduse ulatuses;
- käsitlema asünkroonseid vigu Expressis.

## Miks on Veahaldus Oluline?

- **Kasutajakogemus**: Hästi kavandatud veahaldus annab kasutajale selged ja kasulikud sõnumid, mis aitavad tal mõista, mis valesti läks ja mida teha järgmiseks.
- **Turvalisus**: Peidab süsteemi siseinfo ja hoiab ära tundliku teabe lekkimise.
- **Hooldatavus**: Lihtsustab vigade jälgimist ja parandamist, andes arendajatele täpsed ja kasulikud logid.
- **Usaldusväärsus**: Tagab, et rakendus suudab jätkata tööd isegi siis, kui tekivad vead.

## Veahaldus Expressis

Expressis saab vigu käsitleda mitmel viisil, sealhulgas:

1. **Kohandatud veakäsitlejad**: Funktsioonid, mis käsitlevad vigu kindlates lõpp-punktides.
2. **Vahevara (middleware)**: Keskse veakäsitleja loomine, mis püüab kinni kõik vead, mis tekivad rakenduses.
3. **Asünkroonsete vigade käsitlemine**: Vigade haldamine asünkroonsetes funktsioonides ja promisis.

### Kohandatud Veakäsitlejad Lõpp-punktides

Mõnikord on vaja käsitleda vigu spetsiaalselt teatud lõpp-punktides. Näiteks, kui päringuga kaasneb vale sisend, saate tagastada kohandatud veateate:

```javascript
// routes/users.js
const express = require('express');
const router = express.Router();

// Näidis GET päring, mis võib tekitada vea
router.get('/:id', (req, res, next) => {
  const userId = req.params.id;

  // Kontrollime, kas ID on number
  if (isNaN(userId)) {
    const error = new Error('Invalid user ID');
    error.status = 400;
    return next(error); // Edastame vea järgmisele vahevarale või veakäsitlejale
  }

  // Otsime kasutajat (näidis)
  const user = { id: userId, name: 'John Doe' };

  // Kui kasutajat ei leita
  if (!user) {
    const error = new Error('User not found');
    error.status = 404;
    return next(error);
  }

  // Tagastame kasutaja andmed
  res.json(user);
});

module.exports = router;
```

### Keskne Veakäsitleja Vahevara

Expressis saab luua keskse veakäsitleja vahevara, mis püüab kinni kõik vead, mis tekivad rakenduses. See vahevara paigutatakse pärast kõiki teisi teekondi ja vahevarasid.

```javascript
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.use('/users', usersRouter);

// Keskne veakäsitleja
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
```

### Selgitus

- **`app.use((err, req, res, next) => { ... })`**: See on Expressi vahevara veakäsitleja signatuur. Kui mõni teekond või vahevara kutsub `next(error)`, püüab see vahevara vea kinni ja käsitleb seda.
- **`err.status`**: See on määratud veakood, kui see on olemas. Kui ei ole määratud, kasutatakse vaiket `500`.
- **`err.message`**: Veateade, mis tagastatakse vastusena.
- **`console.error(err.stack)`**: Logib vea stack trace serveri konsooli.

### Asünkroonsete Vigade Käsitlemine

Asünkroonsed operatsioonid, nagu andmete pärimine API-st või andmebaasist, võivad tekitada vigu, mis tuleb käsitleda. Expressis saate kasutada `try/catch` plokke ja `next` funktsiooni asünkroonsete vigade käsitlemiseks.

```javascript
// routes/todos.js
const express = require('express');
const router = express.Router();
const todosService = require('../services/todosService');

// Näidis GET päring, mis kasutab async/await
router.get('/:id', async (req, res, next) => {
  try {
    const todoId = req.params.id;
    
    if (isNaN(todoId)) {
      const error = new Error('Invalid todo ID');
      error.status = 400;
      throw error;
    }

    const todo = await todosService.getById(todoId);

    if (!todo) {
      const error = new Error('Todo not found');
      error.status = 404;
      throw error;
    }

    res.json(todo);
  } catch (error) {
    next(error); // Edastame vea järgmisele vahevarale või veakäsitlejale
  }
});

module.exports = router;
```

### Selgitus

- **`try/catch` plokk**: Kasutatakse asünkroonsete operatsioonide vigade püüdmise ja käsitlemise jaoks.
- **`throw error`**: Visatakse vead `try` plokist `catch` plokki, mis seejärel edasi saadetakse Expressi veakäsitlejale.
- **`next(error)`**: Kutsutakse `catch` plokis, et edastada vea järgmisele vahevarale või veakäsitlejale.

## Täiendavad Meetodid Vigade Käsitlemiseks

### Vigade Logimine

Hea tava on logida vead, et saaksite neid hiljem analüüsida ja parandada. Võite kasutada spetsiaalseid logimisteeke, nagu `winston` või `morgan`, et logida vead välisesse faili või logihaldussüsteemi.

```javascript
const express = require('express');
const morgan = require('morgan');

const app = express();

// Morgan logib kõik päringud
app.use(morgan('dev'));

// Teie teekonnad ja vahevara siia

// Keskne veakäsitleja
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
```

### Valesti Tehtud Päringute Käsitlemine

Vigade vältimiseks on hea lisada vahevara, mis püüab kinni kõik valesti tehtud päringud ja tagastab 404 vastuse.

```javascript
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.use('/users', usersRouter);

// Kui ükski teekond ei vasta
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found',
  });
});

// Keskne veakäsitleja
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
```
