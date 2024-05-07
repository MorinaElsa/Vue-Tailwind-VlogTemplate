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
          class="min-h-[250px] flex flex-col items-center"
          :key="influencer.id"
        >
          <div class="rounded-full w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]  mb-8" :style="{ backgroundImage: `url(${influencer.img})` , backgroundPosition: 'center', backgroundSize:'cover' }">

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
import influencerImg from "../assets/img/influencer.png"

export default {
  name: "EditorsPickPage",
  components: {},
  data() {
    return {
      dataInfluencers: dataInfluencers,
      influencerImg: influencerImg,
    };
  },
};
</script>
