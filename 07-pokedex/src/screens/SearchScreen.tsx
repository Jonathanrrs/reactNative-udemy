import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/UsePokemonSearch';
import {styles} from '../theme/appTheme';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return (
      <View style={stylesScreen.fetching}>
        <ActivityIndicator size={50} color="grey" />
        {/* <Text>Cargando...</Text> */}
      </View>
    );
  }
  return (
    <View
      style={{
        ...stylesScreen.container,
        margin: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <SearchInput />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        /* aplicar en cuanto se ve la pantalla */
        onEndReachedThreshold={0.4}
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
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  fetching: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    height: 100,
  },
});
