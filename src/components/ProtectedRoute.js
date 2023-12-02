import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element: Component, ...props }) => {
  const token = localStorage.getItem('token');
  return props.loggedIn || token ? (
    <Component {...props} />
  ) : (
    <Navigate
      to="/"
      replace
    />
  );
};
