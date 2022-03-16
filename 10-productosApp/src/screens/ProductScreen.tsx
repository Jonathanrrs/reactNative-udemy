import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import {ProductsStackParams} from '../navigator/ProductsNavigator';
import {Picker} from '@react-native-picker/picker';
import {useCategories} from '../hooks/useCategories';

interface Props
  extends NativeStackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route, navigation}: Props) => {
  const {id, name = ''} = route.params;
  const {categories} = useCategories();
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    navigation.setOptions({title: name !== '' ? name : 'Nuevo producto'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del producto</Text>
        <TextInput placeholder="Producto" style={styles.txtInput} />

        {/* picker / selector */}
        <Text style={styles.label}>Categoría:</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          {/* <Picker.Item color="black" label="Java" value="java" /> */}
          {categories.map(c => (
            <Picker.Item
              color="white"
              label={c.nombre}
              value={c._id}
              key={c._id}
            />
          ))}
        </Picker>
        <Button title="Guardar" onPress={() => {}} color="#5856D6" />
        <View style={styles.containerBtns}>
          <Button title="Cámara" onPress={() => {}} color="#5856D6" />
          <Button title="Galeria" onPress={() => {}} color="#5856D6" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    color: 'black',
    fontSize: 18,
  },
  txtInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
  containerBtns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
