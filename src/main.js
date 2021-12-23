import Vue from 'vue'
import App from './App.vue'
import 'animate.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'bootstrap/dist/css/bootstrap.min.css'

// import {Howl, Howler} from 'howler';
// const {Howl, Howler} = require('howler');
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
