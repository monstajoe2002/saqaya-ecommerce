<script lang="ts">
export default {
  name: 'HomeView',
  computed: {
    products() {
      return this.$store.getters.getProducts
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  }
}
</script>

<template>
  <!-- <ProductCard /> -->
  <div v-for="product in products" :key="product.id">
    <p>{{ product.title }}</p>
  </div>
</template>
