import axiosInstance from "@/services";
export async function freeze(id) {
  return await axiosInstance.get("/user/freeze", {
    params: {
      id,
    },
  });
}

export async function unfreeze(id) {
  return await axiosInstance.get("/user/unfreeze", {
    params: {
      id,
    },
  });
}

export async function getUserInfo() {
  return await axiosInstance.get("/user/info");
}

export async function getAdminUser(id) {
  return await axiosInstance.get(`/user/info/${id}`);
}

export async function updateInfo(data) {
  return await axiosInstance.post("/user/admin/update", data);
}

export async function updateUserInfoCaptcha() {
  return await axiosInstance.get("/user/update/captcha");
}

export async function updatePasswordCaptcha(email) {
  return await axiosInstance.get("/user/update_password/captcha", {
    params: {
      address: email,
    },
  });
}

export async function updatePassword(data) {
  return await axiosInstance.post("/user/admin/update_password", data);
}

export async function updateAdminUser(userId, data) {
  return await axiosInstance.post(`/user/info/${userId}`, data);
}
