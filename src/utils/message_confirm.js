/**
 * 二次封装ElMessageBox.confirm
 */

import { ElMessageBox } from "element-plus";

const confirm = {};
const confirmType = Object.freeze({
  error: "error",
  success: "success",
  info: "info",
  warning: "warning",
});

Object.values(confirmType).forEach((type) => {
  confirm[type] = (msg, title = "提示", opt = {}) =>
  ElMessageBox.confirm(msg, title, { type, ...opt });
});

export default confirm;
