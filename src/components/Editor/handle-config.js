import plugins from "./plugins";
import toolbar from "./toolbar";

export const handleConfig = (that) => {
  // 初始化前执行
  const setup = (editor) => {
    editor.on("FullscreenStateChanged", (e) => {
      that.fullscreen = e.state;
    });
  };
  // 初始化后回调
  const initInstanceCallback = (editor) => {
    // 初始化后回调
    if (that.value) {
      editor.setContent(that.value);
    }
    that.hasInit = true;
    editor.on("NodeChange Change KeyUp SetContent", () => {
      if (editor.getContent() !== "") {
        // 初始化有非空值再赋值
        that.hasChange = true;
      }
      that.$emit("input", editor.getContent());
    });
  };

  // // 自定义文件回调
  // const filePickerCallback = (callback, value, meta) => {
  //   const fileType = '.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4'
  //   const input = document.createElement('input')
  //   input.setAttribute('type', 'file')
  //   input.setAttribute('accept', fileType)
  //   input.click()
  //   input.onchange = async function() {
  //     const file = this.files[0]
  //     const params = new FormData()
  //     params.append('file', file)
  //     const res = await api.general.uploadFile(params)
  //     if (res.errcode === 0 && res.data.length) {
  //       callback(res.data[0]['filePath'])
  //     } else {
  //       callback()
  //     }
  //   }
  // }

  // 配置
  const config = {
    selector: `#${that.tinymceId}`, // id
    language: "zh_CN", // 语言
    height: 360, // 默认高度
    body_class: "panel-body ", // 指定类名
    object_resizing: false, // 调整大小控件开关
    toolbar, // 工具栏
    plugins, // 插件
    menubar: "", // 一级菜单
    end_container_on_empty_block: true, // 如在空的内部块元素中按下Enter键 则可拆分当前容器块元素
    elementpath: false, // 隐藏底栏的元素路径
    link_title: false,
    branding: false, // 隐藏右下角技术支持
    nonbreaking_force_tab: true, // tab键
    convert_urls: false, // 自动转换URL
    fontsize_formats: "12px 14px 16px 18px 20px 24px 36px 48px",
    font_formats:
      "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Arial='Arial';",
    setup, // 初始化前执行,
    init_instance_callback: initInstanceCallback, // 初始化后回调
    // images_upload_handler: imagesUploadHandler, // 自定义图片上传
    // file_picker_types: "file image media", // 文件上传类型
    // file_picker_callback: filePickerCallback, // 自定义文件回调
  };

  for (const key in that.config) {
    config[key] = that.config[key];
  }
  return config;
};
