import React, { useCallback, useState, useEffect, useMemo } from "react";
import {
  Button,
  Form,
  Input,
  Card,
  Select,
  Table,
  message,
  Image,
  Popconfirm,
} from "antd";

import UserModal from "../../base-ui/usermodal";
import { userSearch, freeze, unfreeze } from "@/api";
import { UserContainer } from "./style";
export default function User() {
  // <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [userResult, setUserResult] = useState();
  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(0);
  // 冻结用户
  const freezeUser = useCallback(async (id) => {
    const res = await freeze(id);
    const { data } = res.data;
    if (res.status === 201 || res.status === 200) {
      message.success("冻结成功");
      setNum(Math.random());
    } else {
      message.error(data || "系统繁忙，请稍后再试");
    }
  }, []);
  // 取消冻结
  const cancel = (e) => {
    message.error("取消冻结");
  };
  // 解冻用户
  const unfreezeUser = useCallback(async (id) => {
    const res = await unfreeze(id);
    const { data } = res.data;
    if (res.status === 201 || res.status === 200) {
      message.success("解冻成功");
      setNum(Math.random());
    } else {
      message.error(data || "系统繁忙，请稍后再试");
    }
  }, []);
  // 编辑用户
  const editUser = useCallback((id) => {
    setIsModalOpen(true);
    setUserId(id);
  }, []);
  // 表格列
  const columns = useMemo(() => {
    return [
      {
        title: "用户名",
        dataIndex: "username",
        width: 100,
      },
      {
        title: "头像",
        width: 100,
        dataIndex: "headPic",
        render: (value) => {
          return value ? (
            <Image width={50} src={`http://localhost:4000/${value}`} />
          ) : (
            ""
          );
        },
      },
      {
        title: "昵称",
        width: 100,
        dataIndex: "nickName",
      },
      {
        title: "状态",
        dataIndex: "isFrozen",
        width: 100,
        render: (value) => {
          return value ? "冻结" : "使用中";
        },
      },
      {
        title: "邮箱",
        dataIndex: "email",
        width: 150,
      },
      {
        title: "注册时间",
        width: 200,
        dataIndex: "createTime",
      },
      {
        title: "操作",
        width: 180,
        render: (value) => {
          return (
            <div className="operate">
              <Button
                type="primary"
                size="middle"
                onClick={() => editUser(value.id)}
              >
                编辑
              </Button>
              {value.isFrozen ? (
                <Button
                  type="primary"
                  size="middle"
                  onClick={() => unfreezeUser(value.id)}
                >
                  解冻
                </Button>
              ) : (
                <Popconfirm
                  title="冻结用户"
                  description="确定冻结该用户吗？"
                  onConfirm={() => freezeUser(value.id)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="primary" size="middle" danger>
                    冻结
                  </Button>
                </Popconfirm>
              )}
            </div>
          );
        },
      },
    ];
  }, [freezeUser, unfreezeUser, editUser]);

  // 搜索用户
  const searchUser = useCallback(
    async (values) => {
      const res = await userSearch(
        values.username,
        values.nickName,
        values.email,
        pageNo,
        pageSize
      );
      const { data } = res?.data;
      setTotal(data.totalCount);
      if (res.status === 201 || res.status === 200) {
        setUserResult(
          data.users.map((item) => {
            return {
              key: item.username,
              ...item,
            };
          })
        );
      } else {
        message.error(data || "系统繁忙，请稍后再试");
      }
    },
    [pageNo, pageSize]
  );
  // 分页
  const changePage = useCallback(function (pageNo, pageSize) {
    setPageNo(pageNo);
    setPageSize(pageSize);
  }, []);
  // 初始化数据
  useEffect(() => {
    searchUser({
      username: "",
      email: "",
      nickName: "",
    });
  }, [pageNo, pageSize, searchUser, num]);
  return (
    <UserContainer>
      <Card bordered="false" size="small" className="userCard">
        <div className="userManage-form">
          <Form
            onFinish={searchUser}
            name="search"
            layout="inline"
            colon={false}
          >
            <Select
              defaultValue="请选择"
              style={{ width: 90, marginRight: 10 }}
              options={[
                { value: "使用中", label: "使用中" },
                { value: "冻结", label: "冻结" },
              ]}
            />

            <Form.Item label="用户名" name="username">
              <Input style={{ width: "150px" }} allowClear="true" />
            </Form.Item>

            <Form.Item label="昵称" name="nickName">
              <Input style={{ width: "150px" }} allowClear="true" />
            </Form.Item>

            <Form.Item
              label="邮箱"
              name="email"
              rules={[{ type: "email", message: "请输入合法邮箱地址!" }]}
            >
              <Input style={{ width: "150px" }} allowClear="true" />
            </Form.Item>

            <Form.Item label=" ">
              <Button type="primary" htmlType="submit">
                搜索用户
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="userManage-table">
          <Table
            size="large"
            columns={columns}
            dataSource={userResult}
            pagination={{
              current: pageNo,
              pageSize: pageSize,
              total,
              onChange: changePage,
            }}
          />
        </div>
      </Card>
      <UserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        userId={userId}
      ></UserModal>
    </UserContainer>
  );
}
