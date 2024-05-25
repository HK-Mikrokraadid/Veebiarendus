# Axios: JavaScript HTTP-klient

Selles õppematerjalis tutvustame Axiose teeki, mis on populaarne JavaScripti HTTP-klient asünkroonsete päringute tegemiseks veebiserveritesse. Axios pakub lihtsat API-d erinevate HTTP-päringute sooritamiseks, mis hõlbustab andmete saatmist ja vastuvõtmist.

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Selgitada, mis on Axios ja miks seda kasutada;
- Seadistada Axios oma projektides;
- Kasutada Axiose teeki HTTP-päringute tegemiseks.

## Mis on Axios?

Axios on lubaduspõhine HTTP-klient JavaScriptile, mida kasutatakse andmete saatmiseks ja vastuvõtmiseks veebiserverist. See toetab nii brauseri kui ka Node.js keskkondi, muutes selle mitmekülgseks valikuks erinevates arendusstsenaariumites.

## Miks Kasutada Axiosit?

Axios pakub mitmeid eeliseid:

- **Lubaduspõhine API**: See tähendab, et Axios kasutab JavaScripti Promises, mis võimaldab käsitleda asünkroonseid operatsioone lihtsamalt ja puhtamalt.
- **Toetus tühistamisele**: Axios võimaldab tühistada HTTP-päringuid, mis on kasulik pikkade või soovimatute päringute puhul.
- **Taotluste ja vastuste vahelejätmine**: Axios võimaldab muuta taotlusi enne saatmist ja vastuseid enne rakendusse jõudmist.
- **Automaatne andmete muundamine**: Axios muundab automaatselt taotluste JSON andmed ja vastuse JSON andmed.

## Axiosi ja Async/Await'i Seadistamine

Enne Axiosi kasutamist veenduge, et see on lisatud teie projektile:

### CDN-i Kaudu (Brauseris)

HTML failides:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### NPM või Yarn Abil

Node.js projektides või kui kasutate moodulihaldurit:

```bash
npm install axios
```

Ja seejärel importige see oma JavaScripti faili:

```javascript
const axios = require('axios');
```

## Näited Axiosi Kasutamisest Async/Await'iga

### GET Päring

Näide, kuidas teha GET-päring ja käsitleda vastust async/await abil:

```javascript
async function fetchUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
  } catch (error) {
    console.error('Viga päringus:', error);
  }
}

fetchUsers();
```

### POST Päring

Näide, kuidas saata andmeid serverisse POST-päringuga, kasutades async/await:

```javascript
async function createUser(userData) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
    console.log('Kasutaja loodud:', response.data);
  } catch (error) {
    console.error('Viga kasutaja loomisel:', error);
  }
}

const userData = {
  name: 'John Doe',
  email: 'john@example.com'
};

createUser(userData);
```

### Päiste saatmine Axiosega

Sageli tahame saata API-dele koos päringutega kaasa ka päised. Näiteks on see vajalik autentimistokeni saatmiseks, kui API eeldab autentimist. Siin on näide, kuidas saata päised Axiose abil:

```javascript
async function fetchUser(userId) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      headers: {
        Authorization: 'Bearer my-auth-token'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Viga päringus:', error);
  }
};

fetchUser(1);
```

## Kokkuvõte

Axios koos async/await'iga pakub puhtat ja lihtsasti hallatavat viisi HTTP-päringute tegemiseks. See kombinatsioon parandab koodi loetavust ja vähendab vigade esinemist asünkroonsetes operatsioonides. Kasutades neid tööriistu koos, saate optimeerida andmevahetust veebirakendustes.

## Allikad

- Axios GitHub leht: [Axios GitHub](https://github.com/axios/axios)
- MDN Web Docs, async ja await: [Asynchronous Programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
