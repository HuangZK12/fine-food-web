/**
 * desc 工具函数
 * author hzk
 */

/**
 *
 * @param {String} tip 提示项
 * @param {Object} options 提示配置
 * @returns element 表单规则
 * desc el-form-item 增加prop属性，rulers执行改函数
 */

let validatePhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error("手机号不能为空！"));
  } else if (!/^1[3456789]\d{9}$/.test(value)) {
    //使用正则表达式进行验证手机号码
    callback(new Error("手机格式号不正确！"));
  } else {
    callback();
  }
};

export function elRule(tip = "请输入该项", options = {}) {
  const { type = null, tips = null, max, min, trigger = "blur" } = options;
  const rules = [
    {
      required: true,
      message: tip,
      trigger,
    },
  ];
  if (min && type !== "phone") {
    rules.push({
      trigger: "blur",
      min,
      message: `最少输入${min}个字符`,
    });
  }
  if (max && type !== "phone") {
    rules.push({
      trigger: "blur",
      max,
      message: `最多输入${max}个字符`,
    });
  }

  const whiteType = ["date", "array"];
  if (whiteType.includes(type) && type) {
    rules[0].type = type;
  } else if (type == "phone") {
    rules.push({
      validator: validatePhone,
      trigger: "blur",
    });
  } else if (type == "array") {
    rules.push({
      type: "array",
      required: true,
      message: "请至少选择一个",
      trigger: "change",
    });
  }
  return rules;
}

/**
 * 日期格式化
 * @param {*} date
 * @param {*} fmt
 */
export const dateFormat = (date, fmt) => {
  date = new Date(date);
  var a = ["日", "一", "二", "三", "四", "五", "六"];
  var o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
    w: date.getDay(), // 周
    W: a[date.getDay()], // 大写周
    T: "T",
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

/**
 * @param {length} id长度
 * @returns 随机id
 */

export const uuid = (length = 6) =>
  (Math.random() + Math.random()).toString(16).substring(2, length + 2);
