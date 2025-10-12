// components/ProtectedRoute.js
import { Navigate } from 'react-router';



const ProtectedRoute = ({ children }) => {
const isAuthenticated = !!localStorage.getItem('access_token');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;