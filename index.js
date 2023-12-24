const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

const charactersNaruto = require('./CharacteresDB/charactersNaruto')
const charactersDragonBall = require('./CharacteresDB/charactersDragonBall')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/characters-naruto', (req, res) => {
  res.json(charactersNaruto)
})

app.get('/characters-dragonball', (req, res) => {
  res.json(charactersDragonBall)
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`))