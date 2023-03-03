<template>
  <div class="comment_container">
    <el-input v-model="input2" placeholder="发表你的意见">
      <template #append>
        <span class="send">一键评论</span>
      </template>
    </el-input>
    <div class="comment_list">
      <div class="comment_item" v-for="i in 10" :key="i">
        <div class="avatar">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="comment_text">评论内容评论内容评论内容评论内容评论内容</div>
        <div class="comment_time">2022-10-1</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.comment_container {
  padding: 20px;

  .send {
    cursor: pointer;
  }

  .comment_list {
    border-top: 1px solid $themColor;
    margin-top: 20px;

    .comment_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      padding: 10px;
      margin-bottom: 10px;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: rgba($color: $themColor, $alpha: .5);
      }

      .avatar,
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
        overflow: hidden;
      }

      .comment_text {
        flex: 1;
        margin: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 10px;
      }

      .comment_time {
        width: fit-content;
        font-size: 12px;
        color: #999;
      }
    }
  }
}</style>