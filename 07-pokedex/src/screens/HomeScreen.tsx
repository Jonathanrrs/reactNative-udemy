import React from 'react';
import {
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/PokemonCard';
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
        renderItem={({item}) => <PokemonCard pokemon={item} />}
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
        /* dividir la columna */
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
            }}>
            Pokedex
          </Text>
        }
      />
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
