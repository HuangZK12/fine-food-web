<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12" :offset="0">
      <User />
      </el-col>
      <el-col :span="12" :offset="0">
      <Article />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Article from './Article.vue';
import User from './User.vue';


</script>

<style lang="scss" scoped>
.el-col {
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba($color: $themColor, $alpha: .5);
}
</style>