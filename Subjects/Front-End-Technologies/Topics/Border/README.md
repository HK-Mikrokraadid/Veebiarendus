# CSS-i Raamjooned (Borders)

Selles õppematerjalis uurime CSS-i `border` omadust, mis võimaldab arendajatel määrata elemendi ümber raamjooni. Raamjooni kasutatakse elemendi visuaalse piiritlemise, stiili rõhutamise ja kasutajaliidese eristatavuse parandamise eesmärgil.

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Kirjeldada CSS-i `border` omaduse kasutusvõimalusi;
- Määratleda erinevad `border` stiilid, laiused ja värvid;
- Rakendada ja kombineerida erinevaid `border` omadusi, et luua soovitud visuaalseid efekte.

## Mis on CSS-i Border Property?

CSS-i `border` omadus võimaldab arendajatel määrata HTML elementidele piirjooned. See on lühendomadus, mis koosneb kolmest peamisest atribuudist: laius (`border-width`), stiil (`border-style`) ja värv (`border-color`).

## Borderi omadused

`border` omadust saab määrata kas lühendatult või iga külje jaoks eraldi:

- **`border-width`**: Määrab raamjoone laiuse (nt `px`, `em` jne).
- **`border-style`**: Määrab raamjoone stiili (nt `solid`, `dashed`, `dotted`).
- **`border-color`**: Määrab raamjoone värvi.

## Lühendomadus

Lühendomadusega saab määrata kõik kolm atribuuti ühe deklaratsiooniga:

```css
div {
  border: 2px solid black;
}
```

## Erinevad Borderi Stiilid

CSS võimaldab mitmeid erinevaid stiile raamjoontele:

- **`solid`**: Ühtlane joon.
- **`dotted`**: Punktiirjoon.
- **`dashed`**: Katkendlik joon.
- **`double`**: Topeltjoon.
- **`groove`**: Sissevajutatud efektiga joon.
- **`ridge`**: Väljaulatuv efektiga joon.
- **`inset`**: Sisse pressitud efektiga joon.
- **`outset`**: Välja pressitud efektiga joon.
- **`none`**: Ei kuvata joont.
- **`hidden`**: Peidab joone.

## Borderi Laius ja Värv

Raamjoone laiust ja värvi saab määrata sõltumatult:

```css
div {
  border-width: 5px;
  border-style: solid;
  border-color: blue;
}
```

## Erinevate Külgede Stiilimine

Võimalik on stiilida iga külge eraldi, kasutades `border-top`, `border-right`, `border-bottom`, ja `border-left`:

```css
div {
  border-top: 2px dotted red;
  border-right: 3px solid blue;
  border-bottom: 4px dashed green;
  border-left: 5px double orange;
}
```

## Borderi Raadius (Border-radius)

`border-radius` omadus võimaldab nurgad ümardada, luues nii ovaalseid kujundeid kui ka ümaraid nurki:

```css
div {
  border: 2px solid black;
  border-radius: 10px; /* Ümardab kõik nurgad */
}
```

## Järeldus

CSS-i `border` omadus on väga võimas tööriist, mis võimaldab arendajatel kohandada elemendi piire mitmel erineval viisil. Alates lihtsatest raamjoontest kuni keerukate, mitmekihiliste piirideni saab `border` omadusi kasutada, et parandada kasutajaliidese esteetikat ja kasutajakogemust. Praktiline kogemus nende omadustega aitab arendajatel luua visuaalselt atraktiivsemaid ja funktsionaalsemaid veebilehti.
