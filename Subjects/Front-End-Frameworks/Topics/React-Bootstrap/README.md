# React ja Bootstrap: Kuidas kasutada

## Sissejuhatus

Bootstrap on populaarne avatud lähtekoodiga CSS-i raamistik, mis võimaldab luua atraktiivseid ja mobiilisõbralikke veebilehti kiiresti ja lihtsalt. Kombineerides Bootstrap-i Reactiga, saate luua kasutajaliideseid, mis on nii funktsionaalsed kui ka visuaalselt meeldivad. Selles peatükis käsitleme, kuidas kasutada React-i koos Bootstrap-iga, sealhulgas vajalike teekide installimist ja komponentide loomist.

## Õpiväljundid

Selle peatüki lõpuks peaksid õppijad olema võimelised:

- Installeerima ja seadistama Bootstrap-i React projektis.
- Loome ja kasutama React Bootstrap komponente.
- Kohandama Bootstrap-i stiile vastavalt projekti vajadustele.

## Bootstrap-i installimine ja seadistamine

### Bootstrap ja React Bootstrap

Bootstrap-i kasutamiseks React projektis võite kasutada React Bootstrap teeki, mis pakub täielikku komplekti Bootstrap-i komponente, mis on ehitatud spetsiaalselt Reacti jaoks.

#### Bootstrap ja React Bootstrap-i installimine

1. Installige Bootstrap ja React Bootstrap npm-i kaudu:

```bash
npm install bootstrap react-bootstrap
```

2. Importige Bootstrap CSS oma `index.js` või `App.js` faili:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

## React Bootstrap komponentide kasutamine

### Näide: Nupp

React Bootstrap pakub mitmesuguseid komponente, nagu nupud, navigeerimisribad, vormid ja palju muud. Alustame lihtsa näitega nupu loomisest.

```javascript
import React from 'react';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary Button</Button>
    </div>
  );
}

export default App;
```

### Näide: Navigeerimisriba

Navigeerimisriba loomine React Bootstrap-i abil on lihtne ja kiire.

```javascript
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
```

### Näide: Vorm

Bootstrap-i vormikomponentide kasutamine React Bootstrap-i abil.

```javascript
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
```

## Bootstrap-i stiilide kohandamine

### Kohandatud CSS

Kui soovite Bootstrap-i stiile kohandada, saate lisada oma CSS-i ja kirjutada üle vaikimisi stiilid.

1. Looge oma CSS-fail, näiteks `custom.css`.

```css
/* custom.css */
.custom-button {
  background-color: #ff5733;
  border-color: #ff5733;
}
```

2. Importige ja kasutage oma CSS-i komponentides.

```javascript
import React from 'react';
import { Button } from 'react-bootstrap';
import './custom.css';

function App() {
  return (
    <div className="App">
      <Button className="custom-button">Custom Button</Button>
    </div>
  );
}

export default App;
```

### Kohandatud Bootstrap teemad

Bootstrap võimaldab ka teemade kohandamist, kasutades Sass-i muutujate üle kirjutamist. Selleks peate installima `node-sass`.

1. Installige `node-sass`:

```bash
npm install node-sass
```

2. Looge oma Sass-fail ja kirjutage üle vajalikud muutujad.

```scss
/* custom.scss */
$theme-colors: (
  "primary": #ff5733,
  "secondary": #333333,
);

@import "~bootstrap/scss/bootstrap";
```

3. Importige oma Sass-fail `index.js` või `App.js` failis.

```javascript
import './custom.scss';
```

## Allikad

- [React Bootstrap Official Documentation](https://react-bootstrap.github.io/)
- [Bootstrap Official Documentation](https://getbootstrap.com/)
- [JavaScript Front-End Frameworks and Libraries](https://www.javascriptstuff.com/)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)

## Kontrollküsimused või harjutus

- Mis on Bootstrap ja kuidas see aitab veebiarenduses?
- Kuidas installida ja seadistada Bootstrap-i React projektis?
- Kirjutage näide React komponendist, mis kasutab Bootstrap-i nuppu.
- Kuidas kohandada Bootstrap-i stiile oma React projektis?

## Harjutus

- Looge uus React projekt, kasutades Create React App tööriista.
- Lisage projekti Bootstrap ja React Bootstrap.
- Looge navigeerimisriba, kasutades React Bootstrap-i komponente.
- Looge vorm, mis sisaldab nime, emaili ja sõnumi välju, kasutades React Bootstrap-i komponente.
- Kohandage mõnda Bootstrap-i komponenti oma CSS-iga ja näidake tulemusi.