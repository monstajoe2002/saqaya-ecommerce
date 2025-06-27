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
    sortProducts(state: State, option: 'price' | 'category') {
      return option === 'price'
        ? state.products.sort((a, b) => a.price - b.price)
        : state.products.sort()
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
  },
}
