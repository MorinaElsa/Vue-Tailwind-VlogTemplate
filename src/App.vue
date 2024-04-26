<script setup>

import { ref } from 'vue';
  import HomeVue from './components/Home.vue';
  import NavBar from './components/NavBar.vue';
import SubscribeVue from './components/Subscribe.vue';
import HealthVue from './components/Health.vue';
import EditorsPickVue from './components/EditorsPick.vue';

</script>

<template>
  <NavBar />
  <HomeVue />
  <EditorsPickVue />
  <HealthVue />
  <SubscribeVue />
  
</template>
