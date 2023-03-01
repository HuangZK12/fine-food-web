<template>
  <div class="container" v-loading="loading">
    <!-- <div class="button_bar">
      <el-button type="primary" size="default" @click="handleDialog('添加')">留言</el-button>
    </div> -->
    <el-card shadow="hover" v-for="c in data" :key="c.id" class="card_container">
      <div class="send">
        <el-button type="primary" size="default" @click="handleDialog('回复', c)">回复</el-button>
        <el-button type="danger" size="default" @click="handleDel(c.id)">删除</el-button>

      </div>
      <div class="card">
        <div class="card_top">
          <div class="card_title">{{ c.context }}</div>
          <div class="card_time">留言时间：{{ c.sendTime }}</div>
        </div>
        <div class="card_top" v-if="c.respContext">
          <div class="card_item">回复：{{ c.respContext }}</div>
          <div class="card_time">回复时间：{{ c.respTime }}</div>
        </div>
      </div>
    </el-card>

    <el-dialog :title="title" v-model="visibility" width="30%">
      <el-form :model="formData" ref="formRef" label-width="100px" v-if="title === '添加'">
        <el-form-item label="留言内容" prop="context" :rules="elRule('请输入留言内容')">
          <el-input v-model="formData.context" :autosize="{ minRows: 6, maxRows: 10 }" type="textarea"></el-input>
        </el-form-item>
      </el-form>

      <el-form :model="respData" ref="formRef" label-width="100px" v-else>
        <el-form-item label="回复" prop="respContext" :rules="elRule('请输入回复内容')">
          <el-input v-model="respData.respContext" :autosize="{ minRows: 6, maxRows: 10 }" type="textarea"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button @click="visibility = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script setup>
import { useRequest } from '@/compositions/use_request';
import { get_message, add_message, edit_message,del_message } from '@/api/message';
import { useStore } from 'vuex';
import confirm from '@/utils/message_confirm';
import { useRequestLoading } from '@/compositions/use_request_loading';
import { ref, nextTick } from 'vue';
import { elRule } from '../../utils/utils';
import { ElMessage } from 'element-plus';

const store = useStore()
const { data, loading, refresh } = useRequest(get_message, {
  usePage: false
})
// 删除
async function handleDel(id) {
  await confirm.warning('是否确认删除')
  await useRequestLoading(del_message, {
    params: {
      msgId: id + ','
    },
    handle: "删除留言"
  })
  refresh()
}
// 请求操作
const userInfo = store.getters.userInfo
const formRef = ref(null)
const formData = ref({
  context: null,
})
const respData = ref({
  respContext: null,
  msgId: null
})
const title = ref('')
const visibility = ref(false)
function handleDialog(type, data = false) {

  title.value = type
  visibility.value = true
  if (!data) {
    formData.value = {
      context: null,
    }
  } else {
    respData.value.msgId = data.id
  }
}
function handleSubmit() {
  formRef.value.validate(async valid => {
    if (!valid) return ElMessage.error('请填写所有')
    formData.value.name = userInfo.username
    formData.value.userId = userInfo.id
    if (title.value == '添加') {
      await useRequestLoading(add_message, {
        params: { ...formData.value }
      })
      success()
    } else {
      await useRequestLoading(edit_message, {
        params: respData.value
      })
      success()
    }
  })

}
function success() {
  visibility.value = false
  refresh()
}
</script>

<style lang="scss" scoped>
.card_container {
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  background-color: #FFF;

  &:hover {
    .card {
      filter: blur(6px);
    }

    .send {
      top: 0;
    }
  }

  .send {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($color: #7b7b7b, $alpha: .4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    left: 0;
    top: -100%;
    transition: .3s;
  }
}

.card {
  .card_top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .card_title {
      font-size: 26px;
      font-weight: bold;
    }

    .card_time {
      color: #ccc;
    }
  }

  .card_item {
    margin-bottom: 15px;
  }
}
</style>