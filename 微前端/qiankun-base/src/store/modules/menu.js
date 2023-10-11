// toolkit模式
import { createSlice } from "@reduxjs/toolkit";
const menuSlice = createSlice({
  name: "menu",
  initialState: {
    MenuKey: JSON.parse(localStorage.getItem("menu")) || "/",
  },
  reducers: {
    setMenuKey(state, action) {
      state.MenuKey = action.payload;
      localStorage.setItem("menu", JSON.stringify(action.payload));
    },
  },
});

export const { setMenuKey } = menuSlice.actions;
export default menuSlice.reducer;
