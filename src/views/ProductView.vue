<script lang="ts">
import type { Product } from '@/types/product';

export default {
    name: 'ProductView',
    computed: {
        product() {
            return this.$store.getters.getProduct as Product | null;
        }
    },
    mounted() {
        const id = Number(this.$route.params.id);
        this.$store.dispatch("fetchProduct", id);
    }
}
</script>

<template>
    <div>
        <h1>{{ product?.title }}</h1>
    </div>
</template>