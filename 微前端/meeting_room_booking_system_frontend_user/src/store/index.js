import { configureStore } from "@reduxjs/toolkit";
import homeRoutes from "./modules/home";
const store = configureStore({
  reducer: {
    // 这里是reducer
    home: homeRoutes,
  },
});
export default store;
