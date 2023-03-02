<template>
  <div class="container">
    <el-form :model="formData" ref="form" >
     <div class="top">
      <el-form-item label="封面">
        <el-button type="primary" size="default" @click="">封面上传</el-button>
      </el-form-item>
      <el-form-item label="标题" class="title">
        <el-input v-model="formData.a"></el-input>
      </el-form-item>
     </div>
      <el-form-item label="内容" >
        <Editor />
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script setup>
import Editor from '@/components/Editor';  
import { ref } from 'vue';

const formData = ref({})
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .title {
    flex: 1;
    margin-left: 20px;
  }
}
</style>