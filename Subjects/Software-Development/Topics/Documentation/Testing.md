# Näide testimisdokumentatsioonist

## 1. Ülevaade

**Projekti nimi:** Online-ülesannete jälgimise süsteem

Testimisdokumentatsioon sisaldab kõiki olulisi detaile süsteemi testimise protsessi kohta, et tagada selle kvaliteet ja vastavus nõuetele. Testimisdokumentatsioon hõlmab testimise ulatust, eesmärke, metoodikat ja testjuhtumeid.

## 2. Testimise eesmärk ja ulatus

Testimise eesmärk on tagada, et Online-ülesannete jälgimise süsteem vastab kõikidele nõuetele, töötab korrektselt ja on kasutajatele turvaline. Testimisel keskendutakse järgmistele valdkondadele:

- **Funktsionaalne testimine:** Kontrollitakse, kas kõik funktsioonid töötavad vastavalt spetsifikatsioonile.
- **Mittefunktsionaalne testimine:** Hinnatakse süsteemi jõudlust, skaleeritavust ja kasutusmugavust.
- **Turvatestimine:** Tagatakse, et süsteemi andmed on kaitstud ja ligipääsupiirangud toimivad korrektselt.

## 3. Testimise tüübid

### 3.1. Funktsionaalne testimine

- **Registreerimine ja sisselogimine:** Kontrollitakse, kas kasutajad saavad süsteemi registreerida ja sisse logida, kasutades korrektseid volitusi.
- **Rollipõhine juurdepääs:** Veendutakse, et õpetajad ja õpilased saavad ligi ainult neile ettenähtud funktsioonidele.
- **Ülesannete haldamine:** Kontrollitakse, kas õpetajad saavad ülesandeid luua, muuta ja määrata ning kas õpilased saavad neile vastata.

## 3.2. Mittefunktsionaalne testimine

- **Jõudlustestimine:** Süsteemi testitakse suure kasutajakoormusega, et tagada selle töökindlus kuni 500 üheaegse kasutaja korral.
- **Kasutusmugavus:** Testijad hindavad, kas süsteemi kasutajaliides on intuitiivne ja hõlpsasti kasutatav.

### 3.3. Turvatestimine

- **Autentimine ja autoriseerimine:** Kontrollitakse, kas ainult volitatud kasutajad saavad süsteemi kasutada ja kas rollipõhised õigused on korrektselt rakendatud.
- **Andmekaitse:** Testitakse, kas kasutaja andmed ja paroolid on turvaliselt krüpteeritud.

## 4. Testjuhtumid

| Testjuhtumi ID | Kirjeldus                                                              | Eeldatav tulemus                                                    | Tulemus |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- |
| TC-01          | Kasutaja registreerimine kehtiva e-posti ja parooliga                  | Kasutaja saab edukalt registreeritud                                | Pass    |
| TC-02          | Kasutaja sisselogimine vale parooliga                                  | Kuvatakse veateade "Vale parool"                                    | Pass    |
| TC-03          | Õpetaja loob uue ülesande ja määrab selle õpilastele                   | Ülesanne on edukalt määratud ja õpilased näevad seda oma nimekirjas | Pass    |
| TC-04          | Õpilane esitab ülesande vastuse                                        | Vastus on edukalt salvestatud ja nähtav õpetajale                   | Pass    |
| TC-05          | Õpetaja proovib luua ülesannet ilma sisselogimata                      | Kuvatakse veateade "Sisselogimine on vajalik"                       | Pass    |
| TC-06          | Õpilane proovib sisselogimist vale e-postiga                           | Kuvatakse veateade "Vale e-post"                                    | Pass    |
| TC-07          | Õpetaja muudab olemasoleva ülesande tähtaega                           | Tähtaeg uuendatakse ja on õpilastele nähtav                         | Pass    |
| TC-08          | Õpilane proovib esitada vastust pärast tähtaja möödumist               | Kuvatakse veateade "Tähtaeg on möödunud"                            | Pass    |
| TC-09          | Õpetaja kustutab ülesande                                              | Ülesanne kustutatakse ja see ei ole enam õpilaste nimekirjas        | Pass    |
| TC-10          | Õpilane vaatab tagasisidet esitatud ülesandele                         | Tagasiside on nähtav õpilasele                                      | Pass    |
| TC-11          | Kasutaja lähtestab parooli, kasutades "Unustasid parooli?" funktsiooni | Kasutaja saab parooli edukalt lähtestada                            | Pass    |
| TC-12          | Õpetaja määrab ülesande ainult kindlale õpilasgrupile                  | Ainult valitud õpilased näevad ülesannet oma nimekirjas             | Pass    |
| TC-13          | Süsteemi jõudluse testimine 500 samaaegse kasutajaga                   | Süsteem töötab sujuvalt ilma jõudluse languseta                     | Pass    |
| TC-14          | Kasutaja proovib pääseda ligi teise kasutaja andmetele                 | Ligipääs keelatakse ja kuvatakse veateade                           | Pass    |
| TC-15          | Õpetaja annab ülesandele tagasisidet ja määrab hinde                   | Tagasiside ja hinne on õpilasele nähtav                             | Pass    |

## 5. Testimise tööriistad ja keskkond

- **Testimise tööriistad:** Kasutatakse Postmanit API testimiseks, Seleniumit automaattestide läbiviimiseks ja JMeterit jõudlustestide jaoks.
- **Testimiskeskkond:** Testimine viiakse läbi spetsiaalses testimiskeskkonnas, mis on sarnane tootmiskeskkonnaga, et tagada realistlikud tulemused.

## 6. Vead ja probleemide jälgimine

Kõik testimise käigus leitud vead ja probleemid logitakse vigade jälgimise süsteemi (nt Jira). Iga viga klassifitseeritakse vastavalt selle tõsidusele (kriitiline, kõrge, keskmine, madal) ning määratakse arendajatele parandamiseks.

## 7. Testimise ajakava

Testimine viiakse läbi järgmistes etappides:

1. **Funktsionaalne testimine:** 2 nädalat
2. **Mittefunktsionaalne testimine:** 1 nädal
3. **Turvatestimine:** 1 nädal

## 8. Kokkuvõte

Testimisdokumentatsioon tagab, et süsteemi arendamisel järgitakse kvaliteedinõudeid ning kõik funktsioonid ja turvaaspektid on põhjalikult kontrollitud. Pidev testimine aitab tagada, et süsteem on kasutusvalmis ja vastab kõigile nõuetele.
