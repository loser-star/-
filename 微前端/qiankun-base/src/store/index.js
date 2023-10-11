import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./modules/home";
import menuSlice from "./modules/menu";
const store = configureStore({
  reducer: {
    home: homeSlice,
    menu: menuSlice,
  },
});
export default store;
