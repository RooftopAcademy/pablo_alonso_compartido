import { ProductInterface } from '../interfaces/types'

function productItem(product: ProductInterface | undefined): string {
  // Si product es undefined injecta un mensaje de error
  if (!product) return `<article class="nft"><h3>There was an error loading the products :(</h3></article>`

  return `
  <article class="nft">
    <img class="nft--img" src="${product.picture}" alt="${product.title} by ${product.author}">
    <h2 class="nft--title">${product.title}</h2>
    <p class="nft--author">${product.author}</p>
    <div class="nft--anchors">
      <a class="anchor details" href="/details?product=${product.id}">Details</a>
      <button class="btn buy-now js-add-to-cart" data-product-id="${product.id}">Buy now</button>
    </div>
  </article>
  `
}

export default productItem