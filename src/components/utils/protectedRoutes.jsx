import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/userContext";

// eslint-disable-next-line react/prop-types


export const ProtectedRoutes = () => {
    const {state, userDispatch} = useContext(UserContext);
    console.log(state)
    if (!state.isLoggedIn) {
        return <Navigate to={'/login'} replace />;
    }
    return <Outlet />;
};
