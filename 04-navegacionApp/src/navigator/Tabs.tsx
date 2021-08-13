import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}


const BottomAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'analytics-outline'
              break;
            case 'TopTabNavigator':
              iconName = 'albums-outline'
              break;
            case 'StackNavigator':
              iconName = 'home-outline'
              break;

          }

          // return <Text style={{ color }}>{iconName}</Text>
          return <Icon name={iconName} size={20} color={color} />
        }
      })}
      
    >
      <BottomAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator

      sceneContainerStyle={{
        backgroundColor: 'white'
      }}

      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },

        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'Tab2Screen':
              iconName = 'T2'
              break;
            case 'StackNavigator':
              iconName = 'St'
              break;

          }

          return <Text style={{ color }}>{iconName}</Text>
        }

      })}>
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1' , tabBarIcon: (props) => <Text style={{color: props.focused}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}