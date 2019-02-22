<template>
    <div>
      <!-- id和children :id 参数一致-->
      <!--个人信息 ID= {{ $route.params.id }}-->

      <!-- 用props：true 传参数的接收方式 -->
      个人信息 ID= {{ id }}
    </div>
</template>

<script>
    export default {
      props:['id'],
        name: "UserProfile",
      // 钩子函数异步请求
      beforeRouteEnter:((to, from, next) => {
        console.log("准备进入个人信息页面");
        // 进入页面 不写next()会阻塞
        // 回调函数 vm  Vue初始化成功 拿到当前实例  可以触发下面方法
        next(vm => {
          vm.getData();
        });
      }),
      // 方法
      methods:{
        getData: function () {
          this.axios({
            method: 'get',
            url:'http://localhost:8080/data.json'
          }).then(function (repos) {
            console.log(repos);
          }).catch(function (error) {
            console.log(error);
          })
        }
      },
      beforeRouteLeave:((to, from, next) => {
        console.log("准备离开个人信息页面");
        next();
      })
    }
</script>

<style scoped>

</style>
