<script lang="ts">
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import StoreLogo from './StoreLogo.vue';
import NavbarLinks from './NavbarLinks.vue'
import CartButton from './CartButton.vue'
import SearchInput from './SearchInput.vue'
export default {
    name: 'NavBar',
    components: {
        FontAwesomeIcon,
        StoreLogo,
        NavbarLinks,
        CartButton,
        SearchInput
    },
    data() {
        return {
            faBars,
            faMagnifyingGlass,
        };
    },

};
</script>

<template>
    <header>
        <nav class="navbar">
            <FontAwesomeIcon class="navbar__mobile-menu" :icon="faBars" />
            <div class="navbar__left">
                <StoreLogo />
                <NavbarLinks />
            </div>
            <div class="navbar__right">
                <SearchInput />
                <a class="navbar__sign-in" href="#">Sign In</a>
                <CartButton />
            </div>
        </nav>

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

    .navbar__sign-in {
        display: none;
    }
}

@media screen and (min-width:768px) {
    .navbar__mobile-menu {
        display: none;
    }
}
</style>