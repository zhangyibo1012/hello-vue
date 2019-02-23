import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import user from './modules/user';

// 存放数据  从session中取
// 先看getItem中有没有state 如果有 拿回来  否则 新建一个

// 导出暴露出来
export default new Vuex.Store({
 modules:{
   user,
 }
});

