
# Github Issue

Selles peatükis käsitleme *Github Issue*'de kasutamist ja kirjutamist.

![Issue](Issue.webp)

Pildi allikas: Dall-E by OpenAI

- [Github Issue](#github-issue)
  - [Õpitulemused](#õpitulemused)
  - [Mis on *Github Issue*?](#mis-on-github-issue)
  - [Miks kasutada *Github Issue*'sid?](#miks-kasutada-github-issuesid)
  - [*Issuede* kirjutamise head tavad:](#issuede-kirjutamise-head-tavad)
  - [Näide hästi struktureeritud *issuest*:](#näide-hästi-struktureeritud-issuest)
  - [Näide mitte nii hästi kirjutatud *issuest*:](#näide-mitte-nii-hästi-kirjutatud-issuest)
  - [Harjutused](#harjutused)

Kõik projektid vajavad süsteemi, mis aitaks töökulgu organiseerida ja sellel silma peal hoida. Selleks on palju erinevaid tööriistu, **GitHub Issues** on kõigest üks paljudest turul olemasolevatest.

## Õpitulemused

Peale selle peatüki läbimist oskad:

- kirjeldada, mis on *Github Issue* ja kuidas seda kasutada;
- luua *Github Issue*'d ja määrata neile *assignee*'d;
- kommenteerida ja sulgeda *Github Issue*'t;

## Mis on *Github Issue*?

Githubi kontekstis on *issue* omadus, mis võimaldab kasutajatel jälgida konkreetse hoidla ülesandeid, vigu ja funktsioonitaotlusi. See on hea võimalus saada projekti olukorrast kiire ülevaade ja oma töövoogu vastavalt sellele planeerida ja prioritiseerida. *Issue*d on ka üks viis, kuidas projekti liikmed saavad suhelda hoidlas oleva projekti teemal ja jälgida selle edenemist. *Issuede* võimalus tuleb kaasa iga loodud repositooriumiga ja lisaks suhtlusele moodustavad *issue*'d ka osa projekti dokumentatsioonist.

*Issue* avab tavaliselt kasutaja ja selle saab määrata ühele või mitmele teisele kasutajale, kes selle probleemi kallal võiks töötada. *Issue* võib sisaldada **pealkirja**, **kirjeldust**, **silte** ja muid metaandmeid, nagu **prioriteet** või selle parandamise eest vastutav **isik**. 

Githubis on võimalik kasutada eelloodud malle levinumate *issuede* avamiseks, nt *bug report*'id ja *feature request*'id. Malle saab ka ise luua, vastavalt oma projekti vajadustele.

## Miks kasutada *Github Issue*'sid?

GitHubi *issue*t saab kasutada erinevatel eesmärkidel, näiteks:

- Tööülesannete jaotamine
- Tähtaegade seadmine
- Vigade jälgimine tarkvaraprojektides
- Funktsiooni/omaduse taotluste ja täiustuste jälgimine
- Töö üle arutamine ja koordineerimine arendajate meeskonna vahel
- Konkreetsele hoidlale või projektile toe taotlemine või pakkumine

*Issue*t saab otsida ja filtreerida erinevate kriteeriumide alusel, nagu *Issue* **number**, **pealkiri**, **autor**, **silt** ja **olek**. Neid saab ka **kommenteerida** ja **värskendada**, et kajastada jälgitava töö oleku **muutusi**. *Issuede* otsingu kasutamine on soojalt soovitatav, et (nt suuremate projektide korral) vältida *issue*-duplikaate ehk sama või sarnase sisuga *issue*'de loomist. Teistel sarnastel tööriistadel on automaatne duplikaatide tuvastussüsteem tavaliselt olemas, Github Issues seda võimalust kahjuks ei paku. Küll aga on Githubis võimalus kasutajal endal *issue* duplikaatidest teada anda ja sarnased probleemid kokku grupeerida. Selleks tuleb kasutada kommenteerimisel või vastamisel `duplicate of #*issue* nr`, `duplicate pull request` või `duplicate *issue*` märksõnu. 

## *Issuede* kirjutamise head tavad:

- Hoia pealkirjad lühikesed ja konkreetsed
- Sisus kirjelda tausta (*context*), esita probleem või idee, paku välja lahendus või järgmine samm
- Kasuta *labeleid*, aga mitte liiga palju korraga
- Selguse huvides kasuta *markdown* keelt vormistamiseks (listid, rõhuasetused, pildid, lingid jms)
- Kaasa teisi inimesi – *@mentions* ja *assigned to*
- Enne *issue* esitamist veendu, et sama/sarnast probleemi pole juba püstitatud – kasuta otsinguvõimalust!
- Tee vahet *issuel* ja *discussionil* – lahtisemateks aruteludeks on parem variant GitHub Discussions
- Lahendatud *issued* sulge, et segadust vältida

## Näide hästi struktureeritud *issuest*:
![hea tava näide](https://wiredcraft.com/images/posts/how_we_write_our_github_issues_2.png) 

Konkreetne pealkiri, tausta kirjeldus, inimeste kaasamine ja järgmine samm välja pakutud.

## Näide mitte nii hästi kirjutatud *issuest*:
![halb näide](https://wiredcraft.com/images/posts/how_we_write_our_github_issues_1.png)

Liiga pikk pealkiri, liiga üldine sisu.

## Harjutused

Selleks, et praktiseerida selles teemas õpitut, tehke järgmist:

- Loo mõne oma repositooriumisse `Issue`, lisa sinna pealkiri, kirjeldus ja mõned sildid
- Lisa `Issue`le `assignee`
- Lisa endale suunatud `Issue`le kommentaar
- Sulge enda loodud `Issue`, kui sellele on antud mõni kommentaar
