<template>
  <nav class="fixed top-0 z-50 w-full bg-white shadow-lg">
    <div
      class="flex justify-between items-center h-16 px-4 max-w-[1240px] mx-auto"
    >
      <h2 class="text-3xl font-cabin hover:text-hover-green">Meranda</h2>
      <div class="sm:hidden">
        <button
          @click="toggleMenu"
          class="text-xl text-gray-800 focus:outline-none"
        >
          <template v-if="isMenuOpen">
            <div>X</div>
          </template>
          <template v-else>
            <div>☰</div>
          </template>
        </button>
      </div>
      <ul
        :class="`uppercase sm:flex ${
          isMenuOpen ? 'block' : 'hidden'
        } font-mono sm:mt-0 mt-4 absolute sm:relative top-full left-0 sm:top-0 sm:left-auto sm:flex flex-col sm:flex-row bg-white sm:bg-transparent w-full sm:w-auto justify-center items-center`"
      >
        <li
          v-for="link in dataNavBar"
          :key="link.id"
          class="p-4 hover:text-hover-green"
          @click="closeMenu"
        >
          <a :href="link.sectionId"> {{ link.name }} </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import dataNavBar from "../assets/data/navBarData";

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
      dataNavBar,
    };
  },
};
</script>
