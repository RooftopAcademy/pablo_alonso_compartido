class Cart {
  constructor() {
    this.products = []
  }

  add(p) {
    if (!(p instanceof Product)) throw new Error('Solo se permite añadir entidades tipo Product.')
    if (shop.getCart().products.length >= 1) throw new Error('Solo se permite un producto en el carrito.')
    return this.products.push(p)
    
  }

  clean() {
    this.products = []
  }

  buyCart() {
    this.products.map(p => p.notAvaliable())
    this.products = []
  }
}