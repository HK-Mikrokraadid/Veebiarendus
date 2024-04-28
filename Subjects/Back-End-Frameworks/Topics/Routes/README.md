# Router-i kasutamine express raamistikus

Siiani on meil erinevad marsuudid olnud otse failis `index.ts` kirjas. Kui meil on aga palju marsuute, siis võib faili sisu muutuda väga suureks ja raskesti loetavaks. Selleks, et koodi veel paremini struktureerida ja ka `index.ts` faili sisu loetavamaks muuta, saame kasutada `express Router`-it.

## Router

`Router` on `Express` raamistiku objekt, mis võimaldab meil marsruute grupeerida. Näiteks kui meil on vaja eraldi marsruudid kasutajatele ja eraldi marsruudid postitustele, siis saame need eraldi `Router`-isse panna.

Kui meil praegu on failis `index.ts` marsruudid kirjas midagi sellist:

```typescript
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

Kõigepealt loome vastava komponendi kausta uue faili, mis hakkab sisaldama vastava ressursiga seotud marsruute. Näiteks õppeainetega seotud marsruudid võiks olla failis `subjectsRoutes.ts` failis. Kõigepealt tuleb sinna faili importida `express` raamistiku `Router` objekt:

```typescript
import { Router } from 'express';
```

Ja seejärel saame luua `Router`-i:

```typescript
const router = Router();
```

Lisaks tuleks samasse faili omportida ka vastavad kontrollerid, mida marsruudid kasutavad:

```typescript
import subjectsControllers from './subjectsControllers';
```

Seejärel saame `index.ts` failist liigutada kõik õppeainetega seotud marsruudid `subjectsRoutes.ts` faili ja need pisut ümber kirjutada, et need kasutaksid `app` asemel `router`-it:

```typescript
router.get('/subjects', subjectsControllers.getSubjects);
router.get('/subjects/:id', subjectsControllers.getSubjectById);
router.post('/subjects', subjectsControllers.createSubject);
```

Ja lõpuks tuleb `router` ka eksporida ja `index.ts` faili importida:

```typescript
export default router;
```

`index.ts` failis impordime `subjectsRoutes.ts` faili ja kasutame `app.use` meetodit, et `express` raamistik teaks, et meil on olemas selline `Router`:

```typescript
import subjectsRoutes from './subjects/subjectsRoutes';

app.use(subjectsRoutes);
```

Lõplikult näeb `subjectsRoutes.ts` fail välja selline:

```typescript
import { Router } from 'express';
import subjectsControllers from './subjectsControllers';

const router = Router();

router.get('/subjects', subjectsControllers.getSubjects);
router.get('/subjects/:id', subjectsControllers.getSubjectById);
router.post('/subjects', subjectsControllers.createSubject);

export default router;
```

## Middlewarede kasutamine Router-ites

Middleware-de kasutamine `Router`-ites on täpselt samamoodi nagu `app`-is. Näiteks kui meil on vaja `isLoggedInMiddleware`-i kasutada, siis saame seda teha nii:

```typescript
import { Router } from 'express';

import subjectsControllers from './subjectsControllers';
import isLoggedInMiddleware from '../auth/isLoggedInMiddleware';

const router = Router();

router.get('/subjects', isLoggedInMiddleware, subjectsControllers.getSubjects);

export default router;
```

Samas on oluline meeles pidada, et kui me kasutame `Router`-it, siis me ei saa kasutada `app.use` meetodit, et kasutada middleware-d kõikide marsruutide puhul. Selle asemel peame kasutama `router.use` meetodit:

```typescript
import { Router } from 'express';

import subjectsControllers from './subjectsControllers';
import isLoggedInMiddleware from '../auth/isLoggedInMiddleware';

const router = Router();

router.use(isLoggedInMiddleware);

router.get('/subjects', subjectsControllers.getSubjects);

export default router;
```

Või siis registreerime vastava middleware lihtsalt `index.ts` failis enne vastava `router`-i kasutamist:

```typescript
import subjectsRoutes from './subjects/subjectsRoutes';

app.use(isLoggedInMiddleware);
app.use(subjectsRoutes);
```