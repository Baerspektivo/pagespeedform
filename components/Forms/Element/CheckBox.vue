<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  type: { type: String, default: "text" },
  name: { type: String, default: "" },
  required: { type: Boolean, default: false },
  modelValue: { type: String, required: false },
});
const emit = defineEmits(["update:modelValue"]);
const id = ref(Math.random());
const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
<template>
  <div class="bloack font-medium">
    <input
      :id="id"
      :type="type"
      :name="name"
      :required="required"
      :value="modelValue"
      @input="updateValue"
      class="relative peer shrink-0 appearance-none w-4 h-4 border-2 border-accent bg-white mt-1 mr-2 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400 text-red"
      :class="{
        'border-accent': checkbox,
        'bg-white': checkbox,
        'focus:outline-none': checkbox,
        'focus:ring-offset-0': checkbox,
        'focus:ring-2': checkbox,
        'focus:ring-blue-100': checkbox,
        'disabled:border-steel-400': checkbox,
        'disabled:bg-steel-400': checkbox,
      }"
    /><svg
      class="absolute w-[0.85rem] h-[0.85rem] mt-[-1.35rem] ml-[0.1rem] hidden peer-checked:block pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <label :for="id"><span v-html="label"></span></label>
  </div>
</template>
