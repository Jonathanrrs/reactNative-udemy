import React, {useEffect, useState} from 'react';
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
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(poke =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      /* mas eficiente un find porque se sale una vez lo encuentra */
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

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
        onDebounce={value => setTerm(value)}
      />
      <FlatList
        data={pokemonFiltered}
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
            {term}
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
