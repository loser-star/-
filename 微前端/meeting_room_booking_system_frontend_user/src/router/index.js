import React from "react";
import { Navigate } from "react-router-dom";
import RequireAuth from "./AuthRouter";
const Home = React.lazy(() => import("../views/home"));
const Login = React.lazy(() => import("../views/login"));
const Register = React.lazy(() => import("../views/register"));
const UpdatePassword = React.lazy(() => import("../views/updatePassword"));
const ErrorPage = React.lazy(() => import("../views/errorPage"));
const UpdateInfo = React.lazy(() => import("../views/updateInfo"));
const UpdatePass = React.lazy(() => import("../views/updatePass"));
const MeetingRoomList = React.lazy(() => import("../views/meeting_room_list"));
const BookingHistory = React.lazy(() => import("../views/booking_history"));
const Menu = React.lazy(() => import("../views/menu"));
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
        element: <Menu />,
        children: [
          {
            path: "/",
            element: <MeetingRoomList />,
          },
          {
            path: "meeting_room_list",
            element: <MeetingRoomList />,
          },
          {
            path: "booking_history",
            element: <BookingHistory />,
          },
        ],
      },
      {
        path: "update_info",
        element: <UpdateInfo></UpdateInfo>,
        auth: true,
      },
      {
        path: "update_pass",
        element: <UpdatePass></UpdatePass>,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "update_password",
    element: <UpdatePassword />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/index.html",
    // 重定向到 /
    element: <Navigate to="/" />,
  },
];

export default routes;
