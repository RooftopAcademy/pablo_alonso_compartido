class Shop {
  
  constructor() {
    this.cart = new Cart
    this.catalogue = new Catalogue
  }

  getCart() {
    return this.cart
  }

  getCatalogue() {
    return this.catalogue
  }

  loadProduct(data) {
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
      this.getCatalogue().add(product)
    })
  }
}