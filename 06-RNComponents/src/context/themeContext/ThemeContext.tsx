import React, {createContext} from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const theme = {};
  const setDarkTheme = () => {
    console.log('setdark');
  };

  const setLightTheme = () => {
    console.log('setlight');
  };
  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
