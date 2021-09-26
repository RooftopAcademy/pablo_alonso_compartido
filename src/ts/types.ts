export interface ProductData {
  id: string
  picture: string
  title: string
  author: string
  description: string
  price: number
  comments: ProductComment[]
  category: string[]
  isAvaliable: boolean
}

export interface ProductComment {
  date: string
  username: string
  message: string
}

export interface UserData {
  name: string
  email: string
  password: string
}

export interface LogData {
  email: string
  password: string
}