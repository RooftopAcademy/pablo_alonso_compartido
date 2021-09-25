import Product from "../Product"

function productItem(product: Product | undefined): string {
  // Si product es undefined injecta un mensaje de error
  if (!product) return `<article class="nft"><h3>There was an error loading the comments :(</h3></article>`

  return `
  <article class="nft">
    <img class="nft--img" src="${product.picture}" alt="${product.title} of ${product.author}">
    <h2 class="nft--title">${product.title}</h2>
    <p class="nft--author">${product.author}</p>
    <div class="nft--anchors">
      <a class="anchor details" href="productdetails.html">Details</a>
      <button class="btn buy-now js-add-to-cart" data-product-id="${product.id}">Buy now</button>
    </div>
  </article>
  `
}

export default productItem