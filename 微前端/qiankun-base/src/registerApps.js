import { registerMicroApps } from "qiankun";
import store from "./store";
const loader = (loading) => {};
registerMicroApps(
  [
    {
      name: "react app", // app name registered
      entry: "//localhost:10000",
      activeRule: "/react",
      container: "#container",
      loader,
      props: {
        store,
      },
    },
    {
      name: "vue app", // app name registered
      entry: "//localhost:20000",
      activeRule: "/vue",
      container: "#container",
      loader,
      props: {
        store,
        isQiakun: true,
      },
    },
  ],
  {
    beforeLoad(app) {},
    beforeMount() {},
    afterMount() {},
    beforeUnmount() {},
    afterUnmount() {},
  }
);

// start({
//   sandbox: {
//     strictStyleIsolation: true,
//     experimentalStyleIsolation: true,
//   },
// });
