import { Script } from "vm";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  
  app: {
    head: {
      title: "Eyam Poosu",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css",
        },
        { rel: "icon", type: "image/x-icon", href: "/ep.png" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js",
        },
      ],
    },
  },
});
