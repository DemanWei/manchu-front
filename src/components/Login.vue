<template>
  <div class="login-container" id="login-app">
    <div class="login-box">
      <img src="../../static/images/ocr.jpg" alt="">
      <div class="login-form">
        <el-form ref="loginForm" :model="loginForm">
          <div class="login-form-title">
            <h1 class="title">满文识别系统</h1>
          </div>
          <el-form-item prop="account">
            <el-input v-model="loginForm.account" type="text" auto-complete="off" placeholder="账号" maxlength="20"
                      prefix-icon="iconfont icon-zhanghao" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码" prefix-icon="iconfont icon-mima" maxlength="20"
                      @keyup.enter.native="handleLogin" />
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="loginForm.code" type="text" placeholder="验证码" prefix-icon="iconfont icon-yanzhengma" maxlength="20"
                      @keyup.enter.native="handleLogin" />
          </el-form-item>
          <el-image id="vcode" :src="'/utils/checkCode'" :fit="'fill'" title="看不清?点击换一张" @click="handleCheckCode()"></el-image>
          <el-form-item style="width:100%;">
            <el-button :loading="loading" class="login-btn" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
              <span v-if="!loading">登  录</span>
              <span v-else>登 录 中...</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm:{
        account: 'admin',
        password: 'admin',
        code: 'code'
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      if (this.loginForm.account==='admin'&&this.loginForm.password==='admin') {
        // 登录成功
        this.$message.success('登陆成功, 欢迎访问');
        // 1. 存储 user
        localStorage.setItem('user',JSON.stringify(this.loginForm))
        // 2. 跳转到后台主页
        this.$router.replace('/main');
      } else {
        // 登录失败
        localStorage.removeItem('user')
        this.$message.error('账号或密码错误');
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../static/css/iconfont.css';
@import '../../static/css/login.css';
.title {
  text-shadow: 6px 8px 3px rgb(207, 207, 207);
  text-align: center;
  color: royalblue;
}
</style>
