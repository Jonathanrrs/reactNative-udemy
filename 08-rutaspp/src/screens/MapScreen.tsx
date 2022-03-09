import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const MapScreen = () => {
  return (
    <View>
      <Text style={styles.txt}>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'black',
  },
});
