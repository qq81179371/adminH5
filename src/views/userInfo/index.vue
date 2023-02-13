<template>
  <div class="user_info_wrap">
    <div class="item">
      <h3>头像</h3>
      <img src="" alt="" v-img />
    </div>
    <div class="item">
      <h3>客服昵称：</h3>
      <p>客服小A</p>
    </div>
    <div class="item">
      <h3>设备号：</h3>
      <p>XXXXXXXXXXXXX</p>
    </div>
    <div class="item">
      <h3>联系方式：</h3>
      <p>12345678978</p>
    </div>
    <div class="item mt" @click="handleJump">
      <h3>历史问题列表</h3>
      <van-icon name="arrow" />
    </div>
    <div class="btn">
      <van-button type="primary">发消息</van-button>
    </div>
  </div>
</template>

<script>
import { Button, Icon } from 'vant'

export default {
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  methods: {
    handleJump() {
      this.$router.push({
        name: 'historyQa'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user_info_wrap {
  min-height: 100vh;
  background: #f2f2f2;
  .item {
    background: #fff;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 88px;
    align-items: center;
    padding: 0 30px;
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 1px;
    h3 {
      color: #2d2d2d;
    }
    p {
      color: #7d7d7d;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
    .van-icon {
      font-size: 28px;
      color: #7d7d7d;
    }
    &.mt {
      margin-top: 10px;
    }
  }
  .btn {
    margin-top: 200px;
    text-align: center;
    .van-button {
      width: 640px;
      height: 88px;
      background: #0071c4;
      border-radius: 10px;
      font-size: 28px;
    }
  }
}
</style>
