const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const port = process.env.PORT || 3001

// instance to characters database as object, that will to be converted in json
const charactersNaruto = require('./CharacteresDB/charactersNaruto')
const charactersDragonBall = require('./CharacteresDB/charactersDragonBall')

app.use(cors())

app.get('/', (req, res) => {
  // Path to html file -- Doc page --
  const filePath = __dirname + '/documentation-page/index.html'

  // Read the file and convert
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error('Erro ao ler o arquivo HTML:', err)
          return res.status(500).send('Erro interno do servidor')
      }

      // Send html as response, to make doc page
      res.send(data)
  })
})

// endpoint to Naruto characters
app.get('/characters-naruto', (req, res) => {
  res.json(charactersNaruto)
})

// endpoint to Dragon Ball characters
app.get('/characters-dragonball', (req, res) => {
  res.json(charactersDragonBall)
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`))