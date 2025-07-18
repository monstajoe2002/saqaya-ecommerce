import type { Product } from '@/types/product'
import type { CartItem } from '@/types/cart-item'
import { defineStore } from 'pinia'
interface State {
  cartItems: Array<CartItem>
}
export const useCartItems = defineStore('cartItems', {
  state: (): State => ({
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
  actions: {
    addToCart(product: Partial<Product>) {
      const newCartItem = {
        id: Date.now(),
        title: product.title!,
        image: product.image!,
        price: product.price!,
        quantity: 1,
      } satisfies CartItem
      const cart = this.$state.cartItems
      const existingCartItem = cart.find((item) => item.title === newCartItem.title) as CartItem
      if (!existingCartItem) {
        this.$state.cartItems.push(newCartItem)
        alert('Item added to cart')
        return
      }
      existingCartItem.quantity += 1
      existingCartItem.price += newCartItem.price
      alert('Item quantity updated in cart')
    },
    removeFromCart(cartItem: CartItem) {
      const cart = this.$state.cartItems
      const existingItem = cart.find((item) => item.id === cartItem.id) as CartItem
      const existingItemIdx = cart.indexOf(existingItem)
      this.$state.cartItems.splice(existingItemIdx, 1)
    },
  },
})
