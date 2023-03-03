<template>
  <div class="container">
    <div class="handle_bar">
      <el-select v-model="keyword" clearable filterable placeholder="请选择文章分类">
        <el-option label="分类1" value="1" />
        <el-option label="分类2" value="2" />
        <el-option label="分类3" value="3" />
      </el-select>
    </div>
    <div class="list">
      <div class="item" v-for="i in 10">
        <div class="title">文章标题文章标题文章标题</div>
        <div class="name">李二狗</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const keyword = ref(null)
</script>

<style lang="scss" scoped>
.handle_bar {
  padding: 20px 0;
}
.list {
  padding: 20px 0;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
    height: 80px;
    margin-bottom: 10px;
    transition: all 0.3s;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background: rgba($color: $themColor, $alpha: .5);
    }
    .title {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .name {
      margin-left: 20px;
      color: #999;
      font-size: 14px;
    }
  }
}
</style>