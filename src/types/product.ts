export type Product = {
  id: string
  title: string
  description: string
  price: number
  category: string
  rating: {
    rate: number
    count: number
  }
}
