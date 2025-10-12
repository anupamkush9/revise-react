// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar'; // add this import

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar /> {/* add this line */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
  );
}

export default App;