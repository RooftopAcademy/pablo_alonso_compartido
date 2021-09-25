import Cart from './Cart'
import Catalogue from './Catalogue'
import Product from './Product'

import { DataProduct } from './ts/types'

export default class Shop {
  cart: Cart = new Cart
  catalogue: Catalogue = new Catalogue

  getCart(): Cart {
    return this.cart
  }

  getCatalogue(): Catalogue {
    return this.catalogue
  }

  loadProduct(data: DataProduct[]): void {
    if (data) return data.forEach(item => {
      const product = new Product
      product.id = item.id
      product.picture = item.picture
      product.title = item.title
      product.author = item.author
      product.description = item.description
      product.price = item.price
      product.comment = item.comments
      product.category = item.category
      product.isAvaliable = item.isAvaliable
      this.catalogue.add(product)
    })
    return
  }
}