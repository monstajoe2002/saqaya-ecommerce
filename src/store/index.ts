import { createStore } from 'vuex'
import { useProductsStore } from './products'
import type { Product } from '@/types/product'
import type { CartItem } from '@/types/cart-item'
import { cartItemsModule } from './cart-items'
import { selectedProductModule } from './selected-product'
export interface State {
  cartItems: Array<CartItem>
  products: Array<Product>
  selectedProduct: Product | null
}
export const store = createStore({
  modules: {
    products: useProductsStore,
    cartItems: cartItemsModule,
    selectedProduct: selectedProductModule,
  },
})
