import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown } from "antd";
import { HeaderWrapper } from "./style";
export default function Header() {
  // 路由跳转
  const navigate = useNavigate();
  // 获取store用户信息
  const { userInfo } = useSelector((state) => state.home);
  // 下拉框选项
  const items = [
    {
      key: "update_info",
      label: "个人信息",
    },
    {
      key: "update_pass",
      label: "修改密码",
    },
    {
      key: "Logout",
      label: "退出登录",
    },
  ];
  // 下拉框点击事件
  const onClick = ({ key }) => {
    if (key === "Logout") {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_info");
      window.location.reload();
    } else {
      navigate(key, { state: userInfo });
    }
  };

  return (
    <HeaderWrapper>
      <div className="left">
        <h1>会议室预定系统</h1>
      </div>
      <div className="right">
        <Dropdown menu={{ items, onClick }} placement="bottomLeft">
          <Avatar size={40} src={"http://localhost:4000/" + userInfo.headPic} />
        </Dropdown>
      </div>
    </HeaderWrapper>
  );
}
