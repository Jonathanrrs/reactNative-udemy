import React, {useContext, useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Image,
} from 'react-native';
import {ProductsStackParams} from '../navigator/ProductsNavigator';
import {Picker} from '@react-native-picker/picker';
import {useCategories} from '../hooks/useCategories';
import {useForm} from '../hooks/useForm';
import {ProductsContext} from '../context/ProductsContext';

interface Props
  extends NativeStackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route, navigation}: Props) => {
  const {id = '', name = ''} = route.params;
  const {categories} = useCategories();

  const {loadProductById} = useContext(ProductsContext);

  const {_id, nombre, img, categoriaId, form, onChange, setFormValue} = useForm(
    {
      _id: id,
      categoriaId: '',
      nombre: name,
      img: '',
    },
  );

  useEffect(() => {
    navigation.setOptions({title: name !== '' ? name : 'Nuevo producto'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProduct = async () => {
    if (id.length === 0) {
      return;
    }
    const product = await loadProductById(id);
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del producto</Text>
        <TextInput
          placeholder="Producto"
          style={styles.txtInput}
          value={name}
          onChangeText={value => onChange(value, 'nombre')}
        />

        {/* picker / selector */}
        <Text style={styles.label}>Categoría:</Text>
        <Picker
          dropdownIconColor="black"
          selectedValue={categoriaId}
          onValueChange={itemValue => onChange(itemValue, 'categoriaId')}>
          {/* <Picker.Item color="black" label="Java" value="java" /> */}
          {categories.map(c => (
            <Picker.Item
              color="black"
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
        {img.length > 0 && <Image style={styles.image} source={{uri: img}} />}
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
    color: 'black',
  },
  containerBtns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  txt: {
    color: 'black',
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});
