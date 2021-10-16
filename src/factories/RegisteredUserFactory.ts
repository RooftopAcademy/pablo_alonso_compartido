import RegisteredUser from '../entities/RegisteredUser'
import { RegisteredUserInterface, RegisteredUserLocalStorageInterface } from '../interfaces/types'


class RegisteredUserFactory {
  static create(item: (RegisteredUserInterface)): RegisteredUser {
    const registeredUser: RegisteredUser = new RegisteredUser
    registeredUser.name = item.name
    registeredUser.email = item.email
    registeredUser.password = item.password

    return registeredUser
  }

  static recreate(item: (RegisteredUserLocalStorageInterface)): RegisteredUser {
    const registeredUser: RegisteredUser = new RegisteredUser
    registeredUser.id = item._id
    // ToDO: Agregar setters para canBuy y _canComment
    registeredUser.name = item._name
    registeredUser.email = item._email
    registeredUser.password = item._password
    registeredUser.productsInCart = item._productsInCart
    registeredUser.purchasedProducts = item._purchasedProducts
    return registeredUser
  }
}

export default RegisteredUserFactory