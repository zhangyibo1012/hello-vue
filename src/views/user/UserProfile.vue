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
        name: "UserProfile"
    }
</script>

<style scoped>

</style>
