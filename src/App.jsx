import React, { useEffect } from "react";
// import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import PrivateRoute from "./helpers/privateRoute";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAuthMe, selectIsAuth } from "./store/slices/authSlice";

const App = () => {
  // useEffect(() => {
  //   dispatch(fetchAuthMe());
  // }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
