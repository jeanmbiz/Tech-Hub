import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../Providers/contexts/UserContext";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return <div>carregando...</div>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
