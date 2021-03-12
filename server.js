const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const history = require('connect-history-api-fallback')

app.use(history())

app.get('/*/', (req, res) => {
  res.sendFile('./dist/index.html')
})

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))