<script lang="ts">
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'SortDropdown',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            faSort
        }
    }
}
</script>
<template>
    <label for="sort">
        <FontAwesomeIcon :icon="faSort" /> Sort by
    </label>

    <select id="cars">
        <option value="price">Price</option>
        <option value="category">Category</option>
    </select>
</template>