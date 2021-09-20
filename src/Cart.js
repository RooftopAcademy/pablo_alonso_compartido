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
    return this.products.find(p => p.id === id)
  }

  removeAll() {
    this.products = []
  }

  removeByIndex(index) {
    this.products.splice(index)
  }

  // Marca a todos los productos como no disponibles para futuras compras
  // Vacia el carrito.
  buyCart() {
    this.products.map(p => p.notAvaliable())
    this.removeAll()
  }
}