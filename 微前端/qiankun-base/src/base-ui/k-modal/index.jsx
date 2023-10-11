import React, { useCallback, useEffect } from "react";
import { Button, Form, Input, Modal, message } from "antd";
import { useForm } from "antd/es/form/Form";

import HeadPicUpload from "./HeadPicUpload";

import { getUserInfo, updateUserInfoCaptcha, updateInfo } from "@/api";
import { ModalWrapper } from "./style";
const layout1 = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export default function Modals(props) {
  const { isModalOpen, setIsModalOpen } = props;
  const [form] = useForm();
  const handleOk = () => {
    form.submit();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = useCallback(
    async (values) => {
      const res = await updateInfo(values);
      if (res.status === 201 || res.status === 200) {
        const { message: msg, data } = res.data;
        if (msg === "success") {
          message.success("用户信息更新成功");
        } else {
          message.error(data);
        }
        setIsModalOpen(false);
      } else {
        message.error("系统繁忙，请稍后再试");
      }
    },
    [setIsModalOpen]
  );

  const sendCaptcha = useCallback(async function () {
    const res = await updateUserInfoCaptcha();
    if (res.status === 201 || res.status === 200) {
      message.success(res.data.data);
    } else {
      message.error("系统繁忙，请稍后再试");
    }
  }, []);

  useEffect(() => {
    async function query() {
      const res = await getUserInfo();

      const { data } = res.data;
      if (res.status === 201 || res.status === 200) {
        form.setFieldValue("headPic", data.headPic);
        form.setFieldValue("nickName", data.nickName);
        form.setFieldValue("email", data.email);
      }
    }
    query();
  }, [form]);

  return (
    <ModalWrapper>
      <Modal
        forceRender={true}
        title="个人信息"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form
          form={form}
          {...layout1}
          onFinish={onFinish}
          colon={false}
          autoComplete="off"
          labelAlign="right"
        >
          <Form.Item
            label="头像"
            name="headPic"
            rules={[{ required: true, message: "请输入头像!" }]}
            shouldUpdate
          >
            <HeadPicUpload></HeadPicUpload>
          </Form.Item>

          <Form.Item
            label="昵称"
            name="nickName"
            rules={[{ required: true, message: "请输入昵称!" }]}
          >
            <Input />
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
          {/* <Form.Item {...layout1} label=" "></Form.Item> */}
        </Form>
      </Modal>
    </ModalWrapper>
  );
}
