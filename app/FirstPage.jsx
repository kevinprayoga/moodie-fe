import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";
import { useNavigation, NavigationContainer } from "@react-navigation/native";

export default function FirstPage() {
  const nav = useNavigation();

  const goToSignIn = () => {
    nav.push("Sign In");
  };

  const goToSignUp = () => {
    nav.push("Sign Up");
  };

  return (
    <View className="flex items-center py-56">
      <Image 
        source={icons.logo}
        className="w-40 h-40"
      />
      <View className="m-8 ">
        <Text className="font-h font-bold text-4xl text-center">Moodie</Text>
        <Text className="font-p text-gray-500 text-lg text-center">Your Mood. Your Music.</Text>
        <TouchableOpacity onPress={goToSignIn} className="p-4 bg-slate-500 rounded-full mt-20 px-32">
          <Text className="text-white text-center text-lg">Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSignUp} className="p-4 rounded-full mt-4">
          <Text className="text-black text-center text-lg font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}