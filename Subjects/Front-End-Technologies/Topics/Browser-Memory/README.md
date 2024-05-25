# Veebilehitseja mälutehnoloogiad: Ülevaade ja kasutamine

## Sissejuhatus

Kui siiani oleme rääkinud, et veebilehitsejas töötaval Javascriptil puudub ligipääs arvuti kõvakettale, siis see ei tähenda siiski, et veebirakendused ei saaks andmeid salvestada.

Veebilehitsejate mälutehnoloogiad võimaldavad veebirakendustel salvestada andmeid kasutaja seadmesse. Need tehnoloogiad on olulised, et tagada andmete kättesaadavus ja rakenduse jõudlus isegi siis, kui internetiühendus puudub või on ebastabiilne. Peamised veebilehitseja mälumeetodid on **Local Storage**, **Session Storage**, **Cookies** ja **IndexedDB**. Selles peatükis käsitleme nende tehnoloogiate põhialuseid, eeliseid ja kasutusjuhte.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- selgitama erinevaid veebilehitseja mälumeetodeid ja nende kasutusalasid;
- rakendama Local Storage, Session Storage, Cookies ja IndexedDB tehnoloogiaid oma veebirakendustes;
- valima sobiva mälumeetodi vastavalt konkreetsetele vajadustele ja kasutusjuhtudele.

## Veebilehitseja mälumeetodid

### Local Storage

**Local Storage** on püsiv mälu, mis võimaldab veebirakendustel salvestada võtme-väärtuse paare. Andmed jäävad alles ka pärast lehe uuesti laadimist või veebilehitseja sulgemist. Local Storage on kasulik kasutaja eelistuste, seansside oleku ja muude püsivate andmete salvestamiseks.

#### Local Storage omadused

- Püsiv mälu
- Salvestusruumi piirmäär on tavaliselt umbes 5-10 MB
- Andmed on seotud päritoluga (origin) ja kättesaadavad ainult sama päritolu skriptidele

#### Local Storage kasutamine

```javascript
// Andmete salvestamine
localStorage.setItem('key', 'value');

// Andmete lugemine
const value = localStorage.getItem('key');

// Andmete eemaldamine
localStorage.removeItem('key');

// Kõigi andmete puhastamine
localStorage.clear();
```

### Session Storage

**Session Storage** on ajutine mälu, mis säilitab andmeid ainult sirvimisseansi jooksul. Andmed kustutatakse pärast lehe uuesti laadimist või veebilehitseja sulgemist.

#### Session Storage omadused

- Ajutine mälu
- Salvestusruumi piirmäär on tavaliselt umbes 5-10 MB
- Andmed on seotud päritoluga (origin) ja kättesaadavad ainult sama päritolu skriptidele

#### Session Storage kasutamine

```javascript
// Andmete salvestamine
sessionStorage.setItem('key', 'value');

// Andmete lugemine
const value = sessionStorage.getItem('key');

// Andmete eemaldamine
sessionStorage.removeItem('key');

// Kõigi andmete puhastamine
sessionStorage.clear();
```

### Küpsised (*Cookies*)

**Cookies** on väikesed andmeplokid, mida veebilehitseja salvestab ja saadab serverile iga kord, kui tehakse sama päritoluga päring. Küpsiseid kasutatakse sageli kasutajate autentimiseks ja seansside haldamiseks.

#### Cookies omadused

- Salvestusruumi piirmäär on tavaliselt umbes 4 KB
- Andmed saadetakse serverile iga HTTP päringuga
- Võimalik määrata aegumiskuupäev, domeen ja teek

#### Cookies kasutamine

```javascript
// Küpsise seadmine
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2021 12:00:00 UTC; path=/";

// Küpsise lugemine
const cookies = document.cookie;
console.log(cookies);

// Küpsise eemaldamine (seades aegumiskuupäeva minevikku)
document.cookie = "username=JohnDoe; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

### IndexedDB

**IndexedDB** on madala taseme API, mis võimaldab salvestada märkimisväärseid andmekoguseid (sealhulgas struktureeritud objekte) kasutaja seadmesse. See on mõeldud keerukamate andmebaasioperatsioonide jaoks ja toetab indekseid ja tehinguid.

#### IndexedDB omadused

- Püsiv mälu
- Sobib suurte andmekoguste jaoks
- Toetab indekseid ja tehinguid
- Asünkroonne API

#### Kasutamine

```javascript
// Andmebaasi loomine või avamine
const request = indexedDB.open('myDatabase', 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id' });
  objectStore.createIndex('name', 'name', { unique: false });
};

request.onsuccess = (event) => {
  const db = event.target.result;

  // Andmete lisamine
  const transaction = db.transaction(['myObjectStore'], 'readwrite');
  const objectStore = transaction.objectStore('myObjectStore');
  const requestAdd = objectStore.add({ id: 1, name: 'John Doe' });

  requestAdd.onsuccess = () => {
    console.log('Data added to IndexedDB');
  };

  // Andmete lugemine
  const requestGet = objectStore.get(1);
  requestGet.onsuccess = (event) => {
    console.log('Data retrieved:', event.target.result);
  };
};
```

## Valikukriteeriumid

### Local Storage vs Session Storage

- **Local Storage:** Kasutage, kui andmed peavad olema püsivad ja kättesaadavad ka pärast lehe uuesti laadimist või veebilehitseja sulgemist.
- **Session Storage:** Kasutage, kui andmed peavad olema ajutised ja kättesaadavad ainult praeguse sirvimisseansi jooksul.

### Cookies

- Kasutage, kui on vaja saata andmeid serverile iga HTTP päringuga (näiteks kasutajate autentimiseks ja seansside haldamiseks).

### IndexedDB

- Kasutage, kui on vaja salvestada suuri andmekoguseid või kui andmed vajavad keerukamat indekseerimist ja päringuid.

## Allikad

- [MDN Web Docs: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN Web Docs: Document.cookie](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [MDN Web Docs: IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [W3C: Web Storage](https://www.w3.org/TR/webstorage/)

## Kontrollküsimused või harjutus

- Mis on Local Storage ja kuidas see erineb Session Storage-ist?
- Kirjeldage, kuidas salvestada ja lugeda andmeid Cookies-ide abil.
- Millal on sobiv kasutada IndexedDB-d ja millised on selle eelised võrreldes Local Storage-iga?
- Looge näidisrakendus, mis salvestab kasutaja eelistused Local Storage-isse ja laadib need lehe uuesti laadimisel.

## Harjutus

- Looge veebirakendus, mis võimaldab kasutajal salvestada oma lemmikvärv Local Storage-isse. Rakendus peaks värvi muutma, kui kasutaja valib uue värvi, ja laadima salvestatud värvi lehe uuesti laadimisel.
- Looge autentimissüsteem, mis kasutab Cookies-e, et salvestada ja lugeda kasutaja sisselogimisseanssi. Küpsis peaks sisaldama kasutaja ID-d ja aegumiskuupäeva.
- Kasutage IndexedDB-d, et luua lihtne kontaktide haldamise rakendus. Rakendus peaks võimaldama kontakte lisada, vaadata ja kustutada, kasutades IndexedDB-d andmete salvestamiseks.
