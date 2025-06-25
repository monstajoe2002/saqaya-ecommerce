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
  <div class="product-grid">
    <ProductCard v-for="product in products" :key="product.id" :title="product.title" :image="product.image"
      :category="product.category" :price="product.price" />
  </div>
</template>

<style scoped lang="sass">
.product-grid
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(4, 1fr)
  gap: 8px;
  @media screen and (max-width: 768px)
    grid-auto-rows: repeat(2, 1fr)
  
  
</style>