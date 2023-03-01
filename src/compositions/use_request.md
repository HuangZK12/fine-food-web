# useRequest 函数说明

<!--
 * @Author: hzk
 * @desc: api请求函数
-->

适用于表格渲染与操作

```js
const { data, loading, total, page, search, reset, handleFetch } = useRequest(
  fetch,
  {
    params: { keyword }
  }
)
```

## 数据

- data 响应式数组，用于渲染表格
- loading
- total 总数
- page 对象，包含 pageNo 和 pageSize

## 函数

- search 重置页码第一页，带 params 搜索，直接用于 search-button 组件 search 方法
- reset 清除所有的 params 进行搜索。如果有不需要清清除的不适用
- handleFetch 请求方法

## 参数

- fetch 请求方法
- params = {}, 参数集合,不需要页码
- pageNo = 1, 参数:pageNo,默认 1
- pageSize = 10, 参数:pageSize,默认 10
- usePage = true, 参数:usePage,是否参数带页码
- header = {}, 请求头额外参数,默认{}
- success = null, 请求成功的回调,回调参数:请求成功的数据
- error = null, 请求失败的回调,回调参数:请求失败的数据
- finish = null, 请求结束的回调,回调参数:请求结束的数据
- implement = true, 立即执行，则自动调用接口
