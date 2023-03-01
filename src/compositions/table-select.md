# table-select 函数说明

适用于饿了么表格选择与操作

```js
import tableSelect from '@/compositions/table-select';
const { handleSelection, handleCb,tableSelectionData } = tableSelect()

<el-table @selection-change="handleSelection"></el-table>

<el-button @click="del">删除</el-button>

const del = () => {
	console.log(tableSelectionData.value)
	handleCb(res => {
		console.log(del, '++ del ++');
	},{
		...options,
		condition:['item=>item.state !== 1'],
		conditionTips:["选择内容中有不符合条件的选项"]
	})
}
```

## options

| 属性          | 默认值                         | 类型             | 备注                                 |
| ------------- | ------------------------------ | ---------------- | ------------------------------------ |
| msg           | "该操作不可逆，是否继续操作"   | String           | 提示文字                             |
| title         | "提示"                         | String           | 提示头部文字                         |
| type          | "warning"                      | String           | 饿了么提示类型                       |
| tips          | true                           | Boolean          | 是否提示(确认提示)                   |
| min           | 1                              | Number \| String | 最少选择项目                         |
| max           | null                           | Number \| String | 最多选择项目                         |
| max           | null                           | Number \| String | 最多选择项目                         |
| condition     | null                           | Array            | 需要过滤的条件                       |
| conditionTips | "选择内容中有不符合条件的选项" | Array            | 条件不通过时的提示                   |
| fail          | null                           | Function         | 条件不通过时的回调，参数时通过的数据 |

## methods

| 属性            | 参数  | 备注                                        |
| --------------- | ----- | ------------------------------------------- |
| handleSelection | Array | 已选数组,用于饿了么表单选择函数             |
| handleCb        | Array | 已选数组,用于操作删除或者需要选择提示的操作 |
