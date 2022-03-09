import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PermissionsContext} from '../context/PermissionsContext';
import {BlackButton} from '../components/BlackButton';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Es necesario el uso del GPS para usar esta aplicación
      </Text>
      <BlackButton title="Permiso" onPress={askLocationPermission} />
      <Text style={styles.txt}>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    width: 250,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  txt: {
    color: 'black',
    marginTop: 20,
  },
});
