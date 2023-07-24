import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Content from './components/Content';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use PrivateRoute to protect the content route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add a default route to redirect to the content page when the user visits the root URL */}
        <Route path="/home" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
