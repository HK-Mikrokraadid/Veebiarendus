# Vigade haldus Express rakenduses

Vigade haldus on oluline osa rakenduse arendamisest. Vigade halduse all mõtleme me vigade tuvastamist, nende käsitlemist ja nende kohta teavitamist. Samuti oleks pikas perspektiivis kusagil ka talletada vigade kohta infot, et neid hiljem analüüsida.

Express raamistik pakub üsna lihtsat viisi kuidas vigu käsitleda. Selleks tuleb Kõigepealt luua vigu käsitlev `middleware` funktsioon. Seejärel tuleb see `middleware` funktsioon rakendusele lisada. Kui me oleme selle `middleware` oma rakenduses registreerinud ja rakenduses tekib viga, siis see viga edastatakse sellele `middleware` funktsioonile ja seejärel tegeletakse sellega vastavalt vajadusele. Selline lähenemisviis võimaldab meil vigu käsitleda ühes kohas ja see annab meile hea ja lihtsa võimaluse rakendada erinevaid vigade käsitlemise strateegiaid.

## Vea middleware funktsiooni loomine

Vea `middleware` funktsiooni loomiseks tuleb luua uus fail (näiteks `middleware/errorHandler.ts`)  ja lisada sinna järgnev kood:

```ts
import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log('Error handler:', error);
  response.status(500).json({
    success: false,
    message: error.message,
  });
};

export default errorMiddleware;
```

See `middleware` funktsioon meenutab meile juba tuttavat tavalist `middleware` funktsiooni, selle erinevusega, et esimene argument on `Error`, mis on viga, mis sellele funktsioonile Expressi poolt edastatakse.

## Vea middleware funktsiooni rakendamine

Järgmisena tuleb see `middleware` funktsioon rakendusele lisada. Selleks impordime kõigepealt selle `index.ts` failis ja registreerime selle. Meeles tuleb pidada, et vigade haldamise `middleware` tuleb registreerida kõige viimase `middleware` funktsioonina. Kui me registreerime selle `middleware` funktsiooni enne teisi `middleware` funktsioone, siis ei jõua see kunagi käesoleva `middleware` funktsioonini, sest mõni teine `middleware` funktsioon võib juba enne seda vastuse tagastada.

```ts
...
import errorMiddleware from './middlewares/errorMiddleware';
...

app.get('/homeworks', homeworksControllers.getHomeworks);
app.get('/homeworks/:id', homeworksControllers.getHomeworkById);
app.post('/homeworks', homeworksControllers.createHomework);

app.use(errorMiddleware);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running on port ${port}`);
});
```

Nüüd selleks, et meie rakendus hakkaks ka päriselt vigu edastama sellele `middleware` funktsioonile, tuleb meil kõigepealt ka kontrollerites väikesed muudatused teha. Nimelt tuleb meil kõigepealt kontrollerid ümber kirjutada omakorda `middleware` funktsioonideks, lisades neile `next` argumendi. Seejärel tuleb meil erinevates veaolukordades tekitada veaobjekt ja see `next` argumendile edastada. Näiteks:

```ts
getUsers: async (req: Request, res: Response, next: NextFunction) => {
  const users = await usersServices.getUsers();
  if (!users) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
  return res.status(200).json({
    success: true,
    message: 'List of users',
    users,
    countOfUsers: users.length,
  });
},
```

Tuleks ümber kirjutada järgmiselt:

```ts
getUsers: async (req: Request, res: Response, next: NextFunction) => {
  const users = await usersServices.getUsers();
  if (!users) {
    return next(new Error('Server error'));
  }
  return res.status(200).json({
    success: true,
    message: 'List of users',
    users,
    countOfUsers: users.length,
  });
},
```

Kui nüüd eelneva näite põhjal mingil põhjusel kasutajate nimekirja ei tagastata, siis edastatakse see viga meie loodud vea `middleware` funktsioonile ja seejärel tagastatakse kasutajale vastus, mis näeb välja järgmine:

```json
{
  "success": false,
  "message": "Server error"
}
```

Kui me nüüd kogu oma rakenduse selliselt ümber kirjutaksime, siis tekib meil selline probleem, et meil ei eristata enam veakoodi. Kõik vead tagastatakse kasutajale veakoodiga `500`. Selleks, et me saaksime eristada erinevaid veakoode, tuleb meil luua erinevad veaobjektid. Idee poolest saaksime teha sellise objekti, mis sisaldab ainult veakoodi ja veateadet. Näiteks:

```ts
const error = {
  statusCode: 500,
  message: 'Server error',
};
```

Kuid selline lähenemisviis on natukene piiratud, kuna me kaotame osa originaalse veaobjekti infost (näiteks vea *stack trace*, mis näitab ära teekonna, mida viga läbis). Üks võimalus on kasutada olemasolevat veaobjekti ja lisada sellele omadused, mis meile vaja on (näiteks veakood).

Siin kasutame nüüd pisut objektorienteeritud lähenemist, mida me ei ole küll siiani õppinud, kuid mis on siiski üsna lihtne. Me loome uue klassi, mis laiendab (nagu oleme teinud juba *Interface*-de puhul) olemasolevat veaobjekti, lisades sinna uue omaduse `statusCode`. Seejärel loome uue veaobjekti, kasutades seda klassi.

```ts
class ErrorWithCode extends Error {
  code: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.code = statusCode;
  }
}

export default ErrorWithCode;
```

Nüüd saame seda kasutada järgmiselt:

```ts
getUsers: async (req: Request, res: Response, next: NextFunction) => {
  const users = await usersServices.getUsers();
  if (!users) {
    return next(new ErrorWithCode('Server error', 500));
  }
  return res.status(200).json({
    success: true,
    message: 'List of users',
    users,
    countOfUsers: users.length,
  });
},
```

Ja vea haldamise `middleware` saame ümber kirjutada järgmiselt:

```ts
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // eslint-disable-next-line no-console
  console.log('Error handler:');
  response.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server error',
  });
};

export default errorMiddleware;
```

Nüüd, kui meil tekib rakenduses mingi viga, siis me saame sellest kasutajale teada anda vastava veakoodiga ja veateatega. Lisaks, kuigi me ei ole seda veel rakendanud, saame me nüüd ka `middleware`-s vea kohta mingil moel infot talletada. Näiteks võiksime me selle vea logida, et hiljem seda analüüsida.
