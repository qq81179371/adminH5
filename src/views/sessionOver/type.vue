<template>
  <div class="content_wrap">
    <div class="item">
      <p>客服专业技能不够，没有耐心，不能及时有效解决客户的问题</p>
      <van-icon name="success" />
    </div>
    <div class="item active">
      <p>客服专业技能不够，没有耐心，不能及时有效解决客户的问题</p>
      <van-icon name="success" />
    </div>
    <div class="item">
      <p>客服专业技能不够，没有耐心，不能及时有效解决客户的问题</p>
      <van-icon name="success" />
    </div>
    <div class="item">
      <p>客服专业技能不够，没有耐心，不能及时有效解决客户的问题</p>
      <van-icon name="success" />
    </div>
    <div class="btn">
      <van-button type="primary">提交</van-button>
    </div>
  </div>
</template>

<script>
import { Icon, Button } from 'vant'

export default {
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button
  }
}
</script>

<style lang="scss" scoped>
.content_wrap {
  .item {
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
    padding: 30px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 28px;
      max-width: 580px;
      line-height: 36px;
      color: #2d2d2d;
    }
    .van-icon {
      font-size: 28px;
      color: #cccccc;
    }
    &.active {
      .van-icon {
        color: #0071C4;
      }
    }
  }
  .btn {
    margin-top: 150px;
    text-align: center;
    .van-button {
      width: 640px;
      height: 88px;
      line-height: 44px;
      font-size: 28px;
      font-weight: 400;
      border-radius: 10px;
      background: #0071c4;
    }
  }
}
</style>
