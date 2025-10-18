import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogDetail from './components/BlogDetail';
import Signup from './components/Signup';

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
          path="/blogs/:id"
          element={
            <ProtectedRoute>
              <BlogDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;