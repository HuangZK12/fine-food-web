import { Message, MessageBox } from 'element-ui'
import { ref } from 'vue'

/**
 * desc:饿了么表格选项mixin
 * @selection-change="handleSelection"
 */

export default () => {
  let tableSelectionData = ref([])

  const handleSelection = (col) => {
    tableSelectionData.value = col
  }

  const handleCb = (cb, msgOp = {}) => {
    const {
      min = 1,
      max = null,
      condition = [],
      conditionTips = [],
      fail = null
    } = msgOp
    if (tableSelectionData.value.length < +min)
      return Message.warning(`请至少选择${min}项！`)
    if (max && tableSelectionData.value.length > +max)
      return Message.warning(`最多只能选择${min}项！`)
    if (!!condition.length) {
      try {
        for (let c = 0; c < condition.length; c++) {
          const ev = '(item,index,arr)=>' + condition[c]
          const hasCondition = tableSelectionData.value.filter(
            (item, index, arr) => eval(`${ev}`)(item, index, arr)
          )
          if (!!hasCondition.length) {
            fail && fail(hasCondition)
            return Message.error(
              conditionTips[c] || '选择内容中有不符合条件的选项!'
            )
          }
        }
      } catch (err) {
        console.warn(err)
      }
    }
    const {
      title = '提示',
      msg = '该操作不可逆，是否继续操作',
      type = 'warning',
      tips = true
    } = msgOp
    if (tips) {
      MessageBox.confirm(msg, title, {
        type
      })
        .then(() => {
          const ids = tableSelectionData.value.map((item) => item.id).join(',')
          cb && cb(tableSelectionData, ids)
        })
        .catch(() => {
          Message.info('已取消操作!')
        })
    } else {
      const ids = tableSelectionData.value.map((item) => item.id).join(',')
      cb && cb(tableSelectionData, ids)
    }
  }

  return {
    tableSelectionData,
    handleSelection,
    handleCb
  }
}
