import Product from "./Product"
export default class Cart {
  private products: Product[] = []

  public add(p: Product): void {
    this.products.push(p)
  }

  public getAll(): Product[] {
    return this.products
  }

  public getById(id: string): (Product | undefined) {
    return this.products.find(p => p.id === id)
  }

  public removeAll(): void {
    this.products = []
  }

  public removeByIndex(index: number): void {
    this.products.splice(index)
  }

  // Marca a todos los productos como no disponibles para futuras compras
  // Y vacia el carrito.
  public buyCart(): void {
    this.products.map(p => p.notAvaliable())
    this.removeAll()
  }
}
