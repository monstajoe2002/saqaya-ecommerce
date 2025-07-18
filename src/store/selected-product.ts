import type { Product } from '@/types/product'
import { defineStore } from 'pinia'
interface State {
  selectedProduct: Product | null
  error: string | null
  isLoading: boolean
}

export const useSelectedProduct = defineStore('selectedProduct', {
  state: (): State => ({
    selectedProduct: null,
    error: null,
    isLoading: false,
  }),
  getters: {
    getProduct(state: State): Product | null {
      return state.selectedProduct
    },
  },
  actions: {
    async fetchProduct(id: number) {
      this.setIsLoading(true)
      const baseURL = `https://fakestoreapi.com/products/${id}`
      const response = await fetch(baseURL)
      if (!response.ok) {
        this.setError('Failed to fetch product details')
        this.setIsLoading(false)
      }
      const data = await response.json()
      if (data) {
        this.setProductData(data)
        this.setError(null)
        this.setIsLoading(false)
      }
    },
    setProductData(product: Product) {
      this.$state.selectedProduct = product
    },
    setError(error: string | null) {
      this.$state.error = error
    },
    clearError() {
      this.$state.error = null
    },
    setIsLoading(isLoading: boolean) {
      this.$state.isLoading = isLoading
    },
  },
})
