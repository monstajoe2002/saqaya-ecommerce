import { createStore } from 'vuex'
import { productsModule } from './products'
import type { Product } from '@/types/product'
export interface State {
  // cartItems: Array<CartItem>
  products: Array<Product>
  selectedProduct: Product | null
}
export const store = createStore({
  modules: {
    products: productsModule,
  },
})
