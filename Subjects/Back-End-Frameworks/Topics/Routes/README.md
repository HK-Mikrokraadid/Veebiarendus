# Router-i kasutamine express raamistikus

Selles peatükis räägime Express.js raamistikus kasutatavast `Router`-ist.

![Express Router](Express-Router.webp)

Pildi allikas: Dall-E by OpenAI

- [Router-i kasutamine express raamistikus](#router-i-kasutamine-express-raamistikus)
  - [Õpiväljundid](#õpiväljundid)
  - [Router](#router)
  - [Router-i loomine](#router-i-loomine)
  - [Middlewarede kasutamine Router-ites](#middlewarede-kasutamine-router-ites)
  - [Kokkuvõtteks](#kokkuvõtteks)

## Õpiväljundid

Peale selle peatüki läbimist oskab õpilane:

- selgitada, mis on `Router` ja kuidas seda kasutatakse;
- luua `Router`-eid Express.js rakenduses;
- kasutada `Router`-eid marsruutide grupeerimiseks.

Siiani on meil erinevad marsuudid olnud otse failis `app.js` kirjas. Kui meil on aga palju marsuute, siis võib faili sisu muutuda väga suureks ja raskesti loetavaks. Selleks, et koodi veel paremini struktureerida ja ka `app.js` faili sisu loetavamaks muuta, saame kasutada `express Router`-it.

## Router

`Router` on `Express` raamistiku objekt, mis võimaldab meil marsruute grupeerida. Näiteks kui meil on vaja eraldi marsruudid kasutajatele ja eraldi marsruudid postitustele, siis saame need eraldi `Router`-isse panna.

Kui meil praegu on failis `app.js` marsruudid kirjas midagi sellist:

```js
app.get('/logs', logger, loggerControllers.getLogs);

app.post('/login', authControllers.login);
app.post('/users', usersControllers.createUser);

app.use(isLoggedInMiddleware);

app.get('/users', isAdmin, usersControllers.getUsers);

app.get('/users/:id', usersControllers.getUserById);

app.get('/statuses', statusesControllers.getStatuses);
app.get('/statuses/:id', statusesControllers.getStatusById);

app.get('/subjects', subjectsControllers.getSubjects);
app.get('/subjects/:id', subjectsControllers.getSubjectById);
app.post('/subjects', subjectsControllers.createSubject);

app.get('/homeworks', homeworksControllers.getHomeworks);
app.get('/homeworks/:id', homeworksControllers.getHomeworkById);
app.post('/homeworks', homeworksControllers.createHomework);
```

Siis me näeme, et need marsuudid juba moodustavad omaette grupid vastavalt ressurssidele. Näiteks on meil olemas kasutajate marsruudid, teemadega seotud marsruudid, kodutöödega seotud marsruudid jne. Nüüd saame need grupid eraldi `Router`-isse panna.

## Router-i loomine

Kõigepealt loome vastava komponendi kausta uue faili, mis hakkab sisaldama vastava ressursiga seotud marsruute. Näiteks õppeainetega seotud marsruudid võiks olla failis `subjectsRoutes.js` failis. Kõigepealt tuleb sinna faili importida `express`:

```javascript
const express = require('express');
```

Ja seejärel saame luua `Router` objekti:

```javascript
const router = express.Router();
```

Lisaks tuleks samasse faili importida ka vastavad kontrollerid, mida marsruudid kasutavad:

```javascript
const subjectsControllers = require('./subjectsControllers');
```

Seejärel saame `app.js` failist liigutada kõik õppeainetega seotud marsruudid `subjectsRoutes.js` faili ja need pisut ümber kirjutada, et need kasutaksid `app` asemel `router`-it:

```javascript
router.get('/', subjectsControllers.getSubjects);
router.get('/:id', subjectsControllers.getSubjectById);
router.post('/', subjectsControllers.createSubject);
```

Ja lõpuks tuleb `router` ka eksporida ja `app.js` faili importida:

```javascript
module.exports = router;
```

`app.js` failis impordime `subjectsRoutes.js` faili ja kasutame `app.use` meetodit, et `express` raamistik teaks, et meil on olemas selline `Router`:

```javascript
const subjectsRoutes = require('./subjects/subjectsRoutes');

app.use('/subjects', subjectsRoutes);
```

Lõplikult näeb `subjectsRoutes.js` fail välja selline:

```javascript
const express = require('express');
const subjectsControllers = require('./subjectsControllers');

const router = express.Router();

router.get('/', subjectsControllers.getSubjects);
router.get('/:id', subjectsControllers.getSubjectById);
router.post('/', subjectsControllers.createSubject);

module.exports = router;
```

## Middlewarede kasutamine Router-ites

Middleware-de kasutamine `Router`-ites on täpselt samamoodi nagu `app`-is. Näiteks kui meil on vaja `isLoggedInMiddleware`-i kasutada, siis saame seda teha nii:

```javascript
const express = require('express');

const subjectsControllers = require('./subjectsControllers');
const isLoggedInMiddleware = require('../auth/isLoggedInMiddleware');

const router = express.Router();

router.get('/', isLoggedInMiddleware, subjectsControllers.getSubjects);

module.exports = router;
```

Samas on oluline meeles pidada, et kui me kasutame `Router`-it, siis me ei saa kasutada `app.use` meetodit, et kasutada middleware-d kõikide marsruutide puhul. Selle asemel peame kasutama `router.use` meetodit:

```javascript
const express = require('express');

const subjectsControllers = require('./subjectsControllers');
const isLoggedInMiddleware = require('../auth/isLoggedInMiddleware');

const router = Router();

router.use(isLoggedInMiddleware);

router.get('/subjects', subjectsControllers.getSubjects);

module.exports = router;
```

Või siis registreerime vastava middleware lihtsalt `app.js` failis enne vastava `router`-i kasutamist:

```javascript
const subjectsRoutes = require('./subjects/subjectsRoutes');

app.use(isLoggedInMiddleware);
app.use(subjectsRoutes);
```

## Kokkuvõtteks

`Router`-id on väga kasulikud, kui meil on palju marsruute ja soovime neid grupeerida. Samuti muudab see meie koodi loetavamaks ja paremini struktureerituks. Samuti saame `Router`-ites kasutada middleware-deid täpselt samamoodi nagu `app`-is.
