<template>
  <nuxt-link
    :to="'/formations/' + formation + '/' + section"
    class="border-solid border-light-gray-main-200 bg-white rounded-lg border-2 flex flex-row gap-3 items-center pl-2 w-full"
  >
    <Icon
      v-if="type === 'AC'"
      name="akar-icons:book-open"
      color="#979797"
      class="h-full"
    />
    <Icon
      v-if="type === 'PR'"
      name="akar-icons:clipboard"
      color="#979797"
      class="h-full"
    />
    <Icon
      v-if="type === 'FT'"
      name="akar-icons:receipt"
      color="#979797"
      class="h-full"
    />
    <p class="text-light-gray-main-800">{{ title }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    formation: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
};
</script>
