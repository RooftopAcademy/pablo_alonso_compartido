import productItem from '../../src/components/productItem'
import { ProductInterface } from '../../src/interfaces/types'

const testProduct : ProductInterface = {
  "id": "123",
  "picture": "img.png",
  "title": "Title",
  "author": "Author",
  "description": "Lorem ipsum",
  "price": 321,
  "comments": [],
  "category": [],
  "isAvaliable": true,
  notAvaliable: ()=>{}
}

const errorMessage = '<article class="nft"><h3>There was an error loading the products :(</h3></article>'

const expectedOutput = `
  <article class="nft">
    <img class="nft--img" src="img.png" alt="Title by Author">
    <h2 class="nft--title">Title</h2>
    <p class="nft--author">Author</p>
    <div class="nft--anchors">
      <a class="anchor details" href="/details?product=123">Details</a>
      <button class="btn buy-now js-add-to-cart" data-product-id="123">Buy now</button>
    </div>
  </article>
  `

describe('Test productItem return', () => {
  test('return error message', () => {
    expect(productItem(undefined)).toBe(errorMessage)
  })

  test('return an html structure', () => {
    expect(productItem(testProduct)).toBe(expectedOutput)
  })
})