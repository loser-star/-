import React from "react";
import RequireAuth from "./AuthRouter";
const Home = React.lazy(() => import("../views/home"));
const Login = React.lazy(() => import("../views/login"));
const routes = [
  {
    path: "/",
    element: (
      <RequireAuth>
        <Home></Home>
      </RequireAuth>
    ),
  },
  {
    path: "/vue/*",
    element: <Home></Home>,
  },
  {
    path: "/react/*",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
];
export default routes;
