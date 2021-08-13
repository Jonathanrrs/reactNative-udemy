import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top} = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={ ({route}) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },
                tabBarStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                      case 'Chat':
                        iconName = 'analytics-outline'
                        break;
                      case 'Contacts':
                        iconName = 'albums-outline'
                        break;
                      case 'Albums':
                        iconName = 'home-outline'
                        break;
          
                    }
          
                    // return <Text style={{ color }}>{iconName}</Text>
                    return <Icon name={iconName} size={20} color={color} />
                  }
                
            })}
        >
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
          <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
      );
}
