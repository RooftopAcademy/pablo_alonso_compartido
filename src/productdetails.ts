import {
  fetchProduct,
  injectArrayInDOM,
  injectSingleInDOM } from './utils/utils'
  
import { CommentProduct, DataProduct } from './ts/types'

import commentItem from './components/commentItem'
import Shop from './Shop'
import Product from './Product'

function productDetails(): void {
  const shop: Shop = new Shop
  // const URL = 'https://wrongurl.com/' // To test the error message to the client
  const apiURL: string = 'https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products'

  fetchProduct(apiURL, renderStep)

  function renderStep(data: DataProduct[]): void {
    shop.loadProduct(data)
    renderCommentsList()
  }

  function renderCommentsList(): void {
    const commentList = document.getElementById('comments-list') as HTMLElement
    const product: (Product | undefined) = shop.getCatalogue().getById('CdeG4by6YE826o0RegX1')
    // Si no existe el producto se injecta un mensaje de error para el usuario al DOM.
    if (!product) return injectSingleInDOM(product, commentList, commentItem)
    // Si existe el producto se injecta el/los comentarios al DOM.
    const comments: CommentProduct[] = product.comment
    return injectArrayInDOM(comments, commentList, commentItem)
  }
}

export default productDetails