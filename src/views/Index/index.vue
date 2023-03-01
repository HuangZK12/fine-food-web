<template>
  <div class="app-container">
    <!-- <el-carousel indicator-position="outside" height="600px">
      <el-carousel-item  v-for="(item, index) in url" style="height: 600px;" :key="index">
        <img :src="item" class="image" alt="">
      </el-carousel-item>
    </el-carousel>
    <Block /> -->
  </div>
</template>
<script setup>
import Block from './Block.vue';
const url = ['https://img-qn-3.51miz.com/preview/photo/00/01/58/93/P-1589346-EFD7FE1CO.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/320',
  'https://img-qn-0.51miz.com/preview/photo/00/01/58/10/P-1581058-3FE6BBAA.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/320',
  'https://img-qn-5.51miz.com/preview/photo/00/01/58/38/P-1583817-E251927E.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/320',
  'https://img-qn-1.51miz.com/preview/photo/00/01/58/70/P-1587060-C01C5645O.jpg!/quality/90/unsharp/true/compress/true/format/webp/fh/320'
]
</script>
<style>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>