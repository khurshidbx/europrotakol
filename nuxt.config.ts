export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
devServer: {
    // host: '192.168.100.19',
      port: 3000, 
      // allowedHosts: ""
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: false,
      routes: ['/', '/faq', '/about'],
      failOnError: false,
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'uz' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/main_evro_logo.png' },
      ],
    },
  },
})
