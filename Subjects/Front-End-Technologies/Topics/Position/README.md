# CSS Position Property

Selles õppematerjalis käsitleme CSS-i `position` omadust, mis on oluline tööriist elementide paigutamiseks veebilehel. Mõistmine, kuidas erinevad `position` väärtused toimivad, aitab arendajatel luua dünaamilisi ja kohandatud paigutusi.

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Selgitada, mis on CSS-i `position` omadus;
- kirjeldada erinevaid `position` väärtusi ja nende mõju;
- rakendada `position` omadust, et kontrollida elementide asukohta.

## Mis on CSS Position Property?

CSS-i `position` omadus võimaldab arendajatel määrata elemendi paigutuse meetodi. Selle omaduse abil saate määrata, kuidas element paigutatakse suhtes oma tavapärase vooga või teiste elementidega.

## Peamised Position Väärtused

- **`static`**: Vaikeseade, mis jätab elemendi tavapärasesse voogu. `top`, `right`, `bottom`, ja `left` omadused ei mõjuta `static` elemendi asukohta.
- **`relative`**: Paigutab elemendi suhteliselt tema tavapärasest asukohast. See võimaldab elemendil liikuda ilma teisi elemente mõjutamata.
- **`absolute`**: Eemaldab elemendi dokumentide voost ja paigutab selle suhtes lähima positsioneeritud vanema elemendi.
- **`fixed`**: Paigutab elemendi suhtes vaateporti ja see jääb paigale isegi kerimisel.
- **`sticky`**: Kombinatsioon `relative` ja `fixed` paigutusest. Element on `relative` kuni teatud punktini, kus see muutub `fixed`.

## Näited ja Kasutusalad

### Static

Enamik HTML elemente kasutab vaikimisi `static` paigutust, mis tähendab, et need asuvad seal, kuhu lehe normaalne voog neid paigutab.

```css
div {
  position: static;
}
```

### Relative

`Relative` paigutus võimaldab nihutada elementi oma normaalsest asukohast, ilma et see mõjutaks teiste elementide asukohta.

```css
div {
  position: relative;
  top: 10px;
  left: 20px;
}
```

### Absolute

`Absolute` paigutusega element eemaldatakse normaalsest voost ja paigutatakse suhtes oma lähima positsioneeritud vanema suhtes.

```css
.container {
  position: relative;
}

.child {
  position: absolute;
  top: 50px;
  right: 0;
}
```

### Fixed

`Fixed` paigutus fikseerib elemendi kindlale positsioonile vaateaknas, olenemata lehe kerimisest.

```css
div {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

### Sticky

`Sticky` paigutus võimaldab elemendil käituda nagu `relative` paigutuses kuni kasutaja kerib elemendi teatud punkti, millest alates see muutub `fixed`.

```css
header {
  position: sticky;
  top: 0;
}
```

## Kokkuvõte

`Position` omaduse mõistmine ja oskus seda efektiivselt kasutada on oluline iga veebiarendaja jaoks, kes soovib luua intuitiivseid ja visuaalselt kaasahaaravaid veebilehti. Erinevad `position` väärtused pakuvad paindlikkust elementide paigutamisel, mis võimaldab luua kõike alates fikseeritud navigatsioonimenüüdest kuni interaktiivsete, dünaamiliselt paigutatud kasutajaliideste osadeni.
