import { CommentProduct } from './ts/types'

export default class Product {
  private _id: string = ''
  private _picture: string = ''
  private _title: string = ''
  private _author: string = ''
  private _description: string = ''
  private _price: number = 0
  private _comment: CommentProduct[] = []
  private _category: string[] = []
  private _isAvaliable: boolean = true

  set id(id: string) {
    this._id = id
  }
  get id(): string {
    return this._id
  }


  set picture(picture: string) {
    this._picture = picture
  }
  get picture(): string {
    return this._picture
  }


  set title(title: string) {
    this._title = title
  }
  get title(): string {
    return this._title
  }


  set author(author: string) {
    this._author = author
  }
  get author(): string {
    return this._author
  }


  set description(description: string) {
    this._description = description
  }
  get description(): string {
    return this._description
  }


  set price(price: number) {
    this._price = price
  }
  get price(): number {
    return this._price
  }

  set comment(comment: CommentProduct[]) {
    this._comment = comment
  }
  get comment(): CommentProduct[] {
    return this._comment
  }


  set category(category: string[]) {
    this._category = category
  }
  get category(): string[] {
    return this._category
  }

  set isAvaliable(isAvaliable: boolean) {
    this._isAvaliable = isAvaliable
  }
  get isAvaliable(): boolean {
    return this._isAvaliable
  }


  notAvaliable(): void {
    this._isAvaliable = false
  }
}