import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu as AntdMenu } from "antd";
import { MenuWrapper } from "./style";

export default function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  // 左侧菜单栏选项
  const items = [
    {
      key: "1",
      label: "会议室列表",
    },
    {
      key: "2",
      label: "预定历史",
    },
  ];
  // 获取当前选中的菜单项
  function getSelectedKeys() {
    if (location.pathname === "/meeting_room_list") {
      return ["1"];
    } else if (location.pathname === "/booking_history") {
      return ["2"];
    } else {
      return ["1"];
    }
  }
  // 菜单项点击事件
  const handleMenuItemClick = (info) => {
    let path = "";
    switch (info.key) {
      case "1":
        path = "/meeting_room_list";
        break;
      case "2":
        path = "/booking_history";
        break;
      default:
        path = "/meeting_room_list";
        break;
    }
    navigate(path);
  };
  return (
    <MenuWrapper id="menu-container">
      <div className="menu-area">
        <AntdMenu
          defaultSelectedKeys={getSelectedKeys()}
          items={items}
          onClick={handleMenuItemClick}
        />
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </MenuWrapper>
  );
}
