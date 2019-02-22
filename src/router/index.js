import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login';
import Main from '../views/Main';
import UserProfile from '../views/user/UserProfile';
import UserList from '../views/user/UserList';
import NotFound from '../views/error/NotFound';


Vue.use(Router);

export default new Router({
  // 去掉请求路径的#号
  mode: 'history',
  routes:[
    {
      // 首页 /main/:username 带参数
      path:'/main/:username',
      name:'Main',
      component: Main,
      // 子路由
      children:[
        // 路径带参数 对象 :id 传参  name 是路由名称  允许用props：true 属性传参
        {path: '/user/profile/:id' , name: 'UserProfile' , component:UserProfile ,props:true},
        {path: '/user/list' , name: 'UserList' , component:UserList}
      ]
    },
    {
      path:'/login',
      name:'Login',
      component: Login
  },
    // 组件重订向 作用在路径不同但组件相同的情况下 传参数
    {
      path: '/goMain/:username',
      redirect: '/main/:username'
    },
    {
      // 通配符
      path: '*',
      component: NotFound
    }
  ]
});
