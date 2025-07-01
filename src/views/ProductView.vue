<script lang="ts">
export default {
    name: 'ProductView',

}
</script>

<template>
    <div>
        <p>Product ID: {{ $route.params.id }}</p>
    </div>
</template>