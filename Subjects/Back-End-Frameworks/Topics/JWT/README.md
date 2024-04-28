# JWT (JSON Web Token)

JSON Web Token (JWT) on avatud standard, mis määratleb kompaktse ja iseseisva viisi teabe turvaliseks edastamiseks osapoolte vahel JSON-objektina. Seda teavet saab kontrollida ja usaldada, kuna see on digitaalselt allkirjastatud. JWT-sid saab allkirjastada parooliga või avaliku / privaatse võtmepaari abil RSA või ECDSA abil.

## JWT struktuur

### Header

Päis koosneb tavaliselt kahest osast: loa tüübist, milleks on JWT, ja kasutatavast allkirjastamise algoritmist, näiteks HMAC SHA256 või RSA.

### Payload

Tokeni teine osa on kasulik koormus, mis sisaldab nõudeid.

### Signature

Allkirjaosa loomiseks peate võtma kodeeritud päise, kodeeritud kasuliku koormuse, parooli, päises määratud algoritmi ja selle allkirjastama.

## Millal JWT-d kasutada?

- **Autoriseerimine**: see on kõige tavalisem stsenaarium JWT kasutamiseks. Kui kasutaja on sisse logitud, sisaldab iga järgmine taotlus JWT-d, mis võimaldab kasutajal juurde pääseda selle märgiga lubatud marsruutidele, teenustele ja ressurssidele.
- **Teabevahetus**: JSON-i veebimärgid on hea viis turvaliselt osapoolte vahel teavet edastada. Kuna JWT-sid saab allkirjastada - näiteks kasutades avaliku / privaatse võtme paare -, võite olla kindel, et saatjad on need, kes nad end ütlevad. Lisaks, kuna allkiri arvutatakse päise ja kasuliku koormuse abil, saate ka kontrollida, kas sisu ei ole muudetud

### Eelised:

- **Kompaktsus**: JWT on kompaktne, mis tähendab, et seda saab hõlpsasti URL-idel, HTTP päistes ja POST-andmetes edastada.
- **Iseseisvus**: Tokenid on iseseisvad, sest need sisaldavad kogu vajalikku teavet. Võite kontrollida tokeni kehtivust ilma täiendava teabeta, mis tähendab, et süsteem on tõhusam ja paindlikum.
- **Turvalisus**: JWT tagab andmete terviklikkuse ja võimaldab autentimist ja autoriseerimist, mis on kasulik turvaliste ühenduste loomisel.

## Kuidas JWT-d kasutada?

Selleks, et saaksime API-s JWT-d kasutada, peame tegema järgmised tegevused:

- Lisama oma projektile `jsonwebtoken` npm paki: `npm install jsonwebtoken` - https://www.npmjs.com/package/jsonwebtoken
- Lisama oma API-le sisselogimise võimaluse
- Sisse logimiseks saadab klient API-le oma kasutajanime (meil kasutusel e-mail) ja parooli.
- API kontrollib, kas sellise e-mailiga kasutaja on olemas ja kas kasutaja poolt saadetud parool klapib andmebaasis oleva hashiga - selleks kasutatakse `Bcrypti` match funktsiooni, mis võtab parooli ja võrdleb seda hashiga.
- Kui e-mail või parool ei sobi, saadetakse kliendile veateade.
- Kui e-mail ja parool olid korrektsed, siis luuakse `JWT` token, mille `payloadi` lisatakse kasutaja andmed, mille abil saame hiljem andmebaasi päringuid teha - token luuakse parooli abil, mida teab ainult API.
- Token saadetakse tagasi kliendile, et klient saaks selle lisada edaspidi päringuid tehes headerisse `Authorization Bearer` tokenina.
- API vastus koos tokeniga näeb välja umbes selline:

```json
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2ODkxMjE5LCJleHAiOjE2MDY4OTQ4MTl9.ZE4XPyZhY2kJvktoIlDNowKvAdKHdxlKchrG_f_cABE"
}
```

Kui kasutame API testimiseks Postmani, siis saab siit vastusest võtta tokeni ja kopeerida selle Postmani: 

![Postman](image.png)

- Lisame API-le middleware isLoggedIn, mis registreeritakse enne neid endpointe, mille puhul kasutaja peab olema sisse logitud.

```javascript
app.post('/api/login', authController.login);
app.post('/api/users', usersController.create);

app.use(isLoggedIn);

app.get('/api/users', usersController.read);
app.get('/api/users/:id', usersController.readById);
```

- Enne kui request objekt jõuab kontrollerisse, kontrollib middleware:
  - Kas request objekti headeris on Authorization Bearer kirje
  - Kui on, siis võtab sealt tokeni, vastasel juhul tagastab kliendile veateate.
  - Kontrollib, kas token on korras (parooli abil, millega token on loodud).
  - Kui token on korras, siis võetakse tokeni payloadist kasutaja id ja lisatakse see request objektile ja antakse tegevus üle kontrollerile.
  - Kui token ei olnud korras, tagastatakse kliendile veateade.

```typescript
import { NextFunction, Request, Response } from 'express';
import jwtService from '../components/auth/jwtService';

const isLoggedInMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers?.authorization;
  if (!authorization) {
    return res.status(401).json({
      success: false,
      message: 'Authorization header is required',
    });
  }
  const token = authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token is required',
    });
  }
  const decoded = jwtService.verify(token);
  if (!decoded) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
  res.locals.user = decoded;
  return next();
};

export default isLoggedInMiddleware;
```

## Kogu sisselogimise protsess näeb diagrammil välja umbes selline

```mermaid
graph TD
  A[Start: Login Request] --> B{Kas email ja parool on olemas?}
  B -->|Jah| C[Kasutaja pärimine andmebaasist kasutades emaili]
  B -->|Ei| E[Return 400: Kontrolli, kas email ja parool on olemas]
  C --> D{Kas kasutaja eksisteerib?}
  D -->|Jah| F[Võrdle kasutaja poolt saadetud parooli andmebaasis oleva hashiga]
  D -->|Ei| G[Return 400: User not found]
  F --> H{Kas parool on õige?}
  H -->|Jah| I[Loo JWT Token]
  H -->|Ei| J[Return 401: Wrong password]
  I --> K[Return 200: token]
```
