import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/store/modules/home";
import { login } from "@/api";
import { LoginWrapper } from "./style";
export default function Login() {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const res = await login(values.username, values.password);
    if (res.status === 201 || res.status === 200) {
      const { data } = res.data;
      message.success("登录成功");
      localStorage.setItem("access_token", data.accessToken);
      localStorage.setItem("refresh_token", data.refreshToken);
      localStorage.setItem("user_info", JSON.stringify(data.userInfo));
      dispatch(setUserInfo(data.userInfo));
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } else {
      message.error(res.data.data || "系统繁忙，请稍后再试");
    }
  };

  const layout1 = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  const layout2 = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };

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

        <Form.Item {...layout2}>
          <div className="links">
            <Link to="/register">创建账号</Link>
            <Link to="/update_password">忘记密码</Link>
          </div>
        </Form.Item>

        <Form.Item {...layout2}>
          <Button className="btn" type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
}
