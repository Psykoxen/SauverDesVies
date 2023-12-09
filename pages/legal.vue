<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="lg:text-7xl text-4xl text-white font-semibold m-10 mt-16 mb-20">
      Legal
    </h1>
    <div class="bg-white rounded-lg shadow-lg text-black p-6 w-3/4 m-10">
      <h2 class="text-4xl font-semibold mb-4">
        Le Ratio d'Intervenant Secouriste (RIS)
      </h2>
      <div class="flex flex-row">
        <div class="w-2/3">
          <section class="flex flex-col gap-4 w-full">
            <section>
              <p class="text-xl font-semibold mb-1 underline">
                Comportement Prévisible du Public
              </p>
              <div
                v-for="(optionActivity, index) in optionsActivity"
                :key="index"
              >
                <input
                  type="radio"
                  :id="'optionActivity' + index"
                  :value="optionActivity.value"
                  v-model="selectedActivity"
                  name="optionsActivity"
                  class="accent-red-main-600 mr-5 bg-transparent"
                  @change="valueChange()"
                />
                <label :for="'optionActivity' + index">
                  <span class="font-semibold">{{ optionActivity.title }}</span>
                  : {{ optionActivity.label }}</label
                >
              </div>
            </section>

            <section>
              <p class="text-xl font-semibold mb-1 underline">
                Accessibilité du site
              </p>
              <div v-for="(option, index) in optionsAccess" :key="index">
                <div v-for="(label, index2) in option.labels" :key="index2">
                  <input
                    type="checkbox"
                    :id="`optionCheckbox${index}${index2}`"
                    :value="label"
                    v-model="option.checkedLabels"
                    @change="accessChange()"
                    class="accent-red-main-600 mr-5"
                  />
                  <label :for="`optionCheckbox${index}${index2}`">
                    <span>{{ label }}</span>
                  </label>
                </div>
              </div>
            </section>

            <section>
              <p class="text-xl font-semibold mb-1 underline">
                Délai d'intervention des secours
              </p>
              <div
                v-for="(optionSecours, index) in optionsSecours"
                :key="index"
              >
                <input
                  type="radio"
                  :id="'optionSecours' + index"
                  :value="optionSecours.value"
                  v-model="selectedSecours"
                  name="optionsSecours"
                  class="accent-red-main-600 mr-5"
                  @change="valueChange()"
                />
                <label :for="'optionSecours' + index">
                  <span>{{ optionSecours.label }}</span>
                </label>
              </div>
            </section>
          </section>
        </div>

        <div
          class="flex flex-col items-center justify-center w-1/3 h-full mx-auto my-auto gap-6"
        >
          <!-- <label for="chiffreInput">Entrez un chiffre :</label> -->
          <section class="w-full flex flex-col items-center justify-center">
            <p class="text-xl font-semibold mb-4 ml-7 w-full underline">
              Public présent sur le site
            </p>
            <div
              class="bg-white rounded-lg shadow-lg text-black p-4 mb-4 border-solid border-2 border-light-gray-main-100 flex w-3/4"
            >
              <input
                type="number"
                id="public"
                name="public"
                v-model="public"
                @change="valueChange()"
                class="bg-transparent w-fit-content"
              />

              <span id="suffix"> personnes</span>
            </div>
          </section>
          <section class="w-full flex flex-col items-center justify-center">
            <p class="text-xl font-semibold mb-4 ml-7 w-full underline">
              Dimensionement
            </p>
            <p class="text-xl text-black w-full pl-7">
              RIS : <span class="font-semibold">{{ this.ris }}</span>
            </p>
            <p class="text-xl text-black pl-7 pb-8 w-full">
              Secouristes :
              <span class="font-semibold">{{ this.secouristes }}</span>
            </p>
            <div
              v-for="(dimensionement, index) in dimensionement"
              :key="index"
              class="w-full pl-7"
            >
              <p class="text-xl text-black w-full">
                <span class="font-semibold">{{ dimensionement.value }}</span>
                {{ dimensionement.label }}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionsActivity: [
        {
          title: "Public assis",
          label: "spectacle, cérémonie, réunion, restauration, sport...",
          value: 0.25,
        },
        {
          title: "Public debout",
          label: "cérémonie, réunion, restauration, foire, salon...",
          value: 0.3,
        },
        {
          title: "Public debout",
          label:
            "spectacle, fête foraine, événement sportif avec séparation du public et des sportifs...",
          value: 0.35,
        },
        {
          title: "Public debout",
          label:
            "spectacle avec public dynamique, danse, féria, carnaval, spectacle de rue, parade, événement sportif sans protection du public... ou événement se déroulant sur plusieurs jours avec présence permanente du public et hébergement sur le site ou à proximité",
          value: 0.4,
        },
      ],
      selectedActivity: 0.25,
      optionsSecours: [
        {
          label: "Inférieur à 10 minutes",
          value: 0.25,
        },
        {
          label: "De 10 à 20 minutes",
          value: 0.3,
        },
        {
          label: "De 20 à 30 minutes",
          value: 0.35,
        },
        {
          label: "Supérieur à 30 minutes",
          value: 0.4,
        },
      ],
      selectedSecours: 0.25,
      optionsAccess: [
        {
          section: "Faible",
          value: 0.25,
          labels: [
            "Structures permanentes : bâtiment, salle en dur, ...",
            "Voies publiques, rues, ... avec accès dégagés",
            "Conditions d'accès aisés",
          ],
          checkedLabels: [],
        },
        {
          section: "Modéré",
          value: 0.3,
          labels: [
            "Structures non permanentes : gradins, chapiteaux, ...",
            "Espaces naturels : surface 2 hectares",
            "Brancardage : 150 m < longueur 300 m",
            "Terrain en pente sur plus de 100 mètres",
          ],
          checkedLabels: [],
        },
        {
          section: "Moyen",
          value: 0.35,
          labels: [
            "Espaces naturels : 2 ha < surface 5 ha",
            "Brancardage : 300 m < longueur 600 m",
            "Terrain en pente sur plus de 150 mètres",
            "Autres conditions d'accès difficiles",
          ],
          checkedLabels: [],
        },
        {
          section: "Difficile",
          value: 0.4,
          labels: [
            "Espaces naturels : surface > 5 hectares",
            "Brancardage : longueur > 600 mètres",
            "Terrain en pente sur plus de 300 mètres",
            "Autres conditions d'accès difficiles : Talus, escaliers, voies d'accès non carrossables, ...",
            "Progression des secours rendue difficile par la présence du public",
          ],
          checkedLabels: [],
        },
      ],
      dimensionement: {
        paps: {
          label: "PAPS",
          value: 0,
        },
        poste: {
          label: "Equipe.s de Poste",
          value: 0,
        },
        binome: {
          label: "Binôme.s",
          value: 0,
        },
        intervention: {
          label: "Equipe.s d'Intervention",
          value: 0,
        },
      },
      selectedAccess: 0.25,

      ris: 0,
      public: 0,
      secouristes: 0,
      i: null,
    };
  },

  methods: {
    accessChange() {
      const checkedOptions = this.optionsAccess.filter(
        (option) => option.checkedLabels.length > 0
      );

      if (checkedOptions.length > 0) {
        // Sort by difficulty in descending order and get the first one
        const selectedOption = checkedOptions.sort(
          (a, b) => b.value - a.value
        )[0];
        this.selectedAccess = selectedOption.value;
      } else {
        this.selectedAccess = null;
      }
      this.valueChange();
    },
    valueChange() {
      this.i =
        this.selectedActivity + this.selectedSecours + this.selectedAccess;
      if (this.public > 100000) {
        this.public = 100000 + (this.public - 100000) / 2;
      }

      this.ris = this.i * (this.public / 1000);

      this.secouristes = Math.ceil(this.ris);
      if (this.secouristes % 2 !== 0) {
        this.secouristes += 1;
      }
      this.calculateDPS();
    },

    calculateDPS() {
      this.dimensionement.paps.value = 0;
      this.dimensionement.poste.value = 0;
      this.dimensionement.binome.value = 0;
      this.dimensionement.intervention.value = 0;

      if (this.secouristes == 2) {
        this.dimensionement.paps.value = 1;
      } else {
        var i = this.secouristes;

        while (i > 0) {
          if (i >= 4) {
            this.dimensionement.poste.value++;
            i -= 4;
          } else if (
            i >= 2 &&
            this.dimensionement.poste.value <
              this.dimensionement.intervention.value
          ) {
            this.dimensionement.binome.value++;
            i -= 2;
          } else if (
            i >= 4 &&
            this.dimensionement.poste.value >=
              this.dimensionement.intervention.value
          ) {
            this.dimensionement.intervention.value++;
            i -= 4;
          } else if (i >= 2) {
            this.dimensionement.binome.value++;
            i -= 2;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="radio"]#Yellow {
  accent-color: red;
}
</style>
