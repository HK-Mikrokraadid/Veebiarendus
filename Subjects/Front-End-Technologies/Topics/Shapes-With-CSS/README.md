# CSS-i abil kujundite loomine

Selles õppematerjalis tutvustame, kuidas kasutada CSS-i erinevate geomeetriliste kujundite, nagu ruutude, ringide ja muude kujundite loomiseks. CSS pakub lihtsaid võimalusi nende kujundite loomiseks, mis võivad aidata kaasa atraktiivsemate ja dünaamilisemate veebilehtede kujundamisele.

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Luua CSS-i abil ruute ja ringe;
- kasutada CSS-i, et luua keerukamaid geomeetrilisi kujundeid;
- rakendada erinevaid CSS-omadusi, nagu `border-radius` ja `clip-path`, kujundite kohandamiseks.

## Ruudud ja ristkülikud

Ruutude ja ristkülikute loomine on lihtne, kuna need nõuavad ainult `width` ja `height` määramist. Ruudu loomiseks seadke laius ja kõrgus võrdseks.

### Näide: Ruut

```css
.square {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
}
```

### Näide: Ristkülik

```css
.rectangle {
  width: 200px;
  height: 100px;
  background-color: #f44336;
}
```

## Ringid

Ringi loomiseks kasutage `border-radius` omadust. Määra `border-radius` väärtuseks `50%`, et muuta element ringiks.

### Näide: Ring

```css
.circle {
  width: 100px;
  height: 100px;
  background-color: #008CBA;
  border-radius: 50%;
}
```

## Ovaalid

Ovaalide loomiseks seadke erinevad `width` ja `height` väärtused ning rakendage `border-radius: 50%;`.

### Näide: Ovaal

```css
.oval {
  width: 150px;
  height: 100px;
  background-color: #e91e63;
  border-radius: 50%;
}
```

## Kolmnurgad

Kolmnurgad nõuavad `border` omaduse loomingulist kasutamist. Erinevate `border` osade läbipaistvaks muutmine loob kolmnurga efekti.

### Näide: Kolmnurk

```css
.triangle {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #ff5722;
}
```

## Rohkem keerukaid kujundeid `clip-path` abil

CSS `clip-path` omadus võimaldab luua keerukamaid kujundeid, määratledes klipi piirkonna, mis määrab elemendi nähtavad osad.

### Näide: Tähe kuju

```css
.star {
  width: 100px;
  height: 100px;
  background-color: #ffeb3b;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
```

## Kokkuvõte

CSS pakub palju võimalusi erinevate kujundite loomiseks, alates lihtsatest geomeetrilistest kujunditest nagu ringid ja ruudud kuni keerukamate kujunditeni nagu kolmnurgad ja tähekujulised objektid. Nende tehnikate valdamine aitab teil luua visuaalselt huvitavaid veebilehti ja parandada kasutajaliidese disaini. Katsetage nende kujunditega, et näha, kuidas need võivad teie veebiprojekte elavdada.