/* eslint-disable no-unused-vars */


//项目JS入口
import Vue from 'vue'

// 向Vue注册路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入自己的路由
import router from './router.js'

// 导入app组件
import app from './App'

// 导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI)

// 导入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);


// 导入mockjs
require('./mock.js')

var vm = new Vue({
  el: "#app",
  render: h => h(app),
  // 挂载路由
  router
})