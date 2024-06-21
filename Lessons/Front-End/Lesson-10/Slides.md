---
marp: true

---
# Veebiarendus

## Front-End arendus

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänased teemad

- Meenutame eelmist loengut
- [Pagination](../../../Subjects/Front-End-Frameworks/Topics/React-Pagination/README.md)
- [React rakenduse deploy-mine](../../../Subjects/Front-End-Frameworks/Topics/Deploy/README.md)
- Kursuse kokkuvõte ja tagasiside

---

## Millest rääkisime eelmisel korral?

---

## Pagination (lehekülgede jagamine)

Pagination on levinud viis suurte andmekogumite jagamiseks väiksemateks osadeks. See aitab vähendada lehe laadimise aega ja muudab kasutajaliidese kasutajasõbralikumaks.

Samuti aitab see vähendada serveri ja interneti ühenduse koormust, kuna me ei lae korraga kõiki andmeid.

---

## Kuidas pagination töötab?

Põhimõtteliselt eeldab see seda, et meil on võimalik API-st pärida andmeid lehtede kaupa. Näiteks, kui meil on 1000 kasutajat, siis me ei lae korraga kõiki kasutajaid, vaid näiteks 10 kasutajat korraga. Sageli saame selleni jõuda, kasutades päringu parameetreid nagu `page` ja `limit`. Näiteks, `/users?page=1&limit=10`. Võidakse kasutada ka teistsuguseid päringu parameetreid nagu `from` ja `per_page` jms.

> Oluline on meeles pidada, et server ei pruugi alati toetada pagination-i. Ja kui toetab, siis võib see olla lahendatud erinevalt.

---

## React Bootstrap Pagination komponent

React Bootstrap pakub `Pagination` komponenti, mis võimaldab meil luua lihtsa ja stiilse pagination-i ja selle abil saame ehitada ise eraldiseisva pagination komponendi, mida saame kasutada oma rakendustes erinevates kohtades.

---

## Näide: Pagination React-is koos React Bootstrap-iga

Lisame oma rakendusele eraldi `PaginationComponent` komponendi, mis võimaldab meil kuvada andmeid lehtede kaupa.

---

## PaginationComponent

```javascript
import React from 'react';
import { Pagination } from 'react-bootstrap';

// currentPage - praegune leht
// totalPages - kõikide lehtede arv
// onPageChange - funktsioon, mis käivitatakse, kui lehte vahetatakse
const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage=== 1} />
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
      {pageNumbers.map(number => (
        <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)}>
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default PaginationComponent;
```

---

## PaginationComponent-i kasutamine

Kui me impordime `PaginationComponent`-i oma rakendusse, siis selle kasutamiseks peame nüüd arvestama mitme asjaga:

- meil peab olema võimalik API-st pärida andmeid lehtede kaupa
- me peame järge pidama selle üle, milline on praegune aktiivne lehekülg
- me peame teadma seda, mitu lehekülge on kokku (ja mitu elementi on ühel lehel)
- kui kasutaja valib uue lehekülje, siis peame tegema uue päringu API-sse
- kui API-sse teha päring, siis peame uuendama ka meie rakenduse olekut

---

## PaginationComponent-i kasutamine - komponent ise

```javascript
import PaginationComponent from './PaginationComponent';
...
{posts && <PaginationComponent
  totalPages={pagination.totalPages}
  currentPage={currentPage}
  onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
/>}
...
```

- näitame `PaginationComponent`-i ainult siis, kui meil on andmed olemas
- anname `PaginationComponent`-ile edasi vajalikud parameetrid
- kui kasutaja vahetab lehekülge, siis uuendame rakenduse olekut

---

## API päringu tegemine

```js
...
const [pagination, setPagination] = useState(null); // paginatsiooni andmed
const [currentPage, setCurrentPage] = useState(1); // praegune lehekülg
const limit = 10; // lehekülje pikkus (postituste arv lehel)
...
const token = localStorage.getItem('token');
  const response = await axios.get(`https://blog.hk.tlu.ee/posts?page=${currentPage}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  setPosts(response.data.posts);
  setPagination(response.data.pagination);

```

- päringu tegemisel peame arvestama, et me anname API-le edasi ka lehekülje numbri ja lehekülje suuruse
- API tagastab meile ka paginatsiooni andmed, mida me kasutame `PaginationComponent`-i jaoks
- kui me saame vastuse, siis uuendame rakenduse olekut (`posts` ja `pagination`)

---

## Nimekirja värskendamine lehekülgede vahetamisel

```js
useEffect(() => {
  fetchPosts();
}, [currentPage]);

```

- kasutame `useEffect` hook-i, et teha päring serverisse, kui komponent laetakse
- kui kasutaja vahetab lehekülge, siis käivitame uuesti `fetchPosts` funktsiooni (kuna `currentPage` on sõltuvus)

---

## React rakenduse deploy-mine

Kui me oleme oma React rakenduse valmis saanud, siis soovime tõenäoliselt selle ka kuhugi üles laadida, et seda saaks üle interneti kasutada. Selleks tuleb teha kõigepealt mõned ettevalmistused ja seejärel valida sobiv meetod ja koht.

---

## Deploy-mise ettevalmistused

Kuna siiani oleme oma React-i rakendust arendanud oma arvutis, siis me kasutame nn arenduskeskkonda, mis on mõeldud selleks, et me saaksime kiiresti ja mugavalt arendada. Kuid kui me soovime rakendust kasutada üle interneti, siis me peame selle "tootmiskeskkonda" viima. Selleks peame oma rakenduse "build"-ima, ehk looma sellest üheainsa HTML faili, mis sisaldab kogu meie rakendust.

---

## React-i rakenduse "build"-imine

Kui me oleme oma rakenduse valmis saanud, siis me saame selle "build"-ida, kasutades järgmist käsku:

```bash
npm run build
```

See käsk loob meie projekti kausta `build` kausta, kus on kõik meie rakenduse failid. Seda kausta saame me nüüd kasutada, et seda kuskile üles laadida.

---

