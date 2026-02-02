import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Firefly Client Downloads",
      htmlAttrs: { lang: "pt-BR" },
      meta: [
        { name: "description", content: "......" },
        { name: "robots", content: "noindex, nofollow" },
        { name: "theme-color", content: "#8539ff" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  routeRules: {
    "/**": { prerender: true }
  },
  compatibilityDate: "2025-11-10"
});