<script setup lang="ts">
import { formatPrice } from '@/lib/utils'
import AddToCartButton from './AddToCartButton.vue'
import { RouterLink } from 'vue-router';
import { store } from '@/store';

const props = defineProps({
    id: Number,
    title: String,
    image: String,
    price: Number,
    category: String
});
function addToCart() {
    store.dispatch("addToCart", {
        title: props.title,
        image: props.image,
        price: props.price,
        quantity: 1
    })
}
</script>

<template>
    <article class="product-card">
        <RouterLink :to="`/products/${id}`">
            <h3>{{ title }}</h3>
        </RouterLink>
        <img :src="image" :alt="title" class="product-card__image" />
        <p>{{ formatPrice(Number(price)) }}</p>
        <span class="product-card__category">{{ category }}</span>
        <!-- the add action will be passed here to avoid prop drilling with product info-->
        <AddToCartButton :addToCart="addToCart" />
    </article>
</template>

<style scoped lang="sass">
.product-card
    border: solid #000 thin
    border-radius: .75rem
    padding: .5rem // inner padding
    display: flex
    flex-direction: column
    justify-content: space-between
    // shrink the image down to 150px and fit it within card boundary
    &__image
        max-height: 150px
        object-fit: contain
    &__category
        font-weight: 500
        font-size: small
        background-color:#acade9
        border: solid #999 thin
        margin-top: 8px
        padding: 4px 8px
        border-radius: 1rem
        max-width: fit-content

</style>