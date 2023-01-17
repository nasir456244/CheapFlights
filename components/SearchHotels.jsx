import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function SearchHotels() {
    const navigation = useNavigation()

    const options = [
        {
            id: '123',
            title: '1 room, 2 guests',
            icon: 'ionicons',
            name: 'person-outline'
        },
        {
            id: '456',
            title: 'Aparthotel',
            icon: 'material',
            name: 'apartment'
        },
    ]
  return (
    <ScrollView>
      <View className="w-[55vw] flex-row justify-between p-3 mb-5  ">
        <Icon name='chevron-back-outline' type='ionicon' size={30} onPress={() => navigation.navigate("Main")} />
        <Text className="font-semibold">Stays</Text>
      </View>

        <View className="items-center justify-center p-2 gap-1 mt-7">
            <TouchableOpacity onPress={() => navigation.navigate("ModalScreen")} className="bg-gray-200 w-[90%] p-4 flex-row items-center rounded-[7px]">
                <Icon name='bed' type='font-awesome-5' />
                <Text className="ml-4 text-[12px]">Brisbane (BNE), QLD, Australia</Text>
            </TouchableOpacity>
        </View>

        <View className="items-center justify-center p-2 gap-1">
            <TouchableOpacity onPress={() => navigation.navigate("CalenderScreen")} className="bg-gray-200 w-[90%] p-4 flex-row items-center rounded-[7px]">
                <Icon type='fontisto' name='date' />
                <Text className="ml-4 text-[12px]">Sun, 1 jan - Sun, 8 jan</Text>
            </TouchableOpacity>
        </View>
        

            <Text className="ml-6 mb-4 mt-10">Options</Text>
            {options?.map((item) => (
                <View key={item?.id} className="p-2 flex justify-center ml-4">
                    <View className="border-2 border-gray-300 rounded-[10px] flex-row items-center w-[200px] h-[50px]">
                        <Icon className="ml-2" name={item?.name} type={item?.type} />
                        <Text className="ml-3">
                            {item?.title}
                        </Text>
                    </View>
                </View>
            ))}

            <TouchableOpacity onPress={() => navigation.navigate("AllHotelsScreen")} className="mt-20 w-[80%] bg-[#FFD700] p-5 rounded-[10px] items-center justify-center mx-auto mb-10">
                <Text className="font-bold">Search Stays</Text>
            </TouchableOpacity>

    


    </ScrollView>
  )
}