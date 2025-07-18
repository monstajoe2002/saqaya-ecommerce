import type { Product } from '@/types/product'
import { defineStore } from 'pinia'
interface State {
  products: Array<Product>
  isLoading: boolean
  error: string | null
}
export const useProductsStore = defineStore('products', {
  state: (): State => ({
    products: [],
    isLoading: false,
    error: null,
  }),
  getters: {
    getProducts(state: State) {
      return state.products
    },
  },
  actions: {
    async fetchProducts() {
      this.setIsLoading(true)
      const baseURL = 'https://fakestoreapi.com/products'
      const response = await fetch(baseURL)
      if (!response.ok) {
        this.setError('Failed to fetch products')
        this.setIsLoading(false)
      }
      const data = await response.json()
      if (data) {
        this.setProductData(data)
        this.setError(null)
        this.setIsLoading(false)
      }
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
    setError(error: string | null) {
      this.error = error
    },
    clearError() {
      this.error = null
    },
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading
    },
  },
})
