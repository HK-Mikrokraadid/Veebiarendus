# Küpsiste (Cookies) kasutamine veebirakendustes

Selles õppematerjalis käsitleme küpsiste ehk cookies'ide põhitõdesid, nende kasutamist veebirakendustes ning selgitame, kuidas küpsiseid turvaliselt käsitleda. Küpsised on väikesed tekstifailid, mida veebiserverid saavad kasutada kasutajate seadmetes informatsiooni talletamiseks ja lugemiseks, mis võimaldab mitmesuguseid kasutajasõbralikke funktsioone.

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Seletada, mis on küpsised ja milleks neid kasutatakse;
- luua, lugeda ja kustutada küpsiseid JavaScripti abil;
- mõista küpsiste turvalisuse ja privaatsuse aspekte.

## Mis on küpsised?

Küpsised on väikesed tekstifailid, mis salvestatakse kasutaja brauseris, kui ta külastab veebisaiti. Need failid sisaldavad informatsiooni, mis võib hõlmata kasutajaseadeid, sessiooni tunnuseid, autentimisinformatsiooni ja muud. Küpsised võimaldavad veebisaitidel "mäletada" teavet kasutaja kohta, et parandada kasutajakogemust ja pakkuda isikupärastatud funktsioone.

## Küpsiste tüübid

- **Sessiooniküpsised**: Need on ajutised küpsised, mis kustutatakse, kui kasutaja sulgeb brauseri. Neid kasutatakse tavaliselt sisselogimise ja ostukorvi andmete meeldejätmiseks.

- **Püsivad küpsised**: Need jäävad kasutaja seadmesse pikemaks ajaks ja neid kasutatakse sageli eelistuste meeldejätmiseks või kasutajate jälgimiseks reklaami eesmärgil.

- **Kolmanda osapoole küpsised**: Need on loodud domeenidest, mis erinevad veebilehe domeenist, mida kasutaja külastab. Neid kasutatakse peamiselt reklaami- ja analüütikateenuste jaoks.

## Küpsiste kasutamine JavaScriptis

### Küpsise loomine

Küpsise loomiseks võite lihtsalt määrata `document.cookie` omaduse. Küpsise kehtivusaja määramiseks tuleb kasutada `expires` või `max-age` atribuute.

```javascript
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2021 23:59:59 GMT";
```

### Küpsise lugemine

Küpsised on kättesaadavad `document.cookie` kaudu semikooloniga eraldatud stringina, millest saab andmeid lugeda.

```javascript
const cookies = document.cookie.split(';');
const username = cookies.find(row => row.startsWith('username')).split('=')[1];
console.log(username);
```

### Küpsise kustutamine

Küpsist saab kustutada, määrates selle aegumiskuupäeva minevikku.

```javascript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

## Küpsiste turvalisus ja privaatsus

Küpsiste kasutamisel tuleb tähele panna turvalisuse ja privaatsuse küsimusi:

- **Turvalisus**: Kasutage `Secure` ja `HttpOnly` lippe, et suurendada küpsiste turvalisust. `HttpOnly` küpsist ei saa JavaScriptiga lugeda, mis aitab kaitsta rist-skriptimise (XSS) rünnakute eest.
- **Privaatsus**: Informeerige kasutajaid, kuidas ja miks küpsiseid kasutatakse, pakkudes selget ja ligipääsetavat privaatsuspoliitikat.

## Kokkuvõte

Küpsised on võimsad tööriistad kasutajakogemuse parandamiseks ja veebirakenduste funktsionaalsuse laiendamiseks. Nende õige kasutamine ja turvalisus on olulised, et tagada kasutaja andmete kaitse ja järgida seadusandlikke nõudeid.

## Allikad

- MDN Web Docs - [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- W3Schools - [JavaScript Cookies](https://www.w3schools.com/js/js_cookies.asp)
