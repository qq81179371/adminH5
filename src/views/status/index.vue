<template>
  <div class="status_wrap">
    <h3 class="title">在线状态</h3>
    <div class="list">
      <div
        class="item"
        v-for="item in lineList"
        :key="item.value"
        @click="currentStatus = item.value"
      >
        <p>{{ item.text }}</p>
        <van-icon name="success" v-if="currentStatus === item.value" />
      </div>
    </div>
    <h3 class="title">客户接入设置</h3>
    <div class="list">
      <div
        class="item"
        v-for="item in accessList"
        :key="item.value"
        @click="accessStatus = item.value"
      >
        <p>{{ item.text }}</p>
        <van-icon name="success" v-if="accessStatus === item.value" />
      </div>
    </div>
    <div class="btn">
      <van-button type="primary">保存</van-button>
    </div>
  </div>
</template>

<script>
import { Icon, Button } from 'vant'

export default {
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  data() {
    return {
      currentStatus: 'online',
      accessStatus: 'allow',
      lineList: [
        {
          text: '在线',
          value: 'online'
        },
        {
          text: '离线',
          value: 'offline'
        }
      ],
      accessList: [
        {
          text: '允许接入',
          value: 'allow'
        },
        {
          text: '停止接入',
          value: 'refuse'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.status_wrap {
  min-height: 100vh;
  background: #f2f2f2;
}
.title {
  padding: 20px 30px;
  font-size: 28px;
  color: #2d2d2d;
  font-weight: 700;
}
.list {
  .item {
    background: #fff;
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 1px;
    p {
      font-size: 28px;
      font-weight: 400;
      color: #2d2d2d;
    }
    .van-icon {
      font-size: 28px;
      color: #0071c4;
    }
  }
}
.btn {
  margin-top: 180px;
  text-align: center;
  .van-button {
    width: 640px;
    height: 88px;
    background: #0071c4;
    border-radius: 10px;
    font-size: 28px;
    font-weight: 400;
    color: #ffffff;
  }
}
</style>
