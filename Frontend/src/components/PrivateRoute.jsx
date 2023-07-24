import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import Content from './Content';

const PrivateRoute = ({ element: Content, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if the user is authenticated
  const location = useLocation(); // Use the useLocation hook

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Content /> : <Navigate to="/login"  state={{ from: location }} replace />} // Use Navigate component to redirect
    />
  );
};

export default PrivateRoute;
