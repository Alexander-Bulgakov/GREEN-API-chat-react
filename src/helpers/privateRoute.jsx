import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store/slices/chatSlice';

const { Outlet, Navigate } = require('react-router-dom');

const PrivateRoute = () => {
  // const isAuth = useSelector(selectIsAuth);
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to={'login'} />;
};

export default PrivateRoute;
