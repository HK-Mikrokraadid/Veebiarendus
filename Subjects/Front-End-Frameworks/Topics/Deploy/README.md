# React Projekti Deploy-mine

React-i rakenduse deploy-mine tähendab selle ülespanekut serverisse või hostimisteenusesse, et seda saaks avalikult kasutada. Selles õppematerjalis uurime, kuidas deploy-da React-i projekti mitmel viisil, sealhulgas GitHub Pages abil.

![React Deploy](React-Deploy.webp)

Pildi allikas: Dall-E by OpenAI

- [React Projekti Deploy-mine](#react-projekti-deploy-mine)
  - [Õpiväljundid](#õpiväljundid)
  - [React-i Projekti Deploy-mise Sammud](#react-i-projekti-deploy-mise-sammud)
    - [React-i Projekti Buildi Loomine](#react-i-projekti-buildi-loomine)
  - [Deploy-mine GitHub Pages-i Abil](#deploy-mine-github-pages-i-abil)
  - [Eeltingimused](#eeltingimused)
  - [Sammud](#sammud)
  - [Alternatiivsed Hostimisplatvormid](#alternatiivsed-hostimisplatvormid)
    - [Vercel](#vercel)
    - [Netlify](#netlify)
  - [Koodinäited](#koodinäited)
    - [`package.json` Konfiguratsioon](#packagejson-konfiguratsioon)
  - [Probleemide Lahendamine](#probleemide-lahendamine)
  - [Kokkuvõte](#kokkuvõte)
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

1. **Buildi loomine**: Loome optimeeritud buildi, mis sisaldab HTML, CSS ja JavaScript faile.
2. **Hostimine**: Laadime buildi üles hostimisteenusesse või serverisse.

### React-i Projekti Buildi Loomine

Alustame React-i rakenduse buildimisega:

1. **Avage terminal** ja minge oma React-i projekti juurkausta.
2. **Käivitage buildi käsk**:

   ```bash
   npm run build
   ```

   See käsk loob optimeeritud ja minimeeritud failid kausta `build`.

## Deploy-mine GitHub Pages-i Abil

GitHub Pages on lihtne viis staatiliste veebilehtede, sealhulgas React-i rakenduste hostimiseks.

## Eeltingimused

- **GitHub konto**: Veenduge, et teil on GitHub konto ja olete oma projekti sinna üles laadinud.

## Sammud

1. **Installige `gh-pages` Pakk**:

   Lisame `gh-pages` paki, mis aitab meil hõlpsalt deploy-da React-i rakendust GitHub Pages-i.

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Lisage `homepage` Väli**:

   Lisage oma `package.json` faili `homepage` väli, mis määrab, kus teie rakendus hostitakse.

   ```json
   "homepage": "https://<kasutajanimi>.github.io/<repo-nimi>"
   ```

   Asendage `<kasutajanimi>` oma GitHub kasutajanimega ja `<repo-nimi>` oma hoidla nimega.

3. **Lisage Deploy Skriptid**:

   Lisage `package.json` faili `scripts` sektsiooni kaks uut käsku: `predeploy` ja `deploy`.

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     // ... teised skriptid
   }
   ```

   - `predeploy`: Käivitab `npm run build` käsu enne deploy-mist.
   - `deploy`: Kasutab `gh-pages` pakki, et laadida `build` kausta sisu GitHub Pages-i.

4. **Käivitage Deploy Käsk**:

   Käivitage järgmine käsk terminalis oma projekti juurkaustas:

   ```bash
   npm run deploy
   ```

   See käsk käivitab esmalt `npm run build` ja seejärel laadib buildi sisu GitHub Pages-i.

5. **Kontrollige Deploy-mist**:

   Pärast deploy-mise edukat lõpuleviimist saate oma rakendust näha aadressil `https://<kasutajanimi>.github.io/<repo-nimi>`.

## Alternatiivsed Hostimisplatvormid

Lisaks GitHub Pages-ile on mitmeid teisi platvorme, mis pakuvad lihtsat ja kiiret viisi React-i rakenduse hostimiseks.

### Vercel

Vercel on platvorm, mis pakub nullkonfiguratsiooni kasutajaliidest ja automaatset deploy-mist.

1. **Loo konto ja logi sisse** [Vercel](https://vercel.com/) veebilehel.
2. **Importige oma projekt**: Valige oma GitHub-i hoidla ja järgige juhiseid projekti importimiseks.
3. **Deploy**: Vercel teeb automaatselt buildi ja deploy rakenduse.

### Netlify

Netlify pakub samuti lihtsat viisi React-i rakenduse deploy-miseks ja pakub palju lisafunktsioone nagu pidev integreerimine ja testimine.

1. **Loo konto ja logi sisse** [Netlify](https://www.netlify.com/) veebilehel.
2. **Seadistage projekt**: Valige oma GitHub-i hoidla ja seadistage build käsk (nt `npm run build`).
3. **Deploy**: Netlify loob automaatselt buildi ja deploy rakenduse.

## Koodinäited

### `package.json` Konfiguratsioon

```json
{
  "name": "react-app",
  "version": "1.0.0",
  "homepage": "https://<kasutajanimi>.github.io/<repo-nimi>",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  // ... teised seaded
}
```

## Probleemide Lahendamine

1. **404 vead GitHub Pages-il**: Veenduge, et teie `homepage` väli `package.json` failis on õigesti seadistatud.
2. **Deploy ebaõnnestumine**: Kontrollige, et `gh-pages` pakk on õigesti installitud ja skriptid on õigesti seadistatud.

## Kokkuvõte

- **Buildi loomine**: Enne deploy-mist looge optimeeritud build.
- **GitHub Pages**: Kasutage `gh-pages` pakki, et hõlpsasti deploy-da React-i rakendust GitHub Pages-i.
- **Alternatiivsed platvormid**: Vercel ja Netlify pakuvad kasutajasõbralikke viise React-i rakenduste hostimiseks.

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
