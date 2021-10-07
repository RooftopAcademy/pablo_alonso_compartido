import { ProductInterface } from "../interfaces/types"

export default class Cart {

  private products: ProductInterface[] = []


  public add(p: ProductInterface): void {
    this.products.push(p)
  }

  public getAll(): ProductInterface[] {
    return this.products
  }

  public getById(id: string): (ProductInterface | undefined) {
    return this.products.find(p => p.id === id)
  }

  public removeAll(): void {
    this.products = []
  }

  public removeByIndex(index: number): void {
    this.products.splice(index)
  }

  // Marca no disponibles para futuras compras Y vacia el carrito.
  public buyCart(): void {
    this.products.forEach(p => p.notAvaliable())
    this.removeAll()
  }
}
