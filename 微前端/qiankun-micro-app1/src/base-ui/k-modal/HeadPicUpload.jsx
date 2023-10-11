import { InboxOutlined } from "@ant-design/icons";
import { message } from "antd";
import Dragger from "antd/es/upload/Dragger";

let onChange = () => {};
const props = {
  name: "file",
  action: "http://localhost:4000/user/upload",
  onChange(info) {
    const { status } = info.file;
    if (status === "done") {
      console.log(info.file.response);
      onChange(info.file.response.data);
      message.success(`${info.file.name} 文件上传成功`);
    } else if (status === "error") {
      message.error(`${info.file.name} 文件上传失败`);
    }
  },
};

const dragger = (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击或拖拽文件到这个区域来上传</p>
  </Dragger>
);

function HeadPicUpload(props) {
  onChange = props.onChange;
  return props?.value ? (
    <div>
      <img
        src={"http://localhost:4000/" + props.value}
        alt="头像"
        width="100"
        height="100"
      />
      {dragger}
    </div>
  ) : (
    <div>{dragger}</div>
  );
}

export default HeadPicUpload;
