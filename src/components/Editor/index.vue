<template>
  <div
    :class="{fullscreen:fullscreen}"
    :style="{width:containerWidth}"
    class="tinymce-container"
  >
    <textarea
      :id="tinymceId"
      :placeholder="placeholder"
      class="tinymce-textarea"
    />
  </div>
</template>

<script>
import { handleConfig } from './handle-config'
import load from './dynamicLoadScript'
// import { VUE_APP_PUBLIC_PATH } from '@/config/index.js'

const tinymceCDN = process.env.VUE_APP_PUBLIC_PATH + 'tinymce/tinymce.min.js'

export default {
  name: 'Tinymce',
  props: {
    id: {
      type: String,
      default: function() {
        return ('vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + ''))
      }
    },
    value: {
      type: String,
      default: ''
    },
    config: {
      // 富文本配置 与官方文档一致
      type: Object,
      default: function() {
        return {}
      }
    },
    width: {
      type: [Number, String],
      required: false,
      default: '100%'
    },
    placeholder: {
      type: String,
      default: '请输入...'
    }
  },
  data() {
    return {
      hasChange: false, // 初始值是否非空了
      hasInit: false, // 是否初始化
      tinymceId: this.id,
      fullscreen: false
    }
  },
  computed: {
    containerWidth() {
      const width = this.width
      if (/^[\d]+(\.[\d]+)?$/.test(width)) {
        // matches `100`, `'100'`
        return `${width}px`
      }
      return width
    }
  },
  watch: {
    value(newValue) {
      // 用来初始化富文本值
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() =>
          window.tinymce.get(this.tinymceId).setContent(newValue || ''))
      }
    }
  },
  mounted() {
    this.init()
  },
  activated() {
    if (window.tinymce) {
      this.initTinymce()
    }
  },
  deactivated() {
    this.destroyTinymce()
  },
  destroyed() {
    this.destroyTinymce()
  },
  methods: {
    init() {
      load(tinymceCDN, err => {
        if (err) {
          this.$message.error(err.message)
          return
        }
        this.initTinymce()
      })
    },
    initTinymce() {
      const that = this
      const config = handleConfig(that)
      window.tinymce.init(config)
    },
    destroyTinymce() {
      const tinymce = window.tinymce && window.tinymce.get(this.tinymceId)
      if (this.fullscreen) {
        tinymce.execCommand('mceFullScreen')
      }

      if (tinymce) {
        tinymce.destroy()
      }
    },
    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value)
    },
    getContent() {
      window.tinymce.get(this.tinymceId).getContent()
    },
    getFocus() {
      window.tinymce.get(this.tinymceId).focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.tinymce-container {
  position: relative;
  line-height: normal;
}

.tinymce-container {
  ::v-deep {
    .mce-fullscreen {
      z-index: 10000;
    }
  }
}

.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
</style>
