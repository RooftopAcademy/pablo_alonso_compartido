import productDetail from '../../src/components/productDetail'
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

const errorMessage = '<h3>There was an error loading the product details :(</h3>'

const expectedOutput = `
    <img class="nft--img" src="${testProduct.picture}" alt="${testProduct.title} by ${testProduct.author}">
    <h1 class="nft--title">${testProduct.title}</h1>
    <h2 class="nft--author">${testProduct.author}</h2>
    <p class="nft--details">${testProduct.description}</p>
    <h3 class="nft--price">$${testProduct.price}</h3>
    <button class="btn buy-now" id="add-cart" data-product-id="${testProduct.id}">Buy now</button>
  `

describe('Test productDetail return', () => {
  test('return error message', () => {
    expect(productDetail(undefined)).toBe(errorMessage)
  })

  test('return an html structure', () => {
    expect(productDetail(testProduct)).toBe(expectedOutput)
  })
})