// import { useSelector } from 'react-redux';
// import { selectIsAuth } from '../store/slices/authSlice';

const { Outlet, Navigate } = require("react-router-dom");

const PrivateRoute = () => {
  // const isAuth = useSelector(selectIsAuth);
  let isAuth = false;

  return isAuth ? <Outlet /> : <Navigate to={"login"} />;
};

export default PrivateRoute;
