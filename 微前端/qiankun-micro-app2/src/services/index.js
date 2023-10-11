//import hyRequest from "./request/index";

//export default hyRequest;

import axios from "axios";
import { message } from "element-plus";
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 3000,
});

axiosInstance.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    config.headers.authorization = "Bearer " + accessToken;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    let { data, config } = error.response;

    if (data.code === 401 && !config.url.includes("/user/admin/refresh")) {
      const res = await refreshToken();
      console.log(res);
      if (res.status === 200) {
        return axios(config);
      } else {
        message.error(res.data);
        // 清除token
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      }
    } else {
      return error.response;
    }
  }
);

async function refreshToken() {
  const res = await axiosInstance.get("/user/admin/refresh", {
    params: {
      refreshToken: localStorage.getItem("refresh_token"),
    },
  });

  if (res.data.code !== 200) {
    message.error("登录已过期，请重新登录");
    return res;
  }
  localStorage.setItem("access_token", res.data.access_token);
  localStorage.setItem("refresh_token", res.data.refresh_token);
  return res;
}

export default axiosInstance;
