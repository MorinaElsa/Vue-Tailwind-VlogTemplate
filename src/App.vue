<script setup>
  import HomeVue from './components/Home.vue';
  import NavBar from './components/NavBar.vue';

  import { ref } from 'vue';

  const isMenuOpen = ref(false);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
</script>

<template>
  <NavBar :isMenuOpen="isMenuOpen" :toggleMenu="toggleMenu" />
  <HomeVue />
</template>
