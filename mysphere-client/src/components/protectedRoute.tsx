import { Navigate } from 'react-router-dom';
import { useAuth } from './authProvider';
import { Outlet } from 'react-router-dom';


export default function ProtectedRoute() {
  const user = useAuth();

  if (user ===  null) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}