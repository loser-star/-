import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
// ui组件库
import { ConfigProvider } from "antd";
// 根组件
import App from "./App";
// 微前端注册
import "./registerApps";
// css设置
import "normalize.css";
import "@/assets/css/index.css";

// 配置路由
import { BrowserRouter } from "react-router-dom";

// 配置store
import { Provider } from "react-redux";
import store from "@/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <ConfigProvider prefixCls="web-app-pms">
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </BrowserRouter>
  </ConfigProvider>
  // </React.StrictMode>
);
