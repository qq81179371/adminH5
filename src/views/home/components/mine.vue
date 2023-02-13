<template>
  <van-popup v-model:show="mineShow" position="left">
    <div class="info_wrap">
      <div class="header_info">
        <div class="avatar">
          <img src="" v-img alt="" />
        </div>
        <div class="name">
          <h3>汪汪汪</h3>
          <p>1231231231312</p>
          <van-rate
            v-model="rate"
            :size="14"
            color="#FFBB00"
            void-icon="star"
            void-color="#7D7D7D"
          />
        </div>
      </div>
      <div class="slidebar">
        <div class="item" v-for="item in barList" :key="item.icon" @click="handleJump(item)">
          <svg-icon class="icon" :name="item.icon" />
          <h4>{{ item.text }}</h4>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script>
import { Popup, Rate, Icon } from 'vant'

export default {
  components: {
    [Icon.name]: Icon,
    [Rate.name]: Rate,
    [Popup.name]: Popup
  },
  data() {
    return {
      mineShow: false,
      rate: 3,
      barList: [
        {
          icon: 'info',
          text: '个人资料',
          path: 'userInfo'
        },
        {
          icon: 'msg',
          text: '消息中心',
          path: ''
        },
        {
          icon: 'setting',
          text: '接待设置',
          path: 'status'
        },
        {
          icon: 'back',
          text: '退出账号',
          path: 'login'
        }
      ]
    }
  },
  methods: {
    show() {
      this.mineShow = true
    },
    handleJump(item) {
      if (item.path === 'login') {
        this.$router.replace({
          name: item.path
        })
      } else {
        this.$router.push({
          name: item.path
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info_wrap {
  width: 460px;
  height: 100vh;
  background: #2d2d2d;
  .header_info {
    display: flex;
    align-items: center;
    padding: 30px 0 30px 30px;
    border-bottom: 1px solid #7d7d7d;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 20px;
      position: relative;
      img {
        display: block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
      }
      &::after {
        content: "";
        width: 20px;
        height: 20px;
        background: #1bff01;
        border-radius: 50%;
        position: absolute;
        bottom: 5px;
        right: 5px;
      }
    }
    .name {
      height: 110px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-size: 28px;
        font-weight: 700;
        color: #fff;
      }
      p {
        font-size: 24px;
        font-weight: 700;
        color: #fff;
      }
    }
  }
  .slidebar {
    .item {
      display: flex;
      align-items: center;
      padding: 30px;
      .icon {
        font-size: 28px;
        color: #ccc;
        margin-right: 20px;
      }
      h4 {
        flex: 1;
        color: #ccc;
        font-size: 28px;
        font-weight: 400;
      }
      .van-icon {
        font-size: 28px;
        color: #ccc;
      }
    }
  }
}
</style>
