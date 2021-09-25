import Cart from './Cart'
import Catalogue from './Catalogue'
import Product from './Product'

import { DataProduct } from './ts/types'

export default class Shop {
  private cart: Cart = new Cart
  private catalogue: Catalogue = new Catalogue

  public getCart(): Cart {
    return this.cart
  }

  public getCatalogue(): Catalogue {
    return this.catalogue
  }

  public loadProduct(data: DataProduct[]): void {
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