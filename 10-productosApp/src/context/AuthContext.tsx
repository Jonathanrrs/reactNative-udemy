import React, {createContext, useReducer} from 'react';
import cafeApi from '../api/cafeApi';
import {LoginResponse, Usuario, LoginData} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './authReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  singUp: () => void;
  singIn: (loginData: LoginData) => void;
  removeError: () => void;
  logOut: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const singIn = async ({correo, password}: LoginData) => {
    try {
      const {data} = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });
    } catch (error: any) {
      // console.log(error.response.data);
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Información incorrecta',
      });
    }
  };
  const singUp = () => {};
  const removeError = () => {
    dispatch({type: 'removeError'});
  };
  const logOut = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        singUp,
        singIn,
        removeError,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
