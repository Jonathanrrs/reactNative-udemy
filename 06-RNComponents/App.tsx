import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import React from 'react';
import {Navigator} from './src/navigator/Navigator';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'string',
    // background: 'black',
    // card: 'string',
    // text: 'string',
    // border: 'string',
    // notification: 'string',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
