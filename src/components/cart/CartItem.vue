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

<script setup lang="ts">
import type { CartItem } from '@/types/cart-item';
import { formatPrice } from '@/lib/utils';
import { useCartItems } from '@/store/cart-items';
const cartItemsStore = useCartItems(); // Access the cart items store
defineProps({
    cartItem: {
        type: Object as () => CartItem,
        required: true
    }
})
function removeFromCart(cartItem: CartItem) {
    cartItemsStore.removeFromCart(cartItem);
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
    &__remove-btn
        background-color: red
        padding: 4px 8px
        border-radius: 8px
        color: white
        cursor: pointer
        &:hover
            background-color:#c00
</style>