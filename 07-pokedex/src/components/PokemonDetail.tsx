import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetail = ({pokemon}: Props) => {
  return (
    <ScrollView style={{...StyleSheet.absoluteFillObject}}>
      {/* types */}
      <View style={{...styles.container}}>
        <Text style={styles.title}>Types</Text>
        <View style={styles.typesContainer}>
          {pokemon.types.map(({type}) => (
            <Text style={styles.regularText} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
      </View>
      {/* sprites */}
      <View style={styles.containerSprites}>
        <Text style={styles.title}>Sprites</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    marginHorizontal: 20,
    marginTop: 370,
  },
  regularText: {
    fontSize: 19,
    color: 'black',
    marginRight: 10,
  },
  typesContainer: {
    flexDirection: 'row',
  },
  containerSprites: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});
