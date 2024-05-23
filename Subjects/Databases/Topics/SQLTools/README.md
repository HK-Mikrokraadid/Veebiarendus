# SQLTools VS Code pistikprogramm: Ülevaade ja kasutamine

## Sissejuhatus

SQLTools on populaarne Visual Studio Code (VS Code) pistikprogramm, mis pakub võimsat ja kasutajasõbralikku SQL andmebaasi haldamise tööriista otse VS Code-i keskkonnas. See võimaldab arendajatel kirjutada ja käivitada SQL päringuid, hallata andmebaase ja vaadata andmete tulemusi ilma VS Code-ist lahkumata. SQLTools toetab mitmeid andmebaasihaldussüsteeme, sealhulgas MySQL, PostgreSQL, SQLite ja paljud teised.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Installeerima ja seadistama SQLTools pistikprogrammi VS Code-is.
- Loome ja haldama andmebaasiühendusi SQLToolsi abil.
- Kirjutama ja käivitama SQL päringuid otse VS Code-is.
- Kasutama SQLToolsi erinevaid funktsioone andmebaasi haldamiseks ja analüüsiks.

## SQLToolsi installimine ja seadistamine

### SQLTools installimine

1. **VS Code'i avamine:** Avage oma Visual Studio Code editor.
2. **Pistikprogrammi installimine:** Klõpsake küljeribal olevat Extensions ikooni (või vajutage `Ctrl+Shift+X`), et avada Extensions paneel.
3. **Otsing:** Sisestage otsinguribale "SQLTools".
4. **Installimine:** Valige "SQLTools" (arendaja: Matheus Teixeira) ja klõpsake nuppu "Install".

### Andmebaasiühenduse loomine

1. **Uue ühenduse lisamine:** Klõpsake SQLTools ikoonil küljeribal või kasutage kiirklahve `Ctrl+Shift+P` ja otsige käsku "SQLTools: New Connection".
2. **Ühenduse konfiguratsioon:** Täitke ühenduse konfiguratsioonivorm vastavalt teie andmebaasi andmetele.
   - **Connection name:** Sisestage ühenduse nimi.
   - **Driver:** Valige sobiv draiver (näiteks MySQL, PostgreSQL jne).
   - **Server:** Sisestage serveri aadress (näiteks `localhost`).
   - **Database:** Sisestage andmebaasi nimi.
   - **Username:** Sisestage andmebaasi kasutajanimi.
   - **Password:** Sisestage andmebaasi parool.
3. **Ühenduse testimine ja salvestamine:** Klõpsake nupul "Test Connection", et veenduda ühenduse toimimises, ja seejärel klõpsake "Save Connection".

## SQL päringute kirjutamine ja käivitamine

### SQL failide loomine

1. **Uue SQL faili loomine:** Klõpsake VS Code-i peamenüüs "File" -> "New File" ja salvestage fail laiendiga `.sql` (näiteks `queries.sql`).
2. **SQL päringute kirjutamine:** Kirjutage oma SQL päringud faili.

Näide:

```sql
SELECT * FROM Users;
```

### SQL päringute käivitamine

1. **Ühenduse valimine:** Veenduge, et olete valinud õige andmebaasiühenduse. Seda saate teha, klõpsates SQLToolsi ikoonil küljeribal ja valides ühenduse nime.
2. **Päringu käivitamine:** Asetage kursor soovitud päringu kohale ja vajutage `Ctrl+Enter` või kasutage SQLTools kontekstimenüüd, et käivitada päring.
3. **Tulemuste vaatamine:** SQLToolsi tulemuspaneel avaneb ja kuvab päringu tulemused.

## SQLToolsi funktsioonid

### Automaatne täiendamine

SQLTools pakub automaatse täiendamise funktsiooni, mis aitab SQL koodi kirjutamisel. Kui kirjutate SQL käske, pakub SQLTools soovitusi tabelite, veergude ja SQL võtmesõnade jaoks.

### Andmete vaatamine ja redigeerimine

SQLTools võimaldab vaadata ja redigeerida andmeid otse VS Code-is. Pärast päringu käivitamist kuvatakse tulemused tabelina, kus saate andmeid redigeerida ja muudatusi salvestada.

### Tabelite ja skeemide sirvimine

SQLTools võimaldab sirvida andmebaasi tabeleid ja skeeme otse VS Code-i keskkonnas. Avage SQLToolsi külgriba ja navigeerige läbi andmebaasi struktuuri, et näha tabeleid, veerge ja seoseid.

### Päringute ajalugu

SQLTools salvestab käivitatud päringute ajaloo, võimaldades teil kiiresti juurde pääseda varem käivitatud päringutele ja neid uuesti käivitada.

## Allikad

- [SQLTools Official Documentation](https://vscode-sqltools.mteixeira.dev/)
- [Visual Studio Code Official Documentation](https://code.visualstudio.com/docs)
- [SQLTools GitHub Repository](https://github.com/mtxr/vscode-sqltools)

## Kontrollküsimused või harjutus

- Mis on SQLTools ja milleks seda kasutatakse?
- Kuidas installeerida ja seadistada SQLTools pistikprogrammi VS Code-is?
- Kirjeldage, kuidas luua ja salvestada andmebaasiühendust SQLTools-is.
- Kuidas kirjutada ja käivitada SQL päringuid otse VS Code-is, kasutades SQLToolsi?
- Millised on SQLToolsi peamised funktsioonid andmebaasi haldamiseks?

## Harjutus

- Installeerige SQLTools pistikprogramm VS Code-i.
- Looge uus andmebaasiühendus oma kohaliku MySQL andmebaasiga.
- Looge uus SQL fail ja kirjutage päring, mis valib kõik kirjed tabelist `Users`.
- Käivitage päring ja vaadake tulemusi SQLToolsi tulemuspaneelis.
- Sirvige andmebaasi skeemi ja vaadake olemasolevaid tabeleid ja veerge.
- Proovige SQLToolsi automaatse täiendamise funktsiooni, kirjutades erinevaid SQL päringuid.