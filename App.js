import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import FirstPage from "./app/FirstPage";
import SignIn from "./app/Auth/SignIn";
import SignUp from "./app/Auth/SignUp";
import Home from "./app/Tab/Home";
import TabNavigation from "./app/Navigation/TabNavigation";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Back" 
          component={FirstPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sign In" 
          component={SignIn} 
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Sign Up" 
          component={SignUp} 
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Tab" 
          component={TabNavigation} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
