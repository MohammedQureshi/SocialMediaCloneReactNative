import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {HomePage} from '../screens/HomePage';
import {MessagePage} from '../screens/MessagePage';
import {NotificationPage} from '../screens/NotificationPage';
import {SearchPage} from '../screens/SearchPage';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const MessageStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainTabScreen = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="SearchPage" component={SearchStackScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="NotificationPage" component={NotificationStackScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Icon name="notifications-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="MessagePage" component={MessageStackScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Feather name="mail" color={color} size={size} />
        ),
      }} />
  </Tab.Navigator>
  )
}

const HomeStackScreen =({navigation}) => (
  <HomeStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#FFFFFF'}, headerTintColor: '#1DA1F3', headerTitleStyle: { fontWeight: 'bold', textAlign:'center', alignSelf:'center' }}}>
    <HomeStack.Screen name="Home" component={HomePage} options={{
      headerLeft: () => (
        <Icon.Button name="menu" size={25} backgroundColor='#FFFFFF' color='#209FEC' onPress={() => {navigation.openDrawer()}} />
      ),
      headerRight: () => {
        <View>
          <Icon.Button name="menu" size={25} backgroundColor='#FFFFFF' color='#209FEC' onPress={() => {navigation.openDrawer()}} />
          <Icon.Button name="menu" size={25} backgroundColor='#FFFFFF' color='#209FEC' onPress={() => {navigation.openDrawer()}} />
          <Icon.Button name="menu" size={25} backgroundColor='#FFFFFF' color='#209FEC' onPress={() => {navigation.openDrawer()}} />
        </View>
      }
    }} />
  </HomeStack.Navigator> 
);

const SearchStackScreen =({navigation}) => (
  <SearchStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#FFFFFF'}, headerTintColor: '#1DA1F3', headerTitleStyle: { fontWeight: 'bold',textAlign:'center', alignSelf:'center',flex:1, marginRight: 65 }}}>
    <SearchStack.Screen name="Search" component={SearchPage} options={{
      headerLeft: () => (
        <Icon.Button name="menu" size={25} backgroundColor='#FFFFFF' color='#209FEC' onPress={() => {navigation.openDrawer()}} />
      ),
      headerRight: () => {
        <Icon.Button name="menu" size={25} backgroundColor='#FFFFFF' color='#209FEC' onPress={() => {navigation.openDrawer()}} />
      }
    }} />
  </SearchStack.Navigator> 
  );

const MessageStackScreen =({navigation}) => (
<MessageStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#009387'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',textAlign:'center', alignSelf:'center',flex:1, marginRight: 65 }}}>
  <MessageStack.Screen name="Message" component={MessagePage} options={{
    headerLeft: () => (
      <Icon.Button name="menu" size={25} backgroundColor='#FFFFFF' color='#209FEC' onPress={() => {navigation.openDrawer()}} />
    )
  }} />
</MessageStack.Navigator> 
);

const NotificationStackScreen =({navigation}) => (
  <NotificationStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#009387'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',textAlign:'center', alignSelf:'center',flex:1, marginRight: 65 }}}>
    <NotificationStack.Screen name="Notification" component={NotificationPage} options={{
      headerLeft: () => (
        <Icon.Button name="menu" size={25} backgroundColor='#FFFFFF' color='#209FEC' onPress={() => {navigation.openDrawer()}} />
      )
    }} />
  </NotificationStack.Navigator> 
  );
