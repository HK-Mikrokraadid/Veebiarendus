# Näide hooldus- ja abijuhendist

## 1. Ülevaade

**Projekti nimi:** Online-ülesannete jälgimise süsteem

Hooldus- ja abijuhend kirjeldab, kuidas hoida süsteem töökorras, uuendada komponente, teha varukoopiaid ning pakkuda kasutajatuge. See juhend on mõeldud süsteemi administraatoritele ja hooldustöötajatele, et tagada süsteemi stabiilsus ja kasutajate rahulolu.

## 2. Hooldusprotseduurid

### 2.1. Süsteemi uuendamine

- **Komponentide uuendamine:** Kontrollige regulaarselt Node.js, PostgreSQL ja teiste sõltuvuste uusimaid versioone. Süsteemi turvalisuse ja toimivuse tagamiseks tuleks kõik uuendused teha testimiskeskkonnas enne tootmiskeskkonda rakendamist.
- **Koodi uuendamine:** Kloonige uusim koodirepositooriumi versioon ja viige see tootmiskeskkonda. Kasutage versioonikontrolli süsteemi (nt Git), et tagada kõikide muudatuste jälgitavus.

### 2.2. Varundamine

- **Andmebaasi varundamine:** Kasutage PostgreSQL varundamise tööriistu, et teha automaatseid varukoopiaid vähemalt üks kord päevas. Hoidke varukoopiaid turvalises kohas, et tagada andmete taastamise võimalus ootamatute probleemide korral.
- **Koodi varundamine:** Veenduge, et kogu kood on varundatud Git-repositooriumis. Jälgige ka muudatusi ja tagage, et kõik olulised muudatused oleksid nõuetekohaselt dokumenteeritud.

### 2.3. Logide haldamine

- **Logimine:** Süsteemis logitakse kõik sündmused ja vead. Kontrollige regulaarselt logifaile, et avastada võimalikud probleemid ja vältida süsteemirikete esinemist.
- **Logide puhastamine:** Vanemate logide eemaldamine aitab säilitada süsteemi jõudlust ja vältida salvestusruumi puudumist. Konfigureerige automaatne logide puhastamise mehhanism, et hoida alles ainult viimased logid.

## 3. Kasutajatugi

### 3.1. Tugiteenused

- **E-posti tugi:** Kasutajad saavad võtta ühendust tugitiimiga e-posti teel aadressil <tugi@ulesandesysteem.ee>. Vastake kasutajaküsimustele ja probleemidele esimesel võimalusel, eelistatavalt 24 tunni jooksul.
- **Telefonitugi:** Kasutajatel on võimalus helistada kasutajatoele tööpäeviti kell 9:00-17:00 numbril +372 123 4567. Tagage, et keegi on alati saadaval, et aidata kasutajatel kiiresti lahendada nende probleemid.

### 3.2. Korduma Kippuvad Küsimused (KKK)

- **Kuidas lähtestada parool?** Kasutajad saavad parooli lähtestada, klõpsates sisselogimislehel lingil "Unustasid parooli?" ja järgides edasisi juhiseid.
- **Mida teha, kui ülesannet ei kuvata?** Kui ülesannet ei kuvata, peaks kasutaja kontrollima, kas ta on õigesti sisse loginud ja kas ülesanne on määratud tema grupile.

## 4. Ennetavad hooldustööd

- **Jõudluse monitooring:** Kasutage jõudluse jälgimise tööriistu, nagu Prometheus või Grafana, et jälgida süsteemi jõudlust ja vältida võimalikke pudelikaelu.
- **Turvalisuse uuendused:** Paigaldage regulaarselt turvapaigad nii operatsioonisüsteemile kui ka tarkvarakomponentidele, et vältida haavatavusi ja tagada süsteemi turvalisus.

## 5. Hooldusgraafik

- **Igapäevane hooldus:** Kontrollige logisid ja tehke andmebaasi varukoopiaid.
- **Iganädalane hooldus:** Kontrollige süsteemi jõudlust ja tehke vajalikke optimeerimisi.
- **Igakuine hooldus:** Uuendage süsteemi komponente, testige uusi funktsionaalsusi ja paigaldage turvapaigad.

## 6. Probleemide lahendamine

- **Levinud probleemid:** Kui kasutajad teatavad sisselogimisprobleemidest, kontrollige, kas parool on õigesti sisestatud ja kas kasutaja konto on aktiivne.
- **Vigade lahendamine:** Kõik avastatud vead logitakse vigade jälgimise süsteemi (nt Jira). Parandage vead vastavalt nende tõsidusele ning viige muudatused läbi testimiskeskkonnas enne tootmiskeskkonda paigaldamist.

## 7. Kokkuvõte

Hooldus- ja abijuhend aitab süsteemi administraatoritel tagada süsteemi stabiilsus ja turvalisus, pakkudes samal ajal kasutajatele vajalikku tuge. Regulaarne hooldus ja ennetavad meetmed on võtmetähtsusega, et hoida süsteem töökorras ja kasutajasõbralikuna.
