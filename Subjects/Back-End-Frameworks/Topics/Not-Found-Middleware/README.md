# Not found middleware

Siiani on veel käsitlemata olukord, kui kasutaja üritab pöörduda mõne API ressursi või marsuudi poole, mida API-s ei eksisteeri. Sellisel juhul peaksime me kasutajale tagastama veakoodi 404 ja veateate, et ressurssi ei leitud. Selleks, et seda teha, peame me looma `middleware` funktsiooni, mis töötleb selliseid olukordi.

```ts
const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
};
```

Nüüd tuleb meeles pidada, et see `middleware` funktsioon tuleb registreerida peale kõiki marsuute ja marsuudi teekonnaks tuleb panna `*`. See tähendab, et kui kasutaja pöördub mõne marsuudi poole, mida API-s ei eksisteeri, siis ta suunatakse sellele `middleware` funktsioonile.

```ts
app.use('*', notFoundMiddleware);
```

Nüüd, kui kasutaja pöördub mõne marsuudi poole, mida API-s ei eksisteeri, siis ta saab vastuseks järgmise:

```json
{
  "success": false,
  "message": "Route not found"
}
```
