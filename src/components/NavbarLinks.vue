<template>
    <div class="navbar-links">
        <ul class="navbar__links" :class="{ 'navbar__links--open': isMenuOpen }">
            <li><a href="/" class="navbar__link" @click="toggleMenuOnMobile">Home</a></li>
            <li><a href="/products" class="navbar__link" @click="toggleMenuOnMobile">Products</a></li>
            <li><a href="/contact" class="navbar__link" @click="toggleMenuOnMobile">Contact Us</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: "NavbarLinks",
    props: {
        isMenuOpen: {
            type: Boolean,
            required: true
        },
        toggleMenu: {
            type: Function,
            required: true
        }
    },
    methods: {
        toggleMenuOnMobile() {
            // Optionally close menu after clicking a link on mobile
            if (window.innerWidth <= 768) {
                this.toggleMenu();
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.navbar__links 
    display: flex
    flex-direction: row
    list-style: none
    gap: 8px
    @media screen and (max-width:768px)
        display: none
        position: absolute
        top: 40px
        right: 0
        background: #fff
        flex-direction: column
        min-width: 150px
        box-shadow: 0 2px 8px rgba(0,0,0,0.1)
        z-index: 2

.navbar__links--open
    @media screen and (max-width:768px)
        display: flex
        justify-self: flex-start

.navbar__link 
    text-decoration: none
    color: black
    padding: 10px 16px
    &:hover
        color: #007bff
</style>