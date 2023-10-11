import axiosInstance from "../services/index";

export async function login(username, password) {
  return await axiosInstance.post("/user/admin/login", {
    username,
    password,
  });
}
