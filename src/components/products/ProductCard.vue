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
        <h1>{{ title }}</h1>
        <img :src="image" :alt="title" />
        <p>{{ price }}</p>
        <span>{{ category }}</span>
    </article>
</template>

<style scoped lang="sass">
.product-card
    border: solid #000 thin;
    border-radius: .75rem;
    padding: .5rem;
</style>