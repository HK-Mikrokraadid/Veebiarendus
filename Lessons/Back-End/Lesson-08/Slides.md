---
marp: true

---
# Veebiarendus

## Back-End arendus

Martti Raavel

<martti.raavel@tlu.ee>

---

## Tänased teemad

- [JOIN laused MySQL-is](../../../Subjects/Databases/Topics/MySQL-Join/README.md)

---

## JOIN laused MySQL-is

MySQL JOIN-id on vahend, mis võimaldab andmeid erinevatest tabelitest pärida ja ühendada. JOIN-id võimaldavad kombineerida ridu kahest või enamast tabelist, mis on omavahel seotud primaar- ja võõrvõtmete kaudu.

---

## JOIN-ide tüübid

- `INNER JOIN`
- `LEFT JOIN`
- `RIGHT JOIN`
- `FULL JOIN`

---

## `INNER JOIN`

`INNER JOIN` tagastab ainult need read, millel on mõlemas tabelis vastavus.

```sql
SELECT column_name(s)
  FROM left_table
  INNER JOIN right_table
  ON left_table.column_name = right_table.column_name;
```

> Vasak ja parem tabel tähistavad tabelite järjekorda päringus.
---

## `INNER JOIN` kasutamine

Tegevused koos kasutajate andmetega:

```sql
SELECT users.firstName, users.lastName, todos.title, todos.description, todos.is_done
  FROM todos
  INNER JOIN users
  ON todos.user_id = users.id
WHERE todos.deleted_at IS NULL;
```

---

## `LEFT JOIN`

`LEFT JOIN` tagastab kõik read vasakust tabelist ja vastavad read paremast tabelist. Kui vastavust pole, siis täidetakse parema tabeli väljad NULL-idega.

```sql
SELECT column_name(s)
  FROM left_table
  INNER JOIN right_table
  ON left_table.column_name = right_table.column_name;
```

---

## `LEFT JOIN` kasutamine

Tegevused koos kasutajate andmetega:

```sql
SELECT users.firstName, users.lastName, todos.title, todos.description, todos.is_done
  FROM todos
  LEFT JOIN users
  ON todos.user_id = users.id
WHERE todos.deleted_at IS NULL;
```

> Nagu näha, on `LEFT JOIN` kasutamine sarnane `INNER JOIN`-iga, vahe tekib sisse siis, kui tegemist on andmetega, millel pole vastavust.

---

## `RIGHT JOIN`

`RIGHT JOIN` tagastab kõik read paremast tabelist ja vastavad read vasakust tabelist. Kui vastavust pole, siis täidetakse vasaku tabeli väljad NULL-idega.

---

## `FULL JOIN`

FULL JOIN tagastab kõik read, kui on vastavus vasakus või paremas tabelis. MySQL-is ei ole otsest `FULL JOIN` toetust, kuid seda saab saavutada `UNION` abil.

---