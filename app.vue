<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const appConfig = useAppConfig();
useSeoMeta({
  title: "Secourisme",
  ogTitle: "Secourisme",
  // description: "This is my amazing site, let me tell you all about it.",
  // ogDescription: "This is my amazing site, let me tell you all about it.",
  // ogImage: "https://example.com/image.png",
  // twitterCard: "summary_large_image",
});
</script>

<style>
* {
  scroll-behavior: smooth;
}

*::-webkit-scrollbar {
  display: none;
}
</style>
