import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { icons } from "../../constants";

// import auth from "@react-native-firebase/auth";
// import db from "@react-native-firebase/database";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const nav = useNavigation();

  // const onAuthStateChanged = (user) => {
  //   setTimeout(() => {
  //     if (user) {
  //       nav.replace("Home");
  //     } else {
  //       nav.replace("Sign In");
  //     }
  //   }, 1000); 
  // }

  // useEffect(() => {
  //   const sub = auth().onAuthStateChanged(onAuthStateChanged);
  //   return sub;
  // }, []);

  // const goToMainFlow = async() => {
  //   if (email && password) {
  //     try {
  //       const response = await auth().signInWithEmailAndPassword(
  //         email, 
  //         password
  //       );

  //       if (response.user) {
  //         nav.replace("Home");
  //       }
  //     } catch {
  //       Alert.alert("Error", "Failed to login and try again!");
  //     }
  //   }
  // };

  const goToMainFlow = () => {
    nav.push("Tab");
  }

  return (
    <Pressable className="flex bg-white h-screen" onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex bg-white">
        <View className="px-9 mt-10">
          <Text className="font-h text-2xl font-bold">Please Sign In</Text>
        </View>
        <View className="px-9 mt-2">
          <Text className="font-p text-base font-normal text-slate-500">Please Sign In to your account!</Text>
        </View>
        <View className="flex mt-10 px-14">
          <View className="bg-slate-100 rounded-lg py-4">
            <TextInput 
              className="font-p text-lg px-5 text-slate-500 items-center"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              inputMode="email"
            />
          </View>
          <View className="bg-slate-100 rounded-lg py-4 mt-6">
            <TextInput 
              className="font-p text-lg px-5 text-slate-500 items-center"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={goToMainFlow} className="bg-orange-500 rounded-lg py-4 mt-6 shadow-md">
            <Text className="font-p text-lg font-bold text-white text-center">Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};