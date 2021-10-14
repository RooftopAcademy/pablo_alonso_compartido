const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express(),
      /**
       * Declaramos la ruta donde se encuentran los archivos .html
       */
      pagesPath = path.resolve('src', 'views'),
      /**
       * Declaramos el puerto que vamos a usar
       * Se utiliza el numero introducido por script en package.json (PORT=3006)
       */
      PORT = process.argv[2].slice(5)


/**
 * Funcion para obtener un archivo dentro de la carpeta del proyecto
 */
function getFile(fileName, filePath = '') {
  const file = path.join(__dirname, filePath, fileName)
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'))
  return data
}

/**
 * Declaramos la carpeta donde estan los archivos 'estaticos'.
 * (Archivos que no hace falta que sean procesados antes de mostrarse al usuario.)
 */
app.use(express.static('public'))

/**
 * Endpoints para las peticiones de paginas web.
 */
app.get('/', (req, res) => {
  const page = path.join(pagesPath, 'index.html')
  res.sendFile(page)
})

app.get('/list', (req, res) => {
  const page = path.join(pagesPath, 'productlist.html')
  res.sendFile(page)
})

app.get('/details', (req, res) => {
  const page = path.join(pagesPath, 'productdetails.html')
  res.sendFile(page)
})

/**
 * Endpoints para las peticiones de datos de producto
 */
app.get('/api/products', (req, res) => {
  const products = getFile('data.json')
  res.send(products)
})

app.get('/api/products/:id', (req, res) => {
  /**
   * Tomamos el id que viene por parametro en la url
   * Buscamos el producto que coincida con el id
   * Si no existe tal producto se responde con la pagina notfound.html
   */
  const id = req.params.id
  const products = getFile('data.json')
  const product = products.find(p => p.id === id)
  product
    ? res.send(product)
    : res.sendFile(path.join(pagesPath, 'notfound.html'))
})

/**
 * Endpoint para todas las demas rutas no declaradas
 * Esto responde con la pagina de notfound
 */
app.get('*', (req, res) => {
  const page = path.join(pagesPath, 'notfound.html')
  res.sendFile(page)
})

/**
 * Declaramos que escuche en el puerto que constatamos al principio del archivo
 */
app.listen(PORT)
console.log(`Server on port ${PORT}`)
console.log(`http://localhost:${PORT}`)
console.log('Press <CTRL>+<C> to quit')