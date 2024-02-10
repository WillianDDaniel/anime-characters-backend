const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const port = process.env.PORT || 3001

const charactersNaruto = require('./CharacteresDB/charactersNaruto')
const charactersDragonBall = require('./CharacteresDB/charactersDragonBall')

app.use(cors())

app.get('/', (req, res) => {
  // Caminho para o arquivo HTML separado
  const filePath = __dirname + '/documentation-page/index.html'

  // Lê o conteúdo do arquivo
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error('Erro ao ler o arquivo HTML:', err)
          return res.status(500).send('Erro interno do servidor')
      }

      // Envia o conteúdo HTML como resposta
      res.send(data)
  })
})

app.get('/characters-naruto', (req, res) => {
  res.json(charactersNaruto)
})

app.get('/characters-dragonball', (req, res) => {
  res.json(charactersDragonBall)
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`))