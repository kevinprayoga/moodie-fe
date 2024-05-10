import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Tab/Home";
import Hospital from "../Tab/Hospital";
import Chart from "../Tab/Chart";
import Chat from "../Tab/Chat";
import Forum from "../Tab/Forum";

import { icons } from "../../constants";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#000",
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{color: color, fontSize:12, marginBottom:3}} >Home</Text>
          ),
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Hospital"
        component={Hospital}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{color: color, fontSize:12, marginBottom:3}} >Hospital</Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="hospital-alt" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{color: color, fontSize:12, marginBottom:3}} >Chart</Text>
          ),
          tabBarIcon: ({color, size}) => (
            <Feather name="bar-chart" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{color: color, fontSize:12, marginBottom:3}} >Chat</Text>
          ),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbox-ellipses-sharp" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          tabBarLabel: ({color}) => (
            <Text style={{color: color, fontSize:12, marginBottom:3}} >Forum</Text>
          ),
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="forum" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}