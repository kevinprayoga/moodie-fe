import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { icons } from '../constants'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={icons.logo} className='w-36 h-36 my-3'/>
      <Text className="text-3xl font-bold">Welcome to Moodie!</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{color:'blue'}}>Go To home</Link>
    </View>

    // <SafeAreaView className="bg-black h-full">

    // </SafeAreaView>
  );
}