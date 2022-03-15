import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, StyleSheet} from 'react-native';
import {ProductsStackParams} from '../navigator/ProductsNavigator';

interface Props
  extends NativeStackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route, navigation}: Props) => {
  const {id, name = ''} = route.params;

  useEffect(() => {
    navigation.setOptions({title: name !== '' ? name : 'Nuevo producto'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text style={styles.txt}>{id}</Text>
      <Text style={styles.txt}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'black',
  },
});
