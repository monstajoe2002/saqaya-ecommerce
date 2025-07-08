<template>
    <Transition name="slide">
        <aside v-if="isOpen" class="cart">
            <div class="cart__header">
                <h1 class="cart__title">Cart</h1>
                <button class="cart__close" @click="toggleCart(false)">&times;</button> <!-- Close button -->
            </div>
            <hr class="cart__border" />
            <div class="cart__content">
                <!-- Show fallback message if cart is empty -->
                <p v-if="!cartItems.length" class="cart__empty-fallback">Your cart is empty. Add items here.</p>
                <div v-else>
                    <!-- Render cart items conditionally -->
                    <CartItemComponent v-for="cartItem in cartItems" :key="cartItem.title" :cart-item="cartItem" />
                </div>
            </div>
            <!-- Only show the count if cart has items -->
            <div class="cart__footer" v-show="cartItems.length">
                <p>Total Price: {{ formatPrice(totalPrice) }}</p>
                <p>Quantity: {{ totalQuantity }}</p>
            </div>
        </aside>
    </Transition>
    <!-- Dark overlay when the cart sheet is open -->
    <div v-if="isOpen" class="cart__overlay" @click="toggleCart(false)"></div>
</template>

<script setup lang="ts">
import { formatPrice } from '@/lib/utils';
import type { CartItem } from '@/types/cart-item';
import CartItemComponent from './CartItem.vue';
import { computed } from 'vue';
import { useCartItems } from '@/store/cart-items';
const cartItemsStore = useCartItems(); // Access the cart items store
defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits(['toggle-cart']);
function toggleCart(isOpen: boolean) {
    emit("toggle-cart", isOpen); // Emit the toggle event to the parent component CartButton
}
const cartItems = computed(() => cartItemsStore.getCartItems as CartItem[]);
const totalPrice = computed(() => cartItemsStore.getCartTotalPrice);
const totalQuantity = computed(() => cartItemsStore.getCartTotalQuantity);
</script>

<style lang="sass" scoped>
.cart 
    position: fixed
    top: 0
    right: 0
    height: 100vh
    width: 400px
    background: #2e3d47
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1)
    z-index: 1000
    padding: 1rem
    color: white

    &__header 
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 1rem


    &__close 
        background: none
        border: none
        font-size: 1.5rem
        cursor: pointer
        color: white


    &__border 
        border-bottom: 1px solid #ccc
        margin-bottom: 1rem


    &__empty-fallback 
        text-align: center
        margin-top: 2rem
        color: #ccc


    &__overlay 
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        background: rgba(0, 0, 0, 0.5)
        z-index: 999
/* Slide transition animations */
.slide-enter-active,
.slide-leave-active 
    transition: transform 0.3s ease


.slide-enter-from,
.slide-leave-to 
    transform: translateX(100%)


.slide-enter-to,
.slide-leave-from 
    transform: translateX(0)

</style>