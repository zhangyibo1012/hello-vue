
// 用户模块化开发
const user = {
  state : sessionStorage.getItem('userState') ? JSON.parse(sessionStorage.getItem('userState')) : {
    user:{
      username:''
    }
  },

// 计算属性 拿数据
 getters :{
  getUser(state){
    return state.user;
  }
},

// 同步执行的  写数据
 mutations : {
  updateUser(state,user){
    state.user = user;
  }
},

// 异步执行
 actions : {
  // context 上下文 相当于mutations
  asyncUpdateUser(context , user){
    // 调用提交同步方法
    context.commit('updateUser' , user);
  }
}
};

// 暴露出来
export default user;
