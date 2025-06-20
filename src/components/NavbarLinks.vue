<template>
    <ul class="navbar__links">
        <li><a href="/" class="navbar__link">Home</a></li>
        <li><a href="/products" class="navbar__link">Products</a></li>
        <li><a href="/contact" class="navbar__link">Contact Us</a></li>
    </ul>
</template>

<style lang="sass" scoped>
.navbar__links 
    display: flex
    flex-direction: row
    list-style: none
    gap: 8px


.navbar__link 
    text-decoration: none
    color: black


@media screen and (max-width:768px) 
    .navbar__links,
    .navbar__link 
        display: none

</style>