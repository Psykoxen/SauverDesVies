<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const { data: formation } = await useFetch(`/api/${route.params.formation}`, {
  // You can add query options here
  transform: (_formation) => _formation.data,
});

const section = formation._value?.chapters[
  parseInt(route.params.id.substring(0, 2).valueOf(), 10) - 1
]?.sections.find((section) => section.id === route.params.id);
</script>

<template>
  <section>
    <div class="flex flex-col items-center justify-center">
      <p
        class="m-6 mb-4 lg:text-4xl text-xl font-semibold"
        v-if="section.id.substring(2, 4) == 'FT'"
      >
        Fiche Technique
      </p>
      <p
        class="m-6 mb-4 lg:text-4xl text-xl font-semibold"
        v-if="section.id.substring(2, 4) == 'AC'"
      >
        Apport de Connaissances
      </p>
      <p
        class="m-6 mb-4 lg:text-4xl text-xl font-semibold"
        v-if="section.id.substring(2, 4) == 'PR'"
      >
        Procédure
      </p>

      <h1
        v-if="section.title"
        class="lg:text-7xl text-4xl text-white font-semibold m-10 mt-5 mb-20 text-center"
      >
        {{ section.title }}
      </h1>

      <div class="w-3/4 flex flex-col" v-for="row in section.content">
        <div class="w-full lg:hidden flex-col flex gap-4">
          <div
            v-for="data in row"
            class="bg-white rounded-lg shadow-lg text-black p-6"
          >
            <h2 class="text-4xl font-semibold mb-2">
              <span class="text-6xl"
                >{{ data.id < 10 ? "0" + data.id : data.id }}.</span
              >
              {{ data.title }}
            </h2>
            <p v-html="data.content" class="text-justify"></p>
          </div>
        </div>
        <div class="w-full flex-row flex gap-4">
          <div class="w-1/2 lg:flex flex-col hidden justify-center">
            <div v-for="data in row">
              <div
                v-if="
                  data.id % 2 !== 0 &&
                  data.type != 'array' &&
                  data.type != 'fulltext'
                "
                class="bg-white rounded-lg shadow-lg text-black p-6 mb-2 mt-2"
              >
                <h2 class="text-4xl font-semibold mb-2">
                  <span class="text-6xl"
                    >{{ data.id < 10 ? "0" + data.id : data.id }}.</span
                  >
                  {{ data.title }}
                </h2>
                <p v-html="data.content" class="text-justify"></p>
              </div>
            </div>
          </div>
          <div class="w-1/2 lg:flex flex-col hidden justify-center">
            <div v-for="data in row">
              <div
                v-if="
                  data.id % 2 === 0 &&
                  data.type != 'array' &&
                  data.type != 'fulltext'
                "
                class="bg-white rounded-lg shadow-lg text-black p-6 mb-2 mt-2"
              >
                <h2 class="text-4xl font-semibold mb-2">
                  <span class="text-6xl"
                    >{{ data.id < 10 ? "0" + data.id : data.id }}.</span
                  >
                  {{ data.title }}
                </h2>
                <p v-html="data.content" class="text-justify"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex-col lg:flex hidden">
          <div v-for="data in row" class="">
            <div
              v-if="data.type == 'fulltext'"
              class="bg-white rounded-lg shadow-lg text-black p-6 w-full mt-2 mb-2"
            >
              <h2 class="text-4xl font-semibold mb-2">
                <span class="text-6xl"
                  >{{ data.id < 10 ? "0" + data.id : data.id }}.</span
                >
                {{ data.title }}
              </h2>
              <p v-html="data.content" class="text-justify"></p>
            </div>
          </div>
        </div>
        <div class="w-full flex-col lg:flex hidden">
          <div v-for="data in section.content">
            <div
              v-if="data.type == 'array'"
              class="bg-white rounded-lg shadow-lg text-black p-6 mb-2 mt-2"
            >
              <h2 class="text-4xl font-semibold mb-2">
                <span class="text-6xl"
                  >{{ data.id < 10 ? "0" + data.id : data.id }}.</span
                >
                {{ data.title }}
              </h2>
              <table class="w-full">
                <tr v-for="ligne in data.content">
                  <template v-if="ligne.length === 3">
                    <td
                      v-for="cellule in ligne"
                      :key="cellule"
                      class="border border-black p-2"
                      v-html="cellule"
                    ></td>
                  </template>
                  <template v-else>
                    <td
                      v-html="ligne[0]"
                      class="w-1/4 border border-black p-2"
                    ></td>
                    <td
                      v-html="ligne[1]"
                      class="border border-black p-2"
                      colspan="2"
                    ></td>
                  </template>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
