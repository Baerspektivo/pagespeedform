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
    default: "text",
  },
});
const test = props.items[0];
</script>
<template>
  <div>
    {{ headline }}
    <details>
      <summary></summary>
      <div
        class="md:block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700"
      >
        <tr v-for="(item, index) in items" :key="index">
          {{
            item.bodytext
          }}
          <th>URL</th>
          <div v-for="(key, value) in item" :key="key">
            <th class="mb-2 tracking-tight text-gray-900 dark:text-black">
              {{ key }}
            </th>
          </div>
        </tr>
      </div>
    </details>
  </div>
</template>
