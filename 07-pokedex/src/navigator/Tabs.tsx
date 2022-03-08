import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1} from './Tab1';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2Screen} from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.container}
      screenOptions={{
        tabBarActiveTintColor: '#5856D5',
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255, 0.92)',
          height: Platform.OS === 'ios' ? 80 : 60,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="MainScreen"
        component={Tab1}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
