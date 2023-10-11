import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Headers from "./components/header";
import Asides from "./components/aside";
import { HeaderWrapper } from "./style";
const { Header, Sider, Content } = Layout;

export default function myLayout() {
  const isQiankun = window.__POWERED_BY_QIANKUN__;
  return (
    <HeaderWrapper>
      {isQiankun ? (
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      ) : (
        <Layout>
          <Header>
            <Headers />
          </Header>
          <Layout>
            <Sider>
              <Asides />
            </Sider>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      )}
    </HeaderWrapper>
  );
}
