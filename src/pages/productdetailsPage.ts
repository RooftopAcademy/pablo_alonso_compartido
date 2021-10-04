import {
  toggleDisplayTemporarily,
  setDisplayFlex,
  setDisplayNone,
  fetchProduct,
  injectArrayInDOM,
  injectSingleInDOM,
  getProductIDFromPath
} from '../utils/utils'

  import productDetail from '../components/productDetail'
  import commentItem from '../components/commentItem'
  import cartItem from '../components/cartItem'

  import Shop from '../entities/Shop'
  import ProductRepository from '../repositories/ProductRepository'
  import {ProductInterface, ProductCommentInterface } from '../interfaces/types'

function productDetails(): void {

  const shop: Shop = new Shop
  const cartList = document.getElementById('cart-list') as HTMLElement

  const apiURL: string = 'https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products'

  /**
   * - FetchProduct trae los datos de la API y ejecuta un callback
   * - RenderStep son los pasos para que funcionen los eventos en la pagina
   */
  fetchProduct(apiURL, renderStep)

  function renderStep(data: ProductInterface[]): void {
    /**
     * - Guardamos el ID conseguido del path
     * - Luego creamos un repositorio para guardar los datos del fetch
     * - Finalmente buscamos el producto por el ID y lo guardamos
     */
    const productID: string = getProductIDFromPath(window.location.search)
    const productRepository = new ProductRepository(data) as ProductRepository
    const productFound: (ProductInterface | undefined) = productRepository.getById(productID)

    /**
     * Si no se encuentra el producto se redirige a la pagina notfound.
     */
    if (!productFound) return window.location.replace('notfound.html')

    /**
     * Render de un producto.
     */
    renderProduct(productFound)

    /**
     * Listener para el boton "Buy now".
     */
    addListenerAddCart(productFound)

    /**
     * Listener para el icono de Carrito, abre o cierra la lista.
     */
    addListenerDisplayCart()

    /**
     * Listener que abre la lista cuando se clickea en el boton del mensaje "se ha agregado al carrito"
     */
    addListenerSeeCart()

    /**
     * Renderiza los comentarios del producto.
     */
    renderCommentsList(productFound)
  }


  function renderProduct(product: ProductInterface): void {
    /**
     * Se agrega el producto al DOM con sus detalles.
     */
    const nftContainer = document.getElementById('nft') as HTMLElement
    injectSingleInDOM(product, nftContainer, productDetail)
  }
  
  function addListenerAddCart(product: ProductInterface): void {
    const buyBtn = document.getElementById('add-cart') as HTMLButtonElement
    const addedToCartMessage = document.getElementById('added-to-cart') as HTMLElement

    buyBtn.addEventListener('click', function (): void {
      /**
       * Se agrega el producto al carrito.
       */
      shop.getCart().add(product)

      /**
       * Refresca la lista del carrito con lo que haya en Cart.
       */
      renderProductCart()

      /**
       * Muestra temporalmente el mensaje de "Se añadió al carrito".
       */
      toggleDisplayTemporarily(addedToCartMessage, 4000)

      /**
       * Ejecuto ahora la funcion ya que antes no existia el boton de remover en el DOM.
       */
      addListenerCartRemove()
    })
  }

  function renderProductCart(): void {
    injectArrayInDOM(shop.getCart().getAll(), cartList, cartItem)
  }

  function addListenerCartRemove(): void {
    const removeBtn = Array.from(document.getElementsByClassName('js-remove-from-cart')) as HTMLButtonElement[]

    removeBtn.forEach((btn: HTMLButtonElement) => {
      /**
       * Toma el ID del producto dentro del boton y busca el producto
       */
      const productToRemove = shop.getCart().getById(btn.dataset.productId) as ProductInterface

      /**
       * Luego de encontrarlo buscamos el index donde se encuentra en el carrito.
       */
      const indexProductToRemove: number = shop.getCart().getAll().indexOf(productToRemove)

      /**
       * Guardamos en una variable el elemento padre que contiene al boton.
       */
      const parentElement = btn.parentElement as HTMLElement

      btn.addEventListener('click', function (): void {

        /**
         * Removemos el producto del carrito.
         */
        shop.getCart().removeByIndex(indexProductToRemove)

        /**
         * Removemos el item <li>...</li> de la lista del carrito.
         */
         parentElement.remove()
      })
    })
  }


  function addListenerDisplayCart(): void {
    const cartToggle = document.getElementById('cart-toggle') as HTMLElement

    cartToggle.addEventListener('click', function () {
      if (cartList.classList.contains('d-none')) return setDisplayFlex(cartList)
      return setDisplayNone(cartList)
    })
  }


  function addListenerSeeCart(): void {
    const seeCart = document.getElementById('see-cart') as HTMLElement

    seeCart.addEventListener('click', function (): void {
      setDisplayFlex(cartList)
    })
  }


  function renderCommentsList(product: ProductInterface): void {
    const commentList = document.getElementById('comments-list') as HTMLElement

    /**
     * Si existe el producto se injecta el/los comentarios al DOM.
     */
    const comments: ProductCommentInterface[] = product.comments
    injectArrayInDOM(comments, commentList, commentItem)
  }
}

export default productDetails