<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  // 事件 钩子函数初始化数据 mounted函数
  mounted(){
    // 在刷新的时候会调用saveState方法 存储数据
    window.addEventListener('unload' , this.saveState)
  },
  methods:{
    saveState(){
      // 只可以存字符串 JSON.stringify 把对象转换字符串
      sessionStorage.setItem('userState' , JSON.stringify(this.$store.state.user));
    }
  }
}
</script>

