import React from 'react';
import { SafeAreaView } from 'react-native';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositonScreen } from './src/screens/PositonScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
       {/* <HolaMundoScreen />
       <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      <PositonScreen />
    </SafeAreaView>
  )
}

export default App;
