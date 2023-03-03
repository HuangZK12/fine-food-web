<template>
  <div class="menu_container">
    <div class="logo">
      <img class="logo" src="@/assets/logo.png" alt="">
      <!-- <h2>美食博客</h2> -->
    </div>
    <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">更多文章</el-menu-item>
      <el-menu-item index="2">发布文章</el-menu-item>
      <el-menu-item index="2">我的</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const activeIndex = ref('1')
</script>

<style lang="scss" scoped>
.menu_container {
  height: 40px;
  padding: 10px 20px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu {
    flex: 1;
    display: flex;
    justify-content: end;
  }

  .logo {
    height: 100%;
    object-fit: cover;
    display: flex;
    align-items: center;

    h2 {
      margin-left: 10px;
    }
  }
}
</style>