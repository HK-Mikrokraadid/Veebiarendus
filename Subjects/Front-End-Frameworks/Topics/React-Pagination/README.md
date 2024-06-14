# Pagination (Lehekülgede Jagamine) React-is

Pagination on tehnika, mis võimaldab jagada suurt andmekogumit väiksemateks lehtedeks, muutes andmete kuvamise ja haldamise kasutajasõbralikumaks. Selles õppematerjalis vaatleme, kuidas rakendada pagination-it React-i rakenduses, kasutades **React Bootstrap**-i.

![React Pagination](React-Pagination.webp)

Pildi allikas: Dall-E by OpenAI

- [Pagination (Lehekülgede Jagamine) React-is](#pagination-lehekülgede-jagamine-react-is)
  - [Õpiväljundid](#õpiväljundid)
  - [Sissejuhatus Pagination-i](#sissejuhatus-pagination-i)
  - [Näide: Pagination React-is koos React Bootstrap-iga](#näide-pagination-react-is-koos-react-bootstrap-iga)
    - [Projekti Loomine ja Seadistamine](#projekti-loomine-ja-seadistamine)
  - [Rakenduse Komponendid](#rakenduse-komponendid)
    - [App.js](#appjs)
    - [PaginationComponent.js](#paginationcomponentjs)
  - [Selgitused](#selgitused)
  - [Kontrollküsimused](#kontrollküsimused)
  - [Harjutus](#harjutus)
  - [Allikad](#allikad)

## Õpiväljundid

Pärast selle peatüki läbimist peaksid olema võimelised:

- selgitama, mis on pagination ja miks seda kasutatakse;
- looma ja rakendama pagination-komponenti React-is;
- integreerima pagination React Bootstrap-i komponentidega.

## Sissejuhatus Pagination-i

Pagination on kasulik, kui peate kuvama palju andmeid, kuid ei soovi kõiki andmeid korraga laadida ja kuvada. Selle asemel jagatakse andmed lehtedeks, ja kasutajad saavad navigeerida nende lehtede vahel.

## Näide: Pagination React-is koos React Bootstrap-iga

Loome lihtsa React-i rakenduse, mis kuvab nimekirja elementidest ja kasutab pagination-it nende vahel navigeerimiseks.

### Projekti Loomine ja Seadistamine

1. **Loo uus React projekt**:

   ```bash
   npx create-react-app react-pagination-example
   cd react-pagination-example
   ```

2. **Installige React Bootstrap**:

   ```bash
   npm install react-bootstrap bootstrap
   ```

3. **Lisage Bootstrap stiilid `index.js` faili**:

   ```javascript
   // index.js
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

## Rakenduse Komponendid

Loo rakenduses järgmised komponendid:

1. **App.js**: Põhikomponent, mis sisaldab nimekirja ja pagination-komponenti.
2. **PaginationComponent.js**: Komponent, mis haldab pagination-i loogikat.

### App.js

```javascript
// App.js
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PaginationComponent from './PaginationComponent';

const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Arvuta praeguse lehe andmed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container>
      <Row>
        {currentItems.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{item}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        currentPage={currentPage}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </Container>
  );
};

export default App;
```

### PaginationComponent.js

```javascript
// PaginationComponent.js
import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
      {pageNumbers.map(number => (
        <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)}>
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === pageNumbers.length} />
      <Pagination.Last onClick={() => onPageChange(pageNumbers.length)} disabled={currentPage === pageNumbers.length} />
    </Pagination>
  );
};

export default PaginationComponent;
```

## Selgitused

- **App.js**: See komponent hoiab praegust lehte ja määrab, millised elemendid kuvatakse antud lehel.
  - **data**: Näidisandmed, mida kuvame lehtedel.
  - **currentPage**: Oleku muutujana hoiab see praegust lehekülge.
  - **indexOfLastItem** ja **indexOfFirstItem**: Arvutavad, millised andmed kuuluvad praegusele lehele.
  - **PaginationComponent**: Kasutame pagination-komponenti, et hallata lehekülgede vahetust.

- **PaginationComponent.js**: See komponent vastutab pagination nuppude kuvamise ja nende sündmuste käivitamise eest.
  - **pageNumbers**: Loome massiivi, mis sisaldab kõiki leheküljenumbreid.
  - **Pagination**: React Bootstrap-i `Pagination` komponent, mis sisaldab navigeerimisnuppe.

## Kontrollküsimused

1. Mis on pagination ja millal see on kasulik?
2. Kuidas määrata, millised elemendid kuvatakse praegusel lehel?
3. Kuidas kasutada React Bootstrap-i pagination komponenti?

## Harjutus

- **Loo rakendus, mis kuvab andmete loendi koos pagination-iga**: Kasuta ülaltoodud näidet, et luua oma React-i rakendus, mis kuvab andmete loendi ja võimaldab kasutajal nende vahel navigeerida.
- **Kohanda pagination-i stiile**: Proovi muuta pagination-i komponenti, et see sobiks sinu rakenduse kujundusega.

## Allikad

- [React Bootstrap Documentation](https://react-bootstrap.github.io/components/pagination/)
- [React Documentation - Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [React Pagination Tutorial](https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/)

See õppematerjal pakub põhjaliku juhendi, kuidas rakendada pagination-it React-i rakenduses, kasutades React Bootstrap-i komponente.
