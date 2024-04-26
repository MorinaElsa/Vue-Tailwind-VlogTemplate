<template>
    <div class="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div class="grid grid-cols-2 grid-rows-6 lg:h-[50vh] md:h-[50vh] ">
        <img
          class="row-span-3 object-cover w-full h-full p-2"
          :src='imgCook'
          alt="food1"
        />
        <img
          class="row-span-2 object-cover w-full h-full p-2"
          :src='imgVlog1'
          alt="food1"
        />
        <img
          class="row-span-2 object-cover w-full h-full p-2"
          :src='imgVlog2'
          alt="food1"
        />
        <img
          class="row-span-3 object-cover w-full h-full p-2"
          :src='imgVlog3'
          alt="food1"
        />
        <img
          class="row-span-2 object-cover w-full h-full p-2"
          :src='imgInfluencer'
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


export default {
  name: 'Healthage',
  components: {},
  data() {
    return {
      imgCook: imgCook,
      imgVlog1: imgVlog1,
      imgVlog2: imgVlog2,
      imgVlog3:imgVlog3,
      imgInfluencer:imgInfluencer,
    };
  },
};
</script>


  