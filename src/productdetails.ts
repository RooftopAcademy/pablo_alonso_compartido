import {
  toggleDisplayTemporarily,
  setDisplayFlex,
  setDisplayNone,
  fetchProduct,
  injectArrayInDOM,
  injectSingleInDOM
} from './utils/utils'

  import productDetail from './components/productDetail'
  import commentItem from './components/commentItem'
  import cartItem from './components/cartItem'

  import Shop from './Shop'
  import Product from './Product'
  import { CommentProduct, DataProduct } from './ts/types'

function productDetails(): void {

  const shop: Shop = new Shop
  const cartList: HTMLElement | null = document.getElementById('cart-list')

  // const URL = 'https://wrongurl.com/' // To test the error message to the client
  const apiURL: string = 'https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products'

  fetchProduct(apiURL, renderStep)

  function renderStep(data: DataProduct[]): void {
    shop.loadProduct(data)

    const productID = getProductIDQuery()

    if (isValidID(productID)) {

      renderProduct(productID)

      // Listener para el boton "Buy now"
      addListenerAddCart()

      // Listener para el icono de Carrito, abre o cierra la lista.
      addListenerDisplayCart()

      // Listener para Abrir la lista de menu cuando toca el anchor del mensaje al añadir algo al carrito.
      addListenerSeeCart()

      renderCommentsList(productID)
      return
    }
    // Si no se encuentra el id se redirige a la pagina notfound
    window.location.replace('notfound.html')
    return
  }

  function getProductIDQuery(): string {
    let searchQuery: string = window.location.search;
    const searchTerm: string = '='
    const productID: string = searchQuery.slice(searchQuery.indexOf(searchTerm)).replace(searchTerm, '')
    return productID
  }

  function isValidID(productID: string): boolean {
    return shop.getCatalogue().getById(productID) ?true :false
  }

  function renderProduct(productID: string): void {
    const nftContainer = document.getElementById('nft') as HTMLElement
    const product: (Product | undefined) = shop.getCatalogue().getById(productID)
    injectSingleInDOM(product, nftContainer, productDetail)
  }
  
  function addListenerAddCart(): void {
    const buyBtn = Array.from(document.getElementsByClassName('js-add-to-cart')) as HTMLElement[]
    const addedToCartMessage: HTMLElement | null = document.getElementById('added-to-cart')

    buyBtn.forEach(function (btn: HTMLElement): void {
      btn.addEventListener('click', function (): void {
        if (!btn.dataset.productId) return
        const productToAdd: Product | undefined = shop.getCatalogue().getById(btn.dataset.productId)

        if (!productToAdd) return
        shop.getCart().add(productToAdd)
        renderProductCart()

        if (!addedToCartMessage) return
        toggleDisplayTemporarily(addedToCartMessage, 4000)

        // Ejecuto ahora la funcion ya que antes no existia el boton de remover en el DOM.
        addListenerCartRemove()
      })
    })
  }

  // Injecta los productos en el carrito
  function renderProductCart(): void {
    if (!cartList) return
    injectArrayInDOM(shop.getCart().getAll(), cartList, cartItem)
  }

  function addListenerCartRemove(): void {
    const removeBtn = Array.from(document.getElementsByClassName('js-remove-from-cart')) as HTMLElement[]

    removeBtn.forEach((btn: HTMLElement) => {
      btn.addEventListener('click', function (): void {
        if (!btn.dataset.productId) return
        const productToRemove: (Product | undefined) = shop.getCart().getById(btn.dataset.productId)

        if (!productToRemove) return
        const indexProductToRemove: number = shop.getCart().getAll().indexOf(productToRemove)
        shop.getCart().removeByIndex(indexProductToRemove)

        // Para eliminar el nodo que contiene al boton en el DOM:
        if (btn.parentElement) btn.parentElement.remove()
      })
    })
  }


  function addListenerDisplayCart(): void {
    const cartToggle = document.getElementById('cart-toggle') as HTMLElement
    cartToggle.addEventListener('click', function () {
      if (!cartList) return
      if (cartList.classList.contains('d-none')) return setDisplayFlex(cartList)
      return setDisplayNone(cartList)
    })
  }


  function addListenerSeeCart(): void {
    const seeCart = document.getElementById('see-cart') as HTMLElement
    seeCart.addEventListener('click', function (): void {
      if (!cartList) return
      setDisplayFlex(cartList)
    })
  }


  function renderCommentsList(idProduct: string): void {
    const commentList = document.getElementById('comments-list') as HTMLElement
    const product: (Product | undefined) = shop.getCatalogue().getById(idProduct)
    // Si el producto es 'undefined' se injecta un mensaje de error para el usuario al DOM.
    if (!product) return injectSingleInDOM(product, commentList, commentItem)
    // Si existe el producto se injecta el/los comentarios al DOM.
    const comments: CommentProduct[] = product.comment
    return injectArrayInDOM(comments, commentList, commentItem)
  }
}

export default productDetails