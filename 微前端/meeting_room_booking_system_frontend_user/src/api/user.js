import axiosInstance from "../services";

export async function getUserInfo() {
  return await axiosInstance.get("/user/info");
}

export async function updateInfo(data) {
  return await axiosInstance.post("/user/update", data);
}

export async function updateUserInfoCaptcha() {
  return await axiosInstance.get("/user/update/captcha");
}
