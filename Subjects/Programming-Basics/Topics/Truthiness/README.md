# Tõepärasus Javascriptis

![Tõepärasus](Truthiness.webp)

- [Tõepärasus Javascriptis](#tõepärasus-javascriptis)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on tõepärasus Javascriptis?](#mis-on-tõepärasus-javascriptis)
  - [Tõepärasuse teisendamine](#tõepärasuse-teisendamine)
  - [Loogiliste avaldiste tabel](#loogiliste-avaldiste-tabel)

## Õpiväljundid

Pärast selle teema läbimist suudate:

- määratleda, mis on tõepärasus Javascriptis;
- selgitada, milliseid väärtuseid teisendatakse Javascriptis tõeseks või vääraks;
- kasutada loogiliste avaldiste tabelit, et kontrollida, kas avaldis on tõene või väär.

## Mis on tõepärasus Javascriptis?

Kui Javascriptis räägitakse tõepärasusest, siis mõeldakse, kas avaldis on tõene (*true*) või väär (*false*). Tõepärasust kasutame, kui me tahame kontrollida, kas avaldis on tõene või väär, et teha mingeid otsuseid. Tõepärasuse kontrollimiseks kasutatakse võrdlusoperaatoreid, mille tulemuseks on `true` või `false`. Näiteks:

```javascript
console.log(5 > 3); // true
console.log(5 < 3); // false
```

Mis juhtub aga siis, kui me tingimuslauses kasutame võrdlusoperaatori ja avaldise asemel muutujat või väärtust, mis ei ole `boolean` tüüpi? Näiteks:
  
```javascript
let number = 5;

if (number) {
  console.log('Number on tõene');
} else {
  console.log('Number on väär');
}
```

Kasutades `if` tingimuslauset, kontrollime, kas muutuja `number` on tõene või väär. Kui me jooksutame eelnevat koodi, siis me näeme, et väljund on `Number on tõene`. Kuid miks? Selleks, et mõista, miks see nii on, peame mõistma, kuidas Javascript teisendab muutujaid tõepäraseks või vääraks.

## Tõepärasuse teisendamine

Javascriptis on iga väärtus tõepäraseks või vääraks teisendatav. Kui me kasutame `if` tingimuslauset, siis Javascript teisendab muutuja tõepäraseks või vääraks, et kontrollida, kas koodiplokk täidetakse või mitte.

Javascriptis teisendataks üldiselt kõik väärtused tõeseks, välja arvatud järgmised väärtused:

Allpool on informatsioon esitatud eestikeelsena markdown tabeli formaadis:

| Väärtus | Tüüp | Kirjeldus |
|---|---|---|
| null          | Null      | Väärtuse puudumine (tahtlik). |
| undefined     | Undefined | Väärtuse puudumine (näiteks defineeritud, kuid omistamata väärtusega muutuja) |
| false         | Boolean   | Märksõna false. |
| NaN           | Number    | NaN — mitte number. |
| 0             | Number    | Number null, kaasa arvatud 0.0, 0x0 jne. |
| -0            | Number    | Number negatiivne null, kaasa arvatud -0.0, -0x0 jne. |
| 0n            | BigInt    | BigInt null, kaasa arvatud 0x0n jne. Märkus: BigInt negatiivset nulli ei ole — 0n negatsioon on 0n. |
| ""            | String    | Tühi stringi väärtus, kaasa arvatud '' ja ``. |
| document.all  | Object    | JavaScriptis ainus tõeväärne objekt on sisseehitatud document.all (veebilehitsejas) |

Ülejäänud väärtused teisendatakse tõeseks. Näiteks:

```javascript
console.log(5); // true
console.log('Hello'); // true
console.log('0'); // true
console.log([]); // true
console.log({}); // true
console.log(-42); // true
```

Selline käitumine võib olla väga kasulik, kui me tahame kontrollida, kas muutuja on defineeritud ja kas sellel on väärtus. Näiteks:

```javascript
if (username && password) {
  console.log('Kasutajanimi ja parool on defineeritud');
} else {
  console.log('Kasutajanimi ja/või parool on defineerimata');
}
```

Kui me jooksutame eelnevat koodi, siis me näeme, et kui muutujad `username` ja `password` on defineeritud, siis väljund on `Kasutajanimi ja parool on defineeritud`, kui üks või mõlemad muutujad on defineerimata, siis väljund on `Kasutajanimi ja/või parool on defineerimata`.

## Loogiliste avaldiste tabel

Nagu me juba teame, siis me saame kasutada loogilisi operaatoreid, et teha otsusid mitme avaldise või väärtuse põhjal. Järgnevalt on toodud loogiliste avaldiste tõeväärtuste tabel, kus `A` ja `B` on tõeväärtused, `&&` on loogiline JA, `||` on loogiline VÕI ja `!` on loogiline MITTE.

| `A` | `B` | `A && B` | `A \|\| B` | `!A` |
|---|---|---|---|---|
| false | false | false | false | true |
| false | true  | false | true  | true |
| true  | false | false | true  | false |
| true  | true  | true  | true  | false |

Ehk siis näiteks, kui meil on avaldis `A && B`, siis see avaldis on tõene, kui mõlemad `A` ja `B` on tõesed, vastasel juhul on avaldis väär. Kui meil on avaldis `A || B`, siis see avaldis on tõene, kui vähemalt üks `A` või `B` on tõene, vastasel juhul on avaldis väär. Kui meil on avaldis `!A`, siis see avaldis on tõene, kui `A` on väär. Ja kui `A` on väär, siis avaldise `!A` tulemus on tõene.
