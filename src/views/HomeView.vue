<script lang="ts">
import ProductCard from '@/components/products/ProductCard.vue';
import SortDropdown from '@/components/products/SortDropdown.vue';
import type { Product } from '@/types/product';

export default {
  name: 'HomeView',
  components: {
    ProductCard,
    SortDropdown
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
  <div>
    <SortDropdown />
    <div class="product-grid">
      <ProductCard v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
        :image="product.image" :category="product.category" :price="product.price" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.product-grid
  display: grid
  width: 100%
  margin: 0 auto
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
  gap: 16px
  padding: 1.25rem
  @media screen and (max-width: 1024px)
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))

  @media screen and (max-width: 600px)
    grid-template-columns: 1fr
</style>