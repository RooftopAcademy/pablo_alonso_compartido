import {ProductInterface} from '../interfaces/types'
import ProductFactory from '../factories/ProductFactory'

class ProductRepository {
  private items : ProductInterface[] = []

  public constructor(data : ProductInterface[]) {
    this.items = data.map((item: ProductInterface) => ProductFactory.create(item))
  }


  public get(): ProductInterface[] {
    return this.items
  }

  public getById(id: string): (ProductInterface | undefined) {
    return this.items.find((item: (ProductInterface)) => item.id == id)
  }
}

export default ProductRepository