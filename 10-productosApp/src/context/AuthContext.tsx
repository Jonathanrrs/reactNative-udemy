import React, {createContext} from 'react';
import {Usuario} from '../interfaces/appInterfaces';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  singUp: () => void;
  singIn: () => void;
  removeError: () => void;
  logOut: () => void;
};

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
