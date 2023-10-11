import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { AsideContainer } from "./style";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("用户管理", "/user", <PieChartOutlined />),
  getItem("会议室管理", "meeting", <DesktopOutlined />),
];

export default function Asides() {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };
  return (
    <AsideContainer>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        items={items}
        onClick={onClick}
      />
    </AsideContainer>
  );
}
