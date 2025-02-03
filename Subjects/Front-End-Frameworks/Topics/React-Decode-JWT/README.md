# JSON Web Token (JWT) Dekodeerimine React-is

JSON Web Token (JWT) on kompaktne ja URL-sõbralik standard, mida kasutatakse turvalise ja kompaktse teabevahetuse vahendina. JWT koosneb kolmest osast: päis (header), kasulik koormus (payload) ja allkiri (signature). Kasulikus koormuses salvestatakse tavaliselt kasutaja andmed ja muud seotud metaandmed, mida soovite oma rakenduses kasutada.

Kui React-i rakendus kasutab API-t, mis tagastab JWT autentimistõendi, saate selle dekodeerida ja sealt välja lugeda kasulikku teavet, näiteks kasutaja rollid, õigused ja muud seotud andmed.

![Decode Token](Decode-Token.webp)

Pildi allikas: Dall-E by OpenAI

- [JSON Web Token (JWT) Dekodeerimine React-is](#json-web-token-jwt-dekodeerimine-react-is)
  - [JWT Dekodeerimine React-is](#jwt-dekodeerimine-react-is)
    - [Näide: JWT dekodeerimine `jwt-decode` teegiga](#näide-jwt-dekodeerimine-jwt-decode-teegiga)
      - [Teegi `jwt-decode` installimine](#teegi-jwt-decode-installimine)
      - [JWT Dekodeerimine ja sellest informatsiooni lugemine](#jwt-dekodeerimine-ja-sellest-informatsiooni-lugemine)
    - [Näide: JWT dekodeerimine manuaalselt](#näide-jwt-dekodeerimine-manuaalselt)
      - [Manuaalne dekodeerimine](#manuaalne-dekodeerimine)
  - [Näide: JWT Kasutamine React-i Rakenduses](#näide-jwt-kasutamine-react-i-rakenduses)
    - [Konteksti loomine ja seadistamine](#konteksti-loomine-ja-seadistamine)
    - [Kasutaja info näitamine](#kasutaja-info-näitamine)
    - [Kontrollküsimused](#kontrollküsimused)
    - [Harjutus](#harjutus)
    - [Allikad](#allikad)

## JWT Dekodeerimine React-is

JWT dekodeerimiseks ja selle kasuliku koormuse lugemiseks React-is saate kasutada järgmist:

- **Teekide kasutamine**: Kasutades teeki nagu `jwt-decode`, mis muudab protsessi lihtsamaks ja lühendatuks.
- **Manuaalne dekodeerimine**: Kasutades JavaScripti sisseehitatud funktsioone.

### Näide: JWT dekodeerimine `jwt-decode` teegiga

Teek `jwt-decode` võimaldab dekodeerida JWT kiiresti ja lihtsalt ilma vajaduseta seda käsitsi töödelda.

#### Teegi `jwt-decode` installimine

Paigaldame teegi `jwt-decode` oma projekti.

```bash
npm install jwt-decode
```

#### JWT Dekodeerimine ja sellest informatsiooni lugemine

Kasutame teeki `jwt-decode`, et dekodeerida JWT ja välja lugeda selle kasulikku koormust.

```javascript
// JWTDecoder.js
import React from "react";
import { jwtDecode } from "jwt-decode";

const JWTDecoder = ({ token }) => {
  if (!token) {
    return <p>No token provided</p>;
  }

  try {
    // Dekodeeri JWT kasulik koormus
    const decoded = jwtDecode(token);
    return (
      <div>
        <h3>Decoded JWT Payload:</h3>
        <pre>{JSON.stringify(decoded, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    return <p>Invalid token</p>;
  }
};

export default JWTDecoder;
```

### Näide: JWT dekodeerimine manuaalselt

Kui soovite JWT dekodeerida ilma välist teeki kasutamata, saate seda teha, dekodeerides baaskoodiga (Base64) stringi, mis moodustab JWT kasuliku koormuse.

#### Manuaalne dekodeerimine

```javascript
// ManualJWTDecoder.js
import React from "react";

const base64UrlDecode = (str) => {
  // Asenda - ja _ märgid vastavalt Base64 standardile
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  return decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
};

const decodeJWT = (token) => {
  const [, payload] = token.split(".");
  return JSON.parse(base64UrlDecode(payload));
};

const ManualJWTDecoder = ({ token }) => {
  if (!token) {
    return <p>No token provided</p>;
  }

  try {
    // Dekodeeri JWT kasulik koormus käsitsi
    const decoded = decodeJWT(token);
    return (
      <div>
        <h3>Decoded JWT Payload:</h3>
        <pre>{JSON.stringify(decoded, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    return <p>Invalid token</p>;
  }
};

export default ManualJWTDecoder;
```

## Näide: JWT Kasutamine React-i Rakenduses

Kombineerime JWT dekodeerimise ja React Context API, et hoida kasutaja autentimisandmeid rakenduse olekus ja lugeda JWT-st informatsiooni välja.

### Konteksti loomine ja seadistamine

```javascript
// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Võta localStorage'ist token
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token");
        setUser(null);
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    const decodedUser = jwtDecode(token);
    setUser(decodedUser);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Kasutaja info näitamine

Kasutame `AuthContext`-i, et kuvada kasutaja infot, kui ta on sisse logitud.

```javascript
// UserProfile.js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <p>No user logged in</p>;
  }

  return (
    <div>
      <h3>User Profile</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;
```

### Kontrollküsimused

1. Kuidas saate JWT-st informatsiooni välja lugeda React-is?
2. Millised on erinevused `jwt-decode` teegi ja manuaalse dekodeerimise vahel?
3. Kuidas integreerida JWT dekodeerimine React Context API-ga?

### Harjutus

- **Loo rakendus, mis loeb JWT-st kasutaja informatsiooni välja ja kuvab selle**: Kasutage `jwt-decode` teeki või dekodeerige JWT manuaalselt, et luua rakendus, mis kuvab kasutaja informatsiooni JWT-st.
- **Integreeri JWT dekodeerimine autentimise konteksti**: Laiendage eelnevat näidet, et hoida kasutaja autentimisandmed ja rollid JWT-st loetuna React Context API-s.

### Allikad

- [JWT Documentation](https://jwt.io/introduction/)
- [jwt-decode - NPM](https://www.npmjs.com/package/jwt-decode)
- [React Documentation - Context](https://reactjs.org/docs/context.html)
