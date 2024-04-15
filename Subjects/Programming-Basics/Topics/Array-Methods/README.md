# Massiivi meetodid

![Array Methods](Array-Methods.webp)

Pildi allikas: Dall-E by OpenAI

Me oleme juba mõningate [massiivide meetoditega](../Data-Structures/README.md#massiivi-meetodid) kokku puutunud ja neid kasutanud, kuid on veel hulk meetodeid, mis tulevad massiividega kaasa ja mida saab kasutada massiividega töötamisel.

- [Massiivi meetodid](#massiivi-meetodid)
  - [`map()`](#map)
  - [`forEach()`](#foreach)
  - [`filter()`](#filter)
  - [`find()`](#find)
  - [`reduce()`](#reduce)
  - [`sort()`](#sort)
  - [`includes()`](#includes)

## `map()`

`map()` meetodit kasutatakse selleks, et luua uus massiiv olemasoleva massiivi elementidest. Meetod võtab argumendiks funktsiooni, mis omakorda võtab argumendiks massiivi elemendi ja tagastab uue elemendi. Meetod tagastab uue massiivi, kus iga element on funktsiooni tagastatud väärtus.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

Siin näites kasutatakse noolefunktsiooni (*arrow function*), mis võtab argumendiks massiivi elemendi ja tagastab selle korrutatuna kahega.

Sama koodi saaks kirjutada ka järgmiselt:

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

## `forEach()`

`forEach()` meetodit kasutatakse selleks, et käia läbi massiivi elemendid ja teha iga elemendi puhul midagi. Meetod võtab argumendiks funktsiooni, mis omakorda võtab argumendiks massiivi elemendi. See on massiivi meetod, mis ei tagasta midagi.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));
```

Siin näites käiakse läbi massiivi elemendid ja iga elemendi puhul logitakse see konsooli.

`map()` ja `forEach()` meetodid on sarnased, kuid `map()` meetod tagastab uue massiivi, kus iga element on funktsiooni tagastatud väärtus, samas kui `forEach()` meetod ei tagasta midagi.

## `filter()`

`filter()` meetodit kasutatakse selleks, et luua uus massiiv olemasoleva massiivi elementidest, mis vastavad mingile tingimusele. Meetod võtab argumendiks funktsiooni, mis omakorda võtab argumendiks massiivi elemendi ja tagastab `true` või `false`. Meetod tagastab uue massiivi, kus on ainult need elemendid, mille puhul funktsioon tagastas `true`.

```javascript
const posts = [
  { title: 'Post 1', likes: 5 },
  { title: 'Post 2', likes: 10 },
  { title: 'Post 3', likes: 15 }
];

const popularPosts = posts.filter(post => post.likes > 10);

console.log(popularPosts); // [{ title: 'Post 3', likes: 15 }]
```

Siin näites otsitakse massiivist üles kõik postitused, millel on rohkem kui 10 meeldimist.

## `find()`

`find()` meetodit kasutatakse selleks, et leida esimene massiivi element, mis vastab mingile tingimusele. Meetod võtab argumendiks funktsiooni, mis omakorda võtab argumendiks massiivi elemendi ja tagastab `true` või `false`. Meetod tagastab esimese elemendi, mille puhul funktsioon tagastas `true`.

```javascript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const user = users.find(user => user.name === 'Bob');

console.log(user); // { name: 'Bob', age: 30 }
```

Siin näites otsitakse massiivist üles kasutaja, kelle nimi on `'Bob'`.

## `reduce()`

`reduce()` meetodit kasutatakse selleks, et arvutada kokku massiivi elemendid. Meetod võtab argumendiks funktsiooni, mis omakorda võtab argumendiks kaks väärtust: akumulaatori ja massiivi elemendi. Meetod tagastab akumulaatori väärtuse.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(sum); // 15
```

Siin näites arvutatakse massiivi elementide summa.

## `sort()`

`sort()` meetodit kasutatakse selleks, et sorteerida massiivi elemendid. Seda funktsiooni on võimalik kasutada ilma argumendita, kuid siis sorteeritakse elemendid need kõigepealt stringideks muutes. Kui soovitakse sorteerida numbreid, siis tuleb kasutada funktsiooni, mis võtab argumendiks kaks väärtust ja mis tagastab negatiivse arvu, kui esimene väärtus peaks olema enne teist, positiivse arvu, kui teine väärtus peaks olema enne esimest, ja nulli, kui väärtused on võrdsed.

> Pane tähele, et `sort()` meetod muudab massiivi ennast ja tagastab selle.

```javascript
const names = ['Charlie', 'Alice', 'Bob'];

names.sort();

console.log(names); // ['Alice', 'Bob', 'Charlie']
```

Siin näites sorteeritakse massiivi elemendid tähestikulises järjekorras.

```javascript
const numbers = [3, 1, 2, 5, 4];

numbers.sort((a, b) => a - b);

console.log(numbers); // [1, 2, 3, 4, 5]
```

Siin näites kasutatakse argumendina funktsiooni, mis sorteerib massiivi elemendid kasvavas järjekorras.

## `includes()`

`includes()` meetodit kasutatakse selleks, et kontrollida, kas massiiv sisaldab mingit elementi. Meetod tagastab `true`, kui element on massiivis olemas, ja `false`, kui elementi massiivis ei ole.

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(3)); // true

console.log(numbers.includes(6)); // false
```
