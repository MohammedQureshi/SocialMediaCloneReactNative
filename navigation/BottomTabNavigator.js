import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../components/HomePage';
import {MessagePage} from '../components/MessagePage';
import {NotificationPage} from '../components/NotificationPage';
import {SearchPage} from '../components/SearchPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="SearchPage" component={SearchPage} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="NotificationPage" component={NotificationPage} options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="MessagePage" component={MessagePage} options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <Feather name="mail" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
  );
}


export const BottomTabNavigator = () => (
    <NavigationContainer>
        <Navigator />
    </NavigationContainer>
);
