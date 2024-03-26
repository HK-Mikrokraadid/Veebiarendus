# Kivi - Paber - Käärid

Ülesande eesmärgiks on luua lihtne mäng, kus kaks mängijat saavad mängida kivi-paber-käärid mängu.

Kui Sa ei tea, kuidas mäng käib, siis [siin on lühike selgitus](https://nupsu.ee/mangi-lapsega-kivi-paber-kaarid/).

## Variant 1

- Kaks mängijat
- Küsitakse valikut ühe mängija käest (kivi, paber või käärid) - valik ei tohi olla nähtav teisele mängijale
- Küsitakse valikut teise mängija käest (kivi, paber või käärid) - valik ei tohi olla nähtav esimesele mängijale
- Kuvatakse tulemus vastavalt valikutele ja reeglitele (kivi võidab kääri, käärid võidavad paberit, paber võidab kivi)
- Lõpp

<details>
  <summary>Vihjed</summary>

- Kasuta `prompt-sync` moodulit kasutaja sisendi küsimiseks.

</details>

## Variant 2

- Lisa valikute tegemisele kontroll, kas mängija sisestas lubatud valiku
- Kõigepealt küsitakse mitme punktini mängitakse
- Muu on sama, mis eelmises variandis, kuid nüüd loendatakse võitude eest punkte (viigi eest punkte ei anta)
- Punktiseisu kuvatakse peale igat 'käiku'
- Mäng saab läbi kui üks mängija jõuab määratud punktideni

<details>
  <summary>Vihjed</summary>

- Kasuta `while` tsüklit, et võimaldada mängu jätkata kuni üks mängija jõuab määratud punktideni.
- Valikud võid lisada massiivi ja kontrollida, kas mängija valik on selles massiivis kasutades `includes()` meetodit.

</details>

## Variant 3

- Teine mängija on arvuti
- Arvuti valib juhuslikult kivi, paberi või käärid
- Muu on sama, mis eelmistes variantides

<details>
  <summary>Vihjed</summary>

- Arvuti poolt valiku tegemiseks kasuta `Math.random()` meetodit.
- Tee arvuti valik massiivi abil ja vali juhuslik element sellest massiivist.

</details>

> Mõtle kõigepealt läbi sammud, mida on teha vaja. Kui vaja, joonista omale algoritm paberile.
>
>Alusta kõige lihtsamast variandist ja lisa keerukust järk-järgult.
