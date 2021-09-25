import Product from "./Product"
export default class Cart {
  products: Product[] = []


  add(p: Product): void {
    if (this.getAll().length > 0) throw new Error('Only one product is allowed in the cart.')
    this.products.push(p)
  }

  getAll(): Product[] {
    return this.products
  }

  getById(id: string): (Product | undefined) {
    return this.products.find(p => p.id === id)
  }

  removeAll(): void {
    this.products = []
  }

  removeByIndex(index: number): void {
    this.products.splice(index)
  }

  // Marca a todos los productos como no disponibles para futuras compras
  // Y vacia el carrito.
  buyCart(): void {
    this.products.map(p => p.notAvaliable())
    this.removeAll()
  }
}