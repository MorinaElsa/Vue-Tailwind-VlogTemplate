<script setup>
import { ref } from 'vue'


</script>

<template>
  <nav class="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div class="flex justify-between items-center h-16 px-4 max-w-[1240px] mx-auto">
        <h2 class="text-3xl font-cabin hover:text-hover-green">
          Meranda
        </h2>
        <div class="sm:hidden">
          <button
            onClick={toggleMenu}
            class="text-xl text-gray-800 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
        <ul
        :class="['sm:flex', isMenuOpen ? 'block' : 'hidden', 'font-mono', 'sm:mt-0', 'mt-4', 'absolute', 'sm:relative', 'top-full', 'left-0', 'sm:top-0', 'sm:left-auto', 'sm:flex', 'flex-col', 'sm:flex-row', 'bg-white', 'sm:bg-transparent', 'w-full', 'sm:w-auto', 'justify-center', 'items-center']"
        >
          <li class="p-4 hover:text-hover-green"> HOME </li>
          <li class="p-4 hover:text-hover-green">INFLUENCERS</li>
          <li class="p-4 hover:text-hover-green">TRENDING</li>
          <li class="p-4 hover:text-hover-green">CONTACT</li>
        </ul>
      </div>
    </nav>
</template>

<style scoped>

</style>
