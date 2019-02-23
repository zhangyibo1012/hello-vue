<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登陆</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登陆</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
          return{
            form:{
              username:'',
              password:''
            },
            rules:{
              username: [
                //  blur 失去焦点触发
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
              ]
            }
          }
        },
      methods:{
       onSubmit(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // 登陆成功 记录状态
              sessionStorage.setItem('isLogin' , 'true');
              // 存入 vuex  返给登陆对象 this.$store. 调用actions方法的
              this.$store.dispatch('asyncUpdateUser',{username:this.form.username})
              // 跳转首页 编程式导航 以代码方式跳转
              // 把登陆form中的用户名传参
              this.$router.push({name:'Main' , params:{username:this.form.username}});
            } else {
              this.$message.error('登陆信息输入错误');
              return false;
            }
          });
        },
      }
    }
</script>

<style lang="scss" scoped>

    .login-box{
      width: 350px;
      // 上边距180 左右自动居中
      margin: 180px auto;
      border: 1px solid #DCDFE6;
      padding: 35px;
      // 圆角
      border-radius: 5px;
      // 阴影
      box-shadow: 0 0 25px #DCDFE6;
    }

    .login-title{
      text-align: center;
    }
</style>
