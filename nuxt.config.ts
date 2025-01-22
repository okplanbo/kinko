// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-vuefire"],
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: true // needs to be enabled due to SSR
    },
    config: {
      apiKey: process.env.FIRE_API_KEY,
      authDomain: process.env.FIRE_AUTH_DOMAIN,
      projectId: process.env.FIRE_PROJECT_ID,
      storageBucket: process.env.FIRE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIRE_MSG_SENDER_ID,
      appId: process.env.FIRE_APP_ID
    },
  },
});
