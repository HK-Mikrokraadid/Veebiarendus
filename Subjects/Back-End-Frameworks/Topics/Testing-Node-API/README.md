# Node API Testimine Supertesti, Mocha ja Chai-ga

Selles õppematerjalis keskendume Expressi API testimisele. Testimiseks kasutame Supertesti, Mocha ja Chai ning keskendume erinevate API lõpp-punktide testimisele.

![Node API testing](Node-API-Testing.webp)

Pildi allikas: Dall-E by OpenAI

- [Node API Testimine Supertesti, Mocha ja Chai-ga](#node-api-testimine-supertesti-mocha-ja-chai-ga)
  - [Õpiväljundid](#õpiväljundid)
  - [Eeldused](#eeldused)
  - [API Seadistamine (Expressi Rakendus)](#api-seadistamine-expressi-rakendus)
    - [`app.js`](#appjs)
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
    - [Testidega Kaetuse Kontrollimine](#testidega-kaetuse-kontrollimine-1)

## Õpiväljundid

Selle õppematerjali lõpuks peaksid õppijad olema võimelised:

- testima API lõpp-punkte, kasutades Supertesti, Mocha ja Chai;
- kontrollima testide katvust, kasutades `nyc` tööriista.

## Eeldused

Oletame, et teil on olemas põhivormis blogi API, mis kasutab Expressi ja järgmist struktuuri:

- `app.js` – API serveri seadistamine.
- `controllers/` – Kataloog, mis sisaldab API lõpp-punktide kontrollereid.
- `services/` – Kataloog, mis sisaldab äriloogikat ja andmeoperatsioone.

## API Seadistamine (Expressi Rakendus)

### `app.js`

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

### `routes/posts.js`

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
const app = require('../app');
const expect = chai.expect;

describe('Blog API', function() {

  describe('GET /posts', function() {
    it('should return all posts', async function() {
      const response = await request(app).get('/posts');
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
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

Testidega kaetuse kontrollimine on oluline, et mõista, kui palju koodi on kaetud testidega. Saame kasutada `nyc` tööriista selleks otstarbeks.

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
    "test": "nyc mocha"
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

### Testidega Kaetuse Kontrollimine

Käivitage testid, kasutades `nyc`, et vaadata katvust.

```bash
npm test
```

See käsk loob katvuse aruande ja kuvab tulemused terminalis. Lisaks saate leida HTML aruande `coverage` kataloogist, mida saab avada veebibrauseris, et näha üksikasjalikku ülevaadet koodikatvuse kohta.
