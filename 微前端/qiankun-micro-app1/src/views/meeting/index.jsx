import React, { useCallback, useMemo, useState, useEffect } from "react";

import {
  Card,
  Badge,
  Button,
  Form,
  Input,
  Table,
  message,
  Popconfirm,
} from "antd";
import { useForm } from "antd/es/form/Form";
import CreateMeetingRoomModal from "@/base-ui/CreateMeetingRoomModal";
import UpdateMeetingRoomModal from "@/base-ui/UpdateMeetingRoom";
import { meetingRoomList, deleteMeetingRoom } from "@/api";
import { MeetingContainer } from "./style";
export default function Meeting() {
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [total, setTotal] = useState(3);
  const [meetingRoomResult, setMeetingRoomResult] = useState([]);
  const [num, setNum] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updateId, setUpdateId] = useState(0);

  const [form] = useForm();
  const cancel = (e) => {
    message.error("取消删除");
  };
  const searchMeetingRoom = useCallback(
    async (values) => {
      const res = await meetingRoomList(
        values.name,
        values.capacity,
        values.equipment,
        pageNo,
        pageSize
      );
      const { data } = res.data;
      setTotal(data.totalCount);
      if (res.status === 201 || res.status === 200) {
        setMeetingRoomResult(
          data.meetingRooms.map((item) => {
            return {
              key: item.id,
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
  const Delete = useCallback(async (id) => {
    const res = await deleteMeetingRoom(id);
    const { data } = res.data;
    if (res.status === 201 || res.status === 200) {
      message.success("删除成功");
    } else {
      message.error(data || "系统繁忙，请稍后再试");
    }
  }, []);
  const columns = useMemo(
    () => [
      {
        title: "名称",
        dataIndex: "name",
        width: 80,
      },
      {
        title: "容纳人数",
        dataIndex: "capacity",
        width: 60,
      },
      {
        title: "位置",
        dataIndex: "location",
        width: 100,
      },
      {
        title: "设备",
        dataIndex: "equipment",
        width: 80,
      },
      {
        title: "描述",
        dataIndex: "description",
        width: 80,
      },
      {
        title: "添加时间",
        dataIndex: "createTime",
        width: 50,
      },
      {
        title: "上次更新时间",
        dataIndex: "updateTime",
        width: 80,
      },
      {
        title: "预定状态",
        dataIndex: "isBooked",
        width: 80,
        render: (_, record) =>
          record.isBooked ? (
            <Badge status="error">已被预订</Badge>
          ) : (
            <Badge status="success">可预定</Badge>
          ),
      },
      {
        title: "操作",
        render: (value) => (
          <div className="operate">
            <Button
              type="primary"
              onClick={() => {
                setIsUpdateModalOpen(true);
                setUpdateId(value.id);
              }}
            >
              编辑
            </Button>
            <Popconfirm
              title="删除会议室"
              description="确定删除该会议室吗？"
              onConfirm={() => Delete(value.id)}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" size="middle" danger>
                删除
              </Button>
            </Popconfirm>
          </div>
        ),
      },
    ],
    [Delete]
  );
  const changePage = useCallback(function (pageNo, pageSize) {
    setPageNo(pageNo);
    setPageSize(pageSize);
  }, []);

  useEffect(() => {
    searchMeetingRoom({
      name: form.getFieldValue("name"),
      capacity: form.getFieldValue("capacity"),
      equipment: form.getFieldValue("equipment"),
    });
  }, [pageNo, pageSize, num, form, searchMeetingRoom]);

  return (
    <MeetingContainer>
      <Card>
        <div className="meetingRoomManage-form">
          <Form
            form={form}
            onFinish={searchMeetingRoom}
            name="search"
            layout="inline"
            colon={false}
          >
            <Form.Item label=" ">
              <Button
                type="primary"
                style={{ background: "green" }}
                onClick={() => setIsOpen(true)}
              >
                新增
              </Button>
            </Form.Item>
            <Form.Item label="会议室名称" name="name">
              <Input style={{ width: "150px" }} allowClear="true" />
            </Form.Item>

            <Form.Item label="容纳人数" name="capacity">
              <Input style={{ width: "150px" }} allowClear="true" />
            </Form.Item>

            <Form.Item label="位置" name="location">
              <Input style={{ width: "150px" }} allowClear="true" />
            </Form.Item>

            <Form.Item label=" ">
              <Button type="primary" htmlType="submit">
                搜索会议室
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="meetingRoomManage-table">
          <Table
            columns={columns}
            dataSource={meetingRoomResult || []}
            pagination={{
              current: pageNo,
              pageSize: pageSize,
              onChange: changePage,
              total,
            }}
          />
        </div>
      </Card>
      <CreateMeetingRoomModal
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          setNum(Math.random());
        }}
      />
      <UpdateMeetingRoomModal
        isOpen={isUpdateModalOpen}
        id={updateId || undefined}
        handleClose={() => {
          setIsUpdateModalOpen(false);
          setNum(Math.random());
        }}
      />
    </MeetingContainer>
  );
}
