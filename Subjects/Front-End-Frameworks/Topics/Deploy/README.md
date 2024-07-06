# React Projekti Deploy-mine GitHub Pages-i Abil

React-i rakenduse deploy-mine tähendab selle ülespanekut serverisse või hostimisteenusesse, et seda saaks avalikult kasutada. Selles õppematerjalis uurime, kuidas deploy-da React-i projekti mitmel viisil, sealhulgas GitHub Pages abil.

![React Deploy](React-Deploy.webp)

Pildi allikas: Dall-E by OpenAI

- [React Projekti Deploy-mine GitHub Pages-i Abil](#react-projekti-deploy-mine-github-pages-i-abil)
  - [Õpiväljundid](#õpiväljundid)
  - [React-i Projekti Deploy-mise Sammud](#react-i-projekti-deploy-mise-sammud)
  - [Deploy-mine GitHub Pages-i Abil](#deploy-mine-github-pages-i-abil)
  - [Eeltingimused](#eeltingimused)
  - [Sammud](#sammud)
  - [React Router ja GitHub Pages](#react-router-ja-github-pages)
  - [Alternatiivsed Hostimisplatvormid](#alternatiivsed-hostimisplatvormid)
  - [Kontrollküsimused](#kontrollküsimused)
  - [Harjutus](#harjutus)
  - [Allikad](#allikad)

## Õpiväljundid

Pärast selle peatüki läbimist peaksid olema võimelised:

- Selgitama erinevaid meetodeid React-i rakenduse deploy-miseks.
- Deploy-ma React-i rakendust GitHub Pages-i abil.
- Kasutama alternatiivseid hostimisplatvorme nagu Vercel ja Netlify.

---

## React-i Projekti Deploy-mise Sammud

React-i rakenduse deploy-mine sisaldab tavaliselt järgmisi samme:

- Projekti repositooriumi loomine
- Koodi kirjutamine
- `gh-pages` mooduli paigaldamine
- `package.json` faili konfigureerimine
- `deploy` töövoo käivitamine
- GitHub Pages-i seadistamine
- Rakenduse kontrollimine

## Deploy-mine GitHub Pages-i Abil

GitHub Pages on lihtne viis staatiliste veebilehtede, sealhulgas React-i rakenduste hostimiseks, kuna see on tasuta ja lihtne kasutada. Siin on samm-sammuline juhend, kuidas deploy-da oma React-i rakendus GitHub Pages-i:

## Eeltingimused

- **GitHub konto**: Veenduge, et teil on GitHub konto ja olete oma projekti sinna üles laadinud.

## Sammud

- Loo omale projekti jaoks repositoorium
- Loo/kopeeri sinna oma React-i rakendus
- Paigalda `gh-pages` moodul
  - `npm install gh-pages`
  - Lisa `package.json` faili rida `"homepage": "https://<Githubi kasutajanimi>.github.io/<repositooriumi nimi>",`
- Lisa `package.json` faili `script` jaotisesse read:

```bash
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```

- Käivita `deploy` töövoog: `npm run deploy`
- Mine projekti seadistustesse:
  - Settings
  - Pages
    - Source: `Deploy from branch`
    - Branch: `gh-pages` `/root`
  - Mine aadressile: `https://<Githubi kasutajanimi>.github.io/<repositooriumi nimi>`

Kui kõik on õigesti tehtud, peaks teie React-i rakendus olema edukalt deploy-d GitHub Pages-i.

Nüüd edaspidi, kui soovite oma rakendust uuendada, siis peate tegema järgmised sammud:

- Tee muudatused
- Käivita `deploy` töövoog: `npm run deploy`
- Mine aadressile: `https://<Githubi kasutajanimi>.github.io/<repositooriumi nimi>`
- Vajadusel värskenda lehte

> Kogu protsess võib mõne minuti aega võtta, kuna GitHub peab buildi looma ja lehe avalikult kättesaadavaks tegema.

## React Router ja GitHub Pages

Kui kasutad oma akenduses React Router-it, siis Github Pages ei pruugi töötada nii nagu peaks. Selleks, et Router korralikult töötaks, peame oma rakenduses vahetama `BrowserRouter` `HashRouter` vastu.

```javascript
import { HashRouter as Router } from 'react-router-dom';
```

See muudatus tagab, et React Router töötab korralikult ka GitHub Pages-i puhul.

## Alternatiivsed Hostimisplatvormid

Lisaks GitHub Pages-ile on mitmeid teisi platvorme, mis pakuvad lihtsat ja kiiret viisi React-i rakenduse hostimiseks, nagu näiteks:

- **Vercel**: Vercel on populaarne serverless hostimisteenus, mis võimaldab teil deploy-da React-i rakendusi ilma konfigureerimiseta.
- **Netlify**: Netlify on veel üks populaarne hostimisteenus, mis pakub automaatset deploy-d, HTTPS-i ja palju muud.
- **Heroku**: Heroku on platvorm, mis võimaldab teil deploy-da ja hostida erinevaid rakendusi, sealhulgas React-i rakendusi.
- Igasugused muud hostimisteenused, mis toetavad React-i rakenduste või siis lihtsalt staatiliste veebilehtede hostimist.

## Kontrollküsimused

1. Mis on React-i projekti deploy-mise põhietapid?
2. Kuidas seadistada React-i projekti deploy GitHub Pages-i abil?
3. Millised alternatiivsed platvormid on saadaval React-i rakenduse hostimiseks?

## Harjutus

- **Deploy-ige React-i rakendus GitHub Pages-i**: Kasutage käesoleva õppematerjali juhiseid, et luua ja deploy-da oma React-i rakendus GitHub Pages-i.
- **Proovige Vercel või Netlify**: Looge konto Vercel või Netlify platvormil ja deploy-ge oma React-i rakendus.

## Allikad

- [Deploying a React App to GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages)
- [GitHub Pages Documentation](https://pages.github.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
