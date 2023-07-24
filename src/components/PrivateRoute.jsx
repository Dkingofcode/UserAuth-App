import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if the user is authenticated
  const location = useLocation(); // Use the useLocation hook

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login"  state={{ from: location }} replace />} // Use Navigate component to redirect
    />
  );
};

export default PrivateRoute;
