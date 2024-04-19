# API testimise tööriistad

Kuna reeglina toetavad veebiAPI-d erinevaid päringumeetodeid (`GET`, `POST`, `PUT`, `DELETE` jne), siis ei piisa enam lihtsalt veebilehitsejast, et saaksime loodavale `API`-le päringuid saata, vaid selleks on vaja eraldi tööriista.

## Postman

Postman on rakendus, mis on loodud spetsiaalselt `API` testimiseks. Postmani abil saab saata erinevaid päringuid, vaadata vastuseid, salvestada päringuid ja vastuseid, luua erinevaid keskkondi (nt arendus, test, toodang) jne. Samuti on võimalik Postmani abil kirjutada ka teste, mis kontrollivad, et `API` vastused on oodatud kujul.

Postman on eraldi rakendusena allalaetav siin: https://www.postman.com/downloads/

Saadaval on ka Postman-i laiendus VSCode jaoks. Selle leiad VSCode laienduste alt.

## Thunder Client

Thunde Clinet on vabavaraline laiendus VSCode koodieditorile, mis võimaldab samuti `API`-sid testida..

Thunder Client-i saad alla laadida VSCode laienduste alt.

## Käsurea tööriist `curl`

`cURL` (Command-line URL) on vaba ja avatud lähtekoodiga tarkvaraprojekt, mis pakub käsurealt juhitavat tööriista ja teeki (libcurl) andmete ülekandmiseks erinevate protokollide abil. `cURL` toetab paljusid internetiprotokolle, sealhulgas HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, LDAP, LDAPS, SMTP, POP3, IMAP, RTSP ja paljusid teisi.

`cURL`-i abil on võimalik väga edukalt saata ka erinevaid päringuid `API`-le ja vaadata vastuseid.

Näiteks `GET` päringu saatmine:

```bash
curl http://localhost:3000/
```

või `POST` päringu saatmine:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username":"xyz","password":"xyz"}' http://localhost:3000/login
```

## Docker Desktop

`Docker Desktop` on rakendus, mis võimaldab arendajatel luua, testida ja jagada rakendusi konteinerites. Konteinerid on kerged, isoleeritud ja taaskasutatavad virtuaalsed keskkonnad, mis pakuvad arendajatele võimalust arendada ja käivitada rakendusi kõikjal, kus on olemas Dockeri keskkond.
