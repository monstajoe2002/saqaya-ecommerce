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

<style lang="sass" scoped>
.navbar 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: solid thin;
    border-color: #ccc;

    &__left 
        display: flex;
        gap: 8px;
        align-items: center;
    

    &__sign-in 
        text-decoration: none;
        color: black;
        @media screen and (max-width:768px) 
            display: none;
    

    &__cart-btn 
        cursor: pointer;
        background: none;
        font-size: 1.25rem;
    

    &__mobile-menu 
        font-size: 24px;
        padding-inline: 8px;
        @media screen and (min-width:768px) 
            display: none;

    &__right 
        gap: 16px;
        display: flex;
        align-items: center;




@media screen and (min-width:768px) 
    .navbar
        &__mobile-menu 
            display: none;
    

</style>