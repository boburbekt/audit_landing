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
      ],
       script: [
        {
          src: 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=uz_UZ',
          async: true,
          defer: true
        }
      ]
    },
  },
  sourcemap: false,
   build: {
    transpile: []
  },
   ssr: true,
   runtimeConfig: {
    public: {
      yandexMapsApiKey: process.env.YANDEX_MAPS_API_KEY || 'YOUR_API_KEY'
    }
  }
})
