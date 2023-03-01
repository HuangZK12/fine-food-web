<!--
  describe: 分页组件，主要传 total pageNo pageSize 然后改变时直接使用 pagination 回调函数即可
-->

<template>
  <div
    :class="{'zy-pagination-container-normal' : !small, 'zy-pagination-container-small' : small}"
    class="zy-width-100pc zy-padding-box zy-border-top-1"
  >
    <el-pagination
      v-bind="$attrs"
      :background="background"
      :current-page.sync="currentPage"
      :layout="layout"
      :page-size.sync="_pageSize"
      :page-sizes="pageSizes"
      :pager-count="pagerCount"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      // 总数
      required: true,
      type: Number,
      default: 0
    },
    pageNo: {
      // 页码
      type: Number,
      default: 1
    },
    pageSize: {
      // 页数
      type: Number,
      default: 10
    },
    pageSizes: {
      // 页数选择条数列表
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      // 可选按钮
      type: String,
      default: 'total,prev, pager, next,sizes, jumper'
    },
    background: {
      // 按钮是否有背景
      type: Boolean,
      default: true
    },
    pagerCount: { // 开始折叠数量
      type: Number,
      default: 7
    },
    small: {
      // 是否为小型按钮
      type: Boolean
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.pageNo
      },
      set(val) {
        this.$emit('update:pageNo', val)
      }
    },
    _pageSize: {
      get() {
        return this.pageSize
      },
      set(val) {
        this.$emit('update:pageSize', val)
      }
    }
  },
  methods: {
    /**
     * 换页显示数后 只有在总条数足够支撑到那个页码 才可以触发
     * @param val
     */
    handleSizeChange(val) {
      if ((this.pageNo - 1) * val < this.total) {
        this.$emit('pagination', { pageNo: this.currentPage, pageSize: val })
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { pageNo: val, pageSize: this._pageSize })
    }
  }
}
</script>

<style lang="scss">
@import "./index";
</style>
