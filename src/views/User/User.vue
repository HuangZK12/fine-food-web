<template>
  <div class="container">
    <div class="button_bar">
      <el-button type="primary" size="default" @click="handleDialog('添加')">增加</el-button>
    </div>
    <KTable :data="data" v-loading="loading">
      <el-table-column prop="id" label="id" width="80" fixed="left" />
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="password" label="密码" />
      <el-table-column prop="userType" label="角色类型">
        <template v-slot="{ row }">
          {{ row.userType == 2 ? '普通用户' : '管理员' }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" fixed="right">
        <template v-slot="{ row }">
          <el-button type="primary" size="mini" @click="handleDialog('编辑', row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDel(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </KTable>

    <el-dialog :title="title" v-model="visibility" width="30%">
      <el-form :model="formData" ref="formRef" label-width="100px">
        <el-form-item label="账号" prop="username" :rules="elRule('请输入账号')">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="elRule('请输入密码')">
          <el-input v-model="formData.password"></el-input>
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
import KTable from '@/components/KTable';
import { useRequest } from '@/compositions/use_request';
import { get_user, del_user, edit_user, add_user } from '@/api/user';
import { useStore } from 'vuex';
import confirm from '@/utils/message_confirm';
import { useRequestLoading } from '@/compositions/use_request_loading';
import { ref, nextTick } from 'vue';
import { elRule } from '../../utils/utils';
import { ElMessage } from 'element-plus';

const store = useStore()
const { data, loading, refresh } = useRequest(get_user, {
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
const formRef = ref(null)
const formData = ref({
  username: null,
  password: null,
})
const title = ref('')
const visibility = ref(false)
function handleDialog(type, data = false) {

  title.value = type
  visibility.value = true
  if (!data) {
    formData.value = {
      username: null,
      password: null,
    }
    formData.value = Object.assign({}, data)
  }
}
function handleSubmit() {
  formRef.value.validate(async valid => {
    if (!valid) return ElMessage.error('请填写所有')
    if (title.value == '添加') {
      await useRequestLoading(add_user, {
        params: formData.value
      })
      success()
    } else {
      await useRequestLoading(edit_user, {
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

<style lang="scss" scoped></style>