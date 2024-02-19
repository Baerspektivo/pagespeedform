<script setup>
const isSending = ref(false);
const error = ref(false);
const message = ref(null);

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  displayName: "",
  url: "",
});

const pageSpeedForm = async () => {
  isSending.value = true;
  const response = await fetch("http://localhost:3000/controllers/newpage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData.value),
  });
  isSending.value = false;
  error.value = response.status > 399;
  const data = await response.json();
  if (error) {
    message.value = error;
    return;
  }
  message.value = data;
};
</script>
<template>
  <form @submit.prevent="pageSpeedForm">
    <FormsElementInput
      id="firstName"
      label="Vorname:"
      type="text"
      name="fname"
      v-model="formData.firstName"
      required
    />

    <FormsElementInput
      id="lastName"
      label="Nachname:"
      type="text"
      name="fname"
      v-model="formData.lastName"
      required
    />

    <FormsElementInput
      id="email"
      label="E-Mail Adresse"
      type="text"
      name="fname"
      v-model="formData.email"
      required
    />

    <FormsElementInput
      id="displayName"
      label="Firmenname"
      type="text"
      name="email"
      v-model="formData.displayName"
      required
    />

    <FormsElementInput
      id="url"
      label="Url"
      type="text"
      name="url"
      v-model="formData.url"
      required
    />

    <FormsElementButton :disabled="isSending">Senden</FormsElementButton>

    <div>{{ message }}</div>
  </form>
</template>
