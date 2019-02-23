import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 存放数据  从session中取
// 先看getItem中有没有state 如果有 拿回来  否则 新建一个
const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
  user:{
    username:''
  }
};

// 计算属性 拿数据
const getters = {
  getUser(state){
    return state.user;
  }
};

// 同步执行的  写数据
const mutations = {
  updateUser(state,user){
    state.user = user;
  }
};

// 异步执行
const actions = {
  // context 上下文 相当于mutations
  asyncUpdateUser(context , user){
    // 调用提交同步方法
    context.commit('updateUser' , user);
  }
};

// 导出暴露出来
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

