<template>
  <div class="container" v-loading="loading">
    <div class="button_bar">
      <el-button type="primary" size="default" @click="handleDialog('添加')">报账</el-button>
    </div>
    <el-card shadow="hover" v-for="c in data" :key="c.id" class="card_container" @click="handleDialog('编辑', c)">
      <div class="card">
        <div class="card_top">
          <div class="card_title">{{ c.billType }}</div>
          <div class="card_time">{{ c.billTime }}</div>
        </div>
        <div class="card_item">报账金额：{{ c.billSum }}</div>
        <div class="card_item">报账人：{{ c.personName }}</div>
        <div class="card_item">报账手机：{{ c.phone }}</div>
        <div>审核状态：{{ c.auditRemark || '未知' }}</div>
      </div>
    </el-card>

    <el-dialog :title="title" v-model="visibility" width="30%">
      <el-form :model="formData" ref="formRef" label-width="100px">
        <el-form-item label="报账条目" prop="type" :rules="elRule('请输入账号')">
          <el-input v-model="formData.type"></el-input>
        </el-form-item>
        <el-form-item label="金额" prop="sum" :rules="elRule('请输入金额')">
          <el-input v-model="formData.sum"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone" :rules="elRule('请输入手机')">
          <el-input v-model="formData.phone"></el-input>
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
import { get_bill, add_bill, edit_bill } from '@/api/bill';
import { useStore } from 'vuex';
import confirm from '@/utils/message_confirm';
import { useRequestLoading } from '@/compositions/use_request_loading';
import { ref, nextTick } from 'vue';
import { elRule } from '../../utils/utils';
import { ElMessage } from 'element-plus';

const store = useStore()
const { data, loading, refresh } = useRequest(get_bill, {
  usePage: false
})
// 删除
async function handleDel(id) {
  await confirm.warning('是否确认删除')
  await useRequestLoading(del_user, {
    params: {
      userId: id
    },
    handle: "删除菜单"
  })
  refresh()
}
// 请求操作
const userInfo = store.getters.userInfo
const formRef = ref(null)
const formData = ref({
  type: null,
  sum: null,
  phone: null,
})
const title = ref('')
const visibility = ref(false)
function handleDialog(type, data = false) {

  title.value = type
  visibility.value = true
  if (!data) {
    formData.value = {
      type: null,
      sum: null,
      phone: null
    }
  } else {
    formData.value = Object.assign({}, {
      id: data.id,
      type: data.billType,
      sum: data.billSum,
      phone: data.phone,
      personName: null
    })
  }
}
function handleSubmit() {
  formRef.value.validate(async valid => {
    if (!valid) return ElMessage.error('请填写所有')
    formData.value.name = userInfo.username
    formData.value.userId = userInfo.id
    if (title.value == '添加') {
      await useRequestLoading(add_bill, {
        params: { ...formData.value }
      })
      success()
    } else {
      formData.value.billSum = formData.value.sum
      formData.value.billType = formData.value.type
      formData.value.personName = userInfo.username

      await useRequestLoading(edit_bill, {
        params: formData.value
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