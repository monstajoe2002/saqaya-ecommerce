<script setup lang="ts">
import { formatPrice } from '@/lib/utils';
import { store } from '@/store';
import type { Product } from '@/types/product';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const product = computed(() => {
    return store.getters.getProduct as Product | null;
});

onMounted(() => {
    const id = Number(route.params.id);
    store.dispatch("fetchProduct", id);
});
</script>


<template>
    <div class="product-view">
        <h1 class="product-view__title">{{ product?.title }}</h1>
        <img class="product-view__image" :src="product?.image" alt="Product Image" />
        <p class="product-view__category">Category: <span class="product-view__category-label">{{ product?.category
                }}</span></p>
        <p class="product-view__price">Price: <span class="product-view__price-value">{{
            formatPrice(Number(product?.price)) }}</span></p>
        <p class="product-view__description">{{ product?.description }}</p>
    </div>
</template>

<style lang="sass" scoped>
$product-view-title-color: #222;
$product-view-category-color: #4a90e2;
$product-view-price-color: #27ae60;
$product-view-description-color: #555;

.product-view 
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title 
        font-size: 2rem;
        margin-bottom: 1rem;
        text-align: center;
        color: $product-view-title-color;

    &__image 
        width: 300px;
        height: 300px;
        object-fit: contain;
        margin-bottom: 1.5rem;
        border-radius: 8px;
        background: #f8f8f8;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
    

    &__category,
    &__price,
    &__description 
        width: 100%;
        margin-bottom: 1rem;
        font-size: 1.1rem;
    

    &__category-label 
        font-weight: 500;
        color: $product-view-category-color;
    

    &__price-value 
        font-weight: bold;
        color: $product-view-price-color;
    

    &__description 
        color: $product-view-description-color;
        font-size: 1rem;
        line-height: 1.6;
        margin-top: 1rem;
    
</style>