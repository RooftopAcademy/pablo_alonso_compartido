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
} from '../ts/types'

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


  public logInUser(data: LogData): void {
    const found: (RegisteredUser | undefined) = this.members
      .getAll()
      .find((user: RegisteredUser) => (user.email == data.email) && (user.password == data.password))
    if (!found) return
    this.user = found
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
      // .find(user =>{ console.log(user.email), user.email === email})
      .find((user: RegisteredUser) => user.email === email)
  }

  public saveMembers(): void {
    if (localStorage.regdUsers) {
      const regdUsers: RegisteredUser[] = this.members.getAll()
      const prevData: RegisteredUser[] = JSON.parse(localStorage.regdUsers)

      localStorage.setItem('regdUsers', JSON.stringify(regdUsers.concat(prevData)))
    }
    localStorage.setItem('regdUsers', JSON.stringify(this.members.getAll()))
  }
  public loadMembers(): void {
    if (!localStorage.regdUsers) return
    const data: any[] = JSON.parse(localStorage.regdUsers)
    data.forEach((regdUser): void => {
      const newRegdUser = new RegisteredUser;
      newRegdUser.id = regdUser._id
      newRegdUser.name = regdUser._name
      newRegdUser.email = regdUser._email
      newRegdUser.password = regdUser._password
      newRegdUser.productsInCart = regdUser._productsInCart
      newRegdUser.purchasedProducts = regdUser._purchasedProducts
      if (!this.isRegistered(newRegdUser.email)) return this.members.add(newRegdUser)
    })
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
  public logOut(): void {
    if (localStorage.logedUser) {
      localStorage.removeItem('logedUser')
    }
    this.user = new InvitedUser
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
