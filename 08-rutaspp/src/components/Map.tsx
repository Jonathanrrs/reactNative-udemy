import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
  return (
    <>
      <MapView
        style={styles.container}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Esto es un título"
          description="Esto es una descripcion del marcador"
        /> */}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
