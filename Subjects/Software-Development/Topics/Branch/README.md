# Harudega töötamine

![Harudega töötamine](Working-With-Branches.webp)

## Õpiväljundid

Pärast selle teema läbimist oskad:


## Mis on haru?

Haru (*branch*) on tarkvaraversioonide haldamise kontseptsioon, mis võimaldab arendajatel luua tarkvara koodipaasist isoleeritud koopiaid. Harude loomine võimaldab arendajatel töötada uute funktsioonide, paranduste või eksperimentide kallal, ilma et see mõjutaks peamist koodibaasi.

Harudega töötamine on oluline oskus tarkvaraarenduses, kuna see võimaldab arendajatel teha järgmist ilma peamist koodibaasi mõjutamata:

- **Uute funktsioonide arendamine:** Arendaja saab harude abil töötada uute funktsionaalsute kallal isoleeritud keskkonnas.
- **Vigade parandamine:** Harude kasutamine võimaldab arendajatel tegeleda leitud vigade parandamisega samal ajal, kui peamine koodibaas on stabiilne.
- **Koodi eksperimenteerimine:** Harude loomine võimaldab arendajatel eksperimenteerida turvaliselt uute ideedega.
- **Koodi ülevaatamine:** Harude loomine võimaldab arendajatel luua koodi ülevaatamiseks isoleeritud keskkonna.
- **Koodi testimine:** Harude loomine võimaldab arendajatel testida koodi erinevates keskkondades.

## Harude tüübid

Tarkvaraversioonide haldamise süsteemides on mitmeid harude tüüpe, mida saab kasutada erinevate eesmärkide jaoks. Kasutatavad harude nimetused ja tüübid võivad erineda vastavalt koodihaldussüsteemile, organisatsiooni praktikatele ja projekti vajadustele. Mõned levinumad harude tüübid on:

- **Peamine haru (*master branch* või *main branch*):** Peamine haru on koodibaasi põhiline haru, kus asub stabiilne kood. See on tavaliselt haru, kust teised harud hargnevad.
- **Funktsiooniharud (*feature branches*, *development branch*):** Funktsiooniharud on harud, mis on loodud uute funktsioonide arendamiseks. Need harud on ajutised ja neid kasutatakse uute funktsioonide arendamiseks.
- **Vigade parandamise harud (*bug fix branches*, *hotfix branches*):** Vigade parandamise harud on harud, mis on loodud vigade parandamiseks peamises koodibaasis.

## Kuidas harude loomine käib

Harude loomine käib tavaliselt järgmiselt:

1. **Haru loomine:** Arendaja loob uue haru, kasutades koodihaldussüsteemi käsklusi või tööriistu.
2. **Harusse vahetamine:** Arendaja vahetab oma töökeskkonna harule, millel ta soovib töötada.
3. **Töö harus:** Arendaja teeb muudatusi ja arendab uusi funktsioone haru koodibaasis.
4. **Tõmbetaotluse (*pull request*) loomine:** Arendaja loob tõmbetaotluse, et ühendada haru muudatused peamise koodibaasiga.
5. **Tõmbetaotluse ülevaatamine ja ühendamine:** Tõmbetaotlus läbib ülevaatamise ja kui see on heaks kiidetud, ühendatakse muudatused peamise koodibaasiga.
6. **Haru kustutamine:** Pärast muudatuste ühendamist peamise koodibaasiga võib haru kustutada.

## Harude loomise protsessi näide

Alljärgnev näide näitab, kuidas harude loomise protsess võib välja näha kasutades Github-i ja Github Desktop-i.

Alguses on olemas peamine haru (*main branch*), kus asub stabiilne kood. Arendaja soovib luua uue funktsiooni jaoks haru, et arendada seda isoleeritud keskkonnas.

![Main haru](main.png)

Seejärel loob arendaja uue haru, mille nimi on `feature/new-feature`, ja avaldab selle kasutades Github Desktop-i.

![New Branch](new-branch-button.png)

![Create a Branch](create-branch-button.png)

![Publish branch](publish-branch.png)

Seejärel avab arendaja oma koodiredaktori, milles on aktiivne juba uus haru, ja hakkab arendama uut funktsiooni.

![Open in VS-Code](open-in-editor.png)

![VS Code](VS-Code.png)

![New Function](new-function.png)

Kui uus kood on kirjutatud, teeb arendaja `commit`-i ja `push`-ib muudatused uude harusse.

![Commit](commit.png)

![Push](push.png)

