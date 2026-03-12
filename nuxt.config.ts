// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/eslint",
    "@nuxtjs/sitemap",
  ],
  imports: {
    autoImport: false,
  },

  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: "%s | grandaniel.com",
      title: "Personal Website",
    },
  },
  css: ["~/assets/scss/main.scss"],
  compatibilityDate: "2024-04-03",

  typescript: {
    strict: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    serverBundle: "remote",
  },
});
