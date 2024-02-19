<script setup>
defineProps({
  disabled: Boolean,
});
</script>
<template>
  <button :disabled="disabled"><slot /></button>
</template>
