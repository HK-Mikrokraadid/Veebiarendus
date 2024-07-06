# Failide üles- ja allalaadimine

Failide üles- ja allalaadimine Node.js ja Expressiga saab hõlpsasti teostada selliste raamistike ja moodulite abil nagu `multer` (failide üleslaadimiseks) ja `express` ise (failide allalaadimiseks).

## Failide Üleslaadimine

1. **Paigalda `multer`**:

```sh
npm install multer
```

1. **Loo API failide üleslaadimiseks**:

```javascript
// upload.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit: 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('myFile');

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// @route   POST /upload
// @desc    Upload file to server
router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: err });
    } else {
      if (req.file === undefined) {
        res.status(400).json({ message: 'No file selected!' });
      } else {
        res.status(200).json({
          message: 'File uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});

module.exports = router;
```

1. **Lisage API põhifailis**:

```javascript
// server.js
const express = require('express');
const path = require('path');

const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set static folder for serving files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Upload route
const uploadRoute = require('./upload');
app.use('/api', uploadRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

### Failide Allalaadimine

1. **Loo API failide allalaadimiseks**:

```javascript
// download.js
const express = require('express');
const path = require('path');
const router = express.Router();

// @route   GET /download/:filename
// @desc    Download file from server
router.get('/download/:filename', (req, res) => {
  const file = path.join(__dirname, 'uploads', req.params.filename);
  res.download(file, (err) => {
    if (err) {
      res.status(400).json({ message: 'File not found' });
    }
  });
});

module.exports = router;
```

1. **Lisage API põhifailis**:

```javascript
// server.js (jätkub)
const downloadRoute = require('./download');
app.use('/api', downloadRoute);

// Jätkub eelmisest lisamisest...
```

### Kokkuvõte

See näide kasutab `multer`-i failide üleslaadimiseks ja `express`-i failide allalaadimiseks. Failid salvestatakse kohalikku kausta `uploads` ja teenindatakse staatiliselt. Failide üleslaadimisel kontrollitakse, kas failid on pildid ja nende suurus ei ületa 1MB. Failide allalaadimisel saab faili alla laadida selle nime järgi, kui see eksisteerib serveris.
