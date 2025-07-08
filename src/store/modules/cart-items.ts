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
    getCartTotalPrice: (state: State) => state.cartItems.reduce((acc, item) => acc + item.price, 0),
    getCartTotalQuantity: (state: State) =>
      state.cartItems.reduce((acc, item) => acc + item.quantity, 0),
  },
  mutations: {
    ADD_TO_CART(state: State, product: Product) {
      const newCartItem = {
        id: Date.now(),
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
      } satisfies CartItem
      const cart = state.cartItems
      const existingCartItem = cart.find((item) => item.title === newCartItem.title) as CartItem
      if (!existingCartItem) {
        state.cartItems.push(newCartItem)
      }
      existingCartItem.quantity += 1
      existingCartItem.price += newCartItem.price
    },
    REMOVE_FROM_CART(state: State, cartItem: CartItem) {
      const cart = state.cartItems
      const existingItem = cart.find((item) => item.id === cartItem.id) as CartItem
      const existingItemIdx = cart.indexOf(existingItem)
      state.cartItems.splice(existingItemIdx, 1)
    },
  },
  actions: {
    addToCart({ commit }: Store<State>, product: Omit<Product, 'id'>) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }: Store<State>, cartItem: CartItem) {
      commit('REMOVE_FROM_CART', cartItem)
    },
  },
}
