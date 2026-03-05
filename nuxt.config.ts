// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/eslint",
  ],
  imports: {
    autoImport: false,
  },
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  compatibilityDate: "2024-04-03",
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    serverBundle: "remote",
  },
});
