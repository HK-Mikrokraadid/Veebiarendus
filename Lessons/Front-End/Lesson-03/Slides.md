---
marp: true

---
# Veebiarendus

## Front-End arendus

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänased teemad

- Meenutame eelmist loengut
- Mitme JS faili kasutamine
- [HTML vormid](../../../Subjects/Front-End-Technologies/Topics/HTML-Forms/README.md)
- [HTML vormid ja Javascript](../../../Subjects/Front-End-Technologies/Topics/Forms-and-JS/README.md)

---

## Millest rääkisime eelmisel korral?

---

## Mitme Javascripti faili kasutamine HTML-is

Javascripti koodi saab jagada mitmeks failiks, et hoida koodi loogiliselt eraldatuna ja hõlpsasti hallatavana.

Kuna Javascript ise ei saa tesisi faile importida (sest veebilehitsejas töötav Javascript ei saa failisüsteemiga suhelda), tuleb kasutada HTML-i `<script>` elementi.

---

## Mitu JS faili HTML-is

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script src="script1.js"></script>
  <script src="script2.js"></script>
</body>
</html>
```

---

## JS failide järjekord

Tähelepanu tuleb pöörata failide järjekorrale, sest Javascripti kood laaditakse ja töödeldakse järjestikku. See tähendab, et kui failis `script2.js` kasutatakse funktsiooni, mis on defineeritud failis `script1.js`, peab `script1.js` olema laetud enne `script2.js`.

---

## HTML vormid

HTML-i vorm koosneb ühest või mitmest sisendväljast, mille kasutajad saavad täita.

Vormid võimaldavad kasutajatel esitada teavet, nagu nimed, aadressid ja paroolid, mis on vajalikud ülesannete täitmiseks nagu kasutajakonto loomine, sisselogimine või andmete otsimine.

---

## HTML vormide põhielemendid

- `<form>` - Defineerib vormi ja selle omadused, nagu `action` ja `method`
- `<input>` - Loob sisendväljad erinevat tüüpi andmete jaoks
- `<label>` - Võimaldab lisada sisendväljadele teksti
- `<textarea>` - Võimaldab mitmerealist tekstisisestust
- `<select>` ja `<option>` - Loob rippmenüüd valikute jaoks
- `<checkbox>` ja `<radio>` - Loob märkeruudud ja raadionupud valikute jaoks
- jne ...

---

## HTML vormide atribuudid

HTML vormielementidele saab lisada erinevaid atribuute, mis määravad vormi käitumise, välimuse ja muud omadused.

- `action` - Määrab URL-i, kuhu vormi andmed saadetakse
- `method` - Määrab andmete saatmise meetodi, tavaliselt `GET` või `POST`
- `name` - Määrab vormi elemendi nime
- `required` - Määrab, kas vormielement on kohustuslik
- jne ...

---

## HTML vormi näide: Lihtne registreerimisvorm

```html
<h1>
  Registreerimisvorm
</h1>

<form action="/submit-form" method="POST" id="userInfoForm">
  <label for="name">Nimi:</label>
  <input type="text" id="name" name="name" required>
  <br>
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required>
  <br>
  <label for="password">Parool:</label>
  <input type="password" id="password" name="password" required>
  <br>
  <button type="submit">Registreeru</button>
</form>

```

---

## HTML vormide käsitlemine Javascriptiga

HTML vormi andmeid saab lugeda ja töödelda Javascripti abil.

```javascript

document.getElementById('userInfoForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Peatab vormi tavapärase esitamise

  const username = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userData = {
    username,
    email,
    password,
  };

  console.log(userData);
  // Siit saab jätkata andmete töötlemist või saatmist serverisse
});

```

---

## HTML vormide valideerimine Javascriptiga

Vormi andmeid saab kontrollida ja valideerida Javascripti abil kasutades `checkValidity()` meetodit.

```javascript
if (email.checkValidity()) {
  // Kui email on korrektne
} else {
  // Kui email on valesti sisestatud
}
```

---

## HTML vormide valideerimine Javascriptiga - veateade

Javascripti abil saame ka kuvada veateateid, kui vormi andmed on valesti sisestatud.

```javascript
if (!email.checkValidity()) {
  console.log(email.validationMessage);
}
```

---

## Kodutöö

- Blogipostituste sisestamine HTML vormide abil
- Blogipostituste kuvamine eraldi failist
