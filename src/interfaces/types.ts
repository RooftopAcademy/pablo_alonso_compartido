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

export interface UserInterface {
  name: string
  email: string
  password: string
}

export interface LogData {
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
  asc = 1,
  desc = -1,
}

export type OrderModeInterface = {
  [a: string]: OrderMode
}