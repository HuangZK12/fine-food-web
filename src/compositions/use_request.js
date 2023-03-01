import { reactive, ref } from "vue";
/**
 * 封装请求参数
 */

export const useRequest = (api, options = {}) => {
  if (typeof api !== "function")
    throw new Error("首个参数需要使用基于axios封装的请求函数");
  // options 参数
  const {
    params = {},
    pageNo = 1, // 参数:pageNo,默认1
    pageSize = 10, // 参数:pageSize,默认10
    usePage = true, // 参数:usePage,是否参数带页码
    header = {}, // 请求头额外参数,默认{}
    success = null, // 请求成功的回调,回调参数:请求成功的数据
    error = null, // 请求失败的回调,回调参数:请求失败的数据
    finish = null, // 请求结束的回调,回调参数:请求结束的数据
    implement = true, // 立即执行，则自动调用接口
  } = options;
  // 分页数据
  const page = reactive({
    pageNo: pageNo,
    pageSize: pageSize,
  });
  // total总数
  const total = ref(0);
  // 是否在加载
  const loading = ref(false);
  // 请求到的数据
  const data = ref([]);
  // 备份初始参数
  const _PARAMS_ = Object.assign({}, params);
  // api请求处理
  const handleFetch = (query = {}) => {
    // 使用分页时候的处理
    const apiParams = usePage
      ? { ...params, ...query, ...page }
      : { ...params, ...query };

    loading.value = true;
    return new Promise((resolve, reject) => {
      api(apiParams, header)
        .then((res) => {
          data.value = res;
          total.value = res.total;
          success && success(res);
          resolve(res);
        })
        .catch((err) => {
          error && error(err);
          reject(err);
        })
        .finally((f) => {
          finish && finish(f);
          loading.value = false;
        });
    });
  };
  if (implement) {
    handleFetch();
  }

  // 页码重置搜索
  const search = () => {
    page.pageNo = 1;
    handleFetch();
  };

  // 重置搜索
  const reset = () => {
    resetVal(params, _PARAMS_);
    search();
  };
  return {
    data,
    page,
    total,
    loading,
    refresh: handleFetch, // 先叫这个名字，后面我要改！！！！
    search,
    reset,
  };
};

// 清除参数
const resetVal = (selfProps, backups) => {
  if (typeof selfProps === "object") {
    Object.keys(backups).forEach((p) => {
      if (Object.prototype.toString.call(backups[p]) === "[Object Object]") {
        resetVal(selfProps[p], backups[p]);
      } else {
        selfProps[p] = backups[p];
      }
    });
  } else {
    selfProps = null;
  }
};
