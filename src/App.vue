<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
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
  display: flex;
  min-height: 100vh;
  overflow: auto;
  max-width: 1280px;
  margin-inline: auto;
}
</style>
