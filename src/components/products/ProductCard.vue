<script lang="ts">
import { formatPrice } from '@/lib/utils'
import AddToCartButton from './AddToCartButton.vue'
export default {
    name: 'ProductCard',
    components: {
        AddToCartButton
    },
    props: {
        title: String,
        image: String,
        price: Number,
        category: String
    },
    methods: {
        addToCart() {
            this.$store.dispatch("addToCart", {
                title: this.title,
                image: this.image,
                price: this.price,
                quantity: 1
            })
        },
        formatPrice
    }
}
</script>

<template>
    <article class="product-card">
        <h3>{{ title }}</h3>
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