<template>
  <div class="login_wrap">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="logo_form">
      <div class="form_item">
        <svg-icon class="icon" name="user" />
        <van-field v-model="form.userName" placeholder="请输入账号" />
      </div>
      <div class="form_item mb-0">
        <svg-icon class="icon" name="lock" />
        <van-field v-model="form.password" placeholder="请输入密码" />
      </div>
      <div class="btn">
        <van-button type="primary" @click="handleLogin">登录</van-button>
      </div>
      <p class="tips">忘记密码时，请联系管理员。</p>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.png'
import { Field, Button } from 'vant'

export default {
  name: 'login',
  components: {
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      logo,
      form: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      this.$router.replace({
        name: 'home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_wrap {
  min-height: 100vh;
  background: #2d2d2d;
  padding: 200px 0 0;
  .logo {
    margin: 0px auto 150px;
    text-align: center;
    img {
      width: 400px;
      height: 92px;
      object-fit: cover;
    }
  }
  .logo_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    margin: 0 auto;
    .form_item {
      width: 100%;
      height: 88px;
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      border: 1px solid #cccccc;
      border-radius: 10px;
      .icon {
        font-size: 42px;
        color: #a5a5a5;
        margin: 0 30px;
      }
      .van-field {
        color: #fff;
        font-size: 28px;
        background: none;
        border-left: 1px solid #707070;
        padding: 10px 20px;
      }
      &.mb-0 {
        margin-bottom: 0;
      }
    }
    .btn {
      margin-top: 80px;
      width: 100%;
      height: 88px;
      line-height: 44px;
      .van-button {
        font-size: 28px;
        font-weight: 400;
        border-radius: 10px;
        background: #0071c4;
        width: 100%;
        height: 100%;
      }
    }
    .tips {
      margin-top: 40px;
      font-size: 28px;
      font-weight: 400;
      text-align: center;
      color: #7d7d7d;
    }
  }
}
</style>
