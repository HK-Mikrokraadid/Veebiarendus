# Semantiline HTML

Selles teemas saad teada, mis on semantiline HTML ja miks on oluline seda veebilehtede loomisel kasutada.

![Semantiline HTML](Semantic-HTML.webp)

Pildi allikas: Dall-E by OpenAI

- [Semantiline HTML](#semantiline-html)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on semantiline HTML?](#mis-on-semantiline-html)
  - [Miks kasutada semantilist HTML-i?](#miks-kasutada-semantilist-html-i)
  - [Kuidas kasutada semantilist HTML-i](#kuidas-kasutada-semantilist-html-i)
    - [`<header>`](#header)
    - [`<nav>`](#nav)
    - [`<article>`](#article)
    - [`<section>`](#section)
    - [`<footer>`](#footer)

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Selgitada, mis on semantiline HTML;
- kirjeldada, miks on oluline kasutada semantilist HTML-i;
- näidata, kuidas kasutada semantilist HTML-i veebilehtede loomisel.

## Mis on semantiline HTML?

Semantiline HTML viitab HTML-märgistuse kasutamisele sisu semantika ehk tähenduse rõhutamiseks. Teisisõnu, see tähendab HTML-märgendite kasutamist, mis kirjeldavad nende eesmärki ja sisu tüüpi, mida nad sisaldavad, mitte ainult seda, kuidas nad lehel peaksid välja nägema. Näiteks `<article>`, `<footer>`, `<header>`, `<nav>` ja `<section>` on semantilised elemendid, mis kirjeldavad selgelt sisu rolli või tähendust, mida nad sisaldavad.

## Miks kasutada semantilist HTML-i?

- **Ligipääsetavus**: Ekraanilugejad ja muud abitehnoloogiad tuginevad semantilisele HTML-ile, et pakkuda paremat kogemust puuetega kasutajatele. Näiteks suudavad ekraanilugejad veebilehte efektiivsemalt navigeerida, kui sisu on korrektselt märgistatud semantiliste siltidega.
- **SEO eelised**: Otsingumootorid eelistavad veebisaite, millel on selge, kirjeldav, semantiline märgistus. See muudab nende jaoks lehe sisu mõistmise lihtsamaks, mis võib viia paremate otsingutulemusteni.
- **Hooldatavus ja loetavus**: Semantiline HTML muudab veebilehe struktuuri selgemaks, muutes arendajatele koodi mõistmise, hooldamise ja uuendamise lihtsamaks.
- **Ristseadme ühilduvus**: Korrektselt struktureeritud sisu, kasutades semantilist HTML-i, kuvatakse tõenäolisemalt järjepidevalt erinevatel seadmetel ja brauseritel.

## Kuidas kasutada semantilist HTML-i

Semantilise HTML-i kasutamine hõlmab kõige sobivamate HTML-märgendite valimist veebilehe sisu märgistamiseks. Siin on mõned näited:

### `<header>`

Kasutatakse sissejuhatava sisu või navigatsioonilinkide kogumi jaoks. See sisaldab tavaliselt saidi logo, peamist navigatsioonimenüüd või praeguse sektsiooni pealkirja.

```html
<header>
  <h1>Minu veebilehe pealkiri</h1>
  <nav>
    <!-- Navigatsioonilinkide sisu -->
  </nav>
</header>
```

### `<nav>`

Tähistab lehe osa, mis lingib teistele lehtedele või lehe osadele. See on peamiste navigatsiooniplokkide jaoks.

```html
<nav>
  <ul>
    <li><a href="#home">Avaleht</a></li>
    <li><a href="#services">Teenused</a></li>
    <li><a href="#contact">Kontakt</a></li>
  </ul>
</nav>
```

### `<article>`

Määratleb iseseisva, iseseisvalt levitatava või taaskasutatava sisu.

```html
<article>
  <h2>Artikli pealkiri</h2>
  <p>Artikli sisu...</p>
</article>
```

### `<section>`

Esindab iseseisvat funktsionaalsuse sektsiooni või temaatilist sisugruppi.

```html
<section>
  <h2>Jagu pealkiri</h2>
  <p>Sisu...</p>
</section>
```

### `<footer>`

Esindab dokumendi või sektsiooni jalust, mis sisaldab tavaliselt autorluse teavet, seotud dokumente, autoriõiguse ja kontaktteavet.

```html
<footer>
  <p>© 2024 Minu Veebileht. Kõik õigused kaitstud.</p>
</footer>
```

Semantilise HTML-i kasutamisega struktureerid oma sisu mitte ainult mõtteka ja loogilisel viisil, vaid aitad kaasa ka oma veebisaidi ligipääsetavusele ja SEO-sõbralikkusele. See on parim praktika, mis suurendab sinu veebisisu üldist kvaliteeti ja tõhusust.
