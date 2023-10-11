import { useCallback, useEffect, useMemo, useState } from "react";
import { Badge, Button, Form, Input, Table, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { searchMeetingRoomList } from "@/api";
import { renderTime } from "@/utils/index.js";
import { MeetingRoomListWrapper } from "./style";
export default function MeetingRoomList() {
  // 页码
  const [pageNo, setPageNo] = useState(1);
  // 每页条数
  const [pageSize, setPageSize] = useState(3);
  // 总条数
  const [total, setTotal] = useState(0);
  // 会议室列表
  const [meetingRoomResult, setMeetingRoomResult] = useState([]);
  // 表单
  const [form] = useForm();
  // 获取会议室列表
  const columns = useMemo(
    () => [
      {
        title: "名称",
        dataIndex: "name",
      },
      {
        title: "容纳人数",
        dataIndex: "capacity",
      },
      {
        title: "位置",
        dataIndex: "location",
      },
      {
        title: "设备",
        dataIndex: "equipment",
      },
      {
        title: "描述",
        dataIndex: "description",
      },
      {
        title: "添加时间",
        dataIndex: "createTime",
        render: (text) => renderTime(text),
      },
      {
        title: "上次更新时间",
        dataIndex: "updateTime",
        render: (text) => renderTime(text),
      },
      {
        title: "预定状态",
        dataIndex: "isBooked",
        render: (_, record) =>
          record.isBooked ? (
            <Badge status="error">已被预订</Badge>
          ) : (
            <Badge status="success">可预定</Badge>
          ),
      },
      {
        title: "操作",
        render: (_, record) => (
          <div>
            <Button type="primary">预定</Button>
          </div>
        ),
      },
    ],
    []
  );
  // 搜索会议室
  const searchMeetingRoom = useCallback(
    async (values) => {
      const res = await searchMeetingRoomList(
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
  // 页面加载完成后，获取会议室列表
  useEffect(() => {
    searchMeetingRoom({
      name: form.getFieldValue("name"),
      capacity: form.getFieldValue("capacity"),
      equipment: form.getFieldValue("equipment"),
    });
  }, [pageNo, pageSize, form, searchMeetingRoom]);
  // 切换页码
  const changePage = useCallback(function (pageNo, pageSize) {
    setPageNo(pageNo);
    setPageSize(pageSize);
  }, []);

  return (
    <MeetingRoomListWrapper>
      <div className="meetingRoomList-form">
        <Form
          form={form}
          onFinish={searchMeetingRoom}
          name="search"
          layout="inline"
          colon={false}
        >
          <Form.Item label="会议室名称" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="容纳人数" name="capacity">
            <Input />
          </Form.Item>

          <Form.Item label="设备" name="equipment">
            <Input />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              搜索会议室
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="meetingRoomList-table">
        <Table
          columns={columns}
          dataSource={meetingRoomResult}
          pagination={{
            current: pageNo,
            pageSize: pageSize,
            onChange: changePage,
            total,
          }}
        />
      </div>
    </MeetingRoomListWrapper>
  );
}
