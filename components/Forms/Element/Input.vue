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
  <div class="flex flex-col md:flex-row md:items-center">
    <label :for="id" class="w-1/2" :class="{ 'w-5/6': type === 'checkbox' }">{{
      label
    }}</label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :required="required"
      :value="modelValue"
      @input="updateValue"
      class="my-2 border-black border-2"
    />
  </div>
</template>
