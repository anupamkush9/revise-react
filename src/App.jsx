// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/login' && <Navbar />}
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
  );
}

export default App;