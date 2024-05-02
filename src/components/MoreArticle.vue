<template>
  <div
  id="posts"
    class="max-w-screen-xl mx-auto lg:flex lg:flex-row sm:flex-col mt-20 mb-10"
  >
    <div class="lg:w-1/2 flex flex-col space-y-4 text-gray-800 py-3 px-3">
      <h1 class="text-md underline underline-offset-8 mb-8">Recent News</h1>

      <div
        v-for="post in dataAll"
        class="bg-posts-background leading-relaxed flex flex-row mb-6"
        :key="post.id"
      >
        <div class="w-full text-sm font-semibold p-3">
          <h2 class="mb-6">
            {{ post.title }}
          </h2>
          <p class="text-sm font-light mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet ad
            iusto sint eum molestiae nemo inventore, repellendus voluptas
            excepturi.
          </p>
          <div class="flex flex-col space-y-1 text-xs">
            <span>{{ post.name }} in Food</span>
            <span class="text-gray-400">
              {{ post.date }} <span>{{ post.icon }}</span>
              {{ post.readMinutes }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:w-1/2 flex flex-col space-y-4 text-gray-800 py-3 px-3">
      <div>
        <h1 class="text-md underline underline-offset-8 mb-8">Popular Posts</h1>
      </div>
      <div
        class="sm:flex sm:felx-row space-x-10"
        v-for="trending in dataAll"
        :key="trending.id"
      >
        <div class="sm:w-1/3">
          <img
            :src="trending.image"
            alt="Thumbnail"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="lg:w-1/2 flex flex-row mb-6 mt-4 lg:mt-0" key="trending.id">
          <div class="text-gray-300 text-3xl">{{ trending.letter }}</div>
          <div class="text-sm pb-3 px-3">
            <h2 class="mb-6 text-lg lg:text-sm font-semibold">
              {{ trending.title }}
            </h2>
            <div class="flex flex-col space-y-1 text-xs">
              <span>{{trending.name}} in Food</span>
              <span class="text-gray-400">
                {{ trending.date }} <span>{{ trending.icon }}</span>
                {{ trending.readMinutes }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataAll from "../assets/data/editorsPickData";

export default {
  name: "MoreArticlePage",
  components: {},
  data() {
    return {
      dataAll: dataAll,
    };
  },
};
</script>
