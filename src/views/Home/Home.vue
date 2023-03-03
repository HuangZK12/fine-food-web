<template>
  <div class="container">
    <div class="card_container">
      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image" />
        <div style="padding: 14px" class="info">
          <div>姓名</div>
          <div>关于网站的介绍和信息</div>
          <div>随便高点什么</div>
          <div>好东西想写什么就写什么</div>
          <div>好东西想写什么就写什么</div>
          <div>好东西想写什么就写什么</div>
          <div>好东西想写什么就写什么</div>
          <div>好东西想写什么就写什么</div>
          <div>Yummy hamburger</div>
        </div>
      </el-card>
      <el-card :body-style="{ padding: '0px' }" class="card">
        <video src="@/assets/media/video.mp4" autoplay class="video" controls></video>
        <div style="padding: 14px" class="info">
          <div>姓名</div>
          <div>关于网站的介绍和信息</div>
          <div>随便高点什么</div>
          <div>好东西想写什么就写什么</div>
          <div>Yummy hamburger</div>
          <div>姓名</div>
          <div>关于网站的介绍和信息</div>
          <div>随便高点什么</div>
          <div>好东西想写什么就写什么</div>
          <div>Yummy hamburger</div>
          <div>姓名</div>
          <div>关于网站的介绍和信息</div>
          <div>随便高点什么</div>
          <div>好东西想写什么就写什么</div>
          <div>Yummy hamburger</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
  // background: url('~@/assets/images/bg.jpg') no-repeat;
  padding: 0;
  background: url('~@/assets/images/banner2.jpg') no-repeat;
  background-size: cover;

  .card_container {
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    background-color: rgba($color: #000000, $alpha: .4);
    padding: 20px;
    backdrop-filter: blur(10px);
  }
}

.card {
  border-radius: 10px;
  padding: 30px;
  width: 30%;
  height: 80%;

  .info {
    height: 100%;
    color: #999;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .video {
    // height: 90%;
    width: 100%;
  }
}

.image {
  width: 100%;
  height: 100%;
  display: block;
}</style>