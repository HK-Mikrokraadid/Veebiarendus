# LocalStorage'i Kasutamine Veebirakendustes

LocalStorage on veebibrauseri poolt pakutav funktsioon, mis võimaldab veebirakendustel salvestada andmeid kasutaja seadmes. See õppematerjal tutvustab, kuidas LocalStorage't kasutada, selle kasulikkust ja mida selle kasutamisel tähele panna.

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Selgitada, mis on LocalStorage ja milleks seda kasutatakse;
- salvestada, lugeda ja kustutada andmeid LocalStorage'is;
- käsitleda võimalikke probleeme ja piiranguid LocalStorage'i kasutamisel.

## Mis on LocalStorage?

LocalStorage on veebilehepõhine ladustamisvõimalus, mis võimaldab saitidel salvestada andmeid kasutaja brauseris. Erinevalt küpsistest on LocalStorage'il suurem mahtupiirang ja see ei saada andmeid automaatselt serverile iga HTTP päringuga.

### Võtmefunktsioonid

- **Mahupiirang**: Enamik brausereid pakub iga domeeni kohta vähemalt 5MB mahupiirangut.
- **Püsivus**: Andmed püsivad brauseris ka pärast akna või brauseri sulgemist.
- **Võrguühenduseta kasutus**: Andmeid saab lugeda võrguühenduseta, mis on kasulik rakendustes, mis peavad töötama ka võrguühenduseta.

## Andmete Salvestamine LocalStorage'i

LocalStorage'iga suhtlemine toimub JavaScripti abil. Andmeid saab salvestada `setItem` meetodi abil, mis nõuab kahte argumenti: võtme ja väärtuse.

### Näide: Andmete Salvestamine

```javascript
localStorage.setItem('username', 'JohnDoe');
```

## Andmete Lugemine LocalStorage'ist

Andmeid saab lugeda `getItem` meetodi abil, kasutades võtmena sama stringi, mida kasutati andmete salvestamisel.

### Näide: Andmete Lugemine

```javascript
const username = localStorage.getItem('username');
console.log(username); // Väljastab: JohnDoe
```

## Andmete Kustutamine LocalStorage'ist

LocalStorage'ist andmete kustutamiseks on kaks võimalust: kustutada üks konkreetne võti või tühjendada kogu LocalStorage.

### Näide: Ühe Võtme Kustutamine

```javascript
localStorage.removeItem('username');
```

### Näide: Kogu LocalStorage'i Tühjendamine

```javascript
localStorage.clear();
```

## Tähelepanekud ja Piirangud

Kuigi LocalStorage on kasulik paljudes stsenaariumites, on oluline mõista selle piiranguid ja turvariske:

- **Turvalisus**: LocalStorage andmed on salvestatud tekstina ja neid ei krüpteerita, mis teeb nad haavatavaks ründajatele, eriti rist-skriptimise (XSS) rünnakute korral.
- **Piiratud funktsionaalsus**: Võrreldes serveripoolse ladustamisega, ei paku LocalStorage keerukamaid andmetöötlusvõimalusi ega indekseerimist.
- **Sünkroniseerimise puudumine**: Andmed ei sünkroniseerita erinevate seadmete vahel, kuna need salvestatakse kohapealselt ühes seadmes.

## Näide: Sisselogimine ja Kasutajaandmete Salvestamine

Järgmine peatükk käsitleb sisselogimisprotsessi, tokeni saamist serverist ja selle talletamist LocalStorage'is. See on tavaline muster veebirakendustes, mis nõuavad kasutaja autentimist.

### Sisselogimisvormi Loomine

Esmalt loome lihtsa HTML vormi, mis kogub kasutajalt kasutajanime ja parooli.

```html
<form id="loginForm">
  <label for="username">Kasutajanimi:</label>
  <input type="text" id="username" name="username" required>
  
  <label for="password">Parool:</label>
  <input type="password" id="password" name="password" required>
  
  <button type="submit">Logi sisse</button>
</form>
```

### Sisselogimisandmete saatmine JavaScripti ja Axiosega

Kasutades Axios teeki, saadame sisselogimisandmed POST-päringuna serverile. Me eeldame, et server vastab autentimis-tokeniga, mida saab kasutada järgnevates autoriseeritud päringutes.

```javascript
document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await axios.post('https://example.com/api/login', {
      username,
      password
    });
    
    // Kui autentimine õnnestub, saame tokeni
    const { token } = response.data;
    console.log('Saadud token:', token);
    
    // Salvestame tokeni LocalStorage'isse
    localStorage.setItem('authToken', token);
  } catch (error) {
    console.error('Autentimine ebaõnnestus:', error);
  }
});
```

## Tokeni Haldamine LocalStorage'is

Pärast tokeni saamist salvestame selle LocalStorage'isse. See võimaldab meil kasutada tokenit järgnevates päringutes, säilitades samal ajal kasutaja sessiooni staatuse ka veebilehe värskendamisel või uuesti külastamisel.

```javascript
localStorage.setItem('authToken', token);
```

Näiteks saate hiljem tokenit kasutada päringu autoriseerimiseks, lisades selle päringu päisesse:

```javascript
async function fetchUserData() {
  const authToken = localStorage.getItem('authToken');

  try {
    const response = await axios.get('https://example.com/api/userdata', {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    console.log('Kasutaja andmed:', response.data);
  } catch (error) {
    console.error('Viga andmete laadimisel:', error);
  }
}

fetchUserData();
```

### Turvalisuse Kaalutlused

Kuigi LocalStorage on mugav viis tokenite ja muude andmete hoidmiseks, on see haavatav rist-skriptimise (XSS) rünnakute suhtes. Veenduge, et teie veebirakendus desinfitseerib sisendi ja piirab skriptide täitmist kasutajapoolse sisendi põhjal.

## Kokkuvõte

LocalStorage pakub lihtsat ja tõhusat viisi andmete salvestamiseks brauseris, mis võimaldab parandada kasutajakogemust, eriti võrguühenduseta töötavate rakenduste ja veebilehtede puhul. Siiski on oluline olla teadlik selle piirangutest ja potentsiaalsetest turvar

iskidest, et tagada rakenduse turvalisus ja usaldusväärsus.

## Allikad

- MDN Web Docs - [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- W3Schools - [HTML Web Storage API](https://www.w3schools.com/html/html5_webstorage.asp)
- Axios dokumentatsioon - [Axios on GitHub](https://github.com/axios/axios)
