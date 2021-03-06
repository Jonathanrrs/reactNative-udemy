import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

// const SettingsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="SettingsScreen"
//         component={SettingsScreen}
//       />
//     </Stack.Navigator>
//   )
// }

export const MenuLateral = () => {

  const { width } = useWindowDimensions();


  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front'
      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      {/* parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
        }}
          style={styles.avatar}
        />
      </View>

      {/* opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity

          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name='analytics-outline' size={23} />
          <Text style={styles.menuTexto}> Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity

          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Icon name='cog-outline' size={23} />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}