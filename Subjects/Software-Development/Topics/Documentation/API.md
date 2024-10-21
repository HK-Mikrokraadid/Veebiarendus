# Näide API dokumentatsioonist

## 1. Ülevaade

**Projekti nimi:** Online-ülesannete jälgimise süsteem

API dokumentatsioon kirjeldab Online-ülesannete jälgimise süsteemi RESTful API lõpp-punkte, et võimaldada süsteemi komponentide ja kolmandate osapoolte rakenduste omavahelist suhtlust. See dokumentatsioon aitab arendajatel mõista, kuidas süsteemi funktsionaalsust kasutada API päringute abil.

## 2. Autentimise API

### 2.1. Registreerimine

- **Endpoint:** `/api/register`
- **Meetod:** `POST`
- **Kirjeldus:** Loob uue kasutajakonto.
- **Päringu keha:**

  ```json
  {
    "email": "kasutaja@example.com",
    "password": "salajaneParool"
  }
  ```

- **Vastus:**

  - **200 OK**: Konto on edukalt loodud.

    ```json
    {
      "message": "Konto edukalt loodud"
    }
    ```

  - **400 Bad Request**: Vale või puudulikud andmed.

### 2.2. Sisselogimine

- **Endpoint:** `/api/login`
- **Meetod:** `POST`
- **Kirjeldus:** Logib kasutaja süsteemi sisse ja tagastab autentimismärgi (JWT).
- **Päringu keha:**

  ```json
  {
    "email": "kasutaja@example.com",
    "password": "salajaneParool"
  }
  ```

- **Vastus:**

  - **200 OK**: Sisselogimine edukas.

    ```json
    {
      "token": "jwtAutentimismark"
    }
    ```

  - **401 Unauthorized**: Vale e-posti aadress või parool.

## 3. Ülesannete haldamise API

### 3.1. Ülesannete vaatamine

- **Endpoint:** `/api/tasks`
- **Meetod:** `GET`
- **Kirjeldus:** Tagastab kasutajale määratud ülesannete loendi.
- **Autentimine:** JWT nõutud (Authorization päises).
- **Vastus:**

  - **200 OK**: Ülesannete loetelu tagastatud.

    ```json
    [
      {
        "id": 1,
        "title": "Esimene ülesanne",
        "description": "Tee see ülesanne ära",
        "deadline": "2024-12-01T23:59:59Z"
      },
      {
        "id": 2,
        "title": "Teine ülesanne",
        "description": "Teine ülesanne on ka oluline",
        "deadline": "2024-12-05T23:59:59Z"
      }
    ]
    ```

### 3.2. Ülesande esitamine

- **Endpoint:** `/api/tasks/{taskId}/submit`
- **Meetod:** `POST`
- **Kirjeldus:** Esitab ülesande vastuse.
- **Autentimine:** JWT nõutud (Authorization päises).
- **Päringu keha:**

  ```json
  {
    "answer": "Siin on minu vastus ülesandele",
    "attachments": ["file1.pdf", "screenshot.png"]
  }
  ```

- **Vastus:**

  - **200 OK**: Ülesanne on edukalt esitatud.

    ```json
    {
      "message": "Ülesanne edukalt esitatud"
    }
    ```

  - **404 Not Found**: Ülesannet ei leitud.

#### 4. Tagasiside API

##### 4.1. Tagasiside vaatamine

- **Endpoint:** `/api/tasks/{taskId}/feedback`
- **Meetod:** `GET`
- **Kirjeldus:** Tagastab antud ülesandele antud tagasiside.
- **Autentimine:** JWT nõutud (Authorization päises).
- **Vastus:**

  - **200 OK**: Tagasiside tagastatud.

    ```json
    {
      "feedback": "Hea töö, kuid järgmine kord pööra rohkem tähelepanu detailidele",
      "grade": "B+"
    }
    ```

  - **404 Not Found**: Ülesannet või tagasisidet ei leitud.

#### 5. Vastuste koodid ja veahaldus

Kõik API lõpp-punktid tagastavad HTTP vastuste koode, mis aitavad määratleda päringu tulemuse:

- **200 OK**: Päring oli edukas.
- **400 Bad Request**: Päringu andmed on vigased või puudulikud.
- **401 Unauthorized**: Autentimine ebaõnnestus.
- **404 Not Found**: Resurssi ei leitud.

#### 6. Kokkuvõte

API dokumentatsioon annab arendajatele vajaliku teabe, et suhelda Online-ülesannete jälgimise süsteemi erinevate funktsioonidega. Korralik autentimine ja veahaldus on oluline, et tagada süsteemi turvalisus ja usaldusväärsus.
