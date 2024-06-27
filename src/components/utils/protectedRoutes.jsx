import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRoutes = ({ canActive, redirectPath = '/' }) => {
    if (!canActive) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};
