const express = require('express')

const app = express()
const pagesPath = '/views/'

app.use(express.static('public/'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + pagesPath + 'index.html')
})

app.get('/list', (req, res) => {
  res.sendFile(__dirname + pagesPath + 'productlist.html')
})

app.get('/details', (req, res) => {
  res.sendFile(__dirname + pagesPath + 'productdetails.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + pagesPath + 'notfound.html')
})


app.listen(3006)
console.log('server on port 3006')