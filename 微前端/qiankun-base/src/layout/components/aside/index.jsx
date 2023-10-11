import React from "react";
import { AsideContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setMenuKey } from "@/store/modules/menu";
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
  getItem("用户管理", "/react/#/user", <PieChartOutlined />),
  getItem("会议室管理", "/react/#/meeting", <DesktopOutlined />),
  getItem("预约管理", "/vue/reservation", <DesktopOutlined />),
  getItem("统计", "/vue/statistics", <DesktopOutlined />),
];
export default function Asides() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(setMenuKey(e.key));
    navigate(e.key);
  };
  const { MenuKey } = useSelector((state) => state.menu);
  return (
    <AsideContainer>
      <Menu
        mode="inline"
        theme="dark"
        items={items}
        onClick={onClick}
        selectedKeys={MenuKey}
      />
    </AsideContainer>
  );
}
