<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import SideCart from './SideCart.vue'; // Add this import

export default {
    name: 'CartButton',
    components: {
        FontAwesomeIcon,
        SideCart
    },
    data() {
        return {
            faCartShopping,
            isCartOpen: false
        };
    },
    methods: {
        toggleCart() {
            this.isCartOpen = !this.isCartOpen;
        }
    }
}
</script>

<template>
    <button class="navbar__cart-btn" @click="toggleCart">
        <FontAwesomeIcon :icon="faCartShopping" />
    </button>
    <!-- SideCart component for the cart overlay, emit is also handled here -->
    <SideCart :isOpen="isCartOpen" @toggle-cart="toggleCart" />
</template>

<style lang="sass" scoped>
.navbar
    &__cart-btn 
        cursor: pointer
        background: none
        font-size: 1.25rem

</style>