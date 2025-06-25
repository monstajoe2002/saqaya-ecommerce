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
        <div class="product-cart__footer">
            <p>{{ price }}</p>
            <span class="product-card__category">{{ category }}</span>
        </div>
    </article>
</template>

<style scoped lang="sass">
.product-card
    border: solid #000 thin
    border-radius: .75rem
    padding: .5rem
    display: flex
    flex-direction: column
    justify-content: space-between
    &__image
        max-width: 200px
        max-height: 400px
        object-fit: cover
    &__category
        font-weight: 500
        font-size: small
        background-color:#acade9
        border: solid #999 thin
        margin-top: 8px
        padding: 4px 8px
        border-radius: 1rem
        max-width: fit-content
    &__footer
        display: inline-block
        

</style>