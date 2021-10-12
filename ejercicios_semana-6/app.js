const http = require('http')
const fs = require('fs')

const notFound = fs.readFileSync('./ejercicios_semana-6/pages/notfound.html')

const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'})

  if (req.url === '/') {
    fs.readFile('./ejercicios_semana-6/pages/index.html', null, (err, data) => {
      if (err) {
        res.writeHead(404)
        res.write(notFound)
      }

      res.write(data)
      res.end()
      return
    })
  }

  if (req.url === '/list') {
    fs.readFile('./ejercicios_semana-6/pages/productlist.html', null, (err, data) => {
      if (err) {
        res.writeHead(404)
        res.write(notFound)
      }

      res.write(data)
      res.end()
      return
    })
  }

  if (req.url === '/details') {
    fs.readFile('./ejercicios_semana-6/pages/productdetails.html', null, (err, data) => {
      if (err) {
        res.writeHead(404)
        res.write(notFound)
      }

      res.write(data)
      res.end()
      return
    })
  }

  if (req.url === '/notfound') {
    res.write(notFound)
    res.end()
    return
  }
})

server.listen(3005)

// server.on('connection', (socket) => {
//   console.log('New connection...')
// })

console.log('Listening on port 3005...')