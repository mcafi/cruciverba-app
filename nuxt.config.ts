// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  head: {
    bodyAttrs: {
      class: "bg-neutral-100",
    },
  },
});
