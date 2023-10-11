import { configureStore } from "@reduxjs/toolkit";
import homeRoutes from "./modules/home";
const store = configureStore({
  reducer: {
    Reacthome: homeRoutes, // 需要导入的模块
  },
});
export default store;
