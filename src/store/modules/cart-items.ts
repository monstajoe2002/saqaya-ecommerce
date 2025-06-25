import type { Product } from '@/types/product'
import type { State } from '..'
import type { Store } from 'vuex/types/index.js'
import type { CartItem } from '@/types/cart-item'

export const cartItemsModule = {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    getCartItems: (state: State) => {
      return state.cartItems
    },
  },
  mutations: {
    ADD_TO_CART(state: State, product: Product) {
      const newCartItem = {
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
      } satisfies CartItem
      state.cartItems.push(newCartItem)
    },
  },
  actions: {
    addToCart({ commit }: Store<State>, product: Product) {
      const newCartItem = {
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
      } satisfies CartItem
      commit('ADD_TO_CART', newCartItem)
    },
  },
}
