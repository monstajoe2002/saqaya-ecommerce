<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
    addToCart: {
        type: Function as PropType<() => void>,
        required: true
    }
});
</script>

<template>
    <button class="product-card__cart-btn" @click="addToCart">Add to cart</button>
</template>

<style scoped lang="sass">
.product-card
    &__cart-btn
        margin-top: 4px
        background-color: green
        color: white
        font-size: medium
        padding: 8px
        border-radius: 0.75rem
        &:hover
            background-color: #060
            cursor: pointer
        &:active
            background-color: #050     
</style>
