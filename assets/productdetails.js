
const shop = new Shop

fetchProduct()

async function fetchProduct() {
  const URL = 'https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products'
  await fetchData(URL).then(data => {
    if (data === undefined) throw new Error('Fetch error')
    shop.loadProduct(data)
  }).catch(err => console.log(err))
  renderCommentsList()
}

function renderCommentsList() {
  const comments = shop.getCatalogue().getById('CdeG4by6YE826o0RegX1').comment
  return injectArrayInDOM(comments, document.getElementById('comments-list'), commentItem)
}