import {
  fetchProduct,
  injectArrayInDOM,
  injectSingleInDOM } from './utils/utils'
  
import { CommentProduct, DataProduct } from './ts/types'

import productDetail from './components/productDetail'
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

    const idProduct = getProductIdQuery()

    renderProductDetails(idProduct)
    renderCommentsList(idProduct)
  }

  function getProductIdQuery(): string {
    let searchQuery: string = window.location.search;
    const searchTerm: string = '='
    const idProduct: string = searchQuery.slice(searchQuery.indexOf(searchTerm)).replace(searchTerm, '')
    return idProduct
  }

  function renderProductDetails(idProduct: string): void {
    const nftContainer = document.getElementById('nft') as HTMLElement
    const product: (Product | undefined) = shop.getCatalogue().getById(idProduct)
    injectSingleInDOM(product, nftContainer, productDetail)
  }

  function renderCommentsList(idProduct: string): void {
    const commentList = document.getElementById('comments-list') as HTMLElement
    const product: (Product | undefined) = shop.getCatalogue().getById(idProduct)
    // Si el producto es 'undefined' se injecta un mensaje de error para el usuario al DOM.
    if (!product) return injectSingleInDOM(product, commentList, commentItem)
    // Si existe el producto se injecta el/los comentarios al DOM.
    const comments: CommentProduct[] = product.comment
    return injectArrayInDOM(comments, commentList, commentItem)
  }
}

export default productDetails