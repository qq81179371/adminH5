<template>
  <div class="session_wrap">
    <div class="title">
      <h3>售后服务客服</h3>
    </div>
    <div
      class="item"
      v-for="(item, index) in list"
      :key="index"
      :class="{ active: item.online }"
    >
      <div class="lf">
        <div class="avatar">
          <img src="" alt="" v-img />
        </div>
        <div class="name">
          <h4>
            {{ item.name }}
            <span>【在线】</span>
          </h4>
          <p>允许接入</p>
        </div>
      </div>
      <div class="rg">
        <span>转接</span>
        <svg-icon class="icon" name="tel" />
      </div>
    </div>
    <div class="title">
      <h3>技术服务客服</h3>
    </div>
    <div
      class="item"
      v-for="(item, index) in list"
      :key="index"
      :class="{ active: item.online }"
    >
      <div class="lf">
        <div class="avatar">
          <img src="" alt="" v-img />
        </div>
        <div class="name">
          <h4>
            {{ item.name }}
            <span>【在线】</span>
          </h4>
          <p>允许接入</p>
        </div>
      </div>
      <div class="rg">
        <span>转接</span>
        <svg-icon class="icon" name="tel" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '客服001',
          online: true
        },
        {
          name: '客服001',
          online: true
        },
        {
          name: '客服001',
          online: false
        },
        {
          name: '客服001',
          online: false
        },
        {
          name: '客服001',
          online: true
        },
        {
          name: '客服001',
          online: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.session_wrap {
  min-height: 100vh;
  background: #f2f2f2;
  .title {
    padding: 20px 30px;
    h3 {
      font-weight: 700;
      font-size: 28px;
      color: #2d2d2d;
    }
  }
  .item {
    border-bottom: 1px solid #f2f2f2;
    background: #fff;
    padding: 20px 25px 20px 30px;
    display: flex;
    justify-content: space-between;
    .lf {
      display: flex;
      align-items: center;
      .avatar {
        margin-right: 20px;
        img {
          display: block;
          width: 100px;
          height: 100px;
          border-radius: 10px;
        }
      }
      .name {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h4 {
          font-size: 28px;
          font-weight: 700;
          color: #2d2d2d;
          span {
            font-weight: 400;
            color: #009a24;
          }
        }
        p {
          font-size: 24px;
          color: #7d7d7d;
        }
      }
    }
    .rg {
      display: flex;
      align-items: center;
      span {
        font-size: 28px;
        color: #7d7d7d;
      }
      .icon {
        margin-left: 5px;
        font-size: 28px;
        color: #7d7d7d;
      }
    }
    &.active {
      .lf {
        .name {
          p {
            color: #0071c4;
          }
        }
      }
      .rg {
        span,
        .icon {
          color: #0071c4;
        }
      }
    }
  }
}
</style>
