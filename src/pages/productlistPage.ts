import {
  toggleDisplayTemporarily,
  setDisplayNone,
  fetchProduct,
  setDisplayFlex,
  injectArrayInDOM,
  isHalfPage
} from '../utils/utils'

import productItem from '../components/productItem'
import cartItem from '../components/cartItem'

import Shop from '../entities/Shop'
import Catalogue from '../entities/Catalogue'
import { ProductInterface } from '../interfaces/types'
import ProductRepository from '../repositories/ProductRepository'

function productList(): void {
  // Ejercicio: Clase 14/09/2021 (2/3)
  // addSoldOutListener()

  // function addSoldOutListener(): void {
  //   const soldOut: NodeListOf<HTMLElement> = document.querySelectorAll('.sold-out')
  //   const notAvaliable: HTMLElement | null = document.getElementById('not-avaliable')

  //   // Verificamos que existan las entidades
  //   if (!(soldOut.length > 0 && notAvaliable)) return

  //   soldOut.forEach((el: HTMLElement): void => el.addEventListener('click', function(): void {
  //     toggleDisplayTemporarily(notAvaliable, 3000)
  //   }));
  // }


  // Ejercicio: Clase 14/09/2021 (3/3)
  // Verificamos que si el usuario scrollea debajo de mitad de pagina
  addGoUpListener()

  function addGoUpListener(): void {
    const goUp = document.getElementById('go-up') as HTMLElement

    window.addEventListener('scroll', function (): void {
      if (isHalfPage()) return setDisplayFlex(goUp)
      return setDisplayNone(goUp)
    })
  }


  // Ejercicio: Clase 16/09/2021
  // Representamos la tienda con Shop, los productos estan dentro de productsRepository y este a su vez en Shop
  const shop: Shop = new Shop
  const cartList = document.getElementById('cart-list') as HTMLElement

  const apiURL: string = 'https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products'

  /**
   * - FetchProduct trae los datos de la API y ejecuta un callback
   * - RenderStep son los pasos para que funcionen los eventos en la pagina
   */
  fetchProduct(apiURL, renderStep)

  function renderStep(data: ProductInterface[]): void {
    const products: ProductRepository = new ProductRepository(data)

    const catalogue: Catalogue = new Catalogue
    catalogue.add(products.get())

    /**
     * Renderiza todos los productos y por categoria.
     */
    renderProductsList(products, catalogue)

    addListenerFilterSelect(catalogue)
    /**
     * Listener para el boton "Buy now"
     */
    addListenerAddCart(products)

    /**
     * Listener para el icono de Carrito, abre o cierra la lista.
     */
    addListenerDisplayCart()

    /**
     * Listener para Abrir la lista de menu cuando toca el anchor del mensaje al añadir algo al carrito.
     */
    addListenerSeeCart()
  }


  function renderProductsList(products: ProductRepository, catalogue: Catalogue): void {
    /**
     * Guardamos todas las secciones/categorias que van a contener a los productos.
     */
    const allNfts = document.getElementById('all-nfts') as HTMLElement
    const mostValuableNfts = document.getElementById('most-valuable-nfts') as HTMLElement
    const colorfulNfts = document.getElementById('colorful-nfts') as HTMLElement
    const strangeNfts = document.getElementById('strange-nfts') as HTMLElement

    /**
    * Injecta todos los productos
    */
    injectArrayInDOM(products.get(), allNfts, productItem)

    /**
    * Injecta productos filtrados por su categoria
    */
    injectArrayInDOM(products.getByCategory('most-valuable'), mostValuableNfts, productItem)
    injectArrayInDOM(products.getByCategory('colorful'), colorfulNfts, productItem)
    injectArrayInDOM(products.getByCategory('strange'), strangeNfts, productItem)
  }

  function addListenerFilterSelect(catalogue: Catalogue) {
    const allNfts = document.getElementById('all-nfts') as HTMLElement
    const selectSort = document.getElementById('filter-select') as HTMLSelectElement

    selectSort.addEventListener('change', function () {
      switch (selectSort.value) {
        /**
        * Injecta productos filtrados segun el titulo
        * en el primer caso es de la 'A' a la 'Z' y el segundo de la 'Z' a la 'A'
        */
        case 'title':
          allNfts.innerHTML = ''
          catalogue.sortByTitle()
            .forEach((item: ProductInterface) => allNfts.innerHTML += productItem(item))
          break;
        case 'title-desc':
          allNfts.innerHTML = ''
          catalogue.sortByTitle('desc')
            .forEach((item: ProductInterface) => allNfts.innerHTML += productItem(item))
          break;

        /**
        * Injecta productos filtrados segun el autor
        * en el primer caso es de la 'A' a la 'Z' y el segundo de la 'Z' a la 'A'
        */
        case 'author':
          allNfts.innerHTML = ''
          catalogue.sortByAuthor()
            .forEach((item: ProductInterface) => allNfts.innerHTML += productItem(item))
          break;
        case 'author-desc':
          allNfts.innerHTML = ''
          catalogue.sortByAuthor('desc')
            .forEach((item: ProductInterface) => allNfts.innerHTML += productItem(item))
          break;

        /**
        * Injecta productos filtrados segun el precio
        * en el primer caso es de Mayor a menor y el segundo de menor a Mayor
        */
        case 'price':
          allNfts.innerHTML = ''
          catalogue.sortByPrice()
            .forEach((item: ProductInterface) => allNfts.innerHTML += productItem(item))
          break;
        case 'price-desc':
          allNfts.innerHTML = ''
          catalogue.sortByPrice('desc')
            .forEach((item: ProductInterface) => allNfts.innerHTML += productItem(item))
          break;

        /**
        * Injecta todos los productos sin criterio alguno.
        */
        default:
          allNfts.innerHTML = ''
          catalogue.get()
            .forEach((item: ProductInterface) => allNfts.innerHTML += productItem(item))
       }
    })
  }

  function addListenerAddCart(products: ProductRepository): void {
    const buyBtn = Array.from(document.getElementsByClassName('js-add-to-cart')) as HTMLButtonElement[]
    const addedToCartMessage = document.getElementById('added-to-cart') as HTMLElement

    buyBtn.forEach(function (btn: HTMLButtonElement): void {
      const productID = btn.dataset.productId as string
      const productToAdd = products.getById(productID) as ProductInterface

      btn.addEventListener('click', function (): void {
        /**
         * Se agrega el producto al carrito.
         */
        shop.getCart().add(productToAdd)

        /**
         * Refresca/renderiza la lista del carrito con lo que haya en Cart.
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
    })
  }

  function renderProductCart(): void {
    /**
     * Array de productos en la instancia de Cart.
     */
    const productInCart: ProductInterface[] = shop.getCart().getAll()

    /**
     * 
     * Guardamos los IDs de los productos que existen en la lista del carrito del DOM.
     */
    const productInCartList: string[] = Array.from(cartList.children).map(({id}): string => id)

    productInCart.forEach((product: ProductInterface): void => {
      /**
       * Si el ID del producto a añadir ya esta entre los productos en la lista 
       */
      if (productInCartList.includes(product.id)) return
      cartList.innerHTML += cartItem(product)
    })
  }

  function addListenerCartRemove(): void {
    const removeBtn = Array.from(document.getElementsByClassName('js-remove-from-cart')) as HTMLButtonElement[]

    removeBtn.forEach((btn: HTMLButtonElement): void => {
      /**
       * Guarda el ID que habia dentro del boton.
       */
      const productID = btn.dataset.productId as string

      /**
       * Busca el producto a traves del ID.
       */
      const productToRemove = shop.getCart().getById(productID) as ProductInterface

      /**
       * Busca el index donde se encuentra el producto dentro del array del carrito.
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
}

export default productList