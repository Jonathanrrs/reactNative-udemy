import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={stylesScreen.containerButtons}>
        <TouchableOpacity
          onPress={setLightTheme}
          style={[stylesScreen.touchable, {backgroundColor: colors.primary}]}
          activeOpacity={0.8}>
          <Text style={stylesScreen.text}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setDarkTheme}
          style={[stylesScreen.touchable, {backgroundColor: colors.primary}]}
          activeOpacity={0.8}>
          <Text style={stylesScreen.text}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  touchable: {
    // backgroundColor: '#5856D6',
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
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
