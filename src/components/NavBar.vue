<script lang="ts">
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CartSheet from './CartSheet.vue';
import StoreLogo from './StoreLogo.vue';
export default {
    name: 'NavBar',
    components: {
        FontAwesomeIcon,
        CartSheet,
        StoreLogo
    },
    data() {
        return {
            faBars,
            faCartShopping,
            faMagnifyingGlass,
            isCartOpen: false
        };
    },
    methods: {
        toggleCart() {
            this.isCartOpen = !this.isCartOpen;
        }
    }
};
</script>

<template>
    <header>
        <nav class="navbar">
            <FontAwesomeIcon class="navbar__mobile-menu" :icon="faBars" />
            <div class="navbar__left">
                <StoreLogo />
                <ul class="navbar__links">
                    <li><a href="/" class="navbar__link">Home</a></li>
                    <li><a href="/products" class="navbar__link">Products</a></li>
                    <li><a href="/contact" class="navbar__link">Contact Us</a></li>
                </ul>
            </div>
            <div class="navbar__right">
                <FontAwesomeIcon class="navbar__search" :icon="faMagnifyingGlass" />
                <a class="navbar__link" href="/sign-in">Sign In</a>
                <button class="navbar__cart-btn" @click="toggleCart">
                    <FontAwesomeIcon :icon="faCartShopping" />
                </button>
            </div>
        </nav>
        <CartSheet :isOpen="isCartOpen" @toggle-cart="toggleCart" />
    </header>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: solid thin;
    border-color: #ccc;
}

.navbar__left {
    display: flex;
    gap: 8px;
    align-items: center;
}

.navbar__links {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 8px;
}

.navbar__link {
    text-decoration: none;
    color: black;
}

.navbar__sign-in {
    text-decoration: none;
    color: black;

}

.navbar__cart-btn {
    cursor: pointer;
    background: none;
    font-size: 1.25rem;
}

.navbar__mobile-menu {
    font-size: 24px;
    padding-inline: 8px;
}

.navbar__right {
    gap: 16px;
    display: flex;
    align-items: center;
}

@media screen and (max-width:768px) {

    .navbar__links,
    .navbar__link,
    .navbar__search {
        display: none;
    }
}

@media screen and (min-width:768px) {
    .navbar__mobile-menu {
        display: none;
    }
}
</style>