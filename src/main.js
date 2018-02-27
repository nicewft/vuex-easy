// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './iconfont/iconfont.css'
import store from './store/index.js'
import '@/util/rem.js'
import colorPicker from './plugin/vue-color-picker'
Vue.use(colorPicker)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
