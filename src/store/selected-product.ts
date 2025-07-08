import type { Store } from 'vuex/types/index.js'
import type { State } from '.'
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
  actions: {
    fetchProduct({ commit }: Store<State>, id: number) {
      const baseURL = `https://fakestoreapi.com/products/${id}`
      fetch(baseURL)
        .then((res) => res.json())
        .then((response) => {
          commit('setProductData', response)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
  mutations: {
    setProductData(state: State, product: Product) {
      state.selectedProduct = product
    },
  },
}
