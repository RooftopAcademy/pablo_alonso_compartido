import {
  toggleVisibilityTemporarily,
  setDisplayFlex,
  setDisplayNone,
} from '../utils/utils'

import {
  getLoggedUserLocalStorage,
  isRegistered,
  isSamePassword,
  loadUsers,
  logInUser,
  saveUser,
  setLoggedUserLocalStorage,
} from '../helpers/helpers'

import RegisteredUserRepository from '../repositories/RegisteredUserRepository'
import Shop from '../entities/Shop';
import InvitedUser from '../entities/InvitedUser';

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
  };


  /**
   * Inicializamos Shop para poder usar sus metodos y propiedades
   */
  const shop = new Shop

  const registeredUsers: RegisteredUserRepository = new RegisteredUserRepository()


  /**
   * Ejecuta las funciones para eventos y renders necesarios para la App.
   */
  renderStep()

  function renderStep() {
    /**
     * Listener para 'submitear' el email
     */
    addListenerSuscribe()

    /**
     * Listener para abrir o cerrar el menu de navegacion
     */
    navMenuToggle()

    /**
     * Carga usuarios registrados del localStorage. Solo si existe.
     */
    loadUsers(registeredUsers)

    /**
     * Carga la sesion del usuario logeado. Solo si existe.
     */
    getLoggedUserLocalStorage(shop)


    if (shop.isLoged()) {
      /**
       * Oculta los botones 'Sign up' y 'Sign in'
       */
      const registerBtn = document.getElementById('register-btn') as HTMLElement
      const loginBtn = document.getElementById('login-btn') as HTMLElement
      setDisplayNone(registerBtn)
      setDisplayNone(loginBtn)

      /**
       * Muestra el boton toggler del menu de usuario.
       */
      const userToggleMenu = document.getElementById('user-toggle-menu') as HTMLElement
      setDisplayFlex(userToggleMenu)

      /**
       * Listener para abrir o cerrar el menu de usuario 'logeado'
       */
      const userMenu = document.getElementById('user-menu') as HTMLElement
      userToggleMenu.addEventListener('click', function():void {
        if (userMenu.classList.contains('d-none')) return setDisplayFlex(userMenu)
        return setDisplayNone(userMenu)
      })

      /**
       * Listener para hacer 'log out' de la sesion.
       */
      const signOut = document.getElementById('sign-out') as HTMLButtonElement
      signOut.addEventListener('click', function(): void {
        /**
         * Borramos la sesion del LocalStorage
         */
        localStorage.removeItem('logedUser')

        /**
         * Seteamos el user a usuario invitado
         */
        shop.setUser(new InvitedUser)

        /**
         * Refrescamos la pagina
         */
        location.reload()
      })
    } else {
      /**
       * Si SÍ esta logeado:
       */
      /**
       * Abre o cierra el 'register' form
       */
      registerCloser()
      registerToggle()

      /**
       * Abre o cierra el 'login' form
       */
      loginToggle()
      loginCloser()

      /**
       * Listener para verificar el from de 'login' y registro
       */
      registerForm()
      LoginForm()
      const userToggleMenu = document.getElementById('user-toggle-menu') as HTMLElement
      setDisplayNone(userToggleMenu)

    }
  }



  /**
   * Listener para abrir o cerrar el menu de navegacion
   */
  function navMenuToggle(): void {
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
  function registerForm(): void {
    const signUpForm = document.getElementById('signup-form') as HTMLFormElement

    const alertContainer = document.getElementById('register-alert') as HTMLElement
    const confirmContainer = document.getElementById('register-confirm') as HTMLElement

    signUpForm.addEventListener('submit', function(e: Event): void {
      e.preventDefault()

      /**
       * Vacia el texto de confirmacion si es que hay.
       */
      confirmContainer.innerHTML = ''

      const name: string = signUpForm['user-name'].value.trim()
      const email: string = signUpForm['user-email'].value.trim()
      const password: string = signUpForm['user-password'].value.trim()
      const confirmPasword: string = signUpForm['user-confirm-password'].value.trim()

      /**
       * Verifica si la password son las mismas o si el email ya esta registrado.
       * Si hay algun error lo imprime en el DOM.
       */
      if (!isSamePassword(password, confirmPasword)) {
        alertContainer.innerHTML = `Passwords don't match!`
        return
      }
      alertContainer.innerHTML = ''


      if (isRegistered(registeredUsers, email)) {
        alertContainer.innerHTML += `Email is already in use!`
        return
      }
      // alertContainer.innerHTML = ''


      confirmContainer.innerHTML = `Account created successfully!`

      /**
       * Añadimos al usuario recien registrado al repositorio.
       */
      registeredUsers.add({
        name,
        email,
        password,
      })

      /**
       * Guardamos el usuario recien registrado en el LocalStorage
       */
      saveUser(registeredUsers, email)

      /**
       * Limpiamos todos los campos al ser exitoso el registro
       */
      signUpForm['user-name'].value = ''
      signUpForm['user-email'].value = ''
      signUpForm['user-password'].value = ''
      signUpForm['user-confirm-password'].value = ''
    })
  }



  /**
   * Verifica y guarda los datos validos para el inicio de sesion
   */
  function LoginForm(): void {
    const singInForm = document.getElementById('signin-form') as HTMLFormElement

    const alertContainer = document.getElementById('login-alert') as HTMLElement
    const confirmcontainer = document.getElementById('login-confirm') as HTMLElement

    singInForm.addEventListener('submit', function(e: Event): void {
      e.preventDefault()
      /**
       * Vacia el texto de confirmacion o alerta, si es que lo hay.
       */
      confirmcontainer.innerHTML = ''
      alertContainer.innerHTML = ''

      const email: string = singInForm['user-email'].value.trim()
      const password: string = singInForm['user-password'].value.trim()

      /**
       * Se intenta verificar el email y las contraseñas con las cuentas almacenadas en Shop
       */
      logInUser(shop, registeredUsers, {email, password})

      /**
       * Si no esta logeado en este momento es porque esta mal el email o contraseña
       */
      if (!shop.isLoged()) {
        alertContainer.innerHTML = `The email or password is not valid.`
        return
      }

      /**
       * Se guarda la sesion del usuario en el LocalStorage
       */
      setLoggedUserLocalStorage(shop)
      confirmcontainer.innerHTML = `Successfully logged in. Redirecting...`

      /**
       * Se refresca la pagina para que aparezca el toggler de user menu y desaparezca los botones de iniciar sesion y registrarse.
       */
      setTimeout(()=> {
        location.reload()
      }, 1000)
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