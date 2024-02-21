<script setup>
const isSending = ref(false);
const error = ref(false);
const message = ref(null);
const result = ref(null);
const router = useRouter();
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  displayName: "",
  url: "",
});

const pageSpeedForm = async () => {
  isSending.value = true;
  message.value =
    "Das kann jetzt ein einige Minuten dauern, wir bitten um etwas Gedult";
  try {
    const response = await fetch("http://localhost:3000/controllers/newpage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData.value),
    });
    if (!response.ok) {
      throw new Error("Networ response was not ok");
    }
    const data = await response.json();
    message.value = data.message;
    result.value = data.pageSpeedId;
  } catch (error) {
    error.value = true;
    message.value = "Da ist wohl was schief gelaufen, bitte nochmal versuchen.";
  } finally {
    isSending.value = false;
    router.push({ path: "/result", query: { id: result.value } });
  }
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
      label="E-Mail Adresse:"
      type="text"
      name="fname"
      v-model="formData.email"
      required
    />

    <FormsElementInput
      id="displayName"
      label="Firmenname:"
      type="text"
      name="email"
      v-model="formData.displayName"
      required
    />

    <FormsElementInput
      id="url"
      label="Url:"
      type="text"
      name="url"
      v-model="formData.url"
      required
    />

    <FormsElementButton :disabled="isSending">Senden</FormsElementButton>

    <div v-if="message">{{ message }}</div>
    <div v-if="result">{{ result }}</div>
  </form>
</template>
