// 导入vue
import { createApp } from "vue";
// 导入路由
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";
// 导入组件
import App from "./App.vue";
// 微前端路径
import "./public-path.js";
// 导入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 初始化css
import "normalize.css";
import "@/assets/css/index.css";
// 导入工具函数,改变子应用的弹窗popup的位置
import { redirectPopup } from "./utils";

// 设置pinia
import Pinia from "@/store";

// import { setIsQiankun } from "@/utils/my-style-loader.js";
const { setIsQiankun, isQiankun } = require("@/utils/isQiankun.js");

// 设置root 离开时卸载
let app = null;
let history = null;
let router = null;
let originFn = document.body.appendChild.bind(document.body);

// 渲染函数
function render(props) {
  app = createApp(App);
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/vue" : "/");
  router = createRouter({
    history,
    routes,
  });

  // 路由守卫
  router.beforeEach((to, from, next) => {
    // 如果是微前端环境，且不是子应用的路由，跳转到子应用的路由
    const token = localStorage.getItem("access_token");
    if (window.__POWERED_BY_QIANKUN__) {
      next();
    } else {
      // 判断是否登录
      if (to.path === "/login") {
        next();
      } else {
        if (token) {
          next();
        } else {
          next("/login");
        }
      }
    }
  });

  app.use(router);
  app.use(ElementPlus, { content: "content" });
  app.use(Pinia);

  const container = props?.container;

  // 改变子应用的弹窗popup的位置
  if (window.__POWERED_BY_QIANKUN__) {
    redirectPopup(container);
  }
  app.mount(container ? container.querySelector("#app") : "#app");
}

// 如果不是微前端环境，直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  setIsQiankun(false);
  console.log(isQiankun);
  console.log("不是微前端环境");
  render({});
}

// 导出生命周期函数
export async function bootstrap() {
  console.log("vue app bootstraped");
}

export async function mount(props) {
  // 设置浏览器devtools插件显示
  if (window.__POWERED_BY_QIANKUN__ && process.env.NODE_ENV === "development") {
    // 全局挂载子应用vm
    window.__QIANKUN_SUB_APP_VM__ = this;
  }

  setIsQiankun(props.isQiakun);
  console.log("isQiankun", isQiankun);
  console.log("vue app mount", props);
  render(props);
}

export async function unmount(props) {
  console.log("vue app unmount", props);
  app.unmount();
  history.destroy();
  app = null;
  router = null;
  document.body.appendChild = originFn;
}
