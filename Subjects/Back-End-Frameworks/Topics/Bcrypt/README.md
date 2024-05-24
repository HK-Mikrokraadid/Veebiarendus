# Bcrypt

Selles peatükis käsitleme `bcrypt`-i, mis on räsimisfunktsioon (*hashing function*), mida kasutatakse peamiselt paroolide räsimiseks.

![Bcrypt](Bcrypt.webp)

Pildi allikas: [DALL-E by OpenAI](https://openai.com/)

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on `bcrypt` ja kuidas seda kasutada;
- nimetama `bcrypt` eeliseid;
- rakendama `bcrypt`-i paroolide räsimiseks ja võrdlemiseks.

## Mis on Bcrypt?

`Bcrypt` on räsimisfunktsioon (*hashing function*), mida kasutatakse peamiselt paroolide räsimiseks. Räsimine on protsess, kus sisendväärtus (nt parool) muudetakse fikseeritud pikkusega väljundiks, mida nimetatakse räsi väärtuseks. Räsi väärtus on unikaalne ja seda ei saa tagasi muuta algseks sisendiks. Räsi väärtust kasutatakse sageli andmete turvalisuse tagamiseks, kuna see on ainulaadne ja seda ei saa tagasi muuta algseks sisendiks.

Räsimist aetakse sageli segamini krüpteerimisega, kuid need on kaks erinevat protsessi. Krüpteerimine on protsess, kus sisendväärtus muudetakse krüptovõtme abil krüptitud väljundiks, mida saab dekrüpteerida algseks sisendiks. Räsimise puhul aga ei ole võimalik räsi väärtust tagasi muuta algseks sisendiks, mis muudab selle turvalisemaks andmete salvestamiseks.

## Bcrypt-i eelised

- **Turvalisus**: Erinevalt paljudest teistest räsimisfunktsioonidest on `bcrypt` spetsiaalselt kavandatud aeglaseks, mis teeb ründajate jaoks raskemaks salasõnade jõuga lahtimurdmise. Selle aeglust saab reguleerida nn `soolamise` korduste arvu suurendamise või vähendamisega.

- **Soolamine**: `bcrypt` sisaldab automaatselt soolamise funktsiooni. Soolamine tähendab juhuslike andmete lisamist salasõnale enne räsimist, et vältida räsi väärtuste kordumist samade salasõnade jaoks ja raskendada ründajate tööd, kes kasutavad eelnevalt arvutatud räsi väärtuste tabeleid (nn `rainbow tables`).

## Bcrypt kasutamine

API-s peaks bcrypti kasutamine käima nii, et kui me loome uue kasutaja, siis enne, kui kasutaja andmed andmebaasi salvestatakse, räsitakse parool ära ja tavalise stringi asemel salvestatakse 'andmebaasi' räsitud parool. Edaspidi, kui kasutaja sisse logib, räsime sisse logitud parooli ja võrdleme seda andmebaasis oleva räsitud parooliga.

Bcrypti paigaldamine toimub käsuga `npm install bcrypt`.

Räsimise teenus võiks välja näha umbes selline:

```js
// Impordime bcrypt'i
const bcrypt = require('bcrypt');
// Järgnev muutuja määrab ära, kui palju peab tööd tegema parooli
// hashimiseks (mida suurem number, seda rohkem on vaja vaeva näha)
const saltRounds = 10;

const hashService = {
  // Funktsioon parooli räsimiseks - funktsioon tagastab räsitud parooli
  hash: async (password) => {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  },
  // Funktsioon parooli võrdlemiseks räsiga - funktsioon tagastab true või false vastavalt võrdlemise tulemusele
  compare: async (password, hash) => {
    const match = await bcrypt.compare(password, hash);
    return match;
  },
};

// Ekspordime loodud objekti, et saaksime seda teenust mujal kasutada
module.exports = hashService;
```

Nüüd saame kasutada vastavat teenust kasutaja loomisel, muutmisel ja sisselogimisel.

Räsimise kasutamine kasutaja loomisel näeb välja umbes selline:

```js
  createUser: async (newUser) => {
    const id = db.users.length + 1;
    // Räsime loodava kasutaja parooli
    const hashedPassword = await hashService.hash(newUser.password);
    // Lisame kasutaja 'andmebaasi' koos räsitud parooliga
    db.users.push({
      id,
      ...newUser,
      password: hashedPassword,
    });
    return id;
  },
```

Kasutaja sisselogimine ja parooli võrdlemine räsiga näeb välja umbes selline:

```js
  login: async (email, password) => {
    // Otsime kasutaja emaili järgi
    const user = db.users.find((user) => user.email === email);
    // Kui kasutajat ei leitud, tagastame veateate
    if (!user) {
      return 'Kasutajat ei leitud';
    }
    // Võrdleme sisse logitud parooli räsiga
    const match = await hashService.compare(password, user.password);
    // Kui paroolid ei kattu, tagastame veateate
    if (!match) {
      return 'Vale parool';
    }
    // Kui paroolid kattuvad, tagastame kasutaja andmed
    return user;
  },
```

## Kokkuvõte

`Bcrypt` on turvaline räsimisfunktsioon, mida saab kasutada paroolide räsimiseks ja võrdlemiseks. Selle aeglus ja automaatne soolamine muudavad selle turvalisemaks võrreldes teiste räsimisfunktsioonidega. `Bcrypt`-i kasutamine aitab kaitsta kasutajate paroole ja tagada nende privaatsus veebirakendustes.

## Allikad

- [Bcrypt npm leht](https://www.npmjs.com/package/bcrypt)
- [Wikipedia](https://en.wikipedia.org/wiki/Bcrypt#:~:text=The%20bcrypt%20function%20is%20the,Ruby%2C%20python%20and%20other%20languages.)