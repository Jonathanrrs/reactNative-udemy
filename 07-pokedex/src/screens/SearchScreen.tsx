import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/UsePokemonSearch';
import {styles} from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View
      style={{
        ...stylesScreen.container,
        // margin: Platform.OS === 'ios' ? top : top + 10,
      }}>
      <SearchInput
        style={{
          ...stylesScreen.searchInput,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 20,
        }}
      />
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
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
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
  activityIndicator: {
    height: 100,
  },
  searchInput: {
    position: 'absolute',
    zIndex: 999,
  },
});
