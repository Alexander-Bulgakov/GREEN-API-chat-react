import { useSelector } from "react-redux";
import { selectIsAuth } from "../store/slices/messageSlice";

const { Outlet, Navigate } = require("react-router-dom");

const PrivateRoute = () => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Outlet /> : <Navigate to={"login"} />;
};

export default PrivateRoute;
