<template>
   <div
      id="influencers"
      class="w-full bg-influencer-background py-12 font-poppins"
    >
      <div class="max-w-screen-2xl mx-auto">
        <div class="text-center mb-12 mx-auto lg:max-w-5xl sm:max-w-md">
          <span class="text-sm text-gray-400 font-medium uppercase">influencers</span>
          <h2 class="text-3xl text-gray-500 mb-10">Our Influencers </h2>
          <p class="text-sm max-w-screen-sm mx-auto text-gray-500 mb-10 leading-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in. The copy warned the Little Blind Text, that where it came
            from it would have been rewritten a thousand times and everything
            that was left from its origin.
          </p>
        </div>
        <div class="m-4 grid gap-4 text-gray-500 text-sm lg:grid-cols-2 2xl:grid-cols-4">
        <div
          v-for="influencer in dataInfluencers"
          class="min-h-[250px]"
          :key="influencer.id"
        >
          <div class="flex justify-center items-center mb-8">
            <img
              class="rounded-full w-1/3 h-1/3 lg:w-1/2 lg:h-1/2"
              :src="influencer.img"
              alt=" Influencers"
            />
          </div>
          <div
            class="px-6 sm:px-12 text-center text-xs leading-5 sm:max-w-sm max-w-xs mx-auto"
          >
            <p class="mb-6">{{ influencer.quote }}</p>
            <p class="text-lg text-gray-900">{{ influencer.fullname }}</p>
            <span>{{ influencer.place }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataInfluencers from "../assets/data/influencersData";

export default {
  name: "EditorsPickPage",
  components: {},
  data() {
    return {
      dataInfluencers: dataInfluencers,
    };
  },
};
</script>
