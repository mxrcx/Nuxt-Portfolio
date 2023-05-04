// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Julius Stammler Media",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
        },
      ],
    },
    baseURL: "/Nuxt-Portfolio/",
  },
  modules: [
    [
      '@nuxtjs/i18n',
      { 
        vueI18n: './i18n.config.ts',
      }
    ]
  ],
  css: ["~/assets/scss/index.scss"],
  build: {
    transpile: ["mdb-vue-ui-kit"],
  },
  ssr: false,
});
