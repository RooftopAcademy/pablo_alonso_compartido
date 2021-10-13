const express = require('express')

const app = express(),
      pagesPath = `${__dirname}/views/`,
      port = 3006

app.use(express.static('public/'))


app.get('/', (req, res) => {
  res.sendFile(pagesPath + 'index.html')
})

app.get('/list', (req, res) => {
  res.sendFile(pagesPath + 'productlist.html')
})

app.get('/details', (req, res) => {
  res.sendFile(pagesPath + 'productdetails.html')
})

app.get('*', (req, res) => {
  res.sendFile(pagesPath + 'notfound.html')
})


app.listen(port)
console.log(`Server on port ${port}`)
console.log('Press <CTRL>+<C> to quit')