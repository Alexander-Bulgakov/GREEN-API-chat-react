import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import PrivateRoute from './helpers/privateRoute';

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route
          path="/"
          element={<Home />}
        />
      </Route>
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
};

export default App;
