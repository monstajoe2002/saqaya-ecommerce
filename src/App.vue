<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <main class="container">
    <RouterView />
  </main>
  <Footer />
</template>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.container {
  min-height: 100vh;
  overflow: auto;
}
</style>
