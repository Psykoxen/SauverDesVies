<template>
  <h1 class="text-red-main-600 text-5xl lg:m-5 text-center font-semibold">
    Formation {{ $route.params.id }}
  </h1>
  <div class="w-full flex flex-col items-center">
    <FormationChapter title="Attitude et Comportement" number="1" />
    <FormationChapter title="Bilans" number="2" />
    <FormationChapter title="Protection et Sécurité" number="3" />
    <FormationChapter title="Hygiène et Asepsie" number="4" />
    <FormationChapter title="Urgences Vitales" number="5" />
    <FormationChapter title="Malaises et Affectations Spécifiques" number="6" />
    <FormationChapter title="Atteintes Circonstancielles" number="7" />
    <FormationChapter title="Traumatismes" number="8" />
    <FormationChapter
      title="Souffrance Psychique et Comportements Inhabituels"
      number="9"
    />
    <FormationChapter title="Relevage et Brancardage" number="10" />
    <FormationChapter title="Situations Particulières" number="11" />
    <FormationChapter title="Divers" number="12" />
  </div>
</template>
