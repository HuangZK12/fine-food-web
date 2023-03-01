<template>
  <el-carousel height="100vh" indicator-position="none" arrow="never" :pause-on-hover="false">
    <el-carousel-item v-for="(item, index) in banners" :key="index">
      <img class="banner" :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
  <div class="mask">
    <div class="mask_text">
      <h1>欢迎您!</h1>
      <h1>这里将是你的味蕾享受!</h1>
      <p>本网站将打造出你对美食的全新认知</p>
      <p>一个味道将让你知道一种美食</p>
    </div>
    <el-button type="primary" size="default" @click="letGo" class="button">进入网站</el-button>

  </div>
</template>
<script setup>
import {  useRouter } from 'vue-router';

const banners = [
  require('@/assets/images/banner1.jpg'),
  require('@/assets/images/banner2.jpg'),
  require('@/assets/images/banner3.jpg'),
  require('@/assets/images/banner4.jpg'),
]
const router = useRouter()
function letGo() {
  router.push('/home')
}
</script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .mask_text {
    color: #FFF;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 12px;
      font-weight: 200;
      line-height: 5px
    }
  }

  .button {
    width: 200px;
    position: absolute;
    bottom: 20vh;
    margin-top: 20px;
  }
}
</style>