# Näide tarkvaranõuete spetsifikatsioonist (_Software Requirements Specification_)

## 1. Ülevaade

- **Projekti nimi:** Online-ülesannete jälgimise süsteem
- **Eesmärk:** Luua platvorm, kus õpetajad saavad ülesandeid jagada ja jälgida õpilaste edenemist ning kus õpilased saavad esitada oma vastuseid ja saada tagasisidet.

## 2. Funktsionaalsed nõuded

### 2.1. Kasutaja autentimine ja autoriseerimine

- **Nõue 2.1.2:** Süsteem peab pakkuma kasutajate registreerimise ja sisselogimise funktsionaalsust, kasutades e-posti ja parooli.
- **Nõue 2.1.2:** Süsteem peab võimaldama erinevaid kasutajarolle: `õpetaja` ja `õpilane`.
- **Nõue 2.1.3:** Õpetajad saavad luua ja hallata õpilaste kontosid.

### 2.2. Ülesannete loomine ja haldamine

- **Nõue 2.2.1:** Õpetajad saavad lisada uusi ülesandeid, mis sisaldavad ülesande kirjeldust, tähtaega ja vajalikke ressursse.
- **Nõue 2.2.2:** Õpetajad saavad määrata ülesande konkreetsele õpilasgrupile.
- **Nõue 2.2.3:** Õpilased peavad saama esitada oma vastused otse süsteemis ja lisada vajalikke faile.

### 2.3. Tagasiside ja hindamine

- **Nõue 2.3.1:** Õpetajad peavad saama anda tagasisidet iga ülesande kohta ning määrata hinde.
- **Nõue 2.3.2:** Õpilased saavad vaadata õpetaja antud tagasisidet ja hindeid oma kasutajaprofiilis.

## 3. Mittefunktsionaalsed nõuded

### 3.1. Jõudlus

- **Nõue 3.1.1:** Süsteem peab olema võimeline käsitlema kuni 500 üheaegset kasutajat ilma jõudluse languseta.

### 3.2. Turvalisus

- **Nõue 3.2.1:** Kõik kasutaja andmed krüpteeritud ja paroolid peavad olema räsitud.
- **Nõue 3.2.2:** Süsteem peab pakkuma kasutajatele rollipõhiseid õigusi, et tagada andmete kaitse ja privaatsus.

## 4. Kasutajate piirangud ja keelud

### 4.1. Kasutajate tegevuste piirangud

- **Nõue 4.1.1:** Õpilased ei tohi muuta ega kustutada õpetajate loodud ülesandeid.
- **Nõue 4.1.2:** Õpilased ei tohi muuta teiste õpilaste esitatud vastuseid ega vaadata nende privaatseid andmeid.
- **Nõue 4.1.3:** Õpetajad ei tohi muuta õpilaste kasutajakontosid ilma nende teadliku nõusolekuta (välja arvatud kontode lukustamine, kui see on vajalik).
- **Nõue 4.1.4:** Kõik kasutajad ei tohi proovida ligi pääseda süsteemi varjatud osadele või manipuleerida süsteemi koodiga.
- **Nõue 4.1.5:** Kasutajad ei tohi edastada väärtusi, mis sisaldavad pahatahtlikku koodi või viiruseid, mis võiksid süsteemi kahjustada.

## 5. Süsteemi liidesed

### 5.1. Kasutajaliides (UI)

- **Nõue 5.1.1:** Õpilased ja õpetajad saavad kasutada veebibrauserit ülesannete vaatamiseks ja haldamiseks.
- **Nõue 5.1.2:** Kasutajaliides peab olema lihtne ja intuitiivne, et tagada kasutusmugavus.

### 5.2. API liidesed

- **Nõue 5.2.1:** Süsteem peab pakkuma RESTful API-d, et võimaldada kolmandate osapoolte rakendustel liidestuda.

## 6. Piirangud ja eeldused

- **Eeldus 1:** Kõigil kasutajatel on juurdepääs internetiühendusega seadmele.
- **Piirang 1:** Süsteem ei toeta praegu mobiilirakendust ja on optimeeritud kasutamiseks lauaarvutites.
