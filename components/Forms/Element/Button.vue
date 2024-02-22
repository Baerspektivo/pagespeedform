<script setup>
defineProps({
  disabled: Boolean,
});
</script>
<template>
  <button :disabled="disabled" class="rounded-full"><slot /></button>
</template>
