<script setup>
import { ref } from "vue";
import HomeVue from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
import SubscribeVue from "./components/Subscribe.vue";
import HealthVue from "./components/Health.vue";
import EditorsPickVue from "./components/EditorsPick.vue";
import InfluencersVue from "./components/Influencers.vue";
</script>

<template>
  <NavBar />
  <HomeVue />
  <EditorsPickVue />
  <InfluencersVue />
  <HealthVue />
  <SubscribeVue />
</template>
