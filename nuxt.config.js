const title = 'Webサイトのタイトル'
const description = 'Webサイトのディスクリプション'
const url = 'WebサイトのURL'
const ogImage = `${url}/assets/image/ogp.jpg`

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    head: {
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { hid: 'ogTitle', property: 'og:title', content: title },
        { hid: 'ogType', property: 'og:type', content: 'website' },
        { hid: 'ogUrl', property: 'og:url', content: url },
        {
          hid: 'ogImage',
          property: 'og:image',
          content: ogImage,
        },
        { property: 'og:site_name', content: title },
        {
          hid: 'ogDescription',
          property: 'og:description',
          content: description,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitterSite', name: 'twitter:site', content: title },
        { hid: 'twitterUrl', name: 'twitter:url', content: url },
        { hid: 'twitterTitle', name: 'twitter:title', content: title },
        {
          hid: 'twitterDescription',
          name: 'twitter:description',
          content: description,
        },
        {
          hid: 'twitterImage',
          name: 'twitter:image:src',
          content: ogImage,
        },
      ],
      // link要素で外部リソースを読み込みたいとき
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css',
        },
      ],
    },
  },
  /*
   ** Global CSS
   */
  css: ['ress'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
