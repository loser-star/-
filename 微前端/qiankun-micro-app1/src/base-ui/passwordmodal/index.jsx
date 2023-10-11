import React, { useCallback, useEffect } from "react";
import { Modal, Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { getUserInfo, updatePasswordCaptcha, updatePassword } from "@/api";
const layout1 = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export default function PasswordModal(props) {
  const { isPasswordModalOpen, setIsPasswordModalOpen } = props;
  const [form] = useForm();
  const handleOk = () => {
    form.submit();
    setIsPasswordModalOpen(false);
  };

  const handleCancel = () => {
    setIsPasswordModalOpen(false);
  };
  const onFinish = useCallback(
    async (values) => {
      if (values.password !== values.confirmPassword) {
        return message.error("两次密码不一致");
      }

      const res = await updatePassword({
        ...values,
        username: form.getFieldValue("username"),
      });

      const { data } = res.data;

      if (res.status === 201 || res.status === 200) {
        message.success("密码修改成功");
      } else {
        message.error(data || "系统繁忙，请稍后再试");
      }
    },
    [form]
  );

  const sendCaptcha = useCallback(
    async function () {
      const address = form.getFieldValue("email");
      if (!address) {
        return message.error("邮箱地址为空");
      }

      const res = await updatePasswordCaptcha(address);
      if (res.status === 201 || res.status === 200) {
        message.success(res.data.data);
      } else {
        message.error("系统繁忙，请稍后再试");
      }
    },
    [form]
  );
  const query = useCallback(async () => {
    const res = await getUserInfo();

    const { data } = res.data;

    if (res.status === 201 || res.status === 200) {
      console.log(form);
      form.setFieldValue("username", data.username);
      form.setFieldValue("email", data.email);
    }
  }, [form]);
  useEffect(() => {
    query();
  }, [query]);

  return (
    <div>
      <Modal
        title="修改密码"
        open={isPasswordModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
        forceRender={true}
        destroyOnClose={true}
        afterClose={() => {
          form.resetFields();
          query();
        }}
      >
        <Form
          form={form}
          {...layout1}
          onFinish={onFinish}
          colon={false}
          autoComplete="off"
        >
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认密码"
            name="confirmPassword"
            rules={[{ required: true, message: "请输入确认密码!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: "请输入邮箱!" },
              { type: "email", message: "请输入合法邮箱地址!" },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <div id="captcha-wrapper">
            <Form.Item
              label="验证码"
              name="captcha"
              rules={[{ required: true, message: "请输入验证码!" }]}
            >
              <Input style={{ width: 250 }} />
            </Form.Item>
            <Button type="primary" onClick={sendCaptcha}>
              发送验证码
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
