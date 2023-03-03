<template>
  <div>
    <h2>用户管理</h2>
    <el-table :data="data" border stripe>
      <el-table-column prop="name" label="用户名" />
      <el-table-column prop="password" label="密码" />
      <el-table-column label="操作" width="80">
        <el-button type="danger" size="mini" @click="">注销</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const data = [
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
  { name: '张三', password: '123' },
]
</script>

<style lang="scss" scoped></style>