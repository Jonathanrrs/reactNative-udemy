import React, {useContext, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {ProductsContext} from '../context/ProductsContext';
import {ProductsStackParams} from '../navigator/ProductsNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props
  extends NativeStackScreenProps<ProductsStackParams, 'ProductsScreen'> {}

export const ProductsScreen = ({navigation}: Props) => {
  const {products, loadProducts} = useContext(ProductsContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ProductScreen', {})}>
          <Text style={styles.btnRight}>Agregar</Text>
        </TouchableOpacity>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Pull to refresh */
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={p => p._id}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ProductScreen', {
                id: item._id,
                name: item.nombre,
              })
            }>
            <Text style={styles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  productName: {
    color: 'black',
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  btnRight: {
    marginRight: 10,
    color: 'black',
  },
});
