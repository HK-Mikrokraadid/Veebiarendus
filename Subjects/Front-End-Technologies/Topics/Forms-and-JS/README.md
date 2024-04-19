
# HTML Vormide käsitlemine JavaScriptiga

Selles õppematerjalis käsitleme, kuidas kasutada JavaScripti ja Axios teeki HTML vormide andmete lugemiseks, töötlemiseks ja serverisse saatmiseks. Tutvustame erinevaid vormielemente, sealhulgas tekstivälju, valikuid, märkeruute ja raadionuppe.

## Õpiväljundid

Pärast selle teema läbimist oskad:

- luua erinevaid vormielemente HTML-is;
- lugeda ja töödelda vormide andmeid JavaScriptiga;
- Saata vormi andmeid serverisse Axios teeki kasutades.

## Vormi Elementide Loomine

HTML vorm koosneb erinevatest elementidest, mis võimaldavad kasutajatel sisestada andmeid. Siin on põhilised elemendid, mida vormis kasutatakse:

### Tekstiväli

```html
<label for="username">Kasutajanimi:</label>
<input type="text" id="username" name="username" required>
```

### E-post

```html
<label for="email">E-mail:</label>
<input type="email" id="email" name="email" required>
```

### Valikmenüü (Select ja Option)

```html
<label for="country">Riik:</label>
<select id="country" name="country">
  <option value="usa">USA</option>
  <option value="canada">Kanada</option>
  <option value="uk">Suurbritannia</option>
</select>
```

### Märkeruut (Checkbox)

```html
<label>
  <input type="checkbox" name="subscribe" checked> Telli uudiskiri
</label>
```

### Raadionupp

```html
<label>
  <input type="radio" name="gender" value="male" checked> Mees
</label>
<label>
  <input type="radio" name="gender" value="female"> Naine
</label>
```

## JavaScriptiga andmete lugemine

Vormi andmeid saab lugeda ja töödelda JavaScripti abil. Järgnevalt on toodud, kuidas kuulata vormi esitamise sündmust ja lugeda erinevat tüüpi vormielementide andmeid.

```javascript
document.getElementById('userInfoForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Peatab vormi tavapärase esitamise

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const country = document.getElementById('country').value;
  const subscribe = document.querySelector('input[name="subscribe"]').checked;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const userData = {
    username,
    email,
    country,
    subscribe,
    gender
  };

  console.log(userData);
  // Siit saab jätkata andmete saatmist serverisse
});
```

## Andmete saatmine serverisse kasutades Axios-st

Axios on JavaScripti teek, mis võimaldab teha HTTP-päringuid. Selle abil saame vormi andmeid lihtsalt serverisse saata.

### Axios-e Seadistamine

Enne Axiosi kasutamist tuleb see lisada:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### Andmete Saatmine

```javascript
axios.post('https://example.com/api/users', userData)
  .then(response => console.log('Serveri vastus:', response.data))
  .catch(error => console.error('Viga:', error));
```

## Kokkuvõte

HTML vormid on võimsad tööriistad andmete kogumiseks veebis. JavaScripti ja Axios-e kasutamine vormi andmete töötlemiseks ja saatmiseks suurendab veebirakenduste interaktiivsust ja funktsionaalsust. Õppides tundma erinevaid vormielemente ja nende käsitlemist, saate luua kasutajasõbralikumaid ja turvalisemaid veebirakendusi.

## Allikad

- [MDN Web Docs - HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [Axios - GitHub](https://github.com/axios/axios)
