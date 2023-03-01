<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg"
        :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText"
        :collapse-transition="false" mode="vertical">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variabless from '@/styles/variables.scss'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { slideBar } from '@/router/index';
export default {
  components: { SidebarItem, Logo },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const sidebar = computed(() => store.getters.sidebar)
    const routes = computed(() => {
      // return router.options.routes
      const menu = store.getters.menu;
      const rs = slideBar
      console.log('--menu>>', menu);
      console.log('--rs>>', rs);
      const r = menu.map(item => {
        const originR = findOrigin(rs, item.name)
        // console.log('--originR>>', originR);
        return originR || {
          meta: {
            title: item.name,
            icon: 'example'
          },
          path: '/',
          name: '领养',
        }
      })
      return r
    })
    function findOrigin(routers, name) {
      return routers.find(rs_item => {
        if (rs_item?.meta?.title === name) {
          return rs_item
        } else if (rs_item.children) {
          return findOrigin(rs_item.children, name)
        } else {
          return false
        }
      })
    }

    console.log('--routes>>', routes);
    const showLogo = computed(() => store.state.settings.sidebarLogo)
    const variables = computed(() => variabless)
    const isCollapse = computed(() => !sidebar.value.opened)
    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })
    return {
      sidebar,
      routes,
      showLogo,
      variables,
      activeMenu,
      isCollapse
    }
  }
}
</script>
