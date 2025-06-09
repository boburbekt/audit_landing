export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'AUD-IT SOFT',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
      ]
    },
  }
})
