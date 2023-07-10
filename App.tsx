import React from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main";
import News from "./screens/News";
import RecipieDetail from "./screens/RecipieDetail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
          height: 65,
          paddingBottom: 15,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Main"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Entypo
              name="home"
              size={focused ? 25 : 20}
              color={focused ? "white" : "grey"}
            />
          ),
        }}
        component={Main}
      />
      <Tab.Screen
        name="News"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="newspaper-variant"
              size={focused ? 25 : 20}
              color={focused ? "white" : "grey"}
            />
          ),
        }}
        component={News}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Root">
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen
          name="Detail"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#181818",
              shadowColor: "transparent",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              }
          }}
          component={RecipieDetail}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
