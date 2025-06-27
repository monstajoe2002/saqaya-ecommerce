import type { Store } from 'vuex/types/index.js'
import type { State } from '..'
import type { Product } from '@/types/product'

export const productsModule = {
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts(state: State) {
      return state.products
    },
  },
  actions: {
    fetchProducts({ commit }: Store<State>) {
      const baseURL = 'https://fakestoreapi.com/products'
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
    setProductData(state: State, products: Product[]) {
      state.products = products
    },
    sortProducts(state: State, option: 'price' | 'category') {
      if (option === 'price') {
        state.products.sort((a, b) => b.price - a.price)
      }
      state.products.sort((a, b) => {
        if (a.category < b.category) return -1
        if (a.category > b.category) return 1
        return 0
      })
    },
  },
}
