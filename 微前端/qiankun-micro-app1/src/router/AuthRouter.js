import { message } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RequireAuth = (props) => {
  const { children } = props;
  const token = localStorage.getItem("access_token") || "";
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!token) {
      message.error("请先登录");
      navigate("/login");
    }
    if (!token && location.pathname === "/") {
      navigate("/login");
    }
    if (token && location.pathname === "/login") {
      message.success("已登录");
      navigate("/home");
    }
    if (!token && location.pathname !== "/login") {
      message.error("请先登录");
      navigate("/login");
    }
  }, [token, navigate, location.pathname]);

  return children;
};

export default RequireAuth;
