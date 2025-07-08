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
    async fetchProducts(state: State) {
      const baseURL = 'https://fakestoreapi.com/products'
      const response = await fetch(baseURL)
      const data = await response.json()
      this.setProductData(state, data)
    },
    setProductData(state: State, payload: Array<Product>) {
      state.products = payload
    },
    sortProducts(state: State, option: 'price' | 'category') {
      if (option === 'price') {
        state.products.sort((a, b) => b.price - a.price)
      } else if (option === 'category') {
        state.products.sort((a, b) => a.category.localeCompare(b.category))
      }
    },
  },
})
