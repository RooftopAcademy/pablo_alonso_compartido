
const shop = new Shop

fetchProduct()

async function fetchProduct() {
  // const URL = 'https://wrongurl.com/' // To test the error message to the client
  const URL = 'https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products'
  await fetchData(URL).then(data => {
    if (data === undefined) throw new Error('Fetch error')
    shop.loadProduct(data)
  }).catch(err => console.log(err))
  renderCommentsList()
}

function renderCommentsList() {
  const product = shop.getCatalogue().getById('CdeG4by6YE826o0RegX1')
  // Si no existe el producto se injecta un mensaje de error para el usuario al DOM.
  if (!product) return injectSingleInDOM(product, document.getElementById('comments-list'), commentItem)
  // Si existe el producto se injecta el/los comentarios al DOM.
  const comments = product.comment
  return injectArrayInDOM(comments, document.getElementById('comments-list'), commentItem)
}