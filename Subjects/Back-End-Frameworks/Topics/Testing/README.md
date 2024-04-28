# Automaattestimine

![Testimine](testing.png)

[Pildi allikas](https://twitter.com/brenankeller/status/1068615953989087232)

Kui me kirjutame mingit programmikoodi, siis me tahame olla kindlad, et see töötab nii nagu me ootame. Selleks on vaja testida. Testimine on protsess, mille käigus kontrollitakse, kas mingi programmikoodi osa töötab nii nagu me ootame. Testimiseks on mitmeid viise, kuid kõige levinumad on automaattestimine ja käsitsi testimine.

Tegelikult tegelevad ilmselt kõik käsitsitestimisega - kui sa kirjutad mingit koodi, siis sa kontrollid, kas see töötab nii nagu sa ootad. Käsitsitestimine on hea, kuid see on aeganõudev ja kui koodi on palju, siis on seda raske teha. Lisaks, kui me arendame mingit rakendust meeskonnana, siis muutub testimine veelgi keerulisemaks. Selleks, et koodi testimine oleks lihtsam, saab kasutada automaattestimist. Automaattestimine aitab meil ka kindlad olla, kui me muudame koodi, et olemasolev kood töötab ikka nii nagu me ootame.

Põhimiõtteliselt on automaattestimine protsess, mille käigus kirjutatakse koodi, mis kontrollib, kas mingi teine kood töötab nii nagu me ootame. Automaattestimiseks on mitmeid raamistikke, kuid kõige levinumad on [Mocha](../mocha/README.md) ja [Jest](https://jestjs.io/).

## Automaattestimise tüübid

Automaattestimisel on mitmeid erinevaid tüüpe. Kõige levinumad on:

- ühiktestimine
- integratsioonitestimine
- süsteemtestimine
- vastupidavustestimine
- jõudlustestimine
- kasutajaliidese testimine
- regressioonitestimine
- A/B testimine
- turvatestimine
- ...

Selle kursuse raames räägime põhiliselt enpointide testimisest, mis sisaldab suures plaanis kahte erinevat testimise tüüpi:

- Turvalisuse testimist - kas kasutaja saab/ei saa ligi mingitele endpointidele, millele on tal luba/ei ole ligipääsuks
- Funktsionaalsuse testimist - kas endpoindid töötavad nii, nagu me eeldame (tagastavad andmeid kujul, mida ootame, tagastavad HTTP vastuskoodid kujul mida ootame, veateated jne.)

## Node.js testiraamistikud

Node.js keskkonnas on mitmeid erinevaid testiraamistikke. Kõige levinumad on:

- [Mocha](../mocha/README.md)
- [Jest](https://jestjs.io/)
- [Supertest](../supertest/README.md)
- [Chai](../chai/README.md)
