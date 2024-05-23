# DrawSQL: Ülevaade ja kasutamine

## Sissejuhatus

DrawSQL on veebipõhine rakendus, mis võimaldab kasutajatel luua, visualiseerida ja jagada andmebaasi skeeme. See tööriist on eriti kasulik andmebaasi disaineritele, arendajatele ja meeskondadele, kes peavad oma andmebaasi struktuuri visualiseerima ja dokumenteerima. DrawSQL toetab erinevaid andmebaasihaldussüsteeme ja pakub intuitiivset graafilist liidest skeemide loomiseks ja redigeerimiseks.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Selgitama, mis on DrawSQL ja kuidas see töötab.
- Loome ja visualiseerima andmebaasi skeeme DrawSQL-i abil.
- Kasutama DrawSQL-i reaalajas koostöö funktsioone.
- Eksportima andmebaasi skeeme erinevatesse vormingutesse.

## DrawSQL-i põhimõisted

**Andmebaasi skeem:** Andmebaasi struktuuri visuaalne esitamine, mis sisaldab tabeleid, veerge ja nende vahelisi seoseid.

**Diagrammi redaktor:** Graafiline tööriist, mis võimaldab kasutajatel luua ja redigeerida andmebaasi skeeme lohistamisliidese abil.

**Reaalajas koostöö:** Funktsioon, mis võimaldab mitmel kasutajal töötada sama skeemi kallal samaaegselt, näidates reaalajas tehtud muudatusi.

**Eksportimine:** Võimalus salvestada ja jagada andmebaasi skeemi erinevates vormingutes, nagu SQL skriptid, PNG ja PDF failid.

## DrawSQL-i kasutamine

### Skeemi loomine

#### Registreerimine ja sisse logimine

1. Looge konto DrawSQL-i veebisaidil ja logige sisse.
2. Pärast sisse logimist saate luua uusi projekte ja skeeme.

#### Uue projekti loomine

1. Klõpsake nupul "Create new project".
2. Sisestage projekti nimi ja valige andmebaasi tüüp (näiteks MySQL, PostgreSQL, SQLite jne).
3. Klõpsake "Create Project", et alustada skeemi loomist.

#### Tabelite lisamine

1. Kasutage lohistamisliidest, et lisada uusi tabeleid oma skeemi.
2. Määratlege iga tabeli veerud, andmetüübid ja piirangud (näiteks esmane võti, unikaalsed veerud jne).

Näide:

- Tabel: **Users**
  - Veerg: `id` (INT, PRIMARY KEY, AUTO_INCREMENT)
  - Veerg: `username` (VARCHAR, UNIQUE)
  - Veerg: `email` (VARCHAR, UNIQUE)
  - Veerg: `password` (VARCHAR)

#### Seoste määratlemine

1. Lisage tabelite vahelised seosed, et visualiseerida võõrvõtmeid ja relatsioone.
2. Klõpsake tabeli veerul, mida soovite seose määratlemiseks kasutada, ja lohistage see teise tabeli vastavale veerule.

Näide:

- Tabel: **Posts**
  - Veerg: `id` (INT, PRIMARY KEY, AUTO_INCREMENT)
  - Veerg: `user_id` (INT, FOREIGN KEY viitab `Users.id`)
  - Veerg: `title` (VARCHAR)
  - Veerg: `content` (TEXT)

### Skeemi eksportimine

1. Kui olete skeemi valmis saanud, salvestage see.
2. Klõpsake eksportimise nupul ja valige soovitud vorming (SQL, PNG, PDF).
3. Määrake eksportimise parameetrid ja laadige fail alla.

### Reaalajas koostöö

1. Kutsuge oma meeskonnaliikmed projektiga liituma, kasutades nende e-posti aadresse.
2. Jagage projektiga seotud linki, et teised saaksid liituda ja teha reaalajas muudatusi.
3. Kasutage kommentaaride ja märkuste funktsioone, et suhelda ja anda tagasisidet tehtud muudatuste kohta.

### Integreerimine teiste tööriistadega

DrawSQL võimaldab integreerimist erinevate tööriistade ja platvormidega, nagu GitHub, Jira ja Confluence.

#### GitHub integratsioon

1. Avage projekti seaded ja valige integratsioonid.
2. Valige GitHub ja järgige juhiseid, et ühendada DrawSQL oma GitHubi kontoga.
3. Konfigureerige sünkroonimisvalikud ja määrake, millised skeemid ja failid soovite oma GitHubi reposse sünkroonida.

## Allikad

- [DrawSQL Official Website](https://drawsql.app/)
- [DrawSQL Documentation](https://docs.drawsql.app/)
- [GitHub Integration Guide](https://docs.drawsql.app/integrations/github)
- [Database Design with DrawSQL](https://medium.com/@drawsqlapp/database-design-with-drawsql-1c2f09efdbd0)

## Kontrollküsimused või harjutus

- Mis on DrawSQL ja milleks seda kasutatakse?
- Kirjeldage protsessi, kuidas luua uus projekt ja andmebaasi skeem DrawSQL-i abil.
- Kuidas lisada ja määratleda tabelite vahelised seosed DrawSQL-is?
- Kuidas eksportida andmebaasi skeemi SQL skriptina DrawSQL-i abil?
- Kuidas kasutada DrawSQL-i reaalajas koostöö funktsioone?

## Harjutus

- Looge uus DrawSQL konto ja logige sisse.
- Looge projekt nimega "Blog Database" ja lisage järgmised tabelid ja seosed:
  - Tabel: **Users**
    - Veerud: `id`, `username`, `email`, `password`
  - Tabel: **Posts**
    - Veerud: `id`, `user_id`, `title`, `content`
    - Seosed: `user_id` viitab tabeli `Users` veerule `id`
- Salvestage skeem ja eksportige see SQL skriptina.
- Kutsuge vähemalt üks meeskonnaliige oma projekti ja tehke koos mõni muudatus reaalajas.
- Integreerige DrawSQL oma GitHubi kontoga ja sünkroonige loodud skeem GitHubi reposse.