import axiosInstance from "@/services";

export async function userSearch(username, nickName, email, pageNo, pageSize) {
  return await axiosInstance.get("/user/list", {
    params: {
      username,
      nickName,
      email,
      pageNo,
      pageSize,
    },
  });
}
