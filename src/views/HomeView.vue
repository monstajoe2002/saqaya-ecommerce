<script setup lang="ts">
import ProductCard from '@/components/products/ProductCard.vue';
import SortDropdown from '@/components/products/SortDropdown.vue';
import { useProductsStore } from '@/store/products';
import { computed, onMounted } from 'vue';
const productsStore = useProductsStore()
const products = computed(() => {
  return productsStore.getProducts;
})
onMounted(() => productsStore.fetchProducts(productsStore.$state))
</script>

<template>
  <div>
    <SortDropdown />
    <div v-if="products.length" class="product-grid">
      <ProductCard v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
        :image="product.image" :category="product.category" :price="product.price" />
    </div>
    <div v-else>
      <h1 class="error-message">Failed to load products.</h1>
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
.error-message
  color: red
</style>