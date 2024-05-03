# DOM-i manipuleerimine JavaScriptiga

Selles õppematerjalis uurime, kuidas JavaScripti abil veebilehe Dokumendi Objekti Mudelit (DOM) manipuleerida. See oskus on hädavajalik igale veebiarendajale, kes soovib luua dünaamilisi ja interaktiivseid veebirakendusi.

![DOM-i Manipuleerimine](DOM-Manipulation.webp)

Pildi allikas: Dall-E by OpenAI

- [DOM-i manipuleerimine JavaScriptiga](#dom-i-manipuleerimine-javascriptiga)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on DOM manipuleerimine?](#mis-on-dom-manipuleerimine)
  - [Elementide Valimine](#elementide-valimine)
  - [Elementide Muutmine](#elementide-muutmine)
  - [Elementide Lisamine ja Eemaldamine](#elementide-lisamine-ja-eemaldamine)
  - [Sündmusekuulajate Rakendamine](#sündmusekuulajate-rakendamine)
  - [Kokkuvõte](#kokkuvõte)

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Mõista, kuidas JavaScript DOM-iga suhtleb;
- valida ja muuta DOM-i elemente;
- lisada ja eemaldada elemente dünaamiliselt;
- rakendada sündmusekuulajaid elementidele.

## Mis on DOM manipuleerimine?

DOM manipuleerimine viitab protsessile, kus kasutatakse JavaScripti, et programmiliselt muuta dokumenti ehk veebilehte. See hõlmab elementide valimist, atribuutide muutmist, stiili kohandamist, sisu lisamist või eemaldamist ning sündmuste käsitlemist.

## Elementide Valimine

Elementide valimine on esimene samm DOM manipuleerimisel. JavaScript pakub mitmeid meetodeid elementide valimiseks:

- **getElementById**: Valib elemendi ID järgi.

```javascript
const header = document.getElementById('header');
```

- **getElementsByClassName**: Valib kõik elemendid, mis vastavad antud klassinimele.
  
```javascript
const items = document.getElementsByClassName('menu-item');
```

- **getElementsByTagName**: Valib kõik elemendid, mis vastavad antud sildi nimele.

```javascript
const divs = document.getElementsByTagName('div');
```

- **querySelector**: Valib esimese elemendi, mis vastab CSS-selektorile.
  
```javascript
const firstButton = document.querySelector('button');
```

- **querySelectorAll**: Valib kõik elemendid, mis vastavad CSS-selektorile.

```javascript
const allButtons = document.querySelectorAll('button');
```

## Elementide Muutmine

Pärast elementide valimist saate nende sisu, atribuute ja stiili muuta.

- **textContent ja innerHTML**: Muuda elemendi teksti või HTML-i.

```javascript
header.textContent = 'Tere tulemast!';
header.innerHTML = '<span>Tere tulemast!</span>';
```

- **Stiilide muutmine**: Muuda elemendi CSS-omadusi.

```javascript
header.style.color = 'blue';
header.style.fontSize = '20px';
```

- **Atribuutide muutmine**: Muuda või lisa uusi atribuute.

```javascript
const image = document.querySelector('img');
image.setAttribute('alt', 'Ilus vaade');
```

## Elementide Lisamine ja Eemaldamine

JavaScript võimaldab elemente dünaamiliselt lisada või eemaldada.

- **Elemendi lisamine**: Looge uus element ja lisage see dokumenti.

```javascript
const newParagraph = document.createElement('p');
newParagraph.textContent = 'See on uus lõik.';
document.body.appendChild(newParagraph);
```

- **Elemendi eemaldamine**: Eemaldage element dokumentist.

```javascript
const oldParagraph = document.querySelector('p.old');
document.body.removeChild(oldParagraph);
```

## Sündmusekuulajate Rakendamine

Sündmusekuulajad võimaldavad elementidel reageerida kasutaja tegevustele, nagu klõpsud või klahvivajutused.

- **Sündmuse kuulaja lisamine**:

```javascript
button.addEventListener('click', function() {
  alert('Nuppu vajutati!');
});
```

## Kokkuvõte

DOM-i manipuleerimine JavaScriptiga on võimas tööriist, mis võimaldab arendajatel luua interaktiivseid ja kasutajasõbralikke veebirakendusi. Alates elementide valimisest ja muutmisest kuni dünaamilise sisu lisamise ja sündmuste käsitlemiseni on JavaScripti abil võimalik veebi veelgi dünaamilisemaks muuta.