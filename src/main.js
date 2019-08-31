import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/css/index.css'
import './assets/css/iconfont.css'

import VueRouter from 'vue-router'

import Results from './components/results.vue'
import Player from './components/player.vue'
import Video from './components/video.vue'
import Comment from './components/comment.vue'
import Slider from './components/Slider.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from "axios";
Vue.prototype.$axios = axios
axios.defaults.baseURL="https://autumnfish.cn"

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes=[
  {path:'/results/:keywords',component:Results},
  {path:'/player/:id',component:Player},
  {path:'/video/:mvid',component:Video},
  {path:'/comment/:id',component:Comment},
  {path:'/slider',component:Slider},
  {path:'/',redirect:'/slider'},
]

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass:'active'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
