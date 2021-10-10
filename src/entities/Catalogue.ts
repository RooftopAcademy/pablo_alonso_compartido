import { ProductInterface } from '../interfaces/types'
import List from './List'

export default class Catalogue extends List {

  public add(p: ProductInterface[]): void {
    this.items = p
  }
}
