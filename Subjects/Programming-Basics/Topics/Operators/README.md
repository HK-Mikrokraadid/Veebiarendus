# Operaatorid ja Avaldised

Selles peatükis õpime Javascripti operaatorite ja avaldiste kohta.

![Operaatorid](Operators.webp)

Pildi allikas: Dall-E by OpenAI

- [Operaatorid ja Avaldised](#operaatorid-ja-avaldised)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Operaator?](#mis-on-operaator)
  - [Mis on Avaldis?](#mis-on-avaldis)
  - [Operaatorite ja Avaldiste vaheline seos](#operaatorite-ja-avaldiste-vaheline-seos)
  - [Operaatorite Tüübid](#operaatorite-tüübid)
    - [Aritmeetilised Operaatorid](#aritmeetilised-operaatorid)
    - [Määramisoperaatorid](#määramisoperaatorid)
    - [Võrdlusoperaatorid](#võrdlusoperaatorid)
    - [Loogilised Operaatorid](#loogilised-operaatorid)
    - [Bitioperaatorid (valikuline - ei kasutata kursuse jooksul)](#bitioperaatorid-valikuline---ei-kasutata-kursuse-jooksul)
    - [Stringi Operaatorid](#stringi-operaatorid)
    - [Tingimuslik (Ternaarne) Operaator](#tingimuslik-ternaarne-operaator)
    - [Koma Operaator](#koma-operaator)
    - [Unaarsed Operaatorid](#unaarsed-operaatorid)
  - [Harjutused](#harjutused)
    - [Harjutus 1 - Põhilised Aritmeetilised Operaatorid](#harjutus-1---põhilised-aritmeetilised-operaatorid)
    - [Harjutus 2 - Võrdlusoperaatorid](#harjutus-2---võrdlusoperaatorid)

## Õpiväljundid

Pärast selle teema läbimist suudad:

- Määratleda, mis on operaator
- Määratleda, mis on avaldis
- Teha vahet operaatoritel ja avaldistel
- Loetleda kõige tavalisemaid operaatoreid Javascriptis
- Selgitada erinevust erinevat tüüpi operaatorite vahel
- Kasutada oma programmis operaatoreid
- Selgitada erinevust võrdsusoperaatori (`==`) ja range võrdsusoperaatori (`===`) vahel
- Selgitada erinevust ebavõrdsusoperaatori (`!=`) ja range ebavõrdsusoperaatori (`!==`) vahel

## Mis on Operaator?

Operaator on sümbol, mida kasutatakse ühe või mitme väärtusega toimingu sooritamiseks. Näiteks `+` sümbolit kasutatakse kahe väärtuse liitmiseks. Väärtused, millel operaator toimib, nimetatakse operandideks. Näiteks avaldises `5 + 10` on `+` sümbol operaator ja `5` ja `10` on operandid.

```javascript
let x = 5 + 10; // 5 ja 10 on operandid, + on operaator. x on muutuja, millele omistatakse toimingu tulemus
```

## Mis on Avaldis?

Avaldis on väärtuste, muutujate, operaatorite ja funktsioonide kombinatsioon, mille abil arvutatakse uus väärtus. Näiteks `2 + 3` on avaldis, mille tulemus on `5`. Avaldisi saab kasutada arvutuste tegemiseks, stringide manipuleerimiseks ja muuks.

## Operaatorite ja Avaldiste vaheline seos

Peamine seos on see, et operaatoreid kasutatakse avaldistes, et määratleda sooritatava toimingu tüüp operandidega. Avaldis võib koosneda lihtsast toimingust ainult ühe operaatoriga (nagu `x + y`) või keerulisemast toimingust mitme operaatoriga (nagu `(x + y) * (a - b)`).

Operaatori tüüp määrab avaldise tüübi. Näiteks aritmeetilised operaatorid loovad aritmeetilisi avaldisi, loogilised operaatorid loovad loogilisi avaldisi jne.

Avaldiste hindamine järgib sageli kindlat toimingute järjekorda, mida määravad kaasatud operaatorite prioriteet ja assotsiatiivsus. See tähendab, et mõned toimingud sooritatakse enne teisi. Näiteks korrutamine ja jagamine sooritatakse enne liitmist ja lahutamist.

## Operaatorite Tüübid

Javascriptis on palju erinevaid tüüpi operaatoreid. Selles teemas käsitleme kõige sagedamini kasutatavaid operaatoreid.

### Aritmeetilised Operaatorid

Aritmeetilisi operaatoreid kasutatakse aritmeetiliste toimingute tegemiseks numbriliste väärtustega. Aritmeetilisi operaatoreid vajame, kui soovime oma programmides teha arvutusi. Näiteks võime soovida liita kaks numbrit kokku või korrutada kaks numbrit omavahel.

Javascriptis on 5 aritmeetilist operaatorit:

- `+`: **liitmine** - liidab kaks väärtust kokku
- `-`: **lahutamine** - lahutab ühe väärtuse teisest
- `*`: **korrutamine** - korrutab kaks väärtust omavahel
- `/`: **jagamine** - jagab ühe väärtuse teisega
- `%`: **jääk (modulus)** - tagastab ühe väärtuse teisega jagamisel jäägi

```js
let x = 5 + 10; // liitmine - tulemus on 15
let y = 5 - 10; // lahutamine - tulemus on -5
let z = 5 * 10; // korrutamine - tulemus on 50
let w = 5 / 10; // jagamine - tulemus on 0.5
let v = 5 % 10; // moodul - tulemus on 5
```

### Määramisoperaatorid

Määramisoperaatoreid kasutatakse muutujatele väärtuste omistamiseks. Mõnikord soovime teha muutujaga mingi toimingu ja omistada saadud tulemus uuesti samale muutujale. Näiteks võime soovida liita muutuja olemasolevale väärtusele juurde arvu `10`.

Javascriptis on 8 määramisoperaatorit:

- `=`: määrab muutujale väärtuse
- `+=`: lisab muutujale väärtuse ja määrab saadud tulemuse muutujale
- `-=`: lahutab muutujalt väärtuse ja määrab saadud tulemuse muutujale
- `*=`: korrutab muutuja väärtusega ja määrab saadud tulemuse muutujale
- `/=`: jagab muutuja väärtusega ja määrab saadud tulemuse muutujale
- `%=`: jagab muutuja väärtusega ja määrab jäägi muutujale
- `**=`: tõstab muutuja väärtuse astmesse ja määrab saadud tulemuse muutujale
- `++`: suurendab muutujat 1 võrra
- `--`: vähendab muutujat 1 võrra

```js
let x = 5; // deklareerib muutuja x ja määrab väärtuseks 5
x += 10; // lisab x-le 10 ja määrab tulemuse x-ile - tulemus on 15
x -= 10; // lahutab x-st 10 ja määrab tulemuse x-ile - tulemus on 5
x *= 10; // korrutab x-i 10-ga ja määrab tulemuse x-ile - tulemus on 50
x /= 10; // jagab x-i 10-ga ja määrab tulemuse x-ile - tulemus on 5
x %= 10; // jagab x-i 10-ga ja määrab jäägi x-ile - tulemus on 5
x **= 2; // tõstab x-i 2. astmesse ja määrab tulemuse x-ile - tulemus on 25
x++; // suurendab x-i 1 võrra - tulemus on 26
x--; // vähendab x-i 1 võrra - tulemus on 25
```

### Võrdlusoperaatorid

Võrdlusoperaatoreid kasutatakse kahe väärtuse võrdlemiseks. Väärtuste võrdlemine on kasulik, kui soovime kontrollida, kas kaks väärtust on võrdsed või mitte, või kas üks väärtus on suurem või väiksem kui teine väärtus. Võrdluse tulemus on tõeväärtus `tõene` või `väär` (`true` või `false`).

Javascriptis on 8 võrdlusoperaatorit:

- `==`: võrdne - tagastab true, kui kaks väärtust on võrdsed
- `!=`: mittevõrdne - tagastab true, kui kaks väärtust ei ole võrdsed
- `>`: suurem kui - tagastab true, kui esimene väärtus on suurem kui teine väärtus
- `<`: väiksem kui - tagastab true, kui esimene väärtus on väiksem kui teine väärtus
- `>=`: suurem kui või võrdne - tagastab true, kui esimene väärtus on suurem kui või võrdne teise väärtusega
- `<=`: väiksem kui või võrdne - tagastab true, kui esimene väärtus on väiksem kui või võrdne teise väärtusega
- `===`: range võrdne - tagastab true, kui kaks väärtust on võrdsed ja sama tüüpi
- `!==`: range mittevõrdne - tagastab true, kui kaks väärtust ei ole võrdsed või ei ole sama tüüpi

```js
let x = 5;
let y = 10;
let z = '5';

x == y; // false
x != y; // true
x > y; // false
x < y; // true
x >= y; // false
x <= y; // true
x === y; // false
x !== y; // true
x == z; // true
x === z; // false
```

> Soovitus on alati kasutada ranget võrdsust (`===`) ja ranget mittevõrdsust (`!==`) väärtuste võrdlemisel, sest nagu näeme eespool toodud näites, võib võrdsusoperaator (`==`) ja mittevõrdsusoperaator (`!=`) anda ootamatuid tulemusi.
>
> Näiteks `5 == '5'` tagastab `true`, aga `5 === '5'` tagastab `false`. See on seetõttu, et võrdsusoperaator (`==`) teisendab operandid enne nende võrdlemist samaks tüübiks, kuid range võrdsusoperaator (`===`) ei teisenda operande enne nende võrdlemist samaks tüübiks, vaid võtab arvesse peale väärtuste ka nende tüübi.

### Loogilised Operaatorid

Loogilisi operaatoreid kasutatakse kahe või enama `boolean` väärtuse ühendamiseks ja ühe `boolean` väärtuse tagastamiseks. Näiteks võime soovida kontrollida, kas number on suurem kui `10` ja väiksem kui `20`. Seda saab teha, ühendades kaks võrdlusoperaatorit loogilise `JA` operaatoriga (`&&`).

Javascriptis on 3 loogilist operaatorit:

- `&&`: loogiline `JA` - tagastab `true`, kui mõlemad operandid on `true`
- `||`: loogiline `VÕI` - tagastab `true`, kui üks operandidest on `true`
- `!`: loogiline `EI` - tagastab `true`, kui operand on `false`

```js
let x = 5;
let y = 10;

x > 5 && x < 10; // false
x > 5 || x < 10; // true
!(x > 5); // true
```

### Bitioperaatorid (valikuline - ei kasutata kursuse jooksul)

Bitioperaatoreid kasutatakse numbriliste väärtuste bitiliseks töötlemiseks. Bitilised operatsioonid on toimingud, mida tehakse numbri binaarsel kujul. Näiteks numbri `5` binaarne esitus on `101`. Numbril `10` on binaarne esitus `1010`. Bitilise `JA` operatsioon numbrite `5` ja `10` peal annab `0`, kuna `101` `JA` `1010` on `0`. Arvestades paremalt vasakule, on tulemuse esimene bitt `0`, kuna operandide esimesed bitid on `1` ja `0`. Teise biti tulemus on `0`, kuna operandide teised bitid on `0` ja `1`. Kolmanda biti tulemus on `0`, kuna operandide kolmandad bitid on `1` ja `0`.

Javascriptis on 7 bitioperaatorit:

- `&`: bitiline `JA` - tagastab `1`, kui mõlemad bitid on `1`
- `|`: bitiline `VÕI` - tagastab `1`, kui üks bitidest on `1`
- `^`: bitiline `XOR` - tagastab `1`, kui üks bitidest on `1` ja teine on `0`
- `~`: bitiline `EI` - pöörab bitid ümber
- `<<`: bitiline `vasak nihutamine` - nihutab bitid vasakule
- `>>`: bitiline `parem nihutamine` - nihutab bitid paremale
- `>>>`: bitiline `märkimatu parem nihutamine` - nihutab bitid paremale ja täidab tühjad bitid `0`-ga

```javascript
let x = 5; // 101
let y = 10; // 1010

x & y; // 0 - 101 JA 1010 on 0
x | y; // 15 - 101 VÕI 1010 on 1111
x ^ y; // 15 - 101 XOR 1010 on 1111
~x; // -6 - pöörab 101 bitid ümber, saades 010 ja seejärel teisendab 010 kümnendkorraks, saades -6
x << 1; // 10 - nihutab 101 bitid vasakule 1 võrra, saades 1010
x >> 1; // 2 - nihutab 101 bitid paremale 1 võrra, saades 10
x >>> 1; // 2 - nihutab 101 bitid paremale 1 võrra, saades 10 ja täidab tühja biti 0-ga
```

### Stringi Operaatorid

Stringi operaatorid kasutatakse stringide ühendamiseks. Näiteks võime soovida ühendada inimese ees- ja perekonnanime, et saada tema täisnimi.

Javascriptis on ainult üks stringi operaator:

- `+`: ühendamine - ühendab kaks stringi

```js
let firstName = 'John';
let lastName = 'Doe';

firstName + ' ' + lastName; // 'John Doe'
```

### Tingimuslik (Ternaarne) Operaator

Tingimuslikku operaatorit kasutatakse muutujale väärtuse määramiseks tingimuse põhjal. Näiteks võime soovida määrata muutujale väärtuseks `true`, kui arv on suurem kui `10`, või väärtuseks `false`, kui arv on väiksem kui `10`.

Javascriptis on ainult üks tingimuslik operaator:

- `?:`: tingimuslik - määrab muutujale väärtuse tingimuse põhjal

```js
let x = 5;

x > 10 ? true : false; // false
```

### Koma Operaator

Koma operaatorit kasutatakse mitme avaldise hindamiseks ja viimase avaldise tulemuse tagastamiseks.

Javascriptis on ainult üks koma operaator:

- `,`: koma - hindab mitut avaldist ja tagastab viimase avaldise tulemuse

```js
let x = 5;

(x = 10, x + 5); // 15
```

### Unaarsed Operaatorid

Unaarseid operaatorid kasutatakse ühe väärtusega unaaroperatsioonide tegemiseks. Näiteks võime soovida muuta positiivse arvu negatiivseks või teisendada väärtuse numbriks.

Javascriptis on 3 unaarset operaatorit:

- `+`: `unaarne pluss` - teisendab väärtuse arvuks, kui see juba ei ole arv
- `-`: `unaarne miinus` - teisendab väärtuse arvuks ja muudab selle negatiivseks
- `!`: `loogiline EI` - tagastab vastupidise tõeväärtuse

```js
let x = '5';

+x; // 5
-x; // -5
!x; // false
```

## Harjutused

Loo fail `index.js` ja kirjuta järgmiste harjutuste kood sellesse faili.

Testi oma koodi käivitades `index.js` fail kasutades käsku `node index.js`.

Samuti testi oma koodi erinevate muutujate väärtustega.

### Harjutus 1 - Põhilised Aritmeetilised Operaatorid

**Eesmärk**: Põhiliste aritmeetiliste operaatorite kasutamine.

**Kirjeldus**: Kirjuta programm, mis deklareerib kaks muutujat, `num1` ja `num2`, millele on väärtusteks määratud suvalised arvud. Tee nende muutujatega `liitmise`, `lahutamise`, `korrutamise` ja `jagamise` tehteid. Väljasta  iga operatsiooni tulemus.

**Oodatud väljund**: `num1` ja `num2` `summa`, `vahe`, `korrutis` ja `jagatis`.

<details>
  <summary>Lahendus</summary>

```js
let num1 = 5;
let num2 = 10;

console.log(num1 + num2); // 15
console.log(num1 - num2); // -5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 0.5
```

![Operaatorite kasutamine](operators.gif)

</details>

### Harjutus 2 - Võrdlusoperaatorid

**Eesmärk**: Võrdle kahte väärtust kasutades erinevaid võrdlusoperaatoreid.

**Kirjeldus**: Määra kahele muutujale arvulised väärtused. Kasuta võrdlusoperaatoreid (`==`, `!=`, `>`, `<`, `>=`, `<=`) nende väärtuste võrdlemiseks ja väljasta iga võrdluse tulemus.

**Oodatud väljund**: Avaldised, mis näitavad iga võrdluse tulemust `a` ja `b` vahel.

<details>
  <summary>Lahendus</summary>

```js
let a = 5;
let b = 10;

console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
```

</details>
