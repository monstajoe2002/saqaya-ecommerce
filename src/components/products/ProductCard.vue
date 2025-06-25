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
        <span>{{ category }}</span>
    </article>
</template>

<style scoped lang="sass">
.product-card
    border: solid #000 thin;
    border-radius: .75rem;
    padding: .5rem;
    &__image
        max-width: 200px;
        max-height: 400px;
        object-fit: cover;
</style>