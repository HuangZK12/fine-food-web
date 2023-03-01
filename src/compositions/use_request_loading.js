import { ElLoading , ElMessage } from "element-plus";

export const useRequestLoading = (api, option = {}) => {
  return new Promise((resolve, reject) => {
    const loading = ElLoading .service();
    const {
      handle = "操作",
      success = null,
      finish = null,
      error = null,
      tip = true,
      params = {},
    } = option;
    api(params)
      .then((res) => {
        success && success(res);
        resolve(res);
        tip && ElMessage.success(`${handle}成功！`);
      })
      .finally(() => {
        loading.close();
        finish && finish();
      })
      .catch((err) => {
        error && error(err);
        reject(err);
        tip && ElMessage.error(`${handle}失败！`);
      });
  });
};
