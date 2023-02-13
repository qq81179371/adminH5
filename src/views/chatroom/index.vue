<template>
  <div class="chat_wrap content_wrap">
    <div class="header">
      <p>
        出厂日期：2020-01-01 机型：EZ pad i7 / CPU:N3450 /<br />
        屏规格：14寸/欧灵/YN屏 / 内存规格：8G /<br />
        硬盘规格 ：128G EMMC
      </p>
    </div>
    <div class="wxchat-container" ref="wxchatContainer">
      <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="state.loading"
          :finished="state.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div v-for="item in wxChatData" :key="item" class="message">
            <!-- <p class="time"><span v-html="item.ctime"></span></p> -->
            <div :class="'main' + (item.direction === 2 ? ' self' : '')">
              <img
                class="avatar"
                v-img
                :src="item.direction === 2 ? ownerAvatarUrl : contactAvatarUrl"
              />
              <div
                class="text"
                v-if="item.type === 1"
                v-text="item.content"
              ></div>
              <div class="text" v-else-if="item.type === 2">
                <img :src="item.content" class="image" alt="聊天图片" v-img />
              </div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
    <wcim-tab-bar ref="wcimTabBar"/>
  </div>
</template>

<script>
import wcimTabBar from './components/wcimTabBar.vue'

export default {
  components: {
    wcimTabBar
  },
  data() {
    return {
      state: {
        loading: false,
        finished: false,
        refreshing: false
      },
      wxChatData: [
        {
          direction: 2,
          id: 1,
          type: 1,
          content: '你好!![呲牙]',
          ctime: new Date().toLocaleString()
        },
        {
          direction: 1,
          id: 2,
          type: 1,
          content: '你也好。[害羞]',
          ctime: new Date().toLocaleString()
        },
        {
          direction: 2,
          id: 3,
          type: 1,
          content: '这是我的简历头像：',
          ctime: new Date().toLocaleString()
        },
        {
          direction: 2,
          id: 4,
          type: 2,
          content: './src/assets/wyz.jpg',
          ctime: new Date().toLocaleString()
        },
        {
          direction: 1,
          id: 5,
          type: 1,
          content: '你开心就好。[微笑]',
          ctime: new Date().toLocaleString()
        }
      ]
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.state.refreshing) {
          this.wxChatData = []
          this.state.refreshing = false
        }

        for (let i = 0; i < 10; i += 1) {
          this.wxChatData.push({
            direction: 2,
            id: 1,
            type: 1,
            content: '你好!![呲牙]',
            ctime: new Date().toLocaleString()
          })
        }
        this.state.loading = false

        if (this.wxChatData.length >= 40) {
          this.state.finished = true
        }
      }, 1000)
    },
    onRefresh() {
      // 清空列表数据
      this.state.finished = false

      /*
       * 重新加载数据
       * 将 loading 设置为 true，表示处于加载状态
       */
      this.state.loading = true
      this.onLoad()
    }
  }
}
</script>

<style lang="scss" scoped>
.chat_wrap {
  .header {
    padding: 20px 10px;
    background: #fff;
    p {
      font-size: 20px;
      font-weight: 400;
      color: #2d2d2d;
      line-height: 30px;
    }
  }
  .wxchat-container {
    padding: 20px;
  }
  .message {
    margin-bottom: 20px;
    left: 0;
    position: relative;
    display: block;
    .main {
      display: flex;
      align-items: flex-start;
    }
    .time {
      margin: 10px 0;
      text-align: center;
      .system > span {
        padding: 4px 9px;
        text-align: left;
      }
    }
    .text {
      display: inline-block;
      position: relative;
      padding: 10px 20px;
      max-width: 450px;
      min-height: 60px;
      line-height: 24px;
      font-size: 24px;
      text-align: left;
      word-break: break-all;
      background-color: #fff;
      color: #2d2d2d;
      border-radius: 10px;
      box-shadow: 0px 1px 7px -5px #000;
      &::before {
        content: " ";
        position: absolute;
        top: 9px;
        right: 100%;
        border: 12px solid transparent;
        border-right-color: #fff;
      }
    }
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 10px;
      margin: 0 26px 0 0;
      background: #fff;
    }
    .self {
      flex-direction: row-reverse;
      .avatar {
        margin: 0 0 0 26px;
      }
      .text {
        background-color: #89f275;
        &::before {
          right: inherit;
          left: 100%;
          border-right-color: transparent;
          border-left-color: #89f275;
        }
      }
    }
    .image {
      max-width: 200;
    }
  }
}
.an-move-left {
  left: 0;
  animation: moveLeft 0.7s ease;
  -webkit-animation: moveLeft 0.7s ease;
}
.an-move-right {
  left: 0;
  animation: moveRight 0.7s ease;
  -webkit-animation: moveRight 0.7s ease;
}
.bgnone {
  background: none;
}
@keyframes moveRight {
  0% {
    left: -20px;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}

@-webkit-keyframes moveRight {
  0% {
    left: -20px;
    opacity: 0;
  }
  100% {
    left: 0px;
    opacity: 1;
  }
}
@keyframes moveLeft {
  0% {
    left: 20px;
    opacity: 0;
  }
  100% {
    left: 0px;
    opacity: 1;
  }
}

@-webkit-keyframes moveLeft {
  0% {
    left: 20px;
    opacity: 0;
  }
  100% {
    left: 0px;
    opacity: 1;
  }
}

@media (max-width: 367px) {
  .fzDInfo {
    width: 82%;
  }
}
</style>
