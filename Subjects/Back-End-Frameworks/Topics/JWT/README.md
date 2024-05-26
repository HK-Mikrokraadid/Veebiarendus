# JWT (*JSON Web Token*)

Selles peatükis käsitleme JWT (*JSON Web Token*)-i, mis on avatud standard, mida kasutatakse andmete turvaliseks edastamiseks osapoolte vahel JSON formaadis.

![JWT](JWT.webp)

Pildi allikas: DALL-E by OpenAI

- [JWT (*JSON Web Token*)](#jwt-json-web-token)
  - [Õpiväljundid](#õpiväljundid)
  - [JWT](#jwt)
    - [JWT komponendid](#jwt-komponendid)
    - [JWT struktuur](#jwt-struktuur)
  - [Millal JWT-d kasutada?](#millal-jwt-d-kasutada)
    - [Eelised](#eelised)
    - [Puudused](#puudused)
  - [JWT loomine ja valideerimine](#jwt-loomine-ja-valideerimine)
    - [JWT loomine](#jwt-loomine)
      - [Näide Node.js-is](#näide-nodejs-is)
    - [JWT valideerimine](#jwt-valideerimine)
      - [Näide Node.js-is](#näide-nodejs-is-1)
  - [JWT kasutamine autentimises ja autoriseerimises](#jwt-kasutamine-autentimises-ja-autoriseerimises)
    - [Autentimine](#autentimine)
      - [Näide - 1](#näide---1)
    - [Autoriseerimine](#autoriseerimine)
      - [Näide - 2](#näide---2)
  - [Allikad](#allikad)
  - [Kontrollküsimused](#kontrollküsimused)

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Selgitama, mis on JWT ja kuidas see töötab.
- Kirjeldama JWT struktuuri ja selle komponente.
- Loome ja kontrollima JWT-d.
- Kasutama JWT-d autentimise ja autoriseerimise protsessides.

## JWT

JWT (*JSON Web Token*) on avatud standard (RFC 7519), mida kasutatakse andmete turvaliseks edastamiseks osapoolte vahel JSON formaadis. See on eriti kasulik autentimise ja informatsiooni vahetamise jaoks, kuna see võimaldab teabe kindlat ja tõhusat edastamist. JWT on kompaktne ja hõlpsasti kasutatav mitmesugustes stsenaariumides, sealhulgas veebirakenduste autentimises ja autoriseerimises.

### JWT komponendid

JWT koosneb kolmest osast, mis on eraldatud punktidega (.). Need osad on:

- **Header (Päis):** See sisaldab teavet tokeni tüüp ja kasutatava allkirja algoritmi kohta (nt HMAC SHA256 või RSA).

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- **Payload (Koormus):** See sisaldab väiteid (*claims*), mis on JWT-sse kodeeritud teave. Väited võivad olla standardiseeritud, avalikud või privaatsed.

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

- **Signature (Allkiri):** See on loodud, et tagada tokeni terviklikkus ja ehtsus. Allkiri luuakse, kasutades salajast võtit või avaliku ja privaatvõtme paari.

```bash
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret
)
```

### JWT struktuur

Kogu JWT struktuur näeb välja järgmiselt:

```bash
xxxxx.yyyyy.zzzzz
```

kus `xxxxx` on päis, `yyyyy` on koormus ja `zzzzz` on allkiri, kõik base64-url kodeeringus.

## Millal JWT-d kasutada?

- **Autoriseerimine**: see on kõige tavalisem stsenaarium JWT kasutamiseks. Kui kasutaja on sisse logitud, sisaldab iga järgmine taotlus JWT-d, mis võimaldab kasutajal juurde pääseda selle märgiga lubatud marsruutidele, teenustele ja ressurssidele.
- **Teabevahetus**: JSON-i veebimärgid on hea viis turvaliselt osapoolte vahel teavet edastada. Kuna JWT-sid saab allkirjastada - näiteks kasutades avaliku / privaatse võtme paare -, võite olla kindel, et saatjad on need, kes nad end ütlevad. Lisaks, kuna allkiri arvutatakse päise ja kasuliku koormuse abil, saate ka kontrollida, kas sisu ei ole muudetud

### Eelised

- **Kompaktsus**: JWT on kompaktne, mis tähendab, et seda saab hõlpsasti URL-idel, HTTP päistes ja POST-andmetes edastada.
- **Iseseisvus**: Tokenid on iseseisvad, sest need sisaldavad kogu vajalikku teavet. Võite kontrollida tokeni kehtivust ilma täiendava teabeta, mis tähendab, et süsteem on tõhusam ja paindlikum.
- **Turvalisus**: JWT tagab andmete terviklikkuse ja võimaldab autentimist ja autoriseerimist, mis on kasulik turvaliste ühenduste loomisel.

### Puudused

- **Tokeni lekkinud andmed**: JWT-sid ei saa tagasi kutsuda ega kehtetuks tunnistada, kui need on välja antud. Kui JWT on lekkinud, võib see olla ohtlik, kuna see võib anda volitamata juurdepääsu ja selle vältimiseks tuleb rakendada täiendavaid meetmeid.

## JWT loomine ja valideerimine

### JWT loomine

JWT loomise protsess hõlmab päise, koormuse ja allkirja loomist ning nende ühendamist.

#### Näide Node.js-is

JWT-de loomiseks ja valideerimiseks Node.js-is saate kasutada `jsonwebtoken` teeki.

- **Installige jsonwebtoken teek:**

```bash
npm install jsonwebtoken
```

- **JWT loomine:**

```javascript
const jwt = require('jsonwebtoken');

const payload = {
  sub: "1234567890",
  name: "John Doe",
  admin: true
};

const secret = 'your-256-bit-secret';

const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
console.log(token);
```

### JWT valideerimine

JWT valideerimine hõlmab saadud tokeni dekodeerimist ja allkirja kontrollimist, et veenduda selle ehtsuses ja terviklikkuses.

#### Näide Node.js-is

1. **JWT valideerimine:**

```javascript
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.D1lvcHfxDQn0EnyFCWm08FUBKm0tC3GtBCVm5qkaGTI";

jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    console.log("Token is invalid or expired.");
  } else {
    console.log("Token is valid:", decoded);
  }
});
```

## JWT kasutamine autentimises ja autoriseerimises

### Autentimine

JWT-d kasutatakse sageli kasutaja autentimiseks. Kui kasutaja logib sisse, loob server JWT, mis sisaldab kasutaja identiteeti ja võimalikke õigusi. Seejärel saadetakse JWT kasutajale ja salvestatakse brauseri küpsisena või lokaalses salvestusruumis.

#### Näide - 1

- **Kasutaja sisselogimine ja JWT loomine:**

```javascript
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Kontrollige kasutajanime ja parooli
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ sub: user.id, name: user.username }, secret, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});
```

### Autoriseerimine

Kui kasutaja on autentitud ja tal on JWT, saab server seda tokenit kasutada kasutaja identiteedi kontrollimiseks ja autoriseerimiseks, kui ta taotleb kaitstud ressursse.

#### Näide - 2

- **JWT kasutamine autoriseerimiseks:**

```javascript
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, secret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

app.get('/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});
```

## Allikad

- [JWT.io](https://jwt.io/)
- [RFC 7519: JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
- [jsonwebtoken Documentation](https://www.npmjs.com/package/jsonwebtoken)
- [Node.js Official Documentation](https://nodejs.org/en/docs/)

## Kontrollküsimused

- Mis on JWT ja kuidas see töötab?
- Kirjeldage JWT struktuuri ja selle komponente.
- Kuidas luua ja valideerida JWT-d Node.js-is, kasutades `jsonwebtoken` teeki?
- Kuidas kasutada JWT-d autentimise ja autoriseerimise protsessides?
- Millised on JWT kasutamise eelised?
