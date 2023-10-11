// toolkit模式
import { createSlice } from "@reduxjs/toolkit";
const homeSlice = createSlice({
  name: "Reacthome",
  initialState: {
    userInfo: JSON.parse(localStorage.getItem("user_info")) || {},
  },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
      console.log("action.payload", action.payload);
      console.log("state.userInfo", state.userInfo);
    },
  },
});
export const { setUserInfo } = homeSlice.actions;
export default homeSlice.reducer;
