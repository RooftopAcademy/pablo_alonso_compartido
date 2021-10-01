import { ProductComment } from '../interfaces/types'

export default class Product {

  private _id: string = ''
  private _picture: string = ''
  private _title: string = ''
  private _author: string = ''
  private _description: string = ''
  private _price: number = 0
  private _comment: ProductComment[] = []
  private _category: string[] = []
  private _isAvaliable: boolean = true


  public set id(id: string) {
    this._id = id
  }
  public get id(): string {
    return this._id
  }


  public set picture(picture: string) {
    this._picture = picture
  }
  public get picture(): string {
    return this._picture
  }


  public set title(title: string) {
    this._title = title
  }
  public get title(): string {
    return this._title
  }


  public set author(author: string) {
    this._author = author
  }
  public get author(): string {
    return this._author
  }


  public set description(description: string) {
    this._description = description
  }
  public get description(): string {
    return this._description
  }


  public set price(price: number) {
    this._price = price
  }
  public get price(): number {
    return this._price
  }

  public set comment(comment: ProductComment[]) {
    this._comment = comment
  }
  public get comment(): ProductComment[] {
    return this._comment
  }


  public set category(category: string[]) {
    this._category = category
  }
  public get category(): string[] {
    return this._category
  }


  public set isAvaliable(isAvaliable: boolean) {
    this._isAvaliable = isAvaliable
  }
  public get isAvaliable(): boolean {
    return this._isAvaliable
  }


  public notAvaliable(): void {
    this._isAvaliable = false
  }
}