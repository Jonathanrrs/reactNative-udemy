import React, {useState, useEffect, useRef} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';
// import {StackScreenProps} from '@react-navigation/stack';
// import {RootStackParams} from '../navigator/Navigator';

interface Props {
  pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  /* para que no haya problemas cuando el componente no esté montado */
  const isMounted = useRef(true);
  const navigation = useNavigation();

  const getColorBG = async () => {
    const result = await ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
      cache: true,
      key: 'unique_key',
    });
    if (!isMounted.current) {
      return;
    }
    result.platform === 'ios'
      ? setBgColor(result.background || 'grey')
      : setBgColor(result.dominant || 'grey');
  };

  useEffect(() => {
    getColorBG();

    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate(
          'PokemonScreen' as never,
          {
            simplePokemon: pokemon,
            color: bgColor,
          } as never,
        )
      }>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        {/* nombre pokemon y ID */}
        <View>
          <Text style={styles.name}>
            {/* para que de un salto de linea */}
            {pokemon.name} {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.5,
    overflow: 'hidden',
  },
});
