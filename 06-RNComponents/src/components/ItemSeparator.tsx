import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ItemSeparator = () => {
  return <View style={styleComponent.styleSeparator} />;
};

const styleComponent = StyleSheet.create({
  styleSeparator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 8,
  },
});
