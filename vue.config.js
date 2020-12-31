module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ' /infomat'
    : '/',


  transpileDependencies: [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles.scss";`
      },
    }
  }
}