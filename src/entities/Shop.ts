import Cart from './Cart'
import User from './User'
import InvitedUser from './InvitedUser'
import RegisteredUser from './RegisteredUser'

export default class Shop {

  private cart: Cart = new Cart
  private user: (InvitedUser | RegisteredUser) = new InvitedUser


  public getCart(): Cart {
    return this.cart
  }

  public getUser(): User {
    return this.user
  }

  public setUser(data: (RegisteredUser | InvitedUser)): void {
    this.user = data
  }


  public isLoged(): boolean {
    return (!(this.user instanceof InvitedUser)) ?true :false
  }

  public logOut(): void {
    if (localStorage.logedUser) {
      localStorage.removeItem('logedUser')
    }
    this.user = new InvitedUser
  }
}
