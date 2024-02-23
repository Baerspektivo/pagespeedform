<script setup>
defineProps({
  disabled: Boolean,
});
</script>
<template>
  <button :disabled="disabled" class="rounded-full p-2 m-2"><slot /></button>
</template>
