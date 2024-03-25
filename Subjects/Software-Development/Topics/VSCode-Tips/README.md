# Visual Studio Code Tips

![VS Code nipid](VSCode-Tips.webp)

Pildi allikas: Dall-E by OpenAI

Sellel kursusel oleme kasutanud ühe peamise tööriistana Visual Studio Code'i. VS Code on väga võimas tööriist, millel on palju funktsioone ja laiendusvõimalusi, mida saab kasutada, et muuta arendusprotsessi kiiremaks ja mugavamaks.

## Õpiväljundid

Peale selle teema läbimist:

- oskad kasutada VS Code'i lühiklahvikombinatsioone
- oskad kasutada VS Code'i laiendusi

## Lühiklahvikombinatsioonid

Lühiklahvikombinatsioonid on kiire viis, kuidas kasutada VS Code'i funktsioone. Siin on mõned kasulikud lühiklahvikombinatsioonid:

### Otsing

- `Ctrl + P` - Avab kiire otsingu, kus saad otsida faile projekti kaustast
- `Ctrl + F` - Avab otsingu praeguses failis
- `Ctrl + Shift + F` - Avab globaalse otsingu kogu projekti kaustast
- `Ctrl + H` - Avab asendamise praeguses failis
- `Ctrl + Shift + H` - Avab globaalse asendamise kogu projekti kaustast

### VS Code klahvikombinatsioonid - Kommentaarid

- `Alt + Shift + A` - Valitud ridade 'välja' ja 'sisse' kommenteerimine

### Kopeerimine/Lõikamine/Kustutamine/Valimine

- `Alt + Shift + Nool üles` - Valitud ridade ülespoole kopeerimine
- `Alt + Shift + Nool alla` - Valitud ridade allapoole kopeerimine
- `Ctrl + C` - Kopeerib valitud rea (ka siis, kui rida pole valitud)
- `Ctrl + X` - Lõikab valitud rea (ka siis, kui rida pole valitud)
- `Ctrl + Shift + K` - Kustutab valitud rea, kus kursor asub (ei lähe lõikelauale)
- `Ctr + Shift + L` - Valib kõik esinemised, kus kursor asub
- `Ctrl + D` - Valib järgmise esinemise, kus kursor asub

### Muud

- `Ctrl + Shift + E` - Avab küljepaneeli, kus saad näha kõiki projekti faile ja kaustu
- `Ctrl + Shift + X` - Avab küljepaneeli, kus saad näha kõiki laiendusi
- `Ctrl + Shift + P` - Avab käsurea, kus saad otsida kõiki VS Code'i funktsioone (*Command Palette*)
- `Ctrl + Alt + Nool üles/Nool alla` - Mitu kursorit üles/alla
- `Ctrl + Alt + Nool üles/Nool alla` - Mitu kursorit üles/alla

## Kasulikud laiendused

VS Code'i laiendused võivad olla väga kasulikud, kuna need võimaldavad laiendada VS Code'i funktsionaalsust. VS Code'i laienduste installimiseks mine `View -> Extensions` või vajuta lühiklahvikombinatsiooni `Ctrl + Shift + X` ja otsi laienduste nime järgi. Siin on mõned kasulikud laiendused:

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - Markdowni lihtsamaks redigeerimiseks ja eelvaateks
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Koodi automaatseks vormindamiseks
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Git ajaloo graafiline kuvamine
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Kommentaaride värvimine vastavalt nende tüübile
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Arendusserveri käivitamine ja veebilehtede automaatne värskendamine
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) - Reaalajas koostöö teiste arendajatega
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Koodis olevate vigade ja hoiatuste esiletõstmine
- [Markdown Lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - Markdowni failide lintimine (korrektsuse kontroll) ja stiilinõuete kontrollimine
- [Icon Themes](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - Ikoonide teema muutmine vastavalt failitüübile
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Javascripti lintimine (korrektsuse kontroll) ja stiilinõuete kontrollimine

## Code Snippets

VS Code'is on võimalik luua oma kohandatud kooditükke (`Code Snippets`), mida saab kasutada kiireks koodi kirjutamiseks. Neid tükikesi saab kasutada näiteks erinevate koodiplokkide, mallide või korduvate koodijuppide jaoks. VS Code-s töötavad need nii, et kui eelnevalt kirjeldatud lühiaklahvikombinatsiooni abil sisestad kooditüki nime, siis VS Code asendab selle kooditükiga.

Siin on mõned näited kohandatud kooditükkidest:

```json
{
    "Print to console": {
        "prefix": "log",
        "body": [
            "console.log('$1');",
            "$2"
        ],
        "description": "Log output to console"
    },
    "For loop": {
        "prefix": "for",
        "body": [
            "for (let ${1:i} = 0; ${1:i} < ${2:array}.length; ${1:i}++) {",
            "\t$3",
            "}"
        ],
        "description": "For loop"
    }
}
```

Eeltoodud koodinäites asendatakse `log` lühiklahvikombinatsiooni kasutades kooditükk järgmise koodijupiga:

```javascript
console.log('');
```

ja `for` lühiklahvikombinatsiooni kasutades kooditükk järgmise koodijupiga:

```javascript
for (let i = 0; i < array.length; i++) {
    // code here
}
```

Kohandatud kooditükke saab luua VS Code'i seadete all, valides `File -> Preferences -> Configure User Snippets`.

Samuti on võimalik kasutada eelnevalt kellegi teise poolt loodud kooditükke, mida saab leida VS Code'i laienduste hulgast. Näiteks saab kasutada [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) laiendust, mis sisaldab palju kasulikke kooditükke JavaScripti jaoks.

`Code Snippet`-ite kohta saad rohkem lugeda [siit] (https://code.visualstudio.com/docs/editor/userdefinedsnippets)
