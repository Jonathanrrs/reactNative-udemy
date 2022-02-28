import React from 'react';
import {SectionList, StyleSheet, View, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
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
        /* para que tenga un titulo el screen */
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        /* footer de la lista */
        ListFooterComponent={() => (
          <View style={stylesScreen.footerSection}>
            <HeaderTitle title={'Total de casas ' + casas.length} />
          </View>
        )}
        /* para animacion en Android */
        stickySectionHeadersEnabled={true}
        /* nombre de las secciones */
        renderSectionHeader={({section}) => (
          /* este view es para que al hacer scroll en IOS no se vea mal */
          <View style={stylesScreen.sectionHeader}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        /* footer para cada sección */
        renderSectionFooter={({section}) => (
          <HeaderTitle title={'Total: ' + section.data.length} />
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        /* no mostrar el scroll */
        showsVerticalScrollIndicator={false}
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
  footerSection: {
    marginBottom: 10,
  },
});
