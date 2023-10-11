import React, { useCallback } from "react";
import { Modal, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
import { getAdminUser, updateAdminUser } from "@/api";

const layout1 = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export default function UserModal(props) {
  const { isModalOpen, setIsModalOpen, userId } = props;
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
      console.log(values);
      console.log(userId);
      const res = await updateAdminUser(userId, values);

      const { data } = res.data;

      if (res.status === 201 || res.status === 200) {
        message.success("用户信息修改成功");
      } else {
        message.error(data || "系统繁忙，请稍后再试");
      }
    },
    [userId]
  );

  const query = useCallback(async () => {
    if (!userId) {
      return;
    }
    const res = await getAdminUser(userId);

    const { data } = res.data;

    if (res.status === 201 || res.status === 200) {
      form.setFieldsValue({
        username: data.username,
        nike_name: data.nickName,
        email: data.email,
        phoneNumber: data.phoneNumber,
      });
    }
  }, [form, userId]);
  useEffect(() => {
    query();
  }, [form, userId, query]);
  return (
    <div>
      <Modal
        title="修改用户信息"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        forceRender={true}
        okText="修改用户信息"
        cancelText="取消"
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
            label="username"
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="nike_name"
            name="nike_name"
            rules={[{ required: true, message: "请输入昵称!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: "请输入邮箱!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="phoneNumber"
            name="phoneNumber"
            rules={[{ required: true, message: "请输入手机号!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
