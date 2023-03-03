<template>
  <div>
    <h2>文章管理</h2>
    <el-table :data="data" border stripe>
      <el-table-column prop="name" label="文章标题" />
      <el-table-column prop="password" label="发布者" />
      <el-table-column label="操作" width="160">
        <el-button type="primary" size="mini" @click="">推荐</el-button>
        <el-button type="danger" size="mini" @click="">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const data = [
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
  { name: '文章标题文章标题', password: '李二狗' },
]
</script>

<style lang="scss" scoped></style>