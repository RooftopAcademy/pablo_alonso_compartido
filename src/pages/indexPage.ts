import {
  toggleVisibilityTemporarily,
  setDisplayFlex,
  setDisplayNone,
  isEqualString
} from '../utils/utils'

import Shop from '../entities/Shop';

function index(): void {
  // Ejercicio: Clase 13/09/2021
  // Guardamos el nodo donde voy a extraer el dato
  saveDataAnchor()
  function saveDataAnchor(): void {
    const anchor = document.getElementById('a') as HTMLElement
    // Guardo el dato en una variable
    const data: string = anchor.innerText;
    // Reemplazo el dato en el elemento.
    anchor.innerText = data;
  }


  /**
   * Inicializamos Shop para poder usar sus metodos y propiedades
   */
  const shop = new Shop

  /**
   * Carga los usuarios guardados en localstorage para que esté actualizado.
   */
  shop.loadMembers()

  /**
   * Ejecuta las funciones para eventos y renders necesarios para la App.
   */
  renderStep()

  function renderStep() {
    /**
     * Listener para abrir o cerrar el menu de navegacion
     */
    menuToggle()

    /**
     * Listener para 'submitear' el email
     */
    addListenerSuscribe()

    /**
     * Carga el usuario logeado del localStorage solo si existe.
     */
    shop.loadUser()

    /**
     * Si SÍ esta logeado:
     */
    if (!shop.isLoged()) {
      /**
       * Abre o cierra el 'register' form
       */
      registerToggle()
      registerCloser()

      /**
       * Abre o cierra el 'login' form
       */
      loginToggle()
      loginCloser()

      /**
       * Listener para verificar el 'login' y registro
       */
      addListenerRegisterForm()
      addListenerLoginForm()
    }

    /**
     * Si NO esta logeado:
     * ToDo: Terminar esta seccion.
     */

    /**
     * Listener para abrir o cerrar el menu de usuario 'logeado'
     */
    const userToggleMenu = document.getElementById('user-toggle-menu') as HTMLElement
    setDisplayFlex(userToggleMenu)

    /**
     * Oculta
     */
    const registerBtn = document.getElementById('register-btn') as HTMLElement
    const loginBtn = document.getElementById('login-btn') as HTMLElement
    setDisplayNone(registerBtn)
    setDisplayNone(loginBtn)
  }

  /**
 * Listener para abrir o cerrar el menu de navegacion
 */
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

  /**
   * Listener Al clickear el boton 'Sign Up' muestra/oculta el form.
   */
  function registerToggle(): void {
    const registerBtn = document.getElementById('register-btn') as HTMLElement
    const registerMenu = document.getElementById('register-menu') as HTMLElement

    registerBtn.addEventListener('click', function (): void {
      if (registerMenu.classList.contains('d-none')) return setDisplayFlex(registerMenu)
      return setDisplayNone(registerMenu)
    })
  }

  /**
   * Listener Al clickear el boton 'X' del sign up form, oculta el form de 'login' y 'register'.
   */
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

  /**
   * Listener Al clickear el boton 'Sign in' muestra/oculta el form.
   */
  function loginToggle(): void {
    const loginBtn = document.getElementById('login-btn') as HTMLElement
    const loginMenu = document.getElementById('login-menu') as HTMLElement

    loginBtn.addEventListener('click', function () {
      if (loginMenu.classList.contains('d-none')) return setDisplayFlex(loginMenu)
      return setDisplayNone(loginMenu)
    })
  }

  /**
   * Listener Al clickear el boton 'X' del sign in form, oculta el form de 'login' y 'register'.
   */
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

  /**
   * Verifica y guarda los datos validos para el registro
   */
  function addListenerRegisterForm(): void {
    const signUpForm = document.getElementById('signup-form') as HTMLFormElement
    const inputUsername = document.getElementById('reg-user-name') as HTMLInputElement
    const inputEmail = document.getElementById('reg-user-email') as HTMLInputElement
    const inputPassword = document.getElementById('reg-user-password') as HTMLInputElement
    const inputConfirmPassword = document.getElementById('reg-user-confirm-password') as HTMLInputElement

    const alertContainer = document.getElementById('register-alert') as HTMLElement
    const confirmContainer = document.getElementById('register-confirm') as HTMLElement

    signUpForm.addEventListener('submit', function(e: Event): void {
      e.preventDefault()

      /**
       * Vacia el texto de confirmacion si es que hay.
       */
      confirmContainer.innerHTML = ''

      const username: string = inputUsername.value.trim()
      const email: string = inputEmail.value.trim()
      const password: string = inputPassword.value.trim()
      const confirmPasword: string = inputConfirmPassword.value.trim()

      /**
       * Ejecuta las verificaciones y se guardan las respuestas de las mismas.
       */
      const okPass = isNotSamePassword(password, confirmPasword, alertContainer)
      const okEmail = isRegisteredEmail(email, alertContainer)

      /**
       * Si en este momento alguno de las dos verificaciones dio error no sigue.
       */
      if (!okPass && okEmail) return

      confirmContainer.innerHTML = `Account created successfully!`
      shop.registerUser({
        name: username,
        email: email,
        password: password
      })
      shop.saveMembers()
    })

  }

  /**
   * Verifica Si las password no son identicas.
   * True = SÍ son identicas.
   * False = NO son identicas.
   */
  function isNotSamePassword(passA: string, passB: string, where: HTMLElement): boolean {
    if (!isEqualString(passA, passB)) {
      where.innerHTML = `Passwords don't match!`
      return false
    }
    where.innerHTML = ``
    return true
  }

  /**
   * Retorna true / false segun si el email ingresado ya esta registrados
   * True = El email SÍ se encuentra registrado.
   * False = El email NO se encuentra registrado.
   */
  function isRegisteredEmail(email: string, where: HTMLElement): boolean {
    if (shop.isRegistered(email)) {
      where.innerHTML += `The email entered is already used.`
      return false
    }
    return true
  }

  /**
   * Verifica y guarda los datos validos para el inicio de sesion
   */
  function addListenerLoginForm(): void {
    const singInForm = document.getElementById('signin-form') as HTMLFormElement
    const inputEmail = document.getElementById('log-user-email') as HTMLInputElement
    const inputPassword = document.getElementById('log-user-password') as HTMLInputElement

    const alertContainer = document.getElementById('login-alert') as HTMLElement
    const confirmcontainer = document.getElementById('login-confirm') as HTMLElement

    singInForm.addEventListener('submit', function(e: Event): void {
      e.preventDefault()
      /**
       * Vacia el texto de confirmacion o alerta, si es que lo hay.
       */
      confirmcontainer.innerHTML = ''
      alertContainer.innerHTML = ''

      const email: string = inputEmail.value.trim()
      const password: string = inputPassword.value.trim()

      /**
       * Se intenta verificar el email y las contraseñas con las cuentas almacenadas en Shop
       */
      shop.logInUser({email, password})

      /**
       * Si no esta logeado en este momento es porque esta mal el email o contraseña
       */
      if (!shop.isLoged()) {
        shop.saveUser()
        alertContainer.innerHTML = `The email or password is not valid.`
        return
      }

      confirmcontainer.innerHTML = `Successfully logged in`
    })
  }



  // Ejercicio: Clase 14/09/2021 (1/3)
  /**
   * Validación de email del formulario
   */
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