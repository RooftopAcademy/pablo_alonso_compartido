const fs = require('fs')
const http = require('http')

const pagesPath = 'views/'
const staticPath = 'public/'
const localPath = './ejercicios_semana-6/'

const server = http.createServer((req, res) => {

  if (req.url.includes('.')) {
    if (req.url.includes('.css')) res.writeHead(200, {'Content-Type': 'text/css'})
    if (req.url.includes('.img')) res.writeHead(200, {'Content-Type': 'image/png'})
    if (req.url.includes('.ico')) res.writeHead(200, {'Content-Type': 'image/x-icon'})
    if (req.url.includes('.svg')) res.writeHead(200, {'Content-Type': 'image/svg+xml'})
    if (req.url.includes('.js')) res.writeHead(200, {'Content-Type': 'text/javascript'})

    res.write(fs.readFileSync(localPath + staticPath + req.url))
    res.end()
    return
  }

  res.writeHead(200, {'Content-Type': 'text/html'})
  const notFound = fs.readFileSync(localPath + 'views/notfound.html')

  if (req.url === '/') {
    const page = fs.readFileSync(localPath + pagesPath + 'index.html')
    res.write(page)
    res.end()
    return
  }

  if (req.url === '/list') {
    const page = fs.readFileSync(localPath + pagesPath + 'productlist.html')
    res.write(page)
    res.end()
    return
  }

  if (req.url === '/details' || req.url.includes('/details?')) {
    const page = fs.readFileSync(localPath + pagesPath + 'productdetails.html')
    res.write(page)
    res.end()
    return
  }

  res.write(notFound)
  res.end()
  return
})

server.listen(3005)

console.log('Listening on port 3005...')