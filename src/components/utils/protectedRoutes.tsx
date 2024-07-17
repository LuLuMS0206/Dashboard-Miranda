// import { useContext } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "./../../context/userContext";


// export const ProtectedRoutes = () => {
//     const {state, userDispatch} = useContext(UserContext);
//     console.log(state)
//     if (!state.isLoggedIn) {
//         return <Navigate to={'/login'} replace />;
//     }
//     return <Outlet />;
// };


// ProtectedRoutes.tsx
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./../../context/userContext";

export const ProtectedRoutes = () => {
    const context = useContext(UserContext);
    
    // Manejar el caso donde el contexto no está disponible
    if (!context) {
        throw new Error("ProtectedRoutes must be used within a UserContextProvider");
    }

    const { state } = context;

    if (!state.isLoggedIn) {
        return <Navigate to={'/login'} replace />;
    }

    return <Outlet />;
};
