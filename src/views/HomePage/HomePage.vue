<template>
  <div class="container">
    <div class="user_title">
      <h1>李二狗</h1>
    </div>
    <div class="content">
      <div class="name">
        文章
      </div>
      <div class="list">
        <div class="item" v-for="i in 10" :key="i">
          <img src="@/assets/logo.png" alt="">
          <div class="text">
            <div class="title">标题标题标题标题</div>
            <div class="desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
          </div>
          <div class="time">2020-10-11</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .user_title {
    padding: 1px 20px;
    border-bottom: 6px solid $themColor;
    margin-bottom: 20px;
  }
.content {
  display: flex;
  height: 100%;
  align-items: center;



  .name {
    width: 100px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list {
    border: 2px solid $themColor;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-left: 10px;
    border-radius: 6px;
    flex: 1;
    overflow-y: auto;
    padding: 0 10px;

    .item {
      display: flex;
      align-items: center;
      height: 90px;
      width: 100%;
      padding: 20px 10px;
      transition: .25s;
      &:hover {
        transform: scale(1.01);
        box-shadow: 1px 1px 10px 0 rgba($themColor,.5);
      }

      img {
        height: 100%;
      }

      .text {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        flex: 1;

        .title {
          font-size: 16px;
          font-weight: 600;
        }

        .desc {
          font-size: 12px;
          color: #999;
        }
      }

      .time {
        width: 100px;
        font-size: 14px;
        color: #999;
      }

    }
  }
}</style>