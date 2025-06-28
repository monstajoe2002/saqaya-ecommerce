import type { State } from '..'
import type { Product } from '@/types/product'

export const selectedProductModule = {
  state: () => ({
    selectedProduct: null,
  }),
  getters: {
    getProduct(state: State) {
      return state.selectedProduct
    },
  },
  mutations: {
    selectProduct(state: State, id: number) {
      const product = state.products.find((prod) => prod.id === id) as Product
      state.selectedProduct = product
    },
  },
}
