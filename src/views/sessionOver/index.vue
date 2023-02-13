<template>
  <div class="content_wrap">
    <div class="item">
      <h4>服务类型：</h4>
      <span>请选择服务类型</span>
    </div>
    <div class="item">
      <h4>问题描述：</h4>
      <span>请选择问题描述</span>
    </div>
    <div class="item textarea">
      <h4>详细描述：</h4>
      <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        maxlength="200"
        placeholder="请输入详细描述"
        show-word-limit
      />
    </div>
    <div class="btn">
      <van-button type="primary">提交</van-button>
    </div>
  </div>
</template>

<script>
import { Field, Button } from 'vant'

export default {
  components: {
    [Field.name]: Field,
    [Button.name]: Button
  }
}
</script>

<style lang="scss" scoped>
.content_wrap {
  h4 {
    font-size: 28px;
    color: #2d2d2d;
  }
  span {
    font-size: 22px;
    color: #7d7d7d;
  }
  .item {
    background: #fff;
    padding: 24px 30px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.textarea {
      flex-direction: column;
      align-items: flex-start;
      .van-field {
        margin-top: 20px;
        padding: 10px;
        border: 1px solid #cccccc;
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
