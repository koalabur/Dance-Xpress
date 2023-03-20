// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_US" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Sedgwick+Ave+Display&family=Sriracha&display=swap",
        },
      ],
    },
  },
  // Used to access env variables
  runtimeConfig: {
    // Private keys that are exposed to the server
    // Public keys that are exposed to the client
    public: {
      CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
      CONTENTFUL_CDA: process.env.CONTENTFUL_CDA,
      WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY,
    },
  },
  css: ["@/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/abstracts.scss";',
        },
      },
    },
  },
  modules: ["@nuxt/image-edge", "@pinia/nuxt", "@vueuse/nuxt", "nuxt-security"],
  image: { contentful: {} },
  build: {
    transpile: ["gsap"],
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        value: {
          "img-src": [
            "'self'",
            "data:",
            "ctfassets.net",
            "*.ctfassets.net",
            "vercel.com",
            "*.vercel.com",
          ],
        },
        route: "/**",
      },
      crossOriginEmbedderPolicy: { value: "unsafe-none", route: "/**" },
    },
    xssValidator: { value: {}, route: "", throwError: true },
  },
});
