const pkg = require('./package')
const webpack = require('webpack')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
    title: "Storyblok + Nux = <3",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "An awesome blog about tech stuff, built with Nuxt and Storyblok" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '<link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  // router: {
  //   middleware: [
  //     'clearValidationErrors'
  //   ]
  // },

  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/bootstrap.js',
    './plugins/mixins/validation',
    './plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth",

    'bootstrap-vue/nuxt'
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: "meta.token"
          },
          user: {
            url: 'user',
            method: 'get',
            propertyName: "data"
          },
          logout: {
            url: 'logout',
            method: 'post'
          },
          register: {
            url: 'register',
            method: 'post',
            propertyName: "data"
          }
        }
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, ctx) {
      
    }
  }
}
