import cartItem from '../../src/components/cartItem'
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

const expectedOutput = `
  <li class="cart-item" id="${testProduct.id}">
    <img class="cart-thumbnail" src="${testProduct.picture}" alt="${testProduct.title} by ${testProduct.author}">
    <div class="cart-text">
      <p class="cart-title">${testProduct.title}</p>
      <p class="cart-author">${testProduct.author}</p>
    </div>
    <button class="btn cart-remove-item js-remove-from-cart" data-product-id="${testProduct.id}">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
        <rect x="2" y="1" width="14" height="20" rx="2" fill="#FF4444"/>
        <rect y="1" width="18" height="2" rx="1" fill="#FF4444"/>
        <rect x="7" width="4" height="2" rx="1" fill="#FF4444"/>
        <rect x="6" y="5" width="14" height="2" rx="1" transform="rotate(90 6 5)" fill="white"/>
        <rect x="10" y="5" width="14" height="2" rx="1" transform="rotate(90 10 5)" fill="white"/>
        <rect x="14" y="5" width="14" height="2" rx="1" transform="rotate(90 14 5)" fill="white"/>
        </svg>
    </button>
  </li>
  `

describe('Test cartItem return', () => {
  test('return an html structure', () => {
    expect(cartItem(testProduct)).toBe(expectedOutput)
  })
})