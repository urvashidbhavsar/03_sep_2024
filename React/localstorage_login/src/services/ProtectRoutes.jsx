import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = () => {
    const auth = localStorage.getItem("loguser");
    return auth ? <Outlet /> : <Navigate to="/" />
}

export default ProtectRoutes
