import {ProductInterface} from '../interfaces/types'
import ProductFactory from '../factories/ProductFactory'

class ProductRepository {
    private items : ProductInterface[] = []

    public constructor(data : []) {
        this.items = data.map(item => ProductFactory.create(item))
    }

    public get() : ProductInterface[] {
        return this.items
    }
}

export default ProductRepository