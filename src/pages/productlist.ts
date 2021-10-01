import {
  toggleDisplayTemporarily,
  setDisplayNone,
  fetchProduct,
  setDisplayFlex,
  injectArrayInDOM,
  injectSingleInDOM,
  isHalfPage
} from '../utils/utils'

import productItem from '../components/productItem'
import cartItem from '../components/cartItem'

import Shop from '../entities/Shop'
import Product from '../entities/Product'
import { ProductInterface } from '../interfaces/types'

function productList(): void {
  // Ejercicio: Clase 14/09/2021 (2/3)
  addSoldOutListener()

  function addSoldOutListener(): void {
    const soldOut: NodeListOf<HTMLElement> = document.querySelectorAll('.sold-out')
    const notAvaliable: HTMLElement | null = document.getElementById('not-avaliable')

    // Verificamos que existan las entidades
    if (!(soldOut.length > 0 && notAvaliable)) return

    soldOut.forEach((el: HTMLElement): void => el.addEventListener('click', function(): void {
      toggleDisplayTemporarily(notAvaliable, 3000)
    }));
  }


  // Ejercicio: Clase 14/09/2021 (3/3)
  // Verificamos que si el usuario scrollea debajo de mitad de pagina
  addGoUpListener()

  function addGoUpListener(): void {
    const goUp: (HTMLElement | null) = document.getElementById('go-up')

    window.addEventListener('scroll', function (): void {
      if (!goUp) return
      if (isHalfPage()) return setDisplayFlex(goUp)
      return setDisplayNone(goUp)
    })
  }
  // Ejercicio: Clase 16/09/2021
  // Representamos la tienda con Shop, los productos estan dentro de catalogo y este a su vez en Shop
  const shop: Shop = new Shop

  const cartList: HTMLElement | null = document.getElementById('cart-list')

  const apiURL: string = 'https://my-json-server.typicode.com/Alonso-Pablo/api-nft/products'

  fetchProduct(apiURL, renderStep)

  function renderStep(data: ProductInterface[]): void {
    shop.loadProduct(data)

    renderProductsList()

    // Listener para el boton "Buy now"
    addListenerAddCart()

    // Listener para el icono de Carrito, abre o cierra la lista.
    addListenerDisplayCart()
    
    // Listener para Abrir la lista de menu cuando toca el anchor del mensaje al añadir algo al carrito.
    addListenerSeeCart()
  }


  function renderProductsList(): void {
    // secciones por categoria
    const allNfts = document.getElementById('all-nfts') as HTMLElement
    const mostValuableNfts = document.getElementById('most-valuable-nfts') as HTMLElement
    const colorfulNfts = document.getElementById('colorful-nfts') as HTMLElement
    const strangeNfts = document.getElementById('strange-nfts') as HTMLElement

    // Si no hay productos en el catalogo se renderiza un mensaje de error.
    if (!shop.getCatalogue().getAll().length) {
      if (allNfts) injectSingleInDOM(undefined, allNfts, productItem)
      if (mostValuableNfts) injectSingleInDOM(undefined, mostValuableNfts, productItem)
      if (colorfulNfts) injectSingleInDOM(undefined, colorfulNfts, productItem)
      if (strangeNfts) injectSingleInDOM(undefined, strangeNfts, productItem)
    }

    // Injecta todos los nft sin filtros.
    injectArrayInDOM(shop.getCatalogue().getAll(), allNfts, productItem)
    // Injecta en el DOM todos los productos filtrados por su categoria.
    injectArrayInDOM(shop.getCatalogue().getByCategory('most-valuable'), mostValuableNfts, productItem)
    injectArrayInDOM(shop.getCatalogue().getByCategory('colorful'), colorfulNfts, productItem)
    injectArrayInDOM(shop.getCatalogue().getByCategory('strange'), strangeNfts, productItem)
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

        // Ejecuto ahora la funcion ya que antes no existia el boton de remover en el DOM
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
}

export default productList