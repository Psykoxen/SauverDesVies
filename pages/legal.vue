<template>
  <div class="flex flex-col items-center justify-center">
    <h1
      class="lg:text-7xl text-4xl text-white font-semibold m-10 mt-5 mb-20 text-center"
    >
      Legal
    </h1>
    <div class="w-3/4 flex flex-col gap-4">
      <div class="w-full lg:flex-col flex gap-4">
        <div class="bg-white rounded-lg shadow-lg text-black p-6">
          <h2 class="text-4xl font-semibold mb-2">Conditions d'accès</h2>

          <!-- Dynamically generate checkboxes for each condition -->
          <template v-for="(condition, index) in conditions" :key="index">
            <UCheckbox
              :color="checkboxColors[index % checkboxColors.length]"
              :label="condition"
              :model-value="checkboxStates[index]"
              @update:model-value="onCheckboxChange(index)"
            >
            </UCheckbox>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxStates: Array(14).fill(false), // Initialize an array of 14 false values
      conditions: [
        'Structures permanentes : Bâtiments, salles "en dur"',
        "Voies publiques, rues,... avec accès dégagés",
        "Conditions d'accès aisés",
        "Structures non permanentes : gradins, tribunes, chapiteaux",
        "Espaces naturels : surface inférieure à 2 hectares",
        "Brancardage : longueur comprise entre 150 et 300 m",
        "Terrain en pente sur plus de 100 mètres",
        "Espaces naturels : surface comprise entre 2 et 5 hectares",
        "Brancardage : longueur comprise entre 300 et 600 m",
        "Terrain en pente sur plus de 150 mètres",
        "Autres conditions d'accès difficiles",
        "Espaces naturels : surface supérieure à 5 hectares",
        "Brancardage : longueur supérieure à 600 m",
        "Terrain en pente sur plus de 300 mètres",
        "Autres conditions d'accès difficiles : Talus, escaliers, voies d'accès non carrossables, ...",
        "Progression des secours rendue difficile par la présence du public",
      ],
      checkboxColors: ["primary", "success", "info", "warning", "danger"], // You can add more colors
    };
  },
  methods: {
    onCheckboxChange(index) {
      const value = this.checkboxStates[index];
      console.log(`Checkbox (${index}) state changed:`, value);
      // Add any additional logic you want to perform on state change
    },
  },
};
</script>
