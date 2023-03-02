import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout";
export const slideBar = [
  {
    path: "/home",
    name: "/home",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Home/Home.vue"),
    meta: { title: "首页", icon: "home" },
  },
  {
    path: "Article",
    name: "Article",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Article/Article.vue"),
    meta: { title: "文章", icon: "Article" },
  },
  {
    path: "User",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/User/User.vue"),
    meta: { title: "账号管理", icon: "dashboard" },
  },
  {
    path: "setting",
    name: "setting",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/System/System.vue"),
    meta: { title: "系统管理", icon: "dashboard" },
  },
  {
    path: "HomePage",
    name: "HomePage",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/HomePage/HomePage.vue"
      ),
    meta: { title: "博主页", icon: "dashboard" },
  },
  {
    path: "MessageWall",
    name: "MessageWall",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/MessageWall/MessageWall.vue"
      ),
    meta: { title: "留言墙", icon: "dashboard" },
  },
];
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/logon",
    component: () => import("@/views/login/logon"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path: "/index",
    name: "",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Index"),
    meta: { title: "首页", icon: "dashboard" },
  },
  {
    path: "/",
    component: Layout,
    meta: { icon: "index", affix: true },
    redirect: "/index",
    children: slideBar,
  },
  { path: "/:catchAll(.*)", redirect: "/404", hidden: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
