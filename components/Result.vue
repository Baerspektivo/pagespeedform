<script setup>
const route = useRoute();
const resultId = ref(null);
const data = ref(null);

onMounted(async () => {
  resultId.value = route.query.id;
  const response = await fetch(
    "http://localhost:3000/controllers/currentresult/" + resultId.value,
  );
  data.value = await response.json();
  data.value = data.value[0];
});
</script>
<template>
  <template v-if="data">
    <div>
      First Contentful Paint Score:
      {{ data.firstContentfulPaintScore }}
    </div>
    <div>
      First Contentful Paint DisplayValue:
      {{ data.firstContentfulPaintDisplayValue }}
    </div>
    <div>
      First Meaningful Paint Score:
      {{ data.firstMeaningfulPaintScore }}
    </div>
    <div>
      First Meaningful Paint DisplayValue:
      {{ data.firstMeaningfulDisplayValue }}
    </div>
    <div>
      Main Thread Work Breakdown Display Value:
      {{ data.mainThreadWorkBreakdownDisplayValue }}
    </div>
    <div
      v-for="(item, index) in data.mainThreadWorkBreakdownItemsGroupLabel &&
      data.mainThreadWorkBreakdownItemsDuration"
      :key="index"
    >
      Main Thread Work Breakdown Items Group Label
      {{ data.mainThreadWorkBreakdownItemsGroupLabel[index] }}:
      {{ item.toFixed(2) }}
    </div>
    <div>
      Speed Index Score:
      {{ data.speedIndexScore }}
    </div>
    <div>
      Speed Index Display Value:
      {{ data.speedIndexDisplayValue }}
    </div>
    <div>
      Largest Contentful Paint Score:
      {{ data.largestContentfulPaintScore }}
    </div>
    <div>
      Largest Contentful Paint Display Value:
      {{ data.largestContentfulPaintDisplayValue }}
    </div>
    <div>
      Total Blocking Time Score:
      {{ data.totalBlockingTimeScore }}
    </div>
    <div>
      Total Blocking Time Display Value:
      {{ data.totalBlockingTimeDisplayValue }}
    </div>
    <div v-for="item in data.unusedCssRulesItems">
      <div v-for="(key, value) in item">{{ value }}: {{ key }}</div>
    </div>
    <div>
      Third Party Summary Display Value:
      {{ data.thirdPartySummaryDisplayValue }}
    </div>
    <div>
      Third Party Summary Items Url:
      {{ data.thirdPartySummaryItemsUrl }}
    </div>
    <div>
      Time To Interactive Score:
      {{ data.timeToInteractiveScore }}
    </div>
    <div>
      Time To Interactive Display Value:
      {{ data.timeToInteractiveDisplayValue }}
    </div>
    <div>
      Total Byte Weight Score:
      {{ data.totalByteWeightScore }}
    </div>
    <div>
      Total Byte Weight Display Value:
      {{ data.totalByteWeightDisplayValue }}
    </div>
    <div>Total Byte Weight Items Url:</div>
    <div v-for="item in data.totalByteWeightItemsUrl">
      {{ item }}
    </div>
    <div v-for="item in data.totalByteWeightItemsTotalBytes">
      {{ item }}
    </div>
    <div>
      Dom Size Score:
      {{ data.domSizeScore }}
    </div>
    <div>
      Dom Size Display Value:
      {{ data.domSizeDisplayValue }}
    </div>
  </template>
</template>
