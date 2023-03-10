import { Navigate, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Loader } from '../Loader/Loader';

export const RequireNonAuth = ({ children }) => {
  const { isChecked, user } = useContext(AuthContext);

  if (!isChecked) {
    return <Loader />
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children || <Outlet />;
};
