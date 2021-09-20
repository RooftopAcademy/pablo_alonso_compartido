// Ejercicio: Clase 14/09/2021 (2/3)

addSoldOutListener()

function toggleDisplayTemporarily(node, time) {
  if (node.classList.contains('d-none')) {
    node.classList.replace('d-none', 'd-flex');
    setTimeout(function() {
      node.classList.replace('d-flex', 'd-none');
    }, time)
  }
};

function addSoldOutListener() {
  const soldOut = document.querySelectorAll('.sold-out');
  const notAvaliable = document.getElementById('not-avaliable');

  soldOut.forEach(el => el.addEventListener('click', function() {
    toggleDisplayTemporarily(notAvaliable, 3000)
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
};

function setDisplayNone(node) {
  if (node.classList.contains('d-flex')) return node.classList.replace('d-flex', 'd-none');
};

window.addEventListener('scroll', () => {
  if (isHalfPage()) return setDisplayFlex(goUp)
  return setDisplayNone(goUp)
})



// Ejercicio: Clase 16/09/2021
// Representamos la tienda con Shop, los productos estan dentro de catalogo y este a su vez en Shop
const shop = new Shop
const cartToggle = document.getElementById('cart-toggle')
const cartList = document.getElementById('cart-list')
const addedToCartMessage = document.getElementById('added-to-cart')
// Emulamos una llamada a una API para conseguir los datos y crear productos.
shop.fetchProduct()

renderProductsList()
addListenerAddCart()
addListenerDisplayCart()
addListenerSeeCart()


function addListenerDisplayCart() {
  cartToggle.addEventListener('click', function () {
    if (cartList.classList.contains('d-none')) return setDisplayFlex(cartList)
    return setDisplayNone(cartList)
  })
}

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

// Injecta los productos en el Cart en el DOM
function renderProductCart() {
  shop.getCart().getAll().forEach(product => cartList.innerHTML += cartItem(product))
}


function addListenerAddCart() {
  // Boton comprar - Agrega al carrito el producto.
  const buyBtn = Array.from(document.getElementsByClassName('js-add-to-cart'))

  buyBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      const productToAdd = shop.getCatalogue().getById(this.dataset.productId)
      shop.getCart().add(productToAdd)
      renderProductCart()
      toggleDisplayTemporarily(addedToCartMessage, 4000)

      // Ejecuto ahora la funcion addListenerCartRemove() ya que antes no existia el boton de remover en el DOM
      addListenerCartRemove()
    })
  })
}


function addListenerCartRemove() {
  const removeBtn = Array.from(document.getElementsByClassName('js-remove-from-cart'))

  removeBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      const productToRemove = shop.getCart().getById(this.dataset.productId)
      const indexProductToRemove = shop.getCart().getAll().indexOf(productToRemove)
      shop.getCart().removeByIndex(indexProductToRemove)

      // Para eliminar el nodo que contiene al boton en el DOM:
      this.parentElement.remove()
    })
  })
}

// Abre la lista de menu cuando toca el anchor del mensaje al añadir al carrito
function addListenerSeeCart() {
  const seeCart = document.getElementById('see-cart')
  seeCart.addEventListener('click', function () {
    setDisplayFlex(cartList)
  })
}