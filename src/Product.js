class Product {

  constructor() {
    this._id = String
    this._picture = String
    this._title = String
    this._author = String
    this._description = String
    this._price = Number
    this._category = Array
    this._isAvaliable = Boolean
  }

  set id(id) {
    this._id = id
  }
  get id() {
    return this._id
  }


  set picture(picture) {
    this._picture = picture
  }
  get picture() {
    return this._picture
  }


  set title(title) {
    this._title = title
  }
  get title() {
    return this._title
  }


  set author(author) {
    this._author = author
  }
  get author() {
    return this._author
  }


  set description(description) {
    this._description = description
  }
  get description() {
    return this._description
  }


  set price(price) {
    this._price = price
  }
  get price() {
    return this._price
  }


  set category(category) {
    this._category = category
  }
  get category() {
    return this._category
  }

  set isAvaliable(isAvaliable) {
    this._isAvaliable = isAvaliable
  }
  get isAvaliable() {
    return this._isAvaliable
  }


  notAvaliable() {
    this._isAvaliable = false
  }
}