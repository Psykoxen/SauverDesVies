<template>
  <a
    :href="url"
    class="border-solid border-light-gray-main-200 bg-white rounded-lg border-2 flex flex-row gap-3 items-center pl-2 w-full"
  >
    <Icon name="akar-icons:receipt" color="#979797" class="h-full" />
    <p class="text-light-gray-main-800">{{ title }}</p>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
