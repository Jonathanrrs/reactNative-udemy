import React from 'react';
import {SectionList, StyleSheet, View, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

export const CustomSectionListScreen = () => {
  return (
    <View style={[styles.globalMargin, stylesScreen.container]}>
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        /* para animacion en Android */
        stickySectionHeadersEnabled={true}
        /* nombre de las secciones */
        renderSectionHeader={({section}) => (
          /* este view es para que al hacer scroll en IOS no se vea mal */
          <View style={stylesScreen.sectionHeader}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
      />
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: 'white',
  },
});
