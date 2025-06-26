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
                    <div v-for="cartItem in cartItems" :key="cartItem.title" class="cart__item">
                        <img :src="cartItem.image" :alt="cartItem.title" width="40" height="40" />
                        <div>
                            <span>{{ cartItem.title }}</span>
                            <span> x{{ cartItem.quantity }}</span>
                            <span>\{{ formatPrice(cartItem.price) }}</span>
                            <div>
                                <button class="cart__remove-btn" @click="removeFromCart(cartItem)">Remove</button>
                            </div>
                        </div>
                    </div>
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

<script lang="ts">
import { formatPrice } from '@/lib/utils';
import type { CartItem } from '@/types/cart-item';

export default {
    name: 'SideCart',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    emits: ['toggle-cart'],
    methods: {
        toggleCart(isOpen: boolean) {
            this.$emit('toggle-cart', isOpen) // Emit the toggle event to the parent component CartButton
        },
        removeFromCart(cartItem: CartItem) {
            this.$store.dispatch("removeFromCart", cartItem)
        },
        formatPrice
    },
    computed: {
        cartItems() {
            return this.$store.getters.getCartItems as CartItem[]
        },
        totalPrice() {
            return this.$store.getters.getCartTotalPrice
        },
        totalQuantity() {
            return this.$store.getters.getCartTotalQuantity
        },

    },
}
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
    &__item
        display: flex
        background-color:#90bfdf
        color: black
        margin-bottom: 4px
        padding: 12px
    &__remove-btn
        background-color: red
        padding: 4px 8px
        border-radius: 8px
        color: white
        cursor: pointer
        &:hover
            background-color:#c00
        


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