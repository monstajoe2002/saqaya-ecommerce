<template>
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
</template>

<script lang="ts">
import type { CartItem } from '@/types/cart-item';
import { formatPrice } from '@/lib/utils';
export default {
    name: "CartItem",
    props: {
        cartItem: {
            type: Object as () => CartItem,
            required: true
        },
    },
    methods: {
        toggleCart(isOpen: boolean) {
            this.$emit("toggle-cart", isOpen); // Emit the toggle event to the parent component CartButton
        },
        removeFromCart(cartItem: CartItem) {
            this.$store.dispatch("removeFromCart", cartItem);
        },
        formatPrice
    },
    computed: {
        cartItems() {
            return this.$store.getters.getCartItems as CartItem[];
        },
        totalPrice() {
            return this.$store.getters.getCartTotalPrice;
        },
        totalQuantity() {
            return this.$store.getters.getCartTotalQuantity;
        },
    },
}

</script>
