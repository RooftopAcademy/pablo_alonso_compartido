import RegisteredUserRepository from '../repositories/RegisteredUserRepository'
import { LogDataInterface, RegisteredUserLocalStorageInterface } from '../interfaces/types'
import RegisteredUser from '../entities/RegisteredUser'
import { isEqualString } from '../utils/utils'
import Shop from '../entities/Shop'

/**
 * Revisa si esta registrado el email ingresado en el repositorio de usuarios
 */
export function isRegistered(registeredUsers: RegisteredUserRepository, email: string): boolean {
  return !!registeredUsers.getByEmail(email)
}

/**
 * Verifica Si las password no son identicas.
 * True = SÍ son identicas.
 * False = NO son identicas.
 */
export function isSamePassword(passA: string, passB: string): boolean {
  if (!isEqualString(passA, passB)) {
    return false
  }
  return true
}

/**
 * Carga usuarios registrados del localStorage al Repositorio. Solo si existe.
 */
export function loadUsers(registeredUsers: RegisteredUserRepository): void {
  /**
   * Si no existe cuentas guardadas en localStorage retorna.
   */
  if (!localStorage.regdUsers) return

  /**
   * Recupera las cuentas guardadas en localStorage.
   */
  const data: any[] = JSON.parse(localStorage.regdUsers)

  /**
   * Añade a los usuarios verificando antes si el email esta registrado.
   */
  data.forEach((regdUser: RegisteredUserLocalStorageInterface): void => {
    /**
     * Si ya estaba el usuario registrado retorna
     */
    if (isRegistered(registeredUsers, regdUser._email)) return

    return registeredUsers.addFromLocalStorage(regdUser)
  })
}


/**
 * Guardamos el usuario recien registrado en el LocalStorage
 */
export function saveUser(registeredUsers: RegisteredUserRepository, email: string): void {
  if (localStorage.regdUsers) {
    /**
     * Obtenemos al usuario recien registrado
     */
    const regdUsers = registeredUsers.getByEmail(email) as RegisteredUser

    /**
     * Obtenemos a todos los usuarios registrados del LocalStorage
     */
    const prevData: RegisteredUser[] = JSON.parse(localStorage.regdUsers)

    /**
     * Actualizamos el registro del LocalStorage añadiendole el usuario recien registrado
     */
    prevData.push(regdUsers)

    /**
     * Regresamos los datos actualizados al LocalStorage
     */
    localStorage.setItem('regdUsers', JSON.stringify(prevData))
  }

  /**
   * Guardamos por primera vez todos los usuarios registrados en el LocalStorage.
   */
  localStorage.setItem('regdUsers', JSON.stringify(registeredUsers.get()))
}


/**
 * Se intenta verificar el email y las contraseñas con las cuentas almacenadas en Shop
 */
export function logInUser(shop: Shop, registeredUsers: RegisteredUserRepository, data: LogDataInterface): void {
  /**
   * Busca en el repositorio si hay un usuario que coincida con los datos ingresados en el from
   */
  const found: (RegisteredUser | undefined) = registeredUsers.get()
    .find((user: RegisteredUser) =>
      ((user.email == data.email) && (user.password == data.password))
    )

  /**
   * Si no se encuentro el usuario que coincida se retorna
   */
  if (!found) return
  shop.setUser(found)
}

export function getLoggedUserLocalStorage(shop: Shop) {
  if (!localStorage.logedUser) return
  shop.setUser(JSON.parse(localStorage.logedUser))
}

/**
 * Se guarda la sesion del usuario en el LocalStorage
 */
export function setLoggedUserLocalStorage(shop: Shop) {
  localStorage.setItem('logedUser', JSON.stringify(shop.getUser()))
}