import React from 'react';
import {
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item}) => (
          <Image source={{uri: item.picture}} style={stylesScreen.imagePoke} />
        )}
        /* infinite scroll */
        onEndReached={loadPokemons}
        /* aplicar en cuanto se ve la pantalla */
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator
            style={stylesScreen.activityIndicator}
            size={20}
            color="grey"
          />
        }
        showsVerticalScrollIndicator={false}
      />
      {/* <Text
        style={{
          ...styles.title,
          ...styles.globalMargin,
          top: top + 20,
        }}>
        Pokedex
      </Text> */}
    </>
  );
};

const stylesScreen = StyleSheet.create({
  activityIndicator: {
    height: 100,
  },
  imagePoke: {
    width: 100,
    height: 100,
  },
});
