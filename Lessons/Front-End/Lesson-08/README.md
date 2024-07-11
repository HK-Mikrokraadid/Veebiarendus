# Kaheksas loeng

Taas alustame loengut eelmise loengu meenutamisega. Seejärel vaatame, kuidas me saame pärida oma rakenduses kasutamiseks andmeid kusagilt välisest allikast, kasutades selleks `axios`-i. Edasi vaatame seda, mis on React-i komponendi elutsükkel ja kuidas me saame kasutada `useEffect` hook-i oma komponentide elutsükli haldamiseks. Seejärel vaatame, kuidas me saame kasutada dünaamilisi marsruute, ehk kuidas me saame kasutada marsruute, mille aadressid on dünaamilised. Edasi vaatame, kuidas kasutada tingimuslauseid komponentide kuvamiseks ja peitmiseks. Lõpuks räägime pisut sellest, mis on `flash messages` ja kuidas neid ise luua ja kasutada.

Loengus kasutame ettevalmistatud koodi selleks, et meil oleks kõigil võimalikult sarnane keskkond, milles me saame koos õppida ja harjutada. Et loengus asjad kiiremini sujuks, siis laadi enne loengut alla kood selle loengu jaoks [siit](./code/blog.zip), paki see oma arvutisse lahti, paigalda koodi sõltuvused ja veendu, et saad rakenduse tööle.

- laadi `zip` fail oma arvutisse
- paki see lahti
- ava oma koodieditoriga (näiteks VS Code-ga)
- ava kaust terminalis ja käivita projekti juurkaustas `npm install` käsk
- käivita rakendus `npm start` käsuga

Probleemide korral võta ühendust õpetajaga.

## Kaheksanda loengu materjalid ja viited

- [Seitsmes loeng](../Lesson-07/README.md)
- [Kood kaheksanda loengu jaoks](./code/blog.zip)
- [Kaheksanda loengu slaidid](Slides.md)
- [Kaheksandas loengus kirjutatud kood](https://github.com/HK-Mikrokraadid/Martti/tree/main/lessons/FE/08)
- [Kaheksanda loengu salvestus](https://youtu.be/KWfD_NY50tY)
- [Üheksas loeng](../Lesson-09/README.md)

## Teemad

- Meenutame eelmist loengut
- [React ja Axios](../../../Subjects/Front-End-Frameworks/Topics/React-Axios/README.md)
- [useEffect hook](../../../Subjects/Front-End-Frameworks/Topics/React-UseEffect/README.md)
- [Dünaamilised marsruudid](../../../Subjects/Front-End-Frameworks/Topics/React-Routing/README.md#dünaamilised-marsruudid)
- [Tingimuslaused](../../../Subjects/Front-End-Frameworks/Topics/React-Conditional-Rendering/README.md)
- [Flash messages](../../../Subjects/Front-End-Frameworks/Topics/React-Flash-Messages/README.md)

### Kodutöö

Loe läbi viimase loengu teemad:

- [React ja Axios](https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Front-End-Frameworks/Topics/React-Axios/README.md)
- [useEffect hook](https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Front-End-Frameworks/Topics/React-UseEffect/README.md)
- [Dünaamilised marsruudid](https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Front-End-Frameworks/Topics/React-Routing/README.md#d%C3%BCnaamilised-marsruudid)
- [Tingimuslaused](https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Front-End-Frameworks/Topics/React-Conditional-Rendering/README.md)
- [Flash messages](https://github.com/HK-Mikrokraadid/Veebiarendus/blob/main/Subjects/Front-End-Frameworks/Topics/React-Flash-Messages/README.md)

#### Kodune ülesanne

Rakenda oma blogi rakenduses vähemalt sisselogimine ja välja logimine. Sisselogimisel peab kasutaja suunatama tagasi avalehele ja välja logimisel peab kasutaja suunatama sisselogimise lehele.

Kui Su rakendus võimaldab, siis lisa ka postituste laadimine serverist ja nende kuvamine.

Blogi API aadress on `https://blog.hk.tlu.ee/`
