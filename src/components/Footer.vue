<script setup lang="ts">
import { faTwitterSquare, faInstagramSquare, faPinterestSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <footer class="footer">
        <div class="footer__nav-grid">
            <div class="footer__nav-section">
                <h3 class="footer__heading">Navigate</h3>
                <ul class="footer__list">
                    <li class="footer__list-item">About</li>
                    <li class="footer__list-item">Blog</li>
                    <li class="footer__list-item">Contact Us</li>
                    <li class="footer__list-item">Sitemap</li>
                </ul>
            </div>
            <div class="footer__nav-section">
                <h3 class="footer__heading">Collection</h3>
                <ul class="footer__list">
                    <li class="footer__list-item">New arrivals</li>
                    <li class="footer__list-item">Featured</li>
                    <li class="footer__list-item">Catalog</li>
                    <li class="footer__list-item">Brands</li>
                </ul>
            </div>
            <div class="footer__nav-section">
                <h3 class="footer__heading">Categories</h3>
                <ul class="footer__list">
                    <li class="footer__list-item">Tables</li>
                    <li class="footer__list-item">Lamps</li>
                    <li class="footer__list-item">Chairs</li>
                    <li class="footer__list-item">Sofas</li>
                </ul>
            </div>
        </div>
        <div class="footer__contact">
            <h2 class="footer__address">399 Crowfield Road, Phoenix, Arizona 85012</h2>
            <p class="footer__email">asff@fdsfsdc.com</p>
            <p class="footer__phone">+602-926-5809</p>
        </div>
        <p class="footer__copyright">Copyright © All Rights Reserved 2020</p>
        <div class="footer__social">
            <p class="footer__social-heading">Get social</p>
            <FontAwesomeIcon class="footer__social-icon" :icon="faTwitterSquare" />
            <FontAwesomeIcon class="footer__social-icon" :icon="faInstagramSquare" />
            <FontAwesomeIcon class="footer__social-icon" :icon="faPinterestSquare" />
            <FontAwesomeIcon class="footer__social-icon" :icon="faFacebookSquare" />
        </div>
    </footer>
</template>

<style lang="sass" scoped>
.footer
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: repeat(2, 1fr)
    gap: 1.5rem
    padding: 1.25rem
    background-color: #acade9
    align-items: end

.footer__nav-grid 
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 1rem


.footer__list 
    list-style: none


.footer__list-item 
    margin-bottom: 0.5rem


.footer__contact 
    height: 100%;
    justify-content: end;


.footer__social 
    display: flex
    gap: 0.5rem
    align-items: center


.footer__social-heading 
    font-weight: bold


.footer__social-icon 
    font-size: 1.5rem


@media screen and (max-width: 768px) 
    .footer 
        grid-template-columns: 1fr
    

</style>