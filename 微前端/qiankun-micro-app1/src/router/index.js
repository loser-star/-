import React from "react";
import RequireAuth from "@/router/AuthRouter";
const Home = React.lazy(() => import("@/views/home"));
const Login = React.lazy(() => import("@/views/login"));
const User = React.lazy(() => import("@/views/user"));
const Meeting = React.lazy(() => import("@/views/meeting"));
const Welcome = React.lazy(() => import("@/views/welcome"));
const routes = [
  {
    path: "/",
    element: (
      <RequireAuth>
        <Home></Home>
      </RequireAuth>
    ), // 路由重定向
    children: [
      {
        path: "/",
        element: <Welcome></Welcome>,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/meeting",
        element: <Meeting></Meeting>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
export default routes;
