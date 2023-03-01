import { get_area } from '@/api/system-user'
import { reactive, ref } from 'vue'
// 筛选条件composition
export default () => {
  // 参数
  const params = reactive({
    keyword: '',
    category: '',
    examineStatus: '',
    reportingStatus: '',
    date: ''
  })
  return {
    params
  }
}

// 品牌主类列表
export const brandTypeOptions = Object.freeze([
  {
    label: '不选择',
    keyword: null,
    value: 1
  },
  {
    label: '党的建设',
    keyword: '党的建设',
    value: 1
  },
  {
    label: '服务管理',
    keyword: '服务管理',
    value: 2
  },
  {
    label: '发挥作用',
    keyword: '发挥作用',
    value: 3
  },
  {
    label: '自身建设',
    keyword: '自身建设',
    value: 4
  }
])
// 审核状态列表
export const examineStatusOptions = Object.freeze([
  {
    label: '待审核',
    value: 130
  },
  {
    label: '审核通过',
    value: 150
  },
  {
    label: '审核未通过',
    value: 140
  }
])
// 上报状态列表
export const reportingStatusOptions = Object.freeze([
  {
    label: '已上报',
    value: 120
  },
  {
    label: '未上报',
    value: 110
  }
])
// 分类
export const classification = Object.freeze({
  党的建设: [],
  服务管理: [
    { label: '学习活动', value: 1 },
    { label: '健康颐养', value: 2 },
    { label: '关爱帮扶', value: 3 },
    { label: '智慧助老', value: 4 }
  ],
  发挥作用: [
    { label: '政策宣讲', value: 1 },
    { label: '社会治理', value: 2 },
    { label: '志愿服务', value: 3 }
  ],
  自身建设: []
})
// 地级市
export const areaData = Object.freeze([
  {
    value: null,
    parentId: '0',
    parentIds: '0',
    label: '不选择',
    keyword: null,
    sort: 19,
    code: null,
    type: '2',
    remarks: null
  },
  {
    value: '440000',
    parentId: '0',
    parentIds: '0',
    label: '广东省',
    keyword: '广东省',
    sort: 19,
    code: '440000',
    type: '2',
    remarks: null
  },
  {
    value: '440100',
    parentId: '440000',
    parentIds: '0,440000',
    label: '广州市',
    keyword: '广州市',
    sort: 1,
    code: '440100',
    type: '2',
    remarks: null
  },
  {
    value: '440200',
    parentId: '440000',
    parentIds: '0,440000',
    label: '韶关市',
    keyword: '韶关市',
    sort: 6,
    code: '440200',
    type: '2',
    remarks: null
  },
  {
    value: '440300',
    parentId: '440000',
    parentIds: '0,440000',
    label: '深圳市',
    keyword: '深圳市',
    sort: 2,
    code: '440300',
    type: '2',
    remarks: null
  },
  {
    value: '440400',
    parentId: '440000',
    parentIds: '0,440000',
    label: '珠海市',
    keyword: '珠海市',
    sort: 3,
    code: '440400',
    type: '2',
    remarks: null
  },
  {
    value: '440500',
    parentId: '440000',
    parentIds: '0,440000',
    label: '汕头市',
    keyword: '汕头市',
    sort: 4,
    code: '440500',
    type: '2',
    remarks: null
  },
  {
    value: '440600',
    parentId: '440000',
    parentIds: '0,440000',
    label: '佛山市',
    keyword: '佛山市',
    sort: 5,
    code: '440600',
    type: '2',
    remarks: null
  },
  {
    value: '440700',
    parentId: '440000',
    parentIds: '0,440000',
    label: '江门市',
    keyword: '江门市',
    sort: 13,
    code: '440700',
    type: '2',
    remarks: null
  },
  {
    value: '440800',
    parentId: '440000',
    parentIds: '0,440000',
    label: '湛江市',
    keyword: '湛江市',
    sort: 15,
    code: '440800',
    type: '2',
    remarks: null
  },
  {
    value: '440900',
    parentId: '440000',
    parentIds: '0,440000',
    label: '茂名市',
    keyword: '茂名市',
    sort: 16,
    code: '440900',
    type: '2',
    remarks: null
  },
  {
    value: '441200',
    parentId: '440000',
    parentIds: '0,440000',
    label: '肇庆市',
    keyword: '肇庆市',
    sort: 17,
    code: '441200',
    type: '2',
    remarks: null
  },
  {
    value: '441300',
    parentId: '440000',
    parentIds: '0,440000',
    label: '惠州市',
    keyword: '惠州市',
    sort: 9,
    code: '441300',
    type: '2',
    remarks: null
  },
  {
    value: '441400',
    parentId: '440000',
    parentIds: '0,440000',
    label: '梅州市',
    keyword: '梅州市',
    sort: 8,
    code: '441400',
    type: '2',
    remarks: null
  },
  {
    value: '441500',
    parentId: '440000',
    parentIds: '0,440000',
    label: '汕尾市',
    keyword: '汕尾市',
    sort: 10,
    code: '441500',
    type: '2',
    remarks: null
  },
  {
    value: '441600',
    parentId: '440000',
    parentIds: '0,440000',
    label: '河源市',
    keyword: '河源市',
    sort: 7,
    code: '441600',
    type: '2',
    remarks: null
  },
  {
    value: '441700',
    parentId: '440000',
    parentIds: '0,440000',
    label: '阳江市',
    keyword: '阳江市',
    sort: 14,
    code: '441700',
    type: '2',
    remarks: null
  },
  {
    value: '441800',
    parentId: '440000',
    parentIds: '0,440000',
    label: '清远市',
    keyword: '清远市',
    sort: 18,
    code: '441800',
    type: '2',
    remarks: null
  },
  {
    value: '441900',
    parentId: '440000',
    parentIds: '0,440000',
    label: '东莞市',
    keyword: '东莞市',
    sort: 11,
    code: '441900',
    type: '2',
    remarks: null
  },
  {
    value: '442000',
    parentId: '440000',
    parentIds: '0,440000',
    label: '中山市',
    keyword: '中山市',
    sort: 12,
    code: '442000',
    type: '2',
    remarks: null
  },
  {
    value: '445100',
    parentId: '440000',
    parentIds: '0,440000',
    label: '潮州市',
    keyword: '潮州市',
    sort: 19,
    code: '445100',
    type: '2',
    remarks: null
  },
  {
    value: '445200',
    parentId: '440000',
    parentIds: '0,440000',
    label: '揭阳市',
    keyword: '揭阳市',
    sort: 20,
    code: '445200',
    type: '2',
    remarks: null
  },
  {
    value: '445300',
    parentId: '440000',
    parentIds: '0,440000',
    label: '云浮市',
    keyword: '云浮市',
    sort: 21,
    code: '445300',
    type: '2',
    remarks: null
  }
])
