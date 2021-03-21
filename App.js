import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Stack =createStackNavigator();
const Tab=createBottomTabNavigator()
import Home from "./Screens/Home";
export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="food"
      tabBarOptions={{
        activeTintColor:"#841548"
      }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel:"Home",
            tabBarIcon:({color, size})=>(
              <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
              />
            )
          }}
        />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

function HomeStack(){
  return(
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle:{backgroundColor:"#841548"},
      headerTintColor:'#fff',
      headerTitleStyle:{fontWeight:"bold"}
    }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{tilte:"Home Page"}}
      />

  </Stack.Navigator>
  )
}
const styles = StyleSheet.create({
  
})
