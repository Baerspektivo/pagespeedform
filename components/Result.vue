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
    <div>
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
    <!-- <div class="md:flex flex-wrap"> -->
    <!--   <div -->
    <!--     :class="[ -->
    <!--       data?.firstContentfulPaintNumericValue < 1000 -->
    <!--         ? 'bg-green-500' -->
    <!--         : 'bg-red-500', -->
    <!--     ]" -->
    <!--     class="w-1/2" -->
    <!--   > -->
    <!--     First Contentful Paint DisplayValue: -->
    <!--     {{ data.firstContentfulPaintDisplayValue }} -->
    <!--     <details> -->
    <!--       <summary>Beschreibung</summary> -->
    <!--       <div>Infotext</div> -->
    <!--     </details> -->
    <!--   </div> -->
    <!---->
    <!--   <div class="w-1/2"> -->
    <!--     Largest Contentful Paint Display Value: -->
    <!--     {{ data.largestContentfulPaintDisplayValue }} -->
    <!--     <details> -->
    <!--       <summary>Beschreibung</summary> -->
    <!--       <div>Infotext</div> -->
    <!--     </details> -->
    <!--   </div> -->
    <!---->
    <!--   <div class="w-1/2"> -->
    <!--     Total Blocking Time Display Value: -->
    <!--     {{ data.totalBlockingTimeDisplayValue }} -->
    <!--     <details> -->
    <!--       <summary>Beschreibung</summary> -->
    <!--       <div>Infotext</div> -->
    <!--     </details> -->
    <!--   </div> -->
    <!-- </div> -->
    <!---->
    <!-- <div> -->
    <!--   Speed Index Display Value: -->
    <!--   {{ data.speedIndexDisplayValue }} -->
    <!--   <details> -->
    <!--     <summary><p>Beschreibung</p></summary> -->
    <!--     <div>Infotext</div> -->
    <!--   </details> -->
    <!-- </div> -->
    <!---->
    <!-- <div> -->
    <!-- <div> -->
    <!--   First Meaningful Paint Score: -->
    <!--   {{ data.firstMeaningfulPaintScore }} -->
    <!--   <details> -->
    <!--     <summary>Beschreibung</summary> -->
    <!--     <div>Infotex</div> -->
    <!--   </details> -->
    <!-- </div> -->

    <!-- <div> -->
    <!--   First Meaningful Paint DisplayValue: -->
    <!--   {{ data.firstMeaningfulDisplayValue }} -->
    <!--   <details> -->
    <!--     <summary>Beschreibung</summary> -->
    <!--     <div>Infotext</div> -->
    <!--   </details> -->
    <!-- </div> -->
    <!---->
    <!--   <div> -->
    <!--     First Contentful Paint Score: -->
    <!--     {{ data.firstContentfulPaintScore }} -->
    <!--     <details> -->
    <!--       <summary>Beschreibung</summary> -->
    <!--       <div>Infotext</div> -->
    <!--     </details> -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Main Thread Work Breakdown Display Value: -->
    <!--     {{ data.mainThreadWorkBreakdownDisplayValue }} -->
    <!--   </div> -->
    <!--   <div -->
    <!--     v-for="(item, index) in data.mainThreadWorkBreakdownItemsGroupLabel && -->
    <!--     data.mainThreadWorkBreakdownItemsDuration" -->
    <!--     :key="index" -->
    <!--   > -->
    <!--     Main Thread Work Breakdown Items Group Label -->
    <!--     {{ data.mainThreadWorkBreakdownItemsGroupLabel[index] }}: -->
    <!--     {{ item.toFixed(2) }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Speed Index Score: -->
    <!--     {{ data.speedIndexScore }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Largest Contentful Paint Score: -->
    <!--     {{ data.largestContentfulPaintScore }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Total Blocking Time Score: -->
    <!--     {{ data.totalBlockingTimeScore }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Reduzieren Sie ungenutztes CSS -->
    <!--     <div> -->
    <!--       <details v-for="item in data.unusedCssRulesItems"> -->
    <!--         <summary>Ungenutztes css</summary> -->
    <!--         <div v-for="(key, value) in item">{{ value }}: {{ key }}</div> -->
    <!--       </details> -->
    <!--     </div> -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Third Party Summary Display Value: -->
    <!--     {{ data.thirdPartySummaryDisplayValue }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Third Party Summary Items Url: -->
    <!--     {{ data.thirdPartySummaryItemsUrl }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Time To Interactive Score: -->
    <!--     {{ data.timeToInteractiveScore }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Time To Interactive Display Value: -->
    <!--     {{ data.timeToInteractiveDisplayValue }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Total Byte Weight Score: -->
    <!--     {{ data.totalByteWeightScore }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Total Byte Weight Display Value: -->
    <!--     {{ data.totalByteWeightDisplayValue }} -->
    <!--   </div> -->
    <!--   <div>Total Byte Weight Items Url:</div> -->
    <!--   <div v-for="item in data.totalByteWeightItemsUrl"> -->
    <!--     {{ item }} -->
    <!--   </div> -->
    <!--   <div v-for="item in data.totalByteWeightItemsTotalBytes"> -->
    <!--     {{ item }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Dom Size Score: -->
    <!--     {{ data.domSizeScore }} -->
    <!--   </div> -->
    <!--   <div> -->
    <!--     Dom Size Display Value: -->
    <!--     {{ data.domSizeDisplayValue }} -->
    <!--   </div> -->
    <!-- </div> -->
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
