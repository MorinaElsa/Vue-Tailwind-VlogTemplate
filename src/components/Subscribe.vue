<template>
  <div id="subscribe" class="w-full bg-background-gray">
    <div class="p-10 lg:p-20 max-w-screen-2xl m-auto flex flex-col lg:flex-row items-start lg:items-center">
      <div class="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
        <div class="content mb-6">
          <h2 class="text-lg lg:text-2xl text-gray-900 mb-2">
            Newsletter Subscribe
          </h2>
          <p class="text-sm lg:text-base text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis aspernatur ut at quae omnis pariatur obcaecati
            possimus nisi ea iste!
          </p>
        </div>
      </div>

      <form class="lg:w-1/2 w-full flex flex-row">
        <div class="relative">
          <input
            class="bg-background-gray border border-gray-950 rounded-3xl text-gray-900 text-xs lg:text-base p-2.5 flex-grow sm:w-96 focus:outline-none"
            type="email"
            v-model="email"
            @input="handleInputChange"
            @focus="handleInputFocus"
            @blur="handleInputBlur"
          />
          <label
            class="absolute left-0 mt-7 mx-6 px-2 transition duration-200 input-text"
            :class="{ 'text-sm -top-5 text-gray-800': isFocused || email !== '' }"
          >
            Username or Email
          </label>
        </div>
        <button type="submit" class="mt-4 lg:mt-0 ml-2">
          <span class="bg-button-color hover:bg-button-color text-white text-xl lg:text-2xl text-center font-extrabold py-2 px-3 rounded-full">
            ⮚
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const email = ref('');
    const isFocused = ref(false);

    const handleInputChange = (e) => {
      email.value = e.target.value;
    };

    const handleInputFocus = () => {
      isFocused.value = true;
    };

    const handleInputBlur = () => {
      isFocused.value = false;
    };
    return {
      email,
      isFocused,
      handleInputChange,
      handleInputFocus,
      handleInputBlur,
    };
  },
};
</script>


  