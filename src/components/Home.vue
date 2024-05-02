<template>
    <div>
      <div class="w-full">
        <div class="max-w-screen-lg mx-auto px-4 my-10 text-gray-600">
          <div>
            <img :src="imgCook" alt="Main Post" />
          </div>
          <div class="p-14 text-sm h-auto bg-background-gray">
            <span class="uppercase tracking-wider my-8">Editor's pick</span>
            <h2 class="font-medium text-2xl mb-12">
              <a href="https://preview.colorlib.com/theme/meranda/blog-single.html">
                News Needs to Meet Its Audiences Where They Are
              </a>
            </h2>
            <p class="mb-10 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?
            </p>
            <div class="flex flex-col space-y-2">
              <span>
                <a href="#"> Dave Rogers</a>
                in
                <a href="#"> Food</a>
              </span>
              <span class="text-gray-400">
                June 14
                <span> • </span>3 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import imgCook from '../assets/img/cook.png';

export default {
  name: 'HomePage',
  components: {},
  data() {
    return {
      imgCook: imgCook
    };
  },
};
</script>


  