import axiosInstance from "@/services";

export async function meetingRoomList(
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

export async function deleteMeetingRoom(id) {
  return await axiosInstance.delete("/meeting-room/" + id);
}

export async function createMeetingRoom(meetingRoom) {
  return await axiosInstance.post("/meeting-room/create", meetingRoom);
}

export async function updateMeetingRoom(meetingRoom) {
  return await axiosInstance.put("/meeting-room/update", meetingRoom);
}

export async function findMeetingRoom(id) {
  return await axiosInstance.get("/meeting-room/" + id);
}
