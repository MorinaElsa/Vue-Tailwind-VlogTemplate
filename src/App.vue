<script setup>
import { ref } from "vue";
import HomeVue from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
import SubscribeVue from "./components/Subscribe.vue";
import HealthVue from "./components/Health.vue";
import InfluencersVue from "./components/Influencers.vue";
import EditorPickVue from "./components/EditorPick.vue";
</script>

<template>
  <NavBar />
  <HomeVue />
  <EditorPickVue />
  <InfluencersVue />
  <HealthVue />
  <SubscribeVue />
</template>
