// vuex.d.ts
import { Store } from 'vuex'
import { Product } from './src/types/product'
declare module 'vue' {
  // declare your own store states
  interface State {
    // cartItems: Array<CartItem>
    products: Array<Product>
    selectedProduct: Product | null
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
