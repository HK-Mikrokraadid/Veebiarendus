# Kümnes loeng

- [Üheksas loeng](../Lesson-09/README.md)
- [Kümnenda loengu slaidid](Slides.md)
- [Kümnenda loengu salvestus]()

## Teemad

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
