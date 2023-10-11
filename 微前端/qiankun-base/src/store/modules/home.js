// toolkit模式
import { createSlice } from "@reduxjs/toolkit";
const homeSlice = createSlice({
  name: "home",
  initialState: {
    userInfo: JSON.parse(localStorage.getItem("user_info")) || {},
  },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = homeSlice.actions;
export default homeSlice.reducer;
