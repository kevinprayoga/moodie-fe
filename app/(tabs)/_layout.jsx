import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import React from 'react'

import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon} 
                resizeMode='contain' 
                className="w-6 h-6" 
            />
            <Text className={`${focused ? 'font-semibold' : 'font-regular'} text-xs text-white`}>{ name }</Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: 'black' },
                tabBarActiveTintColor: "#FFA001",
            }} 
        >
            <Tabs.Screen 
                name='home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.logo}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name='hospital'
                options={{
                    title: 'Hospital',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.hospital}
                            color={color}
                            name="Hospital"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name='chart'
                options={{
                    title: 'Chart',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.chart}
                            color={color}
                            name="Chart"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name='chat'
                options={{
                    title: 'Chat',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.chat}
                            color={color}
                            name="Chat"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name='forum'
                options={{
                    title: 'Forum',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.forum}
                            color={color}
                            name="Forum"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout