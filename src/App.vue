<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <main class="container">
    <RouterView />
  </main>
</template>

<style>
*,
*::before,
*::after,
a {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.container {
  min-height: 100vh;
}
</style>
