// Ejercicio: Clase 14/09/2021 (2/3)

addSoldOutListener()

function toggleDisplayTemporarily(node) {
  if (node.classList.contains('d-none')) {
    node.classList.replace('d-none', 'd-flex');
    setTimeout(function() {
      node.classList.replace('d-flex', 'd-none');
    }, 3000)
  }
};

function addSoldOutListener() {
  const soldOut = document.querySelectorAll('.sold-out');
  const notAvaliable = document.getElementById('not-avaliable');

  soldOut.forEach(el => el.addEventListener('click', function() {
    toggleDisplayTemporarily(notAvaliable)
  }));
}


// Ejercicio: Clase 14/09/2021 (3/3)
// Verificamos que si el usuario scrollea debajo de mitad de pagina 
const goUp = document.getElementById('go-up');
const halfPage = document.body.clientHeight / 2;

function isHalfPage() {
  if (window.scrollY > halfPage) return true
  return false
};

function setDisplayFlex(node) {
  if (node.classList.contains('d-none')) return node.classList.replace('d-none', 'd-flex');
  return
};

function setDisplayNone(node) {
  if (node.classList.contains('d-flex')) return node.classList.replace('d-flex', 'd-none');
  return
};

window.addEventListener('scroll', () => {
  if (isHalfPage()) return setDisplayFlex(goUp)
  return setDisplayNone(goUp)
})



// Ejercicio: Clase 16/09/2021
// Representamos la tienda con Shop, los productos estan dentro de catalogo y este a su vez en Shop
const shop = new Shop

// Emulamos una llamada a una API para conseguir los datos y crear productos.
shop.fetchProduct()

renderProductsList()
addCartListener()

function renderProductsList() {
  // Injecta todos los nft sin filtros
  const allNfts = document.getElementById('all-nfts')
  shop.catalogue.getAll().forEach(product => allNfts.innerHTML += productItem(product))

  // Injecta en el DOM todos los productos filtrados por su categoria.
  const mostValuableNfts = document.getElementById('most-valuable-nft')
  shop.catalogue.getByCategory('most-valuable').forEach(product => mostValuableNfts.innerHTML += productItem(product))

  const colorfulNfts = document.getElementById('colorful-nfts')
  shop.catalogue.getByCategory('colorful').forEach(product => colorfulNfts.innerHTML += productItem(product))

  const strangeNfts = document.getElementById('strange-nfts')
  shop.catalogue.getByCategory('strange').forEach(product => strangeNfts.innerHTML += productItem(product))
}

function addCartListener() {
  // Boton comprar - Agrega al carrito el producto.
  const buyBtn = Array.from(document.getElementsByClassName('js-add-to-cart'))
  buyBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      const productToAdd = shop.getCatalogue().getById(this.dataset.productId)
      shop.getCart().add(productToAdd)
      return
    })
  })
}