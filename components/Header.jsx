import React from 'react'
import { SafeAreaView, Text, View } from "react-native";
import { Icon } from "react-native-elements";


export default function Header() {
  return (
    <SafeAreaView className="flex-row justify-between bg-white">
        <View className="p-3">
          <Text className="font-bold text-xl">Hey, Ayub</Text>
          <Text className="text-md">Where to next?</Text>
        </View>
        <View className="flex-row gap-4 mr-3 justify-around items-center">
          <Icon name="bell" type="font-awesome-5" />
          <View className="bg-yellow-300/50 w-10 h-10 items-center justify-center rounded-full"><Text>A</Text></View>
        </View>
      </SafeAreaView>
  )
}