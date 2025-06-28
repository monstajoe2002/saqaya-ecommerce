import { createStore } from 'vuex'
import { productsModule } from './modules/products'
import type { Product } from '@/types/product'
import type { CartItem } from '@/types/cart-item'
import { cartItemsModule } from './modules/cart-items'
import { selectedProductModule } from './modules/selected-product'
export interface State {
  cartItems: Array<CartItem>
  products: Array<Product>
  selectedProduct: Product | null
}
export const store = createStore({
  modules: {
    products: productsModule,
    cartItems: cartItemsModule,
    selectedProduct: selectedProductModule,
  },
})
