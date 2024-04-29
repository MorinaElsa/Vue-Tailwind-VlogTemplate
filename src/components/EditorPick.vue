<template>
  <div id="trending" class="site-section mb-20 mt-20">
    <div class="text-center mb-12">
      <span class="text-sm text-gray-400 font-medium uppercase">
        Trending
      </span>
      <h2 class="text-3xl text-gray-500">Follow the Trend</h2>
    </div>
    <div class="max-w-screen-xl mx-auto lg:flex lg:flex-row sm:flex-col">
      <div class="lg:w-1/3 w-full px-10 mb-8 lg:mb-0">
        <img class="w-full rounded-md mb-4" :src="imgVlog1" alt="Vlog post" />
        <h2 class="font-medium text-xl mb-6">
          News Needs to Meet Its Audiences Where They Are
        </h2>
        <p class="mb-8 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          temporibus praesentium neque, voluptatum quam quibusdam.
        </p>
        <div class="flex flex-col space-y-1 text-xs">
          <span>Dave Rogers in Food</span>
          <span class="text-gray-400">
            June 14 <span> • </span>3 min read
          </span>
        </div>
      </div>
      <div class="lg:w-1/3 flex flex-col space-y-4 text-gray-800 py-3 px-3">
        <div
          v-for="item in dataAll"
          class="bg-posts-background leading-relaxed flex flex-row mb-6"
          :key="item.id"
        >
          <div class="w-1/2">
            <img
              :src="item.image"
              alt="Thumbnail"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="w-1/2 text-sm font-semibold p-3">
            <h2 class="mb-6">
              <a :href="item.titleLink">{{ item.title }}</a>
            </h2>
            <div class="flex flex-col space-y-1 text-xs">
              <span>{{ item.name }} in Food</span>
              <span class="text-gray-400">
                {{ item.date }} <span>{{ item.icon }}</span>
                {{ item.readMinutes }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 px-5">
        <div class="font-semibold mb-6">
          <h2>Trending</h2>
        </div>

        <div v-for="item in dataAll" class="flex flex-row mb-6" :key="item.id">
          <div class="text-gray-300 text-3xl">{{ item.id }}</div>
          <div class="text-sm pb-3 px-3">
            <h2 class="mb-6 font-semibold">
              <a :href="item.titleLink">{{ item.title }}</a>
            </h2>
            <div class="flex flex-col space-y-1 text-xs">
              <span>{{ item.name }} in Food</span>
              <span class="text-gray-400">
                {{ item.date }} <span>{{ item.icon }}</span>
                {{ item.readMinutes }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgVlog1 from "../assets/img/vlog1.png";
import dataAll from "../assets/data/editorsPickData";

export default {
  name: "EditorPickPage",
  components: {},
  data() {
    return {
      dataAll: dataAll,
      imgVlog1: imgVlog1,
    };
  },
};
</script>
