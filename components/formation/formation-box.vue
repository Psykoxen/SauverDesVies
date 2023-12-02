<template>
  <nuxt-link :to="{ name: 'formations-id', params: { id: title } }">
    <div
      class="box bg-white shadow-md h-64 w-64 flex flex-col items-center justify-end rounded-lg"
    >
      <h2 class="text-red-600 text-5xl font-semibold mb-4">{{ title }}</h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
