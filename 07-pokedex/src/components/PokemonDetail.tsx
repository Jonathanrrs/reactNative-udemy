import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetail = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{...StyleSheet.absoluteFillObject}}>
      {/* types y peso */}
      <View style={styles.containerTypeWeight}>
        <Text style={styles.title}>Types</Text>
        <View style={styles.typesContainer}>
          {pokemon.types.map(({type}) => (
            <Text style={styles.regularText} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        {/* peso */}
        <Text style={styles.title}>Peso</Text>
        <Text style={styles.regularText}>{pokemon.weight}kg</Text>
      </View>
      {/* sprites */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>

      {/* habilidades */}
      <View style={styles.container}>
        <Text style={styles.title}>Habilidades base</Text>
        <View style={styles.typesContainer}>
          {pokemon.abilities.map(({ability}) => (
            <Text style={styles.regularText} key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      {/* movimientos */}
      <View style={styles.container}>
        <Text style={styles.title}>Movimientos</Text>
        <View style={styles.moves}>
          {pokemon.moves.map(({move}) => (
            <Text style={styles.regularText} key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  containerTypeWeight: {
    marginTop: 370,
    marginHorizontal: 20,
  },
  container: {
    marginHorizontal: 20,
    // marginTop: 370,
  },
  regularText: {
    fontSize: 19,
    color: 'black',
    marginRight: 10,
  },
  typesContainer: {
    flexDirection: 'row',
  },
  basicSprite: {
    height: 100,
    width: 100,
  },
  moves: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
