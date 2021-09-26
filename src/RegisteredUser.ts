
import User from './User'
import Product from './Product'
import { v4 as uuidv4 } from 'uuid'

export default class RegisteredUser extends User {
  private _name: string = ''
  private _email: string = ''
  private _password: string = ''
  private _productsInCart: Product[] = []
  private _purchasedProducts: Product[] = []
  
  readonly _id: string = uuidv4()
  // como esta registrado puede commentar y comprar
  readonly _canBuy: boolean = true
  readonly _canComment: boolean = true

  public set name(name: string) {
    this._name = name
  }
  public get name(): string {
    return this._name
  }

  public set email(email: string) {
    this._email = email
  }
  public get email(): string {
    return this._email
  }

  public set password(password: string) {
    this._password = password
  }
  public get password(): string {
    return this._password
  }


  public addProductsInCart(product: Product): void {
    this._productsInCart.push(product)
  }
  public getAllProductsInCart(): Product[] {
    return this._productsInCart
  }

  public addPurchasedProduct(product: Product): void {
    this._purchasedProducts.push(product)
  }
  public getAllPurchasedProduct(): Product[] {
    return this._purchasedProducts
  }
}
