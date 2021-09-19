class Catalogue {

  constructor() {
    this.products = []
  }

  add(p) {
    this.products.push(p)
  }

  getAll() {
    return this.products
  }

  getById(id) {
    const result = this.products.filter(p => p.id === id)[0]
    return result
  }

  getByCategory(category) {
    return this.products.filter(p => p.category.includes(category))
  }
}