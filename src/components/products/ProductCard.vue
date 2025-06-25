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
    <h1>{{ title }}</h1>
    <img :src="image" :alt="title" />
    <p>{{ price }}</p>
    <span>{{ category }}</span>
</template>