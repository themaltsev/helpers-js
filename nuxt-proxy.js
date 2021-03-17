modules: [
  '@nuxtjs/axios',
  '@nuxtjs/proxy'
],

axios: {
  proxy: true
},

proxy: {
  '/api/': { target: 'https://api.example.com/', pathRewrite: {'^/api/': ''} }
}
