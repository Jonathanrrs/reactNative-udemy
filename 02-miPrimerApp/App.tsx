import React from 'react';
import { SafeAreaView } from 'react-native';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
       {/* <HolaMundoScreen />
       <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen />
    </SafeAreaView>
  )
}

export default App;
