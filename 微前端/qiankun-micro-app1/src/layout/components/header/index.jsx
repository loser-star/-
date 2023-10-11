import React, { useState } from "react";
// 拿到redux-toolkit中的store
import { useSelector } from "react-redux";

import { Dropdown, Avatar } from "antd";

import Modals from "@/base-ui/k-modal/index.jsx";
import PasswordModal from "../../../base-ui/passwordmodal";
import { HeaderWrapper } from "./style";
const items = [
  {
    label: "个人信息",
    key: "1",
  },
  {
    label: "修改密码",
    key: "2",
  },
  {
    label: "退出登录",
    key: "3",
  },
];

const url = "http://localhost:4000/";
export default function Headers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.Reacthome);
  const onClick = ({ key }) => {
    if (key === "1") {
      setIsModalOpen(true);
    }
    if (key === "2") {
      setIsPasswordModalOpen(true);
    }
    if (key === "3") {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_info");
      window.location.reload();
    }
  };
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="logo">会议室预订管理系统</div>
        <div className="nav">
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <Avatar size={"large"} src={url + userInfo?.headPic} />
          </Dropdown>
        </div>
      </div>

      <div>
        <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <PasswordModal
          isPasswordModalOpen={isPasswordModalOpen}
          setIsPasswordModalOpen={setIsPasswordModalOpen}
        />
      </div>
    </HeaderWrapper>
  );
}
