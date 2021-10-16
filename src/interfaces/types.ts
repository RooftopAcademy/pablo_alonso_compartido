export interface ProductInterface {
  id: string
  picture: string
  title: string
  author: string
  description: string
  price: number
  comments: ProductCommentInterface[]
  category: string[]
  isAvaliable: boolean
  notAvaliable(): void
}

export interface ProductCommentInterface {
  date: string
  username: string
  message: string
}

export interface RegisteredUserInterface {
  name: string
  email: string
  password: string
}

export interface RegisteredUserLocalStorageInterface {
  _id: string
  _canBuy: boolean
  _canComment: boolean
  _name: string
  _email: string
  _password: string
  _productsInCart: []
  _purchasedProducts: []
}

export interface LogDataInterface {
  email: string
  password: string
}


export interface CompareByProps {
  a: {[property: string]: string}
  b: {[property: string]: string}
  keys: string[]
  mode: number[]
  i: number
}

export enum OrderMode {
  none = 0,
  asc = 1,
  desc = -1,
}

export type OrderModeInterface = {
  [a: string]: OrderMode
}