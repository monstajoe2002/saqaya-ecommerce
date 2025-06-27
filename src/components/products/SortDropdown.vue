<script lang="ts">
export default {
    name: 'SortDropdown',
    data() {
        return {
            selectedOption: null,
        };
    },
    methods: {
        sortProducts() {
            this.$store.commit('sortProducts', this.selectedOption)
            console.log(this.selectedOption)
        }
    },
}
</script>
<template>
    <div class="sort-dropdown">
        <label for="sort">
            <span>Sort by</span>
        </label>

        <select v-model="selectedOption" id="sort" @change="sortProducts">
            <option value="price">Price</option>
            <option value="category">Category</option>
        </select>
    </div>
</template>

<style scoped lang="sass">
// this will make sure the dropdown doesn't stretch to full width
.sort-dropdown
    max-width: fit-content
</style>