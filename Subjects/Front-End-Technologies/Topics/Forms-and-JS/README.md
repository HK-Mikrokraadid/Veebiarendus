
# HTML Vormide käsitlemine JavaScriptiga

Selles õppematerjalis käsitleme, kuidas kasutada JavaScripti HTML vormide andmete lugemiseks.

![HTML-Form-JS](HTML-Form-JS.webp)

Pildi allikas: Dall-E by OpenAI

- [HTML Vormide käsitlemine JavaScriptiga](#html-vormide-käsitlemine-javascriptiga)
  - [Õpiväljundid](#õpiväljundid)
  - [JavaScriptiga andmete lugemine](#javascriptiga-andmete-lugemine)
  - [Kokkuvõte](#kokkuvõte)
  - [Allikad](#allikad)

## Õpiväljundid

Pärast selle teema läbimist oskad:

- lugeda vormide andmeid JavaScriptiga;

## JavaScriptiga andmete lugemine

HTML vormi andmeid saab lugeda ja töödelda JavaScripti abil. Järgnevalt on toodud, kuidas kuulata vormi esitamise sündmust ja lugeda erinevat tüüpi vormielementide andmeid.

```html
<form id="userInfoForm">
  <label for="username">Kasutajanimi:</label>
  <input type="text" id="username" name="username" required>

  <label for="email">E-post:</label>
  <input type="email" id="email" name="email" required>

  <label for="country">Riik:</label>
  <select id="country" name="country">
    <option value="ee">Eesti</option>
    <option value="lv">Läti</option>
    <option value="lt">Leedu</option>
  </select>

  <label for="subscribe">Tellin uudiskirja:</label>
  <input type="checkbox" id="subscribe" name="subscribe">

  <button type="submit">Esita</button>
</form>
```

```javascript
document.getElementById('userInfoForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Peatab vormi tavapärase esitamise

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const country = document.getElementById('country').value;
  const subscribe = document.getElementById('subscribe').checked;

  const userData = {
    username,
    email,
    country,
    subscribe,
  };

  console.log(userData);
  // Siit saab jätkata andmete töötlemist või saatmist serverisse
});
```

## Kokkuvõte

HTML vormid on võimsad tööriistad andmete kogumiseks veebis. JavaScripti kasutamine vormi andmete lugemiseks ja töötlemiseks suurendab veebirakenduste interaktiivsust ja funktsionaalsust. Õppides tundma erinevaid vormielemente ja nende käsitlemist, saate luua kasutajasõbralikumaid ja turvalisemaid veebirakendusi.

## Allikad

- [MDN Web Docs - HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
