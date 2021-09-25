export interface DataProduct {
  id: string
  picture: string
  title: string
  author: string
  description: string
  price: number
  comments: CommentProduct[]
  category: string[]
  isAvaliable: boolean
}

export interface CommentProduct {
  date: string
  username: string
  message: string
}