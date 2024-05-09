import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
// import { useFonts } from 'expo-font;'

SplashScreen.preventAutoHideAsync

export default function RootLayout() {
    // const [fontsLoaded, error] = useFonts({
    //     "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    // })
    const [fontsLoaded, error] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
        MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
      });

    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null;
    
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: true}} />
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        </Stack>
    )
}