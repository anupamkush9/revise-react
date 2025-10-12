import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Signup from './components/Signup'; // new component

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
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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