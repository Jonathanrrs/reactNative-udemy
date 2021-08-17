
/* Definir cómo luce o qué información tendré aquí */

import React, { createContext } from "react"
import { useReducer } from "react";
import { authReducer } from "./AuthReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

/* Estado inicial */

export const AuthInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

/* Lo usaremos para decirle a react cómo luce y qué expone el context */

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

/* Crear el contexto */

export const AuthContext = createContext({} as AuthContextProps);

/* Componente proveedor del estado */

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, AuthInitialState)


    return(
        <AuthContext.Provider value={{
            authState: authState,
            signIn: () => {}
        }}>
            {children}
        </AuthContext.Provider>
    )
}
