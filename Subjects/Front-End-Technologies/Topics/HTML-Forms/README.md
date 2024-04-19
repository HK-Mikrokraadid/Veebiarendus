# HTML-i Vormid: Loomine ja Käsitlemine

Selles õppematerjalis käsitleme HTML-i vormide loomist ja käsitlemist. Vormid on veebilehtede olulised komponendid, mis võimaldavad kasutajatel sisestada andmeid ja interakteeruda veebisaitidega.

## Õpiväljundid

Pärast selle teema läbimist oskad:

- Luua HTML-i vorme kasutades erinevaid sisendelemente;
- Mõista vormide esitamise protsessi;
- Käsitleda vormide andmeid turvaliselt.

## Mis on HTML-i Vorm?

HTML-i vorm koosneb ühest või mitmest sisendväljast, mille kasutajad saavad täita. Vormid võimaldavad kasutajatel esitada teavet, nagu nimed, aadressid ja paroolid, mis on vajalikud ülesannete täitmiseks nagu kasutajakonto loomine, sisselogimine või andmete otsimine.

## HTML-i Vormide Põhielemendid

Vormid kasutavad `<form>` elementi, mis määratleb, kuidas andmed saadetakse serverisse. Siin on mõned peamised elemendid, mida kasutatakse HTML-i vormides:

- **`<form>`**: Defineerib vormi ja selle omadused, nagu `action` (andmete saatmise sihtkoht) ja `method` (andmete saatmise meetod, tavaliselt `GET` või `POST`).
- **`<input>`**: Loo sisendväljad erinevat tüüpi andmete jaoks, nagu tekst, paroolid ja numbrid.
- **`<label>`**: Määrab märgised sisendväljadele, parandades ligipääsetavust ja kasutajakogemust.
- **`<textarea>`**: Võimaldab mitmerealist tekstisisestust.
- **`<button>`**: Loob nupud, nagu esitamis- või tühistamisnupud.
- **`<select>` ja `<option>`**: Loob rippmenüüd valikute jaoks.
- **`<checkbox>` ja `<radio>`**: Loob märkeruudud ja raadionupud valikute jaoks.

## Näide: Lihtne registreerimisvorm

```html
<form action="/submit-form" method="POST">
  <label for="name">Nimi:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Parool:</label>
  <input type="password" id="password" name="password" required>

  <button type="submit">Registreeru</button>
</form>
```

## Vormide Esitamine ja Andmete Käsitlemine

Kui kasutaja vajutab esitamisnuppu, kogutakse vormi andmed ja saadetakse serverisse määratud `action` URL-ile kasutades `method` atribuudis määratud meetodit.

## Turvalisuse Kaalutlused

Vormide andmete käsitlemisel on oluline tagada turvalisus, eriti kui tegemist on tundlike andmetega nagu paroolid ja isikuandmed. Kasutage HTTPS-i, et krüpteerida andmeid transiidi ajal, ja veenduge, et teie serveris olevad andmete käsitlemise meetodid on turvalised.

## Järeldus

HTML-i vormid on veebiarenduse põhielemendid, mis võimaldavad kasutajatel sisestada ja esitada andmeid. Nende õige kasutamine ja käsitlemine võimaldab luua turvalisi ja kasutajasõbralikke veebilehti. Vormide efektiivne rakendamine nõuab nii hea kasutajakogemuse kujundamist kui ka andmete turvalisuse tagamist.

## Allikad

- Mozilla Developer Network (MDN) - [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- W3Schools - [HTML Form Elements](https://www.w3schools.com/html/html_form_elements.asp)
