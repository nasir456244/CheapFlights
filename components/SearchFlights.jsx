import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectDestination, selectFromDate, selectOrigin, selectToDate } from '../slices/flightSlice'

export default function SearchFlights() {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const fromDate = useSelector(selectFromDate)
    const toDate = useSelector(selectToDate)

    const options = [
        {
            id: '123',
            title: '1 traveler',
            icon: 'ionicons',
            name: 'person-outline'
        },
        {
            id: '456',
            title: 'Economy',
            icon: 'material',
            name: 'airline-seat-recline-extra'
        },
        {
            id: '789',
            title: 'Any stops',
            icon: 'material',
            name: 'multiple-stop'
        }
    ]
  return (
    <ScrollView>
      <View className="w-[55vw] flex-row justify-between p-3 mb-5  ">
        <Icon name='chevron-back-outline' type='ionicon' size={30} onPress={() => navigation.navigate("Main")} />
        <Text className="font-semibold">Flights</Text>
      </View>
      <View className="w-full flex-row justify-around border-b-2 border-gray-200">
        <View className="border-b-2 bordr-black w-40 items-center">
            <Text className="font-semibold">Return</Text>
        </View>

        <View className=" w-40 items-center">
            <Text className="font-semibold">One-way</Text>
        </View>

        <View className="w-40 items-center">
            <Text className="font-semibold">Multi-city</Text>
        </View>

      </View>
        <View className="items-center justify-center p-2 relative gap-1 mt-7">
            <TouchableOpacity onPress={() => navigation.navigate("ModalScreen")} className="bg-gray-200 w-[90%] p-4 flex-row items-center rounded-[7px]">
                <Icon name='plane-departure' type='font-awesome-5' />
                <Text className={`ml-4 text-[12px] ${ origin ? 'text-black' : 'text-gray-500'}`}>{origin ? origin?.name : 'Brisbane (BNE), QLD, Australia'}</Text>
            </TouchableOpacity>
            <View className="absolute w-[90%] items-end z-10">
                <View className="bg-gray-200 border-2 border-white rounded-[10px] p-2 w-11 items-center">
                    <Icon name='arrows-alt-v' type='font-awesome-5' />
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("ModalScreen")} className="bg-gray-200 w-[90%] p-4 flex-row items-center rounded-[7px]">
                <Icon type='font-awesome-5' name='plane-arrival' />
                <Text className={`ml-4 text-[12px] ${ destination ? 'text-black' : 'text-gray-500'}`}>{destination ? destination?.name : 'Frankfurt am Main (FRA), Germany'}</Text>
            </TouchableOpacity>
        </View>

        <View className="items-center justify-center p-2 gap-1">
            <TouchableOpacity onPress={() => navigation.navigate("CalenderScreen")} className="bg-gray-200 w-[90%] p-4 flex-row items-center rounded-[7px]">
                <Icon type='fontisto' name='date' />
                <Text className={`ml-4 text-[12px] ${ fromDate && toDate ? 'text-black' : 'text-gray-500'}`}>{fromDate && toDate ? new Date(fromDate).toLocaleDateString('en',{weekday: 'short', day: 'numeric', month: 'short'}) + ' - ' + new Date(toDate).toLocaleDateString('en',{weekday: 'short', day: 'numeric', month: 'short'}) : 'Sun, 1 jan - Sun, 8 jan'}</Text>
            </TouchableOpacity>
        </View>
        

            <Text className="ml-6 mb-4">Options</Text>
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

            <TouchableOpacity disabled={!origin || !destination || !fromDate || !toDate} onPress={() => navigation.navigate("AllFlightsScreen")} className={`mt-20 w-[80%] ${!origin || !destination || !fromDate || !toDate ? 'bg-gray-300' : 'bg-[#FFD700]'} p-5 rounded-[10px] items-center justify-center mx-auto mb-10`}>
                <Text className="font-bold">Search Flights</Text>
            </TouchableOpacity>

    


    </ScrollView>
  )
}