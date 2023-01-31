export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Autocredit',
    titleTemplate: ' Autocredit | %s',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Autocredit a sua empresa de consulta veicular e análise de crédito.'
      },
      { name: 'format-detection', content: 'telephone=no' },

      //Open Graph
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Autocredit'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://autocredit.com.br/'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Autocredit'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Autocredit a sua empresa de consulta veicular e análise de crédito.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://autocredit.com.br/assets/images/LOGO_PNG.png'
      },
      {
        hid: 'og:author',
        name: 'og:author',
        content: 'Time da Autocredit'
      }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://autocredit.com.br',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/autocredit-nuxt-build/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700;800&display=swap'
      },
      {
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
        rel: 'stylesheet',
        integrity: 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD',
        crossorigin: 'anonymous',
      }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
        integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN',
        crossorigin: 'anonymous'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/base.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: { base: '/autocredit-nuxt-build/' },
}
