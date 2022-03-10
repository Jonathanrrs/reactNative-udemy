import React, {useRef, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../screens/LoadingScreen';
import {Fab} from './Fab';

export const Map = () => {
  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
  } = useLocation();
  const mapViewRef = useRef<MapView>();

  useEffect(() => {
    followUserLocation();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const {latitude, longitud: longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
      zoom: 18,
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const {latitude, longitud: longitude} = await getCurrentLocation();
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
      zoom: 18,
    });
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        style={styles.container}
        showsUserLocation
        /* ! es porque sabemos que siempre tendrá el dato */
        initialRegion={{
          latitude: initialPosition!.latitude,
          longitude: initialPosition!.longitud,
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
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={styles.fab}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
