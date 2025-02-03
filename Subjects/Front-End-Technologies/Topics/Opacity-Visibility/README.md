# Objekti Läbipaistvus ja Nähtavus CSS-is

Selles õppematerjalis uurime CSS-i omadusi, mis kontrollivad HTML-elementide läbipaistvust ja nähtavust. Need omadused on olulised veebidisainis, kuna need võimaldavad arendajatel luua dünaamilisemaid ja visuaalselt huvitavamaid kasutajaliideseid.

![Css Visibility](CSS-Visibility.webp)

Pildi allikas: Dall-E by OpenAI

- [Objekti Läbipaistvus ja Nähtavus CSS-is](#objekti-läbipaistvus-ja-nähtavus-css-is)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Objekti Läbipaistvus ja Nähtavus?](#mis-on-objekti-läbipaistvus-ja-nähtavus)
    - [Läbipaistvus (`opacity`)](#läbipaistvus-opacity)
      - [Näide](#näide)
    - [Nähtavus (`visibility`)](#nähtavus-visibility)
      - [Näide](#näide-1)
  - [Läbipaistvus vs. Nähtavus](#läbipaistvus-vs-nähtavus)
  - [Praktiline Kasutus](#praktiline-kasutus)
    - [Interaktiivsed Menüüd](#interaktiivsed-menüüd)
    - [Hoiatusteatised](#hoiatusteatised)
  - [Järeldus](#järeldus)

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Selgitada, mis on CSS-i `opacity` ja `visibility` omadused;
- Rakendada neid omadusi, et kontrollida elementide läbipaistvust ja nähtavust;
- Kasutada neid omadusi kasutajakogemuse parandamiseks.

## Mis on Objekti Läbipaistvus ja Nähtavus?

Objekti läbipaistvus ja nähtavus viitavad kahele erinevale viisile, kuidas element võib olla kas osaliselt nähtav, täielikult nähtamatu või nähtav.

### Läbipaistvus (`opacity`)

CSS-i `opacity` omadus määrab elemendi läbipaistvuse taseme. Väärtus `1` tähendab, et element on täielikult läbipaistmatu, samas kui `0` tähendab, et element on täielikult läbipaistev (nähtamatu). Väärtused vahemikus `0` kuni `1` tekitavad erinevaid läbipaistvuse tasemeid.

#### Näide

```css
.transparent-box {
  background-color: red;
  opacity: 0.5; /* 50% läbipaistvus */
}
```

### Nähtavus (`visibility`)

Erinevalt `opacity`-st, mis teeb elemendi läbipaistvaks, muudab `visibility` omadus elemendi nähtavaks või nähtamatuks ilma ruumi vabastamiseta. `visibility: hidden;` peidab elemendi, kuid jätab selle ruumi paigale, samas kui `visibility: visible;` teeb elemendi nähtavaks.

#### Näide

```css
.hidden-box {
  visibility: hidden; /* Element on peidetud, kuid võtab endiselt ruumi */
}
```

## Läbipaistvus vs. Nähtavus

Kuigi mõlemad omadused võivad muuta elemendi nähtamatuks, on nende kasutamisel olulised erinevused:

- **Ruuminõuded**: `opacity: 0;` jätab elemendi ruumi paigale, samas kui `visibility: hidden;` samuti ei vabasta ruumi, kuid erinevalt `opacity`-st ei reageeri element kasutaja interaktsioonidele.
- **Animatsioonid**: `opacity` saab sujuvalt animeerida, muutes elemendi järk-järgult läbipaistvaks või läbipaistmatuks. `visibility` ei toeta sujuvat üleminekut, kuna see lülitab elemendi staatuse kohe.

## Praktiline Kasutus

### Interaktiivsed Menüüd

Läbipaistvust saab kasutada interaktiivsete menüüde loomiseks, mis ilmuvad järk-järgult, kui kasutaja neid vajab.

```css
.menu {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.menu:hover {
  opacity: 1;
}
```

### Hoiatusteatised

`visibility` omadust võib kasutada hoiatusteatises, mis ilmub tingimustel, säilitades samas lehe paigutuse.

```css
.alert {
  visibility: hidden;
}

.alert.active {
  visibility: visible;
}
```

## Järeldus

CSS-i `opacity` ja `visibility` omadused pakuvad paindlikke võimalusi elementide läbipaistvuse ja nähtavuse kontrollimiseks. Nende mõistmine ja oskuslik kasutamine võimaldavad luua paremaid kasutajakogemusi, kombineerides esteetilist ilu funktsionaalsusega. Kasutage neid omadusi loovalt, et oma veebilehtedele lisada visuaalset sügavust ja interaktiivsust.
