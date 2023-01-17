import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Input({text, screen}) {
  const navigation = useNavigation();

  return (
    <View className="items-center justify-center mt-7">
      <TouchableOpacity 
        onPress={() => navigation.navigate(screen)}
        className="bg-gray-200 w-[85%] rounded-[10px] p-4 flex-row items-center">
        <Icon name="magnifying-glass" type="entypo" size={28} className="mr-3" />
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}