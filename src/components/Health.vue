<template>
    <div id="health" class="max-w-[1400px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-4 mt-10 mb-20">
      <div class="grid grid-cols-2 grid-rows-6 lg:h-[50vh] md:h-[50vh] ">
        <img
        v-for="imagesHealth in dataHealth"
        :key="imagesHealth.id"
        :class="['object-cover', 'w-full', 'h-full', 'p-2', imagesHealth.className]"
        :src='imagesHealth.imgSrc'
          alt="food1"
        />
       
      </div>
      <div class="flex flex-col h-full justify-center">
        <h3 class="text-2xl md:text-2xl text-gray-400 font-semi-bold">
    
          Healthy lifestyle
        </h3>
        <p class="text-md py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam
          natus sint expedita, possimus dolores repellat totam culpa,
          exercitationem minus, perspiciatis doloremque debitis amet facilis
          corporis deserunt doloribus aperiam tempora?
        </p>
        <p class="pb-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam
          natus sint expedita, possimus dolores repellat totam culpa,
          exercitationem minus, perspiciatis doloremque debitis amet facilis
          corporis deserunt doloribus aperiam tempora?
        </p>
        <div>
          <button class="md:text-sm border-black border mr-4 hover:shadow-xl rounded-2xl p-1.5">
            Learn More
          </button>
          <button class="md:text-sm bg-slate-700 border text-white border-black hover:shadow-6xl rounded-2xl p-1.5">
            Book Consult
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import imgCook from '../assets/img/cook.png';
import imgVlog1 from '../assets/img/vlog1.png'
import imgVlog2 from '../assets/img/vlog2.jpg'
import imgVlog3 from '../assets/img/vlog3.jpg'
import imgInfluencer from '../assets/img/influencer.png'
import dataHealth from '../assets/data/healthData'


export default {
  name: 'Healthpage',
  components: {},
  data() {
    return {
      dataHealth
    };
  },
};
</script>


  