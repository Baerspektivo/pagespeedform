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
  <div class="overflow-hidden mb:basis-full w-full">
    <label
      :for="id"
      class="mb-2 block text-prime font-medium"
      :class="{ 'w-5/6': type === 'checkbox' }"
      >{{ label }}</label
    >
    <input
      :id="id"
      :type="type"
      :name="name"
      :required="required"
      :value="modelValue"
      @input="updateValue"
      class="focus:shadow-outline mb-3 md:w-full appearance-none py-2 px-3 leading-tight text-gray-700 focus:outline-none border-b-4 border-accent border-red text-red"
      :class="{
        'focus:shadow-outline': modelValue,
        'mb-3': modelValue,
        'w-full': modelValue,
        'appearance-none': modelValue,
        'py-2': modelValue,
        'px-3': modelValue,
        'leading-tight': modelValue,
        'text-gray-700': modelValue,
        'focus:outline-none': modelValue,
        'border-b-4': modelValue,
        'border-accent': modelValue,
      }"
    />
  </div>
</template>
