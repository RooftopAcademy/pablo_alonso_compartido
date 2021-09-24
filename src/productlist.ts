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

const cartList = document.getElementById('cart-list')

fetchProduct()

async function fetchProduct() {
  const URL = 'https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products'
  await fetchData(URL).then(data => {
    if (data === undefined) throw new Error('Fetch error')
    shop.loadProduct(data)
  }).catch(err => console.log(err))

  renderProductsList()
  // Listener para el boton "Buy now"
  addListenerAddCart()
  // Listener para el icono de Carrito, abre o cierra la lista.
  addListenerDisplayCart()
  // Listener para Abrir la lista de menu cuando toca el anchor del mensaje al añadir algo al carrito.
  addListenerSeeCart()
}

function renderProductsList() {
  if (!shop.getCatalogue().products.length) { 
    injectSingleInDOM(undefined, document.getElementById('all-nfts'), productItem)
    injectSingleInDOM(undefined, document.getElementById('most-valuable-nft'), productItem)
    injectSingleInDOM(undefined, document.getElementById('colorful-nfts'), productItem)
    injectSingleInDOM(undefined, document.getElementById('strange-nfts'), productItem)
  }
  // Injecta todos los nft sin filtros
  injectArrayInDOM(shop.getCatalogue().getAll(), document.getElementById('all-nfts'), productItem)

  // Injecta en el DOM todos los productos filtrados por su categoria.
  injectArrayInDOM(shop.getCatalogue().getByCategory('most-valuable'), document.getElementById('most-valuable-nft'), productItem)
  injectArrayInDOM(shop.getCatalogue().getByCategory('colorful'), document.getElementById('colorful-nfts'), productItem)
  injectArrayInDOM(shop.getCatalogue().getByCategory('strange'), document.getElementById('strange-nfts'), productItem)
}

// Injecta los productos en el carrito
function renderProductCart() {
  injectArrayInDOM(shop.getCart().getAll(), cartList, cartItem)
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

function addListenerAddCart() {
  const buyBtn = Array.from(document.getElementsByClassName('js-add-to-cart'))
  const addedToCartMessage = document.getElementById('added-to-cart')

  buyBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      const productToAdd = shop.getCatalogue().getById(this.dataset.productId)
      shop.getCart().add(productToAdd)
      renderProductCart()
      toggleDisplayTemporarily(addedToCartMessage, 4000)

      // Ejecuto ahora la funcion ya que antes no existia el boton de remover en el DOM
      addListenerCartRemove()
    })
  })
}

function addListenerDisplayCart() {
  const cartToggle = document.getElementById('cart-toggle')
  cartToggle.addEventListener('click', function () {
    if (cartList.classList.contains('d-none')) return setDisplayFlex(cartList)
    return setDisplayNone(cartList)
  })
}

function addListenerSeeCart() {
  const seeCart = document.getElementById('see-cart')
  seeCart.addEventListener('click', function () {
    setDisplayFlex(cartList)
  })
}