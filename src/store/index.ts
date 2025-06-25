import { createStore } from 'vuex'
import { productsModule } from './modules/products'
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
