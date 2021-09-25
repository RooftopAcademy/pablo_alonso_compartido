import Product from "./Product"

export default class Catalogue {
  products: Product[] = []

  add(p: Product): void {
    this.products.push(p)
  }

  getAll(): Product[] {
    return this.products
  }

  getById(id: string): (Product | undefined) {
    return this.products.find(p => p.id == id)
  }

  getByCategory(category: string): Product[] {
    return this.products.filter(p => p.category.includes(category))
  }
}