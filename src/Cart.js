class Cart {
  constructor() {
    this.products = []
  }

  add(p) {
    if (!(p instanceof Product)) throw new Error('Solo se permite añadir entidades tipo Product.')
    if (shop.getCart().products.length >= 1) throw new Error('Solo se permite un producto en el carrito.')
    return this.products.push(p)
  }

  getAll() {
    return this.products
  }

  getById(id) {
    const result = this.products.filter(p => p.id === id)[0]
    return result
  }

  removeAll() {
    this.products = []
  }

  removeByIndex(index) {
    this.products.splice(index)
  }

  buyCart() {
    this.products.map(p => p.notAvaliable())
    this.products = []
  }
}