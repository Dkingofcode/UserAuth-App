import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Content from './components/Content';
import { useRef } from 'react';
//import PrivateRoute from './components/PrivateRoute';
import Auth from './components/Auth';
 

function App() {
  return (
   <Auth />
  );
}

export default App;
