import Product from "./Product"

export default class Catalogue {
  private products: Product[] = []

  public add(p: Product): void {
    this.products.push(p)
  }

  public getAll(): Product[] {
    return this.products
  }

  public getById(id: string): (Product | undefined) {
    return this.products.find((p: Product) => p.id == id)
  }

  public getByCategory(category: string): Product[] {
    return this.products.filter((p: Product) => p.category.includes(category))
  }
}