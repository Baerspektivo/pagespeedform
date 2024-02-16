<script setup>
import { ref } from "vue";

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
  error = response.error;
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
    <div>
      <label for="firstName">Vorname:</label>
      <input
        type="text"
        id="firstName"
        name="fname"
        v-model="formData.firstName"
        required
      />
    </div>
    <div>
      <label for="lastName">Nachname:</label>
      <input
        type="text"
        id="lastName"
        name="lname"
        v-model="formData.lastName"
        required
      />
    </div>
    <div>
      <label for="displayName">Firmname:</label>
      <input
        type="text"
        id="displayName"
        v-model="formData.displayName"
        required
      />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />
    </div>
    <div>
      <label for="url">Url:</label>
      <input type="url" id="url" v-model="formData.url" required />
    </div>
    <button :disabled="isSending">Senden</button>
    <div>
      {{ message }}
    </div>
  </form>
</template>

<style></style>
