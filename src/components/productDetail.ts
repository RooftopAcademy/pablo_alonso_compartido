import Product from "../Product"

function productDetail(product: Product | undefined): string {
  // Si product es undefined injecta un mensaje de error
  if (!product) return `<h3>There was an error loading the product details :(</h3>`

  return `
    <img class="nft--img" src="${product.picture}" alt="${product.title} by ${product.author}">
    <h1 class="nft--title">${product.title}</h1>
    <h2 class="nft--author">${product.author}</h2>
    <p class="nft--details">${product.description}</p>
    <h3 class="nft--price">$${product.price}</h3>
    <button class="btn buy-now js-add-to-cart" data-product-id="${product.id}">Buy now</button>
  `
}

export default productDetail