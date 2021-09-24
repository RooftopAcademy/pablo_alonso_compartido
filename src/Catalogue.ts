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
    return this.products.find(p => p.id == id)
  }

  getByCategory(category) {
    return this.products.filter(p => p.category.includes(category))
  }
}