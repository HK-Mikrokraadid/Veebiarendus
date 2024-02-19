# Lisaülesanded tingimuslausetele

Kui õppematerjalides olevad ülesanded on lahendatud, kuid sooovid veel harjutada, siis siin on mõned lisaülesanded, mida saad proovida. Need ülesanded aitavad sul harjutada tingimuslausete kasutamist erinevates stsenaariumides.

## Ülesanne 1: Aastaaegade Kontrollija

Deklareeri muutuja `numberOfMonth` ja määra sellele väärtuseks kuu number (1 jaanuarist kuni 12 detsembrini). Kirjuta seejärel tingimuslaused, mis kontrollivad kuu numbrit ja trükivad konsooli, milline aastaaeg antud kuule vastab. Kasuta järgmist jaotust: Talv - detsember (12), jaanuar (1), veebruar (2); Kevad - märts (3), aprill (4), mai (5); Suvi - juuni (6), juuli (7), august (8); Sügis - september (9), oktoober (10), november (11).

```javascript
let noumberOfMonth = 3; // Muuda seda numbrit vastavalt testitavale kuule
// Siia lisada loogika aastaaegade kontrollimiseks ja tulemuse väljastamiseks
```

### Ülesanne 2: Kasutaja Vanusegrupi Tuvastamine

Deklareeri muutuja `age` ja määra sellele kasutaja vanus. Kirjuta programm, mis tuvastab, millisesse vanusegruppi kasutaja kuulub, ja trükib selle konsooli. Vanusegrupid on järgmised: Laps - alla 13; Teismeline - 13 kuni 19; Täiskasvanu - 20 kuni 65; Seenior - üle 65.

```javascript
let age = 25; // Muuda seda väärtust vastavalt testitavale vanusele
// Siia lisada loogika vanusegrupi tuvastamiseks ja tulemuse väljastamiseks
```

### Ülesanne 3: Hinnanguline Sõiduaeg

Deklareeri muutujad `distance` (distants kilomeetrites) ja `traffic` (liiklusolukord, millel on järgmised võimalikud väärtused: "normaalne", "ummik", "väga tihe"). Kirjuta programm, mis arvutab hinnangulise sõiduaja, lähtudes distantsist ja liiklusolukorrast, ning trükib selle aja tundides konsooli.

```javascript
let distance = 120; // Muuda seda numbrit vastavalt testitavale distantsile
let traffic = "ummik"; // Muuda seda sõltuvalt testitavast liiklusolukorrast
// Siia lisada loogika hinnangulise sõiduaja arvutamiseks ja tulemuse väljastamiseks
```

### Ülesanne 4: Pileti Hind Sõltuvalt Vanusest ja Päevast

Deklareeri muutujad `age` ja `weekday`. Kirjuta programm, mis arvutab kinopileti hinna sõltuvalt kasutaja vanusest (*age*) ja nädalapäevast (*weekday*) ning trükib hinna konsooli. Pileti hinnad on järgmised:

- täiskasvanu pilet nädala sees on 10 eurot, nädalavahetusel 12 eurot;
- laste ja seenioride pilet on alati 6 eurot, sõltumata nädalapäevast.

```javascript
let age = 30; // Muuda seda väärtust vastavalt testitavale vanusele
let weekday = "laupäev"; // Muuda seda vastavalt testitavale nädalapäevale
// Siia lisada loogika pileti hinna arvutamiseks ja tulemuse väljastamiseks
```
