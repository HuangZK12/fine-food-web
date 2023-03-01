<template>
  <div class="card_block">
    <el-card :body-style="{ padding: '0px' }" v-for="(o, index) in data" :key="index" class="card">
    <img :src="o.image" class="image" />
    <div style="padding: 14px">
      <span>{{o.text}}</span>
      <div class="bottom">
        <time class="time">{{ currentDate }}</time>
      </div>
    </div>
  </el-card>
  </div>
</template>

<script  setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
const data = [
  {
    text: '用更多金融可能，支持更多美丽人生',
    image: 'https://img1.baidu.com/it/u=2460636557,1725589148&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1677603600&t=fc5ddb2d96914f7377a25b24be43b468'
  },
  {
    text: '愿望清单那么长，生命这么短',
    image: 'https://img1.baidu.com/it/u=3828970943,843093247&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1677603600&t=a41e158fb8e1a6573a2ac507322e4ac7'
  },
  {
    text: '我害怕理财的人，同样的工资和收入，却有着不一样的余额和财富。',
    image: 'https://img1.baidu.com/it/u=3835868153,1771911892&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=440'
  },
  {
    text: '全民理财，“诚”就精彩。',
    image: 'https://img2.baidu.com/it/u=3937918048,3537118324&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
  }
]
</script>

<style>
.card_block {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 400px;
  display: block;
}
</style>