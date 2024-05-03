# JavaScripti sündmused

Selles õppematerjalis uurime JavaScripti sündmuste mõistet, nende tähtsust ja kuidas neid veebiarenduses kasutada.

![JS Events](<JS Events.webp>)

Pildi allikas: Dall-E by OpenAI

- [JavaScripti sündmused](#javascripti-sündmused)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on JavaScripti sündmused?](#mis-on-javascripti-sündmused)
  - [Miks on JavaScripti sündmused olulised?](#miks-on-javascripti-sündmused-olulised)
  - [Kuidas kasutada JavaScripti sündmusi](#kuidas-kasutada-javascripti-sündmusi)
  - [JavaScripti sündmuste näited](#javascripti-sündmuste-näited)
    - [Klõpsusündmus](#klõpsusündmus)
    - [Klaviatuuri sündmus](#klaviatuuri-sündmus)
    - [Vormi esitamise sündmus](#vormi-esitamise-sündmus)
    - [Hiire sündmus](#hiire-sündmus)

## Õpiväljundid

Pärast selle materjali läbimist oskad:

- selgitada, mis on JavaScripti sündmused ja kuidas need töötavad;
- rakendada sündmusekuulajaid erinevatele HTML-elementidele;
- kasutada erinevaid sündmusetüüpe nagu klõpsud, klaviatuuri sündmused ja vormisündmused;
- käsitleda sündmusi, et luua interaktiivsemaid ja kasutajasõbralikumaid veebirakendusi.

## Mis on JavaScripti sündmused?

JavaScripti sündmused on tegevused või juhtumid, mis võivad toimuda veebilehel ja mida JavaScript võib kasutada interaktiivsete funktsioonide käivitamiseks. Need võivad olla kasutaja tegevused nagu klõpsamine, kerimine, klaviatuuri vajutamine või süsteemisündmused nagu veebilehe laadimine.

## Miks on JavaScripti sündmused olulised?

- **Interaktiivsus**: Sündmused võimaldavad kasutajatel suhelda veebilehega, muutes kasutajakogemuse rikkamaks ja interaktiivsemaks.
- **Dünaamiline sisu**: Võimaldavad arendajatel dünaamiliselt muuta veebilehe sisu vastusena kasutaja tegevustele.
- **Kontroll ja paindlikkus**: Annavad arendajatele võimaluse kontrollida elementide käitumist ja reageerida erinevatele kasutaja tegevustele.

## Kuidas kasutada JavaScripti sündmusi

JavaScripti sündmuste kasutamine hõlmab sündmusekuulajate määramist ja sündmuste käsitlejate kirjutamist. Siin on mõned näited:

- **Elementide valimine**: Valige esmalt HTML-element, millele soovite sündmusekuulaja lisada.

```javascript
const button = document.getElementById('myButton');
```

- **Sündmusekuulaja lisamine**: Määrake sündmusekuulaja, et reageerida kindlale sündmusele, nagu näiteks `click`.

```javascript
button.addEventListener('click', function() {
  alert('Nuppu vajutati!');
});
```

- **Sündmuste käsitlemine**: Defineerige funktsioon, mis käivitub, kui sündmus toimub.

```javascript
button.addEventListener('click', handleClick);

function handleClick() {
  alert('Nuppu vajutati!');
}
```

## JavaScripti sündmuste näited

### Klõpsusündmus

Reageerige kasutaja klõpsule nupul:

```javascript
const button = document.getElementById('clickButton');
button.addEventListener('click', () => {
  console.log('Nuppu vajutati!');
});
```

### Klaviatuuri sündmus

Reageerige, kui kasutaja vajutab klahvi:

```javascript
const inputField = document.getElementById('inputField');
inputField.addEventListener('keydown', (event) => {
  console.log(`Vajutatud klahv: ${event.key}`);
});
```

### Vormi esitamise sündmus

Käsitlege vormi esitamist:

```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();  // Takista vormi tavapärast esitamist
  console.log('Vorm esitati!');
});
```

### Hiire sündmus

Reageerige hiire liikumisele elemendi kohal:

```javascript
const box = document.getElementById('mouseBox');
box.addEventListener('mousemove', () => {
  console.log('Hiir liigub kasti kohal!');
});
```

Nende näidete kaudu saate luua dünaamilisemaid ja kasutajasõbralikumaid veebirakendusi. JavaScripti sündmused on võimsad tööriistad, mis aitavad arendajatel luua interaktiivseid ja kaasahaaravaid veebikogemusi.

Rohkem teavet JavaScripti sündmuste kohta ja nende erinevate tüüpide kohta leiate [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Events) lehelt.
