# CSS Display Property

Selles õppematerjalis käsitleme CSS-i `display` omadust, mis on üks olulisemaid CSS-i omadusi, mida kasutatakse elemendi kuvamise viisi määramiseks veebilehel.

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Selgitada, mis on CSS-i `display` omadus;
- Kirjeldada erinevaid `display` väärtusi ja nende mõju;
- Rakendada `display` omadust, et hallata lehe paigutust.

## Mis on CSS Display Property?

CSS-i `display` omadus määrab, kuidas element dokumentide voos esitatakse. See omadus on väga võimas, kuna see võimaldab kontrollida elementide paigutust ilma HTML-struktuuri muutmata.

## Peamised Display Väärtused

`display` omadusel on mitmeid väärtusi, kuid siin on mõned enimkasutatavad:

- **`block`**: Muudab elemendi plokielemendiks, mis tähendab, et ta hõivab kogu vanema elemendi laiuse ja algab uuest reast.
- **`inline`**: Muudab elemendi reasisesteks, mis tähendab, et elemendid asetsevad üksteise kõrval samal real, hõivamata rohkem ruumi kui nende sisu.
- **`inline-block`**: Kombineerib `inline` ja `block` omaduste käitumised. Elemendid on reas, kuid saate määrata laiuse ja kõrguse nagu plokielementidel.
- **`none`**: Peidab elemendi dokumentide voost, muutes selle nähtamatuks ja mitte-interaktiivseks.
- **`flex`**: Muudab elemendi paindlikuks konteineriks, mis võimaldab lastelementide paindlikku paigutust.
- **`grid`**: Muudab elemendi ruudustikukonteineriks, mis võimaldab keerukamate paigutuste loomist ruudustiku abil.

## Näited ja Kasutusalad

### Block

Block-elementide kasutamine on kasulik, kui soovid luua selgelt eristatavaid osasid oma veebilehel, nagu päised, jalused ja sektsioonid.

```css
div {
  display: block;
}
```

### Inline

Inline-elemente kasutatakse tavaliselt teksti sees, nagu rõhutatud sõnad või lingid, mis ei tohiks murda teksti voogu.

```css
span {
  display: inline;
}
```

### Inline-Block

Inline-block on ideaalne väikeste komponentide jaoks, mida soovid reas näidata, kuid millel on vajalik määrata kindlad mõõtmed.

```css
button {
  display: inline-block;
  width: 100px;
  height: 50px;
}
```

### None

Kasuta `display: none`, kui soovid elementi peita, näiteks dünaamiliselt vormi välju, mis ilmuvad teatud tingimustel.

```css
.hidden {
  display: none;
}
```

### Flex

Flexbox on võimas tööriist paigutuste loomiseks, mis nõuavad elementide paigutamist ühes dimensioonis (kas rida või veerg).

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

### Grid

Ruudustikku kasutatakse keerukamate paigutuste jaoks, kus on vaja hallata elementide paigutust nii ridade kui veergude kaupa.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

## Kokkuvõtteks

CSS-i `display` omadus on üks olulisemaid omadusi veebilehe paigutuse mõistmisel ja hallatamisel. Selle mitmekülgsus võimaldab veebiarendajatel luua puhtaid, reageerivaid ja ligipääsetavaid veebilehti. Oluline on mõista, millal ja kuidas erinevaid `display` väärtusi kasutada, et maksimeerida oma veebilehe visuaalset ja funktsionaalset potentsiaali.
