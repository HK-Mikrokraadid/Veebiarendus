# Käsurida (Command Line Interface, CLI)

![Käsurida](CLI.webp)

- [Käsurida (Command Line Interface, CLI)](#käsurida-command-line-interface-cli)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on käsurida?](#mis-on-käsurida)
    - [Windows](#windows)
    - [MacOS/Linux](#macoslinux)
  - [Node projekt ja node moodulid](#node-projekt-ja-node-moodulid)
    - [Node programmide käivitamine](#node-programmide-käivitamine)
    - [Projekti alustamine](#projekti-alustamine)
    - [Moodulite paigaldamine ja eemaldamine](#moodulite-paigaldamine-ja-eemaldamine)
    - [Node projekti sõltuvuste paigaldamine](#node-projekti-sõltuvuste-paigaldamine)
  - [Git-i käsud](#git-i-käsud)

## Õpiväljundid

Pärast selle teema läbimist suudate:

- Kirjeldada, mis on käsurida;
- Kasutada käsurida kaustades navigeerimiseks;
- Kasutada käsurida NodeJS projektide puhul;
- Kasutada käsurida Git-i lihtsamate operatsioonide tegemiseks.

## Mis on käsurida?

Käsurida on tekstipõhine kasutajaliides, mis võimaldab kasutajal suhelda arvutiga käskude abil. Käsurida on operatsioonisüsteemi osa, mis võimaldab kasutajal käivitada programme, hallata faile ja kaustu, käivitada skripte jne.

NodeJS-is oleme juba kasutanud käsurida, kui oleme käivitanud NodeJS skripte käsurealt. Näiteks:

```bash
node app.js
```

Samas võib juhtuda, et oleme käsu käivitamiseks sattunud valesse kausta ja peame liikuma teise kausta, kus asub meie skript. Selle tegvuse jaoks on meile abiks järgmised käsud:

### Windows

- `cd kaustanimi` - Liigub ühest kaustast teise;
- `cd ..` - Liigub ühe kausta võrra ülespoole;
- `dir` - Näitab kausta sisu;
- `mkdir kaustanimi` - Loob uue kausta;
- `del` - Kustutab faili;
- `echo` - Kirjutab teksti konsooli;
- `type failinimi` - Näitab faili sisu;
- `cls` - Puhastab konsooli;
- `exit` - Sulgeb konsooli;

### MacOS/Linux

- `pwd` - Näitab, millises kaustas me hetkel oleme;
- `ls` - Näitab kausta sisu;
- `cd kaustanimi` - Liigub ühest kaustast teise;
- `cd ..` - Liigub ühe kausta võrra ülespoole;
- `mkdir kaustanimi` - Loob uue kausta;
- `rm failinimi` - Kustutab faili;
- `mv failinimi uusfailinimi` - Muudab faili nime;
- `mv failinimi kaustanimi` - Liigutab faili teise kausta;
- `cp failinimi kaustanimi` - Kopeerib faili teise kausta;
- `cat failinimi` - Näitab faili sisu;
- `touch failinimi` - Loob uue faili;
- `clear` - Puhastab konsooli;
- `exit` - Sulgeb konsooli;

## Node projekt ja node moodulid

Et kasutada NodeJS-is kolmandate osapoolte mooduleid, peame samuti tõenäoliselt kasutama käsurida ja mõningaid käsklusi, et neid mooduleid paigaldada ja hallata.

> Pane tähele, et järgmistest käskudest rääkides eeldame, et oled juba loonud NodeJS projekti jaoks kausta ja käsud sisestatakse samas kaustas.

### Node programmide käivitamine

NodeJS programmide käivitamiseks kasutame järgmist käsku:

```bash
node app.js
```

### Projekti alustamine

NodeJS projektiga alustamiseks kasutame järgmist käsku:

```bash
npm init
```

Soovi korral võime kasutada ka järgmist käsku, et luua NodeJS projektile vaikimisi konfiguratsioonifailid:

```bash
npm init -y
```

See käsk loob projekti juurkausta faili `package.json`, kus on kirjas projekti nimi, versioon, kirjeldus, autor jms ja kuhu pannakse kirja ka kõik projekti sõltuvused.

### Moodulite paigaldamine ja eemaldamine

Node moodulite paigaldamine käsurealt on väga lihtne. Selleks kasutame `npm` käsku, millele järgneb parameeter `install` ja mooduli nimi. Näiteks:

```bash
npm install express
```

Node moodulite eemaldamiseks kasutame samuti `npm` käsku, millele järgneb omakorda parameeter `uninstall` ja mooduli nimi. Näiteks:

```bash
npm uninstall express
```

### Node projekti sõltuvuste paigaldamine

Kui meil on olemas `package.json` fail, kus on kirjas kõik projekti sõltuvused, siis saame kõik sõltuvused paigaldada järgmise käsuga:

```bash
npm install
```

## Git-i käsud

Siiani oleme kasutanud Git-i läbi graafilise kasutajaliidese ja võime seda ka edaspidi nii teha, kuid on oluline teada ka mõningaid Git-i käsklusi, et saaksime vajadusel kasutada Git-i käsurealt.

- `git clone <url>` - Kloonib kaugrepos oleva projekti enda arvutisse;
- `git status` - Näitab muudatusi, mis on tehtud failides;
- `git add` - Lisab failid, mille muudatused soovime `commit`-ida;
- `git commit -m "Muudatuste kirjeldus"` - Salvestab muudatused versioonihaldusse koos kirjeldusega;
- `git push` - Saadab `commit`-itud muudatused kaugreposse;
- `git pull` - Tõmbab kaugrepos olevad muudatused enda arvutisse;
- `git log` - Näitab kõiki `commit`-e, mis on tehtud projekti ajaloos;
- `git branch` - Näitab kõiki olemasolevaid haru (branch) ja näitab, millisel harul me hetkel oleme;
- `git checkout -b uusharu` - Loob uue haru ja liigub sellele;
- `git merge haru` - Liidab haru, mille nimi on `haru`, praeguse haruga kokku;
- `git reset` - Tühistab viimase `commit`-i, kuid jätab muudatused alles;
- `git reset --hard` - Tühistab viimase `commit`-i ja kustutab ka muudatused;
- `git reset --hard <commiti id>` - Tühistab kõik muudatused ja `commit`-id kuni antud `commit`-ini;
- `git reset --hard origin/master` - Tühistab kõik muudatused ja `commit`-id kuni kaugrepos oleva `master` haru seisundini;
