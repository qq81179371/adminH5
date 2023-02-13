<template>
  <div class="item">
    <div class="name">
      <div class="avatar">
        <img src="" alt="" v-img />
      </div>
      <div class="info">
        <h4 class="ellipsis">英子</h4>
        <p class="ellipsis">未完全俄</p>
      </div>
    </div>
    <div class="time">
      <span class="data">213</span>
      <van-badge :content="200" max="99" />
    </div>
  </div>
</template>

<script>
import { Badge } from 'vant'

export default {
  components: {
    [Badge.name]: Badge
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  .name {
    display: flex;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      margin: 0 20px 0 0;
      img {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        object-fit: cover;
      }
    }
    .info {
      h4 {
        font-size: 28px;
        font-weight: 700;
        color: #2d2d2d;
      }
      p {
        font-size: 24px;
        color: #7d7d7d;
        font-weight: 400;
      }
    }
  }
  .info,
  .time {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .time {
    .data {
      font-size: 22px;
      font-weight: 400;
      color: #7d7d7d;
    }
  }
}
</style>
