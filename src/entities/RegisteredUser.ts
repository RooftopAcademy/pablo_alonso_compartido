import User from './User'
import Product from './Product'
import { v4 as uuidv4 } from 'uuid'

export default class RegisteredUser extends User {

  private _id: string = uuidv4()
  private _name: string = ''
  private _email: string = ''
  private _password: string = ''
  private _productsInCart: Product[] = []
  private _purchasedProducts: Product[] = []

  // readonly _canBuy: boolean = true
  readonly _canComment: boolean = true

  // Getters y Setters:
  public set id(id: string) {
    this._id = id
  }
  public get id(): string {
    return this._id
  }

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

  public set productsInCart(productsInCart: Product[]) {
    this._productsInCart = productsInCart
  }
  public get productsInCart(): Product[] {
    return this._productsInCart
  }

  public set purchasedProducts(purchasedProducts: Product[]) {
    this._purchasedProducts = purchasedProducts
  }
  public get purchasedProducts(): Product[] {
    return this._purchasedProducts
  }


  // Metodos:
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

  public hasDebt() : boolean {
    return true
  }

  public get canBuy(): boolean {
    return !this.hasDebt()
  }
}
