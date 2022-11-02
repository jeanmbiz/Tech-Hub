import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default RoutesMain;
