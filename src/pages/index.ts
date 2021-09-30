import Shop from '../classes/Shop';
import {
  toggleVisibilityTemporarily,
  setDisplayFlex,
  setDisplayNone,
  isEqualString
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

  const shop = new Shop
  // Carga los usuarios guardados en localstorage para que esté actualizado.
  shop.loadMembers()

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


  addListenerRegister()
  function addListenerRegister() {
    const signUpForm = document.getElementById('sign-up-form') as HTMLFormElement
    const inputUsername = document.getElementById('reg-user-name') as HTMLInputElement
    const inputEmail = document.getElementById('reg-user-email') as HTMLInputElement
    const inputPassword = document.getElementById('reg-user-password') as HTMLInputElement
    const inputConfirmPassword = document.getElementById('reg-user-confirm-password') as HTMLInputElement
    const alertContainer = document.getElementById('register-alert') as HTMLElement
    const confirmContainer = document.getElementById('register-confirm') as HTMLElement

    signUpForm.addEventListener('submit', function(e: Event): void {
      e.preventDefault()
      // Vacia el texto de confirmacion si es que hay.
      confirmContainer.innerHTML = ''

      const username: string = inputUsername.value.trim()
      const email: string = inputEmail.value.trim()
      const password: string = inputPassword.value.trim()
      const confirmPasword: string = inputConfirmPassword.value.trim()

      const okPass = validatePassword(password, confirmPasword, alertContainer)
      const okEmail = validateEmail(email, alertContainer)

      if (okPass && okEmail) {
        confirmContainer.innerHTML = `Account created successfully!`
        shop.registerUser({
          name: username,
          email: email,
          password: password
        })
        shop.saveMembers()
      }
    })

  }

  function validatePassword(passA: string, passB: string, where: HTMLElement): boolean {
    if (!isEqualString(passA, passB)) {
      where.innerHTML = `Passwords don't match!`
      return false
    }
    where.innerHTML = ``
    return true
  }

  function validateEmail(email: string, where: HTMLElement): boolean {
    if (shop.isRegistered(email)) {
      where.innerHTML += `The email entered is already used.`
      return false
    }
    return true
  }


  addListenerLogin()
  function addListenerLogin() {

  }



  // Ejercicio: Clase 14/09/2021 (1/3)
  // Validación de entrada de datos en un formulario
  addListenerSuscribe()
  function addListenerSuscribe (): void {
    const newsLetter = document.getElementById('news-letter') as HTMLFormElement
    const inputEmail = newsLetter.querySelector('input[name=email]') as HTMLInputElement
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
      const email: string = inputEmail.value

      if (emailsBanned.includes(email)) return toggleVisibilityTemporarily(invalidMessage, 3000)
      return toggleVisibilityTemporarily(successfulMessage, 3000)
    })
  }
}

export default index