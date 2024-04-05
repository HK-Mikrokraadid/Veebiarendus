# Nodemon

![Nodemon](Nodemon.webp)

Pildi allikas: [Dall-E by OpenAI](https://openai.com/)

- [Nodemon](#nodemon)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on Nodemon?](#mis-on-nodemon)
  - [Nodemoni paigaldus](#nodemoni-paigaldus)

## Õpiväljundid

Pärast selle teema läbimist suudate:

- selgitada, mis on Nodemon
- paigaldada Nodemoni
- kasutada Nodemoni NodeJS rakenduse arendamisel

## Mis on Nodemon?

`nodemon` on NodeJS-i käsureatööriist, mis aitab arendusprotsessi automatiseerida, taaskäivitades automaatselt NodeJS rakenduse, kui koodis tehakse muudatusi.

Kui käivitate `nodemon`i, jälgib see kataloogis olevaid faile muudatuste suhtes. Kui salvestate faili muudatused, taaskäivitab `nodemon` rakenduse automaatselt, võimaldades näha tehtud muudatusi, ilma et rakendust peaks käsitsi peatama ja taaskäivitama.

Nodemon pakub ka erinevaid võimalusi oma käitumise kohandamiseks, näiteks teatud failide või kataloogide ignoreerimine ja viivituse kontrollimine enne rakenduse taaskäivitamist.

## Nodemoni paigaldus

`nodemon`i saab paigaldada kasutades Node Package Manageri (*NPM*). Selleks tuleb käsurealt sisestada käsk: `npm install -g nodemon`. Selle käsuga pigaldatakse `nodemon` nn globaalselt - see tähendab, et seda ei ole vaja iga projekti juurde käsitsi paigaldada, vaid operatsioonisüsteem leiab selle siis juba ise vastavast kohast üles.

Kui soovid paigaldada `nodemon`i ainult konkreetse projekti jaoks, siis saab seda teha järgmiselt: `npm install --save-dev nodemon`. `--save-dev` võti tähendab seda, et `nodemon` paigaldatakse nn arendussõltuvusena - ehk, kui seesama projekt kusagil teises arvutis uuesti paigaldada käsuga `npm install`, siis `nodemon`i sinna arvutisse uuesti ei paigaldata.

Peale paigaldamist saab `nodemon`i kasutada lihtsalt kasutades `node` käsu asemel `nodemon` - `nodemon app.js`.

Allikas:

- <https://www.npmjs.com/package/nodemon>
