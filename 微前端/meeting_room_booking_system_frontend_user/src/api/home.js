import axiosInstance from "../services";

export async function searchMeetingRoomList(
  name,
  capacity,
  equipment,
  pageNo,
  pageSize
) {
  return await axiosInstance.get("/meeting-room/list", {
    params: {
      name,
      capacity,
      equipment,
      pageNo,
      pageSize,
    },
  });
}
