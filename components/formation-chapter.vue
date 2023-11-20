<template>
  <div
    :class="{ 'border-red-main-600': showData }"
    class="border-solid border-light-gray-main-200 bg-white border-2 m-2 p-1 rounded-2xl lg:w-1/2 w-3/4 transition-all duration-300"
  >
    <div
      class="text-light-gray-main-600 flex flex-row items-center justify-between gap-5 w-full transition-all duration-300"
    >
      <div
        :class="{ 'border-red-main-600': showData }"
        class="-ml-5 border-solid border-light-gray-main-200 bg-white rounded-full border-2 w-10 h-10 flex items-center justify-center transition-all duration-300"
      >
        <p class="rounded-full">{{ number }}</p>
      </div>

      <p class="w-full text-left pt-3 pb-3 text-light-gray-main-950">
        {{ title }}
      </p>

      <div
        @click="toggleData"
        class="border-solid border-light-gray-main-200 bg-white rounded-full border-2 w-10 h-10 flex items-center justify-center hover:cursor-pointer mr-4 transition-all duration-300"
      >
        <p>+</p>
      </div>
    </div>
    <div v-if="showData" class="overflow-hidden transition-height duration-300">
      <p>
        Data ipsum dolor sit amet, consectetur adipiscing elitData ipsum dolor
        sit amet, consectetur adipiscing elitData ipsum dolor sit amet,
        consectetur adipiscing elitData ipsum dolor sit amet, consectetur
        adipiscing elitData ipsum dolor sit amet, consectetur adipiscing
        elitData ipsum dolor sit amet, consectetur adipiscing elit. ...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showData: false,
    };
  },
  methods: {
    toggleData() {
      this.showData = !this.showData;
    },
  },
};
</script>
