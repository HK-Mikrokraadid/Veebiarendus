# Algeline Javascript programmiga suhtlemine

- [Algeline Javascript programmiga suhtlemine](#algeline-javascript-programmiga-suhtlemine)
  - [`alert();`](#alert)
  - [`prompt();`](#prompt)
  - [`confirm();`](#confirm)
  - [`console.log();`](#consolelog)

Programmiga suhtlemine tähendab tavaliselt interaktsiooni arvutiprogrammi või tarkvaraga. See võib hõlmata erinevaid tegevusi, nagu programmile käskude andmine, andmete sisestamine, programmist teabe saamine, programmide vahelise suhtluse haldamine ja palju muud.

Programmiga suhtlemine võib toimuda mitmel viisil, sealhulgas kasutajaliidese (UI) kaudu, mis võib olla graafiline (nagu veebilehtedel või mobiilirakendustes) või tekstipõhine (nagu terminali või käsurea liides). 

Näiteks kui kasutate veebilehitsejat veebilehe külastamiseks, suhtlete programmiga. Kui sisestate otsingumootorisse otsingusõna, suhtlete programmiga.

Kuna JavaScript on mõeldud algselt töötama veebilehitsejas ja mõjutama seda, kuidas veebileht käitub, siis käib tavaliselt suhtlus JavaScriptiga läbi veebilehe html koodi. Kuid selle kursuse eesmärk ei ole õpetada ja õppida html-i kirjutama (kuigi natukene tuleb ka sellega tegeleda), siis tuleks leida mingi teine viis JavaScript programmiga suhtlemiseks.

Õnneks on JavaScripti sisse ehitatud mõned funktsioonid, mis meile lihtsamat sorti suhtlust võimaldavad.

Nendeks funktsioonideks on:

- `alert();`
- `prompt();`
- `confirm();`
- `console.log();`

Nende funktsioonide abil on võimalik kasutajale teateid kuvada, kasutajalt sisendit küsida ja kasutaja sisendit koguda. Kuigi need ei pruugi olla kõige efektiivsemad viisid kasutajaga suhtlemiseks, on need siiski väga kasulikud ja võimaldavad meil JavaScripti põhitõdesid õppida.

## `alert();`

JavaScripti `alert()` funktsioon on brauseri sisemine funktsioon, mida kasutatakse kasutajale dialoogiboksi kuvamiseks, mis sisaldab teatud sõnumit. See on kasulik viis teabe edastamiseks kasutajale või veateate kuvamiseks.

Funktsioon `alert()` peatab skripti käivitamise seni, kuni kasutaja on dialoogiboksi sulgenud. See tähendab, et kui kasutaja ei sulge dialoogiboksi, ei saa skript jätkata.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    // alert funktsiooni näide
    alert('Hello World!');
  </script>
</body>
</html>
```

Kui eelnev koodijupp käivitatakse, kuvatakse brauseris dialoogiboks, mis sisaldab sõnumit `Hello World!` ja OK-nupp, mida kasutaja saab klõpsata, et dialoogiboks sulgeda.

> Pidage meeles, et kuigi `alert()` on lihtne viis kasutajale teabe edastamiseks, ei pruugi see olla alati parim valik, eriti kui soovite pakkuda kasutajale paremat kasutuskogemust. Mõned kasutajad võivad leida, et `alert()` dialoogiboksid on häirivad või tüütud, ja mobiilseadmetes võivad need dialoogiboksid olla ebamugavad või isegi ei tööta nii nagu oodatud. Seetõttu võib mõnikord olla parem kasutada muid meetodeid teabe esitamiseks, näiteks hüpikaknad või teated otse veebilehel.

## `prompt();`

JavaScripti `prompt()` funktsioon kuvab kasutajale dialoogiboksi, mis palub sisendit. Dialoogiboks sisaldab tekstivälja, kuhu kasutaja saab sisestada teksti, ja kahte nuppu: OK ja Tühista.

Funktsiooni `prompt()` saab kasutada kahe argumendiga: esimene argument on sõnum, mis kuvatakse dialoogiboksis (see on tavaliselt küsimus või juhis), ja teine argument on vaikimisi tekst, mis kuvatakse tekstiväljas (see on valikuline).

Siin on näide `prompt()` funktsiooni kasutamisest:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    // prompt funktsiooni näide
    const name = prompt("Palun sisesta oma nimi", "Siia kirjuta nimi");
  </script>
</body>
</html>

```

See koodijupp kuvab dialoogiboksi, millel on sõnum `Palun sisesta oma nimi` ja vaikimisi tekst `Siia kirjuta nimi`. Kui kasutaja sisestab oma nime ja klõpsab OK, määratakse muutuja `name` väärtuseks kasutaja sisestatud tekst. Kui kasutaja klõpsab Tühista või jätta tekstiväli tühjaks, on `name` väärtuseks `null`.

`prompt()` funktsioon peatab skripti käivitamise, kuni kasutaja on dialoogiboksi sulgenud.

> Samuti pidage meeles, et kuigi `prompt()` on lihtne viis kasutajalt sisendi saamiseks, ei pruugi see olla alati parim valik, eriti kui soovite pakkuda kasutajale paremat kasutuskogemust. Näiteks mobiilseadmetes võivad need dialoogiboksid olla ebamugavad või isegi ei tööta nii nagu oodatud. Seetõttu võib mõnikord olla parem kasutada muid meetodeid sisendi kogumiseks, näiteks HTML-vorme.

## `confirm();`

JavaScripti `confirm()` funktsioon kuvab kasutajale dialoogiboksi, mis sisaldab sõnumit ning kahte nuppu: `OK` ja `Tühista`. Seda funktsiooni kasutatakse tavaliselt kasutajalt nõusoleku küsimiseks enne teatud toimingu sooritamist.

Siin on näide `confirm()` funktsiooni kasutamisest:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    // confirm funktsiooni näide
    const userResponse = confirm("Kas soovid jätkata?");
  </script>
</body>
</html>
```

See koodijupp kuvab dialoogiboksi, millel on sõnum `Kas soovid jätkata?` koos `OK` ja `Tühista` nuppudega. Kui kasutaja klõpsab OK, tagastab `confirm()` funktsioon `true` ja see väärtus omistatakse muutujale `userResponse`. Kui kasutaja klõpsab Tühista, tagastab `confirm()` funktsioon `false`.

Nagu `alert()` ja `prompt()` funktsioonid, nii ka `confirm()` funktsioon peatab skripti käivitamise, kuni kasutaja on dialoogiboksi sulgenud.

> Samuti pidage meeles, et kuigi `confirm()` on lihtne viis kasutajalt nõusoleku saamiseks, ei pruugi see olla alati parim valik, eriti kui soovite pakkuda kasutajale paremat kasutuskogemust. Näiteks mobiilseadmetes võivad need dialoogiboksid olla ebamugavad või isegi ei tööta nii nagu oodatud. Seetõttu võib mõnikord olla parem kasutada muid meetodeid nõusoleku kogumiseks, näiteks kohandatud hüpikaknaid või nõusoleku kastikesi otse veebilehel.

## `console.log();`

JavaScripti `console.log()` funktsioon on brauseri konsoolis või Node.js keskkonnas väljundi kuvamise tööriist. See on eriti kasulik silumisel ja testimisel, kuna see võimaldab teil kuvada muutujate väärtusi, veateateid, objektide omadusi, massiive ja palju muud.

`console.log()` funktsiooni kasutamine on väga lihtne. Lihtsalt kirjutage `console.log()` ja lisage sulgude vahele teave, mida soovite kuvada. See võib olla string, number, boolean, massiiv, objekt või isegi funktsioon.

Näiteks:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    // console.log() näide
    console.log("Hello World!");
  </script>
</body>
</html>
```

Kui avate veebilehitseja konsooli (vajutades F12 ja valides `Console` Chrome'i või Firefox'i arendusriistades) või kui kasutate Node.js keskkonda, kuvatakse seal `console.log()` funktsiooniga väljastatud teave.

Google Chrome veebilehitsejas näeb see välja nii:

![Arendaja tööriistad](files/developerTools.png)
![Konsool](files/console.png)
![Väljund](files/output.png)

> Pidage meeles, et kuigi `console.log()` on väga kasulik arendamise ja silumise ajal, ei tohiks see olla osa teie lõplikust koodist, mida kasutajad näevad. See on mõeldud ainult arendajate kasutamiseks ja selle abil võite paljastada tundlikku teavet, mida te ei soovi avaldada.

[Allikas](https://developer.mozilla.org/en-US/docs/Web/API/console/log)

[Allikas](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

[Allikas](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

[Allikas](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)