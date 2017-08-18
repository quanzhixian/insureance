// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

import $http from "./util/fetch"
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)//挂载
Vue.config.productionTip = false

import plugins from './plugin'
Vue.use(plugins)

//添加一个请求拦截器
// instance.interceptors.request.use(function(config){
// 	  //在请求发出之前进行一些操作  加载中
// 	  return config;
// });
// //添加一个响应拦截器
// instance.interceptors.response.use(function(res){
// 	  //在这里对返回的数据进行处理  加载完成
// 	  return res;
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
