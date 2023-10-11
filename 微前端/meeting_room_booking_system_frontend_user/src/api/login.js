import axiosInstance from "../services";

// 登录
export async function login(username, password) {
  return await axiosInstance.post("/user/login", {
    username,
    password,
  });
}

// 发送注册验证码
export async function sendRegisterCaptcha(email) {
  return await axiosInstance.get(`/user/register-captcha?address=${email}`);
}

// 注册
export async function register(registerUser) {
  return await axiosInstance.post("/user/register", registerUser);
}

// 发送重置密码验证码

export async function updatePasswordCaptcha(email) {
  return await axiosInstance.get("/user/update_password/captcha", {
    params: {
      address: email,
    },
  });
}

// 重置密码
export async function updatePassword(data) {
  return await axiosInstance.post("/user/update_password", data);
}
