import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {setDarkTheme} = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity
        onPress={setDarkTheme}
        style={stylesScreen.touchable}
        activeOpacity={0.8}>
        <Text style={stylesScreen.text}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  touchable: {
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 30,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
});
