
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
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (username: string) => void;
}

/* Crear el contexto */

export const AuthContext = createContext({} as AuthContextProps);

/* Componente proveedor del estado */

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, AuthInitialState)

    const signIn = () => {
        dispatch({type: 'signIn'});
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }
    
    const logout = () => {
        dispatch({type: 'logout'});
    }

    const changeUsername = (username: string) => {
        dispatch({type: 'changeUsername', payload: username})
    }

    return(
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn,
            changeFavoriteIcon: changeFavoriteIcon,
            logout: logout,
            changeUsername: changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}
