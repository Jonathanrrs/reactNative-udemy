import React, {createContext, useReducer, useEffect} from 'react';
import cafeApi from '../api/cafeApi';
import {
  LoginResponse,
  Usuario,
  LoginData,
  RegisterData,
} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  singUp: (registerData: RegisterData) => void;
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

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    /* no token, no autenticado */
    if (!token) {
      return dispatch({type: 'notAuthenticated'});
    }
    /* hay token */
    const {data} = await cafeApi.get('/auth');
    await AsyncStorage.setItem('token', data.token);
    dispatch({
      type: 'signUp',
      payload: {
        token: data.token,
        user: data.usuario,
      },
    });
  };

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
      await AsyncStorage.setItem('token', data.token);
    } catch (error: any) {
      // console.log(error.response.data);
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Información incorrecta',
      });
    }
  };
  const singUp = async ({nombre, correo, password}: RegisterData) => {
    try {
      const {data} = await cafeApi.post<LoginResponse>('/usuarios', {
        nombre,
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
      await AsyncStorage.setItem('token', data.token);
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Información incorrecta',
      });
    }
  };
  const removeError = () => {
    dispatch({type: 'removeError'});
  };
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };

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
