import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/apollo", '@nuxt/image', '@pinia/nuxt'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://rickandmortyapi.com/graphql",
      },
    },
  },

  image: {
    domains: ['rickandmortyapi.com/']
  },

  runtimeConfig: {
    mongoUrl: process.env.NUXT_MONGO_URL,
  },

  nitro: {
    plugins: ["~/server/index.ts"],
  },
});
