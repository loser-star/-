import axiosInstance from "@/services";

// 登录接口
export async function login(username, password) {
  return await axiosInstance.post("/user/admin/login", {
    username,
    password,
  });
}
