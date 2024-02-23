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
  <div class="flex-wrap justify-center items-center">
    {{ headline }}
    <details class="justify-center">
      <summary>{{ secondHeading }}</summary>
      <tr>
        <th>URL</th>
        <th>Übertragungsgröße</th>
        <th>Einsparung</th>
      </tr>
      <tr v-for="(item, index) in items" :key="index">
        <th>
          {{ item.url }}
        </th>
        <th>
          {{ item.totalBytes }}
        </th>
        <th>
          {{ item.wastedBytes }}
        </th>
      </tr>
    </details>
  </div>
</template>
