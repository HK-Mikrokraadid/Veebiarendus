# Käsurida (Command Line Interface, CLI)

![Käsurida](CLI.webp)

- [Käsurida (Command Line Interface, CLI)](#käsurida-command-line-interface-cli)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on käsurida?](#mis-on-käsurida)
    - [Windows](#windows)
    - [Linux](#linux)
  - [Node projekt ja node moodulid](#node-projekt-ja-node-moodulid)
    - [Projekti alustamine](#projekti-alustamine)
    - [Moodulite paigaldamine ja eemaldamine](#moodulite-paigaldamine-ja-eemaldamine)
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

- `cd` - Liigub ühest kaustast teise;
- `dir` - Näitab kausta sisu;
- `mkdir` - Loob uue kausta;
- `del` - Kustutab faili;
- `echo` - Kirjutab teksti konsooli;
- `type` - Näitab faili sisu;
- `cls` - Puhastab konsooli;
- `exit` - Sulgeb konsooli;

### Linux

- `pwd` - Näitab, millises kaustas me hetkel oleme;
- `ls` - Näitab kausta sisu;
- `cd` - Liigub ühest kaustast teise;
- `mkdir` - Loob uue kausta;
- `rm` - Kustutab faili;
- `touch` - Loob uue faili;
- `clear` - Puhastab konsooli;
- `exit` - Sulgeb konsooli;

Näiteks:

## Node projekt ja node moodulid

Et kasutada NodeJS-is kolmandate osapoolte mooduleid, peame samuti tõenäoliselt kasutama käsurida ja mõningaid käsklusi, et neid mooduleid paigaldada ja hallata.

> Pane tähele, et järgmistest käskudest rääkides eeldame, et oled juba loonud NodeJS projekti jaoks kausta ja käsud sisestatakse samas kaustas.

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

## Git-i käsud

Siiani oleme kasutanud Git-i läbi graafilise kasutajaliidese ja võime seda ka edaspidi nii teha, kuid on oluline teada ka mõningaid Git-i käsklusi, et saaksime vajadusel kasutada Git-i käsurealt.

- `git clone`
- `git status`
- `git add`
- `git commit`
- `git push`
- `git pull`

