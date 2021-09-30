import {
  toggleVisibilityTemporarily,
  setDisplayFlex,
  setDisplayNone
} from '../utils/utils'

function index(): void {
  // Ejercicio: Clase 13/09/2021
  // Guardamos el nodo donde voy a extraer el dato
  saveDataAnchor()
  function saveDataAnchor(): void {
    const anchor: HTMLElement | null = document.getElementById('a');
    // Si el elemento con id = 'a' existe:
    if (!anchor) return
    // Guardo el dato en una variable
    const data: string = anchor.innerText;
    // Reemplazo el dato en el elemento.
    anchor.innerText = data;
  }

  // Al clickear el icono menu 'hambuguesa' baja o sube el menu
  menuToggle()
  function menuToggle(): void {
    const navMenu = document.getElementById('nav-menu') as HTMLElement
    const menuOpener = document.getElementById('menu-opener') as HTMLElement
    const menuCloser = document.getElementById('menu-closer') as HTMLElement

    menuOpener.addEventListener('click', function (): void {
      navMenu.classList.replace('menu-closed', 'menu-opened')
    })
    menuCloser.addEventListener('click', function (): void {
      navMenu.classList.replace('menu-opened', 'menu-closed')
    })
  }

  // Al clickear el boton 'Sign Up' muestra/oculta el form.
  registerToggle()
  function registerToggle(): void {
    const registerBtn = document.getElementById('register-btn') as HTMLElement
    const registerMenu = document.getElementById('register-menu') as HTMLElement

    registerBtn.addEventListener('click', function (): void {
      if (registerMenu.classList.contains('d-none')) return setDisplayFlex(registerMenu)
      return setDisplayNone(registerMenu)
    })
  }
  registerCloser()
  function registerCloser(): void {
    const registerCloser = document.getElementById('register-closer') as HTMLElement
    const registerMenu = document.getElementById('register-menu') as HTMLElement
    const loginMenu = document.getElementById('login-menu') as HTMLElement
    registerCloser.addEventListener('click', function (e: Event): void {
      e.preventDefault()
      setDisplayNone(registerMenu)
      setDisplayNone(loginMenu)
    })
  }


  loginToggle()
  function loginToggle(): void {
    const loginBtn = document.getElementById('login-btn') as HTMLElement
    const loginMenu = document.getElementById('login-menu') as HTMLElement

    loginBtn.addEventListener('click', function () {
      if (loginMenu.classList.contains('d-none')) return setDisplayFlex(loginMenu)
      return setDisplayNone(loginMenu)
    })
  }
  loginCloser()
  function loginCloser(): void {
    const loginCloser = document.getElementById('login-closer') as HTMLElement
    const loginMenu = document.getElementById('login-menu') as HTMLElement
    const registerMenu = document.getElementById('register-menu') as HTMLElement
    loginCloser.addEventListener('click', function (e: Event): void {
      e.preventDefault()
      setDisplayNone(loginMenu)
      setDisplayNone(registerMenu)
    })
  }



  // Ejercicio: Clase 14/09/2021 (1/3)
  // Validación de entrada de datos en un formulario
  addListenerForm()
  function addListenerForm (): void {
    const newsLetter = document.getElementById('news-letter') as HTMLElement
    const invalidMessage = document.getElementById('invalid-message') as HTMLElement
    const successfulMessage = document.getElementById('successful-message') as HTMLElement

    const emailsBanned: string[] = [
      'aquiles_bailo@yahoo.com',
      'susana_oria@hotmail.com',
      'aquiles_bailo@hotmail.com',
      'armando_estebanquito@gmail.com',
      'example@gmail.com',
      'example@yahoo.com',
      'example@hotmail.com',
      'malapalabra@gmail.com'
    ]

    newsLetter.addEventListener('submit', function(e: Event): void {
      e.preventDefault()
      console.log('Dentro del boton')
      const inputEmail = newsLetter.querySelector('input[name=email]') as HTMLInputElement
      const email: string = inputEmail.value
    
      if (emailsBanned.includes(email)) return toggleVisibilityTemporarily(invalidMessage, 3000)
      return toggleVisibilityTemporarily(successfulMessage, 3000)
    })
  }
}

export default index