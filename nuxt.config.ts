// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  css: [
    "~/assets/css/tailwind.css", // Pfad zur Tailwind CSS-Datei
  ],
});
