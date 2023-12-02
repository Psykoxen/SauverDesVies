<script setup>
const route = useRoute();
console.log(route.params.id);

const { data: formation } = await useFetch(`/api/` + route.params.id, {
  transform: (_formation) => _formation.data,
});
</script>

<template>
  <section>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-7xl text-white font-semibold m-10 mt-16 mb-20">
        {{ formation.title }}
      </h1>
      <FormationChapter
        v-for="chapter in formation.chapters"
        :number="chapter.id"
        :title="chapter.title"
        :resume="chapter.resume ? chapter.resume : ''"
        :sections="chapter.sections ? chapter.sections : []"
        :formation="formation.id"
      />
    </div>
  </section>
</template>
