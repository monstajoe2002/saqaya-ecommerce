<script lang="ts">
import ProductCard from '@/components/products/ProductCard.vue';
import type { Product } from '@/types/product';

export default {
  name: 'HomeView',
  components: {
    ProductCard
  },
  computed: {
    products() {
      return this.$store.getters.getProducts as Product[]
    }
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  }
}
</script>

<template>
  <div v-for="product in products" :key="product.id">
    <ProductCard :title="product.title" :image="product.image" :category="product.category" :price="product.price" />
  </div>
</template>
