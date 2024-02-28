<script setup>
const route = useRoute();
const resultId = ref(null);
const data = ref(null);
const value = ref(null);

onMounted(async () => {
  resultId.value = route.query.id;
  const response = await fetch(
    "http://localhost:3001/controllers/currentresult/" + resultId.value,
  );
  data.value = await response.json();
  data.value = data.value[0];
});
</script>
<template>
  <div
    class="md:flex block max-w m-10 p-5 bg-white border border-gray-400 rounded-md shadow dark:border-gray-700"
  >
    <DetailViewAccordion
      v-if="data"
      headline="First Contentful Paint"
      :bodytext="data.firstContentfulPaintDisplayValue"
      secondHeading="i"
      description="1234"
      :class="[
        data?.firstContentfulPaintNumericValue < 1000
          ? 'bg-green-500'
          : 'bg-red-500',
      ]"
      class="w-1/2 m-2 p-2"
    />
    <DetailViewAccordion
      v-if="data"
      headline="Largest Contentful Paint"
      :bodytext="data.largestContentfulPaintDisplayValue"
      description="i"
      :class="[
        data.largestContentfulPaintNumericValue < 1300
          ? 'bg-green-500'
          : 'bg-red-500',
      ]"
      class="w-1/2 m-2 p-2"
    />
    <DetailViewAccordion
      v-if="data"
      headline="Total Blocking Time"
      :bodytext="data.totalBlockingTimeDisplayValue"
      secondHeading="i"
      description="test"
      :class="[
        data.firstContentfulPaintNumericValue < 1000
          ? 'bg-green-500'
          : 'bg-red-500',
      ]"
      class="w-1/2 m-2 p-2"
    />
    <DetailViewAccordion
      v-if="data"
      headline="Speed Index"
      :bodytext="data.speedIndexDisplayValue"
      description="i"
      :class="[
        data.speedIndexNumericValue < 1200 ? 'bg-green-500' : 'bg-red-500',
      ]"
      class="w-1/2 m-2 p-2"
    />
  </div>
  <div
    class="md:flex block max-w m-10 p-5 bg-white border border-gray-400 rounded-md shadow dark:border-gray-700"
  >
    <div class="w-full">
      <DetailViewList
        v-if="data"
        headline="Nicht genutztes CSS"
        secondHeading="i"
        :items="data.unusedCssRulesItems"
      />
      <DetailViewAccordion
        v-if="data"
        headline="First Meaningful Display Value"
        :bodytext="data.firstMeaningfulPaintDisplayValue"
        secondHeading="i"
      />
    </div>
  </div>
</template>
<style>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
