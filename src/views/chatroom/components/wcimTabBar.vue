<template>
  <div class="footer_bar" :class="operateShow ? 'isUpper' : 'isUnder'">
    <div class="tabs">
      <svg-icon class="icon" name="audio" />
      <van-field center v-model="message" rows="1" autosize type="textarea" />
      <svg-icon class="icon mr20" name="emotion" />
      <svg-icon
        class="icon"
        name="operate"
        @click="operateShow = !operateShow"
      />
    </div>
    <div class="operate" v-if="operateShow">
      <div class="item" v-for="item in operateList" :key="item.value">
        <div class="pic">
          <svg-icon class="icon" :name="item.value" />
        </div>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Field } from 'vant'

export default {
  components: {
    [Field.name]: Field
  },
  data() {
    return {
      operateShow: false,
      message: '',
      operateList: [
        {
          text: '相册',
          value: 'photo'
        },
        {
          text: '拍照',
          value: 'camera'
        },
        {
          text: '文件',
          value: 'doc'
        },
        {
          text: '会话',
          value: 'transfer'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.isUpper {
  animation: isUpper 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translateY(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
.isUnder {
  animation: isUnder 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translateY(0);
  backface-visibility: hidden;
  perspective: 1000px;

}
@keyframes isUnder {
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(0);
  }
}
@keyframes isUpper {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}
.footer_bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .tabs {
    display: flex;
    padding: 20px;
    line-height: 60px;
    border: 1px solid #cccccc {
      left: 0;
      right: 0;
    }
    .icon {
      margin-top: 5px;
      font-size: 50px;
      color: #7d7d7d;
    }
    ::v-deep .van-field {
      border: 1px solid #cccccc;
      flex: 1;
      margin: 0 20px;
      min-height: 60px;
      border-radius: 10px;
      font-size: 24px;
      color: #d2d2d2;
    }
  }
  .operate {
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .pic {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background: #ffffff;
        border-radius: 10px;
        .icon {
          font-size: 60px;
          color: #4d4d4d;
        }
      }
      p {
        font-size: 28px;
        font-weight: 400;
        color: #2d2d2d;
        margin-top: 10px;
      }
    }
  }
}
.mr20 {
  margin-right: 20px;
}
</style>
