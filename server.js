const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.get('/hello', (req, res) => {
  res.send('Привет!')
})

app.get('/api/weather', async (req, res) => {
    res.json({
        'temp': - 273
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})