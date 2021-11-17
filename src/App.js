import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import CountDown from './CountDown';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<CountDown />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
