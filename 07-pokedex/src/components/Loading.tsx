import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={stylesScreen.fetching}>
      <ActivityIndicator size={50} color="grey" />
      {/* <Text>Cargando...</Text> */}
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  fetching: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
