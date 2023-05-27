import { useSelector } from 'react-redux';
import { checkAuth } from '../store/slices/chatSlice';

const { Outlet, Navigate } = require('react-router-dom');

const PrivateRoute = () => {
  const isAuth = useSelector(checkAuth);
  // const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to={'login'} />;
};

export default PrivateRoute;
