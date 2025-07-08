<script setup lang="ts">
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
    <FontAwesomeIcon class="navbar__search" :icon="faMagnifyingGlass" />
</template>

<style lang="sass" scoped>
@media screen and (max-width:768px)
.navbar
    &__search 
        display: none

</style>