import { ProductInterface } from '../interfaces/types'

interface SortProductInterface {
  a: ProductInterface
  b: ProductInterface
  key: keyof ProductInterface
}

export default class Catalogue {
  private products: ProductInterface[] = []

  public add(p: ProductInterface[]): void {
    this.products = p
  }

  public get(): ProductInterface[] {
    return this.products
  }

  // public sortByTitle(order?: 'desc' | 'asc'): ProductInterface[] {
  //   return (order === 'desc')
  //   ?[...this.products].sort((a,b) => this.compareBy({a, b, key: "title"})).reverse()
  //   :[...this.products].sort((a,b) => this.compareBy({a, b, key: "title"}))
  // }

  // public sortByTitle(property?: keyof ProductInterface, order?: 'desc' | 'asc'): ProductInterface[] {
  //   const prop = property || 'title'
  //   const sorted = this.sortBy(prop)
  //   return this.orderBy(sorted, order)
  // }

  public sortByTitle(order?: 'desc' | 'asc'): ProductInterface[] {
    const sorted = this.sortBy('title')
    return this.orderBy(sorted, order)
  }

  public sortByAuthor(order?: 'desc' | 'asc'): ProductInterface[] {
    const sorted = this.sortBy('author')
    return this.orderBy(sorted, order)
  }
  public sortByPrice(order?: 'desc' | 'asc'): ProductInterface[] {
    const sorted = this.sortBy('price')
    return this.orderBy(sorted, order)
  }


  private orderBy(sorted: ProductInterface[], order?: 'desc' | 'asc'): ProductInterface[] {
    return (order==='desc')
      ? sorted.reverse()
      : sorted
  }

  private sortBy(key: keyof ProductInterface): ProductInterface[] {
    return [...this.products].sort((a,b) => this.compareBy({a, b, key}))
  }

  private compareBy({a, b, key}: SortProductInterface): (1 | -1 | 0) {
    if ((a)[key] > (b)[key]) return 1
    if ((a)[key] < (b)[key]) return -1
    return 0
  }
}