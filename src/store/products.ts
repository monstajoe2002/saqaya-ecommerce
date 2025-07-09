import type { Product } from '@/types/product'
import { defineStore } from 'pinia'
interface State {
  products: Array<Product>
}
export const useProductsStore = defineStore('products', {
  state: (): State => ({
    products: [],
  }),
  getters: {
    getProducts(state: State) {
      return state.products
    },
  },
  actions: {
    async fetchProducts() {
      const baseURL = 'https://fakestoreapi.com/products'
      const response = await fetch(baseURL)
      const data = await response.json()
      this.setProductData(data)
    },
    setProductData(payload: Array<Product>) {
      this.$state.products = payload
    },
    sortProducts(option: 'price' | 'category' | null) {
      if (option === 'price') {
        this.$state.products.sort((a, b) => b.price - a.price)
      } else if (option === 'category') {
        this.$state.products.sort((a, b) => a.category.localeCompare(b.category))
      }
    },
  },
})
