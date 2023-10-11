import { message } from "antd";
message.config({
  maxCount: 1,
  getContainer: () =>
    document.getElementById("container")?.querySelector("#root") ||
    document.body, //父组件元素ID 找不到时 挂载到body上
});
