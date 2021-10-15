import Cart from './Cart'
import User from './User'
import InvitedUser from './InvitedUser'
import RegisteredUser from './RegisteredUser'
import Members from './Members'

import {
  RegisteredUserInterface
} from '../interfaces/types'

export default class Shop {

  private cart: Cart = new Cart
  private members: Members = new Members
  private user: (InvitedUser | RegisteredUser) = new InvitedUser


  public getCart(): Cart {
    return this.cart
  }

  public getMembers(): Members {
    return this.members
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

  public registerUser(data: RegisteredUserInterface): void {
    const user: RegisteredUser = new RegisteredUser
    user.name = data.name
    user.email = data.email
    user.password = data.password
    this.members.add(user)
  }

  public saveMembers(): void {
    if (localStorage.regdUsers) {
      const regdUsers: RegisteredUser[] = this.members.getAll()
      const prevData: RegisteredUser[] = JSON.parse(localStorage.regdUsers)

      localStorage.setItem('regdUsers', JSON.stringify(regdUsers.concat(prevData)))
    }
    localStorage.setItem('regdUsers', JSON.stringify(this.members.getAll()))
  }

  public logOut(): void {
    if (localStorage.logedUser) {
      localStorage.removeItem('logedUser')
    }
    this.user = new InvitedUser
  }
}
