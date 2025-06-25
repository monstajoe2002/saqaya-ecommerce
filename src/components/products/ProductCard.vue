<script lang="ts">
export default {
    name: 'ProductCard',
    props: {
        title: String,
        image: String,
        price: Number,
        category: String
    }
}
</script>

<template>
    <article class="product-card">
        <h3>{{ title }}</h3>
        <img :src="image" :alt="title" class="product-card__image" />
        <p>{{ price }}</p>
        <span class="product-card__category">{{ category }}</span>
        <button class="product-card__cart-btn">Add to cart</button>
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
    // shrink the image down to 200px and fit it within card boundary
    &__image
        max-height: 200px 
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
    &__cart-btn
        margin-top: 4px
        background-color: green
        color: white
        font-size: medium
        padding: 8px
        border-radius: 0.75rem

</style>