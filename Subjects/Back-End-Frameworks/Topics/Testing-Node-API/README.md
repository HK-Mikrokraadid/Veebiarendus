# Node API Testimine Supertesti, Mocha ja Chai-ga: Rakenduse Käivitamine ja Testimine

API testimine on oluline, et tagada teie rakenduse lõpp-punktide korrektne toimimine. Selles õppematerjalis käsitleme, kuidas seadistada ja testida Node.js API-d, kasutades Expressi koos Supertesti, Mocha ja Chai-ga. Esiteks eraldame Expressi rakenduse loogika ja serveri käivitamise erinevatesse failidesse (`app.js` ja `server.js`), mis lihtsustab testimist. Seejärel loome ja käivitame teste, et kontrollida erinevaid API lõpp-punkte.

![Node API Testing](Node-API-Testing.webp)

Pildi allikas: Dall-E by OpenAI

- [Node API Testimine Supertesti, Mocha ja Chai-ga: Rakenduse Käivitamine ja Testimine](#node-api-testimine-supertesti-mocha-ja-chai-ga-rakenduse-käivitamine-ja-testimine)
  - [Õpiväljundid](#õpiväljundid)
  - [Projekti Struktuur](#projekti-struktuur)
  - [API Seadistamine](#api-seadistamine)
    - [`app.js`](#appjs)
    - [`server.js`](#serverjs)
    - [`routes/posts.js`](#routespostsjs)
    - [`controllers/postsController.js`](#controllerspostscontrollerjs)
    - [`services/postsService.js`](#servicespostsservicejs)
  - [Testide Kirjutamine Supertesti, Mocha ja Chai-ga](#testide-kirjutamine-supertesti-mocha-ja-chai-ga)
    - [Testi Faili Loomine](#testi-faili-loomine)
    - [Testide Kirjutamine](#testide-kirjutamine)
      - [`test/posts.test.js`](#testpoststestjs)
    - [Testide Käivitamine](#testide-käivitamine)
  - [Testidega Kaetuse Kontrollimine](#testidega-kaetuse-kontrollimine)
    - [`nyc` Paigaldamine](#nyc-paigaldamine)
    - [`nyc` Seadistamine](#nyc-seadistamine)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- seadistama Expressi rakenduse ja serveri käivitamise eraldi failidesse;
- testima API lõpp-punkte, kasutades Supertesti, Mocha-t ja Chai-d;
- kontrollima testide katvust, kasutades `nyc` tööriista.

## Projekti Struktuur

```text
my-blog-api/
│
├── app.js          # Expressi rakenduse konfiguratsioon
├── server.js       # Serveri käivitamine
├── routes/
│   └── posts.js    # API lõpp-punktide defineerimine
├── controllers/
│   └── postsController.js  # Kontrollerid lõpp-punktide käsitlemiseks
└── services/
    └── postsService.js     # Teenused äriloogika ja andmeoperatsioonide jaoks
└── test/
    └── posts.test.js       # Testid lõpp-punktide jaoks
└── package.json    # Projektikonfiguratsioon ja sõltuvused
```

## API Seadistamine

### `app.js`

Enne, kui saame hakata teste kirjutama (või õigemini enne, kui saame neid käivitada), peame seadistama Expressi rakenduse selliselt, et meil oleks võimalik seda testida. Selleks eraldame rakenduse ja serveri käivitamise erinevatesse failidesse.

`app.js` failis seadistame Expressi rakenduse ja ruuterid. See fail sisaldab kogu rakenduse loogikat ja konfiguratsiooni, kuid ei käivita serverit.

```javascript
const express = require('express');
const postsRouter = require('./routes/posts');

const app = express();

// Middleware JSON päringute käsitlemiseks
app.use(express.json());

// Kasuta postituste lõpp-punktide jaoks
app.use('/posts', postsRouter);

module.exports = app;
```

### `server.js`

`server.js` fail vastutab serveri käivitamise eest. Siin impordime `app.js` failis defineeritud Expressi rakenduse ja käivitame selle.

```javascript
const app = require('./app'); // Importime Expressi rakenduse
const PORT = process.env.PORT || 3000;

// Serveri käivitamine
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### `routes/posts.js`

Defineerime API lõpp-punktid ja seome need kontrolleritega `postsController.js` failis.

```javascript
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Defineerib lõpp-punktid ja seob need kontrolleritega
router.get('/', postsController.getAllPosts);
router.post('/', postsController.createPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;
```

### `controllers/postsController.js`

Kontrollerid vastutavad HTTP päringute käsitlemise ja vastuste tagastamise eest. Nad kasutavad teenuseid (`postsService.js`), et teha äriloogikat ja andmeoperatsioone.

```javascript
const postsService = require('../services/postsService');

// Kõikide postituste toomine
exports.getAllPosts = (req, res) => {
  const posts = postsService.getAllPosts();
  res.json(posts);
};

// Uue postituse loomine
exports.createPost = (req, res) => {
  const newPost = postsService.createPost(req.body);
  res.status(201).json(newPost);
};

// Postituse uuendamine
exports.updatePost = (req, res) => {
  const updatedPost = postsService.updatePost(parseInt(req.params.id), req.body);
  if (updatedPost) {
    res.json(updatedPost);
  } else {
    res.status(404).send('Post not found');
  }
};

// Postituse kustutamine
exports.deletePost = (req, res) => {
  const deleted = postsService.deletePost(parseInt(req.params.id));
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).send('Post not found');
  }
};
```

### `services/postsService.js`

Teenused vastutavad äriloogika ja andmeoperatsioonide eest. Nad pakuvad funktsioone, mida kontrollerid kasutavad.

```javascript
let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' }
];

// Kõikide postituste toomine
exports.getAllPosts = () => {
  return posts;
};

// Uue postituse loomine
exports.createPost = (postData) => {
  const newPost = {
    id: posts.length + 1,
    title: postData.title,
    content: postData.content
  };
  posts.push(newPost);
  return newPost;
};

// Postituse uuendamine
exports.updatePost = (postId, postData) => {
  const postIndex = posts.findIndex(post => post.id === postId);
  if (postIndex !== -1) {
    posts[postIndex] = {
      id: postId,
      title: postData.title,
      content: postData.content
    };
    return posts[postIndex];
  }
  return null;
};

// Postituse kustutamine
exports.deletePost = (postId) => {
  const postIndex = posts.findIndex(post => post.id === postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    return true;
  }
  return false;
};
```

## Testide Kirjutamine Supertesti, Mocha ja Chai-ga

Nüüd kui rakendus ja serveri käivitamine on eraldatud, saame kirjutada ja käivitada teste ilma, et server käivitataks.

Aga enne veel, kui hakkame teste kirjutama, paigaldame testimiseks vajalikud teegid ja raamistikud:

```bash
npm install --save-dev mocha chai@4.4.1 supertest
```

> Märkus: Kasutame Chai versiooni 4.4.1, kuna see on viimane versioon, mis toetab Node.js `require` süntaksit.

Lisame ka testide käivitamise skripti `package.json` faili:

```json
{
  "scripts": {
    "test": "mocha  --exit"
  }
}
```

### Testi Faili Loomine

Looge `test` kataloog ja selles `posts.test.js` fail.

```bash
mkdir test
touch test/posts.test.js
```

### Testide Kirjutamine

#### `test/posts.test.js`

```javascript
const request = require('supertest');
const chai = require('chai');
const app = require('../app'); // Impordime Expressi rakenduse
const expect = chai.expect;

describe('Blog API', function() { // Testide grupp

  describe('GET /posts', function() { // Üksik test
    it('should return all posts', async function() {
      const response = await request(app).get('/posts'); // Päringu saatmine /posts lõpp-punkti
      expect(response.status).to.equal(200); // Kontrollime, kas vastuse staatus on 200
      expect(response.body).to.be.an('array'); // Kontrollime, kas vastus on massiiv
      expect(response.body.length).to.be.greaterThan(0); // Kontrollime, kas massiivis on rohkem kui 0 elementi
    });
  });

  describe('POST /posts', function() {
    it('should create a new post', async function() {
      const newPost = {
        title: 'New Post',
        content: 'This is a new post'
      };
      const response = await request(app)
        .post('/posts')
        .send(newPost);
      expect(response.status).to.equal(201);
      expect(response.body).to.include.keys('id', 'title', 'content');
      expect(response.body.title).to.equal(newPost.title);
    });
  });

  describe('PUT /posts/:id', function() {
    it('should update an existing post', async function() {
      const updatedPost = {
        title: 'Updated Post',
        content: 'This is an updated post'
      };
      const response = await request(app)
        .put('/posts/1')
        .send(updatedPost);
      expect(response.status).to.equal(200);
      expect(response.body).to.include.keys('id', 'title', 'content');
      expect(response.body.title).to.equal(updatedPost.title);
    });
  });

  describe('DELETE /posts/:id', function() {
    it('should delete an existing post', async function() {
      const response = await request(app)
        .delete('/posts/1');
      expect(response.status).to.equal(204);
    });
  });
});
```

### Testide Käivitamine

Käivitage testid, kasutades Mocha käsurealt.

```bash
npm test
```

## Testidega Kaetuse Kontrollimine

Kontrollime, kui palju koodi on kaetud testidega, kasutades `nyc` tööriista.

### `nyc` Paigaldamine

Paigaldage `nyc`, kasutades npm-i.

```bash
npm install --save-dev nyc
```

### `nyc` Seadistamine

Lisage `package.json` faili järgmine konfiguratsioon:

```json
{
  "scripts": {
    "test": "nyc mocha --exit"
  },
  "nyc": {
    "reporter": [
      "text",
      "html"
    ],
    "exclude": [
      "test/**"


    ]
  }
}
```

Käivitage testid, kasutades `nyc`, et vaadata katvust.

```bash
npm test
```

See käsk loob katvuse aruande ja kuvab tulemused terminalis. Lisaks saate leida HTML aruande `coverage` kataloogist, mida saab avada veebibrauseris, et näha üksikasjalikku ülevaadet koodikatvuse kohta.
