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
import { OrderMode, OrderModeInterface, ProductInterface } from '../interfaces/types'
import ProductRepository from '../repositories/ProductRepository'

function productList(): void {

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
    renderProductsList(products)

    /**
     * Listeners para aplicar filtros y ordenar los productos de la seccion 'All NFTs'
     */
    manageFilter(catalogue)

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


  /**
   * Renderiza todos los productos y por categoria.
   */
  function renderProductsList(products: ProductRepository): void {
    /**
     * Guardamos todas las secciones/categorias que van a contener a los productos.
     */
    const allNftsSection = document.getElementById('all-nfts') as HTMLElement
    const mostValuableSection = document.getElementById('most-valuable-nfts') as HTMLElement
    const colorfulSection = document.getElementById('colorful-nfts') as HTMLElement
    const strangeSection = document.getElementById('strange-nfts') as HTMLElement

    /**
    * Injecta todos los productos
    */
    injectArrayInDOM(products.get(), allNftsSection, productItem)

    /**
    * Injecta productos filtrados por su categoria
    */
    injectArrayInDOM(products.getByCategory('most-valuable'), mostValuableSection, productItem)
    injectArrayInDOM(products.getByCategory('colorful'), colorfulSection, productItem)
    injectArrayInDOM(products.getByCategory('strange'), strangeSection, productItem)
  }


  /**
   * Listeners para aplicar filtros y ordenar los productos de la seccion 'All NFTs'
   */
  function manageFilter(catalogue: Catalogue): void {
    /**
     * Seccion donde se va a injectar los productos
     */
    const allNftsSection = document.getElementById('all-nfts') as HTMLElement
    
    /**
     * Donde se saca los datos para la configuracion del orden (sortSettings)
     */
    const filterForm = document.getElementById('filter') as HTMLFormElement
    const filterTitle = filterForm.title as unknown as HTMLInputElement
    const filterAuthor = filterForm.author as unknown as HTMLInputElement
    const filterPrice = filterForm.price as unknown as HTMLInputElement
    
    const cleanFilters = document.getElementById('filter-clean') as HTMLButtonElement
    
    /**
     * Configuracion por las keys por las cuales se va a ordenar
     * 0 = No se ordena
     * 1 = Se ordena de forma 'ascendente'
     * -1 = Se ordena de forma 'descendente'
     * Este sortSettings va a servir para memorizar el orden de la key al generar un nuevo sortSettings a partir de este.
     */
    const sortSettings: OrderModeInterface = {
      'title': OrderMode.none,
      'author': OrderMode.none,
      'price': OrderMode.none,
    }

    /**
     * Guardamos en memoria todos los productos sin ordenar
     * Para usarlo luego con el boton 'clean filters'
     */
    catalogue.setSort(sortSettings)

    /**
     * Agrega listener a cada input, agrega la logica del ordenamiento segun key y el input (checkbox)
     */
    addListenerFilter(filterTitle, 'title')
    addListenerFilter(filterAuthor, 'author')
    addListenerFilter(filterPrice, 'price')

    /**
     * Listener para limpiar los filtros y dejar todo sin ordenar.
     * Cambia el aspecto de los labels, y su contenido.
     */
    clearFilters()

    /**
     * Agrega listener para la logica del ordenamiento segun key y el inpout (checkbox)
     */
    function addListenerFilter(input:HTMLInputElement, key: string): void {
      /**
       * Se guarda el nodo label a partir de su id completado con la key.
       */
      const label = document.getElementById('label-order-by-' + key) as HTMLLabelElement

      /**
       * Modificamos la primera letra de la key a mayuscula.
       */
      const capitalizatedWord: string = (key[0].toUpperCase() + key.substring(1))

      input.addEventListener('change', function (): void {
        /**
         * Guardamos el estado del input checked.
         */
        const check: boolean = input.checked

        /**
         * Al primer cambio necesitamos quitarle la clase por defecto 'filter-inactive' al label que representa el input checked.
         * para que luego podamos intercambiar entre 'filter-asc' y 'filter-desc'
         */
        if (label.classList.contains('filter-inactive')) label.classList.replace('filter-inactive', 'filter-asc')

        /**
         * Cambia el color del borde del label si el input esta checked o no
         */
        labelToggleStatus(check, label, capitalizatedWord)

        /**
         * Obtenemos la nueva configuracion a partir del cambio del input y de lo guardado en memoria (sortSettings)
         */
        let newSortSettings: OrderModeInterface = changeSortSettings(check, sortSettings, key)

        /**
         * Pedimos que ordenen los productos segun el nuevo setting.
         * Esto se guarda en cache y lo pedimos mas adelante.
         */
        catalogue.setSort(newSortSettings)

        /**
         * Obtenemos los productos desordenados como estaban al inicio.
         */
        const sortedProducts = catalogue.getSort(newSortSettings)

        /**
         * Injectamos los productos ordenados en el DOM
         */
        postSortedProduct(sortedProducts, allNftsSection)
      })

    }

    /**
     * Cambia el color del borde del label y su contenido si el input esta checked o no
     */
    function labelToggleStatus(check: boolean, label: HTMLElement, word: string): void {
      if (check) {
        label.classList.replace('filter-desc', 'filter-asc')
        label.innerHTML = `${word} &#11014;`
        return
      }

      label.classList.replace('filter-asc', 'filter-desc')
      label.innerHTML = `${word} &#11015;`
      return
    }

    /**
     * Listener para limpiar los filtros y dejar todo sin ordenar.
     * Cambia el aspecto de los labels, y su contenido.
     */
    function clearFilters() {
  
      const labels: HTMLLabelElement[] = []
      const labelTitle = document.getElementById('label-order-by-title') as HTMLLabelElement
      const labelAuthor = document.getElementById('label-order-by-author') as HTMLLabelElement
      const labelPrice = document.getElementById('label-order-by-price') as HTMLLabelElement

      labels.push(labelTitle)
      labels.push(labelAuthor)
      labels.push(labelPrice)

      const defaultTextLabel = [
        'Title',
        'Author',
        'Price',
      ]

      cleanFilters.addEventListener('click', function(e: Event): void {
        e.preventDefault()

        /**
         * 'Reseteamos' a 0 todos los atributos
         */
        sortSettings.title = OrderMode.none
        sortSettings.author = OrderMode.none
        sortSettings.price = OrderMode.none

        /**
         * Obtenemos los productos desordenados como estaban en el principio
         */
        const unsortedProducts: ProductInterface[] = catalogue.getSort(sortSettings)

        /**
         * Injectamos los productos desordenados en el DOM
         */
        postSortedProduct(unsortedProducts, allNftsSection)

        /**
         * 'Reseteamos' el aspecto de todos los labels de los inputs
         */
        labels.forEach((label, i) => {
          label.innerHTML = defaultTextLabel[i]
          if (label.classList.contains('filter-asc')) return label.classList.replace('filter-asc', 'filter-inactive')
          if (label.classList.contains('filter-desc')) return label.classList.replace('filter-desc', 'filter-inactive')
        })
  
      })
    }
  }

  /**
   * Cambia la configuracion del ordenamiento dependiendo del input checkeado y la key que representa
   */
  function changeSortSettings(check: boolean, sortSettings: OrderModeInterface, key: string): OrderModeInterface {
    /**
     * Creamos un nuevo objeto a partir de otro para que pierda la referencia en memoria del anterior
     * Y modificamos la configuracion original para no perder las configuraciones de los otros inputs al cambiar.
     */
    const newSettings: OrderModeInterface = {...sortSettings}
    if (check) {
      sortSettings[key] = OrderMode.asc
      newSettings[key] = OrderMode.asc
      return newSettings
    }
    sortSettings[key] = OrderMode.desc
    newSettings[key] = OrderMode.desc
    return newSettings
  }

  /**
   * Postea los productos en el nodo html donde le decimos.
   * Antes de postear, limpia el contenido del nodo
   */
  function postSortedProduct(sortedProducts: ProductInterface[], where: HTMLElement): void {
    where.innerHTML = ''
    sortedProducts.forEach((item: ProductInterface) => where.innerHTML += productItem(item))
  }


  /**
   * Listener para el boton "Buy now"
   */
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

  
  /**
   * Listener para el icono de Carrito, abre o cierra la lista.
   */
  function addListenerDisplayCart(): void {
    const cartToggle = document.getElementById('cart-toggle') as HTMLElement

    cartToggle.addEventListener('click', function () {
      if (cartList.classList.contains('d-none')) return setDisplayFlex(cartList)
      return setDisplayNone(cartList)
    })
  }


  /**
   * Listener para Abrir la lista de menu cuando toca el anchor del mensaje al añadir algo al carrito.
   */
  function addListenerSeeCart(): void {
    const seeCart = document.getElementById('see-cart') as HTMLElement

    seeCart.addEventListener('click', function (): void {
      setDisplayFlex(cartList)
    })
  }
}

export default productList