import type { Store } from 'vuex/types/index.js'
import type { State } from '..'

export const productsModule = {
  state: () => ({
    products: [],
  }),
  mutations: {
    fetchProducts({ commit }: Store<State>) {
      const baseURL = 'https://fakestoreapi.com/products'

      fetch(baseURL)
        .then((response) => {
          commit('setProductData', response.json())
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
