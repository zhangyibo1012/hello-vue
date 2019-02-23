// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import VueRouter from 'vue-router';
import router from './router';
import store from './store';
Vue.use(Vuex);
// 全局的 放在main js 入口函数
import axios from 'axios';
Vue.prototype.axios = axios;

// 路由跳转前执行 相当于拦截器  判断登陆状态
router.beforeEach((to, from, next) => {
  let  isLogin = sessionStorage.getItem('isLogin');

  // 注销 清除状态
  if (to.path == '/logout'){
    sessionStorage.clear();
    // 然后区登录页
    next({path:'/login'});
  } else if (to.path == '/login'){
    // 如果请求的式login 并且 状态不为null 去主页
    if (isLogin != null){
      console.log(isLogin)
      next({path: '/main'});
    }
  } else if (isLogin == null){
    // 回到登录页
    next({path:'login'});
  }
// 进入下一个
  next();
});

// 显示安装
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
