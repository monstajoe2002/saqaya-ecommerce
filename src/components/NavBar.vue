<template>
    <header>
        <nav>
            <ul class="navlinks">
                <li><a href="/" class="navlink">Home</a></li>
                <li><a href="/products" class="navlink">Products</a></li>
                <li><a href="/contact" class="navlink">Contact Us</a></li>
            </ul>
        </nav>
    </header>
</template>


<style scoped>
.navlinks {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
}

.navlink {
    text-decoration: none;
    padding: 10px 15px;
    color: black;
    font-family: 'Poppins', sans-serif;
}
</style>