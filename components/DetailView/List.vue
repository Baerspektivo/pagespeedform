<script setup>
const props = defineProps({
  headline: {
    type: String,
    default: "text",
  },
  bodytext: {
    type: String,
    required: true,
  },
  secondHeading: {
    type: String,
    default: "text",
  },
  description: {
    type: String,
    default: "text",
  },
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">{{ headline }}</h1>
    <details class="w-full md:w-2/3">
      <summary class="text-lg font-semibold">{{ secondHeading }}</summary>
      <div class="flex flex-col mt-4">
        <div class="flex bg-gray-200 p-2">
          <div class="w-1/3">Einsparung</div>
          <div class="w-1/3">Übertragungsgröße</div>
          <div class="w-1/3">URL</div>
        </div>
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex bg-white p-2"
        >
          <div class="w-1/3">{{ item.totalBytes }}</div>
          <div class="w-1/3">{{ item.wastedBytes }}</div>
          <div class="w-1/3">
            <a
              :href="item.url"
              class="text-blue-500 break-words hover:underline"
              >{{ item.url }}</a
            >
          </div>
        </div>
      </div>
    </details>
  </div>
</template>
