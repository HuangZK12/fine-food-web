<template>
  <div class="container">
    <div class="button_bar">
      <el-button type="primary" size="default" @click="handleDialog('添加')">增加</el-button>
    </div>
    <KTable :data="data" v-loading="loading">
      <el-table-column prop="id" label="id" width="80" fixed="left" />
      <el-table-column prop="officeName" label="路径" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="parentId" label="父级id" />
      <el-table-column label="操作" width="180" fixed="right">
        <template v-slot="{ row }">
          <el-button type="primary" size="mini" @click="handleDialog('编辑', row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDel(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </KTable>
    <el-dialog :title="title" v-model="visibility" width="30%">
      <el-form :model="formData" ref="formRef" label-width="100px">
        <el-form-item label="菜单名称" prop="name" :rules="elRule('请输入菜单名称')">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="路径" prop="path" :rules="elRule('请输入菜单名称')">
          <el-input v-model="formData.path"></el-input>
        </el-form-item>
        <el-form-item label="可见范围" prop="userType" :rules="elRule('请输入可见范围')">
          <el-radio-group v-model="formData.userType">
            <el-radio label="0">用户</el-radio>
            <el-radio label="1">管理员</el-radio>
            <el-radio label="all">所有</el-radio>
          </el-radio-group>

        </el-form-item>
        <el-form-item label="父级id" prop="parentId" :rules="elRule('请输入父级id')">
          <el-input v-model="formData.parentId" :disabled="!!formData.id"></el-input>
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
import { get_menu, del_menu, edit_menu, add_menu } from '@/api/menu';
import { useStore } from 'vuex';
import confirm from '@/utils/message_confirm';
import { useRequestLoading } from '@/compositions/use_request_loading';
import { ref, nextTick } from 'vue';
import { elRule } from '../../utils/utils';
import { ElMessage } from 'element-plus';

const store = useStore()
const { data, loading, refresh } = useRequest(get_menu, {
  params: {
    userId: store.getters.userInfo.id
  },
  usePage: false
})

// 删除
async function handleDel(id) {
  await confirm.warning('是否确认删除')
  await useRequestLoading(del_menu, {
    params: {
      menuId: id
    },
    handle: "删除用户"
  })
  refresh()
}
// 请求操作
const formRef = ref(null)
const formData = ref({
  parentId: null,
  name: null,
  userType: null,
  path: null
})
const title = ref('')
const visibility = ref(false)
function handleDialog(type, data = false) {

  title.value = type
  visibility.value = true
  if (!data) {
    formData.value = {
      parentId: null,
      name: null,
      userType: null,
      path: null
    }
  } else {
    formData.value = Object.assign({}, data)
  }
}
function handleSubmit() {
  formRef.value.validate(async valid => {
    if (!valid) return ElMessage.error('请填写所有')
    if (title.value == '添加') {
      await useRequestLoading(add_menu, {
        params: formData.value
      })
      success()
    } else {
      await useRequestLoading(edit_menu, {
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