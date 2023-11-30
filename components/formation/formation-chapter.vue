<template>
  <div
    :class="{ 'border-red-main-600': showData }"
    class="border-solid border-light-gray-main-200 bg-white border-2 m-2 p-1 rounded-2xl lg:w-1/2 w-3/4"
  >
    <div
      class="text-light-gray-main-600 flex flex-row items-center justify-between gap-5 w-full relative"
    >
      <div
        :class="{ 'border-red-main-600 text-light-gray-main-950': showData }"
        class="-ml-6 absolute border-solid border-light-gray-main-200 bg-white rounded-full border-2 w-10 h-10 flex items-center justify-center"
      >
        <p class="rounded-full">{{ number }}</p>
      </div>

      <p
        :class="{ 'text-light-gray-main-950': showData }"
        class="w-full text-left pt-3 pb-3 ml-8 text-light-gray-main-900 font-semibold text-lg"
      >
        {{ title }}
      </p>

      <div
        @click="toggleData"
        class="border-solid border-light-gray-main-200 bg-white absolute rounded-full border-2 w-10 h-10 flex items-center justify-center hover:cursor-pointer right-0 mr-4"
      >
        <p>+</p>
      </div>
    </div>
    <div v-if="showData" class="overflow-hidden ml-8 mr-16 mb-8">
      <p class="text-light-gray-main-800">DESCRIPTION</p>
      <p class="text-black text-justify text-sm">
        {{ resume }}
      </p>
      <div class="border-t border-light-gray-main-800 my-4"></div>
      <div class="flex flex-col items-center gap-2 w-full">
        <FormationSection
          v-for="section in sections"
          :title="section.title"
          :type="section.type"
          :key="section.title"
          :formation="formation"
          :section="section.id"
        />
      </div>
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
    resume: {
      type: String,
      required: true,
    },
    sections: {
      type: Array,
      required: true,
    },
    formation: {
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
