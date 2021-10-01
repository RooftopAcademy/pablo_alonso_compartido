import Product from '../classes/Product'
import {ProductInterface} from '../interfaces/types'

class ProductFactory {
    static create(item: ProductInterface) {
        const product: Product = new Product
        product.id = item.id
        product.picture = item.picture
        product.title = item.title
        product.author = item.author
        product.description = item.description
        product.price = item.price
        product.comment = item.comments
        product.category = item.category
        product.isAvaliable = item.isAvaliable

        return item
    }
}

export default ProductFactory