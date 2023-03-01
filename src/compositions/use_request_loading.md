# fetch-loading函数说明

防抖辅助函数，适用于请求操作

```js
useRequestLoading(api, params, options)
```
## 参数
| 属性    | 类型    | 说明           |
| ------- | ------- | -------------- |
| api     | promise | 封装得请求函数 |
| params  | any     | 请求函数参数   |
| options | Object  | 配置           |

## options
| 属性    | 类型     | 默认值 | 说明                   |
| ------- | -------- | ------ | ---------------------- |
| handle  | String   | 操作   | 提示操作语（可做备注） |
| tip     | Boolean  | true   | 是否显示提示           |
| success | Function | --     | 请求成功回调           |
| error   | Function | --     | 请求失败回调           |
| finish  | Function | --     | 请求结束回调           |