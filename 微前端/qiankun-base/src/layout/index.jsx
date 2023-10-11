import React from "react";
// import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Headers from "./components/header";
import Asides from "./components/aside";
import { HeaderWrapper } from "./style";
const { Header, Sider, Content } = Layout;
export default function myLayout() {
  return (
    <HeaderWrapper>
      <Layout>
        <Header>
          <Headers />
        </Header>
        <Layout>
          <Sider>
            <Asides />
          </Sider>
          <Content>
            <div id="container"></div>
          </Content>
        </Layout>
      </Layout>
    </HeaderWrapper>
  );
}
