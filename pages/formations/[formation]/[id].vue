<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const { data: formation } = await useFetch(`/api/${route.params.formation}`, {
  // You can add query options here
  transform: (_formation) => _formation.data,
});

console.log(formation);
console.log(formation._value);

const section = formation._value?.chapters[
  parseInt(route.params.id.substring(0, 2).valueOf(), 10) - 1
]?.sections.find((section) => section.id === route.params.id);

console.log(section);
</script>

<template>
  <section>
    <svg
      width="960"
      height="330"
      viewBox="0 0 960 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      class="w-full h-full absolute top-0 left-0 -z-10"
    >
      <path d="M0 330L960 330V0L0 0V330Z" fill="url(#paint0_linear_194_6)" />
      <path
        d="M960 61L920 80.3C880 99.7 800 138.3 720 158.7C640 179 560 181 480 160.8C400 140.7 320 98.3 240 86C160 73.7 80 91.3 40 100.2L0 109V330H40C80 330 160 330 240 330C320 330 400 330 480 330C560 330 640 330 720 330C800 330 880 330 920 330H960V61Z"
        fill="#f9faff"
      />
      <defs>
        <linearGradient
          id="paint0_linear_194_6"
          x1="960"
          y1="102.972"
          x2="0.00698769"
          y2="106.245"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FE4A2B" />
          <stop offset="1" stop-color="#F2282A" />
        </linearGradient>
      </defs>
    </svg>
    <div class="flex flex-col items-center justify-center">
      <h1
        v-if="section.title"
        class="lg:text-7xl text-4xl text-white font-semibold m-10 mt-16 mb-20"
      >
        {{ section.title }}
      </h1>
      <div class="w-3/4 flex flex-col gap-4">
        <div class="w-full lg:hidden flex-col flex gap-4">
          <div
            v-for="data in section.content"
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
            <div v-for="data in section.content">
              <div
                v-if="data.id % 2 !== 0 && data.type != 'array'"
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
            <div v-for="data in section.content">
              <div
                v-if="data.id % 2 === 0 && data.type != 'array'"
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
