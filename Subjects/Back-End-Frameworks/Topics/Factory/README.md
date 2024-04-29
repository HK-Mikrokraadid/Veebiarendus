# Factory

_Factory_ (Tehas) arengumuster on loomismuster. "Tehas" on superklass, mille alamklassid saavad mõjutada milliste parameetritega objekt luuakse. Tehase superklass teeb kaks asja:

- loob objekte **varjatud** superklassi meetodiga
- viitab loodud objektile läbi **ühise** liidese

Eesmärk on vähendada koodi ja vähendada arenduslikku võlga (_technical debt_). Peamsielt peaks vähendama uue objekti loomist _new_ käsuga, näiteks:

```js
const bear = new Bear();
const parrot = new Parrot();
const goldfish = new Goldfish();
// jne
```

---

## Kasutusjuhtum

Tehase arengumuster lahendab probleeme, mis tekivad siis, kui objektide loomine muutub keerukaks või kui see sõltub dünaamilistest tingimustest. See mustriga eraldatakse objektide loomise loogika nende kasutamisest, mis võimaldab süsteemil olla paindlikum ja lihtsamini hooldatav.

Kolm komponmenti Tehase mustris:

1. Toode (Product): See on loodav objekt, millel on ühine liides. Varjatud kliendi eest.
2. Tehas (Factory): See on klass, mis sisaldab meetodit objektide loomiseks. Tavaliselt varjatud Kliendi eest.
3. Klient (Client): See on klass, mis kasutab tehast objektide loomiseks. See on tegelik osa mis kasutab Tehast.

---

## Näide

### Kasside superklass ("Toode" komponent)

```js
// Superklass ühtse liidese jaoks
class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  introduce() {
    console.log(
      `Minu kassi nimi on ${this.name}, ta on ${this.age} aastat vana ja tema karva värv on ${this.color}.`
    );
  }
}
```

### Tehase klass ("Tehas" komponent)

```js
class CatFactory {
  createCat(name, age, color) {
    // Tehased peaks alati sisaldama minimaalselt 'create()' meetodit.
    return new Cat(name, age, color);
  }
}
```

Antud tehast on võimalik teha ka funktsioonina. Sama tulemus.

```js
function CatFactory(name, age, color) {
  return new Cat(name, age, color);
}
```

### Tehase kasutamine ("Klient" komponent)

```js
const factory = new CatFactory();
const myCat = factory.createCat("Tom", 3, "hall");
const myOtherCat = factory.createCat("Max", 2, "valge");
myCat.introduce(); // Minu kassi nimi on Tom, ta on 3 aastat vana ja tema karva värv on hall.
myOtherCat.introduce(); // Minu kassi nimi on Max, ta on 2 aastat vana ja tema karva värv on valge.
```

---

## Keerulisem näide

Eelmises näites oli tegu ainult kassidega, teeme nüüd asju natuke ümber, et meil oleks võimalik kirjeldada nii kassi kui ka koera.

### Toode

```js
// Superklass ühtse liidese jaoks
class Animal {
  constructor(name, age, color, type) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.type = type; // Lisame looma tüübi
  }
  introduce() {
    console.log(
      `Minu lemmiklooma nimi on ${this.name}, ta on ${this.age} aastat vana ja ta on ${this.color}i värvi.`
    );
  }
  logActivity() {
    console.log(`Looma tüüp: ${this.type}, tegevus: ${this.currentActivity()}`);
  }
  currentActivity() {
    return "Tavaline tegevus";
  }
}
```

### Alamklass

Eelmise näitega võrreldes lisame nüüd ka alamklassid _Animal_ klassile. See võimaldab meil vajadusel lisada unikaalseid omadused, mis superklassil puudusid. Hetkel eristan neid lihtsalt mõne tegevusega, mida loom parajasti teeb.

```js
class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age, color, "Kass"); // Määran type kohale kohe mis loomaga on tegu, kuna vastav klass ongi sellele loomale
  }
  currentActivity() {
    return "Mängib mänguhiirega";
  }
}

class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age, color, "Koer");
  }
  currentActivity() {
    return "Jookseb õues ringi";
  }
}
```

### Tehas

Siin ma lisan konstruktorisse ka _'type'_, mis eristab kahte looma ja loodavat objekti.

```js
class AnimalFactory {
  createAnimal(type, name, age, color) {
    if (type == "Cat") {
      return new Cat(name, age, color);
    } else if (type == "Dog") {
      return new Dog(name, age, color);
    } else {
      throw new Error("Invalid animal type"); // Meie tehas ei toeta hetkel muid loomi.
    }
  }
}
```

### Klient

```js
const factory = new AnimalFactory();
const myCat = factory.createAnimal("Tom", 3, "hall");
const myDog = factory.createAnimal("Rex", 5, "pruun");

myCat.introduce();
myDog.introduce();

myCat.logActivity(); // Looma tüüp: Cat, tegevus: Mängib mänguhiirega
myDog.logActivity(); // Looma tüüp: Dog, tegevus: Jookseb õues ringi
```

---

## Ülesanne

Kirjeldus: Kood peab salvestama ettevõtte töötajad andmebaasi. Andmebaasis kirjeldab töötajaid kolm omadust: nimi, töökoht ja juhtimistasand.

Tegevused: Tuleb luua Toode, toote tootmiseks Tehas ja tehase kaudu loodud objektid "andmebaasi" (andmebaas siin on tühi massiiv []).

Oodatav tulemus: console.log(database) tulemus on:

```json
[
  { "name": "John", "job": "Team lead", "level": "Senior" },
  { "name": "Mary", "job": "Developer", "level": "Junior" },
  { "name": "Juku", "job": "Tester", "level": "Intern" }
]
```

---

Allikad:

- [Oodesign - factory pattern](https://www.oodesign.com/factory-pattern)

- [Refactoring Guru - factory method](https://refactoring.guru/design-patterns/factory-method)

**Autor: Taavi Ansper**

## Factory arendusmuster kasutades funktsionaalset lähenemist

`Factory` arendusmustrit on väga edukalt võimalik kasutada ka funktsionaalses lähenemises. Kõige lihtsamalt on selleks vaja lihtsalt funktsiooni, mis tagastab uue objekti. Näiteks:

```js
function createCat(name, age, color) {
  return {
    name,
    age,
    color,
    introduce() {
      console.log(
        `Minu kassi nimi on ${this.name}, ta on ${this.age} aastat vana ja tema karva värv on ${this.color}.`
      );
    },
  };
}

const myCat = createCat("Tom", 3, "hall");
myCat.introduce(); // Minu kassi nimi on Tom, ta on 3 aastat vana ja tema karva värv on hall.
```
