# Async/Await

![Async Await](Async-Await.webp)

Pildi allikas: [Dall-E by OpenAI](https://openai.com/)

- [Async/Await](#asyncawait)
  - [Õpiväljundid](#õpiväljundid)
  - [Mis on `async/await`?](#mis-on-asyncawait)
  - [Milleks kasutada `async/await`?](#milleks-kasutada-asyncawait)

## Õpiväljundid

Pärast selle teema läbimist suudate:

- Selgitada, mis on `async/await`
- Selgitada, milleks kasutatakse `async/await`
- Kasutada `async/await`-i Javascriptis

## Mis on `async/await`?

`async/await` on moodsa Javascripti võimalus kirjutada asünkroonset koodi viisil, mis näeb välja ja käitub nagu sünkroonne kood. Põhimõtteliselt on tegemist lisafunktsionaalsusega, mis on ehitatud [*promise*](../promise/README.md) peale ja mis pakub lihtsamat süntaksit *promise* kasutamiseks.

## Milleks kasutada `async/await`?

`async` võtmesõna kasutatakse asünkroonse funktsiooni defineerimiseks. Sellisel viisil defineeritud funktsioon tagastab alati *promise*, millel võib olla kolm olekut:

1. Ootel
2. Täidetud
3. Tagasilükatud

Näiteks:

```javascript
const url = 'https://jsonplaceholder.typicode.com/posts/1'; // API URL

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

`await` võtmesõna kasutamine paneb funktsiooni täitmise seniks 'pausile', kuni *promise* on täidetud või tagasi lükatud. Kui *promise* saab täidetuks, siis tagastatakse saadud väärtus ja jätkatakse funktsiooni täitmist. Kui *promise* lükatakse tagasi, siis 'heidetakse erand' (*exception is thrown*), mis on võimalik 'kinni püüda' kasutades [`try/catch`](../Try-Catch-Finally/README.md) blokki.

```javascript
async function main() {
  try {
    const data = await fetchData(); // Ootab fetchData funktsiooni täitmist
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

main();
```

Näites on defineeritud asünkroonne funktsioon `main`, milles päritakse `fetchData` funktsiooni abil andmeid, mille täitmise ajaks pannakse `main` funktsioon 'pausile' ja oodatakse ära `fetchData` funktsiooni tulemus. Kui `fetchData` päring õnnestub, siis näidatakse konsooli saadud `data` väärtus. Kui päring ebaõnnestub, siis saadud viga 'püütakse' kinni `catch` bloki poolt ja viga kuvatakse taas konsooli.

> Meeles peab pidama seda, et `await` märksõna saab kasutada ainult `async` märksõnaga defineeritud funktsiooni sees.

Nagu näitest näha, siis `async/await` märksõnade kasutamine on oluliselt selgem ja lihtsam lugeda, kui [*promise*](../Promise/README.md)-t.

Allikad:

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function>
