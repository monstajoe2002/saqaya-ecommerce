<template>
    <div class="cart__item">
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
        removeFromCart(cartItem: CartItem) {
            this.$store.dispatch("removeFromCart", cartItem);
        },
        formatPrice
    },
}

</script>
<style scoped lang="sass">
.cart
    &__item
        display: flex
        background-color:#90bfdf
        color: black
        margin-bottom: 4px
        padding: 12px
</style>