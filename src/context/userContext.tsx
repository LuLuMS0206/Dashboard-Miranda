
// // import { createContext, useEffect, useReducer } from "react";

// // const getInitialState = () => {
// //     const initialState = (localStorage.getItem('auth'));
// //     if (initialState) {
// //         console.log(initialState)
// //         return JSON.parse(initialState);
// //     }
// //     return {
// //         name: null,
// //         email: null,
// //         isLoggedIn: false
// //     };
// // };

// // const userReducer = (state, action) => {
// //     switch (action.type) {
// //         case "LOGIN":
// //             return {
// //                 ...state,
// //                 name: action.payload.name,
// //                 email: action.payload.email,
// //                 isLoggedIn: true
// //             };
// //         case "LOGOUT":
// //             return {
// //                 ...state,
// //                 name: null,
// //                 email: null,
// //                 isLoggedIn: false
// //             };
// //         case "EDITUSER":
// //             return {
// //                 ...state,
// //                 name: action.payload.name,
// //                 email: action.payload.email
// //             };
// //         default:
// //             return state;
// //     }
// // };

// // export const UserContext = createContext(getInitialState);

// // export const UserContextProvider = ({ children }) => {
// //     const [state, dispatch] = useReducer(userReducer, getInitialState());

// //     useEffect(() => {
// //         localStorage.setItem('auth', JSON.stringify(state));
// //     }, [state]);

// //     return (
// //         <UserContext.Provider value={{ state, dispatch }}>
// //             {children}
// //         </UserContext.Provider>
// //     );
// // };

// import React, { createContext, useEffect, useReducer, ReactNode } from "react";

// // Tipos para el estado del usuario
// interface UserState {
//     name: string | null;
//     email: string | null;
//     isLoggedIn: boolean;
// }

// // Tipos para las acciones
// interface Action {
//     type: string;
//     payload?: {
//         name?: string;
//         email?: string;
//     };
// }

// // Función para obtener el estado inicial
// const getInitialState = (): UserState => {
//     const initialState = localStorage.getItem('auth');
//     if (initialState) {
//         return JSON.parse(initialState);
//     }
//     return {
//         name: null,
//         email: null,
//         isLoggedIn: false,
//     };
// };

// // Reducer
// const userReducer = (state: UserState, action: Action): UserState => {
//     switch (action.type) {
//         case "LOGIN":
//             return {
//                 ...state,
//                 name: action.payload?.name || null,
//                 email: action.payload?.email || null,
//                 isLoggedIn: true,
//             };
//         case "LOGOUT":
//             return {
//                 ...state,
//                 name: null,
//                 email: null,
//                 isLoggedIn: false,
//             };
//         case "EDITUSER":
//             return {
//                 ...state,
//                 name: action.payload?.name || state.name,
//                 email: action.payload?.email || state.email,
//             };
//         default:
//             return state;
//     }
// };

// // Crear el contexto
// export const UserContext = createContext<{
//     state: UserState;
//     dispatch: React.Dispatch<Action>;
// } | undefined>(undefined);

// // Proveedor del contexto
// export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [state, dispatch] = useReducer(userReducer, getInitialState());

//     useEffect(() => {
//         localStorage.setItem('auth', JSON.stringify(state));
//     }, [state]);

//     return (
//         <UserContext.Provider value={{ state, dispatch }}>
//             {children}
//         </UserContext.Provider>
//     );
// };


// import React, { createContext, useEffect, useReducer, ReactNode, useContext } from "react";

// interface UserState {
//     name: string | null;
//     email: string | null;
//     isLoggedIn: boolean;
// }

// interface Action {
//     type: string;
//     payload?: {
//         name?: string;
//         email?: string;
//     };
// }

// const getInitialState = (): UserState => {
//     const initialState = localStorage.getItem('auth');
//     if (initialState) {
//         return JSON.parse(initialState);
//     }
//     return {
//         name: null,
//         email: null,
//         isLoggedIn: false,
//     };
// };

// const userReducer = (state: UserState, action: Action): UserState => {
//     switch (action.type) {
//         case "LOGIN":
//             return {
//                 ...state,
//                 name: action.payload?.name || null,
//                 email: action.payload?.email || null,
//                 isLoggedIn: true,
//             };
//         case "LOGOUT":
//             return {
//                 ...state,
//                 name: null,
//                 email: null,
//                 isLoggedIn: false,
//             };
//         case "EDITUSER":
//             return {
//                 ...state,
//                 name: action.payload?.name || state.name,
//                 email: action.payload?.email || state.email,
//             };
//         default:
//             return state;
//     }
// };

// export const UserContext = createContext<{
//     state: UserState;
//     dispatch: React.Dispatch<Action>;
// } | undefined>(undefined);

// export const useUserContext = () => {
//     const context = useContext(UserContext);
//     if (!context) {
//         throw new Error('useUserContext must be used within a UserContextProvider');
//     }
//     return context;
// };

// export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [state, dispatch] = useReducer(userReducer, getInitialState());

//     useEffect(() => {
//         localStorage.setItem('auth', JSON.stringify(state));
//     }, [state]);

//     return (
//         <UserContext.Provider value={{ state, dispatch }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

import React, { createContext, useEffect, useReducer, ReactNode, useContext } from "react";

interface UserState {
    name: string | null;
    email: string | null;
    isLoggedIn: boolean;
}

interface LoginAction {
    type: 'LOGIN';
    payload: {
        name: string;
        email: string;
    };
}

interface LogoutAction {
    type: 'LOGOUT';
}

interface EditUserAction {
    type: 'EDITUSER';
    payload: {
        name?: string;
        email?: string;
    };
}

type Action = LoginAction | LogoutAction | EditUserAction;

const getInitialState = (): UserState => {
    const initialState = localStorage.getItem('auth');
    if (initialState) {
        return JSON.parse(initialState) as UserState;
    }
    return {
        name: null,
        email: null,
        isLoggedIn: false,
    };
};

const userReducer = (state: UserState, action: Action): UserState => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                isLoggedIn: true,
            };
        case "LOGOUT":
            return {
                ...state,
                name: null,
                email: null,
                isLoggedIn: false,
            };
        case "EDITUSER":
            return {
                ...state,
                name: action.payload.name ?? state.name,
                email: action.payload.email ?? state.email,
            };
        default:
            return state;
    }
};

export const UserContext = createContext<{
    state: UserState;
    dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, getInitialState());

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(state));
    }, [state]);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};
