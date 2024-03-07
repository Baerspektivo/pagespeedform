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
  dsgvo: false,
});

const pageSpeedForm = async () => {
  isSending.value = true;
  message.value =
    "Das kann jetzt ein einige Minuten dauern, wir bitten um etwas Gedult";
  try {
    const response = await fetch("http://localhost:3001/controllers/newpage", {
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
  <form
    @submit.prevent="pageSpeedForm"
    class="my-4 pb-8"
    novalidate=""
    backgroundstyle="default"
  >
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

    <FormsElementCheckBox
      type="checkbox"
      label='Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an &lt;a href="mailto:info@bitsandlikes.de" &gt;info@bitsandlikes.de&lt;/a&gt; widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer &lt;a href="/datenschutz" target="_blank" &gt;Datenschutzerklärung.&lt;/a&gt;'
      required
    />

    <FormsElementButton :disabled="isSending">Kontaktieren</FormsElementButton>
    <div v-if="message">{{ message }}</div>
  </form>
</template>
