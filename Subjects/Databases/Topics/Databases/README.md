# Üldine ülevaade andmebaasidest

## Sissejuhatus

Andmebaasid on arvutisüsteemide süda, võimaldades andmete organiseeritud salvestamist, haldamist ja otsimist. Tänapäeva maailmas, kus andmed on ettevõtete ja organisatsioonide jaoks kriitilise tähtsusega, on andmebaaside tundmine ja kasutamine hädavajalik oskus. Selles peatükis anname ülevaate andmebaaside põhimõistetest, tüüpidest ja nende kasutusvõimalustest.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- selgitama, mis on andmebaas ja miks need on olulised;
- erinevalt andmebaasi tüüpe ja nende omadusi;
- kirjeldama, kuidas andmebaasid töötavad ja millised on nende peamised komponendid;
- tuvastama andmebaaside kasutusjuhtumid erinevates valdkondades;
- selgitama, kuidas toimub andmebaasi haldus ja hooldus.

## Andmebaaside põhimõisted

- **Andmebaas:** Organiseeritud kogum andmetest, mis on struktureeritud nii, et neid oleks lihtne hallata, uuendada ja otsida. Andmebaasid võimaldavad tõhusat andmete hoiustamist ja neile juurdepääsu.
- **Andmebaasisüsteem:** Tarkvara, mis võimaldab luua, hallata ja kasutada andmebaase. Seda nimetatakse andmebaaside haldussüsteemiks (DBMS - Database Management System).
- **Tabel:** Andmebaasi põhikomponent, mis koosneb ridadest ja veergudest. Iga rida esindab üksikut kirjet ja iga veerg esindab kirje atribuuti.
- **SQL (Structured Query Language):** Standardne päringukeel andmebaaside haldamiseks ja neile päringute tegemiseks.

## Andmebaasi tüübid

- **Relatsioonilised andmebaasid (RDBMS):** Andmebaasid, mis korraldavad andmed tabelite kujul ja kasutavad SQL-i. Näited: MySQL, PostgreSQL, Oracle.
- **Mitte-relatsioonilised andmebaasid (NoSQL):** Andmebaasid, mis võivad kasutada erinevaid andmestruktuure nagu dokumentide, võtme-väärtuse paaride, graafide või veergude salvestamist. Näited: MongoDB, Cassandra, Redis.
- **Hübriid andmebaasid:** Kombineerivad relatsiooniliste ja mitte-relatsiooniliste andmebaaside omadusi, pakkudes paindlikkust ja jõudlust. Näited: Microsoft Azure Cosmos DB.

## Andmebaasi komponendid

- **Tabelid:** Struktureeritud andmekogumid, mis koosnevad ridadest ja veergudest.
- **Vaatamised (Views):** Salvestatud päringud, mis esitavad andmeid määratud viisil, kuid ei salvesta andmeid eraldi.
- **Indeksid:** Struktuurid, mis kiirendavad andmete otsimist tabelites.
- **Päringud:** SQL laused, mida kasutatakse andmete otsimiseks, sisestamiseks, uuendamiseks ja kustutamiseks.
- **Skeemad:** Andmebaasi struktuuri ja selle komponentide määratlus.

## Andmebaaside kasutusjuhtumid

- **Ärirakendused:** Finantsandmete haldamine, kliendihaldussüsteemid (CRM), logistika ja varude haldamine.
- **E-kaubandus:** Tooteandmete, tellimuste ja klientide andmete haldamine.
- **Haridus:** Õpilaste andmed, kursused ja eksamitulemused.
- **Tervishoid:** Patsiendiandmete ja meditsiiniliste kirjete haldamine.

## Andmebaasi haldus ja hooldus

- **Andmete varundamine ja taastamine:** Kriitiline andmete kaotsimineku vältimiseks ja süsteemi taastamiseks hädaolukorras.
- **Jõudluse optimeerimine:** Andmebaasi päringute ja operatsioonide optimeerimine kiirema soorituse tagamiseks.
- **Turvalisus:** Andmebaasi ja andmete kaitsmine volitamata juurdepääsu eest, kasutades autentimist ja autoriseerimist.
- **Andmete terviklus:** Tagada andmete täpsus ja järjepidevus läbi piirangute ja reeglite rakendamise.

## Allikad

- [Official MySQL Documentation](https://dev.mysql.com/doc/)
- [PostgreSQL Official Documentation](https://www.postgresql.org/docs/)
- [MongoDB Official Documentation](https://docs.mongodb.com/)

## Kontrollküsimused või harjutus

- Mis on andmebaas ja miks need on olulised tänapäeva maailmas?
- Selgitage relatsioonilise ja mitte-relatsioonilise andmebaasi erinevust. Tooge näiteid.
- Millised on peamised komponendid, mis moodustavad andmebaasi? Kirjeldage nende funktsioone.
- Milliseid meetodeid kasutatakse andmebaasi jõudluse optimeerimiseks ja turvalisuse tagamiseks?
