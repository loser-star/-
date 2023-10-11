
import { defineStore } from "pinia";
// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters
const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfo: JSON.parse(localStorage.getItem("user_info")) || {},
    };
  },
  getters: {},
  actions: {
    setUserInfo(info) {
      this.userInfo = info;
      localStorage.setItem("user_info", info);
    },
  },
});

export default useUserStore;
