# Viies loeng

Peale eelmise loengu meenutamist räägime selles loengus autentimisest ja autoriseerimisest. Vaatame, kuidas autentimist ja autoriseerimist Front-Endis rakendatakse. Lisaks räägime sellest, kuidas me saame veebilehitsejas andmeid salvestada ja kuidas neid andmeid kasutada. Lõpuks vaatame, kuidas serverisse päringuid tehes andmeid päringu päisesse lisada.

## Viienda loengu materjalid ja viited

- [Neljas loeng](../Lesson-04/README.md)
- [Viienda loengu slaidid](Slides.md)
- [Viienda loengu salvestus]()
- [Viiendas loengus kirjutatud kood]()
- [Kuues loeng](../Lesson-06/README.md)
- [Zoomi link]()

### Teemad

- [Autentimine ja autoriseerimine](../../../Subjects/Back-End-Frameworks/Topics/Auth/README.md)
- [Veebilehitseja mälutehnoloogiad](../../../Subjects/Front-End-Technologies/Topics/Browser-Memory/README.md)
- [JWT](../../../Subjects/Back-End-Frameworks/Topics/JWT/README.md)
- [Päiste saatmine Axiose abil](../../../Subjects/Front-End-Technologies/Topics/Axios/README.md#päiste-saatmine-axiosega)
- Autentimise ja autoriseerimise rakendamine

### Kodune töö

Loe läbi loengus räägitud teemade peatükid:

- [Autentimine ja autoriseerimine](https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Back-End-Frameworks/Topics/Auth/README.md)
- [Veebilehitseja mälutehnoloogiad](https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Front-End-Technologies/Topics/Browser-Memory/README.md)
- [JWT](https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Back-End-Frameworks/Topics/JWT/README.md)
- [Päiste saatmine Axiose abil](https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Front-End-Technologies/Topics/Axios/README.md#p%C3%A4iste-saatmine-axiosega)

#### Kodune ülesanne

Rakenda oma blogi rakenduses sisselogimine ja kasuta `JWT`-d edasiste päringute tegemiseks serverisse:

- lisa vorm kasutaja e-maili ja parooliga sisselogimiseks;
- kasuta Axios-t või mõnda muud tehnoloogiat, et saata päring serverisse;
- serveri poolt saadud vastuses on `token`, mis salvesta veebilehitseja mällu;
- saada päringuid näiteks serveri `/posts` lõpp-punkti, lisades päringu päisesse eelnevast vastusest saadud `token`-i;

> Kasuta `https://blog.hk.tlu.ee` API-t.
>
> Kasutaja e-mail: `user@user.ee`, parool: `user`

## Näidis-API

Kasutame näidis-API-d, mis on loodud selleks, et saaksime autentimist ja autoriseerimist harjutada ja andmeid pärida ja serverisse saata. API on loodud Node.js abil ja kasutab JWT-d autentimiseks ja autoriseerimiseks.

API töötab aadressil: `https://blog.hk.tlu.ee`

API dokumentatsioon on saadaval aadressil: `https://blog.hk.tlu.ee/api-docs`

Kellel huvi on, siis API kood on saadaval siin: [Näidis API](https://github.com/HK-Mikrokraadid/Example-API)
