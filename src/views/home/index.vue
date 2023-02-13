<template>
  <div class="home_wrap">
    <div class="header">
      <div class="avatar" @click="handleOpenSlideBar">
        <img src="" alt="" v-img />
      </div>
      <div class="tabs">
        <div
          v-for="item in tabsList"
          :key="item.value"
          class="item"
          :class="{ active: item.value === currentTab }"
          @click="handleToggleTab(item)"
        >
          {{ item.text }}
        </div>
      </div>
      <div class="setting">
        <router-link to="/status">
          <svg-icon class="icon" name="setting" />
        </router-link>
      </div>
    </div>
    <div class="search">
      <van-search v-model="keyCode" placeholder="搜索客户昵称" />
    </div>
    <div class="user_list">
      <template v-for="i in 20" :key="i">
        <user-item ref="userItem" />
      </template>
    </div>
    <mine ref="mine" />
  </div>
</template>

<script>
import { Search } from 'vant'
import userItem from './components/userItem.vue'
import mine from './components/mine.vue'

export default {
  components: {
    mine,
    userItem,
    [Search.name]: Search
  },
  data() {
    return {
      keyCode: '',
      currentTab: 'online',
      tabsList: [
        {
          text: '服务中',
          value: 'online'
        },
        {
          text: '已结束',
          value: 'offline'
        }
      ]
    }
  },
  methods: {
    handleToggleTab(item) {
      this.currentTab = item.value
    },
    handleOpenSlideBar() {
      this.$refs.mine.show()
    }
  }
}
</script>

<style lang="scss" scoped>
.home_wrap {
  height: 100vh;
  overflow: hidden;
  .header {
    background: #0071c4;
    padding: 14px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      position: relative;
      img {
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
      &::after {
        content: "";
        width: 14px;
        height: 14px;
        background: #1bff01;
        border-radius: 50%;
        position: absolute;
        bottom: -3px;
        right: -3px;
      }
    }
    .tabs {
      display: flex;
      flex-shrink: 0;
      border-radius: 10px;
      overflow: hidden;
      font-size: 28px;
      height: 60px;
      color: #fff;
      border: 1px solid #fff;
      .item {
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        transition: all 0.4s;
        &.active {
          background: #fff;
          color: #0071c4;
        }
      }
    }
    .setting {
      line-height: 22px;
      .icon {
        font-size: 44px;
        color: #fff;
      }
    }
  }
  .search {
    padding: 11px 20px;
    .van-search {
      height: 58px;
      font-size: 22px;
      font-weight: 400;
      background: #f2f2f2;
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      ::v-deep .van-search__content {
        background: none;
      }
      ::v-deep .van-icon-search {
        color: #7d7d7d;
        font-size: 32px;
        margin-right: 10px;
      }
    }
  }
  .user_list {
    overflow: auto;
    height: calc(100vh - 176px);
  }
}
</style>
