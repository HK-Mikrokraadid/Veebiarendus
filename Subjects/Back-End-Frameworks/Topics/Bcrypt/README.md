# Bcrypt

Bcrypt on funktsioon andmete räsimiseks, mida kasutatakse peamiselt paroolide räsimiseks. Bcrypt on üks populaarsemaid räsimisfunktsioone, kuna see on aeglane ja seetõttu on räsi väärtuse taastamine aeganõudev.

- **Turvalisus**: Erinevalt paljudest teistest räsimisfunktsioonidest on `bcrypt` spetsiaalselt kavandatud aeglaseks, mis teeb ründajate jaoks raskemaks salasõnade jõuga lahtimurdmise. Selle aeglust saab reguleerida nn `soolamise` korduste arvu suurendamise või vähendamisega.

- **Soolamine**: `bcrypt` sisaldab automaatselt soolamise funktsiooni. Soolamine tähendab juhuslike andmete lisamist salasõnale enne räsimist, et vältida räsi väärtuste kordumist samade salasõnade jaoks ja raskendada ründajate tööd, kes kasutavad eelnevalt arvutatud räsi väärtuste tabeleid (nn "rainbow tables").

## Bcrypt kasutamine

Meie loodavas API-s peaks bcrypti kasutamine käima nii, et kui me loome uue kasutaja, siis enne, kui kasutaja andmed 'andmebaasi' salvestatakse, räsitakse parool ära ja tavalise stringi asemel salvestatakse 'andmebaasi' räsitud parool. Selle jaoks lisame oma API-le uue teenuse `hashService.ts` ja sinna lisame kaks funktsiooni, millest üks on parooli räsimiseks ja teine on hiljem parooli võrdlemiseks räsiga.

Bcrypti paigaldamine toimub käsuga `npm install bcrypt`. Samuti lisame `bcrypti` tüübikirjeldused käsuga `npm install --save-dev @types/bcrypt`.

`hashService.ts` fail näeb välja umbes selline:

```typescript
// Impordime bcrypt'i
import bcrypt from 'bcrypt';
// Järgnev muutuja määrab ära, kui palju peab tööd tegema parooli
// hashimiseks (mida suurem number, seda rohkem on vaja vaeva näha)
const saltRounds = 10;

const hashService = {
  // Funktsioon parooli hashimiseks - funktsioon tagastab hashitud parooli
  hash: async (password: string): Promise<string> => {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  },
  // Funktsioon parooli võrdlemiseks hashiga - funktsioon tagastab true või false vastavalt võrdlemise tulemusele
  compare: async (password: string, hash: string): Promise<boolean> => {
    const match = await bcrypt.compare(password, hash);
    return match;
  },
};

// Ekspordime loodud objekti, et saaksime seda teenust mujal kasutada
export default hashService;
```

Nüüd saame kasutada vastavat teenust kasutaja loomisel, muutmisel ja sisselogimisel.

Räsimise kasutamine kasutaja loomisel näeb välja umbes selline:

```typescript
  createUser: async (newUser: NewUser): Promise<number> => {
    const id = db.users.length + 1;
    // Hashime loodava kasutaja parooli
    const hashedPassword = await hashService.hash(newUser.password);
    // Lisame kasutaja 'andmebaasi' koos hashitud parooliga
    db.users.push({
      id,
      ...newUser,
      password: hashedPassword,
    });
    return id;
  },
```
