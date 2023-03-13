// const registerRouter = require('./backend/router')
const router = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before(app) {
      app.use('/', router)
    }
  },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '听歌吧'
      return args
    })
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}
