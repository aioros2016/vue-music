import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import fastclick from 'fastclick'
import axios from 'axios'
import lazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

Vue.use(lazyLoad, {
	loading: require('common/image/default.png')
})

Vue.prototype.$http = axios;

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
