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
});
</script>
<template>
  <div v-if="bodytext">
    {{ headline }}
    {{ bodytext }}
    <details>
      <summary>{{ secondHeading }}</summary>
      <div>{{ description }}</div>
    </details>
  </div>
</template>
