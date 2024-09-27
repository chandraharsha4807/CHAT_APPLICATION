import { Navigate, useLocation } from "react-router-dom";
import useToken from "../customHooks/useToken";

const ProtectedRoute = ({ children }: { children: any }) => {
  const location = useLocation();
  const { token } = useToken();

  // If the user is authenticated, render the child components (protected routes)
  if (token && token.length) {
    return children;
  }

  // If the user is not authenticated, redirect to the login page
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
