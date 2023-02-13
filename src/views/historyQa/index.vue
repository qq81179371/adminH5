<template>
  <div class="qa_wrap">
    <div class="item" v-for="item in 10" :key="item">
      <h3>
        <span>2021-01-01</span>
        <span> 15:45 </span>
        <span>反馈</span>
      </h3>
      <p>接待人：XXX客服</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.qa_wrap {
  min-height: 100vh;
  background: #f2f2f2;
  .item {
    background: #fff;
    margin-bottom: 1px;
    padding: 20px 30px 17px;
    h3 {
      font-size: 28px;
      font-weight: 700;
      color: #2d2d2d;
      margin-bottom: 10px;
    }
    p {
      font-size: 24px;
      color: #7d7d7d;
      font-weight: 400;
    }
  }
}
</style>
