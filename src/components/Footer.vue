<template>
    <footer class="footer">
        <div class="footer-grid">
            <div>
                <h3>Navigate</h3>
                <ul class="footer-links">
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div>
                <h3>Collection</h3>
                <ul class="footer-links">
                    <li>New arrivals</li>
                    <li>Featured</li>
                    <li>Catalog</li>
                    <li>Brands</li>
                </ul>
            </div>
            <div>
                <h3>Categories</h3>
                <ul class="footer-links">
                    <li>Tables</li>
                    <li>Lamps</li>
                    <li>Chairs</li>
                    <li>Sofas</li>
                </ul>
            </div>
        </div>
        <div class="contact-info">
            <h2>399 Crowfield Road, Phoenix, Arizona 85012</h2>
            <p>asff@fdsfsdc.com</p>
            <p>+602-926-5809</p>
        </div>
        <p>Copyright © All Rights Reserved 2020</p>
    </footer>

</template>

<style scoped>
.footer {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    padding: 1rem;
    background-color: #acade9;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.footer-links {
    list-style: none;
}

.contact-info {
    margin-block: 1rem;
}
</style>