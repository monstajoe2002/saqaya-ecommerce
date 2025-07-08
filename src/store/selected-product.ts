import type { Product } from '@/types/product'
import { defineStore } from 'pinia'
interface State {
  selectedProduct: Product | null
}

export const useSelectedProduct = defineStore('selectedProduct', {
  state: (): State => ({
    selectedProduct: null,
  }),
  getters: {
    getProduct(state: State): Product | null {
      return state.selectedProduct
    },
  },
  actions: {
    async fetchProduct(id: number) {
      const baseURL = `https://fakestoreapi.com/products/${id}`
      const response = await fetch(baseURL)
      const data = await response.json()
      this.setProductData(data)
    },
    setProductData(product: Product) {
      this.$state.selectedProduct = product
    },
  },
})
