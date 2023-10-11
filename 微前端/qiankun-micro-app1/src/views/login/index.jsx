import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";

import { setUserInfo } from "@/store/modules/home";
import { login } from "@/api/login";
import { LoginWrapper } from "./style";
const layout1 = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onFinish = useCallback(
    async (values) => {
      const res = await login(values.username, values.password);
      const { data } = res.data;
      if (res.status === 201 || res.status === 200) {
        message.success("登录成功");

        localStorage.setItem("access_token", data.accessToken);
        localStorage.setItem("refresh_token", data.refreshToken);
        localStorage.setItem("user_info", JSON.stringify(data.userInfo));

        // 保存用户信息到redux
        dispatch(setUserInfo(data.userInfo));

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        message.error(data);
      }
    },
    [dispatch, navigate]
  );

  return (
    <LoginWrapper>
      <h1>会议室预订系统</h1>
      <Form {...layout1} onFinish={onFinish} colon={false} autoComplete="off">
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label=" ">
          <Button className="btn" type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
}
