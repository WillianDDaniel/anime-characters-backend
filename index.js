const express = require('express'); // importing express module
const app = express(); // creating an instance of express app
const cors = require('cors'); // importing cors module
const fs = require('fs'); // importing file system module
const port = process.env.PORT || 3001; // setting the port number

// importing character data for Naruto and Dragon Ball
const charactersNaruto = require('./CharacteresDB/charactersNaruto');
const charactersDragonBall = require('./CharacteresDB/charactersDragonBall');

// enabling CORS
app.use(cors());

// root endpoint to serve documentation page
app.get('/', (req, res) => {
  const filePath = __dirname + '/documentation-page/index.html'; // path to html file

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err); // logging error if any
      return res.status(500).send('Internal Server Error');
    }

    res.send(data); // sending html as response
  });
});

// endpoint to fetch character data for Naruto
app.get('/characters-naruto', (req, res) => {
  res.json(charactersNaruto); // sending character data as json
});

// endpoint to fetch character data for Dragon Ball
app.get('/characters-dragonball', (req, res) => {
  res.json(charactersDragonBall); // sending character data as json
});

// starting the server on specified port
app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`));
