.gitignore pakub olulist vahendit Git'i hoidla puhtana ja tõhusana hoidmiseks. See tagab, et soovimatud failid on versioonihaldusest välja jäetud, pakkudes nii turvalisuse kui ka tõhususe eeliseid.

## .gitignore Node.js kontekstis

Siin on näide tüüpilisest `.gitignore` failist Node.js projektidele:

```plaintext
# Logid
logs/
*.log
npm-debug.log*

# Käitusaegsed andmed
pids/
*.pid
*.seed
*.log

# Teekide kaust jscoverage/JSCover poolt genereeritud instrumenteeritud teekide jaoks
lib-cov/

# Katvuse kaust, mida kasutavad tööriistad nagu istanbul
coverage/

# nyc testi katvus
.nyc_output/

# Sõltuvuste kaust
node_modules/

# IDE - Integreeritud Arenduskeskkonna seaded
.idea/
.vscode/

# Keskkonnamuutujad (dotenv failid)
.env
.env.test

# Mac failid
.DS_Store

# Vabatahtlik npm vahemälu kaust
.npm

# Vabatahtlik eslint vahemälu
.eslintcache

# Vabatahtlik REPL ajalugu
.node_repl_history
```

### Selgitus:

- **Logid:** Tavaliselt jäetakse logifailid ja -kaustad ignoreerituks, kuna need sisaldavad sageli käitusaegseid andmeid, mida ei ole vaja versioonida.
- **Käitusaegsed andmed:** Samuti tuleks välja jätta kõik genereeritud PID või seemnefailid.
- **Testi katvuse andmed:** Kaustad nagu `lib-cov`, `coverage` ja `.nyc_output` sisaldavad sageli testi katvuse andmeid ja tuleks välja jätta.
- **`node_modules/`:** See on Node.js projektide jaoks oluline. Kui installite kolmanda osapoole pakette npm-i või Yarni kaudu, salvestatakse need sellesse kausta. Peaksite välja jätma `node_modules/`, sest:
   - See võib olla suur, muutes kloonimise ja tõmbamise aeglaseks.
   - Sõltuvused saab installida keskkonnapõhiselt. See tagab, et kui teine arendaja või CI/CD torustik kloonib repositooriumi, saavad nad installida täpselt need versioonid, mis on määratud teie `package-lock.json` või `yarn.lock` failis, käivitades `npm install` või `yarn`.
- **IDE seaded:** Kaustad nagu `.idea/` (JetBrainsi IDE-dele) ja `.vscode/` (Visual Studio Code'ile) võivad sisaldada kasutajaspetsiifilisi IDE seadeid. Neid tuleks ignoreerida, et vältida teise arendaja seadistuse ülekirjutamist.
- **Keskkonnamuutujad:** Failid nagu `.env` sisaldavad sageli tundlikke või keskkonnapõhiseid väärtusi. Neid tuleks ignoreerida, et vältida saladuste lekkimist ja võimaldada erinevatel arendajatel või keskkondadel säilitada oma konfiguratsioone.
- **Maci-spetsiifilised:** `.DS_Store` on Mac OS-i poolt genereeritud süsteemifail.
- **Vahemälu failid:** `.npm` ja `.eslintcache` on vahemälu kaustad/failid, mida ei ole vaja versioonida.
- **REPL ajalugu:** `.node_repl_history` on ajaloo fail, kui kasutate Node REPL-i.

### Mida panna `.gitignore`:

- Genereeritud ja ajutised failid.
- Keskkonnapõhised failid.
- Kolmanda osapoole sõltuvused (nagu `node_modules/`).
- IDE ja redaktori konfiguratsioonifailid.
- Saladused ja konfiguratsioonifailid keskkonnapõhiste väärtustega.
- OS-spetsiifilised failid (nagu `.DS_Store`).

### Mida mitte panna `.gitignore`:

- Projekti lähtekood ja varad.
- Konfiguratsioonifailid, mis on vajalikud rakenduse käitamiseks ja jagatud kõigi projekti instantside vahel (välja arvatud saladused).
- Dokumentatsioon ja sellega seotud varad.
- Ehitus- ja juurutusskriptid.
  
Pidage meeles, et `.gitignore` faili eesmärk on hoida teie repositoorium puhtana, jättes välja failid ja kaustad, mis ei paku versioonihalduses väärtust. See aitab ka vältida tundliku andme või kasutajaspetsiifiliste seadete kogemata pühendamist.

## Harjutused

Proovi selgitada oma sõnadega, mis on `.gitignore` ja miks see on oluline.

Järgmisena proovi lõpetada järgmised ülesanded:
- Loo oma repositooriumis `.gitignore` fail.
- Lisa `draft.md` `.gitignore` faili.
- Pühenda `.gitignore` fail oma repositooriumisse.
- Loo uus fail nimega `draft.md` ja lisa sinna mõningane sisu.
- Kontrolli, kas `draft.md` on Git'i poolt ignoreeritud (proovi seda pühendada).