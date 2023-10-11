// 导入react
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// 配置路由
import { HashRouter, BrowserRouter } from "react-router-dom";
// 配置微前端路径
import "./public-path";

// css初始化
import "normalize.css";
import "./assets/css/index.less";
// 导入组件
import App from "./App";

// 导入antd
import { ConfigProvider, message } from "antd";
// import "./base-ui/message/index";
// 设置reduxjs/toolkit
import { Provider } from "react-redux";
import store from "./store";
// 设置root 离开时卸载
let root = null;

// render渲染函数
function render(props) {
  // 渲染容器
  const container = props?.container;
  // 设置message的容器
  message.config({
    maxCount: 1,
    getContainer: () => container?.querySelector("#root") || document.body, //父组件元素ID 找不到时 挂载到body上
  });

  root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );
  root.render(
    <React.StrictMode>
      <ConfigProvider
        prefixCls="yourPrefix"
        getPopupContainer={() =>
          container
            ? container.querySelector("#root")
            : document.getElementById("root")
        }
      >
        <Suspense fallback="loading">
          <HashRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </HashRouter>
        </Suspense>
      </ConfigProvider>
    </React.StrictMode>
  );
}

// 如果不是微前端环境，直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 导出生命周期
export async function bootstrap() {}

export async function mount(props) {
  render(props);
}

export async function unmount(props) {
  root.unmount();
}
