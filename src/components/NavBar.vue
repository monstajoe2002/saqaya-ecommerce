<script setup lang="ts">
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <header>
        <nav class="navbar">
            <ul class="navlinks">
                <li><a href="/" class="navlink">Home</a></li>
                <li><a href="/products" class="navlink">Products</a></li>
                <li><a href="/contact" class="navlink">Contact Us</a></li>
            </ul>
            <div :style="{ gap: '16px', display: 'flex', alignItems: 'center' }">
                <FontAwesomeIcon :icon="faMagnifyingGlass" />
                <a class="navlink" href="/sign-in">Sign In</a>
                <button class="cart-btn">
                    <FontAwesomeIcon :icon="faCartShopping" />
                </button>
            </div>
        </nav>
    </header>
</template>


<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navlinks {
    display: flex;
    flex-direction: row;
    list-style: none;
}

.navlink {
    text-decoration: none;
    padding: 10px 15px;
    color: black;
    font-family: 'Poppins', sans-serif;
}

.cart-btn {
    cursor: pointer;
}
</style>