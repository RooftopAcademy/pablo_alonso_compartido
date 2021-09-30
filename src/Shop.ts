import Catalogue from './Catalogue'
import Product from './Product'
import Cart from './Cart'
import User from './User'
import InvitedUser from './InvitedUser'
import RegisteredUser from './RegisteredUser'
import Members from './Members'

import {
  LogData,
  ProductData,
  UserData
} from './ts/types'

export default class Shop {
  private cart: Cart = new Cart
  private catalogue: Catalogue = new Catalogue
  private members: Members = new Members
  private user: (InvitedUser | RegisteredUser) = new InvitedUser

  public getCart(): Cart {
    return this.cart
  }

  public getCatalogue(): Catalogue {
    return this.catalogue
  }

  public getMembers(): Members {
    return this.members
  }

  public getUser(): User {
    return this.user
  }


  public logInUser(data: LogData): boolean {
    const found: (RegisteredUser | undefined) = this.members.getAll()
      .find((user: RegisteredUser) => user.email === data.email && user.password === data.email)
    if (found) {
        this.user = found
        return true
    }
    return false
  }

  public isLoged(): boolean {
    return (this.user instanceof InvitedUser) ?true :false
  }

  public registerUser(data: UserData): void {
    const user: RegisteredUser = new RegisteredUser
    user.name = data.name
    user.email = data.email
    user.password = data.password
    this.members.add(user)
  }

  public isRegistered(email: string): boolean {
    return !!this.members.getAll()
      .find(user => user.email === email)
  }

  public saveMembers(): void {
    localStorage.setItem('regdUsers', JSON.stringify(this.members))
  }
  public loadMembers(): void {
    if (localStorage.regdUsers){
      const data: RegisteredUser[] = JSON.parse(localStorage.regdUsers)
      data.forEach((member: RegisteredUser) => this.members.add(member))
    }
  }

  public saveUser(): void {
    localStorage.setItem('logedUser', JSON.stringify(this.user))
  }
  public loadUser(): void {
    if (localStorage.logedUser) {
      const data: RegisteredUser = JSON.parse(localStorage.logedUser)
      this.user = data
    }
  }

  public loadProduct(data: ProductData[]): void {
    data.forEach((item: ProductData) => {
      const product: Product = new Product
      product.id = item.id
      product.picture = item.picture
      product.title = item.title
      product.author = item.author
      product.description = item.description
      product.price = item.price
      product.comment = item.comments
      product.category = item.category
      product.isAvaliable = item.isAvaliable
      this.catalogue.add(product)
    })
  }
}
