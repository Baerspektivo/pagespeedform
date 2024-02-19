<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  type: { type: String, default: "text" },
  name: { type: String, default: "" },
  required: { type: Boolean, default: false },
  modelValue: { type: String, required: true },
});
const emit = defineEmits(["update:modelValue"]);
const id = ref(Math.random());
const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :required="required"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>
